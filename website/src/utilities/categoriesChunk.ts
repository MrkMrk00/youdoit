import type { CategoryLocaleResult } from '../data/CategoryLocaleFragment'

export function categoriesChunk(arr: CategoryLocaleResult[], itemsInChunk: number) {
	return arr?.reduce((resultArr, item, index) => {
		if (index % itemsInChunk === 0) {
			resultArr.push([])
		}
		if (item) {
			resultArr[resultArr.length - 1].push(item)
		}
		return resultArr
	}, [] as CategoryLocaleResult[][])
}
