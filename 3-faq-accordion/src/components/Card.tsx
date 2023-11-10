import { useState } from 'react';
import FAQ from 'src/components/FAQ';
import { questions } from 'src/constants';
import { Question } from 'src/types';

import imageMobile from 'src/assets/images/illustration-woman-online-mobile.svg';
import imageDesktop from 'src/assets/images/illustration-woman-online-desktop.svg';
import shadowMobile from 'src/assets/images/bg-pattern-mobile.svg';

const Card = () => {
	const [data, setData] = useState<Question[]>(questions);

	const openAnswerHandler = (id: number): void => {
		const updatedQuestions = data.map(question => {
			if (question.id === id) {
				return { ...question, isOpen: !question.isOpen };
			} else {
				return { ...question, isOpen: false };
			}
		});
		setData(updatedQuestions);
	};

	return (
		<div className='bg-white pt-32 px-6 pb-7 rounded-3xl shadow-main relative'>
			<div>
				<img
					srcSet={`${imageMobile} 320w, ${imageDesktop} 768w`}
					src={imageMobile}
					alt='illustration'
					className='absolute left-1/2 -translate-x-1/2 -top-[105px]'
					width={237}
					height={180}
				/>
				<img
					src={shadowMobile}
					alt='shadow'
					className='absolute left-1/2 -translate-x-1/2 top-0'
				/>
			</div>
			<h2 className='text-xl color-bold mb-10 text-center'>FAQ</h2>
			<ul>
				{data.map(question => (
					<FAQ
						{...question}
						key={question.id}
						openHandler={openAnswerHandler}
					/>
				))}
			</ul>
		</div>
	);
};

export default Card;
