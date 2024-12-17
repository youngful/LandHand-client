// components/BurgerMenu.js
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function BurgerMenu({
	isMenuOpen,
	setIsMenuOpen,
	authenticated,
	handleLogout,
}) {
	return (
		<>
			<button onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-6 h-6'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</button>

			{isMenuOpen && (
				<div
					className='absolute -top-4 bottom-0 left-0 right-0 z-40 w-screen bg-opacity-50 h-screen ng-black'
					style={{ backdropFilter: 'blur(5px)' }}
				/>
			)}

			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, x: '100%' }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className='fixed -top-4 right-0 w-[70%] h-screen bg-white z-50 flex flex-col gap-8 p-6 shadow-lg'
				>
					<div className='flex items-center justify-between'>
						<a href='/'>
							<img src='/icons/logo.svg' alt='Logo' />
						</a>
						<button
							onClick={() => setIsMenuOpen(false)}
							className='text-3xl font-bold'
						>
							&times;
						</button>
					</div>

					<nav className='flex flex-col gap-4 text-lg'>
						<a href='/#about' onClick={() => setIsMenuOpen(false)}>
							About us
						</a>
						<a href='/#projects' onClick={() => setIsMenuOpen(false)}>
							Projects
						</a>
					</nav>

					<div className='mt-auto'>
						{authenticated && (
							<button
								onClick={() => {
									handleLogout()
									setIsMenuOpen(false)
								}}
								className='text-lg flex items-center gap-2'
							>
								<img className='w-4 h-4' src='/icons/log_out.svg' alt='' /> Log
								out
							</button>
						)}
					</div>
				</motion.div>
			)}

			{isMenuOpen && (
				<style>{`
					body {
						padding: 0;
						overflow: hidden; 
					}
				`}</style>
			)}
		</>
	)
}

BurgerMenu.propTypes = {
	isMenuOpen: PropTypes.bool,
	setIsMenuOpen: PropTypes.func,
	authenticated: PropTypes.bool,
	handleLogout: PropTypes.func,
}

export default BurgerMenu
