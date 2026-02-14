'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const COOKIE_CONSENT_KEY = 'cookie-consent'

export const CookieBanner: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		// Проверяем, дал ли пользователь согласие
		const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
		if (!consent) {
			// Небольшая задержка для плавного появления
			setTimeout(() => setIsVisible(true), 500)
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
		setIsVisible(false)
	}

	// Не рендерим на сервере, чтобы избежать проблем с гидратацией
	if (!mounted || !isVisible) return null

	return (
		<div
			className={cn(
				'fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-2',
				'bg-card border-t border-border shadow-lg',
				'px-4 py-4 sm:px-6 sm:py-5'
			)}
		>
			<div className='mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<div className='flex-1 space-y-1'>
					<p className='text-sm text-foreground sm:text-base'>
						Мы используем файлы cookie для обеспечения удобной работы с сайтом и аналитики.
						Оставаясь на сайте, вы соглашаетесь с нашей{' '}
						<Link
							href='/privacy'
							className='text-primary underline-offset-4 hover:underline'
						>
							Политикой конфиденциальности
						</Link>
						.
					</p>
				</div>
				<div className='flex shrink-0 items-center gap-3 sm:ml-4'>
					<Button onClick={handleAccept} size='default' variant='default'>
						Принять
					</Button>
				</div>
			</div>
		</div>
	)
}

