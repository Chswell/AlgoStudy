import React from 'react'

import PublicLayout from '@/app/layouts/PublicLayout'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Статическая дата для избежания проблем с гидратацией
const LAST_UPDATED = '1 января 2025'

const PrivacyPage: React.FC = () => {
	return (
		<PublicLayout>
			<div className='mx-auto flex max-w-4xl flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8'>
				<header className='space-y-2 text-center'>
					<h1 className='scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl'>
						Политика конфиденциальности
					</h1>
					<p className='text-sm text-muted-foreground sm:text-base'>
						Последнее обновление: {LAST_UPDATED}
					</p>
				</header>

				<section className='space-y-6'>
					<Card>
						<CardHeader>
							<CardTitle>1. Общие положения</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>
								Настоящая Политика конфиденциальности определяет порядок обработки и защиты
								персональных данных пользователей веб-сайта AlgoStudy (далее — «Сайт»).
							</p>
							<p>
								Используя Сайт, вы соглашаетесь с условиями настоящей Политики
								конфиденциальности.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>2. Сбор информации</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>Мы собираем следующие типы информации:</p>
							<ul className='list-inside list-disc space-y-2 pl-4'>
								<li>
									<strong>Техническая информация:</strong> IP-адрес, тип браузера, операционная
									система, время посещения страниц
								</li>
								<li>
									<strong>Информация о взаимодействии:</strong> страницы, которые вы посещаете,
									время, проведенное на сайте, переходы между страницами
								</li>
								<li>
									<strong>Данные cookie:</strong> для обеспечения удобной работы с сайтом и
									аналитики
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>3. Использование файлов cookie</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>
								Мы используем файлы cookie для следующих целей:
							</p>
							<ul className='list-inside list-disc space-y-2 pl-4'>
								<li>Обеспечение удобной работы с сайтом</li>
								<li>Сохранение ваших предпочтений (например, тема оформления)</li>
								<li>Сбор аналитической информации о посещениях сайта</li>
								<li>Улучшение функциональности и пользовательского опыта</li>
							</ul>
							<p>
								Вы можете отключить использование cookie в настройках вашего браузера, однако это
								может повлиять на функциональность сайта.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>4. Использование собранной информации</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>Собранная информация используется для:</p>
							<ul className='list-inside list-disc space-y-2 pl-4'>
								<li>Обеспечения работы сайта и его функций</li>
								<li>Анализа использования сайта и улучшения его работы</li>
								<li>Персонализации контента и опыта использования</li>
								<li>Обеспечения безопасности сайта</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>5. Защита данных</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>
								Мы применяем технические и организационные меры для защиты ваших данных от
								несанкционированного доступа, изменения, раскрытия или уничтожения.
							</p>
							<p>
								Однако ни один метод передачи данных через интернет не является абсолютно
								безопасным, и мы не можем гарантировать абсолютную безопасность.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>6. Передача данных третьим лицам</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>
								Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим
								лицам, за исключением случаев:
							</p>
							<ul className='list-inside list-disc space-y-2 pl-4'>
								<li>Когда это необходимо для предоставления услуг (например, аналитические сервисы)</li>
								<li>Когда это требуется по закону или по запросу государственных органов</li>
								<li>Для защиты наших прав и безопасности</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>7. Ваши права</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>Вы имеете право:</p>
							<ul className='list-inside list-disc space-y-2 pl-4'>
								<li>Получить информацию о том, какие данные мы собираем</li>
								<li>Запросить удаление ваших данных</li>
								<li>Отозвать согласие на обработку данных</li>
								<li>Ограничить использование cookie в настройках браузера</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>8. Изменения в Политике конфиденциальности</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>
								Мы оставляем за собой право вносить изменения в настоящую Политику
								конфиденциальности. Все изменения вступают в силу с момента их публикации на
								сайте.
							</p>
							<p>
								Рекомендуем периодически просматривать эту страницу, чтобы быть в курсе любых
								изменений.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>9. Контакты</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
							<p>
								Если у вас есть вопросы относительно настоящей Политики конфиденциальности, вы
								можете связаться с нами:
							</p>
							<p>
								<strong>Email:</strong> i@chswe11.ru
							</p>
						</CardContent>
					</Card>
				</section>
			</div>
		</PublicLayout>
	)
}

export default PrivacyPage

