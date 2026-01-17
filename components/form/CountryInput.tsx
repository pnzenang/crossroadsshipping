import { countries } from '@/utils/countries';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// const name = 'state';

const CountryInput = ({
  defaultValue,
  name,
}: {
  defaultValue?: string;
  name: string;
}) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Package Destination
      </Label>
      <Select required name={name}>
        <SelectTrigger id={name}>
          <SelectValue placeholder="Select package's Destination" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((item) => {
            return (
              <SelectItem
                key={item.countryAbbreviation}
                value={item.countryAbbreviation}
              >
                {item.countryName}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CountryInput;
