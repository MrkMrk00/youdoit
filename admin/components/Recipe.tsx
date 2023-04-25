import {
	Box,
	Component,
	DateTimeField,
	Entity,
	Field,
	MultiSelectField,
	Repeater,
	RichTextField,
	Section,
	SelectField,
	TextField,
} from '@contember/admin'
import { ImageField } from './ImageField'
import { LinkUrlField } from './LinkUrlField'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { SeoField } from './SeoField'
import { StepGroup } from './StepGroup'
import { TipGroup } from './TipGroup'

export const Recipe = Component((_, enviroment) => {
	return (
		<>
			<Section heading="Basic informations">
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
				<LocaleSideDimension>
					<TextField field="title" label="Title" />
					<RichTextField field="description" label="Description" />
				</LocaleSideDimension>
				<TextField field="price" label="Price" />
				<Box heading="Tile">
					<ImageField field="tileImage" label="Tile image" />
					<LocaleSideDimension>
						<RichTextField field="tileDescription" label="Tile description" />
					</LocaleSideDimension>
				</Box>
			</Section>
			<Section heading="Categories">
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
			</Section>
			<Section heading="Images">
				<ImageField field="mainImage" label="Main image" />
			</Section>
			<Section heading="Steps">
				<Repeater field="stepsGroups" label="Step groups" sortableBy="order">
					<StepGroup />
				</Repeater>
			</Section>
			<Section heading="Tips">
				<Repeater field="tipGroups" label="Tip groups" sortableBy="order">
					<TipGroup />
				</Repeater>
			</Section>
			<Section heading="Seo">
				<SeoField field="seo" />
			</Section>
		</>
	)
})
