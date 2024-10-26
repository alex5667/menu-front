import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Settings } from './Settings'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<>
			<Heading
				title='Settings'
				className='pt-10 pl-10 mb-10'
			/>
			<Settings />
		</>
	)
}
