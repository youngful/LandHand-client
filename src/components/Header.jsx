import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth, useScrollVisibility, useNoScroll } from '../Hooks'
import CreatePostModal from './CreatePostModal'
import Search from './Search'
import { logoutUser } from '../api'

function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const isVisible = useScrollVisibility()
	const authenticated = useAuth()
	useNoScroll(isModalOpen)

	const handleLogout = async () => {
		try{
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
				className={`z-40 bg-[var(--secondary-bg)] max-w-[var(--container-width)] mx-auto px-10 py-2 rounded-[48px] flex justify-between items-center sticky top-0`}
			>
				<a href='/'>
					<img src='/icons/logo.svg' alt='Logo' />
				</a>

				<nav className='flex items-center gap-10'>
					<a href='/#about'>About us</a>
					<a href='/#projects'>Projects</a>
				</nav>

				<div className='flex items-center gap-4'>
					<Search />

					{!authenticated ? (
						<motion.a
							className='px-8 py-1 text-white uppercase bg-black rounded-[32px] whitespace-nowrap text-[20px] leading-[32px]'
							href='/signIn'
							whileHover={{
								scale: 1.05,
								boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
							}}
						>
							Sign in
						</motion.a>
					) : (
						<motion.button
							className='px-8 py-1 text-white uppercase bg-black rounded-[32px] whitespace-nowrap text-[20px] leading-[32px]'
							whileHover={{
								scale: 1.05,
								boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
							}}
							onClick={() => setIsModalOpen(true)}
						>
							Create Post
						</motion.button>
					)}

					{authenticated && (
						<img
							src='/icons/log_out.svg'
							className='h-5 cursor-pointer opacity-[0.5]'
							alt=''
							onClick = {() => handleLogout()}
						/>
					)}
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
