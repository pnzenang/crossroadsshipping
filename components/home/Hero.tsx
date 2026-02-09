import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center  sm:pt-32'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are improving how shipping goods to Cameroon!
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          We have initiated the most participative way of doing groupage, if you
          can pack, we will pick up and ship if you live anywhere in a State we
          cover. <br />
          Also anybody can bring his or her little contribution and streamlining
          the services to lower the cost to the customers.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/services'>Our Services</Link>
          {/* <Link href='/products'>Our Services</Link> */}
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
