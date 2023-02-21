import { Block, Component, DiscriminatedBlocks } from '@contember/admin'
import { Step } from './Step'
import { Tip } from './Tip'

export const StepGroupItem = Component(() => {
	return (
		<DiscriminatedBlocks field="type" label="Step item type" defaultValue="step">
			<Block discriminateBy="step" label="Step">
				<Step field="step" />
			</Block>
			<Block discriminateBy="tip" label="Tip">
				<Tip field="tip" />
			</Block>
		</DiscriminatedBlocks>
	)
})
