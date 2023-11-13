interface ICartProps {
	title: string;
}

const Cart = ({ title }: ICartProps) => {
	return (
		<div className='p-6 bg-white rounded-[10px] absolute left-0 z-20'>
			<h4>{title}</h4>
		</div>
	);
};
export default Cart;
