// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderNavButton from 'src/components/SliderNavButton';
import { images } from 'src/constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export default function App() {
	return (
		<>
			<Swiper className='mySwiper relative h-[80vw] md:hidden'>
				{images.map(image => (
					<SwiperSlide className='flex items-center justify-center'>
						<img src={image.img} />
					</SwiperSlide>
				))}
				
				<SliderNavButton direction='prev' />
				<SliderNavButton direction='next' />
			</Swiper>
		</>
	);
}
