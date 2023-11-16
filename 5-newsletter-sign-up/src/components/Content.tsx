
import Form from './Form';

const Content = () => {

  
	return (
		<div className='flex flex-col basis-[400px] text-main'>
			<h1 className='font-bold text-[#242846] text-[60px] mb-3'>Stay updated!</h1>
			<p className='mb-4'>Join 60,000+ product managers receiving monthly update on:</p>
			<ul className='mb-10 space-y-3'>
				<li className='bg-no-repeat pl-9 bg-li'>Product discovery and building what metters</li>
				<li className='bg-no-repeat pl-9 bg-li'>Measuring to ensure updates are a success</li>
				<li className='bg-no-repeat pl-9 bg-li'>And much more</li>
			</ul>
			<Form />
		</div>
	);
};
export default Content;
