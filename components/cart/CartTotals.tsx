import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatCurrency } from '@/utils/format'
import { createOrderAction } from '@/utils/actions'
import FormContainer from '../form/FormContainer'
import { SubmitButton } from '../form/Buttons'
import { Cart } from '@prisma/client'
import FormInput from '../form/FormInput'
import TextAreaInput from '../form/TextAreaInput'
import StatesInput from '../form/StatesInput'
import CountryInput from '../form/CountryInput'
import { ShippingMode } from '@/utils/types'
import FormSelect from '../form/FormSelect'
import ModeInput from '../form/ModeInput'

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, pickupFee, tax, orderTotal } = cart
  return (
    <div>
      <Card className='p-8'>
        <CartTotalRow label='Subtotal' amount={cartTotal} />
        <CartTotalRow label='Pickup & handling fee' amount={pickupFee} />
        <CartTotalRow label='Tax' amount={tax} />
        <CardTitle className='mt-8'>
          <CartTotalRow label='Order Total' amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <Card className='mt-8'>
          <div className='m-8'>
            <div className='grid sm:grid-cols-2 gap-5'>
              <FormInput
                name={'packageStreetAddress'}
                type={'name'}
                label='package street address'
              />
              <FormInput
                name={'packageCity'}
                type={'name'}
                label='package city'
              />
            </div>
            <div className='grid sm:grid-cols-2 gap-5'>
              <StatesInput name={'packageState'} />
              <FormInput
                name={'packageZipCode'}
                type={'name'}
                label='package zip code'
              />
            </div>
            <div className='grid sm:grid-cols-2 gap-5'>
              <FormInput
                name={'senderNumber'}
                type={'name'}
                label='sender phone number'
              />
              <ModeInput name={'shippingMode'} />
            </div>
            <div>
              <TextAreaInput
                name={'packageDescription'}
                labelText='package Description'
              />
            </div>
          </div>
        </Card>
        <Card className='mt-8'>
          <div className='m-8'>
            <div className='grid sm:grid-cols-2 gap-5'>
              <FormInput
                name={'receiverName'}
                type={'name'}
                label='receiver name'
              />
              <CountryInput name={'receiverCountry'} />
            </div>
            <div className='grid sm:grid-cols-2 gap-5'>
              <FormInput
                name={'receiverCity'}
                type={'name'}
                label='receiver city'
              />
              <FormInput
                name={'receiverNumber'}
                type={'name'}
                label='receiver phone number'
              />
            </div>
          </div>
        </Card>
        <SubmitButton text='Place Order' className='w-full mt-8' />
      </FormContainer>
    </div>
  )
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string
  amount: number
  lastRow?: boolean
}) {
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className='my-2' />}
    </>
  )
}

export default CartTotals

// streetAddress      String
//   packageStreet      String
//   packageZipCode     String
//   packageDescription String
//   receiverName       String
//   receiverCountry    String
//   receiverCity       String
//   receiverNumber     String
