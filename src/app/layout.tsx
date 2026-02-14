// @ts-nocheck
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import RootProvider from '@/app/providers/RootProvider'

import { Metrika } from '@/components/widgets/Metrika'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'AlgoStudy',
	description: 'Приложение для изучения алгоритмов'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={inter.variable}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Metrika />
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
