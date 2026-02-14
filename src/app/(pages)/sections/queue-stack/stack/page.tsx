import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const StackPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Стек (Stack)
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Структура данных «последним пришёл — первым вышел» (LIFO), как стопка
						книг или тарелок.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Как работает стек
					</h2>
					<p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
						В стек можно класть элементы только сверху (операция push) и забирать
						тоже только сверху (операция pop). Нельзя сразу взять элемент из середины
						— сначала нужно снять все, что выше него.
					</p>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Основные операции:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								<Badge variant='secondary'>push</Badge> — положить элемент на вершину;
							</li>
							<li>
								<Badge variant='secondary'>pop</Badge> — снять элемент с вершины;
							</li>
							<li>
								<Badge variant='secondary'>top / peek</Badge> — посмотреть верхний
								элемент, не удаляя его.
							</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Очень простая и быстрая структура данных;</li>
								<li>Операции занимают O(1) времени;</li>
								<li>
									Используется повсюду: в рекурсии, отмене действий (undo), парсинге
									скобок и т.д.
								</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>Минусы</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Доступ только к верхнему элементу;</li>
								<li>Не подходит, если нужно быстро находить произвольный элемент.</li>
							</ul>
						</div>
					</div>

					<div className='space-y-3'>
						<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
							Пример реализации стека
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
										<code>{`class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.items.pop() ?? null;
  }

  peek() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='py'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`class Stack:
    def __init__(self):
        self.items = []

    def push(self, x):
        self.items.append(x)

    def pop(self):
        return self.items.pop() if self.items else None

    def peek(self):
        return self.items[-1] if self.items else None`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <vector>

class Stack {
public:
    void push(int x) { data.push_back(x); }

    int pop() {
        if (data.empty()) return -1;
        int x = data.back();
        data.pop_back();
        return x;
    }

    int peek() const {
        if (data.empty()) return -1;
        return data.back();
    }

private:
    std::vector<int> data;
};`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='java'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`import java.util.ArrayList;

class Stack {
    private ArrayList<Integer> items = new ArrayList<>();
    
    public void push(int x) {
        items.add(x);
    }
    
    public Integer pop() {
        if (items.isEmpty()) return null;
        return items.remove(items.size() - 1);
    }
    
    public Integer peek() {
        if (items.isEmpty()) return null;
        return items.get(items.size() - 1);
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

export default StackPage


