import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'

interface IQuickSortPageProps {}

const QuickSortPage: React.FC<IQuickSortPageProps> = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8 overflow-x-hidden'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Быстрая сортировка (Quick sort)
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Один из самых популярных и быстрых на практике алгоритмов сортировки на
						основе стратегии «разделяй и властвуй».
					</p>
				</header>

				<section className='space-y-4'>
						<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
							Идея алгоритма
						</h2>
						<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
							Выбирается опорный элемент (pivot). Массив разделяется на элементы
							меньше опорного и больше (или равные). Затем эти подмассивы
							рекурсивно сортируются тем же методом. В итоге весь массив оказывается
							отсортированным.
						</p>

						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium'>Асимптотика:</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>
									Время (средний случай):{' '}
									<Badge variant='secondary'>O(n log n)</Badge>
								</li>
								<li>
									Время (худший случай — неудачный выбор опорного):{' '}
									<Badge variant='secondary'>O(n²)</Badge>
								</li>
								<li>
									Память: в среднем <Badge variant='secondary'>O(log n)</Badge> за
									счёт стека рекурсии
								</li>
								<li>Обычно не является стабильной сортировкой</li>
							</ul>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
								Когда использовать
							</h3>
							<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground'>
								<li>Для больших массивов в реальных приложениях;</li>
								<li>Когда важна скорость и можно пожертвовать стабильностью;</li>
								<li>Когда данные расположены случайно, без особой структуры.</li>
							</ul>
						</div>

						<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-emerald-600 dark:text-emerald-400'>
									Плюсы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Очень быстрая на практике при хорошем выборе опорного элемента;</li>
									<li>Работает in-place, не требует много памяти;</li>
									<li>Проста для оптимизаций и гибридных решений.</li>
								</ul>
							</div>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-red-600 dark:text-red-400'>
									Минусы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Худший случай — O(n²);</li>
									<li>Не является стабильной сортировкой;</li>
									<li>При неудачном выборе опорного может сильно замедлиться.</li>
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
										<pre className='mt-2 p-3 text-xs sm:text-sm overflow-x-auto'>
											<code>{`function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (const x of arr) {
    if (x < pivot) left.push(x);
    else if (x > pivot) right.push(x);
    else equal.push(x);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='py'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm overflow-x-auto'>
											<code>{`def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + equal + quick_sort(right)`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='cpp'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm overflow-x-auto'>
											<code>{`#include <vector>

int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            ++i;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low >= high) return;

    int p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='java'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm overflow-x-auto'>
											<code>{`public static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

public static void quickSort(int[] arr, int low, int high) {
    if (low >= high) return;
    
    int p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
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

export default QuickSortPage
