'use client'

import React from 'react'

import LetterGlitch from '@/components/LetterGlitch'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BlurredCodeExampleProps {
	children: React.ReactNode
	className?: string
}

const BlurredCodeExample: React.FC<BlurredCodeExampleProps> = ({
	children,
	className
}) => {
	const [revealed, setRevealed] = React.useState(false)

	return (
		<div
			className={cn(
				'relative w-full min-w-0 transition-all duration-200',
				revealed ? 'h-auto' : 'h-48 sm:h-64',
				className
			)}
		>
			<div
				className={cn(
					'rounded-md bg-muted overflow-x-auto min-w-0 w-full',
					revealed ? 'overflow-visible' : 'h-full overflow-hidden'
				)}
			>
				{children}
			</div>

			{!revealed && (
				<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
					<div className='pointer-events-none absolute inset-0'>
						<LetterGlitch
							glitchSpeed={100}
							centerVignette={true}
							outerVignette={true}
							smooth={true}
							glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
							characters={
								'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
							}
						/>
					</div>
					<div className='pointer-events-auto relative z-10 flex flex-col items-center gap-3 px-4 text-center'>
						<p className='text-base font-extrabold leading-snug text-white max-w-xs sm:text-xl'>
							Попробуй самостоятельно написать алгоритм, а затем сравнить
						</p>
						<Button size='sm' variant='outline' onClick={() => setRevealed(true)} className='backdrop-blur-xs cursor-pointer'>
							{/* <EyeIcon className='h-4 w-4' /> */}
							Показать решение
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default BlurredCodeExample


