import {
	CookingPot,
	LayoutDashboard,
	Settings
} from 'lucide-react'

import { ADMINBOARD_PAGES } from '@/config/pages-url.config'
import { MenuItem } from './menu.interface'


export const USERMENU: MenuItem[] = [
	{
		icon: LayoutDashboard,
		link: ADMINBOARD_PAGES.USER,
		name: 'User board',
		endPoint: 'getProfile'
	},
	{
		icon: CookingPot,
		link: `${ADMINBOARD_PAGES.MENU}/slon-1`,
		name: 'Меню Слон-1',
		endPoint: 'getAll'
	},


	{
		icon: Settings,
		link: ADMINBOARD_PAGES.SETTINGS,
		name: 'Settings',
		endPoint: 'getProfile'
	}
]

export const ADMINMENU: MenuItem[] = [
	{
		icon: LayoutDashboard,
		link: ADMINBOARD_PAGES.ADMIN,
		name: 'Admin Board',
		endPoint: 'getProfile'
	},
	{
		icon: CookingPot,
		link: `${ADMINBOARD_PAGES.MENU}/Slon-1`,
		name: 'Меню Слон-1',
		endPoint: 'getAll'
	},


	{
		icon: Settings,
		link: ADMINBOARD_PAGES.SETTINGS,
		name: 'Settings',
		endPoint: 'getProfile'
	}
]

