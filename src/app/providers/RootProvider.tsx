import React from 'react'

import { ThemeProvider } from '@/app/providers/ThemeProvider'

import { SidebarProvider } from '@/components/ui/sidebar'

interface IRootProviderProps {
	children: React.ReactNode
}

const RootProvider: React.FC<IRootProviderProps> = ({ children }) => {
	return (
		<>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
				<SidebarProvider>{children}</SidebarProvider>
			</ThemeProvider>
		</>
	)
}

export default RootProvider
