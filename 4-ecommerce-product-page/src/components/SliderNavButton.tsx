import { useSwiper } from 'swiper/react';

import Next from 'images/icon-next.svg?react';
import Prev from 'images/icon-previous.svg?react';

interface SliderNavButtonProps {
	direction: 'next' | 'prev';
}

const SliderNavButton = ({ direction }: SliderNavButtonProps) => {
	const swiper = useSwiper();

	const sliderNavButtonHandler = () => {
		console.log('yes')
		if (direction === 'next') {
			swiper.slideNext();
		} else {
			swiper.slidePrev();
		}
	};

	return (
		<div
			className={`absolute z-10 top-1/2 -translate-y-1/2 bg-white ${
				direction === 'next' ? 'right-4 ' : 'left-4'
			} w-[40px] h-[40px] flex items-center justify-center rounded-full`}
			onClick={sliderNavButtonHandler}>
			{direction === 'next' ? <Next /> : <Prev />}
		</div>
	);
};
export default SliderNavButton;
