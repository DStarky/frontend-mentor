import Chart from './Chart';

const Stat = () => {
	return (
		<div className='bg-white px-10 py-8 max-sm:p-6 text-brown rounded max-sm:rounded-[8px] '>
			<h2 className='text-md font-bold mb-12 max-sm:mb-2'>Spending - Last 7 days</h2>
			<div className='h-[200px] mb-7 max-sm:mb-4'>
				<Chart />
			</div>
			<hr className='h-[2px] w-full bg-separator mb-7 max-sm:mb-4 sm:w-[464px]' />
			<section className='flex justify-between items-end max-sm:flex-col max-sm:items-start max-sm:gap-4'>
				<div>
					<p className='mb-1'>Total this month</p>
					<h4 className='text-lg font-bold leading-none max-sm:text-[40px]'>$478.33</h4>
				</div>
				<div>
					<p className='font-bold'>+2.4%</p>
					<p>from last month</p>
				</div>
			</section>
		</div>
	);
};
export default Stat;
