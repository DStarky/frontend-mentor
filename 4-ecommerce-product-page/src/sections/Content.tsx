import AddToCart from 'src/components/AddToCart';
import Counter from 'src/components/Counter';
import { useAppContext } from 'src/contexts/AppContext';

const Content = () => {
	const { products } = useAppContext();
	const currentProduct = products.find(product => product.id === 1);
	if (currentProduct) {
		return (
			<section className='pt-6'>
				<h3 className='subtitle mb-5'>Sneaker Company</h3>
				<h2 className='title mb-4'>{currentProduct.name}</h2>
				<p className='main-text mb-6'>{currentProduct.description}</p>
				<div className='mb-6 flex justify-between items-center'>
					<div className='flex items-center gap-4'>
						<p className='price'>
							{currentProduct.currency}
							{currentProduct.price.toFixed(2)}
						</p>
						<span className='px-2 py-1 text-orange bg-orange-pale font-bold rounded-md'>50%</span>
					</div>
					<p className='price-old'>
						{currentProduct.currency}
						{currentProduct.oldPrice.toFixed(2)}
					</p>
				</div>
				<div>
					<Counter />
					<AddToCart />
				</div>
			</section>
		);
	} else {
		return <h1>This product does not exist</h1>;
	}
};
export default Content;
