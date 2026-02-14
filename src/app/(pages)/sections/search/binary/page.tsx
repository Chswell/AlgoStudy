import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const BinarySearchPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Бинарный поиск
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Быстрый способ поиска в отсортированном массиве: каждый шаг делит
						диапазон пополам.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Идея алгоритма
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Мы берём середину отсортированного массива и сравниваем её с тем, что
						ищем. Если искомое число меньше середины — продолжаем искать только в
						левой половине, если больше — в правой. На каждом шаге диапазон
						уменьшается в два раза, поэтому поиск идёт очень быстро.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Асимптотика:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								Время (любой случай): <Badge variant='secondary'>O(log n)</Badge>
							</li>
							<li>
								Память: <Badge variant='secondary'>O(1)</Badge>
							</li>
							<li>Требуется предварительно отсортированный массив.</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Работает гораздо быстрее линейного поиска на больших данных;</li>
								<li>Простая идея, легко визуализировать и запомнить;</li>
								<li>Часто используется в задачах олимпиадного и интервью-уровня.</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>Минусы</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Работает только с отсортированными данными;</li>
								<li>Легко ошибиться в границах и середине (off-by-one ошибки);</li>
								<li>При частых изменениях массива сортировку придётся обновлять.</li>
							</ul>
						</div>
					</div>

					<div className='space-y-3'>
						<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
							Пример кода
						</h3>
						<CodeTabs className='w-full'>
							<TabsList>
								<TabsTrigger value='js'>JavaScript</TabsTrigger>
								<TabsTrigger value='py'>Python</TabsTrigger>
								<TabsTrigger value='cpp'>C++</TabsTrigger>
								<TabsTrigger value='java'>Java</TabsTrigger>
							</TabsList>
							<TabsContent value='js'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='py'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='java'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`public static int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
						</CodeTabs>
					</div>
				</section>

				<div className='flex justify-center pt-4'>
					<MarkAsLearnedButton />
				</div>
			</div>
		</PublicLayout>
	)
}

export default BinarySearchPage


