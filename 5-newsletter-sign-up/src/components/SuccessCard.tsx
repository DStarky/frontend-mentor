import SuccessIcon from 'images/icon-success.svg?react';
import Button from './Button';
import { useAppContext } from 'src/contexts/AppContext';

const SuccessCard = () => {
	const { setSuccess, email } = useAppContext();

	return (
		<div className='p-[56px] bg-white rounded-3xl max-w-[480px] m-auto animate-fade-in max-sm:p-6 max-sm:h-screen'>
			<div className='flex flex-col h-full '>
				<SuccessIcon className='mb-10 max-sm:mt-[180px]' />
				<h1 className='font-bold text-[#242846] text-[60px] leading-[60px] mb-6 max-sm:text-[40px] max-sm:leading-[40px]'>Thanks for subscribing!</h1>
				<p className='mb-10 flex-1'>
					A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your
					subscription.
				</p>
				<div
					onClick={() => setSuccess(false)}
					className='w-full'>
					<Button>Dismiss message</Button>
				</div>
			</div>
		</div>
	);
};
export default SuccessCard;
