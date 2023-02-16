import { Component, Field, Repeater, SelectField } from '@contember/admin'

interface RecipeListProps {
	field: string
	label?: string
}

export const RecipeList = Component<RecipeListProps>((props, enviroment) => {
	return (
		<>
			<Repeater field={props.field} label={props.label} sortableBy="order">
				<SelectField
					field="recipe"
					label="Recipe"
					options="Recipe"
					renderOption={(accessor) => {
						return enviroment
							.getDimensionOrElse('locale', [])
							.map((localeCode) => {
								const title = accessor.getField<string>(`locales(locale.code = '${localeCode}').title`).value
								return title
							})
							.join(' / ')
					}}
					optionsStaticRender={
						<>
							{enviroment.getDimensionOrElse('locale', []).map((localeCode) => {
								return <Field field={`locales(locale.code = '${localeCode}').title`} />
							})}
						</>
					}
				/>
			</Repeater>
		</>
	)
})
