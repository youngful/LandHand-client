import { motion } from 'framer-motion'

function About() {
	return (
		<div id='about' className='relative h-screen mt-10 z-1'>
			<motion.h1
				className='mb-4 text-center'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Land A Hand
			</motion.h1>
			<motion.p
				className='text-center max-w-[880px] mx-auto text-[24px] leading-[32px] mb-8'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				Discover volunteer projects that align with your passions or share your
				own initiative to inspire support. Connect, contribute, and make an
				impact together!
			</motion.p>

			<motion.a
				href='#projects'
				className='block px-10 py-4 mx-auto primary_btn w-fit'
				whileHover={{
					scale: 1.05,
					boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
				}}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				Volunteer now
			</motion.a>

			<motion.img
				className='absolute top-1/2 -left-2'
				src='/images/left_hand.png'
				alt='left hand'
				initial={{ x: '-100%' }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			/>
			<motion.img
				className='block mx-auto mt-[150px] cursor-pointer'
				src='/images/heart.png'
				alt='heart'
				whileTap={{ scale: 0.9 }}
				animate={{ scale: [1, 1.3, 1] }}
				transition={{
					duration: 0.8,
					repeat: 2,
					repeatType: 'reverse',
				}}
			/>
			<motion.img
				className='absolute top-1/2 -right-2'
				src='/images/right_hand.png'
				alt='right hand'
				initial={{ x: '100%' }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			/>
		</div>
	)
}

export default About
