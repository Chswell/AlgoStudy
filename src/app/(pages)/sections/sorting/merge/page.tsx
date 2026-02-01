import Image from 'next/image'
import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Card, CardContent } from '@/components/ui/card'

interface IMergeSortPageProps {}

const MergeSortPage: React.FC<IMergeSortPageProps> = () => {
	return (
		<PublicLayout>
			<Card className={'w-md items-center justify-center'}>
				<CardContent className={'w-lg'}>
					<Image
						src={'/sections/sorting/merge.gif'}
						alt={'merge_sort'}
						className={'h-full w-full'}
						width={50}
						height={50}
					/>
				</CardContent>
			</Card>
		</PublicLayout>
	)
}

export default MergeSortPage
