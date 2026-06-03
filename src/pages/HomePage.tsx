import { FaGithub } from 'react-icons/fa6';
import { FiArrowRight, FiCode, FiExternalLink, FiLayers, FiMonitor } from 'react-icons/fi';
import { Link } from 'react-router';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function HomePage() {
	return (
		<main>
			<section className='px-6 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28'>
				<div className='mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]'>
					<div>
						<p className='mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-[#bd6840]'>
							Frontend Development Portfolio
						</p>

						<h1 className='max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#172033] min-[360px]:text-5xl sm:text-6xl lg:text-7xl'>
							Building digital experiences with purpose.
						</h1>

						<p className='mt-7 max-w-xl text-lg leading-8 text-[#667085]'>
							I am Wojtek Leśniak, a frontend development student creating responsive and user-focused web applications
							with modern tools and thoughtful design.
						</p>

						<div className='mt-10 flex flex-col gap-4 sm:flex-row'>
							<a
								href='#projects'
								className='inline-flex items-center justify-center gap-2 rounded-full bg-[#172033] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#bd6840]'>
								View projects
								<FiArrowRight size={17} />
							</a>

							<a
								href='#about'
								className='inline-flex items-center justify-center rounded-full border border-[#ded7ca] bg-white px-7 py-4 text-sm font-semibold text-[#172033] transition hover:border-[#bd6840]'>
								About me
							</a>
						</div>
					</div>

					<div className='relative'>
						<div className='absolute -left-6 top-16 hidden h-28 w-28 rounded-full bg-[#e8d9c9] lg:block' />

						<div className='relative overflow-hidden rounded-[2.25rem] bg-[#172033] p-6 text-white shadow-2xl shadow-[#172033]/15 min-[360px]:p-8 sm:p-10'>
							<div className='mb-14 flex items-center justify-between sm:mb-16'>
								<p className='text-sm uppercase tracking-[0.22em] text-white/55'>Portfolio 2</p>

								<span className='rounded-full border border-white/15 px-4 py-2 text-xs text-white/70'>2026</span>
							</div>

							<p className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>03</p>

							<p className='mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#dc855c] min-[360px]:text-sm min-[360px]:tracking-[0.24em]'>
								Selected Projects
							</p>

							<div className='mt-12 grid gap-4 sm:mt-14'>
								{projects.map(project => (
									<Link
										key={project.slug}
										to={`/projects/${project.slug}`}
										className='flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/4 p-4 transition hover:bg-white/9'>
										<span className='min-w-0 text-sm text-white/80'>{project.title}</span>

										<FiArrowRight
											size={15}
											className='shrink-0 text-[#dc855c]'
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id='projects'
				className='scroll-mt-24 border-y border-[#e7e0d5] bg-[#fcfbf8] px-6 py-20 lg:px-8 lg:py-24'>
				<div className='mx-auto max-w-6xl'>
					<div className='mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end'>
						<div>
							<p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#bd6840]'>Selected work</p>

							<h2 className='text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl'>Projects</h2>
						</div>

						<p className='max-w-md text-sm leading-7 text-[#667085]'>
							Three selected course projects presenting my development process, technical growth and improvements made
							for professional presentation.
						</p>
					</div>

					<div className='grid gap-7 lg:grid-cols-3'>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.slug}
								project={project}
								index={index}
							/>
						))}
					</div>
				</div>
			</section>

			<section
				id='about'
				className='scroll-mt-24 px-6 py-20 lg:px-8 lg:py-28'>
				<div className='mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]'>
					<div>
						<p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#bd6840]'>About me</p>

						<h2 className='text-3xl font-semibold tracking-tight text-[#172033] min-[360px]:text-4xl'>
							Design-minded frontend development.
						</h2>
					</div>

					<div>
						<p className='max-w-2xl text-lg leading-9 text-[#667085]'>
							My work combines clean interface design with functional web development. Throughout these projects, I have
							worked with responsive layouts, API integrations, user authentication, state management and accessible
							interaction patterns.
						</p>

						<div className='mt-12 grid gap-5 sm:grid-cols-3'>
							<div className='rounded-2xl border border-[#e7e0d5] bg-white p-6'>
								<FiMonitor
									className='mb-5 text-[#bd6840]'
									size={25}
								/>

								<h3 className='font-semibold text-[#172033]'>Responsive UI</h3>

								<p className='mt-2 text-sm leading-6 text-[#667085]'>Interfaces designed for multiple screen sizes.</p>
							</div>

							<div className='rounded-2xl border border-[#e7e0d5] bg-white p-6'>
								<FiCode
									className='mb-5 text-[#bd6840]'
									size={25}
								/>

								<h3 className='font-semibold text-[#172033]'>Development</h3>

								<p className='mt-2 text-sm leading-6 text-[#667085]'>Modern frontend tools and clean code structure.</p>
							</div>

							<div className='rounded-2xl border border-[#e7e0d5] bg-white p-6'>
								<FiLayers
									className='mb-5 text-[#bd6840]'
									size={25}
								/>

								<h3 className='font-semibold text-[#172033]'>UX Focus</h3>

								<p className='mt-2 text-sm leading-6 text-[#667085]'>Clear flows and meaningful user feedback.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id='contact'
				className='scroll-mt-24 border-t border-[#e7e0d5] bg-[#172033] px-6 py-16 text-white min-[360px]:py-20 lg:px-8 lg:py-24'>
				<div className='mx-auto flex max-w-6xl flex-col justify-between gap-10 lg:flex-row lg:items-end'>
					<div>
						<p className='mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#dc855c] min-[360px]:text-sm'>
							Contact
						</p>

						<h2 className='max-w-2xl text-3xl font-semibold tracking-tight text-white min-[360px]:text-4xl sm:text-5xl'>
							Let&apos;s connect.
						</h2>

						<p className='mt-6 max-w-xl text-base leading-8 text-white/65 min-[360px]:text-lg'>
							Explore my GitHub profile to view my repositories, development process and selected frontend work.
						</p>
					</div>

					<a
						href='https://github.com/Wojciech094'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#dc855c] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c8744e] sm:w-auto sm:px-7'>
						<FaGithub size={20} />
						View my GitHub
						<FiExternalLink size={16} />
					</a>
				</div>
			</section>
		</main>
	);
}
