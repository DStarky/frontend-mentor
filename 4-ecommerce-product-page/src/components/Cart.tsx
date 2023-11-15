import { useAppContext } from 'src/contexts/AppContext';
import CartCard from './CartCard';
import { RefObject, useEffect, useRef } from 'react';

interface ICartProps {
	title: string;
	setIsCartOpen: (n: boolean) => void;
	buttonRef: RefObject<HTMLElement>;
}

const Cart = ({ title, setIsCartOpen, buttonRef }: ICartProps) => {
	const { cart } = useAppContext();
	const cartRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (buttonRef.current) {
				if (cartRef.current && !cartRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
					// Клик вне компонента, вызываем setIsCartOpen(false)
					setIsCartOpen(false);
				}
			}
		};

		// Добавляем обработчик события при монтировании компонента
		document.addEventListener('mousedown', handleClickOutside);

		// Очищаем обработчик при размонтировании компонента
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setIsCartOpen]);

	return (
		<div
			ref={cartRef}
			className='p-6 rounded-[10px] absolute z-20 bg-white min-h-[250px] mt-2 max-md:w-[108%] max-md:left-[-4%] shadow-main animate-fade-in md:w-[360px] md:right-0 md:top-[120px]'>
			<h4 className='text-[16px] font-bold mb-[52px]'>{title}</h4>
			<div className='h-[1px] w-full bg-[#E4E9F2] absolute left-0 top-[72px]'></div>
			{cart.length < 1 && <p className='text-[16px] font-bold leading-6 text-font absolute left-1/2 -translate-x-1/2 bottom-[80px]'>Yout cart is epmty.</p>}
			{cart.length > 0 && (
				<div>
					<ul className='mb-[26px]'>
						{cart.map(product => {
							return (
								<li key={product.id}>
									<CartCard
										id={product.id}
										count={product.count}
									/>
								</li>
							);
						})}
					</ul>
					<button className='button font-bold text-white'>Checkout</button>
				</div>
			)}
		</div>
	);
};
export default Cart;
