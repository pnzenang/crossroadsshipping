import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsContainer from '@/components/products/ProductsContainer';
import {
  createProductAction,
  fetchOrCreateCart,
  updateCart,
} from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect('/');
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);
  if (cartItems.length === 0)
    return <SectionTitle text='Your shipping package is empty at this time.' />;

  return (
    <section className='flex items-center flex-col'>
      <SectionTitle text='Shipping Package' />
      <div className='mt-8 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-6'>
          <CartItemsList cartItems={cartItems} />
        </div>

        <div className='lg:col-span-6'>
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </section>
  );
}
export default CartPage;
