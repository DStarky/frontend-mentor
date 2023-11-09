import QRImage from 'src/assets/image-qr-code.png';

const Card = () => {
	return (
		<div className='bg-white p-4 text-center max-w-[315px] rounded-2xl shadow-main'>
			<img
				src={QRImage}
				alt='QRCode'
				width={280}
				height={280}
				className='m-auto'
			/>
			<h1 className='text-xl text-title mt-2 mb-5  max-w-[250px] m-auto'>Improve your fron-end skills by building projects</h1>
			<p className='text-base text-font mb-7 max-w-[250px] m-auto'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
		</div>
	);
};
export default Card;
