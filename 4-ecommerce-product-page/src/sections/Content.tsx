import AddToCart from 'src/components/AddToCart';
import Counter from 'src/components/Counter';

const Content = () => {
	return (
		<section className='pt-6'>
			<h3 className='subtitle mb-5'>Sneaker Company</h3>
			<h2 className='title mb-4'>Fall Limited Edition Sneakers</h2>
			<p className='main-text mb-6'>
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can
				offer.
			</p>
			<div className='mb-6 flex justify-between items-center'>
				<div className='flex items-center gap-4'>
					<p className='price'>$125.00</p>
					<span className='px-2 py-1 text-orange bg-orange-pale font-bold rounded-md'>50%</span>
				</div>
				<p className='price-old'>$250.00</p>
			</div>
			<div>
				<Counter />
				<AddToCart />
			</div>
		</section>
	);
};
export default Content;
