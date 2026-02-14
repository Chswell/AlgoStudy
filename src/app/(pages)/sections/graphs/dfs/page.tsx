import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const DfsPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Обход графа в глубину (DFS)
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Идём как можно глубже по одному направлению, пока есть куда идти, потом
						«отматываемся назад».
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Идея алгоритма
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						DFS можно представить как исследование лабиринта: ты идёшь по одному
						пути до конца, если упираешься в тупик — возвращаешься назад и пробуешь
						другой путь. Чаще всего DFS реализуют с помощью рекурсии или стека.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Сложность:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								Время: <Badge variant='secondary'>O(V + E)</Badge>
							</li>
							<li>
								Память: <Badge variant='secondary'>O(V)</Badge> (за счёт стека
								рекурсии или явного стека)
							</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Очень простая рекурсивная реализация;</li>
								<li>Подходит для поиска путей, проверки связности;</li>
								<li>Используется в топологической сортировке, поиске циклов и др.</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>Минусы</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Не находит кратчайший путь (по числу рёбер);</li>
								<li>Глубокая рекурсия может привести к переполнению стека.</li>
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
										<code>{`function dfs(adj, v, visited = new Set()) {
  visited.add(v);
  console.log(v);
  for (const to of adj[v] ?? []) {
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
										<code>{`def dfs(adj, v, visited=None):
    if visited is None:
        visited = set()
    visited.add(v)
    print(v)
    for to in adj.get(v, []):
        if to not in visited:
            dfs(adj, to, visited)`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <vector>
#include <iostream>

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

export default DfsPage


