import { useState } from 'react';
import { Product } from 'src/types';

type IImagesProps = Pick<Product, 'images'>;

const Images = ({ images }: IImagesProps) => {
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

	console.log(images);
	return (
		<div className='max-md:hidden mb-8'>
			<div className='w-[450px] m-auto'>
				<div className=' my-8 rounded-[15px] overflow-hidden'>
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
	);
};
export default Images;
