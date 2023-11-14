import { useAppContext } from 'src/contexts/AppContext';
import { Good } from 'src/types';
import Trash from 'images/icon-delete.svg?react';

interface ICartCardProps extends Good {}

const CartCard = ({ id, count }: ICartCardProps) => {
	const { products } = useAppContext();
	const currentProduct = products.find(product => product.id === id);

	const deleteHandler = () => {};

	if (currentProduct) {
		return (
			<div className='flex items-center'>
				<img
					src={currentProduct.images[0].thumbnail}
					alt='thumbnail of product'
					className='h-[50px] w-[50px] rounded-[4px] mr-4'
				/>
				<div className='flex-1'>
					<p className='text-font'>{currentProduct.name}</p>
					<p>
						<span className='mr-2 text-font'>
							{currentProduct.currency}
							{currentProduct.price.toFixed(2)} x ${count}
						</span>
						<span className='font-bold'>
							{currentProduct.currency}
							{currentProduct.price * count}
						</span>
					</p>
				</div>
				<button onClick={deleteHandler}>
					<Trash className='fill-[#C3CAD9] hover:fill-[#e0e5f1] cursor-pointer transition-colors' />
				</button>
			</div>
		);
	} else {
		return <h1>Ошибка получения продукта</h1>;
	}
};
export default CartCard;
