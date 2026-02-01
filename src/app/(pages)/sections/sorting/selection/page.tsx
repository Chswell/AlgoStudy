import Image from 'next/image'
import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Card, CardContent } from '@/components/ui/card'

interface ISelectionSortPageProps {}

const SelectionSortPage: React.FC<ISelectionSortPageProps> = () => {
	return (
		<PublicLayout>
			<Card className={'w-[120px] items-center justify-center'}>
				<CardContent className={'w-[120px]'}>
					<Image
						src={'/sections/sorting/selection.gif'}
						alt={'selection_sort'}
						className={'h-full w-[120px]'}
						width={50}
						height={50}
					/>
				</CardContent>
			</Card>
		</PublicLayout>
	)
}

export default SelectionSortPage
