import { LinkType } from '../../generated/contember'
import type { LinkResult } from '../data/LinkFragment'
import { isDefined } from './isDefined'

export const contemberLinkToHref = (link: LinkResult): string => {
	if (link.type === LinkType.external && isDefined(link.externalLink)) {
		return link.externalLink
	}
	if (link.type === LinkType.internal && isDefined(link.internalLink)) {
		return link.internalLink.url
	}
	console.warn('Invalid link', link)
	return ''
}
