import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function PostItem({ post }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		setWindowWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const formatDate = date => {
		const options = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		}
		return new Date(date).toLocaleString('en-US', options)
	}

	const formatContent = content => {
		let maxLength

		switch (true) {
			case windowWidth < 400:
				maxLength = 150
				break
			case windowWidth < 750:
				maxLength = 300
				break
			case windowWidth < 900:
				maxLength = 470
				break
			case windowWidth < 1200:
				maxLength = 400
				break
			default:
				maxLength = 470
				break
		}

		if (content.length > maxLength) {
			return content.slice(0, maxLength) + '...'
		}

		return content
	}

	const formatTitle = content => {
		let maxLength

		switch (true) {
			case windowWidth < 400:
				maxLength = 20
				break
			case windowWidth < 750:
				maxLength = 25
				break
			case windowWidth < 900:
				maxLength = 50
				break
			default:
				maxLength = 50 
				break
		}

		if (content.length > maxLength) {
			return content.slice(0, maxLength) + '...'
		}

		return content
	}

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: '-10vw' }}
			animate={inView ? { opacity: 1, x: 0 } : {}}
			transition={{ duration: 0.5 }}
			className='bg-[var(--secondary-bg)] rounded-[48px] px-14 py-10 grid grid-cols-[1.5fr_1fr] justify-between items-center gap-6 max-lg:grid-cols-1 '
		>
			<div className='col-start-1 row-start-1 max-lg:order-1'>
				<h4 className='mb-6 uppercase'>{formatTitle(post.title)}</h4>
				<p className='text-[12px] leading-[16px] opacity-[0.5] mb-2'>
					{formatDate(post.date)}
				</p>
				<p className='mb-2 max-xl:text-[14px] max-xl:leading-[20px] max-md:text-[12px] max-md:leading-[16px]'>
					{formatContent(post.content)}
				</p>
			</div>

			<motion.a
				className='flex items-center col-start-1 row-start-2 gap-4 px-8 py-2 uppercase w-fit secondary_btn h-fit max-lg:row-start-4'
				href={`/post/${post._id}`}
			>
				more{' '}
				<img
					className='max-md:w-[10px] max-md:h-[10px]'
					src='/icons/arrow_more.svg'
					alt=''
				/>
			</motion.a>

			<img
				className='col-start-2 row-span-2 w-full max-w-[375px] h-auto rounded-[32px] object-cover max-lg:col-start-1 max-lg:row-start-2 max-lg:ml-auto max-lg:mr-auto'
				style={{ aspectRatio: '4/3' }}
				src={post.img}
				alt='img'
			/>
		</motion.div>
	)
}

PostItem.propTypes = {
	post: PropTypes.object,
}

export default PostItem
