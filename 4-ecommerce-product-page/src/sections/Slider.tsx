import { useState } from 'react';
import { useAppContext } from 'src/contexts/AppContext';
import SliderNavButton from 'src/components/SliderNavButton';

export default function App() {
	const [currentImageIndex, setCurrentImagesIndex] = useState<number>(0);
	const { products } = useAppContext();
	const currentProduct = products.find(product => product.id === 1);
	if (currentProduct) {
			return (
				<>
					<div className='relative h-[80vw] sm:hidden bg-red-100 overflow-hidden'>
						{currentProduct.images.map((image, index) => {
							let typeOfSlide = 'hidden';
							if (index === currentImageIndex) {
								typeOfSlide = 'translate-x-0';
							}
							if (index === currentImageIndex - 1 || (currentImageIndex === 0 && index === currentProduct.images.length - 1)) {
								typeOfSlide = '-translate-x-[100%]';
							}
							if (index === currentImageIndex + 1 || (currentImageIndex === currentProduct.images.length - 1 && index === 0)) {
								typeOfSlide = 'translate-x-[100%]';
							}

							return (
								<img
									src={image.img}
									className={`${typeOfSlide} absolute transition-transform`}
								/>
							);
						})}
						<SliderNavButton
							direction='prev'
							changeSlide={setCurrentImagesIndex}
							imageIndex={currentImageIndex}
							maxSlidesIndex={currentProduct.images.length - 1}
						/>
						<SliderNavButton
							direction='next'
							changeSlide={setCurrentImagesIndex}
							imageIndex={currentImageIndex}
							maxSlidesIndex={currentProduct.images.length - 1}
						/>
					</div>
				</>
			);
	}

}
