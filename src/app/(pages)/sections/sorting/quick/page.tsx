import Image from 'next/image'
import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Card, CardContent } from '@/components/ui/card'

interface IQuickSortPageProps {}

const QuickSortPage: React.FC<IQuickSortPageProps> = () => {
	return (
		<PublicLayout>
			<Card className={'w-xs items-center justify-center'}>
				<CardContent className={'w-xs'}>
					<Image
						src={'/sections/sorting/quick.gif'}
						alt={'quick_sort'}
						className={'h-full w-full'}
						width={50}
						height={50}
					/>
				</CardContent>
			</Card>
		</PublicLayout>
	)
}

export default QuickSortPage
