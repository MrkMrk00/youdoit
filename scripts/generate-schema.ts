import dotenv from 'dotenv'
import fs from 'fs'
import { Parser } from 'graphql-js-tree'
import { TreeToTS, Utils } from 'graphql-zeus'
import path from 'path'

console.log('Generating schema')

dotenv.config({ path: path.resolve(process.cwd(), 'website', '.env.local'), override: true })
dotenv.config({ path: path.resolve(process.cwd(), 'website', '.env') })

const { NEXT_PUBLIC_TOKEN: apiToken, NEXT_PUBLIC_API_URL: apiUrl } = process.env

if (typeof apiToken !== 'string') {
	throw new Error('Api token not supplied.')
}
if (typeof apiUrl !== 'string') {
	throw new Error('Api url not supplied.')
}

const content = await Utils.getFromUrl(apiUrl, ['Content-Type: application/json', `Authorization: Bearer ${apiToken}`])
const typeScriptDefinition = TreeToTS.resolveTree({ tree: Parser.parse(content) })
fs.writeFileSync(path.resolve(process.cwd(), 'website', 'generated', 'contember.ts'), typeScriptDefinition)
