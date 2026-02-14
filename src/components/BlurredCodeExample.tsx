'use client'

import { EyeIcon } from 'lucide-react'
import React from 'react'

import LetterGlitch from '@/components/LetterGlitch'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

interface BlurredCodeExampleProps {
	children: React.ReactNode
	className?: string
}

const BlurredCodeExample: React.FC<BlurredCodeExampleProps> = ({ children, className }) => {
	const [revealed, setRevealed] = React.useState(false)

	return (
		<div className={cn('relative w-full transition-all duration-200', revealed ? 'h-auto' : 'h-64', className)}>
			<div className={cn('bg-muted rounded-md', revealed ? 'overflow-visible' : 'h-full overflow-hidden')}>
				{children}
			</div>

			{!revealed && (
				<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
					<div className='pointer-events-none absolute inset-0'>
						<LetterGlitch glitchSpeed={100} centerVignette={true} outerVignette={true} smooth={true} />
					</div>
					<div className='pointer-events-auto relative z-10 flex flex-col items-center gap-3 px-4 text-center'>
						<div className='max-w-xs rounded-md p-5 text-base leading-snug font-extrabold text-white backdrop-blur-xs text-shadow-[0_0_15px_rgb(0_0_0)] sm:text-xl'>
							<p>Попробуй самостоятельно написать алгоритм, а затем сравнить</p>
						</div>
						<Button
							size='lg'
							variant='outline'
							onClick={() => setRevealed(true)}
							className='cursor-pointer backdrop-blur-xs'
						>
							<EyeIcon className='h-4 w-4' />
							Показать решение
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default BlurredCodeExample
