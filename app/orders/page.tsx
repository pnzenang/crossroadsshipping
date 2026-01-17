import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import SectionTitle from '@/components/global/SectionTitle';
import { fetchUserOrders } from '@/utils/actions';
import { formatCurrency, formatDate } from '@/utils/format';
import { pickupStates } from '@/utils/pickUpStates';
import { Card } from '@/components/ui/card';

const TableStyle = {
  stateStyle: 'text-sm uppercase bg-primary py-4',
  dayStyle: 'text-[15px]',
  dayTitleStyle: 'text-secondary bg-primary text-sm',
};

async function OrdersPage() {
  const orders = await fetchUserOrders();

  return (
    <section className='pt-2 flex flex-col items-center '>
      <SectionTitle text='Your Shipments' />

      <Table className='mb-1'>
        <TableCaption>Total Orders : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow className='text-xs'>
            <TableHead className='text-primary'>Reference Code</TableHead>
            <TableHead className='text-primary'>Package Location</TableHead>
            <TableHead className='text-primary'>City</TableHead>
            <TableHead className='text-primary'>State</TableHead>
            <TableHead className='text-primary'>Zip Code</TableHead>
            <TableHead className='text-primary'>Order Total</TableHead>
            <TableHead className='text-primary'>Tax</TableHead>
            <TableHead className='text-primary'>Pickup and handling</TableHead>
            <TableHead className='text-primary'>Date Originated</TableHead>
            <TableHead className='text-primary'>Receiver </TableHead>
            <TableHead className='text-primary'>Telephone </TableHead>
            <TableHead className='text-primary'>City </TableHead>
            <TableHead className='text-primary'>Country </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const {
              products,
              orderTotal,
              tax,
              pickupFee,
              createdAt,
              packageStreetAddress,
              packageCity,
              packageState,
              packageZipCode,
              packageDescription,
              packageReferenceCode,
              receiverName,
              receiverCountry,
              receiverCity,
              receiverNumber,
              shippingMode,
            } = order;
            return (
              <TableRow key={order.id} className='text-xs'>
                <TableCell className='text-sm'>
                  {packageReferenceCode}
                </TableCell>
                <TableCell>{packageStreetAddress}</TableCell>
                <TableCell className='capitalize'>{packageCity}</TableCell>
                <TableCell>{packageState}</TableCell>
                <TableCell>{packageZipCode}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(pickupFee)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
                <TableCell>{receiverName}</TableCell>
                <TableCell>{receiverNumber}</TableCell>
                <TableCell>{receiverCity}</TableCell>
                <TableCell className='text-sm'>{receiverCountry}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className=' grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-9 '>
          <SectionTitle text='Pick Up time by State' />
          <div>
            <Table className='mb-10'>
              <TableHeader>
                <TableRow className='text-xs rounded-md'>
                  <TableHead className='text-primary bg-primary '></TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    MONDAY
                  </TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    TUESDAY
                  </TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    WEDNESDAY
                  </TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    THURSDAY
                  </TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    FRIDAY
                  </TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    SATURDAY
                  </TableHead>
                  <TableHead className={TableStyle.dayTitleStyle}>
                    SUNDAY
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pickupStates.map((item) => {
                  return (
                    <TableRow key={item.stateName}>
                      <TableCell className={TableStyle.stateStyle}>
                        {item.stateName}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.mondayPickupTime}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.tuesdayPickupTime}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.wednesdayPickupTime}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.thursdayPickupTime}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.fridayPickupTime}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.saturdayPickupTime}
                      </TableCell>
                      <TableCell className={TableStyle.dayStyle}>
                        {item.sundayPickupTime}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className='lg:col-span-3 h-800 mt-44 '>
          <iframe
            height={1075}
            id='JotFormIFrame-252665484672064'
            title='CHOOSE PICKUP DATE'
            allow='geolocation; microphone; camera; fullscreen; payment'
            src='https://form.jotform.com/252665484672064'
            className=''
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default OrdersPage;
