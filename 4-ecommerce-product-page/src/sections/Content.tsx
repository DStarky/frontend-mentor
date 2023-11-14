import { useEffect, useState } from 'react';
import AddToCart from 'src/components/AddToCart';
import Counter from 'src/components/Counter';
import { useAppContext } from 'src/contexts/AppContext';
import { Product } from 'src/types';

type IContentProps = Omit<Product, 'images'>;

const Content = ({ name, description, currency, price, oldPrice, id }: IContentProps) => {
	const { cart, updateCart } = useAppContext();
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		const currentProduct = cart.find(product => product.id === id);
		if (currentProduct) {
			setCount(currentProduct.count);
		} else {
			setCount(0);
		};
	}, [cart]);

	useEffect(() => {
		if (count > 0) {
			const currentProduct = cart.find(product => product.id === id);

			if (currentProduct) {
				currentProduct.count = count;
				updateCart([...cart]);
			} else {
				const newProduct = { id: id, count: count };
				updateCart([...cart, newProduct]);
			}
		} else {
			updateCart(cart.filter(product => product.id !== id));
		}
	}, [count]);

	return (
		<section className='pt-6'>
			<h3 className='subtitle mb-5'>Sneaker Company</h3>
			<h2 className='title mb-4'>{name}</h2>
			<p className='main-text mb-6'>{description}</p>
			<div className='mb-6 flex justify-between items-center'>
				<div className='flex items-center gap-4'>
					<p className='price'>
						{currency}
						{price.toFixed(2)}
					</p>
					<span className='px-2 py-1 text-orange bg-orange-pale font-bold rounded-md'>50%</span>
				</div>
				<p className='price-old'>
					{currency}
					{oldPrice.toFixed(2)}
				</p>
			</div>
			<div>
				<Counter
					count={count}
					setCount={setCount}
				/>
				<AddToCart
					count={count}
					setCount={setCount}
				/>
			</div>
		</section>
	);
};
export default Content;
