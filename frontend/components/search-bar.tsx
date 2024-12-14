import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const formSchema = z.object({
  searchQuery: z.string().min(1, { message: 'Restaurant name is required' }), // Ensure searchQuery is not empty
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: searchQuery || '',
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: '',
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 ${
          form.formState.errors.searchQuery && 'border-red-500'
        }`}
      >
        <Search strokeWidth={2.5} size={30} className="ml-1 text-orange-500 hidden md:block" />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl md:text-base focus-visible:ring-0"
                  placeholder={placeHolder}
                  spellCheck={false}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {form.formState.isDirty && (
          <Button onClick={handleReset} type="reset" variant="outline" className="text-base rounded-full">
            Reset
          </Button>
        )}

        <Button type="submit" className="rounded-full text-base text-white bg-orange-500 active:bg-black">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
