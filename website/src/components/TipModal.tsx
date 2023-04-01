import { RichTextRenderer } from '@contember/react-client'
import type { FunctionComponent } from 'react'
import Modal from 'react-modal'
import type { TipGroupItemResult } from '../data/TipGroupItemFragment'
import { CloseButton } from './CloseButton'
import { Icon } from './Icon'
import styles from './TipModal.module.sass'

export interface TipModalProps {
	isOpen: boolean
	onRequestClose: () => void
	title?: string
	description?: string
	tips: TipGroupItemResult[]
}

export const TipModal: FunctionComponent<TipModalProps> = ({ isOpen, onRequestClose, tips, title, description }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName={styles.overlay}
			className={styles.modalContent}
		>
			<div className={styles.closeButton}>
				<CloseButton onClose={onRequestClose} />
			</div>
			<div className={styles.title}>{title}</div>
			{description && (
				<div className={styles.description}>
					<RichTextRenderer source={description} />
				</div>
			)}
			<div className={styles.tipList}>
				{tips.map((item) => {
					return (
						<div key={item.id} className={styles.tip}>
							<div className={styles.bulbIcon}>
								<Icon name="bulb" />
							</div>
							{item.tip?.localesByLocale?.title}
						</div>
					)
				})}
			</div>
		</Modal>
	)
}
