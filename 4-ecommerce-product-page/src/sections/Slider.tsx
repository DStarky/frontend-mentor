import { useState } from 'react';
import SliderNavButton from 'src/components/SliderNavButton';
import { images } from 'src/constants';

export default function App() {
	const [currentImageIndex, setCurrentImagesIndex] = useState<number>(0);

	return (
		<>
			<div className='relative h-[80vw] sm:hidden bg-red-100 overflow-hidden'>
				{images.map((image, index) => {
					let typeOfSlide = 'hidden';
					if (index === currentImageIndex) {
						typeOfSlide = 'translate-x-0';
					}
					if (index === currentImageIndex - 1 || (currentImageIndex === 0 && index === images.length - 1)) {
						typeOfSlide = '-translate-x-[100%]';
					}
					if (index === currentImageIndex + 1 || (currentImageIndex === images.length - 1 && index === 0)) {
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
					maxSlidesIndex={images.length - 1}
				/>
				<SliderNavButton
					direction='next'
					changeSlide={setCurrentImagesIndex}
					imageIndex={currentImageIndex}
					maxSlidesIndex={images.length - 1}
				/>
			</div>
		</>
	);
}
