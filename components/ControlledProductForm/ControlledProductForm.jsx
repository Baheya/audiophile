import { ProductForm } from '@components/ProductForm';
import { useStickyState } from 'hooks';

export function ControlledProductForm({ product }) {
  const [cart, setCart] = useStickyState([], 'cart');
  return <ProductForm product={product} cart={cart} setCart={setCart} />;
}
