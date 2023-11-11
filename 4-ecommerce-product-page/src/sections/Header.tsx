import { useState } from 'react';
import Burger from 'src/assets/images/icon-menu.svg?react';
import Close from 'src/assets/images/icon-close.svg?react';
import ShoppingCart from 'src/assets/images/icon-cart.svg?react';
import logo from 'src/assets/images/logo.svg';
import avatar from 'src/assets/images/image-avatar.png';

interface HeaderProps {
	setIsBackdropShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsBackdropShow }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openMenuHandler = () => {
		setIsOpen(prev => !prev);
		setIsBackdropShow(prev => !prev);
	};

	return (
		<section>
			<div className='pt-5 pb-7 sm:pt-11 sm:pb-12 flex items-center'>
				<button
					onClick={openMenuHandler}
					className='sm:hidden mr-4 z-10 relative'>
					{isOpen ? <Close className='icon-hover animate-fade-in fixed top-6 left-6' /> : <Burger className='icon-hover animate-fade-in' />}
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
						isOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-[-101%]'
					} max-sm:fixed max-sm:w-[66%] max-sm:bg-white max-sm:pt-[90px] max-sm:top-0 max-sm:left-0 pl-6 max-sm:h-screen sm:flex sm:gap-4 lg:gap-8 sm:flex-1 transition-transform`}>
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
				<button className='mr-6 lg:mr-[46px]'>
					<ShoppingCart className='icon-hover' />
				</button>
				<img
					src={avatar}
					alt='avatar of user'
					className='w-6 h-6 sm:w-8 sm:h-8 lg:w-14 lg:h-14 hover:ring-orange hover:ring-2 rounded-full cursor-pointer transition'
				/>
			</div>
			<div className='w-full h-[1px] bg-[#d7dce5] max-sm:hidden'></div>
		</section>
	);
};
export default Header;
