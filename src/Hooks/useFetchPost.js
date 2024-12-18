import { useState, useEffect } from 'react'
import { getPost, setViewCount } from '../api/postService'

const useFetchPost = (id) => {
	const [post, setPost] = useState(null)

	useEffect(() => {
		const fetchPost = async () => {
			try {
				await setViewCount(id)
				const response = await getPost(id)
				setPost(response)
			} catch (error) {
				if (error.response) {
					console.log(error.response.data)
				} else {
					console.error('Error fetching post:', error)
				}
			}
		}

		if (id) fetchPost()
	}, [id])

	return post
}

export default useFetchPost
