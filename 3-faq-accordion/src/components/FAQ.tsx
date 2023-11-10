import { Question } from 'src/types';
import arrowIcon from 'src/assets/images/icon-arrow-down.svg';

interface FAQProps extends Question {
	openHandler: (id: number) => void;
}

const FAQ = ({ isOpen, question, answer, id, openHandler }: FAQProps) => {
	return (
		<li className='max-w-[350px]'>
			<button
				className={`relative pr-6 w-full text-left ${isOpen ? 'text-lg' : 'text-base'} hover:text-accent transition-colors`}
				onClick={() => openHandler(id)}>
				{question}
				<img
					src={arrowIcon}
					className={`absolute right-0 top-1/2 -translate-y-1/2 ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}
				/>
			</button>
			<div className={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-all`}>
				<div className='overflow-hidden'>
					<p className='text-sm text-gray pt-3 pr-6'>{answer}</p>
				</div>
			</div>
			<hr className='bg-divider border-none h-[1px] mt-4 mb-5' />
		</li>
	);
};
export default FAQ;
