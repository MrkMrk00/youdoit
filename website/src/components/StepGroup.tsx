import { RichTextRenderer } from '@contember/react-client'
import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import type { StepGroupResult } from '../data/StepGroupFragment'
import { Icon } from './Icon'
import styles from './StepGroup.module.sass'
import { StepGroupButton } from './StepGroupButton'
import { StepItem } from './StepItem'

export interface StepGroupProps {
	group: StepGroupResult
	index: number
}

export const StepGroup: FunctionComponent<StepGroupProps> = ({ group, index }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.orderWrapper}>
					<div className={styles.order}>{index}</div>
				</div>
				<div className={styles.title}>{group.localesByLocale?.title}</div>
				<div className={styles.imageIconWrapper}>
					<div className={styles.imageIcon}>
						<Icon name="imageIcon" />
					</div>
				</div>
			</div>
			{group.localesByLocale?.description && (
				<div className={styles.description}>
					<RichTextRenderer source={group.localesByLocale?.description} />
				</div>
			)}
			<div className={styles.stepList}>
				{group.items.map((item) => {
					return (
						<Fragment key={item.id}>
							<StepItem item={item} />
						</Fragment>
					)
				})}
			</div>
			{group.localesByLocale?.buttonTitle && (
				<div className={styles.button}>
					<StepGroupButton buttonTitle={group.localesByLocale?.buttonTitle} />
				</div>
			)}
		</div>
	)
}
