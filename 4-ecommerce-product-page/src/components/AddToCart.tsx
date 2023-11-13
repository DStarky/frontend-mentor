import Cart from 'images/icon-cart.svg?react';
import { useAppContext } from 'src/contexts/AppContext';

const AddToCart = () => {
	const { productCount, setProductCount } = useAppContext();

	return (
		<button
			className='py-4 bg-orange w-full rounded-[10px] flex justify-center items-center gap-4 hover:bg-orange-hover transition-colors'
			onClick={() => setProductCount(productCount + 1)}>
			<Cart className='fill-white' />
			<span className='text-white font-bold'>Add to cart</span>
		</button>
	);
};
export default AddToCart;
