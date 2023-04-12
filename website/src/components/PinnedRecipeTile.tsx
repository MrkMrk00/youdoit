import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import type { ParsedUrlQueryInput } from 'querystring'
import type { FunctionComponent } from 'react'
import { useMirrorLoading } from 'shared-loading-indicator'
import type { RecipeLocaleResult } from '../data/RecipeLocaleFragment'
import { contember } from '../utilities/contember'
import { scalarResolver } from '../utilities/createScalarResolver'
import styles from './PinnedRecipeTile.module.sass'

export interface PinnedRecipeTileProps {
	tile: RecipeLocaleResult
	pathname: string
	query: string | ParsedUrlQueryInput
}

export const PinnedRecipeTile: FunctionComponent<PinnedRecipeTileProps> = ({ tile, pathname, query }) => {
	const deletePinnedRecipe = useMutation(
		async () => {
			const data = await contember('mutation', { scalars: scalarResolver })({
				deletePinnedRecipe: [
					{
						by: { id: tile.id },
					},
					{ ok: true, errorMessage: true },
				],
			})
			return data.deletePinnedRecipe
		},
		{
			onSuccess: () => {
				console.log('deleted')
			},
		},
	)

	useMirrorLoading(deletePinnedRecipe.isLoading)

	return (
		<div className={styles.wrapper}>
			<Link href={{ pathname: pathname, query: query }}>
				<div>{tile.title}</div>
			</Link>
			<button
				type="button"
				onClick={(event) => {
					event.stopPropagation()
					deletePinnedRecipe.mutate()
				}}
			>
				delete
			</button>
		</div>
	)
}
