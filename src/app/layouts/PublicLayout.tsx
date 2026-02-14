'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { TopicNavigation } from '@/components/TopicNavigation'
import { SidebarInset } from '@/components/ui/sidebar'
import { Footer } from '@/components/widgets/Footer'
import { Header } from '@/components/widgets/Header'
import { MainSidebar } from '@/components/widgets/MainSidebar'

interface IPublicLayoutProps {
	children: React.ReactNode
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ children }) => {
	const pathname = usePathname()
	// Показываем навигацию только на страницах разделов, но не на главной странице и roadmap
	const showNavigation = pathname.startsWith('/sections') && pathname !== '/sections'

	return (
		<>
			<MainSidebar />
			<SidebarInset>
				<Header />
				<div className='flex flex-1 flex-col gap-4 p-4 dark:bg-black'>
					{children}
					{showNavigation && (
						<div className='mx-auto w-full max-w-4xl'>
							<TopicNavigation />
						</div>
					)}
				</div>
				<Footer />
			</SidebarInset>
		</>
	)
}

export default PublicLayout
