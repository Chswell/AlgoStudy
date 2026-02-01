export const PUBLIC_ROUTES = {
	auth: (url?: string) => `/auth${url ? url : ''}`,

	sections: (url?: string) => `/sections${url ? url : ''}`,
	sorting: (url?: string) => PUBLIC_ROUTES.sections(`/sorting${url ? url : ''}`)
}
