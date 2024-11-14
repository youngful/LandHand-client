import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AuthInput from '../components/AuthInput'
import { motion } from 'framer-motion'
import { loginUser } from '../api'
import { useNavigate } from 'react-router-dom'
import { loginFields } from '../components/arrays'

function SignIn() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async data => {
		try {
			const response = await loginUser(data)

			localStorage.setItem('token', response.token)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6 }}
				className='z-50 bg-[var(--secondary-bg)] w-[var(--container-width)] mx-auto px-10 py-4 rounded-[48px] flex justify-between items-center sticky top-4 mb-[136px]'
			>
				<a href='/'>
					<img src='/icons/logo.svg' alt='Logo' />
				</a>
				<nav className='flex items-center gap-10'>
					<Link to='/#about'>About us</Link>
					<Link to='/#projects'>Projects</Link>
				</nav>
			</motion.header>

			<motion.h3
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='mb-6 text-center uppercase'
			>
				Sign In
			</motion.h3>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-[520px] w-full mx-auto flex flex-col gap-4'
			>
				{loginFields.map((field, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<AuthInput
							label={field.label}
							type={field.type}
							name={field.name}
							placeholder={field.placeholder}
							register={register}
							errors={errors}
							registerOptions={field.register}
						/>
					</motion.div>
				))}

				<p className='text-center underline leading-[16px] mb-6'>
					Forgot password?
				</p>

				<motion.button
					whileHover={{
						scale: 1.05,
						boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
					}}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					type='submit'
					className='primary_btn text-[20px] leading-[32px] py-3 px-2'
				>
					Log In
				</motion.button>

				<Link to={'/signUp'} className='block underline'>
					First time? Sign up!
				</Link>
			</form>
		</div>
	)
}

export default SignIn
