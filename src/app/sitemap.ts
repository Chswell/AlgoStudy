import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://algostudy.ru'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = SITE_URL

	// Основные страницы
	const routes = [
		'',
		'/sections',
		'/sections/general',
		'/sections/general/complexity',
		'/sections/general/complexity-analysis',
		'/sections/sorting',
		'/sections/sorting/bubble',
		'/sections/sorting/selection',
		'/sections/sorting/insertion',
		'/sections/sorting/merge',
		'/sections/sorting/quick',
		'/sections/sorting/heap',
		'/sections/search',
		'/sections/search/linear',
		'/sections/search/binary',
		'/sections/search/bfs-dfs',
		'/sections/search/dijkstra',
		'/sections/queue-stack',
		'/sections/queue-stack/queue',
		'/sections/queue-stack/stack',
		'/sections/graphs',
		'/sections/graphs/bfs',
		'/sections/graphs/dfs',
		'/sections/hash-tables',
		'/sections/hash-tables/collisions',
		'/roadmap',
		'/privacy'
	]

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === '' ? 'weekly' : 'monthly',
		priority: route === '' ? 1.0 : route.startsWith('/sections/') ? 0.8 : 0.6
	}))
}

