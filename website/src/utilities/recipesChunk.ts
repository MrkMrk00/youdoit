import type { RecipeResult } from '../data/RecipeFragment'

export function recipesChunk(arr: RecipeResult[], itemsInChunk: number) {
	return arr?.reduce((resultArr, item, index) => {
		if (index % itemsInChunk === 0) {
			resultArr.push([])
		}
		if (item) {
			resultArr[resultArr.length - 1].push(item)
		}
		return resultArr
	}, [] as RecipeResult[][])
}
