import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'

interface IMergeSortPageProps {}

const MergeSortPage: React.FC<IMergeSortPageProps> = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-8 py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Сортировка слиянием
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Классический алгоритм «разделяй и властвуй»: делит массив пополам,
						рекурсивно сортирует части и сливает их.
					</p>
				</header>

				<section className='space-y-4'>
						<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
							Идея алгоритма
						</h2>
						<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
							Алгоритм рекурсивно делит массив на две части, пока не останутся
							массивы длины 1 (они уже отсортированы). Затем пары отсортированных
							массивов последовательно сливаются в один, сохраняя порядок элементов.
						</p>

						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium'>Асимптотика:</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>
									Время (любой случай): <Badge variant='secondary'>O(n log n)</Badge>
								</li>
								<li>
									Память: <Badge variant='secondary'>O(n)</Badge> — требуется
									дополнительный массив для слияния
								</li>
								<li>Стабильная сортировка</li>
							</ul>
						</div>

						<div className='space-y-2'>
							<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
								Когда использовать
							</h3>
							<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground'>
								<li>Для больших массивов, когда важна стабильность;</li>
								<li>Когда доступ к памяти более-менее равномерный (не in-place);</li>
								<li>В качестве базового алгоритма в стандартных библиотеках.</li>
							</ul>
						</div>

						<div className='grid gap-4 md:grid-cols-2'>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-emerald-600 dark:text-emerald-400'>
									Плюсы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Гарантированная сложность O(n log n) в любом случае;</li>
									<li>Стабильная сортировка — порядок равных элементов сохраняется;</li>
									<li>Хорошо параллелится и предсказуемо работает на любых данных.</li>
								</ul>
							</div>
							<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
								<p className='font-medium text-red-600 dark:text-red-400'>
									Минусы
								</p>
								<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
									<li>Требуется дополнительная память O(n);</li>
									<li>Реализация сложнее, чем у простых сортировок;</li>
									<li>Не является in-place (обычно создаёт новые массивы).</li>
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
											<code>{`function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='py'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result


def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='cpp'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`#include <vector>

void merge(std::vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    std::vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(std::vector<int>& arr, int l, int r) {
    if (l >= r) return;

    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}`}</code>
										</pre>
									</BlurredCodeExample>
								</TabsContent>
								<TabsContent value='java'>
									<BlurredCodeExample>
										<pre className='mt-2 p-3 text-xs sm:text-sm'>
											<code>{`import java.util.Arrays;

public static void merge(int[] arr, int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    
    int[] L = new int[n1];
    int[] R = new int[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }
    
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

public static void mergeSort(int[] arr, int l, int r) {
    if (l >= r) return;
    
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
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

export default MergeSortPage
