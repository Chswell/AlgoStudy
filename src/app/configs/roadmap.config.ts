export interface Topic {
	id: string
	title: string
	url: string
	category: string
	relatedTopics?: string[] // IDs of related topics
}

export const ROADMAP: Topic[] = [
	// Общая информация
	{
		id: 'general',
		title: 'Что такое алгоритм',
		url: '/sections/general',
		category: 'Основы',
		relatedTopics: ['complexity', 'complexity-analysis', 'sorting']
	},
	{
		id: 'complexity',
		title: 'Классы сложности алгоритмов',
		url: '/sections/general/complexity',
		category: 'Основы',
		relatedTopics: ['general', 'complexity-analysis', 'bubble']
	},
	{
		id: 'complexity-analysis',
		title: 'Как оценивать сложность алгоритма',
		url: '/sections/general/complexity-analysis',
		category: 'Основы',
		relatedTopics: ['general', 'complexity', 'bubble']
	},
	// Сортировки
	{
		id: 'sorting',
		title: 'Сортировки - Общая информация',
		url: '/sections/sorting',
		category: 'Сортировки',
		relatedTopics: ['bubble', 'selection', 'insertion']
	},
	{
		id: 'bubble',
		title: 'Пузырьковая сортировка',
		url: '/sections/sorting/bubble',
		category: 'Сортировки',
		relatedTopics: ['selection', 'insertion', 'sorting']
	},
	{
		id: 'selection',
		title: 'Сортировка выбором',
		url: '/sections/sorting/selection',
		category: 'Сортировки',
		relatedTopics: ['bubble', 'insertion', 'merge']
	},
	{
		id: 'insertion',
		title: 'Сортировка вставками',
		url: '/sections/sorting/insertion',
		category: 'Сортировки',
		relatedTopics: ['bubble', 'selection', 'merge']
	},
	{
		id: 'merge',
		title: 'Сортировка слиянием',
		url: '/sections/sorting/merge',
		category: 'Сортировки',
		relatedTopics: ['insertion', 'quick', 'heap']
	},
	{
		id: 'quick',
		title: 'Быстрая сортировка',
		url: '/sections/sorting/quick',
		category: 'Сортировки',
		relatedTopics: ['merge', 'heap', 'sorting']
	},
	{
		id: 'heap',
		title: 'Сортировка кучей',
		url: '/sections/sorting/heap',
		category: 'Сортировки',
		relatedTopics: ['quick', 'merge', 'sorting']
	},
	// Поиск
	{
		id: 'search',
		title: 'Поиск - Общая информация',
		url: '/sections/search',
		category: 'Поиск',
		relatedTopics: ['linear', 'binary', 'search-bfs-dfs']
	},
	{
		id: 'linear',
		title: 'Линейный поиск',
		url: '/sections/search/linear',
		category: 'Поиск',
		relatedTopics: ['binary', 'search', 'queue-stack']
	},
	{
		id: 'binary',
		title: 'Бинарный поиск',
		url: '/sections/search/binary',
		category: 'Поиск',
		relatedTopics: ['linear', 'search-bfs-dfs', 'search']
	},
	{
		id: 'search-bfs-dfs',
		title: 'BFS и DFS',
		url: '/sections/search/bfs-dfs',
		category: 'Поиск',
		relatedTopics: ['binary', 'dijkstra', 'graphs']
	},
	{
		id: 'dijkstra',
		title: 'Алгоритм Дейкстры',
		url: '/sections/search/dijkstra',
		category: 'Поиск',
		relatedTopics: ['search-bfs-dfs', 'graphs-bfs', 'graphs-dfs']
	},
	// Очередь и стек
	{
		id: 'queue-stack',
		title: 'Очередь и стек - Общая информация',
		url: '/sections/queue-stack',
		category: 'Структуры данных',
		relatedTopics: ['stack', 'queue', 'general']
	},
	{
		id: 'stack',
		title: 'Стек (Stack)',
		url: '/sections/queue-stack/stack',
		category: 'Структуры данных',
		relatedTopics: ['queue', 'queue-stack', 'graphs-dfs']
	},
	{
		id: 'queue',
		title: 'Очередь (Queue)',
		url: '/sections/queue-stack/queue',
		category: 'Структуры данных',
		relatedTopics: ['stack', 'queue-stack', 'graphs-bfs']
	},
	// Графы
	{
		id: 'graphs',
		title: 'Что такое граф',
		url: '/sections/graphs',
		category: 'Графы',
		relatedTopics: ['graphs-bfs', 'graphs-dfs', 'search-bfs-dfs']
	},
	{
		id: 'graphs-bfs',
		title: 'Обход в ширину (BFS)',
		url: '/sections/graphs/bfs',
		category: 'Графы',
		relatedTopics: ['graphs', 'graphs-dfs', 'queue']
	},
	{
		id: 'graphs-dfs',
		title: 'Обход в глубину (DFS)',
		url: '/sections/graphs/dfs',
		category: 'Графы',
		relatedTopics: ['graphs', 'graphs-bfs', 'stack']
	},
	// Hash-таблицы
	{
		id: 'hash-tables',
		title: 'Идея хеш-таблицы',
		url: '/sections/hash-tables',
		category: 'Структуры данных',
		relatedTopics: ['hash-collisions', 'general', 'search']
	},
	{
		id: 'hash-collisions',
		title: 'Коллизии и методы решения',
		url: '/sections/hash-tables/collisions',
		category: 'Структуры данных',
		relatedTopics: ['hash-tables', 'general']
	}
]

/**
 * Получить тему по URL
 */
export function getTopicByUrl(url: string): Topic | undefined {
	return ROADMAP.find(topic => topic.url === url)
}

/**
 * Получить тему по ID
 */
export function getTopicById(id: string): Topic | undefined {
	return ROADMAP.find(topic => topic.id === id)
}

/**
 * Получить предыдущую и следующую темы
 */
export function getNavigationTopics(currentUrl: string): {
	prev: Topic | null
	next: Topic | null
} {
	const currentIndex = ROADMAP.findIndex(topic => topic.url === currentUrl)
	
	if (currentIndex === -1) {
		return { prev: null, next: null }
	}

	return {
		prev: currentIndex > 0 ? ROADMAP[currentIndex - 1] : null,
		next: currentIndex < ROADMAP.length - 1 ? ROADMAP[currentIndex + 1] : null
	}
}

/**
 * Получить связанные темы
 */
export function getRelatedTopics(currentTopic: Topic, limit: number = 4): Topic[] {
	if (!currentTopic.relatedTopics || currentTopic.relatedTopics.length === 0) {
		// Если нет связанных тем, возвращаем темы из той же категории
		return ROADMAP.filter(
			topic => topic.category === currentTopic.category && topic.id !== currentTopic.id
		).slice(0, limit)
	}

	const related = currentTopic.relatedTopics
		.map(id => getTopicById(id))
		.filter((topic): topic is Topic => topic !== undefined)
		.slice(0, limit)

	// Если связанных тем меньше лимита, дополняем темами из той же категории
	if (related.length < limit) {
		const categoryTopics = ROADMAP.filter(
			topic => 
				topic.category === currentTopic.category && 
				topic.id !== currentTopic.id &&
				!related.some(r => r.id === topic.id)
		).slice(0, limit - related.length)
		
		related.push(...categoryTopics)
	}

	return related
}

