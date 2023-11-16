import Content from './Content';
import imageDesktop from 'images/illustration-sign-up-desktop.svg';
// import imageMobile from "images/illustration-sign-up-mobile.svg"

const Card = () => {
	return (
		<div className='py-4 pl-12 pr-4 bg-white rounded-3xl'>
			<div className='flex items-center justify-between gap-2'>
				<Content />
				<img src={imageDesktop} />
			</div>
		</div>
	);
};
export default Card;
