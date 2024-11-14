import { useState, useEffect } from 'react'

const useAuth = () => {
	const [authenticated, setAuthenticated] = useState(false)

	useEffect(() => {
		const checkToken = () => {
			const token = localStorage.getItem('token')
			setAuthenticated(!!token)
		}

		checkToken()

		const handleStorageChange = (event) => {
			if (event.key === 'token') {
				checkToken()
			}
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return authenticated
}

export default useAuth
