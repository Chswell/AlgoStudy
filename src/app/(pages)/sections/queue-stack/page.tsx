import Link from 'next/link'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Card, CardContent } from '@/components/ui/card'

const QueueStackPage = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-3xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>Стек и очередь</h1>
					<p className='text-muted-foreground text-sm sm:text-base'>
						Две базовые структуры данных, которые часто встречаются в задачах и алгоритмах.
					</p>
				</header>

				<div className='grid gap-3 grid-cols-1 sm:gap-4 md:grid-cols-2'>
					<Card>
						<CardContent className='text-muted-foreground space-y-2 pt-6 text-sm'>
							<p className='text-foreground font-semibold'>Стек (Stack)</p>
							<p>
								Стек работает по принципу «последним пришёл — первым вышел» (LIFO). Это как стопка тарелок: мы кладём
								новые сверху и убираем тоже сверху.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='text-muted-foreground space-y-2 pt-6 text-sm'>
							<p className='text-foreground font-semibold'>Очередь (Queue)</p>
							<p>
								Очередь работает по принципу «первым пришёл — первым вышел» (FIFO). Как живая очередь в магазине: кто
								пришёл раньше, тот обслуживается раньше.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</PublicLayout>
	)
}

export default QueueStackPage
