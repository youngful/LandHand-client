import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToHashElement = () => {
	const { hash, pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (hash) {
			setTimeout(() => {
				const element = document.querySelector(hash);
				if (element) {
					const headerOffset = 0;
					const elementPosition = element.getBoundingClientRect().top + window.scrollY;
					const offsetPosition = elementPosition - headerOffset;

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth',
					});

					navigate(pathname, { replace: true });
				}
			}, 500); 
		}
	}, [hash, pathname, navigate]);

	return null;
};

export default ScrollToHashElement;
