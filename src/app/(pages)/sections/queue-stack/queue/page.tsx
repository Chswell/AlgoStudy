import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const QueuePage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Очередь (Queue)
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Структура данных «первым пришёл — первым вышел» (FIFO), как очередь в
						магазине.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Как работает очередь
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						В очередь элементы добавляются в «хвост» (enqueue), а забираются из
						«головы» (dequeue). Тот, кто пришёл раньше всех, выйдет первым.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Основные операции:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								<Badge variant='secondary'>enqueue</Badge> — добавить элемент в конец;
							</li>
							<li>
								<Badge variant='secondary'>dequeue</Badge> — забрать элемент из начала;
							</li>
							<li>
								<Badge variant='secondary'>front</Badge> — посмотреть первый элемент.
							</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Простая и быстрая структура данных;</li>
								<li>Все основные операции занимают O(1);</li>
								<li>Используется в BFS, системах очередей задач, обработке запросов.</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>Минусы</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Нельзя быстро получить произвольный элемент по индексу;</li>
								<li>Нужны дополнительные структуры (кольцевая очередь и др.) для оптимизаций.</li>
							</ul>
						</div>
					</div>

					<div className='space-y-3'>
						<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
							Пример реализации очереди
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
										<code>{`class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    return this.items.length ? this.items.shift() : null;
  }

  front() {
    return this.items.length ? this.items[0] : null;
  }
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='py'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, x):
        self.items.append(x)

    def dequeue(self):
        return self.items.popleft() if self.items else None

    def front(self):
        return self.items[0] if self.items else None`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <queue>

class Queue {
public:
    void enqueue(int x) { q.push(x); }

    int dequeue() {
        if (q.empty()) return -1;
        int x = q.front();
        q.pop();
        return x;
    }

    int front() const {
        if (q.empty()) return -1;
        return q.front();
    }

private:
    std::queue<int> q;
};`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='java'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`import java.util.LinkedList;
import java.util.Queue;

class MyQueue {
    private Queue<Integer> q = new LinkedList<>();
    
    public void enqueue(int x) {
        q.offer(x);
    }
    
    public Integer dequeue() {
        return q.isEmpty() ? null : q.poll();
    }
    
    public Integer front() {
        return q.isEmpty() ? null : q.peek();
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

export default QueuePage


