export const ADMINBOARD_PAGES = {
	CUSTOMER: '/',
	ADMIN: '/i',
	MENU: `/i/menu`,
	USER: `/i/user`,
	DISHES: `/i/dishes`,
	INGREDIENTS: `/i/ingredients`,
	SETTINGS: `/i/settings`,
	AUTH: '/auth',
}
export const getSiteUrl = () => process.env.APP_URL as string
export const getAdminUrl = (path = '') => `${ADMINBOARD_PAGES.ADMIN}${path}`

export type ADMINBOARD_PAGES_KEYS = keyof typeof ADMINBOARD_PAGES