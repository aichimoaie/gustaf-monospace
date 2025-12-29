import creditsData from '../api/credits.json'
import type { Credit } from '../types'

export async function getCredits(): Promise<Credit[]> {
	return Promise.resolve(creditsData as Credit[])
}

export async function getCreditsById(settlementId: string): Promise<Credit | undefined> {
	const list = await getCredits()
	return list.find(item => item.settlementId === settlementId)
}

