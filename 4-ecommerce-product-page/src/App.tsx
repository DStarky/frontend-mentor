import { useState } from 'react';
import Header from 'src/sections/Header';
import Slider from './sections/Slider';
import Content from './sections/Content';
import { useAppContext } from 'src/contexts/AppContext';

const App = () => {
	const [isBackdropShow, setIsBackdropShow] = useState<boolean>(false);

	const { products } = useAppContext();
	const currentProduct = products.find(product => product.id === 1);

	return (
		<main className='relative'>
			<div className={`${isBackdropShow ? 'fixed' : 'hidden'} h-screen w-screen bg-backdrop animate-fade-in animate-fade-out top-0 left-0 z-20`}></div>
			<div className='container'>
				<Header setIsBackdropShow={setIsBackdropShow} />
			</div>
			{currentProduct && (
				<section>
					<Slider images={currentProduct.images}/>
					<div className='container'>
						<Content {...currentProduct} />
					</div>
				</section>
			)}
		</main>
	);
};
export default App;
