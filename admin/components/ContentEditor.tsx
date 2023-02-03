import { BlockEditor, BlockEditorProps, Component, RichEditor } from '@contember/admin'
import { blockButtons, blockEditorBlocks } from '../utilities/blockHelpers'

const RB = RichEditor.buttons
const defaultFullEditorInlineButtons: BlockEditorProps['inlineButtons'] = [
	[RB.bold, RB.italic, RB.underline, RB.highlight, RB.anchor],
	[RB.headingOne, RB.headingTwo, RB.headingThree, RB.headingFour, RB.unorderedList, RB.orderedList, RB.scrollTarget],
	[RB.alignStart, RB.alignCenter, RB.alignEnd],
	[RB.strikeThrough, RB.code],
]
const defaultBlockButtons: BlockEditorProps['blockButtons'] = [[blockButtons.image]]
const defaultOtherBlockButtons: BlockEditorProps['otherBlockButtons'] = [blockButtons.linkables]

export type ContentEditorProps = {
	blockButtons?: BlockEditorProps['blockButtons']
	otherBlockButtons?: BlockEditorProps['otherBlockButtons']
	inlineButtons?: BlockEditorProps['inlineButtons']
	augmentEditorBuiltins?: boolean
}
export const ContentEditor = Component<ContentEditorProps>(
	({
		blockButtons = defaultBlockButtons,
		otherBlockButtons = defaultOtherBlockButtons,
		inlineButtons = defaultFullEditorInlineButtons,
		augmentEditorBuiltins,
		...props
	}) => (
		<BlockEditor
			referencesField="references"
			referenceDiscriminationField="type"
			field="content.blocks"
			inlineButtons={inlineButtons}
			label="Content"
			contentField="json"
			sortableBy="order"
			blockButtons={blockButtons}
			otherBlockButtons={otherBlockButtons}
			{...props}
		>
			{blockEditorBlocks}
		</BlockEditor>
	),
	'ContentEditor',
)
