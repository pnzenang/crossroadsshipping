import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import { Suspense } from 'react';
function Navbar() {
  return (
    <nav className='border-b fixed w-full  z-50 dark:bg-black bg-white'>
      <Container className='flex flex-row sm:flex-row justify-between sm:items-center flex-wrap py-8 gap-4 mx-auto'>
        <Logo />
        <Suspense>{/* <NavSearch /> */}</Suspense>
        <div className='flex gap-5 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
