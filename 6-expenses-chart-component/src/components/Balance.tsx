import Logo from 'images/logo.svg?react';

const Balance = () => {
	return (
		<div className='bg-orange px-10 py-6 text-white rounded max-sm:rounded-[8px] flex justify-between items-center max-sm:p-6'>
			<div>
				<p className='mb-2 max-sm:mb-0'>My balance</p>
				<p className='text-md max-sm:text-[28px] font-bold'>$921.48</p>
			</div>
			<div>
				<Logo />
			</div>
		</div>
	);
};
export default Balance;
