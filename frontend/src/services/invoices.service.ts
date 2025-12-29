import invoicesData from '../api/invoices.json'
import type { Invoice } from '../types'

export async function getInvoices(): Promise<Invoice[]> {
	return Promise.resolve(invoicesData as Invoice[])
}

export async function getInvoicesById(settlementId: string): Promise<Invoice | undefined> {
	const list = await getInvoices()
	return list.find(item => item.settlementId === settlementId)
}

