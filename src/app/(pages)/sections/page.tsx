import type { Metadata } from 'next'
import Link from 'next/link'

import PublicLayout from '@/app/layouts/PublicLayout'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
	title: 'Разделы по алгоритмам и структурам данных',
	description:
		'Выбери тему для изучения: сортировки, поиск, графы, хеш-таблицы и многое другое. Простые объяснения с примерами кода на JavaScript, Python и C++.',
	path: '/sections',
	keywords: [
		'алгоритмы',
		'структуры данных',
		'сортировка',
		'поиск',
		'графы',
		'хеш-таблицы',
		'очередь',
		'стек',
		'обучение программированию'
	]
})

const SectionsPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
						Разделы по алгоритмам и структурам данных
					</h1>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Выбери тему, чтобы посмотреть объяснения простым языком, плюсы/минусы и
						примеры кода на разных языках.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Основные разделы
					</h2>
					<ul className='space-y-3 text-sm sm:text-base'>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/general' className='flex flex-col gap-1'>
								<span className='font-medium'>Общая информация</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Что такое алгоритм, зачем нужна асимптотика и как эффективно
									учить алгоритмы.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting' className='flex flex-col gap-1'>
								<span className='font-medium'>Сортировки</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Пузырьковая, выбором, вставками, слиянием, быстрая и кучей с
									анимациями и кодом.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/search' className='flex flex-col gap-1'>
								<span className='font-medium'>Поиск</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Линейный и бинарный поиск, обходы графов и алгоритм Дейкстры.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/queue-stack' className='flex flex-col gap-1'>
								<span className='font-medium'>Очередь и стек</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Интуитивное объяснение LIFO/FIFO и реализации в коде.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/graphs' className='flex flex-col gap-1'>
								<span className='font-medium'>Графы, BFS и DFS</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Что такое графы и как по ним проходить в ширину и в глубину.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/hash-tables' className='flex flex-col gap-1'>
								<span className='font-medium'>Хеш-таблицы</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Идея словаря, коллизии и практические примеры использования.
								</span>
							</Link>
						</li>
					</ul>
				</section>
			</div>
		</PublicLayout>
	)
}

export default SectionsPage


