import SectionTitle from '@/components/global/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <section className='py- '>
      <div className='container flex flex-col items-center  '>
        <SectionTitle text='our services' />
        <h2 className='mb-9 text-2xl  lg:mb-10 lg:text-3xl text-center'>
          We provide a door to door shipping service in two modes discribed
          below.
        </h2>

        <div className='grid gap-10 md:grid-cols-2  '>
          <Card>
            <CardContent className='p-4'>
              <Link href='/products' className=''>
                <img
                  src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1763621936/container_qegni2.webp'
                  alt='feature'
                  className='aspect-video max-h-96 w-full rounded-lg object-cover'
                />
                <p className='mb-2 mt-8 md:text-4xl font-bold text-primary'>
                  Sea Container
                </p>
                <p className='text-muted-foreground mb-4'>
                  Your package will travel to destination through sea vessels
                  between 6 to 8 weeks, and at destination we will take care of
                  the custom requirements
                  <span className='font-bold'> (except for cars)</span>, and
                  give you your package on the other side.
                </p>
                <p className='text-muted-foreground mb-4'>
                  Click on this card and select products marked
                  <span className='font-bold text-primary'>Only by Sea</span> to
                  send the package by Sea Contasiner.
                </p>
                <p className='font-semibold mb-4'>
                  Make sure not to mix both modes of shipping in one package,
                  your package will not be shipped
                </p>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-4'>
              <Link href='/products'>
                <img
                  src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1763621936/airCargo_mt8cui.jpg'
                  alt='feature'
                  className='aspect-video max-h-96 w-full rounded-lg object-cover'
                />
                <p className='mb-2 mt-8 md:text-4xl font-bold text-primary'>
                  Air Express
                </p>
                <p className='text-muted-foreground mb-4'>
                  Here, your package will travel to destination by cargo plane
                  and it will take between 5 to 10 days, and at destination, we
                  will take care of the custom and give you your package on the
                  other side.
                </p>
                <p className='text-muted-foreground mb-4'>
                  Click on this card and select products marked
                  <span className='font-bold text-primary'>Only by Air</span>
                  to send products by Air Express.
                </p>
                <p className='font-semibold mb-4'>
                  Make sure not to mix both modes of shipping in one package,
                  your package will not be shipped
                </p>
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-10 md:grid-cols-1 pt-10 '>
          <h2 className='mb-9 text-3xl font-semibold lg:mb-10 lg:text-4xl text-center'>
            <span className='text-primary'>Crossroads shipping map:</span> At
            this time, we provide services in the states colored in orange in
            the map below.
          </h2>
          <Card>
            <CardContent className='p-4'>
              <Link href='/products'>
                <img
                  src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767499756/CrossroadsMap_rwmkos.png'
                  alt='feature'
                  className='aspect-video max-h-120 w-full rounded-lg object-cover'
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
