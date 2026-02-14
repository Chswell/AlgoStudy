import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const BfsDfsSearchPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							BFS и DFS для графов
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Два базовых способа «обойти» граф или дерево: в ширину (BFS) и в
						глубину (DFS).
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Идея BFS (поиск в ширину)
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Мы стартуем из одной вершины и сначала посещаем всех её соседей, потом
						соседей соседей и т.д. То есть идём «слоями» — сначала все вершины на
						расстоянии 1, потом 2, потом 3. Для этого обычно используют очередь.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Асимптотика BFS и DFS:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								Время: <Badge variant='secondary'>O(V + E)</Badge>, где V — число
								вершин, E — число рёбер;
							</li>
							<li>
								Память: <Badge variant='secondary'>O(V)</Badge> для хранения
								посещённых вершин и стека/очереди.
							</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы BFS
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Находит кратчайший путь по количеству рёбер в не взвешенном графе;</li>
								<li>Работает предсказуемо: идёт по слоям;</li>
								<li>Удобен для задач «минимальное количество шагов».</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы DFS
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Прост в реализации через рекурсию;</li>
								<li>Подходит для поиска пути «в глубину», проверки связности;</li>
								<li>Используется в топологической сортировке и многих задачах на графы.</li>
							</ul>
						</div>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>
								Минусы BFS
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Тратит много памяти на очередь при широких графах;</li>
								<li>Не подходит для графов с весами — там нужен Дейкстра и др.</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>
								Минусы DFS
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Не гарантирует кратчайший путь;</li>
								<li>
									Рекурсивная реализация может упереться в глубину стека на очень
									больших графах.
								</li>
							</ul>
						</div>
					</div>

					<div className='space-y-3'>
						<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
							Примеры кода (BFS и DFS)
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
										<code>{`// граф как список смежности: adj[v] = массив соседей
function bfs(adj, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const v = queue.shift();
    console.log(v);
    for (const to of adj[v] ?? []) {
      if (!visited.has(to)) {
        visited.add(to);
        queue.push(to);
      }
    }
  }
}

function dfs(adj, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (const to of adj[start] ?? []) {
    if (!visited.has(to)) {
      dfs(adj, to, visited);
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
                queue.append(to)


def dfs(adj, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for to in adj.get(start, []):
        if to not in visited:
            dfs(adj, to, visited)`}</code>
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
}

void dfs_util(const std::vector<std::vector<int>>& adj, int v,
              std::vector<bool>& visited) {
    visited[v] = true;
    std::cout << v << " ";
    for (int to : adj[v]) {
        if (!visited[to]) {
            dfs_util(adj, to, visited);
        }
    }
}

void dfs(const std::vector<std::vector<int>>& adj, int start) {
    std::vector<bool> visited(adj.size(), false);
    dfs_util(adj, start, visited);
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
}

public static void dfsUtil(List<List<Integer>> adj, int v, 
                          boolean[] visited) {
    visited[v] = true;
    System.out.print(v + " ");
    for (int to : adj.get(v)) {
        if (!visited[to]) {
            dfsUtil(adj, to, visited);
        }
    }
}

public static void dfs(List<List<Integer>> adj, int start) {
    boolean[] visited = new boolean[adj.size()];
    dfsUtil(adj, start, visited);
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

export default BfsDfsSearchPage


