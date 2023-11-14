import Cart from 'images/icon-cart.svg?react';
import { useAppContext } from 'src/contexts/AppContext';

const AddToCart = () => {
	const { productCount, setProductCount } = useAppContext();

	return (
		<button
			className='button'
			onClick={() => setProductCount(productCount + 1)}>
			<Cart className='fill-white' />
			<span className='text-white font-bold'>Add to cart</span>
		</button>
	);
};
export default AddToCart;
