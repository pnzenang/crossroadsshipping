import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { link } from 'fs';

const Logo = () => {
  return (
    <>
      <Link href='/' className='hidden sm:block'>
        <Image
          src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1767726479/logo_cegabh.svg'
          width={180}
          height={70}
          alt='logo'
        ></Image>
      </Link>
      <Link href='/' className=' sm:hidden'>
        <Image
          src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1770615496/Favicon_yfb7wb.svg'
          width={75}
          height={50}
          alt='logo'
        ></Image>
      </Link>
    </>
  );
};
export default Logo;
