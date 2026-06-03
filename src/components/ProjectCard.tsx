import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router';
import type { Project } from '../data/projects';

interface ProjectCardProps {
	project: Project;
	index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<article className='group overflow-hidden rounded-4xl border border-[#e7e0d5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172033]/8'>
			<Link
				to={`/projects/${project.slug}`}
				className='block'
				aria-label={`Read more about ${project.title}`}>
				<div className='relative aspect-8/5 overflow-hidden bg-[#172033]'>
					<img
						src={project.imageUrl}
						alt={project.imageLabel}
						loading='lazy'
						className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]'
					/>

					<div className='absolute inset-0 bg-linear-to-t from-[#172033]/70 via-[#172033]/5 to-transparent' />

					<div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6'>
						<p className='rounded-full border border-white/25 bg-[#172033]/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm'>
							{project.category}
						</p>

						<span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#172033]/45 text-white backdrop-blur-sm'>
							<FiArrowUpRight
								size={19}
								className='transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
							/>
						</span>
					</div>
				</div>

				<div className='p-7'>
					<p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#bd6840]'>{project.category}</p>

					<h3 className='text-2xl font-semibold tracking-tight text-[#172033]'>{project.title}</h3>

					<p className='mt-4 min-h-14 text-sm leading-7 text-[#667085]'>{project.shortDescription}</p>

					<div className='mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#172033]'>
						Read more
						<FiArrowUpRight
							size={17}
							className='transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
						/>
					</div>
				</div>
			</Link>
		</article>
	);
}
