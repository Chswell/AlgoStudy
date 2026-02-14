import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const DijkstraPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Алгоритм Дейкстры
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Алгоритм поиска кратчайших путей от одной вершины до всех остальных в
						графе с неотрицательными весами рёбер.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Идея алгоритма простыми словами
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						Мы представляем граф как сеть дорог, где веса рёбер — это длина или
						стоимость пути. Алгоритм Дейкстры постепенно «расширяет» зону вершин, для
						которых уже известно лучшее расстояние от старта. На каждом шаге мы
						выбираем вершину с минимальной текущей оценкой расстояния и пытаемся
						улучшить пути к её соседям.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Асимптотика (классическая реализация):</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								С приоритетной очередью (кучей):{' '}
								<Badge variant='secondary'>O((V + E) log V)</Badge>
							</li>
							<li>
								Память: <Badge variant='secondary'>O(V)</Badge> для хранения
								расстояний и очереди
							</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Находит оптимальные кратчайшие пути при неотрицательных весах;</li>
								<li>Подходит для многих реальных задач (навигаторы, сети);</li>
								<li>Хорошо комбинируется с кучей (heap) и другими структурами.</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>Минусы</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Не работает корректно, если есть отрицательные веса рёбер;</li>
								<li>Реализация сложнее, чем у BFS/DFS;</li>
								<li>На очень больших графах может быть медленным без оптимизаций.</li>
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
										<code>{`// adj: объект { v: [ { to, weight }, ... ] }
function dijkstra(adj, start) {
  const dist = {};
  const visited = new Set();

  for (const v in adj) {
    dist[v] = Infinity;
  }
  dist[start] = 0;

  while (true) {
    let vMin = null;
    let best = Infinity;

    for (const v in dist) {
      if (!visited.has(v) && dist[v] < best) {
        best = dist[v];
        vMin = v;
      }
    }

    if (vMin === null) break;
    visited.add(vMin);

    for (const edge of adj[vMin] ?? []) {
      const to = edge.to;
      const w = edge.weight;
      if (dist[vMin] + w < dist[to]) {
        dist[to] = dist[vMin] + w;
      }
    }
  }

  return dist;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='py'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`import heapq

def dijkstra(adj, start):
    # adj: dict[v] = list of (to, weight)
    dist = {v: float('inf') for v in adj}
    dist[start] = 0

    heap = [(0, start)]  # (distance, vertex)

    while heap:
        d, v = heapq.heappop(heap)
        if d > dist[v]:
            continue

        for to, w in adj.get(v, []):
            if dist[v] + w < dist[to]:
                dist[to] = dist[v] + w
                heapq.heappush(heap, (dist[to], to))

    return dist`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <vector>
#include <queue>
#include <limits>

using pii = std::pair<int, int>; // (distance, vertex)

std::vector<int> dijkstra(const std::vector<std::vector<pii>>& adj, int start) {
    const int INF = std::numeric_limits<int>::max();
    int n = adj.size();
    std::vector<int> dist(n, INF);
    dist[start] = 0;

    std::priority_queue<pii, std::vector<pii>, std::greater<pii>> pq;
    pq.push({0, start});

    while (!pq.empty()) {
        auto [d, v] = pq.top();
        pq.pop();
        if (d > dist[v]) continue;

        for (auto [to, w] : adj[v]) {
            if (dist[v] + w < dist[to]) {
                dist[to] = dist[v] + w;
                pq.push({dist[to], to});
            }
        }
    }

    return dist;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='java'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`import java.util.*;

public static int[] dijkstra(List<List<int[]>> adj, int start) {
    int n = adj.size();
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>(
        (a, b) -> Integer.compare(a[0], b[0])
    );
    pq.offer(new int[]{0, start});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int d = curr[0], v = curr[1];
        if (d > dist[v]) continue;
        
        for (int[] edge : adj.get(v)) {
            int to = edge[0], w = edge[1];
            if (dist[v] + w < dist[to]) {
                dist[to] = dist[v] + w;
                pq.offer(new int[]{dist[to], to});
            }
        }
    }
    
    return dist;
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

export default DijkstraPage


