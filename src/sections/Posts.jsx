import PostItem from '../components/PostItem'
import Loader from '../components/Loader'
import { useFetchPosts } from '../Hooks/index'

function Posts() {
	const { filteredPosts, loading } = useFetchPosts()

	return (
		<div id='projects' className='relative mb-16 min-h-[500px]'>
			<h2 className='mb-10 text-center uppercase'>
				Find & <p className='inline mb-10 gradient_text'>Volunteer</p>
			</h2>

			{loading ? (
				<div className='-translate-y-1/2 w-[60px] h-[24px] translate-x-1/2 absolute top-1/2 right-1/2'>
					<Loader />
				</div>
			) : filteredPosts.length ? (
				<div className='max-w-[var(--container-width)] mx-auto flex flex-col gap-8'>
					{filteredPosts.map(post => (
						<PostItem key={post._id} post={post} />
					))}
				</div>
			) : (
				<p className='text-center'>No posts found</p>
			)}
		</div>
	)
}

export default Posts
