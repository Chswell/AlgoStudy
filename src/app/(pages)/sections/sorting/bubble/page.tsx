import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'

interface IBubbleSortPageProps {}

const BubbleSortPage: React.FC<IBubbleSortPageProps> = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-8 py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Пузырьковая сортировка
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Один из самых простых для понимания алгоритмов сортировки, полезен для
						обучения, но редко используется на практике из-за низкой эффективности.
					</p>
				</header>

				<section className='space-y-4'>
						<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
							Идея алгоритма
						</h2>
						<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
							Массив многократно просматривается слева направо. На каждом проходе
							соседние элементы сравниваются и при необходимости меняются местами.
							Крупные элементы как бы «всплывают» к концу массива, как пузырьки.
						</p>

						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium'>Асимптотика:</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>
									Время (худший / средний случай):{' '}
									<Badge variant='secondary'>O(n²)</Badge>
								</li>
								<li>
									Время (лучший случай — массив уже отсортирован):{' '}
									<Badge variant='secondary'>O(n)</Badge>
								</li>
								<li>
									Память: <Badge variant='secondary'>O(1)</Badge> — сортировка
									«на месте»
								</li>
								<li>Стабильный алгоритм: порядок равных элементов сохраняется</li>
							</ul>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
								Когда использовать
							</h3>
							<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground'>
								<li>Для обучения базовым идеям сортировок</li>
								<li>Для очень небольших массивов, где простота важнее скорости</li>
								<li>Когда нужна стабильная сортировка и важна понятность кода</li>
							</ul>
						</div>

						<div className='grid gap-4 md:grid-cols-2'>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-emerald-600 dark:text-emerald-400'>
									Плюсы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Очень прост для понимания и реализации;</li>
									<li>Не требует дополнительной памяти;</li>
									<li>Подходит, чтобы «почувствовать» работу сортировок.</li>
								</ul>
							</div>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-red-600 dark:text-red-400'>
									Минусы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Очень медленный на реальных данных;</li>
									<li>Даже при небольшом числе элементов делает много лишних операций;</li>
									<li>На практике почти всегда есть алгоритм лучше.</li>
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
											<code>{`function bubbleSort(arr) {
  const a = [...arr]; // копируем, чтобы не портить исходный массив
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    // каждый проход "всплывает" максимум в конец
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
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
											<code>{`def bubble_sort(arr):
    a = arr[:]  # скопировать список
    n = len(a)

    for i in range(n - 1):
        # каждый проход "всплывает" максимум в конец
        for j in range(n - 1 - i):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]

    return a`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='cpp'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`#include <vector>

std::vector<int> bubbleSort(std::vector<int> arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
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

public static int[] bubbleSort(int[] arr) {
    int[] a = Arrays.copyOf(arr, arr.length);
    int n = a.length;
    
    for (int i = 0; i < n - 1; i++) {
        // каждый проход "всплывает" максимум в конец
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
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

export default BubbleSortPage
