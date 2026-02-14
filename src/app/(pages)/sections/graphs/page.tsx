import PublicLayout from '@/app/layouts/PublicLayout'

import { MarkAsLearnedButton } from '@/components/MarkAsLearnedButton'
import { Card, CardContent } from '@/components/ui/card'

const GraphsPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
							Что такое граф
						</h1>
						<MarkAsLearnedButton />
					</div>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Граф — это набор точек (вершин) и линий между ними (рёбер). Через графы
						удобно описывать дороги, друзей в соцсетях, связи компьютеров и многое
						другое.
					</p>
				</header>

				<Card>
					<CardContent className='space-y-2 pt-6 text-sm leading-relaxed text-muted-foreground sm:text-base'>
						<p>
							Вершины графа — это объекты (города, пользователи, страницы), а рёбра —
							связи между ними (дороги, дружба, ссылки). Рёбра могут быть
							направленными (стрелки) или ненаправленными (обычные линии), а также
							иметь вес (например, расстояние или стоимость).
						</p>
						<p>
							Большинство алгоритмов на графах строятся вокруг обхода графа —
							последовательного посещения вершин по рёбрам. Базовые способы обхода —
							это BFS (в ширину) и DFS (в глубину).
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

export default GraphsPage


