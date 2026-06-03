import { useState } from 'react';
import { FiArrowLeft, FiArrowUpRight, FiCheck, FiCopy, FiExternalLink } from 'react-icons/fi';
import { Link, useParams } from 'react-router';
import { getProjectBySlug } from '../data/projects';

export default function ProjectPage() {
	const { slug } = useParams();
	const project = getProjectBySlug(slug);
	const [copied, setCopied] = useState(false);

	async function handleCopyLink() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);

			window.setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch {
			setCopied(false);
		}
	}

	if (!project) {
		return (
			<main className='flex min-h-[70vh] items-center justify-center px-4 py-20 min-[360px]:px-6'>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold tracking-tight text-[#172033] min-[360px]:text-4xl'>
						Project not found
					</h1>

					<Link
						to='/'
						className='mt-7 inline-flex items-center gap-2 rounded-full bg-[#172033] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#bd6840]'>
						<FiArrowLeft size={17} />
						Return home
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className='overflow-x-clip'>
			<section className='px-4 pb-12 pt-10 min-[360px]:px-6 min-[360px]:pb-14 min-[360px]:pt-12 lg:px-8 lg:pb-16 lg:pt-16'>
				<div className='mx-auto w-full min-w-0 max-w-5xl'>
					<Link
						to='/#projects'
						className='mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#667085] transition hover:text-[#172033] min-[360px]:mb-12'>
						<FiArrowLeft size={17} />
						Back to projects
					</Link>

					<p className='mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#bd6840] min-[360px]:text-sm min-[360px]:tracking-[0.28em]'>
						{project.category}
					</p>

					<div className='flex min-w-0 flex-col gap-7 md:flex-row md:items-end md:justify-between'>
						<h1 className='min-w-0 max-w-3xl wrap-break-words text-4xl font-semibold leading-tight tracking-tight text-[#172033] min-[360px]:text-5xl sm:text-6xl'>
							{project.title}
						</h1>

						<button
							type='button'
							onClick={handleCopyLink}
							className='inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-[#ded7ca] bg-white px-5 py-3 text-sm font-semibold text-[#172033] transition hover:border-[#bd6840] md:w-auto'
							aria-label={`Copy page link for ${project.title}`}>
							{copied ? <FiCheck size={17} /> : <FiCopy size={17} />}
							{copied ? 'Page link copied' : 'Copy page link'}
						</button>
					</div>
				</div>
			</section>

			<section className='px-4 pb-14 min-[360px]:px-6 min-[360px]:pb-16 lg:px-8'>
				<div className='mx-auto w-full min-w-0 max-w-5xl'>
					<figure className='w-full min-w-0'>
						<div className='overflow-hidden rounded-3xl border border-[#e7e0d5] bg-white shadow-sm min-[360px]:rounded-4xl'>
							<img
								src={project.imageUrl}
								alt={project.imageLabel}
								className='block h-auto w-full'
							/>
						</div>

						<figcaption className='mt-4 wrap-break-words text-sm leading-7 text-[#667085]'>
							{project.imageLabel}.
						</figcaption>
					</figure>
				</div>
			</section>

			<section className='border-y border-[#e7e0d5] bg-[#fcfbf8] px-4 py-14 min-[360px]:px-6 min-[360px]:py-16 lg:px-8 lg:py-20'>
				<div className='mx-auto grid w-full min-w-0 max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_290px]'>
					<div className='min-w-0'>
						<h2 className='text-2xl font-semibold tracking-tight text-[#172033] min-[360px]:text-3xl'>
							Project overview
						</h2>

						<p className='mt-5 wrap-break-words text-base leading-8 text-[#667085] min-[360px]:mt-6 min-[360px]:text-lg min-[360px]:leading-9'>
							{project.description}
						</p>

						<h2 className='mt-12 text-2xl font-semibold tracking-tight text-[#172033] min-[360px]:mt-14 min-[360px]:text-3xl'>
							Key features
						</h2>

						<ul className='mt-6 grid min-w-0 gap-4 sm:grid-cols-2'>
							{project.features.map(feature => (
								<li
									key={feature}
									className='flex min-w-0 items-start gap-3 rounded-2xl border border-[#e7e0d5] bg-white p-4 text-sm leading-6 text-[#596579] min-[360px]:p-5'>
									<FiCheck
										className='mt-0.5 shrink-0 text-[#bd6840]'
										size={18}
									/>

									<span className='min-w-0 wrap-break-words'>{feature}</span>
								</li>
							))}
						</ul>

						<h2 className='mt-12 text-2xl font-semibold tracking-tight text-[#172033] min-[360px]:mt-14 min-[360px]:text-3xl'>
							Improvement made
						</h2>

						<div className='mt-6 min-w-0 rounded-2xl border border-[#e7e0d5] bg-white p-5 min-[360px]:mt-7 min-[360px]:p-7'>
							<p className='wrap-break-words text-sm leading-7 text-[#667085] min-[360px]:text-base min-[360px]:leading-8'>
								{project.improvement}
							</p>
						</div>
					</div>

					<aside className='min-w-0'>
						<div className='rounded-2xl border border-[#e7e0d5] bg-white p-5 min-[360px]:p-6 lg:sticky lg:top-28'>
							<h2 className='text-xs font-semibold uppercase tracking-[0.18em] text-[#bd6840] min-[360px]:text-sm min-[360px]:tracking-[0.2em]'>
								Technologies
							</h2>

							<div className='mt-5 flex min-w-0 flex-wrap gap-2'>
								{project.technologies.map(technology => (
									<span
										key={technology}
										className='max-w-full wrap-break-words rounded-full bg-[#f3eee7] px-3 py-2 text-xs font-medium text-[#596579]'>
										{technology}
									</span>
								))}
							</div>

							<div className='mt-8 flex min-w-0 flex-col gap-3'>
								{project.liveUrl ? (
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex w-full items-center justify-between gap-3 rounded-full bg-[#172033] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd6840]'>
										<span>View live site</span>
										<FiExternalLink
											className='shrink-0'
											size={16}
										/>
									</a>
								) : (
									<span className='w-full rounded-full bg-[#ede9e1] px-5 py-3.5 text-center text-sm font-medium text-[#8a8f99]'>
										Live link to be added
									</span>
								)}

								{project.readmeUrl ? (
									<a
										href={project.readmeUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex w-full items-center justify-between gap-3 rounded-full border border-[#ded7ca] px-5 py-3.5 text-sm font-semibold text-[#172033] transition hover:border-[#bd6840]'>
										<span>View README</span>
										<FiArrowUpRight
											className='shrink-0'
											size={16}
										/>
									</a>
								) : (
									<span className='w-full rounded-full border border-[#e7e0d5] px-5 py-3.5 text-center text-sm font-medium text-[#8a8f99]'>
										README link to be added
									</span>
								)}
							</div>
						</div>
					</aside>
				</div>
			</section>
		</main>
	);
}
