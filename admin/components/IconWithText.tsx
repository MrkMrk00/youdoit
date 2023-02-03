import { Icon, IconProps, Stack } from '@contember/admin'
import { FunctionComponent, ReactNode } from 'react'

export type IconWithTextProps = {
	children?: ReactNode
} & Pick<IconProps, 'blueprintIcon' | 'contemberIcon' | 'customIcon'>

export const IconWithText: FunctionComponent<IconWithTextProps> = ({
	blueprintIcon,
	contemberIcon,
	customIcon,
	children,
}) => (
	<Stack direction="horizontal" gap="small">
		<Icon contemberIcon={contemberIcon} customIcon={customIcon} blueprintIcon={blueprintIcon} />
		{children}
	</Stack>
)
