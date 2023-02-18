import {
	Box,
	Component,
	DateTimeField,
	Entity,
	Field,
	MultiSelectField,
	Repeater,
	RichTextField,
	SelectField,
	TextField,
} from '@contember/admin'
import { ImageField } from './ImageField'
import { LinkUrlField } from './LinkUrlField'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { StepGroup } from './StepGroup'

export const Recipe = Component((_, enviroment) => {
	return (
		<>
			<LocaleSideDimension>
				<LinkUrlField derivedFrom="title" />
			</LocaleSideDimension>
			<SelectField
				field="createdBy"
				label="Created by"
				options="User"
				renderOption={(accessor) => {
					const firstName = accessor.getField('firstName').value
					const lastName = accessor.getField('lastName').value

					return firstName + ' ' + lastName
				}}
				optionsStaticRender={
					<>
						<Field field="firstName" />
						<Field field="lastName" />
					</>
				}
			/>
			<DateTimeField field="publishDate" label="Publish date" />
			<MultiSelectField
				field="categories"
				label="Categories"
				options="Category"
				renderOption={(e) => (
					<Entity accessor={e}>
						<LocaleSideDimension>
							<Field field="title" />
						</LocaleSideDimension>
					</Entity>
				)}
				optionsStaticRender={
					<LocaleSideDimension>
						<Field field="title" />
					</LocaleSideDimension>
				}
			/>
			<TextField field="price" label="Price" />
			<Box heading="Tile">
				<ImageField field="tileImage" label="Tile image" />
				<LocaleSideDimension>
					<RichTextField field="tileDescription" label="Tile description" />
				</LocaleSideDimension>
			</Box>
			<ImageField field="mainImage" label="Main image" />
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Description" />
			</LocaleSideDimension>
			<Repeater field="stepsGroups" label="Step groups" sortableBy="order">
				<StepGroup />
			</Repeater>
		</>
	)
})
