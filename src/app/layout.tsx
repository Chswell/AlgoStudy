// @ts-nocheck
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import RootProvider from '@/app/providers/RootProvider'
import { WebsiteStructuredData } from '@/components/SEO/StructuredData'

import { Metrika } from '@/components/widgets/Metrika'

import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://algostudy.ru'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
	title: 'AlgoStudy - Изучай алгоритмы и структуры данных',
	description:
		'Изучай алгоритмы и структуры данных простым языком. Примеры кода на JavaScript, Python и C++. Визуализации, асимптотика, плюсы и минусы каждого алгоритма.',
	keywords: [
		'алгоритмы',
		'структуры данных',
		'программирование',
		'обучение',
		'сортировка',
		'поиск',
		'графы',
		'хеш-таблицы',
		'JavaScript',
		'Python',
		'C++',
		'асимптотика',
		'Big O'
	]
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={inter.variable}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<WebsiteStructuredData
					url={SITE_URL}
					name='AlgoStudy'
					description='Изучай алгоритмы и структуры данных простым языком. Примеры кода на JavaScript, Python и C++.'
				/>
				<Metrika />
				<RootProvider>{children}</RootProvider>
				<Analytics />
			</body>
		</html>
	)
}
