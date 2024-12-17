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
				className='text-center max-w-[880px] mx-auto text-[24px] leading-[32px] mb-8 max-xl:text-[20px] max-xl:leading-[28px] max-lg:text-[18px] max-lg:leading-[24px] max-sm:text-[16px] max-sm:leading-[24px] max-xs:text-[14px] max-xs:leading-[20px]'
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
				className='block px-10 py-4 mx-auto mb-[100px] primary_btn w-fit max-md:mb-[48px]'
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

			<div className='relative w-full'>
				<motion.img
					className='absolute top-1/2 -left-[18px] max-2xl:w-[400px] max-xl:w-[300px] max-md:w-[200px] max-xs:w-[120px]'
					src='/images/left_hand.png'
					alt='left hand'
					initial={{ x: '-100%' }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				/>
				<motion.img
					className='absolute -translate-x-1/2 cursor-pointer top-1/2 left-1/2 max-xl:w-[150px] max-md:w-[100px] max-xs:w-[60px]'
					src='/images/heart.png'
					alt='heart'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				/>
				<motion.img
					className='absolute top-1/2 -right-[18px] max-2xl:w-[400px] max-xl:w-[300px] max-md:w-[200px] max-xs:w-[120px]'
					src='/images/right_hand.png'
					alt='right hand'
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				/>
			</div>
		</div>
	)
}

export default About
