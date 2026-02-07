import Image from 'next/image'
import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface IHeapSortPageProps {}

const HeapSortPage: React.FC<IHeapSortPageProps> = () => {
	return (
		<PublicLayout>
			<h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
				Сортировка кучей (Пирамидальная сортировка)
			</h1>

			<Card className={'w-xs items-center justify-center'}>
				<CardContent className={'w-xs'}>
					<Image
						src={'/sections/sorting/heap.gif'}
						alt={'heap_sort'}
						className={'h-full w-full'}
						width={50}
						height={50}
					/>
				</CardContent>
				<CardFooter className={'flex flex-col items-start gap-2'}>
					<div className={'flex items-center justify-center'}>
						Операции: <Badge variant='secondary'>O(n log n)</Badge>
						<Tooltip>
							<TooltipTrigger asChild>
								<p className={'text-primary underline'}>во всех случаях</p>
							</TooltipTrigger>
							<TooltipContent>
								<p>в худшем, в среднем и в лучшем случае</p>
							</TooltipContent>
						</Tooltip>
					</div>
					<div>
						Память: <Badge variant='secondary'>O(1)</Badge>
					</div>
				</CardFooter>
			</Card>
		</PublicLayout>
	)
}

export default HeapSortPage
