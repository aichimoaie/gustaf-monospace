import selfBillingData from '../api/selfBilling.json'
import type { SelfBilling } from '../types'

export async function getSelfBilling(): Promise<SelfBilling[]> {
	return Promise.resolve(selfBillingData as SelfBilling[])
}

export async function getSelfBillingById(settlementId: string): Promise<SelfBilling | undefined> {
	const list = await getSelfBilling()
	return list.find(item => item.settlementId === settlementId)
}

