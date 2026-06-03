export interface Project {
	slug: string;
	category: string;
	title: string;
	shortDescription: string;
	description: string;
	technologies: string[];
	features: string[];
	improvement: string;
	imageUrl: string;
	imageLabel: string;
	liveUrl?: string;
	readmeUrl?: string;
	commitUrl?: string;
}
export const projects: Project[] = [
	{
		slug: 'css-frameworks',
		category: 'CSS Frameworks',
		title: 'Social Media App',
		shortDescription:
			'Responsive social media app with profiles, post browsing and an improved mobile content experience.',
		description:
			'Social Media App is a responsive social networking application developed for the CSS Frameworks course. The project was built with TypeScript, Vite and Tailwind CSS, with additional use of Luxon for date handling and the Noroff Social API for dynamic social content. Users can browse posts, open detailed post views, explore author profiles and interact with other users through a modern dark-themed interface. The application demonstrates responsive interface design, API-driven content rendering and the use of a CSS framework to create a structured experience across desktop and mobile devices.',
		technologies: ['TypeScript', 'Vite', 'Tailwind CSS', 'Luxon', 'Noroff Social API'],
		features: [
			'Responsive social feed with API-loaded posts',
			'Authentication and user profile views',
			'Post details with author information',
			'Follow interaction and mobile-friendly navigation',
		],
		improvement:
			'For Portfolio 2, I reviewed the application with a focus on mobile usability and the clarity of the post experience. I improved the responsive layout so that the feed and interface elements display more consistently on smaller screens. I also refined the individual post view to improve readability and corrected author display issues so that the correct user information is presented more clearly. In addition, I enabled follow interaction directly from the post details view, allowing users to engage with authors without having to leave the page. These changes made the social media app more consistent, easier to use on mobile devices and more suitable for professional presentation.',
		imageUrl: '/images/social-media-client.jpg',
		imageLabel: 'Social Media Client feed showing the improved dark interface and responsive post layout',
		liveUrl: 'https://bucolic-mousse-4e51e9.netlify.app/login',
		readmeUrl: 'https://github.com/Wojciech094/Social-Media-App/blob/main/README.md',
	},
	{
		slug: 'react-online-shop',
		category: 'JavaScript Frameworks',
		title: 'React Online Shop',
		shortDescription:
			'React e-commerce application with product browsing, cart management and a safer checkout journey.',
		description:
			'React Online Shop is an e-commerce application developed for the JavaScript Frameworks course. It was built with React, TypeScript, Vite and Tailwind CSS, using React Router for page navigation, TanStack Query for API data handling and Zustand for shopping cart state management. Product information is loaded from the Noroff Online Shop API. Users can browse products, search and sort the catalogue, open product detail pages, add items to a cart and complete a simulated checkout process. The project demonstrates component-based development, typed API handling, reusable UI components and a complete shopping journey from product discovery to checkout confirmation.',
		technologies: [
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
			'React Router',
			'TanStack Query',
			'Zustand',
			'Noroff Online Shop API',
		],
		features: [
			'API-powered product catalogue with search and sorting',
			'Individual product detail pages',
			'Shopping cart state management',
			'Simulated and validated checkout flow',
		],
		improvement:
			'For Portfolio 2, I reviewed the checkout flow and identified a reliability issue: the shopping cart could previously be cleared simply by opening the success page URL, even when a purchase had not actually been completed. I improved this behaviour so that the cart is cleared only after a valid checkout completion, while direct access to the success page redirects the user back without removing selected products. I also improved the layout of shorter pages, including checkout-related screens, so that the footer remains correctly positioned at the bottom of the viewport and the application maintains a more balanced appearance. These changes improved both the technical reliability of the shopping flow and the overall visual polish of the project.',
		imageUrl: '/images/react-online-shop.jpg',
		imageLabel: 'React Online Shop product catalogue showing search, sorting and responsive product cards',
		liveUrl: 'https://taupe-sopapillas-2582ff.netlify.app/',
		readmeUrl: 'https://github.com/Wojciech094/React-online-shop/blob/main/README.md',
	},
	{
		slug: 'bidhouse',
		category: 'Semester Project 2',
		title: 'BidHouse Auction Marketplace',
		shortDescription:
			'Responsive auction marketplace where users create listings, place bids and manage auction activity.',
		description:
			'BidHouse is a responsive auction marketplace developed for Semester Project 2. The application was built with HTML, Tailwind CSS and vanilla JavaScript, and integrates with the Noroff Auction API v2. Registered users can create auction listings, browse available auctions, place bids, monitor their credits, update profile information and review auction wins and activity. The project demonstrates a complete API-driven frontend workflow without using a JavaScript framework, including authentication handling, dynamic rendering, user feedback, listing management and responsive page layouts.',
		technologies: ['HTML', 'Tailwind CSS', 'Vanilla JavaScript', 'Noroff Auction API v2'],
		features: [
			'User registration, login and profile management',
			'Create, browse and view auction listings',
			'Bid placement with credit tracking',
			'Auction wins and activity overview',
		],
		improvement:
			'For Portfolio 2, I reviewed how BidHouse handled listing images supplied through external URLs. Because auction images are provided by users through the API, listings with missing, invalid or unavailable media could previously display broken visuals and make working content appear unfinished. I improved media handling by adding a consistent local fallback image wherever listing imagery is presented, including listing cards and individual auction views. This ensures that the marketplace maintains a stable visual layout and professional appearance even when external media cannot be loaded. The improvement made the application more resilient when working with real user-generated data.',
		imageUrl: '/images/bidhouse.jpg',
		imageLabel: 'BidHouse auction marketplace homepage displaying listings with reliable fallback image handling',
		liveUrl: 'https://bidhouseweb.netlify.app/',
		readmeUrl: 'https://github.com/Wojciech094/BidHouse/blob/main/README.md',
	},
];
export function getProjectBySlug(slug: string | undefined): Project | undefined {
	return projects.find(project => project.slug === slug);
}
