import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { ShippingMode } from '@/utils/types'

// const name = 'state';

const ModeInput = ({
  defaultValue,
  name,
}: {
  defaultValue?: string
  name: string
}) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Shipping Mode
      </Label>
      <Select required name={name}>
        <SelectTrigger id={name}>
          <SelectValue placeholder='Select your desired shipping mode ' />
        </SelectTrigger>
        <SelectContent>
          {Object.values(ShippingMode).map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
export default ModeInput
