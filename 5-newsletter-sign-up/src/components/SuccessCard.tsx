import SuccessIcon from 'images/icon-success.svg?react';
import Button from './Button';
import { useAppContext } from 'src/contexts/AppContext';

const SuccessCard = () => {
	const { setSuccess } = useAppContext();

	return (
		<div className='p-[56px] bg-white rounded-3xl max-w-[480px]'>
			<div className='flex flex-col '>
				<SuccessIcon className='mb-10' />
				<h1 className='font-bold text-[#242846] text-[60px] leading-[60px] mb-6'>Thanks for subscribing!</h1>
				<p className='mb-10'>
					A confirmation email has been sent to <span className='font-bold'>lorem@ipsum.com</span>. Please open it and click the button inside to confirm your
					subscription.
				</p>
				<div onClick={() => setSuccess(false)} className='w-full'>
					<Button>Dismiss message</Button>
				</div>
			</div>
		</div>
	);
};
export default SuccessCard;
