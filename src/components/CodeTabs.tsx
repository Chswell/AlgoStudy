'use client'

import React, { useEffect, useState } from 'react'

import { useCodeLanguageStore } from '@/store/codeLanguageStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface CodeTabsProps {
	children: React.ReactNode
	className?: string
}

export const CodeTabs: React.FC<CodeTabsProps> = ({ children, className }) => {
	const { language, setLanguage } = useCodeLanguageStore()
	const [mounted, setMounted] = useState(false)

	// Предотвращаем hydration mismatch
	useEffect(() => {
		setMounted(true)
	}, [])

	const handleValueChange = (value: string) => {
		if (value === 'js' || value === 'py' || value === 'cpp' || value === 'java') {
			setLanguage(value)
		}
	}

	// Используем значение по умолчанию до монтирования
	const currentLanguage = mounted ? language : 'js'

	return (
		<Tabs
			value={currentLanguage}
			onValueChange={handleValueChange}
			className={className}
		>
			{children}
		</Tabs>
	)
}

// Экспортируем остальные компоненты для удобства
export { TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

