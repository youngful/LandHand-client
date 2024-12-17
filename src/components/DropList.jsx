import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const DropList = ({ items = [], onSelect }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedItem, setSelectedItem] = useState(items[0] || '')

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleSelect = item => {
		setSelectedItem(item)
		setIsOpen(false)
		if (onSelect) onSelect(item)
	}

	return (
		<div className='relative inline-block w-[200px]'>
			<motion.div
				whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
				onClick={toggleDropdown}
				className='bg-white w-full px-6 py-2 rounded-[32px] cursor-pointer text-center flex items-center justify-between'
			>
				<span className='font-medium max-sm:text-[14px]'>{selectedItem}</span>
				<img
					src={`${!isOpen ? '/icons/up.svg' : '/icons/down.svg'}`}
					alt=''
					className='w-4 h-4'
				/>
			</motion.div>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className='absolute top-full left-0 w-full bg-white border border-gray-200 rounded-[32px] overflow-hidden mt-1 shadow-lg z-10'
					>
						{items.map((item, index) => (
							<li
								key={index}
								onClick={() => handleSelect(item)}
								className='px-4 py-4 cursor-pointer hover:bg-gray-100 max-sm:text-[14px] max-sm:py-2'
							>
								{item}
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	)
}

DropList.propTypes = {
	items: PropTypes.array,
	onSelect: PropTypes.func,
}

export default DropList
