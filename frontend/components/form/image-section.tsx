import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useFormContext } from 'react-hook-form';

const ImageSection = () => {
  const { control, watch } = useFormContext();
  const existingImageUrl = watch('imageUrl');

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the search results. Adding a new image will
          overwrite the existing one.
        </FormDescription>
      </div>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <div className="relative w-full" style={{ paddingBottom: 'calc(100% / (16 / 9))' }}>
            <img src={existingImageUrl} className="rounded-md object-cover h-full w-full" alt="Existing Image" />
          </div>
        )}

        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Image</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
