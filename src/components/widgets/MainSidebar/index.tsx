import { ChevronRight } from 'lucide-react'
import * as React from 'react'

import { PUBLIC_ROUTES } from '@/app/configs/routes.config'

import { SidebarLogo } from '@/components/SidebarLogo'
import { SearchForm } from '@/components/search-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail
} from '@/components/ui/sidebar'
import { LinkItem } from '@/components/widgets/MainSidebar/LinkItem'

// This is sample data.
const data = {
	versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
	navMain: [
		{
			title: 'Общая информация',
			url: '#',
			items: [
				{
					title: '#',
					url: '#',
					isActive: true
				}
			]
		},
		{
			title: 'Сортировки',
			url: PUBLIC_ROUTES.sorting(),
			items: [
				{
					title: 'Общая информация',
					url: PUBLIC_ROUTES.sorting()
				},
				{
					title: 'Пузырьковая',
					url: PUBLIC_ROUTES.sorting('/bubble')
				},
				{
					title: 'Выбором',
					url: PUBLIC_ROUTES.sorting('/selection')
				},
				{
					title: 'Вставками',
					url: PUBLIC_ROUTES.sorting('/insertion')
				},
				{
					title: 'Слиянием',
					url: PUBLIC_ROUTES.sorting('/merge')
				},
				{
					title: 'Быстрая',
					url: PUBLIC_ROUTES.sorting('/quick')
				},
				{
					title: 'Пирамидальная',
					url: PUBLIC_ROUTES.sorting('/heap')
				}
			]
		},
		{
			title: 'Поиск',
			url: '#',
			items: [
				{
					title: 'Линейный',
					url: '#'
				},
				{
					title: 'Бинарный',
					url: '#'
				},
				{
					title: 'BFS, DFS',
					url: '#'
				},
				{
					title: 'Алгоритм Дейкстры',
					url: '#'
				}
			]
		},
		{
			title: 'Очередь и стек',
			url: '#',
			items: [
				{
					title: '#',
					url: '#'
				}
			]
		},
		{
			title: 'Графы BFS, DFS',
			url: '#',
			items: [
				{
					title: '#',
					url: '#'
				}
			]
		},
		{
			title: 'Hash-таблицы',
			url: '#',
			items: [
				{
					title: '#',
					url: '#'
				}
			]
		}
	]
}

export function MainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarLogo />
				<SearchForm />
			</SidebarHeader>
			<SidebarContent className='gap-0'>
				{data.navMain.map(item => (
					<Collapsible key={item.title} title={item.title} defaultOpen className='group/collapsible'>
						<SidebarGroup>
							<SidebarGroupLabel
								asChild
								className='group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm'
							>
								<CollapsibleTrigger>
									{item.title}
									<ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
								</CollapsibleTrigger>
							</SidebarGroupLabel>
							<CollapsibleContent>
								<SidebarGroupContent>
									<SidebarMenu>
										{item.items?.map((item, index) => (
											<LinkItem item={item} key={`${item.title}-${index}`} />
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</CollapsibleContent>
						</SidebarGroup>
					</Collapsible>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	)
}
