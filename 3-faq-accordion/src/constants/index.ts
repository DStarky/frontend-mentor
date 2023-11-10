import { Question } from 'src/types';

export const questions: Question[] = [
	{
		isOpen: false,
		question: 'How many team members can I invite?',
		answer: 'You can invite as many team members as your plan allows.',
		id: 1,
	},
	{
		isOpen: true,
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
		id: 2,
	},
	{
		isOpen: false,
		question: 'How do I reset my password?',
		answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
		id: 3,
	},
	{
		isOpen: false,
		question: 'Can I cancel my subscription?',
		answer: 'Yes, you can cancel your subscription at any time through your account settings.',
		id: 4,
	},
	{
		isOpen: false,
		question: 'Do you provide additional support?',
		answer: 'Yes, we offer additional support through our help center and customer service.',
		id: 5,
	},
];
