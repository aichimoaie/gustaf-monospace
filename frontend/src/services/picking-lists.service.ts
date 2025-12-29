import pickingListsData from '../api/pickingLists.json'
import type { PickingList } from '../types'

export async function getPickingLists(): Promise<PickingList[]> {
	return Promise.resolve(pickingListsData as PickingList[])
}

export async function getPickingListsById(settlementId: string): Promise<PickingList | undefined> {
	const list = await getPickingLists()
	return list.find(item => item.settlementId === settlementId)
}

