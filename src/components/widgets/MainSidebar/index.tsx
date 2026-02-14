'use client'

import { AirplayIcon, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { useEffect } from 'react'

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
	SidebarRail,
	useSidebar
} from '@/components/ui/sidebar'
import { LinkItem } from '@/components/widgets/MainSidebar/LinkItem'

// This is sample data.
const data = {
	versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
	navMain: [
		{
			title: 'Общая информация',
			url: PUBLIC_ROUTES.sections('/general'),
			items: [
				{
					title: 'Что такое алгоритм',
					url: PUBLIC_ROUTES.sections('/general')
				},
				{
					title: 'Классы сложности',
					url: PUBLIC_ROUTES.sections('/general/complexity')
				},
				{
					title: 'Оценка сложности',
					url: PUBLIC_ROUTES.sections('/general/complexity-analysis')
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
					title: 'Кучей (Пирамидальная)',
					url: PUBLIC_ROUTES.sorting('/heap')
				}
			]
		},
		{
			title: 'Поиск',
			url: PUBLIC_ROUTES.sections('/search'),
			items: [
				{
					title: 'Общая информация',
					url: PUBLIC_ROUTES.sections('/search')
				},
				{
					title: 'Линейный',
					url: PUBLIC_ROUTES.sections('/search/linear')
				},
				{
					title: 'Бинарный',
					url: PUBLIC_ROUTES.sections('/search/binary')
				},
				{
					title: 'BFS, DFS',
					url: PUBLIC_ROUTES.sections('/search/bfs-dfs')
				},
				{
					title: 'Алгоритм Дейкстры',
					url: PUBLIC_ROUTES.sections('/search/dijkstra')
				}
			]
		},
		{
			title: 'Очередь и стек',
			url: PUBLIC_ROUTES.sections('/queue-stack'),
			items: [
				{
					title: 'Общая информация',
					url: PUBLIC_ROUTES.sections('/queue-stack')
				},
				{
					title: 'Стек (Stack)',
					url: PUBLIC_ROUTES.sections('/queue-stack/stack')
				},
				{
					title: 'Очередь (Queue)',
					url: PUBLIC_ROUTES.sections('/queue-stack/queue')
				}
			]
		},
		{
			title: 'Графы BFS, DFS',
			url: PUBLIC_ROUTES.sections('/graphs'),
			items: [
				{
					title: 'Что такое граф',
					url: PUBLIC_ROUTES.sections('/graphs')
				},
				{
					title: 'Обход в ширину (BFS)',
					url: PUBLIC_ROUTES.sections('/graphs/bfs')
				},
				{
					title: 'Обход в глубину (DFS)',
					url: PUBLIC_ROUTES.sections('/graphs/dfs')
				}
			]
		},
		{
			title: 'Hash-таблицы',
			url: PUBLIC_ROUTES.sections('/hash-tables'),
			items: [
				{
					title: 'Идея хеш-таблицы',
					url: PUBLIC_ROUTES.sections('/hash-tables')
				},
				{
					title: 'Коллизии и методы решения',
					url: PUBLIC_ROUTES.sections('/hash-tables/collisions')
				}
			]
		}
	]
}

export function MainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname()
	const { isMobile, setOpenMobile } = useSidebar()
	
	// Закрываем sidebar на мобильных устройствах при изменении пути
	useEffect(() => {
		if (isMobile) {
			setOpenMobile(false)
		}
	}, [pathname, isMobile, setOpenMobile])
	
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarLogo />
			</SidebarHeader>
			<SidebarContent className='gap-0'>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<LinkItem
								item={{
									title: 'Roadmap',
									url: PUBLIC_ROUTES.roadmap()
								}}
							/>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
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
