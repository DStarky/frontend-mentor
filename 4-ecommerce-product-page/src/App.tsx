import { useState } from 'react';
import Header from 'src/sections/Header';
import Slider from './sections/Slider';

const App = () => {
	const [isBackdropShow, setIsBackdropShow] = useState<boolean>(false);

	return (
		<main className='relative'>
			<div className={`${isBackdropShow ? 'fixed' : 'hidden'} h-screen w-screen bg-backdrop animate-fade-in animate-fade-out top-0 left-0`}></div>
			<div className='container'>
				<Header setIsBackdropShow={setIsBackdropShow} />
			</div>
			<Slider/>
		</main>
	);
};
export default App;
