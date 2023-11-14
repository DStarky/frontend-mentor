import { useAppContext } from 'src/contexts/AppContext';

interface ICartProps {
	title: string;
}

const Cart = ({ title }: ICartProps) => {
	const { productCount, setProductCount } = useAppContext();

	return (
		<div className='p-6 rounded-[10px] absolute z-20 bg-white min-h-[250px] mt-2 w-[108%] left-[-4%] shadow-main animate-fade-in'>
			<h4 className='text-[16px] font-bold mb-[52px]'>{title}</h4>
			<div className='h-[1px] w-full bg-[#E4E9F2] absolute left-0 top-[72px]'></div>
			{productCount < 1 && <p className='text-[16px] font-bold leading-6 text-font absolute left-1/2 -translate-x-1/2 bottom-[80px]'>Yout cart is epmty.</p>}
		</div>
	);
};
export default Cart;
