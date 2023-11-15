import Minus from 'images/icon-minus.svg?react';
import Plus from 'images/icon-plus.svg?react';

interface ICounterProps {
	count: number;
	setCount: (n: number) => void;
}

const Counter = ({ count, setCount }: ICounterProps) => {
	const counterHandler = (sign: 'plus' | 'minus') => {
		const newCount = sign === 'plus' ? count + 1 : count - 1;
		setCount(newCount);
	};

	return (
		<div className='py-4 px-6 bg-bg-count rounded-[10px] flex justify-between mb-4 lg:min-w-[160px]'>
			<button
				onClick={() => counterHandler('minus')}
				disabled={count > 0 ? false : true}
				className='disabled:opacity-50 fill-[#ff7e1b]  hover:fill-orange-hover transition-colors'>
				<Minus />
			</button>
			<p className='text-[16px] font-bold'>{count}</p>
			<button
				onClick={() => counterHandler('plus')}
				className='fill-[#ff7e1b] hover:fill-orange-hover transition-colors'>
				<Plus />
			</button>
		</div>
	);
};
export default Counter;
