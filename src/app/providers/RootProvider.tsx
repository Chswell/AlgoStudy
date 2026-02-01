import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import { SidebarProvider } from '@/components/ui/sidebar'

interface IRootProviderProps {
	children: React.ReactNode
}

const RootProvider: React.FC<IRootProviderProps> = ({ children }) => {
	return (
		<>
			<SidebarProvider>{children}</SidebarProvider>
		</>
	)
}

export default RootProvider
