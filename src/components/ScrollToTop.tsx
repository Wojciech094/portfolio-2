import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
	const { pathname } = useLocation();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'instant',
		});
	}, [pathname]);

	useEffect(() => {
		function handleScroll() {
			setIsVisible(window.scrollY > 420);
		}

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	if (!isVisible) {
		return null;
	}

	return (
		<button
			type='button'
			onClick={handleScrollToTop}
			className='fixed bottom-6 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ded7ca] bg-white text-[#172033] shadow-lg shadow-[#172033]/10 transition hover:border-[#bd6840] hover:bg-[#bd6840] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd6840] focus-visible:ring-offset-2 min-[360px]:right-6'
			aria-label='Scroll back to top'>
			<FiArrowUp size={20} />
		</button>
	);
}
