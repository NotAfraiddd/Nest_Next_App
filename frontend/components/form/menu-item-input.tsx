import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col sm:flex-row items-end gap-2 sm:gap-4">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel className="flex items-center gap-1">
              Name
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="Cheese Pizza" className="bg-white" required />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel className="flex items-center gap-1">
              Price (£)
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="8.00" type="number" step="0.01" className="bg-white" required />
            </FormControl>
          </FormItem>
        )}
      />

      <Button type="button" onClick={removeMenuItem} className="bg-red-500 text-white max-h-fit sm:ml-2">
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
