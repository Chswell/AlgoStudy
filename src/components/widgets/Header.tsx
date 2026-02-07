import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { DarkModeToggle } from '@/components/widgets/DarkModeToggle'

export const Header = () => {
	return (
		<header className='bg-background sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4'>
			<div className={'flex items-center gap-2'}>
				<SidebarTrigger className='-ml-1' />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className='hidden md:block'>
							<BreadcrumbLink href='#'>Building Your Application</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className='hidden md:block' />
						<BreadcrumbItem>
							<BreadcrumbPage>Data Fetching</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<DarkModeToggle />
		</header>
	)
}
