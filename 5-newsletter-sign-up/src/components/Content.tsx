import Form from './Form';

const Content = () => {
	return (
		<div className='flex flex-col basis-[400px] text-main max-sm:py-4 max-sm:px-6'>
			<h1 className='font-bold text-[#242846] text-[60px] mb-3 max-sm:text-[40px] sm:max-lg:leading-[70px] sm:max-lg:text-[48px]'>Stay updated!</h1>
			<p className='mb-4'>Join 60,000+ product managers receiving monthly update on:</p>
			<ul className='mb-10 space-y-3 sm:max-lg:mb-4'>
				<li className='bg-no-repeat pl-9 bg-li'>Product discovery and building what metters</li>
				<li className='bg-no-repeat pl-9 bg-li'>Measuring to ensure updates are a success</li>
				<li className='bg-no-repeat pl-9 bg-li'>And much more</li>
			</ul>
			<Form />
		</div>
	);
};
export default Content;
