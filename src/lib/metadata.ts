import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://algostudy.ru'
const SITE_NAME = 'AlgoStudy'
const DEFAULT_DESCRIPTION =
	'Изучай алгоритмы и структуры данных простым языком. Примеры кода на JavaScript, Python и C++. Визуализации, асимптотика, плюсы и минусы каждого алгоритма.'

interface GenerateMetadataOptions {
	title?: string
	description?: string
	path?: string
	keywords?: string[]
	noIndex?: boolean
	type?: 'website' | 'article'
	publishedTime?: string
	modifiedTime?: string
}

export function generateMetadata({
	title,
	description = DEFAULT_DESCRIPTION,
	path = '',
	keywords = ['алгоритмы', 'структуры данных', 'программирование', 'обучение'],
	noIndex = false,
	type = 'website',
	publishedTime,
	modifiedTime
}: GenerateMetadataOptions = {}): Metadata {
	const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
	const url = `${SITE_URL}${path}`

	return {
		title: fullTitle,
		description,
		keywords: keywords.join(', '),
		authors: [{ name: 'Nikita Streltsov' }],
		creator: 'Nikita Streltsov',
		publisher: SITE_NAME,
		robots: noIndex
			? {
					index: false,
					follow: false
				}
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						'max-video-preview': -1,
						'max-image-preview': 'large',
						'max-snippet': -1
					}
				},
		openGraph: {
			type,
			locale: 'ru_RU',
			url,
			title: fullTitle,
			description,
			siteName: SITE_NAME,
			...(publishedTime && { publishedTime }),
			...(modifiedTime && { modifiedTime })
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description
		},
		alternates: {
			canonical: url
		},
		metadataBase: new URL(SITE_URL)
	}
}

