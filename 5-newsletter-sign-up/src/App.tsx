import Card from './components/Card';
import SuccessCard from './components/SuccessCard';
import { useAppContext } from './contexts/AppContext';

const App = () => {
	const { success } = useAppContext();

	return <main className='h-screen bg-[#36384d] flex justify-center items-center'>{success ? <SuccessCard /> : <Card />}</main>;
};
export default App;
