import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AuthInput from '../components/AuthInput'
import { motion } from 'framer-motion'
import { registerUser, loginUser } from '../api'
import { registerFields } from '../components/arrays'
import { useScrollVisibility } from '../Hooks'

function SignUp() {
	const navigate = useNavigate()
	const isVisible = useScrollVisibility(20)

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		watch,
	} = useForm()

	const password = watch('password')

	const onSubmit = async data => {
		console.log(errors)

		try {
			if (data.password !== data.confirmPassword) {
				setError('confirmPassword', { message: 'Passwords do not match' })
				return
			}

			await registerUser(data)
			const response = await loginUser({
				email: data.email,
				password: data.password,
			})

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
				animate={{ y: isVisible ? 16 : -100 }}
				transition={{ duration: 0.5 }}
				className='z-50 bg-[var(--secondary-bg)] max-w-[var(--container-width)] mx-auto px-10 py-4 rounded-[48px] flex justify-between items-center sticky top-4 mb-[52px]'
			>
				<a href='/'>
					<img src='/icons/logo.svg' alt='Logo' />
				</a>
				<nav className='flex items-center gap-10 max-md:gap-4 max-md:text-[14px]'>
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
				Sign Up
			</motion.h3>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-[520px] w-full mx-auto flex flex-col gap-4'
			>
				{registerFields.map((field, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<AuthInput
							key={field.name}
							label={field.label}
							type={field.type}
							name={field.name}
							placeholder={field.placeholder}
							register={register}
							errors={errors}
							registerOptions={
								field.name === 'confirmPassword'
									? {
											...field.register,
											validate: value =>
												value === password || 'Passwords do not match',
									  }
									: field.register
							}
						/>
					</motion.div>
				))}

				<Link to={'/signIn'} className='block mx-auto underline'>
					Have profile? Sign in!
				</Link>

				<motion.button
					whileHover={{
						scale: 1.05,
						boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
					}}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					type='submit'
					className='primary_btn text-[20px] leading-[32px] py-3 px-2 mb-5'
				>
					Sign up
				</motion.button>
			</form>
		</div>
	)
}

export default SignUp
