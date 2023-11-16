import Card from './components/Card';
import SuccessCard from './components/SuccessCard';
import { useAppContext } from './contexts/AppContext';

// [ ]: Передать email пользователя в контекст
// [ ]: Сделать мобильную версию

const App = () => {
	const { success } = useAppContext();

	return <main className='h-screen bg-white sm:bg-[#36384d] sm:flex sm:justify-center sm:items-center sm:p-4'>{success ? <SuccessCard /> : <Card />}</main>;
};
export default App;
