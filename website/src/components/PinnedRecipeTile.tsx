import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import type { ParsedUrlQueryInput } from 'querystring'
import type { FunctionComponent } from 'react'
import { useMirrorLoading } from 'shared-loading-indicator'
import type { PinnedRecipeResult } from '../data/PinnedRecipeFragment'
import { contember } from '../utilities/contember'
import { scalarResolver } from '../utilities/createScalarResolver'
import { Icon } from './Icon'
import styles from './PinnedRecipeTile.module.sass'

export interface PinnedRecipeTileProps {
	pinnedRecipe: PinnedRecipeResult
	pathname: string
	query: string | ParsedUrlQueryInput
	onDeletetionComplete: () => void
}

export const PinnedRecipeTile: FunctionComponent<PinnedRecipeTileProps> = ({
	pinnedRecipe: tile,
	pathname,
	query,
	onDeletetionComplete,
}) => {
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
				onDeletetionComplete()
			},
		},
	)

	useMirrorLoading(deletePinnedRecipe.isLoading)

	return (
		<div className={styles.wrapper}>
			<Link href={{ pathname: pathname, query: query }}>
				<div className={styles.title}>{tile.derivedBy?.localesByLocale?.title}</div>
			</Link>
			<button
				className={styles.button}
				type="button"
				onClick={(event) => {
					event.stopPropagation()
					deletePinnedRecipe.mutate()
				}}
			>
				<div className={styles.icon}>
					<Icon name="deleteBin" />
				</div>
			</button>
		</div>
	)
}
