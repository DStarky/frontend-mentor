import { createContext, useContext, useState } from 'react';
import { products } from 'src/constants';
import { Good, Product } from 'src/types';

interface IAppContextGenerator {
	cart: Good[];
	products: Product[];
	updateCart: (cartData: Good[]) => void;
}

const AppContext = createContext<IAppContextGenerator | undefined>(undefined);

// Создаем хук, который будет вызывать хук useContext с контекстом AppContext
export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('Этот хук можно использовать только с пользовательским контекстом');
	}

	return context;
};

interface IAppContextProps {
	children: React.ReactNode;
}

// Создаем функциональный компонент, который возвращает Context.Provider с заданными значениями и пропсами
export const AppContextProvider: React.FC<IAppContextProps> = ({ children }) => {
	const [cart, updateCart] = useState<Good[]>([]);

	return <AppContext.Provider value={{ cart, updateCart, products }}>{children}</AppContext.Provider>;
};
