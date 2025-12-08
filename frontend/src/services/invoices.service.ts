import invoicesData from '../api/invoices.json'

export async function getInvoices() {
	return Promise.resolve(invoicesData)
}

export async function getInvoicesById(settlementId: string) {
	const list = await getInvoices()
	return list.find(item => item.settlementId === settlementId)
}

