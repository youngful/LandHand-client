import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'

const url = import.meta.env.VITE_LOCAL_SERVER_URL

function PostItem({ post }) {
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
			className='bg-[var(--secondary-bg)] rounded-[48px] px-14 py-10 flex gap-10 justify-between'
		>
			<div className='flex flex-col justify-between'>
				<div>
					<h4 className='mb-6 uppercase'>{post.title}</h4>
					<p>{post.content}</p>
				</div>
				<motion.a
					className='flex items-center gap-4 px-8 py-2 uppercase w-fit secondary_btn'
					href={`/post/${post._id}`}
				>
					more <img src='/icons/arrow_more.svg' alt='' />
				</motion.a>
			</div>
			<img
				className='max-w-[380px] w-full max-h-[328px] h-full rounded-[32px]'
				src={`${url}/uploads/${post.img}`}
				alt='img'
			/>
		</motion.div>
	)
}

PostItem.propTypes = {
	post: PropTypes.object,
}

export default PostItem
