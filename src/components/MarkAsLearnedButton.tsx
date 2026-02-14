'use client'

import { BookOpen, Check } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { useLearningProgressStore } from '@/store/learningProgressStore'

export const MarkAsLearnedButton = () => {
	const pathname = usePathname()
	const { isTopicCompleted, toggleTopic } = useLearningProgressStore()
	const isCompleted = isTopicCompleted(pathname)

	return (
		<Button
			variant={isCompleted ? 'default' : 'outline'}
			size='sm'
			onClick={() => toggleTopic(pathname)}
			className='shrink-0 cursor-pointer gap-2'
		>
			{isCompleted ? (
				<>
					<Check className='h-4 w-4' />
					<span className='hidden sm:inline'>Изучено</span>
					<span className='sm:hidden'>✓</span>
				</>
			) : (
				<>
					<BookOpen className='h-4 w-4' />
					<span className='hidden sm:inline'>Отметить изученным</span>
					<span className='sm:hidden'>Изучить</span>
				</>
			)}
		</Button>
	)
}
