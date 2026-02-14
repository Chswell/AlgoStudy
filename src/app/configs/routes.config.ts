export const PUBLIC_ROUTES = {
	auth: (url?: string) => `/auth${url ? url : ''}`,

	sections: (url?: string) => `/sections${url ? url : ''}`,
	sorting: (url?: string) => PUBLIC_ROUTES.sections(`/sorting${url ? url : ''}`),
	search: (url?: string) => PUBLIC_ROUTES.sections(`/search${url ? url : ''}`),
	'queue-stack': (url?: string) => PUBLIC_ROUTES.sections(`/queue-stack${url ? url : ''}`),
	graphs: (url?: string) => PUBLIC_ROUTES.sections(`/graphs${url ? url : ''}`),
	'hash-tables': (url?: string) => PUBLIC_ROUTES.sections(`/hash-tables${url ? url : ''}`),
	roadmap: () => '/roadmap'
}
