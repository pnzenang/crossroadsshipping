import { states } from '@/utils/states';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// const name = 'state';

const StatesInput = ({
  defaultValue,
  name,
}: {
  defaultValue?: string;
  name: string;
}) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Package State
      </Label>
      <Select required name={name}>
        <SelectTrigger id={name}>
          <SelectValue placeholder="Select package's State " />
        </SelectTrigger>
        <SelectContent>
          {states.map((item) => {
            return (
              <SelectItem
                key={item.stateAbbreviation}
                value={item.stateAbbreviation}
              >
                {item.stateName}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default StatesInput;
