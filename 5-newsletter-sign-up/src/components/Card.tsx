import Content from './Content';
import imageDesktop from 'images/illustration-sign-up-desktop.svg';
import imageMobile from 'images/illustration-sign-up-mobile.svg';

const Card = () => {
	return (
		<div className='sm:py-4 sm:pl-12 sm:pr-4 bg-white sm:rounded-3xl animate-fade-in'>
			<div className='flex  justify-between gap-10 max-sm:flex-col-reverse items-center max-sm:items-stretch'>
				<Content />
				<div className=''>
					<img
						src={imageDesktop}
						className='max-sm:hidden '
					/>
					<img
						src={imageMobile}
						className='sm:hidden w-full '
					/>
				</div>
			</div>
		</div>
	);
};
export default Card;
