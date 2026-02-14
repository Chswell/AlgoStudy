import Link from 'next/link'

import PublicLayout from '@/app/layouts/PublicLayout'

const SearchPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
						Поиск в массивах и структурах данных
					</h1>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Простое объяснение, как найти нужный элемент в данных: от линейного
						поиска до более «умных» подходов.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Базовые алгоритмы поиска
					</h2>
					<ul className='space-y-3 text-sm sm:text-base'>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/search/linear' className='flex flex-col gap-1'>
								<span className='font-medium'>Линейный поиск</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Простой алгоритм: проверяем элементы по порядку, пока не найдём
									нужный. Подходит для небольших массивов.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/search/binary' className='flex flex-col gap-1'>
								<span className='font-medium'>Бинарный поиск</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Быстрый поиск в отсортированном массиве: на каждом шаге
									отбрасываем половину элементов.
								</span>
							</Link>
						</li>
					</ul>
				</section>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Поиск в графах
					</h2>
					<ul className='space-y-3 text-sm sm:text-base'>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/search/bfs-dfs' className='flex flex-col gap-1'>
								<span className='font-medium'>BFS и DFS</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Обход в ширину (BFS) и в глубину (DFS) — два основных способа
									поиска в графах.
								</span>
							</Link>
						</li>
						<li className='rounded-lg border bg-card px-4 py-3 transition hover:bg-accent'>
							<Link href='/sections/search/dijkstra' className='flex flex-col gap-1'>
								<span className='font-medium'>Алгоритм Дейкстры</span>
								<span className='text-xs text-muted-foreground sm:text-sm'>
									Находит кратчайший путь от одной вершины до всех остальных во
									взвешенном графе.
								</span>
							</Link>
						</li>
					</ul>
				</section>
			</div>
		</PublicLayout>
	)
}

export default SearchPage


