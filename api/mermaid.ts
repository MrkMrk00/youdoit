import { Model } from '@contember/schema'
import schema from './index'

function createSchema(params: { output?: string; model: Model.Schema; ignore: Array<RegExp | string> }) {
	const { enums, entities } = params.model

	const entityEntries = Object.entries(entities)

	const ignore = (entityName: string) =>
		params.ignore.some((pattern) => {
			if (typeof pattern === 'string') {
				return pattern === entityName
			}
			const result = pattern.test(entityName)
			pattern.lastIndex = 0
			return result
		})

	const schemaString = `erDiagram
	${indent(
		entityEntries
			.filter(([name]) => !ignore(name))
			.map(([name, entity]) => entityMermaid(name, entity, { enums, ignore }))
			.join('\n'),
	)}
	`

	console.log(schemaString)
}

function indent(str: string, num = 1) {
	return str
		.split('\n')
		.map((line) => '\t'.repeat(num) + line)
		.join('\n')
}

function entityMermaid(
	name: string,
	entity: Model.Entity,
	ctx: {
		enums: Model.Schema['enums']
		ignore: (entityName: string) => boolean
	},
) {
	const rels: string[] = []
	const e = `${name} {
${indent(
	Object.entries(entity.fields)
		.filter(([_, def]) => !('target' in def && ctx.ignore(def.target)))
		.filter(([_, def]) => def.name !== 'id')
		.map(([_, def]) => {
			switch (def.type) {
				case Model.RelationType.ManyHasMany:
					rels.push(`${name} }o--o{ ${def.target} : ${def.name}`)
					break
				case Model.RelationType.OneHasMany:
					// rels.push(`${name} ||--o{ ${def.target} : ${def.name}`)
					break
				case Model.RelationType.ManyHasOne:
					rels.push(`${name} }o--|| ${def.target} : ${def.name}`)
					break
				case Model.RelationType.OneHasOne:
					rels.push(`${name} ||--|| ${def.target} : ${def.name}`)
					break
			}
			switch (def.type) {
				case Model.RelationType.ManyHasMany:
				case Model.RelationType.OneHasMany:
					return `${def.name} ${def.type} "${def.target}[]!"`
				case Model.RelationType.ManyHasOne:
				case Model.RelationType.OneHasOne:
					return `${def.name} ${def.type} "${def.target}${def.nullable ? '' : '!'}"`
			}
			switch (def.type) {
				case Model.ColumnType.Enum:
					return `${def.name} ${def.columnType} "(${[...new Set(ctx.enums[def.columnType].values())].join(' | ')})${
						def.nullable ? '' : '!'
					}"`
			}
			return `${def.name} ${def.type} "${def.type}${def.nullable ? '' : '!'}"`
		})
		.join('\n'),
)}
}
`

	return [e, rels.join('\n')].join('\n') + '\n'
}

createSchema({
	model: schema.model,
	ignore: [
		'Content',
		'ContentBlock',
		'ContentReference',
		'ContentReferenceLinkableItem',
		// 'AppEvent',
		// 'TenantPerson',
		// 'Image',
		// 'Project',
		// 'Building',
		// 'General',
		// 'UploadedFile',
		// 'LogRecord',
		// /^Gallery/g,
		// /Template$/g,
		// /Info$/g,
	],
})
