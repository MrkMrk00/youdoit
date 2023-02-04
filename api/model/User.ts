import { SchemaDefinition as d } from '@contember/schema-definition'
import { Image } from './Image'

export class User {
	image = d.manyHasOne(Image)
	firstName = d.stringColumn().notNull()
	lastName = d.stringColumn().notNull()
	email = d.stringColumn().notNull()
}
