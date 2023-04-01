import type { FunctionComponent } from 'react'
import { useState } from 'react'
import type { TipGroupResult } from '../data/TipGroupfragment'
import { Icon } from './Icon'
import styles from './TipGroup.module.sass'
import { TipModal } from './TipModal'

export interface TipGroupProps {
	group: TipGroupResult
}

export const TipGroup: FunctionComponent<TipGroupProps> = ({ group }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
				<div className={styles.buttonText}>
					<div className={styles.label}>TIP</div>
					{group.localesByLocale?.title}
				</div>

				<div className={styles.arrow}>
					<Icon name="arrowRight" />
				</div>
			</button>
			{group.items && (
				<TipModal
					isOpen={isOpen}
					onRequestClose={() => setIsOpen(false)}
					title={group.localesByLocale?.title}
					description={group.localesByLocale?.description}
					tips={group.items}
				/>
			)}
		</>
	)
}
