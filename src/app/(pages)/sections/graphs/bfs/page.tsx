import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const BfsPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Обход графа в ширину (BFS)
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Идём от стартовой вершины «волнами», сначала посещая всех соседей, потом
						их соседей и так далее.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Идея алгоритма
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						BFS использует очередь. Сначала в очередь кладётся стартовая вершина.
						Потом мы берём вершину из начала очереди, посещаем её и добавляем в
						очередь ещё не посещённых соседей. Так мы обходим граф слоями.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Сложность:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								Время: <Badge variant='secondary'>O(V + E)</Badge>
							</li>
							<li>
								Память: <Badge variant='secondary'>O(V)</Badge>
							</li>
							<li>V — вершины, E — рёбра.</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Находит кратчайший путь по количеству рёбер в невзвешенном графе;</li>
								<li>Работает на любых структурах графа (списки, матрицы смежности);</li>
								<li>Простая идея, легко реализовать.</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>Минусы</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Может потребовать много памяти при широких графах;</li>
								<li>Не учитывает веса рёбер.</li>
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
										<code>{`function bfs(adj, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length) {
    const v = queue.shift();
    console.log(v);
    for (const to of adj[v] ?? []) {
      if (!visited.has(to)) {
        visited.add(to);
        queue.push(to);
      }
    }
  }
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='py'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`from collections import deque

def bfs(adj, start):
    visited = set([start])
    queue = deque([start])

    while queue:
        v = queue.popleft()
        print(v)
        for to in adj.get(v, []):
            if to not in visited:
                visited.add(to)
                queue.append(to)`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <vector>
#include <queue>
#include <iostream>

void bfs(const std::vector<std::vector<int>>& adj, int start) {
    std::vector<bool> visited(adj.size(), false);
    std::queue<int> q;
    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int v = q.front();
        q.pop();
        std::cout << v << " ";
        for (int to : adj[v]) {
            if (!visited[to]) {
                visited[to] = true;
                q.push(to);
            }
        }
    }
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='java'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`import java.util.*;

public static void bfs(List<List<Integer>> adj, int start) {
    boolean[] visited = new boolean[adj.size()];
    Queue<Integer> queue = new LinkedList<>();
    visited[start] = true;
    queue.offer(start);
    
    while (!queue.isEmpty()) {
        int v = queue.poll();
        System.out.print(v + " ");
        for (int to : adj.get(v)) {
            if (!visited[to]) {
                visited[to] = true;
                queue.offer(to);
            }
        }
    }
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

export default BfsPage


