import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import type { StepGroupResult } from '../data/StepGroupFragment'
import { Step } from './Step'
import styles from './StepGroup.module.sass'

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
				<div>Image upload</div>
			</div>
			<div className={styles.stepList}>
				{group.steps.map((step) => {
					return (
						<Fragment key={step.id}>
							<Step step={step} />
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}
