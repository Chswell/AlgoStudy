'use client'

import { GalleryVerticalEnd } from 'lucide-react'
import * as React from 'react'

import { Logo } from '@/components/icons/Logo'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

import pkg from '../../package.json'

export const SidebarLogo = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton
					size='lg'
					className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
				>
					<div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-lg'>
						<p className={'text-xl font-extrabold'}>AS</p>
					</div>
					<div className='flex flex-col gap-0.5 leading-none'>
						<span className='font-medium'>AlgoStudy</span>
						<span className='text-muted-foreground text-xs'>v{pkg.version}</span>
					</div>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
