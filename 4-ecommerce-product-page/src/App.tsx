import { useState } from 'react';
import Header from 'src/sections/Header';
import Slider from './sections/Slider';
import Content from './sections/Content';
import { useAppContext } from 'src/contexts/AppContext';
import Images from './sections/Images';

const App = () => {
	const [isBackdropShow, setIsBackdropShow] = useState<boolean>(false);

	const { products } = useAppContext();
	const currentProduct = products.find(product => product.id === 1);

	return (
		<main className='relative pb-8'>
			<div className={`${isBackdropShow ? 'fixed' : 'hidden'} h-screen w-screen bg-backdrop animate-fade-in animate-fade-out top-0 left-0 z-20`}></div>
			<div className='container'>
				<Header setIsBackdropShow={setIsBackdropShow} />
			</div>
			{currentProduct && (
				<section className='flex max-lg:flex-col lg:container lg:gap-[50px] xl:gap-[125px] lg:items-center'>
					<div className='max-lg:container'>
						<Images images={currentProduct.images} />
					</div>
					<Slider images={currentProduct.images} />
					<div className='max-lg:container'>
						<Content {...currentProduct} />
					</div>
				</section>
			)}
		</main>
	);
};
export default App;
