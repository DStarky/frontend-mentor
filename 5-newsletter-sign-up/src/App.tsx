import { useState } from 'react';

import Card from './components/Card';
import SuccessCard from './components/SuccessCard';

const App = () => {
	const [success, setSuccess] = useState<boolean>(false);

	return <main className='h-screen bg-[#36384d] flex justify-center items-center'>{success ? <SuccessCard /> : <Card/>}</main>;
};
export default App;
