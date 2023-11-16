import { createContext, useContext, useState } from 'react';

interface IAppContextGenerator {
	success: boolean;
	setSuccess: (_: boolean) => void;
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
	const [success, setSuccess] = useState<boolean>(false);

	return <AppContext.Provider value={{ success, setSuccess }}>{children}</AppContext.Provider>;
};
