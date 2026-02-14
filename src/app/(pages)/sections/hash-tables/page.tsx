import PublicLayout from '@/app/layouts/PublicLayout'

import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Card, CardContent } from '@/components/ui/card'

const HashTablesPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-8 py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Идея хеш-таблицы
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Хеш-таблица позволяет почти мгновенно находить значение по ключу, как
						словарь: знаем слово — быстро получаем его перевод.
					</p>
				</header>

				<Card>
					<CardContent className='space-y-2 pt-6 text-sm leading-relaxed text-muted-foreground sm:text-base'>
						<p>
							Внутри хеш-таблица — это массив, куда элементы кладутся по индексу,
							который вычисляется из ключа с помощью хеш-функции. Если два ключа
							дали одинаковый индекс, возникает коллизия — её нужно уметь
							обрабатывать (например, хранить цепочку элементов).
						</p>
						<p>
							Во многих языках хеш-таблица уже реализована: в JavaScript это
							объекты и Map, в Python — dict, в C++ — unordered_map.
						</p>
					</CardContent>
				</Card>

				<div className='flex justify-center pt-4'>
					<MarkAsLearnedButton />
				</div>
			</div>
		</PublicLayout>
	)
}

export default HashTablesPage


