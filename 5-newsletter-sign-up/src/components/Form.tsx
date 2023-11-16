import Button from './Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface IForm {
	email: string;
}

const schema = z.object({
	email: z.string().email({ message: 'Valid email required' }),
});

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		resolver: zodResolver(schema),
		mode: 'onBlur',
	});

	const submitFn: SubmitHandler<IForm> = data => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(submitFn)}
			className='flex flex-col'>
			<div className='flex justify-between mb-2'>
				<label
					htmlFor='email'
					className='text-[12px] font-bold '>
					Email address
				</label>
				{errors.email && <p className='text-[12px] font-bold text-[red]'>{errors.email.message}</p>}
			</div>
			<input
				type='text'
				id='email'
				className={`border-[1px] border-gray px-5 py-4 mb-5 text-main rounded-lg focus:outline-none focus:placeholder:text-transparent focus:border-main  placeholder:text-gray ${
					errors.email && 'bg-[#ffe8e6] text-[red] border-[red]'
				}`}
				{...register('email', {
					required: true,
				})}
				placeholder='email@company.com'
				aria-invalid={errors.email ? true : false}
			/>
			<Button>Subscribe to monthly newsletter</Button>
		</form>
	);
};

export default Form;
