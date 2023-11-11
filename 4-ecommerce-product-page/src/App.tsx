import { useState } from 'react';
import Header from 'src/sections/Header';

const App = () => {
	const [isBackdropShow, setIsBackdropShow] = useState<boolean>(false);

	return (
		<main className='relative'>
			<div className='max-w-[1200px] m-auto px-[45px] max-sm:px-6'>
				<div className={`${isBackdropShow ? 'fixed' : 'hidden'} h-screen w-screen bg-backdrop animate-fade-in animate-fade-out top-0 left-0`}></div>
				<Header setIsBackdropShow={setIsBackdropShow} />
			</div>
		</main>
	);
};
export default App;
