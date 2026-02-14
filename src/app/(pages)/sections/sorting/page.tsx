import type { Metadata } from 'next'
import Link from 'next/link'

import PublicLayout from '@/app/layouts/PublicLayout'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
	title: 'Алгоритмы сортировки - пузырьковая, быстрая, слиянием и другие',
	description:
		'Изучи все алгоритмы сортировки: пузырьковая, выбором, вставками, слиянием, быстрая и кучей. Сложность, примеры кода на JavaScript, Python, C++ и Java.',
	path: '/sections/sorting',
	keywords: [
		'сортировка',
		'алгоритмы сортировки',
		'пузырьковая сортировка',
		'быстрая сортировка',
		'сортировка слиянием',
		'heap sort',
		'quick sort',
		'bubble sort',
		'merge sort',
		'JavaScript',
		'Python',
		'C++'
	]
})

const SortingPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
						Сортировки
					</h1>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Краткий конспект базовых алгоритмов сортировки: идеи, сложность и
						когда их стоит использовать.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Базовые алгоритмы
					</h2>
					<ul className='space-y-3 text-sm sm:text-base'>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting/bubble' className='flex flex-col gap-1'>
								<span className='font-medium'>Пузырьковая сортировка</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Простой для понимания алгоритм, который многократно проходит по
									массиву и «всплывает» большие элементы в конец.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting/selection' className='flex flex-col gap-1'>
								<span className='font-medium'>Сортировка выбором</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Находит минимум на каждом шаге и ставит его в правильную позицию.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting/insertion' className='flex flex-col gap-1'>
								<span className='font-medium'>Сортировка вставками</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Формирует отсортированную часть, «вставляя» в неё элементы один за
									другим.
								</span>
							</Link>
						</li>
					</ul>
				</section>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Быстрые алгоритмы
					</h2>
					<ul className='space-y-3 text-sm sm:text-base'>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting/quick' className='flex flex-col gap-1'>
								<span className='font-medium'>Быстрая сортировка (Quick sort)</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Разделяй и властвуй: делит массив относительно опорного элемента.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting/merge' className='flex flex-col gap-1'>
								<span className='font-medium'>Сортировка слиянием</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Рекурсивно делит массив пополам и сливает отсортированные части.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/sorting/heap' className='flex flex-col gap-1'>
								<span className='font-medium'>Пирамидальная сортировка (Heap sort)</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Использует структуру данных «куча» для эффективного выбора
									максимума.
								</span>
							</Link>
						</li>
					</ul>
				</section>
			</div>
		</PublicLayout>
	)
}

export default SortingPage
