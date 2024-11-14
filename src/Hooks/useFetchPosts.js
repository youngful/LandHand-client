import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../api'
import { setPosts, setLoading, setError } from '../store/slice/posts.slice'

const useFetchPosts = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts.data)
	const loading = useSelector((state) => state.posts.loading)
	const query = useSelector((state) => state.search.query)

	useEffect(() => {
		const fetchPosts = async () => {
			dispatch(setLoading(true))
			try {
				const posts = await getPosts()
				dispatch(setPosts(posts))
			} catch (error) {
				dispatch(setError(error.message))
				console.log(error.response?.data || error.message)
			} finally {
				dispatch(setLoading(false))
			}
		}

		fetchPosts()
	}, [dispatch])

	const filteredPosts = posts.filter(post =>
		post.title.toLowerCase().includes(query.toLowerCase())
	)

	return { filteredPosts, loading }
}

export default useFetchPosts
