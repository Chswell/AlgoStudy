'use client'

import { Check, ChevronLeft, ChevronRight, CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getNavigationTopics, getRelatedTopics, getTopicByUrl } from '@/app/configs/roadmap.config'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { useLearningProgressStore } from '@/store/learningProgressStore'

export function TopicNavigation() {
	const pathname = usePathname()
	const currentTopic = getTopicByUrl(pathname)
	const { isTopicCompleted } = useLearningProgressStore()

	if (!currentTopic) {
		return null
	}

	const { prev, next } = getNavigationTopics(pathname)
	const relatedTopics = getRelatedTopics(currentTopic, 4)

	const isPrevCompleted = prev ? isTopicCompleted(prev.url) : false
	const isNextCompleted = next ? isTopicCompleted(next.url) : false

	return (
		<div className='space-y-6 border-t pt-8'>
			{/* Навигация Назад/Вперед */}
			<div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
				{prev ? (
					<Button
						asChild
						variant={'outline'}
						className={`w-full px-5 py-7 sm:w-auto ${isPrevCompleted ? 'border-green-500 dark:border-green-500' : ''}`}
					>
						<Link href={prev.url} className='flex items-center gap-5'>
							<div className={`bg-accent rounded-full p-1`}>
								<ChevronLeft className='h-4 w-4' />
							</div>
							<span className='flex flex-col items-start gap-1'>
								<span className='text-muted-foreground text-xs'>Назад</span>
								<span className='flex items-center gap-2'>{prev.title}</span>
							</span>
							{isPrevCompleted && (
								<div>
									<CircleCheckBig className={'text-green-500'} />
								</div>
							)}
						</Link>
					</Button>
				) : (
					<div className='w-full sm:w-auto' />
				)}

				{next ? (
					<Button
						asChild
						variant={'outline'}
						className={`w-full px-5 py-7 sm:w-auto ${isNextCompleted ? 'border-green-500 dark:border-green-500' : ''}`}
					>
						<Link href={next.url} className='flex items-center gap-5'>
							{isNextCompleted && (
								<div>
									<CircleCheckBig className={'text-green-500'} />
								</div>
							)}
							<span className='flex flex-col items-end gap-1'>
								<span className='text-muted-foreground text-xs'>Вперед</span>
								<span className='flex items-center gap-2'>{next.title}</span>
							</span>
							<div className={`bg-accent rounded-full p-1`}>
								<ChevronRight className='h-4 w-4' />
							</div>
						</Link>
					</Button>
				) : (
					<div className='w-full sm:w-auto' />
				)}
			</div>

			{/* Связанные темы */}
			{relatedTopics.length > 0 && (
				<Card>
					<CardHeader>
						<CardTitle className='text-lg'>Полезные темы</CardTitle>
						<CardDescription>Рекомендуем изучить эти темы для лучшего понимания</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className='space-y-2'>
							{relatedTopics.map(topic => {
								const isCompleted = isTopicCompleted(topic.url)
								return (
									<li key={topic.id}>
										<Link
											href={topic.url}
											className={`block rounded-md border px-4 py-3 transition ${
												isCompleted
													? 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 dark:border-emerald-800 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40'
													: 'bg-card hover:bg-accent'
											}`}
										>
											<div className='flex items-center justify-between gap-2'>
												<div className='flex flex-col gap-1'>
													<span className='text-sm font-medium'>{topic.title}</span>
													<span className='text-muted-foreground text-xs'>{topic.category}</span>
												</div>
												{isCompleted && (
													<Badge variant='outline' className='shrink-0 text-xs'>
														<Check className='mr-1 h-3 w-3' />
														Изучено
													</Badge>
												)}
											</div>
										</Link>
									</li>
								)
							})}
						</ul>
					</CardContent>
				</Card>
			)}
		</div>
	)
}
