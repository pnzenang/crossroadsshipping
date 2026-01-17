import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type FormSelectProps = {
  name: string
  type: string
  label?: string
  items: string[]
  placeholder?: string
  defaultValue?: string
}

const FormSelect = (props: FormSelectProps) => {
  const { name, label, items, defaultValue, placeholder } = props
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='py-2 capitalize'>
        {label || name}
      </Label>
      <Select name={name} defaultValue={items[0]} required>
        <SelectTrigger id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => {
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
export default FormSelect
