import { useEffect, useRef, useState } from 'react';
import { Product } from 'src/types';
import Close from 'images/icon-close.svg?react';
import SliderNavButton from 'src/components/SliderNavButton';

type IImagesProps = Pick<Product, 'images'> & {
	setIsBackdropShow: React.Dispatch<React.SetStateAction<boolean>>;
	isBackdropShow: boolean;
};

const Images = ({ images, setIsBackdropShow, isBackdropShow }: IImagesProps) => {
	const galleryRef = useRef<HTMLDivElement | null>(null);
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
	const [activeGalleryImageIndex, setGalleryActiveImageIndex] = useState<number>(0);
	const [isGalleryShow, setIsGalleryShow] = useState<boolean>(false);

	const openGalleryHandler = () => {
		setIsGalleryShow(true);
		setIsBackdropShow(true);
	};

	const closeGalleryHandler = () => {
		setIsGalleryShow(false);
		setIsBackdropShow(false);
	};

	return (
		<>
			<div
				className={`z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isGalleryShow ? 'fixed' : 'hidden'} animate-fade-in max-md:hidden `}
				ref={galleryRef}>
				<Close
					className='z-20 absolute right-0 fill-white cursor-pointer'
					onClick={() => closeGalleryHandler()}
				/>
				<div className='w-[550px] m-auto'>
					<div
						className=' my-8 rounded-[15px] overflow-hidden'
						onClick={openGalleryHandler}>
						<img src={images[activeGalleryImageIndex].img} />
					</div>
					<div className='flex justify-between max-w-[450px] m-auto'>
						{images.map((item, index) => {
							return (
								<div
									key={item.id}
									className={`w-[88px] h-[88px] rounded-[10px] overflow-hidden cursor-pointer relative ${
										index === activeGalleryImageIndex
											? 'after:content-[""] after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-50 after:z-50 after:top-0 after:left-0 ring-2 ring-orange'
											: ''
									} hover:ring-2 hover:ring-orange transition-all`}
									onClick={() => setGalleryActiveImageIndex(index)}>
									<img
										src={item.thumbnail}
										alt=''
									/>
								</div>
							);
						})}
					</div>
				</div>
				<SliderNavButton
					direction='prev'
					changeSlide={setGalleryActiveImageIndex}
					imageIndex={activeGalleryImageIndex}
					maxSlidesIndex={images.length - 1}
					env='gallery'
				/>
				<SliderNavButton
					direction='next'
					changeSlide={setGalleryActiveImageIndex}
					imageIndex={activeGalleryImageIndex}
					maxSlidesIndex={images.length - 1}
					env='gallery'
				/>
			</div>
			<div className='max-md:hidden mb-8'>
				<div className='w-[450px] m-auto'>
					<div
						className=' my-8 rounded-[15px] overflow-hidden'
						onClick={openGalleryHandler}>
						<img src={images[activeImageIndex].img} />
					</div>
					<div className='flex justify-between'>
						{images.map((item, index) => {
							return (
								<div
									key={item.id}
									className={`w-[88px] h-[88px] rounded-[10px] overflow-hidden cursor-pointer ${
										index === activeImageIndex ? 'opacity-25' : ''
									} hover:ring-2 hover:ring-orange transition-all`}
									onClick={() => setActiveImageIndex(index)}>
									<img
										src={item.thumbnail}
										alt=''
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default Images;
