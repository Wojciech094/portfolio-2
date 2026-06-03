import { Link } from 'react-router';

export default function Footer() {
	function handleLogoClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<footer className='border-t border-white/10 bg-[#172033] text-white'>
			<div className='mx-auto flex max-w-6xl flex-col items-center px-6 py-10 text-center lg:px-8'>
				<Link
					to='/'
					onClick={handleLogoClick}
					className='text-2xl font-semibold tracking-tight text-white'
					aria-label='Return to portfolio home page'>
					Wojtek<span className='text-[#dc855c]'>.</span>
				</Link>

				<p className='mt-4 max-w-lg text-sm leading-7 text-white/60'>
					Frontend development portfolio featuring selected course projects, technical decisions and continuous
					improvements.
				</p>
			</div>

			<div className='border-t border-white/10 px-6 py-5 text-center text-sm text-white/45'>
				© 2026 Wojtek Leśniak. Portfolio 2 submission.
			</div>
		</footer>
	);
}
