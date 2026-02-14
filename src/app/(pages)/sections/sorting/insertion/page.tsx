import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'

interface IInsertionSortPageProps {}

const InsertionSortPage: React.FC<IInsertionSortPageProps> = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-8 py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Сортировка вставками
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Строит отсортированную последовательность, по одному добавляя элементы
						на нужные позиции.
					</p>
				</header>

				<section className='space-y-4'>
						<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
							Идея алгоритма
						</h2>
						<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
							Мы последовательно берём элементы массива (как карты из колоды) и
							вставляем их в уже отсортированную часть слева так, чтобы порядок
							сохранялся. Для вставки элементы сдвигаются вправо, пока не найдётся
							подходящее место.
						</p>

						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium'>Асимптотика:</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>
									Время (худший / средний случай):{' '}
									<Badge variant='secondary'>O(n²)</Badge>
								</li>
								<li>
									Время (лучший случай — почти отсортированный массив):{' '}
									<Badge variant='secondary'>O(n)</Badge>
								</li>
								<li>
									Память: <Badge variant='secondary'>O(1)</Badge>
								</li>
								<li>Стабильная сортировка</li>
							</ul>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
								Когда использовать
							</h3>
							<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground'>
								<li>Маленькие массивы;</li>
								<li>Почти отсортированные данные;</li>
								<li>
									Как «база» для гибридных алгоритмов (например, в быстрой
									сортировке для маленьких подмассивов).
								</li>
							</ul>
						</div>

						<div className='grid gap-4 md:grid-cols-2'>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-emerald-600 dark:text-emerald-400'>
									Плюсы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Очень хорошо работает на почти отсортированных массивах;</li>
									<li>Простая реализация;</li>
									<li>Стабильная сортировка.</li>
								</ul>
							</div>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-red-600 dark:text-red-400'>
									Минусы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Квадратичное время в худшем случае;</li>
									<li>Подходит только для относительно небольших массивов;</li>
									<li>Много сдвигов элементов при «плохом» порядке данных.</li>
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
											<code>{`function insertionSort(arr) {
  const a = [...arr];
  const n = a.length;

  for (let i = 1; i < n; i++) {
    const current = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > current) {
      a[j + 1] = a[j];
      j--;
    }

    a[j + 1] = current;
  }

  return a;
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='py'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`def insertion_sort(arr):
    a = arr[:]

    for i in range(1, len(a)):
        current = a[i]
        j = i - 1

        while j >= 0 and a[j] > current:
            a[j + 1] = a[j]
            j -= 1

        a[j + 1] = current

    return a`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='cpp'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`#include <vector>

std::vector<int> insertionSort(std::vector<int> arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        int current = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = current;
    }
    return arr;
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='java'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`import java.util.Arrays;

public static int[] insertionSort(int[] arr) {
    int[] a = Arrays.copyOf(arr, arr.length);
    int n = a.length;
    
    for (int i = 1; i < n; i++) {
        int current = a[i];
        int j = i - 1;
        
        while (j >= 0 && a[j] > current) {
            a[j + 1] = a[j];
            j--;
        }
        
        a[j + 1] = current;
    }
    
    return a;
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

export default InsertionSortPage
