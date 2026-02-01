import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className='flex w-full items-center justify-center py-3'>
			<div className={'flex flex-row gap-5'}>
				<Link className='flex items-center gap-1 text-current' href={''} title='Streltsov Nikita'>
					<span className='text-default-600'>Developer</span>
					<p className='text-primary'>Streltsov Nikita</p>
				</Link>
			</div>
		</footer>
	)
}
