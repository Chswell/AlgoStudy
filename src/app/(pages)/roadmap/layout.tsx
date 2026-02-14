import type { Metadata } from 'next'

import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
	title: 'Roadmap изучения алгоритмов',
	description:
		'Пошаговый план изучения алгоритмов и структур данных. Следуй порядку для лучшего понимания материала. Отслеживай свой прогресс.',
	path: '/roadmap',
	keywords: [
		'roadmap',
		'план изучения',
		'алгоритмы',
		'структуры данных',
		'обучение программированию',
		'курс алгоритмов'
	]
})

export default function RoadmapLayout({
	children
}: {
	children: React.ReactNode
}) {
	return children
}

