import { useState, useCallback, useEffect } from 'react'

const useScrollVisibility = (scrollThreshold = 50) => {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	const handleScroll = useCallback(() => {
		if (typeof window !== 'undefined') {
			const currentScrollY = window.scrollY

			if (currentScrollY > scrollThreshold) {
				setIsVisible(currentScrollY < lastScrollY)
			} else {
				setIsVisible(true)
			}

			setLastScrollY(currentScrollY)
		}
	}, [lastScrollY, scrollThreshold])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return isVisible
}

export default useScrollVisibility
