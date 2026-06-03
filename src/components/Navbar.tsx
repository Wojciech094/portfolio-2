import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink, useLocation } from 'react-router';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const navLinkClass = ({ isActive }: { isActive: boolean }) =>
		`text-sm font-medium transition ${isActive ? 'text-[#bd6840]' : 'text-[#596579] hover:text-[#172033]'}`;

	function closeMenu() {
		setMenuOpen(false);
	}

	function handleHomeClick() {
		closeMenu();

		if (location.pathname === '/') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}

	return (
		<header className='sticky top-0 z-50 border-b border-[#e7e0d5] bg-[#f8f7f4]/95 backdrop-blur'>
			<nav
				className='mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8'
				aria-label='Main navigation'>
				<Link
					to='/'
					onClick={handleHomeClick}
					className='text-xl font-semibold tracking-tight text-[#172033]'
					aria-label='Go to portfolio home page'>
					Wojtek<span className='text-[#bd6840]'>.</span>
				</Link>

				<div className='hidden items-center gap-8 md:flex'>
					<NavLink
						to='/'
						end
						onClick={handleHomeClick}
						className={navLinkClass}>
						Home
					</NavLink>

					<a
						href='/#projects'
						className='text-sm font-medium text-[#596579] transition hover:text-[#172033]'>
						Projects
					</a>

					<a
						href='/#about'
						className='text-sm font-medium text-[#596579] transition hover:text-[#172033]'>
						About
					</a>

					<a
						href='/#contact'
						className='rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#bd6840]'>
						Contact
					</a>
				</div>

				<button
					type='button'
					className='rounded-lg p-2 text-[#172033] transition hover:bg-[#ede8df] md:hidden'
					onClick={() => setMenuOpen(current => !current)}
					aria-expanded={menuOpen}
					aria-controls='mobile-menu'
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
					{menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
			</nav>

			{menuOpen && (
				<div
					id='mobile-menu'
					className='border-t border-[#e7e0d5] bg-[#f8f7f4] px-6 py-6 md:hidden'>
					<div className='mx-auto flex max-w-6xl flex-col gap-5'>
						<NavLink
							to='/'
							end
							onClick={handleHomeClick}
							className={navLinkClass}>
							Home
						</NavLink>

						<a
							href='/#projects'
							className='text-sm font-medium text-[#596579] transition hover:text-[#172033]'
							onClick={closeMenu}>
							Projects
						</a>

						<a
							href='/#about'
							className='text-sm font-medium text-[#596579] transition hover:text-[#172033]'
							onClick={closeMenu}>
							About
						</a>

						<a
							href='/#contact'
							className='rounded-full bg-[#172033] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#bd6840]'
							onClick={closeMenu}>
							Contact
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
