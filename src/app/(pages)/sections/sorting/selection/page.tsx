import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'

interface ISelectionSortPageProps {}

const SelectionSortPage: React.FC<ISelectionSortPageProps> = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-8 py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Сортировка выбором
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						На каждом шаге ищет минимальный элемент в неотсортированной части и
						ставит его на своё место.
					</p>
				</header>

				<section className='space-y-4'>
						<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
							Идея алгоритма
						</h2>
						<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
							Массив условно делится на отсортированную и неотсортированную части.
							Сначала отсортированная часть пуста. На каждом шаге мы ищем минимум в
							неотсортированной части и меняем его местами с первым элементом этой
							части. Отсортированная область растёт слева направо.
						</p>

						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium'>Асимптотика:</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>
									Время (любой случай): <Badge variant='secondary'>O(n²)</Badge>
								</li>
								<li>
									Память: <Badge variant='secondary'>O(1)</Badge>
								</li>
								<li>Не является стабильной сортировкой</li>
							</ul>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
								Когда использовать
							</h3>
							<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground'>
								<li>Когда важна простота реализации</li>
								<li>Когда стоимость обмена элементов низкая</li>
								<li>Для очень маленьких массивов и учебных примеров</li>
							</ul>
						</div>

						<div className='grid gap-4 md:grid-cols-2'>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-emerald-600 dark:text-emerald-400'>
									Плюсы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Простая идея и реализация;</li>
									<li>Минимальное число обменов элементов;</li>
									<li>Предсказуемое поведение независимо от входных данных.</li>
								</ul>
							</div>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-red-600 dark:text-red-400'>
									Минусы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Такая же квадратичная сложность, как у пузырьковой сортировки;</li>
									<li>Работает медленно на больших массивах;</li>
									<li>Не стабильный алгоритм — порядок равных элементов может меняться.</li>
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
											<code>{`function selectionSort(arr) {
  const a = [...arr];
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
    }
  }

  return a;
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='py'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`def selection_sort(arr):
    a = arr[:]
    n = len(a)

    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if a[j] < a[min_index]:
                min_index = j

        if min_index != i:
            a[i], a[min_index] = a[min_index], a[i]

    return a`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='cpp'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`#include <vector>

std::vector<int> selectionSort(std::vector<int> arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            std::swap(arr[i], arr[minIndex]);
        }
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

public static int[] selectionSort(int[] arr) {
    int[] a = Arrays.copyOf(arr, arr.length);
    int n = a.length;
    
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            int temp = a[i];
            a[i] = a[minIndex];
            a[minIndex] = temp;
        }
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

export default SelectionSortPage
