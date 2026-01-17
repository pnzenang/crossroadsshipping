import { ArrowRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import SectionTitle from '@/components/global/SectionTitle';

type BlogCard = {
  img: string;
  alt: string;
  title: string;
  description: string;
  blogLink: string;
}[];

const Blog = ({ blogCards }: { blogCards: BlogCard }) => {
  return (
    <section className='pt-8 sm:pt-16 lg:pt-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <SectionTitle text='About Crossroads shipping.' />
          <p className='text-muted-foreground text-xl'>
            Explore the immense way this busisness can fit your daily life .
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {blogCards.map((item, index) => (
            <Card
              className='pt-0 shadow-none max-lg:last:col-span-full'
              key={index}
            >
              <CardContent className='px-0'>
                <img
                  src={item.img}
                  alt={item.alt}
                  className='aspect-video h-60 w-full rounded-t-xl object-cover'
                />
              </CardContent>
              <CardHeader className='mb-2 gap-3'>
                <CardTitle className='text-xl'>
                  <a href={item.blogLink}>{item.title}</a>
                </CardTitle>
                <CardDescription className='text-base'>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <h1 className='text-xl sm:text-3xl text-primary'>
                  Ask us how.
                </h1>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
