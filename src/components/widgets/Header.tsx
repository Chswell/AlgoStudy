/*
 * Originally authored by Nikita Streltsov (2026)
 * Licensed under Apache-2.0
 */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa6'

import { LINKS_SHARED } from '@/app/configs/LINKS_SHARED'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { DarkModeToggle } from '@/components/widgets/DarkModeToggle'

const BREADCRUMB_LABELS: Record<string, string> = {
	sections: 'Разделы',
	// Общая информация
	general: 'Общая информация',
	complexity: 'Классы сложности',
	'complexity-analysis': 'Оценка сложности',
	// Сортировки
	sorting: 'Сортировки',
	bubble: 'Пузырьковая сортировка',
	selection: 'Сортировка выбором',
	insertion: 'Сортировка вставками',
	merge: 'Сортировка слиянием',
	quick: 'Быстрая сортировка',
	heap: 'Сортировка кучей',
	// Поиск
	search: 'Поиск',
	linear: 'Линейный поиск',
	binary: 'Бинарный поиск',
	'bfs-dfs': 'BFS и DFS',
	dijkstra: 'Алгоритм Дейкстры',
	// Очередь и стек
	'queue-stack': 'Очередь и стек',
	stack: 'Стек',
	queue: 'Очередь',
	// Графы
	graphs: 'Графы',
	bfs: 'Обход в ширину (BFS)',
	dfs: 'Обход в глубину (DFS)',
	// Hash-таблицы
	'hash-tables': 'Хеш-таблицы',
	collisions: 'Коллизии и методы решения'
}

export const Header = () => {
	const pathname = usePathname()
	const segments = pathname.split('/').filter(Boolean)

	const getLabel = (segment: string): string => {
		if (Object.prototype.hasOwnProperty.call(BREADCRUMB_LABELS, segment)) {
			return BREADCRUMB_LABELS[segment]
		}
		return segment.charAt(0).toUpperCase() + segment.slice(1)
	}

	const crumbs = segments.map((segment, index) => {
		const href = '/' + segments.slice(0, index + 1).join('/')
		const label = getLabel(segment)

		return { href, label }
	})

	return (
		<header className='bg-background sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-2 sm:h-16 sm:px-4'>
			<div className={'flex items-center gap-2'}>
				<SidebarTrigger className='-ml-1' />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className='hidden md:block'>
							<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
						</BreadcrumbItem>
						{crumbs.length > 0 && <BreadcrumbSeparator className='hidden md:block' />}
						{crumbs.map((crumb, index) => {
							const isLast = index === crumbs.length - 1

							return (
								<React.Fragment key={crumb.href}>
									{index > 0 && <BreadcrumbSeparator className='hidden md:block' />}
									<BreadcrumbItem>
										{isLast ? (
											<BreadcrumbPage>{crumb.label}</BreadcrumbPage>
										) : (
											<BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
										)}
									</BreadcrumbItem>
								</React.Fragment>
							)
						})}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className={'flex items-center gap-2 sm:gap-5'}>
				<div className={'bg-accent hover:bg-accent/80 cursor-pointer rounded-md p-2 sm:p-2.5'}>
					<Link
						href={LINKS_SHARED.githubProject}
						className='flex w-full items-center justify-between'
						target={'_blank'}
						rel='noopener noreferrer'
					>
						<FaGithub className='h-4 w-4 sm:h-5 sm:w-5' />
					</Link>
				</div>
				<div className={'bg-accent hover:bg-accent/80 cursor-pointer rounded-md p-2 sm:p-2.5'}>
					<Link
						href='https://dalink.to/stre1tsoff'
						className='flex w-full items-center justify-between'
						target={'_blank'}
						rel='noopener noreferrer'
						aria-label='Поддержать проект'
					>
						<FaHeart className='h-4 w-4 sm:h-5 sm:w-5 text-red-500' />
					</Link>
				</div>
				<DarkModeToggle />
			</div>
		</header>
	)
}
