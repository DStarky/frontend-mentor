
import Balance from './components/Balance';
import Stat from './components/Stat';

const App = () => {
	return (
		<main className='h-screen w-screen flex justify-center items-center p-4 bg-background'>
			<section className='flex flex-col gap-6 max-sm:gap-2'>
				<Balance />
				<Stat />
			</section>
		</main>
	);
};
export default App;
