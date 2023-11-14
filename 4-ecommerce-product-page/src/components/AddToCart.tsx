import Cart from 'images/icon-cart.svg?react';

interface IAddToCartProps {
	count: number;
	setCount: (n: number) => void;
}

const AddToCart = ({ count, setCount }: IAddToCartProps) => {
	return (
		<button
			className='button'
			onClick={() => setCount(count + 1)}>
			<Cart className='fill-white' />
			<span className='text-white font-bold'>Add to cart</span>
		</button>
	);
};
export default AddToCart;
