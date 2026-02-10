import { cn } from '@/lib/utils';
import SectionTitle from '@/components/global/SectionTitle';

const HowItWorks = () => {
  return (
    <section className='w-full'>
      <div className='mx-auto flex max-w-3xl flex-col justify-center  md:text-center'>
        <SectionTitle text='How it works:' />
        <h2 className='text-xl '>Below is a workflow to ship with us:</h2>
      </div>
      <div className='mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-2'>
        <div className='flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10'>
          <div className='flex gap-4 min-[960px]:max-w-md'>
            <div className='flex flex-col items-center justify-between gap-1'>
              <span className='h-20 shrink-0'></span>
              <span className='flex size-16 shrink-0 items-center justify-center rounded-full border font-bold text-2xl bg-primary'>
                1
              </span>
              <span className='h-20 w-[3px] shrink-0 bg-linear-to-b from-transparent to-primary opacity-70'></span>
            </div>
            <div className='flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4'>
              <h3 className='text-xl min-[960px]:text-2xl font-bold'>
                Check our Services
              </h3>
              <p className='text-sm text-muted-foreground min-[960px]:text-base'>
                Click on the button
                <span className='font-bold text-primary'> Our Services </span>
                to see the differents services that we provide, and in whitch
                states we provide such services
              </p>
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767502071/services_vgtphs.png'
            alt='placeholder'
            className='z-10 max-h-72 w-full rounded-xl border object-contain min-[960px]:aspect-video min-[960px]:w-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10'>
          <div className='flex gap-4 min-[960px]:max-w-md'>
            <div className='flex flex-col items-center justify-between gap-1'>
              <span className='h-20 shrink-0'></span>
              <span className='flex size-16 shrink-0 items-center justify-center rounded-full border font-bold text-2xl bg-primary'>
                2
              </span>
              <span className='h-20 w-[3px] shrink-0 bg-linear-to-b from-transparent to-primary opacity-70'></span>
            </div>
            <div className='flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4'>
              <h3 className='text-xl min-[960px]:text-2xl font-bold'>
                Choose the shipping mode.
              </h3>
              <p className='text-sm text-muted-foreground min-[960px]:text-base'>
                We provide two type of shipping: See container of Air Express
                presented in the page illustrated here, most importantly,
                remenber to ship
                <span className='font-bold text-primary'> only by sea </span>
                or <span className='font-bold text-primary'>
                  only by air
                </span>{' '}
                in a single package.
              </p>
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767502071/shippingMode_zqllq5.png'
            alt='placeholder'
            className='z-10 max-h-72 w-full rounded-xl border object-contain min-[960px]:aspect-video min-[960px]:w-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10'>
          <div className='flex gap-4 min-[960px]:max-w-md'>
            <div className='flex flex-col items-center justify-between gap-1'>
              <span className='h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70'></span>
              <span className='flex size-16 shrink-0 items-center justify-center rounded-full border font-bold text-2xl bg-primary'>
                3
              </span>
              <span className='h-20 shrink-0'></span>
            </div>
            <div className='flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4'>
              <h3 className='text-xl min-[960px]:text-2xl font-bold'>
                Pick your container.
              </h3>

              <p className='text-sm text-muted-foreground min-[960px]:text-base'>
                The products page you see is just an illustration of what you
                can send and does not represent a complete list of what you can
                send, but only an idea you can use to build your package.
              </p>
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767502070/container_l89qi1.png'
            alt='placeholder'
            className='z-10 max-h-72 w-full rounded-xl border object-contain min-[960px]:aspect-video min-[960px]:w-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10'>
          <div className='flex gap-4 min-[960px]:max-w-md'>
            <div className='flex flex-col items-center justify-between gap-1'>
              <span className='h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70'></span>
              <span className='flex size-16 shrink-0 items-center justify-center rounded-full border font-bold text-2xl bg-primary'>
                4
              </span>
              <span className='h-20 shrink-0'></span>
            </div>
            <div className='flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4'>
              <h3 className='text-xl min-[960px]:text-2xl font-bold'>
                Create your order
              </h3>

              <p className='text-sm text-muted-foreground min-[960px]:text-base'>
                Select your desire container or product to send, click on it and
                selct the desired quantity and add to your package. Make sure
                not to mix the two mode of shipping in the same package
              </p>
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767502069/orderCreation_zkr0vd.png'
            alt='placeholder'
            className='z-10 max-h-72 w-full rounded-xl border object-contain min-[960px]:aspect-video min-[960px]:w-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10'>
          <div className='flex gap-4 min-[960px]:max-w-md'>
            <div className='flex flex-col items-center justify-between gap-1'>
              <span className='h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70'></span>
              <span className='flex size-16 shrink-0 items-center justify-center rounded-full border font-bold text-2xl bg-primary'>
                5
              </span>
              <span className='h-20 shrink-0'></span>
            </div>
            <div className='flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4'>
              <h3 className='text-xl min-[960px]:text-2xl font-bold'>
                Submit Your order.
              </h3>

              <p className='text-sm text-muted-foreground min-[960px]:text-base'>
                When you are satisfied with your shipping package and the price,
                click on
                <span className='font-bold text-primary'> place order </span>
                to submit your package. But before, make sure that your package
                is made up of the same mode of shipping, eather
                <span className='font-bold text-primary'> only by sea </span>
                or <span className='font-bold text-primary'> only by air </span>
              </p>
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767502068/orderSubmission_bvkblj.png'
            alt='placeholder'
            className='z-10 max-h-72 w-full rounded-xl border object-contain min-[960px]:aspect-video min-[960px]:w-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10'>
          <div className='flex gap-4 min-[960px]:max-w-md'>
            <div className='flex flex-col items-center justify-between gap-1'>
              <span className='h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70'></span>
              <span className='flex size-16 shrink-0 items-center justify-center rounded-full border font-bold text-2xl bg-primary'>
                6
              </span>
              <span className='h-20 shrink-0'></span>
            </div>
            <div className='flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4'>
              <h3 className='text-xl min-[960px]:text-2xl font-bold'>
                Choose your pickup time.
              </h3>

              <p className='text-sm text-muted-foreground min-[960px]:text-base'>
                From your shipments pages, select the package you are ready to
                ship,
                <span className='font-bold text-primary'>
                  {' '}
                  pay at least the pick up price of $25 by zelle to crossroads
                  shipping phone number (913)-999-5401 or any other form of
                  payment, with the reference code as memo,
                </span>{' '}
                accurately fill out the pickup date form with the shipment
                reference code, name, phone number and choose the date of
                pickup.
                <br />
                <span className='font-bold'>
                  N.B. The pickup fee will be included in the shipping cost but
                  is not refundable in case you cancel your shipment.
                </span>
              </p>
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767502068/pickupTime_fpfa7e.png'
            alt='placeholder'
            className='z-10 max-h-72 w-full rounded-xl border object-contain min-[960px]:aspect-video min-[960px]:w-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
