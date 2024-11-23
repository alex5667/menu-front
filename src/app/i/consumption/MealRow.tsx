import { MealConsumptionResponse } from '@/types/mealConsumption.type'

import ConsumptionInput from './ConsumptionInput'

interface MealRow {
	institutionSlug: string
	dateForDay: string
	mealSlug: string
	institutionName: string
	filteredItems: MealConsumptionResponse[] | []
}

const MealRow = ({
	institutionSlug,
	dateForDay,
	mealSlug,
	institutionName,
	filteredItems
}: MealRow) => {
	const consumptionItem = filteredItems.find(item => {
		return item.institution?.slug === institutionSlug
	})
	return (
		<div className='flex min-w-full'>
			<div className='text-base w-[50%] bg-db-row-light border border-border-light py-2 px-3'>
				{institutionName}
			</div>

			<ConsumptionInput
				institutionSlug={institutionSlug}
				consumptionItem={consumptionItem}
				dateForDay={dateForDay}
				mealSlug={mealSlug}
			/>
		</div>
	)
}

export default MealRow