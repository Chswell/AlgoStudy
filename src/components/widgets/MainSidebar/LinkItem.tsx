'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

interface ILinkItemProps {
	item: {
		url: string
		title: string
	}
}

export const LinkItem: React.FC<ILinkItemProps> = ({ item }) => {
	const path = usePathname()
	return (
		<SidebarMenuItem>
			<SidebarMenuButton asChild isActive={item.url === path}>
				<a href={item.url}>{item.title}</a>
			</SidebarMenuButton>
		</SidebarMenuItem>
	)
}
