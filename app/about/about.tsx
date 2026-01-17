import Blog from '@/components/shadcn-studio/blocks/blog-component-01/About';

const blogCards = [
  {
    img: 'https://res.cloudinary.com/dp8tkb7hq/image/upload/v1768625502/shipping_ugdqkr.png',
    alt: 'Modern house',
    title: 'Crossroads shipping forwards packages from the USA to Africa.',
    description:
      'This is the first mission of crossroads shipping, and you can do everything from the confort of your house, and we will dispatch our driver to finish the job.',
    blogLink: '#',
  },
  {
    img: 'https://res.cloudinary.com/dp8tkb7hq/image/upload/v1768625500/purchasing_cltjow.jpg',
    alt: 'Traditional house',
    title: 'Crossroads shipping  is also a puchasing center.',
    description:
      'Crossroads shipping helps purchasing any allowed goods from anywhere, mostly from the USA, CANADA, MEXICO And CHINA  and ensure proper shipment.',
    blogLink: '#',
  },
  {
    img: 'https://res.cloudinary.com/dp8tkb7hq/image/upload/v1768625500/circular_odoeuh.jpg',
    alt: 'Modern house with pool',
    title: 'Crossroads shipping is open to everybody.',
    description:
      'We allow anybody willing to be part of this business to put their  expertise to work for Crossroads shipping, no matter your location.',
    blogLink: '#',
  },
];

const BlogPage = () => {
  return <Blog blogCards={blogCards} />;
};

export default BlogPage;
