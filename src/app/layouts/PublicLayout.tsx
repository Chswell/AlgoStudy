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
			<SidebarInset className='flex h-screen flex-col overflow-hidden'>
				<Header />
				<div className='flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto'>
					<div className='flex flex-1 flex-col gap-4 p-2 sm:p-4 dark:bg-black'>
						{children}
						{showNavigation && (
							<div className='mx-auto w-full max-w-4xl px-2 sm:px-0'>
								<TopicNavigation />
							</div>
						)}
						<Footer />
					</div>
				</div>
			</SidebarInset>
		</>
	)
}

export default PublicLayout
