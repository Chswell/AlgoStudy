# SEO Оптимизация AlgoStudy

## Реализованные функции SEO

### 1. Метаданные
- ✅ Динамические метаданные для всех страниц через `generateMetadata`
- ✅ Open Graph теги для социальных сетей
- ✅ Twitter Card метаданные
- ✅ Canonical URLs для предотвращения дублирования контента
- ✅ Keywords для улучшения поисковой видимости

### 2. Структурированные данные (Schema.org)
- ✅ Website schema для главной страницы
- ✅ Article schema для страниц алгоритмов
- ✅ Breadcrumb schema (готов к использованию)

### 3. Техническая SEO
- ✅ Sitemap.xml (автоматически генерируется)
- ✅ Robots.txt (настроен для поисковых систем)
- ✅ Правильная структура заголовков (H1, H2, H3)
- ✅ Семантическая разметка HTML

### 4. Оптимизация контента
- ✅ Уникальные title и description для каждой страницы
- ✅ Релевантные keywords
- ✅ Правильная структура URL

## Как добавить метаданные для новой страницы

### Для серверного компонента:

```typescript
import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Название страницы',
  description: 'Описание страницы для поисковых систем',
  path: '/path/to/page',
  keywords: ['ключевое', 'слово', 'другое']
})
```

### Для клиентского компонента:

Создайте `layout.tsx` в той же директории:

```typescript
import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Название страницы',
  description: 'Описание страницы',
  path: '/path/to/page'
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
```

## Добавление структурированных данных

Для страниц с алгоритмами добавьте Article schema:

```typescript
import { ArticleStructuredData } from '@/components/SEO/StructuredData'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://algostudy.ru'

// В компоненте:
<ArticleStructuredData
  title="Название алгоритма"
  description="Описание алгоритма"
  url={`${SITE_URL}/path/to/page`}
/>
```

## Переменные окружения

Убедитесь, что установлена переменная окружения:

```env
NEXT_PUBLIC_SITE_URL=https://algostudy.ru
```

## Проверка SEO

1. Проверьте метаданные через [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Проверьте структурированные данные через [Schema.org Validator](https://validator.schema.org/)
3. Проверьте sitemap: `https://algostudy.ru/sitemap.xml`
4. Проверьте robots.txt: `https://algostudy.ru/robots.txt`

## Следующие шаги для улучшения SEO

1. Добавить метаданные для всех остальных страниц алгоритмов
2. Добавить изображения для Open Graph
3. Добавить breadcrumbs на страницы
4. Оптимизировать изображения (alt теги, lazy loading)
5. Добавить внутренние ссылки между связанными темами
6. Создать страницу 404 с полезными ссылками

