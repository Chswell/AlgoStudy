import PublicLayout from '@/app/layouts/PublicLayout'

import BlurredCodeExample from '@/components/BlurredCodeExample'
import { CodeTabs, TabsContent, TabsList, TabsTrigger } from '@/components/CodeTabs'
import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const HashCollisionsPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Коллизии в хеш-таблицах и методы решения
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Коллизия — это когда разные ключи попадают в одну и ту же ячейку
						массива. Нужно уметь с этим работать, чтобы таблица оставалась быстрой.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
						Популярные способы обработки коллизий
					</h2>
					<ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground sm:text-base'>
						<li>
							<strong>Метод цепочек</strong> — в каждой ячейке массива хранится список
							(цепочка) всех элементов, попавших в этот индекс;
						</li>
						<li>
							<strong>Открытая адресация</strong> — если место занято, ищем другую
							свободную ячейку по какому-то правилу (линейное/квадратичное
							зондирование).
						</li>
					</ul>

					<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
						<p className='font-medium'>Сложность при хорошей хеш-функции:</p>
						<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
							<li>
								<Badge variant='secondary'>O(1)</Badge> в среднем для вставки и
								поиска;
							</li>
							<li>
								В худшем случае — <Badge variant='secondary'>O(n)</Badge>, если много
								коллизий.
							</li>
						</ul>
					</div>

					<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-emerald-600 dark:text-emerald-400'>
								Плюсы хорошей хеш-таблицы
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Очень быстрый доступ к данным по ключу;</li>
								<li>Удобна для хранения словарей, кэшей, счётчиков;</li>
								<li>Поддерживает большое количество операций за амортизированное O(1).</li>
							</ul>
						</div>
						<div className='space-y-2 rounded-lg border bg-card p-4 text-sm'>
							<p className='font-medium text-red-600 dark:text-red-400'>
								Подводные камни
							</p>
							<ul className='list-inside list-disc space-y-1 text-muted-foreground'>
								<li>Нужна хорошая хеш-функция, чтобы уменьшить число коллизий;</li>
								<li>При плохой реализации может сильно деградировать до O(n);</li>
								<li>Неупорядоченность ключей (обычно порядок не гарантируется).</li>
							</ul>
						</div>
					</div>

					<div className='space-y-3'>
						<h3 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
							Примеры использования хеш-таблиц
						</h3>
						<CodeTabs className='w-full'>
							<TabsList>
								<TabsTrigger value='js'>JavaScript</TabsTrigger>
								<TabsTrigger value='py'>Python</TabsTrigger>
								<TabsTrigger value='cpp'>C++</TabsTrigger>
							</TabsList>
							<TabsContent value='js'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`// Подсчёт количества вхождений символов
function countChars(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  return freq;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='py'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`from collections import Counter

def count_chars(s: str):
    return Counter(s)`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='cpp'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`#include <unordered_map>
#include <string>

std::unordered_map<char, int> countChars(const std::string& s) {
    std::unordered_map<char, int> freq;
    for (char c : s) {
        ++freq[c];
    }
    return freq;
}`}</code>
									</pre>
								</BlurredCodeExample>
							</TabsContent>
							<TabsContent value='java'>
								<BlurredCodeExample>
									<pre className='mt-2 p-3 text-xs sm:text-sm'>
										<code>{`import java.util.*;

public static Map<Character, Integer> countChars(String s) {
    Map<Character, Integer> freq = new HashMap<>();
    for (char c : s.toCharArray()) {
        freq.put(c, freq.getOrDefault(c, 0) + 1);
    }
    return freq;
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

export default HashCollisionsPage


