interface IButton {
	children: React.ReactNode;
}

const Button = ({ children }: IButton) => {
	return (
		<button className='bg-[#232742] group/item relative py-4 rounded-lg text-white font-bold hover:shadow-button overflow-hidden transition-all hover:bg-transparent after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient after:opacity-0 after:hover:opacity-100 after:transition-all active:shadow-none w-full'>
			<span className='relative z-20'>{children}</span>
		</button>
	);
};
export default Button;
