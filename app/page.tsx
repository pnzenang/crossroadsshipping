import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import Hero2 from '@/components/home/Hero2';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
  title: 'crossroads shipping',
  description: 'A nifty way to ship your items to Africa',
};

function HomePage() {
  return (
    <section className='pt-32'>
      <Hero />

      {/* <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense> */}
    </section>
  );
}
export default HomePage;
