import { useRef, useState } from 'react';
import { useAppContext } from 'src/contexts/AppContext';
import Burger from 'images/icon-menu.svg?react';
import Close from 'images/icon-close.svg?react';
import ShoppingCart from 'images/icon-cart.svg?react';
import logo from 'images/logo.svg';
import avatar from 'images/image-avatar.png';
import Cart from 'src/components/Cart';

interface HeaderProps {
	setIsBackdropShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// [x]: Сделать корзину
// [ ]: Добавить закрытие по клику вне зоны меню
// [x]: Добавить закрытие по клику вне зоны корзины

const Header = ({ setIsBackdropShow }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

	const buttonRef = useRef<HTMLButtonElement | null>(null)

	const { cart } = useAppContext();


	const totalCount = cart.reduce((total, product) => {
		return total + product.count;
	}, 0);

	const openMenuHandler = () => {
		setIsMenuOpen(prev => !prev);
		setIsBackdropShow(prev => !prev);
	};

	const cartButtonHandler = () => {
		setIsCartOpen(prev => !prev);
	};


	return (
		<section className='relative'>
			<div className='pt-5 pb-7 sm:pt-11 sm:pb-12 flex items-center'>
				<button
					onClick={openMenuHandler}
					className='sm:hidden mr-4 z-40 relative'>
					{isMenuOpen ? <Close className='icon-hover animate-fade-in fixed top-6 left-6' /> : <Burger className='icon-hover animate-fade-in' />}
				</button>
				<a
					href='#'
					className='max-sm:flex-1 mr-3 md:mr-6 lg:mr-[56px]'>
					<img
						src={logo}
						alt='logotype with "sneakers" word'></img>
				</a>
				<ul
					className={` ${
						isMenuOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-[-101%]'
					} max-sm:fixed max-sm:w-[66%] max-sm:bg-white max-sm:pt-[90px] max-sm:top-0 max-sm:left-0 pl-6 max-sm:h-screen sm:flex sm:gap-4 lg:gap-8 sm:flex-1 transition-transform z-30`}>
					<li className='item'>
						<a href='#'>Collections</a>
					</li>
					<li className='item'>
						<a href='#'>Men</a>
					</li>
					<li className='item'>
						<a href='#'>Women</a>
					</li>
					<li className='item'>
						<a href='#'>About</a>
					</li>
					<li className='item'>
						<a href='#'>Contact</a>
					</li>
				</ul>
				<button
					className='mr-6 lg:mr-[46px] relative'
					onClick={cartButtonHandler}
					ref={buttonRef}>
					<ShoppingCart className='icon-hover' />
					{totalCount > 0 && <span className='absolute -right-2 -top-2 text-[10px] px-2 bg-orange text-white rounded-full font-bold'>{totalCount}</span>}
				</button>
				<img
					src={avatar}
					alt='avatar of user'
					className='w-6 h-6 sm:w-8 sm:h-8 lg:w-14 lg:h-14 hover:ring-orange hover:ring-2 rounded-full cursor-pointer transition'
				/>
			</div>
			<div className='w-full h-[1px] bg-[#d7dce5] max-sm:hidden'></div>
			{isCartOpen && (
				<Cart
					title='Cart'
					setIsCartOpen={setIsCartOpen}
					buttonRef={buttonRef}
				/>
			)}
		</section>
	);
};
export default Header;
