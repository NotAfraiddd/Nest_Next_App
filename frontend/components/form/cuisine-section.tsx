import { FormDescription, FormField, FormItem, FormMessage } from '../ui/form';
import { useFormContext } from 'react-hook-form';
import { CUISINE_LIST } from '@/constants';
import CuisineCheckbox from './cuisine-checkbox';

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>Select the cuisines that your restaurant serves</FormDescription>
      </div>

      {/* Cuisines Form Field */}
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {CUISINE_LIST.map((cuisineItem) => (
                <CuisineCheckbox key={cuisineItem} cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;
