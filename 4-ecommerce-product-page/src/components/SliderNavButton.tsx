import Next from 'images/icon-next.svg?react';
import Prev from 'images/icon-previous.svg?react';

interface SliderNavButtonProps {
	direction: 'next' | 'prev';
	changeSlide: React.Dispatch<React.SetStateAction<number>>;
	imageIndex: number;
	maxSlidesIndex: number;
}

const SliderNavButton = ({ direction, changeSlide, imageIndex, maxSlidesIndex }: SliderNavButtonProps) => {
	const sliderNavButtonHandler = () => {
		if (direction === 'next') {
			changeSlide(prev => {
				return prev === maxSlidesIndex ? 0 : prev + 1;
			});
		} else {
			changeSlide(prev => {
				return prev === 0 ? maxSlidesIndex : prev - 1;
			});
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
