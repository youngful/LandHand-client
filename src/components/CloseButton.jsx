import { motion } from 'framer-motion'

function CloseButton() {
	return (
		<motion.button
			className='relative flex items-center justify-center w-12 h-12 group'
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.3 }}
		>
			<span className='w-[40px] h-[2px] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></span>
			<span className='w-[40px] h-[2px] bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45'></span>

			<span
				className='absolute flex items-center justify-center w-8 h-8 text-[10px] font-medium transform -translate-x-1/2 -translate-y-1/2 bg-[#e5e5e5] rounded-full top-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
			>
				Close
			</span>
		</motion.button>
	)
}

export default CloseButton
