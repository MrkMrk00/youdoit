import { EditPage, Field, SelectField, TextField, useEnvironment } from '@contember/admin'
import { LinkUrlField } from '../components/LinkUrlField'
import { LocaleSideDimension } from '../components/LocaleSideDimensions'
import { SeoField } from '../components/SeoField'

export default () => {
	const enviroment = useEnvironment()

	return (
		<EditPage entity="HomePage(unique = One)" rendererProps={{ title: 'Home page' }}>
			<LocaleSideDimension>
				<LinkUrlField derivedFrom="seo.title" />
				<TextField field="title" label="Title" />
				<SelectField
					field="mainRecipe"
					label="Main recipe"
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
				<SeoField field="seo" />
			</LocaleSideDimension>
		</EditPage>
	)
}
