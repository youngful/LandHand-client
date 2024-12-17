import { useDispatch, useSelector } from 'react-redux'
import { setPostQuery } from '../store/slice/search.slice'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Search() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const query = useSelector(state => state.search.query)
	const posts = useSelector(state => state.posts?.data || [])
	const [filteredPosts, setFilteredPosts] = useState([])
	const [isFocused, setIsFocused] = useState(false)

	const handleInputChange = event => {
		const value = event.target.value
		dispatch(setPostQuery(value.trim()))

		const filteredPosts = posts.filter(post =>
			post.title.toLowerCase().includes(value.toLowerCase())
		)
		setFilteredPosts(filteredPosts)
	}

	const handleClick = (title) => {	
		if (title) {
			dispatch(setPostQuery(title))
			navigate('/#projects')
			setFilteredPosts([])
			setIsFocused(false)
		}
	}

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setTimeout(() => setIsFocused(false), 150)
	}

	const handleMouseDown = event => {
		event.preventDefault()
	}

	return (
		<div className='relative w-full'>
			<div className='flex justify-between bg-[#F7F7F9] rounded-[32px] px-8 py-2 items-center gap-4 max-md:py-1 max-xs:px-3'>
				<input
					type='text'
					value={query}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder='Search...'
					className='bg-transparent outline-none max-w-[167px] min-w-[40px] w-full placeholder:text-black max-md:text-[14px]'
				/>
				<img
					src='/icons/search.svg'
					alt='Search icon'
					className='cursor-pointer'
					onClick={() => handleClick(query)}
				/>
			</div>

			{filteredPosts.length > 0 && isFocused && (
				<ul
					className='absolute left-0 right-0 z-20 mt-2 overflow-y-auto bg-white border border-gray-200 rounded-[32px] shadow-lg top-full max-h-40'
					onMouseDown={handleMouseDown} 
				>
					{filteredPosts.map(post => (
						<li
							key={post._id}
							className='px-4 py-2 cursor-pointer border-b-[1px] hover:bg-gray-100 overflow-hidden text-ellipsis whitespace-nowrap'
							title={post.title}
							onClick={() => handleClick(post.title)}
						>
							{post.title}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Search
