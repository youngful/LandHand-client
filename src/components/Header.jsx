import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth, useScrollVisibility, useNoScroll } from '../Hooks'
import CreatePostModal from './CreatePostModal'
import Search from './Search'
import { logoutUser } from '../api/userService'
import Burger from './Burger'

function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isVisible = useScrollVisibility()
	const authenticated = useAuth()
	useNoScroll(isModalOpen)

	const handleLogout = async () => {
		try {
			await logoutUser()
			window.location.reload()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: isVisible ? 16 : -100 }}
				transition={{ duration: 0.5 }}
				className={`z-40 bg-[var(--secondary-bg)] max-w-[var(--container-width)] mx-auto px-10 py-2 rounded-[48px] flex justify-between items-center sticky top-0 gap-8 max-md:gap-4 max-xs:px-4`}
			>
				<a className='w-9' href='/'>
					<img className='w-9' src='/icons/logo.svg' alt='Logo' />
				</a>

				<nav className='hidden sm:flex items-center gap-10 text-nowrap max-md:gap-4 max-md:text-[14px]'>
					<a href='/#about'>About us</a>
					<a href='/#projects'>Projects</a>
				</nav>

				<div className='items-center gap-4 flex'>
					<Search />

					{!authenticated ? (
						<motion.a
							className='px-8 py-1 text-white uppercase bg-black rounded-[32px] whitespace-nowrap text-[20px] leading-[32px] max-xl:text-[16px] max-xl:leading-[24px] max-sm:px-4'
							href='/signIn'
							whileHover={{
								scale: 1.05,
								boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
							}}
						>
							<span className='max-xs:hidden'>Sign in</span>

							<span className='hidden max-xs:block'>
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
										d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
									/>
								</svg>
							</span>
						</motion.a>
					) : (
						<motion.button
							className='px-8 py-1 text-white uppercase bg-black rounded-[32px] whitespace-nowrap text-[20px] leading-[32px] max-xl:text-[16px] max-xl:leading-[24px] max-sm:px-4'
							whileHover={{
								scale: 1.05,
								boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
							}}
							onClick={() => setIsModalOpen(true)}
						>
							<span className='max-sm:hidden'>
								Create <span className='max-md:hidden'>Post</span>
							</span>

							<span className='hidden max-sm:block'>
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
										d='M12 4.5v15m7.5-7.5h-15'
									/>
								</svg>
							</span>
						</motion.button>
					)}

					{authenticated && (
						<img
							src='/icons/log_out.svg'
							className='h-5 cursor-pointer opacity-[0.5] max-sm:hidden'
							alt='Logout'
							onClick={handleLogout}
						/>
					)}
				</div>

				<div className='hidden max-sm:block w-6 h-6'>
					<Burger
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						authenticated={authenticated}
						handleLogout={handleLogout}
					/>
				</div>
			</motion.header>

			{isModalOpen && (
				<CreatePostModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</>
	)
}

export default Header
