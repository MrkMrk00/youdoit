import type { RecipeLocaleResult } from '../data/RecipeLocaleFragment'

export function recipesChunk(arr: RecipeLocaleResult[], itemsInChunk: number) {
	return arr?.reduce((resultArr, item, index) => {
		if (index % itemsInChunk === 0) {
			resultArr.push([])
		}
		if (item) {
			resultArr[resultArr.length - 1].push(item)
		}
		return resultArr
	}, [] as RecipeLocaleResult[][])
}
