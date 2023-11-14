import AddToCart from 'src/components/AddToCart';
import Counter from 'src/components/Counter';
import { Product } from 'src/types';

type IContentProps = Omit<Product, 'images'>

const Content = ({ name, description, currency, price, oldPrice}: IContentProps) => {
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
				<Counter />
				<AddToCart />
			</div>
		</section>
	);
};
export default Content;
