import PublicLayout from '@/app/layouts/PublicLayout'

import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ComplexityAnalysisPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Как оценивать сложность алгоритма
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Практическое руководство по анализу и оценке сложности алгоритмов.
					</p>
				</header>

				<section className='space-y-4'>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Оценка сложности помогает понять, насколько эффективен алгоритм. Вот основные правила:
					</p>
					
					<div className='space-y-4'>
						<Card>
							<CardHeader>
								<CardTitle className='text-base'>1. Считаем операции</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground space-y-2'>
								<p>Смотрим на код и считаем, сколько раз выполняются основные операции (сравнения, присваивания, арифметика) в зависимости от размера входных данных <code className='rounded bg-muted px-1 py-0.5 text-xs'>n</code>.</p>
								<p className='font-medium text-foreground'>Пример:</p>
								<pre className='rounded-md bg-muted p-3 text-xs overflow-x-auto'>
									<code>{`for (let i = 0; i < n; i++) {     // n итераций
  for (let j = 0; j < n; j++) { // n итераций для каждой i
    // операция
  }
}
// Итого: n × n = n² операций → O(n²)`}</code>
								</pre>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-base'>2. Берем худший случай</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								<p>Big-O нотация описывает верхнюю границу сложности — худший случай. Это гарантирует, что алгоритм не будет работать хуже указанной сложности.</p>
								<p className='mt-2'><strong>Пример:</strong> Линейный поиск может найти элемент на первой позиции (O(1)), но в худшем случае нужно проверить все элементы (O(n)). Сложность: <code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n)</code>.</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-base'>3. Игнорируем константы</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								<p>Константные множители и слагаемые не важны при больших данных. <code className='rounded bg-muted px-1 py-0.5 text-xs'>O(2n)</code> = <code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n)</code>, <code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n + 100)</code> = <code className='rounded bg-muted px-1 py-0.5 text-xs'>O(n)</code>.</p>
								<p className='mt-2'><strong>Почему:</strong> При росте данных константы становятся незначительными. Важна только зависимость от размера.</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-base'>4. Сложность по памяти</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								<p>Помимо времени выполнения, важно учитывать использование памяти. Алгоритм может быть быстрым, но требовать много памяти, или наоборот.</p>
								<ul className='list-inside list-disc space-y-1 mt-2'>
									<li><strong>O(1)</strong> — константная память (in-place алгоритмы)</li>
									<li><strong>O(n)</strong> — линейная память (нужен дополнительный массив)</li>
									<li><strong>O(n²)</strong> — квадратичная память (матрица смежности для графа)</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				<div className='flex justify-center pt-4'>
					<MarkAsLearnedButton />
				</div>
			</div>
		</PublicLayout>
	)
}

export default ComplexityAnalysisPage

