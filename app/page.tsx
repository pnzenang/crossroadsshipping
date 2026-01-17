import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import Hero2 from '@/components/home/Hero2';
import { Suspense } from 'react';
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
