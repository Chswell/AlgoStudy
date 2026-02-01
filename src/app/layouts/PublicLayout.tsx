import React from 'react'

import { SidebarInset } from '@/components/ui/sidebar'
import { Header } from '@/components/widgets/Header'
import { MainSidebar } from '@/components/widgets/MainSidebar'

interface IPublicLayoutProps {
	children: React.ReactNode
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ children }) => {
	return (
		<>
			<MainSidebar />
			<SidebarInset>
				<Header />

				<div className='flex flex-1 flex-col gap-4 p-4'>
					{children}
					{Array.from({ length: 24 }).map((_, index) => (
						<div key={index} className='bg-muted/50 aspect-video h-12 w-full rounded-lg' />
					))}
				</div>
			</SidebarInset>
		</>
	)
}

export default PublicLayout
