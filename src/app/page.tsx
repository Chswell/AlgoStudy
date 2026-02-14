/*
 * Originally authored by Nikita Streltsov (2026)
 * Licensed under Apache-2.0
 */
import Link from 'next/link'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-5xl flex-col gap-6 px-2 py-6 sm:gap-12 sm:px-4 sm:py-12 lg:py-16'>
				{/* Hero Section */}
				<header className='space-y-6 text-center'>
					<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
						Изучай алгоритмы и структуры данных
					</h1>
					<p className='text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg'>
						Простое объяснение сложных концепций. Каждый алгоритм разобран простым языком с примерами кода на
						JavaScript, Python и C++. Попробуй написать решение сам, а затем сравни с эталоном.
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<Button asChild size='lg'>
							<Link href='/sections'>Начать изучение</Link>
						</Button>
						<Button asChild size='lg' variant='outline'>
							<Link href='/sections/general'>Общая информация</Link>
						</Button>
					</div>
				</header>

				{/* Quick Links */}
				<section className='space-y-6'>
					<h2 className='scroll-m-20 text-center text-2xl font-bold tracking-tight'>Основные разделы</h2>
					<div className='grid gap-3 grid-cols-1 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						<Card className='transition hover:shadow-lg'>
							<CardHeader>
								<CardTitle>Сортировки</CardTitle>
								<CardDescription>Пузырьковая, выбором, вставками, слиянием, быстрая и кучей</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild variant='outline' className='w-full'>
									<Link href='/sections/sorting'>Перейти</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className='transition hover:shadow-lg'>
							<CardHeader>
								<CardTitle>Поиск</CardTitle>
								<CardDescription>Линейный и бинарный поиск, обходы графов и алгоритм Дейкстры</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild variant='outline' className='w-full'>
									<Link href='/sections/search'>Перейти</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className='transition hover:shadow-lg'>
							<CardHeader>
								<CardTitle>Очередь и стек</CardTitle>
								<CardDescription>Интуитивное объяснение LIFO/FIFO и реализации в коде</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild variant='outline' className='w-full'>
									<Link href='/sections/queue-stack'>Перейти</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className='transition hover:shadow-lg'>
							<CardHeader>
								<CardTitle>Графы, BFS и DFS</CardTitle>
								<CardDescription>Что такое графы и как по ним проходить в ширину и в глубину</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild variant='outline' className='w-full'>
									<Link href='/sections/graphs'>Перейти</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className='transition hover:shadow-lg'>
							<CardHeader>
								<CardTitle>Хеш-таблицы</CardTitle>
								<CardDescription>Идея словаря, коллизии и практические примеры использования</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild variant='outline' className='w-full'>
									<Link href='/sections/hash-tables'>Перейти</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className='transition hover:shadow-lg'>
							<CardHeader>
								<CardTitle>Общая информация</CardTitle>
								<CardDescription>
									Что такое алгоритм, зачем нужна асимптотика и как эффективно учить алгоритмы
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild variant='outline' className='w-full'>
									<Link href='/sections/general'>Перейти</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Features */}
				<section className='space-y-6'>
					<h2 className='scroll-m-20 text-center text-2xl font-bold tracking-tight'>Что ты найдёшь здесь</h2>
					<div className='grid gap-3 grid-cols-1 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						<div className='bg-card space-y-2 rounded-lg border p-4'>
							<h3 className='font-semibold'>Простое объяснение</h3>
							<p className='text-muted-foreground text-sm'>
								Каждый алгоритм описан простым языком, понятным даже школьнику
							</p>
						</div>
						<div className='bg-card space-y-2 rounded-lg border p-4'>
							<h3 className='font-semibold'>Примеры кода</h3>
							<p className='text-muted-foreground text-sm'>
								Реализации на JavaScript, Python и C++ с возможностью попробовать написать самому
							</p>
						</div>
						<div className='bg-card space-y-2 rounded-lg border p-4'>
							<h3 className='font-semibold'>Плюсы и минусы</h3>
							<p className='text-muted-foreground text-sm'>
								Честный разбор каждого алгоритма: когда использовать, а когда лучше выбрать другой
							</p>
						</div>
						<div className='bg-card space-y-2 rounded-lg border p-4'>
							<h3 className='font-semibold'>Асимптотика</h3>
							<p className='text-muted-foreground text-sm'>
								Подробный разбор сложности по времени и памяти для каждого случая
							</p>
						</div>
						<div className='bg-card space-y-2 rounded-lg border p-4'>
							<h3 className='font-semibold'>Визуализация</h3>
							<p className='text-muted-foreground text-sm'>
								Анимации для сортировок, помогающие понять, как работает алгоритм
							</p>
						</div>
						<div className='bg-card space-y-2 rounded-lg border p-4'>
							<h3 className='font-semibold'>Практика</h3>
							<p className='text-muted-foreground text-sm'>
								Сначала попробуй написать алгоритм сам, затем сравни с эталонным решением
							</p>
						</div>
					</div>
				</section>
			</div>
		</PublicLayout>
	)
}
