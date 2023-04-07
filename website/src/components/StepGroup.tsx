import { RichTextRenderer } from '@contember/react-client'
import type { FunctionComponent } from 'react'
import { StepGroupItemType } from '../../generated/contember'
import type { StepGroupResult } from '../data/StepGroupFragment'
import { isDefined } from '../utilities/isDefined'
import { Icon } from './Icon'
import styles from './StepGroup.module.sass'
import { StepGroupButton } from './StepGroupButton'
import { StepItem } from './StepItem'

export interface StepGroupProps {
	group: StepGroupResult
	index: number
	onNextStep: () => void
	disabled: boolean
	onChange: (checked: boolean, id: string) => void
}

export const StepGroup: FunctionComponent<StepGroupProps> = ({ group, index, onNextStep, disabled, onChange }) => {
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
				{group.items
					.map((item) => {
						if (item.type === StepGroupItemType.step) {
							if (!item.step) {
								return
							}
							return {
								type: 'step' as const,
								props: {
									step: item.step,
									disabled,
									onChange: (checked: boolean) => {
										if (!item.step) {
											return
										}
										onChange(checked, item.step.id)
									},
									checked: false, //@TODO
								},
							}
						}
						if (item.type === StepGroupItemType.tip) {
							if (!item.tip?.localesByLocale?.title) {
								return
							}
							return {
								type: 'tip' as const,
								props: {
									title: item.tip?.localesByLocale?.title ?? '',
								},
							}
						}
					})
					.filter(isDefined)
					.map((item, index) => (
						<StepItem item={item} key={index} />
					))}
			</div>
			{group.localesByLocale?.buttonTitle && !disabled && (
				<div className={styles.button}>
					<StepGroupButton buttonTitle={group.localesByLocale?.buttonTitle} onClick={onNextStep} />
				</div>
			)}
		</div>
	)
}
