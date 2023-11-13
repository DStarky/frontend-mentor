import { useAppContext } from 'src/contexts/AppContext';
import Minus from 'images/icon-minus.svg?react';
import Plus from 'images/icon-plus.svg?react';

const Counter = () => {
	const { productCount, setProductCount } = useAppContext();

	const counterHandler = (sign: 'plus' | 'minus') => {
		const newCount = sign === 'plus' ? productCount + 1 : productCount - 1;
		setProductCount(newCount);
	};

	return (
		<div className='py-4 px-6 bg-bg-count rounded-[10px] flex justify-between mb-4'>
			<button
				onClick={() => counterHandler('minus')}
				disabled={productCount > 0 ? false : true}
				className='disabled:opacity-50 fill-[#ff7e1b]  hover:fill-orange-hover transition-colors'>
				<Minus />
			</button>
			<p className='text-[16px] font-bold'>{productCount}</p>
			<button
				onClick={() => counterHandler('plus')}
				className='fill-[#ff7e1b] hover:fill-orange-hover transition-colors'>
				<Plus />
			</button>
		</div>
	);
};
export default Counter;
