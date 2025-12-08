import { useEffect, useState } from 'react'
import { DataTable } from '../../../../components/tables/DataTable'
import { getInvoices } from '../../../../services/invoices.service'
import './Invoices.css'

export function Invoices() {
	const [invoices, setInvoices] = useState<any[]>([])
	
	useEffect(() => {
		getInvoices().then(setInvoices)
	}, [])

	const columns = [
		{ key: 'issueDate', label: 'ISSUE DATE' },
		{ key: 'dueDate', label: 'DUE DATE' },
		{ key: 'status', label: 'STATUS', className: 'status-cell' },
		{ key: 'invoiceNo', label: 'INVOICE NO.' },
		{ key: 'amount', label: 'AMOUNT' },
	]

	return (
		<div className='invoices'>
			<h1>Invoices</h1>

			{invoices.length === 0 ? (
				<p>Loading...</p>
			) : (
				<DataTable 
					data={invoices}
					columns={columns}
					defaultSortKey="issueDate"
					searchKey="invoiceNo"
					pagePrefix="invoices"
				/>
			)}
		</div>
	)
}

