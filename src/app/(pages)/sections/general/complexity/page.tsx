import PublicLayout from '@/app/layouts/PublicLayout'

import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ComplexityPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-8 py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Классы сложности алгоритмов
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Подробное объяснение основных классов сложности и их практическое применение.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Основные классы сложности
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Big-O нотация описывает, как время выполнения алгоритма растёт с увеличением размера входных данных. 
						Это позволяет сравнивать алгоритмы и выбирать оптимальный для конкретной задачи.
					</p>
					
					<div className='grid gap-4 md:grid-cols-2'>
						<Card>
							<CardHeader className='pb-3'>
								<CardTitle className='text-sm flex items-center gap-2'>
									<Badge variant='secondary' className='font-mono'>O(1)</Badge>
									<span>Константная</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Время выполнения не зависит от размера данных.</p>
								<p className='font-medium text-foreground'>Примеры:</p>
								<ul className='list-inside list-disc space-y-1'>
									<li>Доступ к элементу массива по индексу</li>
									<li>Добавление элемента в конец массива</li>
									<li>Получение размера структуры данных</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='pb-3'>
								<CardTitle className='text-sm flex items-center gap-2'>
									<Badge variant='secondary' className='font-mono'>O(log n)</Badge>
									<span>Логарифмическая</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Очень быстро растёт. При удвоении данных время увеличивается всего на одну операцию.</p>
								<p className='font-medium text-foreground'>Примеры:</p>
								<ul className='list-inside list-disc space-y-1'>
									<li>Бинарный поиск в отсортированном массиве</li>
									<li>Поиск в сбалансированном бинарном дереве</li>
									<li>Операции в куче (heap)</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='pb-3'>
								<CardTitle className='text-sm flex items-center gap-2'>
									<Badge variant='secondary' className='font-mono'>O(n)</Badge>
									<span>Линейная</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Время растёт пропорционально размеру данных. Удвоение данных = удвоение времени.</p>
								<p className='font-medium text-foreground'>Примеры:</p>
								<ul className='list-inside list-disc space-y-1'>
									<li>Линейный поиск в массиве</li>
									<li>Проход по всем элементам массива</li>
									<li>Поиск максимума/минимума</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='pb-3'>
								<CardTitle className='text-sm flex items-center gap-2'>
									<Badge variant='secondary' className='font-mono'>O(n log n)</Badge>
									<span>Линейно-логарифмическая</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Хорошая сложность для сортировок. Практически оптимально для сравнения элементов.</p>
								<p className='font-medium text-foreground'>Примеры:</p>
								<ul className='list-inside list-disc space-y-1'>
									<li>Быстрая сортировка (в среднем)</li>
									<li>Сортировка слиянием</li>
									<li>Сортировка кучей</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='pb-3'>
								<CardTitle className='text-sm flex items-center gap-2'>
									<Badge variant='secondary' className='font-mono'>O(n²)</Badge>
									<span>Квадратичная</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Медленно для больших данных. Удвоение данных = увеличение времени в 4 раза.</p>
								<p className='font-medium text-foreground'>Примеры:</p>
								<ul className='list-inside list-disc space-y-1'>
									<li>Пузырьковая сортировка</li>
									<li>Сортировка выбором</li>
									<li>Вложенные циклы по массиву</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='pb-3'>
								<CardTitle className='text-sm flex items-center gap-2'>
									<Badge variant='secondary' className='font-mono'>O(2ⁿ)</Badge>
									<span>Экспоненциальная</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Очень медленно, практически неприменимо для больших данных.</p>
								<p className='font-medium text-foreground'>Примеры:</p>
								<ul className='list-inside list-disc space-y-1'>
									<li>Перебор всех подмножеств</li>
									<li>Некоторые задачи оптимизации</li>
									<li>Рекурсивные алгоритмы без мемоизации</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				<section className='space-y-3'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Практические примеры
					</h2>
					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium mb-2'>Сравнение сложностей на массиве из 1,000,000 элементов:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li><code className='rounded bg-muted px-1 py-0.5 text-xs'>O(1)</code> — 1 операция</li>
							<li><code className='rounded bg-muted px-1 py-0.5 text-xs'>O(log n)</code> — ~20 операций</li>
							<li><code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n)</code> — 1,000,000 операций</li>
							<li><code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n log n)</code> — ~20,000,000 операций</li>
							<li><code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n²)</code> — 1,000,000,000,000 операций</li>
						</ul>
						<p className='mt-3 text-xs italic text-muted-foreground'>
							Видно, что разница между O(n) и O(n²) огромна! Поэтому важно выбирать правильный алгоритм.
						</p>
					</div>
				</section>

				<div className='flex justify-center pt-4'>
					<MarkAsLearnedButton />
				</div>
			</div>
		</PublicLayout>
	)
}

export default ComplexityPage

