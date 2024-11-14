// src/components/Post.jsx
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import {useFetchPost} from '../Hooks'

function Post() {
	const { id } = useParams()
	const post = useFetchPost(id)

	const formatContent = content => {
		const paragraphs = content.split('\n')

		return paragraphs.map((paragraph, index) => {
			if (paragraph.trim() !== '') {
				return <p key={index}>{paragraph}</p>
			}

			return <p key={index}>&nbsp;</p>
		})
	}

	return (
		<div className='min-h-[calc(100vh-168px)] px-5 max-w-[var(--container-width)] mx-auto mt-[20px]'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<Link
					to='/'
					className='flex items-center gap-2 text-[24px] leading-[40px] font-medium mt-10 mb-6'
				>
					<img
						className='w-[21px] h-[21px]'
						src='/icons/arrow_back.svg'
						alt=''
					/>
					Go Back
				</Link>
			</motion.div>

			{post ? (
				<div>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='mb-4 uppercase'
					>
						{post.title}
					</motion.h3>

					<motion.p
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex items-center text-[28px] leading-[32px] gap-2 text-[#444444] font-medium font-[Montserrat] mb-7'
					>
						<img src='/icons/views.svg' alt='views' /> {post.views}
					</motion.p>

					<div className='flex justify-between gap-10 mb-10'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='max-w-[586px] w-full text-[20px] leading-[32px]'
						>
							{formatContent(post.content)}

							<motion.button
								whileHover={{
									scale: 1.05,
									boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
								}}
								className='w-full py-4 mt-10 uppercase primary_btn'
							>
								Volunteer
							</motion.button>
						</motion.div>

						<div className='max-w-[580px] max-h-[400px] w-full h-full overflow-hidden rounded-[32px]'>
							<motion.img
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className='w-full h-full rounded-[32px] object-cover position-center'
								src={post.img}
								alt=''
							/>
						</div>
					</div>
				</div>
			) : (
				<div className='-translate-y-1/2 w-[60px] h-[24px] translate-x-1/2 absolute top-1/2 left-1/2'>
					<Loader />
				</div>
			)}
		</div>
	)
}

export default Post
