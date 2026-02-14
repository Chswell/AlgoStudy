'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

import PublicLayout from '@/app/layouts/PublicLayout'
import { ROADMAP } from '@/app/configs/roadmap.config'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLearningProgressStore } from '@/store/learningProgressStore'

const RoadmapPage = () => {
	const { isTopicCompleted } = useLearningProgressStore()

	// Группируем темы по категориям
	const topicsByCategory = ROADMAP.reduce((acc, topic) => {
		if (!acc[topic.category]) {
			acc[topic.category] = []
		}
		acc[topic.category].push(topic)
		return acc
	}, {} as Record<string, typeof ROADMAP>)

	const categories = Object.keys(topicsByCategory)

	// Подсчитываем прогресс по категориям
	const getCategoryProgress = (categoryTopics: typeof ROADMAP) => {
		const completed = categoryTopics.filter((topic) => isTopicCompleted(topic.url)).length
		return { completed, total: categoryTopics.length }
	}

	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
						Roadmap изучения алгоритмов
					</h1>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Пошаговый план изучения алгоритмов и структур данных. Следуй порядку для
						лучшего понимания материала.
					</p>
				</header>

				<section className='space-y-6'>
					{categories.map(category => {
						const progress = getCategoryProgress(topicsByCategory[category])
						return (
							<Card key={category}>
								<CardHeader>
									<CardTitle className='flex flex-col gap-2 sm:flex-row sm:items-center'>
										<span>{category}</span>
										<Badge variant='secondary' className='w-fit'>
											{progress.completed}/{progress.total} изучено
										</Badge>
									</CardTitle>
									<CardDescription>
										Изучи эти темы в предложенном порядке
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ol className='space-y-2'>
										{topicsByCategory[category].map((topic, index) => {
											const completed = isTopicCompleted(topic.url)
											return (
												<li key={topic.id}>
													<Link
														href={topic.url}
														className={`flex items-center gap-2 sm:gap-3 rounded-md border px-3 py-2 sm:px-4 sm:py-3 transition hover:bg-accent ${
															completed
																? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
																: 'bg-card'
														}`}
													>
														<span
															className={`flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
																completed
																	? 'bg-emerald-500 text-white'
																	: 'bg-primary/10 text-primary'
															}`}
														>
															{completed ? (
																<Check className='h-3 w-3 sm:h-4 sm:w-4' />
															) : (
																index + 1
															)}
														</span>
														<span className='flex-1 text-xs sm:text-sm font-medium'>{topic.title}</span>
														{completed && (
															<Badge variant='outline' className='text-xs shrink-0'>
																Изучено
															</Badge>
														)}
													</Link>
												</li>
											)
										})}
									</ol>
								</CardContent>
							</Card>
						)
					})}
				</section>

				<section className='rounded-lg border bg-card p-4 sm:p-6'>
					<h2 className='mb-3 sm:mb-4 text-lg sm:text-xl font-semibold'>Как использовать roadmap</h2>
					<ul className='space-y-2 text-xs sm:text-sm text-muted-foreground'>
						<li className='flex items-start gap-2'>
							<span className='mt-1'>•</span>
							<span>
								Изучай темы последовательно, начиная с основ. Каждая тема строится на
								предыдущих знаниях.
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='mt-1'>•</span>
							<span>
								На каждой странице используй кнопки "Назад" и "Вперед" для навигации
								по roadmap.
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='mt-1'>•</span>
							<span>
								Обращай внимание на раздел "Полезные темы" - там указаны связанные
								темы для лучшего понимания.
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='mt-1'>•</span>
							<span>
								Не спеши! Лучше хорошо понять одну тему, чем поверхностно изучить
								несколько.
							</span>
						</li>
					</ul>
				</section>
			</div>
		</PublicLayout>
	)
}

export default RoadmapPage

