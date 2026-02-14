'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { useLearningProgressStore } from '@/store/learningProgressStore'

interface ILinkItemProps {
	item: {
		url: string
		title: string
	}
}

export const LinkItem: React.FC<ILinkItemProps> = ({ item }) => {
	const path = usePathname()
	const { isTopicCompleted } = useLearningProgressStore()
	const isCompleted = isTopicCompleted(item.url)
	
	return (
		<SidebarMenuItem>
			<SidebarMenuButton 
				asChild 
				isActive={item.url === path}
				className={isCompleted ? 'text-green-600 dark:text-green-400' : ''}
			>
				<Link href={item.url} className='flex items-center justify-between w-full'>
					<span>{item.title}</span>
					{isCompleted && (
						<Check className='h-4 w-4 shrink-0 ml-2' />
					)}
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	)
}
