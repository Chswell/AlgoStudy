/*
 * Originally authored by Nikita Streltsov (2026)
 * Licensed under Apache-2.0
 */
import { Github, Globe, Linkedin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

import { LINKS_SOCIAL } from '@/app/configs/LINKS_SHARED'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export const Footer = () => {
	return (
		<footer className='mt-auto border-t'>
			<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-2 py-4 sm:flex-row sm:gap-4 sm:px-4 sm:py-6'>
				<div className='flex flex-col items-center gap-2 sm:items-start'>
					<p className='text-muted-foreground flex gap-2 text-sm'>
						Разработано
						<Link
							href={LINKS_SOCIAL.site}
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-foreground text-blue-600 transition-colors dark:text-blue-400'
							aria-label='Website'
						>
							<span className=''>Streltsov Nikita</span>
						</Link>
					</p>
					<p className='text-muted-foreground text-xs'>© {new Date().getFullYear()} AlgoStudy. Все права защищены.</p>
				</div>
				<TooltipProvider>
					<div className='flex items-center gap-4'>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={LINKS_SOCIAL.github}
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-foreground transition-colors'
									aria-label='GitHub'
								>
									<Github className='h-5 w-5' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>GitHub</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={LINKS_SOCIAL.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-foreground transition-colors'
									aria-label='LinkedIn'
								>
									<Linkedin className='h-5 w-5' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>LinkedIn</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={LINKS_SOCIAL.telegram}
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-foreground transition-colors'
									aria-label='Telegram'
								>
									<MessageCircle className='h-5 w-5' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Telegram</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={LINKS_SOCIAL.site}
									target='_blank'
									rel='noopener noreferrer'
									className='text-muted-foreground hover:text-foreground transition-colors'
									aria-label='Website'
								>
									<Globe className='h-5 w-5' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Веб-сайт</p>
							</TooltipContent>
						</Tooltip>
					</div>
				</TooltipProvider>
			</div>
		</footer>
	)
}
