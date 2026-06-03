import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
	return (
		<div className='min-h-screen bg-[#f8f7f4]'>
			<ScrollToTop />
			<Navbar />

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/projects/:slug'
					element={<ProjectPage />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}
