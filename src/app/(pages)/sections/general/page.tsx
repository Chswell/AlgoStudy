import PublicLayout from '@/app/layouts/PublicLayout'

import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'

const GeneralPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Алгоритмы простыми словами
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Эта страница объясняет базовые идеи, без которых сложные алгоритмы и
						структуры данных будут казаться магией.
					</p>
				</header>

				<section className='space-y-3'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Что такое алгоритм
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Алгоритм — это понятная и конечная последовательность шагов, которая
						говорит компьютеру (или человеку), что именно нужно сделать, чтобы решить
						задачу. Как рецепт в кулинарии: чёткие действия, в определённом порядке.
					</p>
				</section>

				<section className='space-y-3'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Почему важна скорость (сложность алгоритма)
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Один и тот же результат можно получить разными способами. Одни алгоритмы
						работают быстро даже на огромных массивах данных, другие — начинают
						«тупить» уже на тысячах элементов. Чтобы сравнивать алгоритмы, придумали
						понятие асимптотической сложности (Big-O нотация).
					</p>
					<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground sm:text-base'>
						<li>
							<code className='rounded bg-muted px-1 py-0.5 text-xs'>O(1)</code> — почти
							мгновенно, время не зависит от размера данных;
						</li>
						<li>
							<code className='rounded bg-muted px-1 py-0.5 text-xs'>O(log n)</code> — очень
							быстро (например, бинарный поиск);
						</li>
						<li>
							<code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n)</code> — время
							растёт линейно (каждый элемент нужно посмотреть хотя бы раз);
						</li>
						<li>
							<code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n²)</code> — медленно,
							но ещё терпимо для небольших задач (часто в простых сортировках).
						</li>
					</ul>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base mt-3'>
						Подробнее о сложности алгоритмов и её оценке читайте в отдельных разделах:
					</p>
					<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground sm:text-base'>
						<li>
							<a href='/sections/general/complexity' className='text-primary hover:underline'>
								Классы сложности алгоритмов
							</a>
						</li>
						<li>
							<a href='/sections/general/complexity-analysis' className='text-primary hover:underline'>
								Как оценивать сложность алгоритма
							</a>
						</li>
					</ul>
				</section>

				<section className='space-y-3'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Как изучать алгоритмы эффективно
					</h2>
					<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground sm:text-base'>
						<li>Сначала понять идею простыми словами и на картинке/анимации;</li>
						<li>Потом посмотреть псевдокод или реализацию на знакомом языке;</li>
						<li>Разобраться, какая у алгоритма сложность и почему именно такая;</li>
						<li>Решить 2–3 простые задачи, применяя алгоритм руками и в коде.</li>
					</ul>
				</section>

				<div className='flex justify-center pt-4'>
					<MarkAsLearnedButton />
				</div>
			</div>
		</PublicLayout>
	)
}

export default GeneralPage
