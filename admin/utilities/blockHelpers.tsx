import { Block, BlockEditorProps } from '@contember/admin'
import { ReactNode } from 'react'
import { ContentReferenceType } from '../../api/model/Content'
import { IconWithText } from '../components/IconWithText'
import { blocks } from './blocks'

type Type = typeof ContentReferenceType.values[number]

type ButtonBlock = NonNullable<BlockEditorProps['otherBlockButtons']>[number]
type FormBlock = Omit<ButtonBlock, 'descriminateBy'> & {
	form: ReactNode
}
export type Blocks = Record<Type, FormBlock>
type OptionsFlags<Type> = {
	[Property in keyof Type]:
		| {
				discriminateBy: Property
		  } & ButtonBlock
}

export const blockButtons = Object.fromEntries(
	Object.entries(blocks).map(([discriminateBy, { form, ...data }]) => [
		discriminateBy,
		{
			...data,
			discriminateBy,
		},
	]),
) as OptionsFlags<typeof blocks>

export const blockEditorBlocks = Object.entries(blocks as Blocks).map(
	([descriminateBy, { form, blueprintIcon, customIcon, contemberIcon, title }]) => (
		<Block
			key={descriminateBy}
			discriminateBy={descriminateBy}
			label={
				<IconWithText blueprintIcon={blueprintIcon} customIcon={customIcon} contemberIcon={contemberIcon}>
					{title}
				</IconWithText>
			}
		>
			{form}
		</Block>
	),
)
