import React from 'react'

interface StructuredDataProps {
	data: Record<string, unknown>
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	)
}

interface WebsiteStructuredDataProps {
	url: string
	name: string
	description: string
}

export const WebsiteStructuredData: React.FC<WebsiteStructuredDataProps> = ({
	url,
	name,
	description
}) => {
	const data = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name,
		description,
		url,
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${url}/sections?q={search_term_string}`
			},
			'query-input': 'required name=search_term_string'
		}
	}

	return <StructuredData data={data} />
}

interface ArticleStructuredDataProps {
	title: string
	description: string
	url: string
	datePublished?: string
	dateModified?: string
	author?: string
}

export const ArticleStructuredData: React.FC<ArticleStructuredDataProps> = ({
	title,
	description,
	url,
	datePublished,
	dateModified,
	author = 'Nikita Streltsov'
}) => {
	const data = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: title,
		description,
		url,
		...(datePublished && { datePublished }),
		...(dateModified && { dateModified }),
		author: {
			'@type': 'Person',
			name: author
		},
		publisher: {
			'@type': 'Organization',
			name: 'AlgoStudy',
			url: process.env.NEXT_PUBLIC_SITE_URL || 'https://algostudy.ru'
		}
	}

	return <StructuredData data={data} />
}

interface BreadcrumbStructuredDataProps {
	items: Array<{ name: string; url: string }>
}

export const BreadcrumbStructuredData: React.FC<BreadcrumbStructuredDataProps> = ({
	items
}) => {
	const data = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	}

	return <StructuredData data={data} />
}

