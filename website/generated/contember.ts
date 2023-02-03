/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		getGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere"
		},
		listGeneral:{
			filter:"GeneralWhere",
			orderBy:"GeneralOrderBy"
		},
		paginateGeneral:{
			filter:"GeneralWhere",
			orderBy:"GeneralOrderBy"
		},
		validateCreateGeneral:{
			data:"GeneralCreateInput"
		},
		validateUpdateGeneral:{
			by:"GeneralUniqueWhere",
			data:"GeneralUpdateInput"
		},
		getImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere"
		},
		listImage:{
			filter:"ImageWhere",
			orderBy:"ImageOrderBy"
		},
		paginateImage:{
			filter:"ImageWhere",
			orderBy:"ImageOrderBy"
		},
		validateCreateImage:{
			data:"ImageCreateInput"
		},
		validateUpdateImage:{
			by:"ImageUniqueWhere",
			data:"ImageUpdateInput"
		},
		getGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere"
		},
		listGenericPage:{
			filter:"GenericPageWhere",
			orderBy:"GenericPageOrderBy"
		},
		paginateGenericPage:{
			filter:"GenericPageWhere",
			orderBy:"GenericPageOrderBy"
		},
		validateCreateGenericPage:{
			data:"GenericPageCreateInput"
		},
		validateUpdateGenericPage:{
			by:"GenericPageUniqueWhere",
			data:"GenericPageUpdateInput"
		},
		getLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere"
		},
		listLinkable:{
			filter:"LinkableWhere",
			orderBy:"LinkableOrderBy"
		},
		paginateLinkable:{
			filter:"LinkableWhere",
			orderBy:"LinkableOrderBy"
		},
		validateCreateLinkable:{
			data:"LinkableCreateInput"
		},
		validateUpdateLinkable:{
			by:"LinkableUniqueWhere",
			data:"LinkableUpdateInput"
		},
		getSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere"
		},
		listSeo:{
			filter:"SeoWhere",
			orderBy:"SeoOrderBy"
		},
		paginateSeo:{
			filter:"SeoWhere",
			orderBy:"SeoOrderBy"
		},
		validateCreateSeo:{
			data:"SeoCreateInput"
		},
		validateUpdateSeo:{
			by:"SeoUniqueWhere",
			data:"SeoUpdateInput"
		},
		getContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere"
		},
		listContent:{
			filter:"ContentWhere",
			orderBy:"ContentOrderBy"
		},
		paginateContent:{
			filter:"ContentWhere",
			orderBy:"ContentOrderBy"
		},
		validateCreateContent:{
			data:"ContentCreateInput"
		},
		validateUpdateContent:{
			by:"ContentUniqueWhere",
			data:"ContentUpdateInput"
		},
		getContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere"
		},
		listContentBlock:{
			filter:"ContentBlockWhere",
			orderBy:"ContentBlockOrderBy"
		},
		paginateContentBlock:{
			filter:"ContentBlockWhere",
			orderBy:"ContentBlockOrderBy"
		},
		validateCreateContentBlock:{
			data:"ContentBlockCreateInput"
		},
		validateUpdateContentBlock:{
			by:"ContentBlockUniqueWhere",
			data:"ContentBlockUpdateInput"
		},
		getContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere"
		},
		listContentReference:{
			filter:"ContentReferenceWhere",
			orderBy:"ContentReferenceOrderBy"
		},
		paginateContentReference:{
			filter:"ContentReferenceWhere",
			orderBy:"ContentReferenceOrderBy"
		},
		validateCreateContentReference:{
			data:"ContentReferenceCreateInput"
		},
		validateUpdateContentReference:{
			by:"ContentReferenceUniqueWhere",
			data:"ContentReferenceUpdateInput"
		},
		getContentReferenceLinkableItem:{
			by:"ContentReferenceLinkableItemUniqueWhere",
			filter:"ContentReferenceLinkableItemWhere"
		},
		listContentReferenceLinkableItem:{
			filter:"ContentReferenceLinkableItemWhere",
			orderBy:"ContentReferenceLinkableItemOrderBy"
		},
		paginateContentReferenceLinkableItem:{
			filter:"ContentReferenceLinkableItemWhere",
			orderBy:"ContentReferenceLinkableItemOrderBy"
		},
		getRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere"
		},
		listRedirect:{
			filter:"RedirectWhere",
			orderBy:"RedirectOrderBy"
		},
		paginateRedirect:{
			filter:"RedirectWhere",
			orderBy:"RedirectOrderBy"
		},
		validateCreateRedirect:{
			data:"RedirectCreateInput"
		},
		validateUpdateRedirect:{
			by:"RedirectUniqueWhere",
			data:"RedirectUpdateInput"
		},
		getLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere"
		},
		listLink:{
			filter:"LinkWhere",
			orderBy:"LinkOrderBy"
		},
		paginateLink:{
			filter:"LinkWhere",
			orderBy:"LinkOrderBy"
		},
		validateCreateLink:{
			data:"LinkCreateInput"
		},
		validateUpdateLink:{
			by:"LinkUniqueWhere",
			data:"LinkUpdateInput"
		}
	},
	General:{
		image:{
			filter:"ImageWhere"
		},
		seo:{
			filter:"SeoWhere"
		}
	},
	UUID: `scalar.UUID` as const,
	One: "enum" as const,
	ImageWhere:{
		id:"UUIDCondition",
		url:"StringCondition",
		width:"IntCondition",
		height:"IntCondition",
		size:"IntCondition",
		type:"StringCondition",
		alt:"StringCondition",
		and:"ImageWhere",
		or:"ImageWhere",
		not:"ImageWhere"
	},
	UUIDCondition:{
		and:"UUIDCondition",
		or:"UUIDCondition",
		not:"UUIDCondition",
		eq:"UUID",
		notEq:"UUID",
		in:"UUID",
		notIn:"UUID",
		lt:"UUID",
		lte:"UUID",
		gt:"UUID",
		gte:"UUID"
	},
	StringCondition:{
		and:"StringCondition",
		or:"StringCondition",
		not:"StringCondition"
	},
	IntCondition:{
		and:"IntCondition",
		or:"IntCondition",
		not:"IntCondition"
	},
	Seo:{
		ogImage:{
			filter:"ImageWhere"
		}
	},
	SeoWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		description:"StringCondition",
		ogTitle:"StringCondition",
		ogDescription:"StringCondition",
		noIndex:"BooleanCondition",
		noFollow:"BooleanCondition",
		ogImage:"ImageWhere",
		and:"SeoWhere",
		or:"SeoWhere",
		not:"SeoWhere"
	},
	BooleanCondition:{
		and:"BooleanCondition",
		or:"BooleanCondition",
		not:"BooleanCondition"
	},
	GeneralUniqueWhere:{
		id:"UUID",
		unique:"One",
		seo:"SeoUniqueWhere"
	},
	SeoUniqueWhere:{
		id:"UUID",
		ogImage:"ImageUniqueWhere"
	},
	ImageUniqueWhere:{
		id:"UUID"
	},
	GeneralWhere:{
		id:"UUIDCondition",
		unique:"OneCondition",
		dummy:"StringCondition",
		image:"ImageWhere",
		seo:"SeoWhere",
		and:"GeneralWhere",
		or:"GeneralWhere",
		not:"GeneralWhere"
	},
	OneCondition:{
		and:"OneCondition",
		or:"OneCondition",
		not:"OneCondition",
		eq:"One",
		notEq:"One",
		in:"One",
		notIn:"One",
		lt:"One",
		lte:"One",
		gt:"One",
		gte:"One"
	},
	GeneralOrderBy:{
		id:"OrderDirection",
		unique:"OrderDirection",
		dummy:"OrderDirection",
		image:"ImageOrderBy",
		seo:"SeoOrderBy"
	},
	OrderDirection: "enum" as const,
	ImageOrderBy:{
		id:"OrderDirection",
		url:"OrderDirection",
		width:"OrderDirection",
		height:"OrderDirection",
		size:"OrderDirection",
		type:"OrderDirection",
		alt:"OrderDirection"
	},
	SeoOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		description:"OrderDirection",
		ogTitle:"OrderDirection",
		ogDescription:"OrderDirection",
		noIndex:"OrderDirection",
		noFollow:"OrderDirection",
		ogImage:"ImageOrderBy"
	},
	GeneralCreateInput:{
		id:"UUID",
		unique:"One",
		image:"GeneralCreateImageEntityRelationInput",
		seo:"GeneralCreateSeoEntityRelationInput"
	},
	GeneralCreateImageEntityRelationInput:{
		connect:"ImageUniqueWhere",
		create:"ImageCreateInput"
	},
	ImageCreateInput:{
		id:"UUID"
	},
	GeneralCreateSeoEntityRelationInput:{
		connect:"SeoUniqueWhere",
		create:"SeoCreateInput"
	},
	SeoCreateInput:{
		id:"UUID",
		ogImage:"SeoCreateOgImageEntityRelationInput"
	},
	SeoCreateOgImageEntityRelationInput:{
		connect:"ImageUniqueWhere",
		create:"ImageCreateInput"
	},
	GeneralUpdateInput:{
		unique:"One",
		image:"GeneralUpdateImageEntityRelationInput",
		seo:"GeneralUpdateSeoEntityRelationInput"
	},
	GeneralUpdateImageEntityRelationInput:{
		create:"ImageCreateInput",
		update:"ImageUpdateInput",
		upsert:"GeneralUpsertImageRelationInput",
		connect:"ImageUniqueWhere"
	},
	ImageUpdateInput:{

	},
	GeneralUpsertImageRelationInput:{
		update:"ImageUpdateInput",
		create:"ImageCreateInput"
	},
	GeneralUpdateSeoEntityRelationInput:{
		create:"SeoCreateInput",
		update:"SeoUpdateInput",
		upsert:"GeneralUpsertSeoRelationInput",
		connect:"SeoUniqueWhere"
	},
	SeoUpdateInput:{
		ogImage:"SeoUpdateOgImageEntityRelationInput"
	},
	SeoUpdateOgImageEntityRelationInput:{
		create:"ImageCreateInput",
		update:"ImageUpdateInput",
		upsert:"SeoUpsertOgImageRelationInput",
		connect:"ImageUniqueWhere"
	},
	SeoUpsertOgImageRelationInput:{
		update:"ImageUpdateInput",
		create:"ImageCreateInput"
	},
	GeneralUpsertSeoRelationInput:{
		update:"SeoUpdateInput",
		create:"SeoCreateInput"
	},
	GenericPage:{
		seo:{
			filter:"SeoWhere"
		},
		link:{
			filter:"LinkableWhere"
		},
		content:{
			filter:"ContentWhere"
		}
	},
	Linkable:{
		genericPage:{
			filter:"GenericPageWhere"
		},
		redirect:{
			filter:"RedirectWhere"
		}
	},
	GenericPageWhere:{
		id:"UUIDCondition",
		seo:"SeoWhere",
		link:"LinkableWhere",
		title:"StringCondition",
		content:"ContentWhere",
		and:"GenericPageWhere",
		or:"GenericPageWhere",
		not:"GenericPageWhere"
	},
	LinkableWhere:{
		id:"UUIDCondition",
		url:"StringCondition",
		genericPage:"GenericPageWhere",
		redirect:"RedirectWhere",
		and:"LinkableWhere",
		or:"LinkableWhere",
		not:"LinkableWhere"
	},
	RedirectWhere:{
		id:"UUIDCondition",
		link:"LinkableWhere",
		target:"LinkWhere",
		and:"RedirectWhere",
		or:"RedirectWhere",
		not:"RedirectWhere"
	},
	LinkWhere:{
		id:"UUIDCondition",
		type:"LinkTypeCondition",
		title:"StringCondition",
		externalLink:"StringCondition",
		internalLink:"LinkableWhere",
		and:"LinkWhere",
		or:"LinkWhere",
		not:"LinkWhere"
	},
	LinkTypeCondition:{
		and:"LinkTypeCondition",
		or:"LinkTypeCondition",
		not:"LinkTypeCondition",
		eq:"LinkType",
		notEq:"LinkType",
		in:"LinkType",
		notIn:"LinkType",
		lt:"LinkType",
		lte:"LinkType",
		gt:"LinkType",
		gte:"LinkType"
	},
	LinkType: "enum" as const,
	ContentWhere:{
		id:"UUIDCondition",
		blocks:"ContentBlockWhere",
		and:"ContentWhere",
		or:"ContentWhere",
		not:"ContentWhere"
	},
	ContentBlockWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		json:"StringCondition",
		content:"ContentWhere",
		references:"ContentReferenceWhere",
		and:"ContentBlockWhere",
		or:"ContentBlockWhere",
		not:"ContentBlockWhere"
	},
	ContentReferenceWhere:{
		id:"UUIDCondition",
		type:"ContentReferenceTypeCondition",
		primaryText:"StringCondition",
		block:"ContentBlockWhere",
		image:"ImageWhere",
		linkables:"ContentReferenceLinkableItemWhere",
		and:"ContentReferenceWhere",
		or:"ContentReferenceWhere",
		not:"ContentReferenceWhere"
	},
	ContentReferenceTypeCondition:{
		and:"ContentReferenceTypeCondition",
		or:"ContentReferenceTypeCondition",
		not:"ContentReferenceTypeCondition",
		eq:"ContentReferenceType",
		notEq:"ContentReferenceType",
		in:"ContentReferenceType",
		notIn:"ContentReferenceType",
		lt:"ContentReferenceType",
		lte:"ContentReferenceType",
		gt:"ContentReferenceType",
		gte:"ContentReferenceType"
	},
	ContentReferenceType: "enum" as const,
	ContentReferenceLinkableItemWhere:{
		id:"UUIDCondition",
		item:"LinkableWhere",
		reference:"ContentReferenceWhere",
		and:"ContentReferenceLinkableItemWhere",
		or:"ContentReferenceLinkableItemWhere",
		not:"ContentReferenceLinkableItemWhere"
	},
	Redirect:{
		link:{
			filter:"LinkableWhere"
		},
		target:{
			filter:"LinkWhere"
		}
	},
	Link:{
		internalLink:{
			filter:"LinkableWhere"
		}
	},
	Content:{
		blocks:{
			filter:"ContentBlockWhere",
			orderBy:"ContentBlockOrderBy"
		},
		blocksByReferences:{
			by:"ContentBlocksByReferencesUniqueWhere",
			filter:"ContentBlockWhere"
		},
		paginateBlocks:{
			filter:"ContentBlockWhere",
			orderBy:"ContentBlockOrderBy"
		}
	},
	ContentBlock:{
		content:{
			filter:"ContentWhere"
		},
		references:{
			filter:"ContentReferenceWhere",
			orderBy:"ContentReferenceOrderBy"
		},
		referencesByLinkables:{
			by:"ContentBlockReferencesByLinkablesUniqueWhere",
			filter:"ContentReferenceWhere"
		},
		paginateReferences:{
			filter:"ContentReferenceWhere",
			orderBy:"ContentReferenceOrderBy"
		}
	},
	ContentReference:{
		block:{
			filter:"ContentBlockWhere"
		},
		image:{
			filter:"ImageWhere"
		},
		linkables:{
			filter:"ContentReferenceLinkableItemWhere",
			orderBy:"ContentReferenceLinkableItemOrderBy"
		},
		linkablesByItem:{
			by:"ContentReferenceLinkablesByItemUniqueWhere",
			filter:"ContentReferenceLinkableItemWhere"
		},
		paginateLinkables:{
			filter:"ContentReferenceLinkableItemWhere",
			orderBy:"ContentReferenceLinkableItemOrderBy"
		}
	},
	ContentReferenceLinkableItem:{
		item:{
			filter:"LinkableWhere"
		},
		reference:{
			filter:"ContentReferenceWhere"
		}
	},
	ContentReferenceLinkableItemOrderBy:{
		id:"OrderDirection",
		item:"LinkableOrderBy",
		reference:"ContentReferenceOrderBy"
	},
	LinkableOrderBy:{
		id:"OrderDirection",
		url:"OrderDirection",
		genericPage:"GenericPageOrderBy",
		redirect:"RedirectOrderBy"
	},
	GenericPageOrderBy:{
		id:"OrderDirection",
		seo:"SeoOrderBy",
		link:"LinkableOrderBy",
		title:"OrderDirection",
		content:"ContentOrderBy"
	},
	ContentOrderBy:{
		id:"OrderDirection"
	},
	RedirectOrderBy:{
		id:"OrderDirection",
		link:"LinkableOrderBy",
		target:"LinkOrderBy"
	},
	LinkOrderBy:{
		id:"OrderDirection",
		type:"OrderDirection",
		title:"OrderDirection",
		externalLink:"OrderDirection",
		internalLink:"LinkableOrderBy"
	},
	ContentReferenceOrderBy:{
		id:"OrderDirection",
		type:"OrderDirection",
		primaryText:"OrderDirection",
		block:"ContentBlockOrderBy",
		image:"ImageOrderBy"
	},
	ContentBlockOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		json:"OrderDirection",
		content:"ContentOrderBy"
	},
	ContentReferenceLinkablesByItemUniqueWhere:{
		item:"LinkableUniqueWhere"
	},
	LinkableUniqueWhere:{
		id:"UUID",
		genericPage:"GenericPageUniqueWhere",
		redirect:"RedirectUniqueWhere"
	},
	GenericPageUniqueWhere:{
		id:"UUID",
		seo:"SeoUniqueWhere",
		link:"LinkableUniqueWhere",
		content:"ContentUniqueWhere"
	},
	ContentUniqueWhere:{
		id:"UUID",
		blocks:"ContentBlockUniqueWhere"
	},
	ContentBlockUniqueWhere:{
		id:"UUID",
		references:"ContentReferenceUniqueWhere"
	},
	ContentReferenceUniqueWhere:{
		id:"UUID",
		linkables:"ContentReferenceLinkableItemUniqueWhere"
	},
	ContentReferenceLinkableItemUniqueWhere:{
		id:"UUID",
		item:"LinkableUniqueWhere"
	},
	RedirectUniqueWhere:{
		id:"UUID",
		link:"LinkableUniqueWhere",
		target:"LinkUniqueWhere"
	},
	LinkUniqueWhere:{
		id:"UUID"
	},
	ContentBlockReferencesByLinkablesUniqueWhere:{
		linkables:"ContentReferenceLinkableItemUniqueWhere"
	},
	ContentBlocksByReferencesUniqueWhere:{
		references:"ContentReferenceUniqueWhere"
	},
	GenericPageCreateInput:{
		id:"UUID",
		seo:"GenericPageCreateSeoEntityRelationInput",
		link:"GenericPageCreateLinkEntityRelationInput",
		content:"GenericPageCreateContentEntityRelationInput"
	},
	GenericPageCreateSeoEntityRelationInput:{
		connect:"SeoUniqueWhere",
		create:"SeoCreateInput"
	},
	GenericPageCreateLinkEntityRelationInput:{
		connect:"LinkableUniqueWhere",
		create:"LinkableWithoutGenericPageCreateInput"
	},
	LinkableWithoutGenericPageCreateInput:{
		id:"UUID",
		redirect:"LinkableCreateRedirectEntityRelationInput"
	},
	LinkableCreateRedirectEntityRelationInput:{
		connect:"RedirectUniqueWhere",
		create:"RedirectWithoutLinkCreateInput"
	},
	RedirectWithoutLinkCreateInput:{
		id:"UUID",
		target:"RedirectCreateTargetEntityRelationInput"
	},
	RedirectCreateTargetEntityRelationInput:{
		connect:"LinkUniqueWhere",
		create:"LinkCreateInput"
	},
	LinkCreateInput:{
		id:"UUID",
		type:"LinkType",
		internalLink:"LinkCreateInternalLinkEntityRelationInput"
	},
	LinkCreateInternalLinkEntityRelationInput:{
		connect:"LinkableUniqueWhere",
		create:"LinkableCreateInput"
	},
	LinkableCreateInput:{
		id:"UUID",
		genericPage:"LinkableCreateGenericPageEntityRelationInput",
		redirect:"LinkableCreateRedirectEntityRelationInput"
	},
	LinkableCreateGenericPageEntityRelationInput:{
		connect:"GenericPageUniqueWhere",
		create:"GenericPageWithoutLinkCreateInput"
	},
	GenericPageWithoutLinkCreateInput:{
		id:"UUID",
		seo:"GenericPageCreateSeoEntityRelationInput",
		content:"GenericPageCreateContentEntityRelationInput"
	},
	GenericPageCreateContentEntityRelationInput:{
		connect:"ContentUniqueWhere",
		create:"ContentCreateInput"
	},
	ContentCreateInput:{
		id:"UUID",
		blocks:"ContentCreateBlocksEntityRelationInput"
	},
	ContentCreateBlocksEntityRelationInput:{
		connect:"ContentBlockUniqueWhere",
		create:"ContentBlockWithoutContentCreateInput"
	},
	ContentBlockWithoutContentCreateInput:{
		id:"UUID",
		references:"ContentBlockCreateReferencesEntityRelationInput"
	},
	ContentBlockCreateReferencesEntityRelationInput:{
		connect:"ContentReferenceUniqueWhere",
		create:"ContentReferenceWithoutBlockCreateInput"
	},
	ContentReferenceWithoutBlockCreateInput:{
		id:"UUID",
		type:"ContentReferenceType",
		image:"ContentReferenceCreateImageEntityRelationInput",
		linkables:"ContentReferenceCreateLinkablesEntityRelationInput"
	},
	ContentReferenceCreateImageEntityRelationInput:{
		connect:"ImageUniqueWhere",
		create:"ImageCreateInput"
	},
	ContentReferenceCreateLinkablesEntityRelationInput:{
		connect:"ContentReferenceLinkableItemUniqueWhere"
	},
	GenericPageUpdateInput:{
		seo:"GenericPageUpdateSeoEntityRelationInput",
		link:"GenericPageUpdateLinkEntityRelationInput",
		content:"GenericPageUpdateContentEntityRelationInput"
	},
	GenericPageUpdateSeoEntityRelationInput:{
		create:"SeoCreateInput",
		update:"SeoUpdateInput",
		upsert:"GenericPageUpsertSeoRelationInput",
		connect:"SeoUniqueWhere"
	},
	GenericPageUpsertSeoRelationInput:{
		update:"SeoUpdateInput",
		create:"SeoCreateInput"
	},
	GenericPageUpdateLinkEntityRelationInput:{
		create:"LinkableWithoutGenericPageCreateInput",
		update:"LinkableWithoutGenericPageUpdateInput",
		upsert:"GenericPageUpsertLinkRelationInput",
		connect:"LinkableUniqueWhere"
	},
	LinkableWithoutGenericPageUpdateInput:{
		redirect:"LinkableUpdateRedirectEntityRelationInput"
	},
	LinkableUpdateRedirectEntityRelationInput:{
		create:"RedirectWithoutLinkCreateInput",
		update:"RedirectWithoutLinkUpdateInput",
		upsert:"LinkableUpsertRedirectRelationInput",
		connect:"RedirectUniqueWhere"
	},
	RedirectWithoutLinkUpdateInput:{
		target:"RedirectUpdateTargetEntityRelationInput"
	},
	RedirectUpdateTargetEntityRelationInput:{
		create:"LinkCreateInput",
		update:"LinkUpdateInput",
		upsert:"RedirectUpsertTargetRelationInput",
		connect:"LinkUniqueWhere"
	},
	LinkUpdateInput:{
		type:"LinkType",
		internalLink:"LinkUpdateInternalLinkEntityRelationInput"
	},
	LinkUpdateInternalLinkEntityRelationInput:{
		create:"LinkableCreateInput",
		update:"LinkableUpdateInput",
		upsert:"LinkUpsertInternalLinkRelationInput",
		connect:"LinkableUniqueWhere"
	},
	LinkableUpdateInput:{
		genericPage:"LinkableUpdateGenericPageEntityRelationInput",
		redirect:"LinkableUpdateRedirectEntityRelationInput"
	},
	LinkableUpdateGenericPageEntityRelationInput:{
		create:"GenericPageWithoutLinkCreateInput",
		update:"GenericPageWithoutLinkUpdateInput",
		upsert:"LinkableUpsertGenericPageRelationInput",
		connect:"GenericPageUniqueWhere"
	},
	GenericPageWithoutLinkUpdateInput:{
		seo:"GenericPageUpdateSeoEntityRelationInput",
		content:"GenericPageUpdateContentEntityRelationInput"
	},
	GenericPageUpdateContentEntityRelationInput:{
		create:"ContentCreateInput",
		update:"ContentUpdateInput",
		upsert:"GenericPageUpsertContentRelationInput",
		connect:"ContentUniqueWhere"
	},
	ContentUpdateInput:{
		blocks:"ContentUpdateBlocksEntityRelationInput"
	},
	ContentUpdateBlocksEntityRelationInput:{
		create:"ContentBlockWithoutContentCreateInput",
		update:"ContentUpdateBlocksRelationInput",
		upsert:"ContentUpsertBlocksRelationInput",
		connect:"ContentBlockUniqueWhere",
		disconnect:"ContentBlockUniqueWhere",
		delete:"ContentBlockUniqueWhere"
	},
	ContentUpdateBlocksRelationInput:{
		by:"ContentBlockUniqueWhere",
		data:"ContentBlockWithoutContentUpdateInput"
	},
	ContentBlockWithoutContentUpdateInput:{
		references:"ContentBlockUpdateReferencesEntityRelationInput"
	},
	ContentBlockUpdateReferencesEntityRelationInput:{
		create:"ContentReferenceWithoutBlockCreateInput",
		update:"ContentBlockUpdateReferencesRelationInput",
		upsert:"ContentBlockUpsertReferencesRelationInput",
		connect:"ContentReferenceUniqueWhere",
		disconnect:"ContentReferenceUniqueWhere",
		delete:"ContentReferenceUniqueWhere"
	},
	ContentBlockUpdateReferencesRelationInput:{
		by:"ContentReferenceUniqueWhere",
		data:"ContentReferenceWithoutBlockUpdateInput"
	},
	ContentReferenceWithoutBlockUpdateInput:{
		type:"ContentReferenceType",
		image:"ContentReferenceUpdateImageEntityRelationInput",
		linkables:"ContentReferenceUpdateLinkablesEntityRelationInput"
	},
	ContentReferenceUpdateImageEntityRelationInput:{
		create:"ImageCreateInput",
		update:"ImageUpdateInput",
		upsert:"ContentReferenceUpsertImageRelationInput",
		connect:"ImageUniqueWhere"
	},
	ContentReferenceUpsertImageRelationInput:{
		update:"ImageUpdateInput",
		create:"ImageCreateInput"
	},
	ContentReferenceUpdateLinkablesEntityRelationInput:{
		connect:"ContentReferenceLinkableItemUniqueWhere",
		disconnect:"ContentReferenceLinkableItemUniqueWhere",
		delete:"ContentReferenceLinkableItemUniqueWhere"
	},
	ContentBlockUpsertReferencesRelationInput:{
		by:"ContentReferenceUniqueWhere",
		update:"ContentReferenceWithoutBlockUpdateInput",
		create:"ContentReferenceWithoutBlockCreateInput"
	},
	ContentUpsertBlocksRelationInput:{
		by:"ContentBlockUniqueWhere",
		update:"ContentBlockWithoutContentUpdateInput",
		create:"ContentBlockWithoutContentCreateInput"
	},
	GenericPageUpsertContentRelationInput:{
		update:"ContentUpdateInput",
		create:"ContentCreateInput"
	},
	LinkableUpsertGenericPageRelationInput:{
		update:"GenericPageWithoutLinkUpdateInput",
		create:"GenericPageWithoutLinkCreateInput"
	},
	LinkUpsertInternalLinkRelationInput:{
		update:"LinkableUpdateInput",
		create:"LinkableCreateInput"
	},
	RedirectUpsertTargetRelationInput:{
		update:"LinkUpdateInput",
		create:"LinkCreateInput"
	},
	LinkableUpsertRedirectRelationInput:{
		update:"RedirectWithoutLinkUpdateInput",
		create:"RedirectWithoutLinkCreateInput"
	},
	GenericPageUpsertLinkRelationInput:{
		update:"LinkableWithoutGenericPageUpdateInput",
		create:"LinkableWithoutGenericPageCreateInput"
	},
	ContentBlockCreateInput:{
		id:"UUID",
		content:"ContentBlockCreateContentEntityRelationInput",
		references:"ContentBlockCreateReferencesEntityRelationInput"
	},
	ContentBlockCreateContentEntityRelationInput:{
		connect:"ContentUniqueWhere",
		create:"ContentWithoutBlocksCreateInput"
	},
	ContentWithoutBlocksCreateInput:{
		id:"UUID"
	},
	ContentBlockUpdateInput:{
		content:"ContentBlockUpdateContentEntityRelationInput",
		references:"ContentBlockUpdateReferencesEntityRelationInput"
	},
	ContentBlockUpdateContentEntityRelationInput:{
		create:"ContentWithoutBlocksCreateInput",
		update:"ContentWithoutBlocksUpdateInput",
		upsert:"ContentBlockUpsertContentRelationInput",
		connect:"ContentUniqueWhere"
	},
	ContentWithoutBlocksUpdateInput:{

	},
	ContentBlockUpsertContentRelationInput:{
		update:"ContentWithoutBlocksUpdateInput",
		create:"ContentWithoutBlocksCreateInput"
	},
	ContentReferenceCreateInput:{
		id:"UUID",
		type:"ContentReferenceType",
		block:"ContentReferenceCreateBlockEntityRelationInput",
		image:"ContentReferenceCreateImageEntityRelationInput",
		linkables:"ContentReferenceCreateLinkablesEntityRelationInput"
	},
	ContentReferenceCreateBlockEntityRelationInput:{
		connect:"ContentBlockUniqueWhere",
		create:"ContentBlockWithoutReferencesCreateInput"
	},
	ContentBlockWithoutReferencesCreateInput:{
		id:"UUID",
		content:"ContentBlockCreateContentEntityRelationInput"
	},
	ContentReferenceUpdateInput:{
		type:"ContentReferenceType",
		block:"ContentReferenceUpdateBlockEntityRelationInput",
		image:"ContentReferenceUpdateImageEntityRelationInput",
		linkables:"ContentReferenceUpdateLinkablesEntityRelationInput"
	},
	ContentReferenceUpdateBlockEntityRelationInput:{
		create:"ContentBlockWithoutReferencesCreateInput",
		update:"ContentBlockWithoutReferencesUpdateInput",
		upsert:"ContentReferenceUpsertBlockRelationInput",
		connect:"ContentBlockUniqueWhere"
	},
	ContentBlockWithoutReferencesUpdateInput:{
		content:"ContentBlockUpdateContentEntityRelationInput"
	},
	ContentReferenceUpsertBlockRelationInput:{
		update:"ContentBlockWithoutReferencesUpdateInput",
		create:"ContentBlockWithoutReferencesCreateInput"
	},
	RedirectCreateInput:{
		id:"UUID",
		link:"RedirectCreateLinkEntityRelationInput",
		target:"RedirectCreateTargetEntityRelationInput"
	},
	RedirectCreateLinkEntityRelationInput:{
		connect:"LinkableUniqueWhere",
		create:"LinkableWithoutRedirectCreateInput"
	},
	LinkableWithoutRedirectCreateInput:{
		id:"UUID",
		genericPage:"LinkableCreateGenericPageEntityRelationInput"
	},
	RedirectUpdateInput:{
		link:"RedirectUpdateLinkEntityRelationInput",
		target:"RedirectUpdateTargetEntityRelationInput"
	},
	RedirectUpdateLinkEntityRelationInput:{
		create:"LinkableWithoutRedirectCreateInput",
		update:"LinkableWithoutRedirectUpdateInput",
		upsert:"RedirectUpsertLinkRelationInput",
		connect:"LinkableUniqueWhere"
	},
	LinkableWithoutRedirectUpdateInput:{
		genericPage:"LinkableUpdateGenericPageEntityRelationInput"
	},
	RedirectUpsertLinkRelationInput:{
		update:"LinkableWithoutRedirectUpdateInput",
		create:"LinkableWithoutRedirectCreateInput"
	},
	QueryTransaction:{
		getGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere"
		},
		listGeneral:{
			filter:"GeneralWhere",
			orderBy:"GeneralOrderBy"
		},
		paginateGeneral:{
			filter:"GeneralWhere",
			orderBy:"GeneralOrderBy"
		},
		validateCreateGeneral:{
			data:"GeneralCreateInput"
		},
		validateUpdateGeneral:{
			by:"GeneralUniqueWhere",
			data:"GeneralUpdateInput"
		},
		getImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere"
		},
		listImage:{
			filter:"ImageWhere",
			orderBy:"ImageOrderBy"
		},
		paginateImage:{
			filter:"ImageWhere",
			orderBy:"ImageOrderBy"
		},
		validateCreateImage:{
			data:"ImageCreateInput"
		},
		validateUpdateImage:{
			by:"ImageUniqueWhere",
			data:"ImageUpdateInput"
		},
		getGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere"
		},
		listGenericPage:{
			filter:"GenericPageWhere",
			orderBy:"GenericPageOrderBy"
		},
		paginateGenericPage:{
			filter:"GenericPageWhere",
			orderBy:"GenericPageOrderBy"
		},
		validateCreateGenericPage:{
			data:"GenericPageCreateInput"
		},
		validateUpdateGenericPage:{
			by:"GenericPageUniqueWhere",
			data:"GenericPageUpdateInput"
		},
		getLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere"
		},
		listLinkable:{
			filter:"LinkableWhere",
			orderBy:"LinkableOrderBy"
		},
		paginateLinkable:{
			filter:"LinkableWhere",
			orderBy:"LinkableOrderBy"
		},
		validateCreateLinkable:{
			data:"LinkableCreateInput"
		},
		validateUpdateLinkable:{
			by:"LinkableUniqueWhere",
			data:"LinkableUpdateInput"
		},
		getSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere"
		},
		listSeo:{
			filter:"SeoWhere",
			orderBy:"SeoOrderBy"
		},
		paginateSeo:{
			filter:"SeoWhere",
			orderBy:"SeoOrderBy"
		},
		validateCreateSeo:{
			data:"SeoCreateInput"
		},
		validateUpdateSeo:{
			by:"SeoUniqueWhere",
			data:"SeoUpdateInput"
		},
		getContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere"
		},
		listContent:{
			filter:"ContentWhere",
			orderBy:"ContentOrderBy"
		},
		paginateContent:{
			filter:"ContentWhere",
			orderBy:"ContentOrderBy"
		},
		validateCreateContent:{
			data:"ContentCreateInput"
		},
		validateUpdateContent:{
			by:"ContentUniqueWhere",
			data:"ContentUpdateInput"
		},
		getContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere"
		},
		listContentBlock:{
			filter:"ContentBlockWhere",
			orderBy:"ContentBlockOrderBy"
		},
		paginateContentBlock:{
			filter:"ContentBlockWhere",
			orderBy:"ContentBlockOrderBy"
		},
		validateCreateContentBlock:{
			data:"ContentBlockCreateInput"
		},
		validateUpdateContentBlock:{
			by:"ContentBlockUniqueWhere",
			data:"ContentBlockUpdateInput"
		},
		getContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere"
		},
		listContentReference:{
			filter:"ContentReferenceWhere",
			orderBy:"ContentReferenceOrderBy"
		},
		paginateContentReference:{
			filter:"ContentReferenceWhere",
			orderBy:"ContentReferenceOrderBy"
		},
		validateCreateContentReference:{
			data:"ContentReferenceCreateInput"
		},
		validateUpdateContentReference:{
			by:"ContentReferenceUniqueWhere",
			data:"ContentReferenceUpdateInput"
		},
		getContentReferenceLinkableItem:{
			by:"ContentReferenceLinkableItemUniqueWhere",
			filter:"ContentReferenceLinkableItemWhere"
		},
		listContentReferenceLinkableItem:{
			filter:"ContentReferenceLinkableItemWhere",
			orderBy:"ContentReferenceLinkableItemOrderBy"
		},
		paginateContentReferenceLinkableItem:{
			filter:"ContentReferenceLinkableItemWhere",
			orderBy:"ContentReferenceLinkableItemOrderBy"
		},
		getRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere"
		},
		listRedirect:{
			filter:"RedirectWhere",
			orderBy:"RedirectOrderBy"
		},
		paginateRedirect:{
			filter:"RedirectWhere",
			orderBy:"RedirectOrderBy"
		},
		validateCreateRedirect:{
			data:"RedirectCreateInput"
		},
		validateUpdateRedirect:{
			by:"RedirectUniqueWhere",
			data:"RedirectUpdateInput"
		},
		getLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere"
		},
		listLink:{
			filter:"LinkWhere",
			orderBy:"LinkOrderBy"
		},
		paginateLink:{
			filter:"LinkWhere",
			orderBy:"LinkOrderBy"
		},
		validateCreateLink:{
			data:"LinkCreateInput"
		},
		validateUpdateLink:{
			by:"LinkUniqueWhere",
			data:"LinkUpdateInput"
		}
	},
	Mutation:{
		createGeneral:{
			data:"GeneralCreateInput"
		},
		deleteGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere"
		},
		updateGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere",
			data:"GeneralUpdateInput"
		},
		upsertGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere",
			update:"GeneralUpdateInput",
			create:"GeneralCreateInput"
		},
		createImage:{
			data:"ImageCreateInput"
		},
		deleteImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere"
		},
		updateImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere",
			data:"ImageUpdateInput"
		},
		upsertImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere",
			update:"ImageUpdateInput",
			create:"ImageCreateInput"
		},
		createGenericPage:{
			data:"GenericPageCreateInput"
		},
		deleteGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere"
		},
		updateGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere",
			data:"GenericPageUpdateInput"
		},
		upsertGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere",
			update:"GenericPageUpdateInput",
			create:"GenericPageCreateInput"
		},
		createLinkable:{
			data:"LinkableCreateInput"
		},
		deleteLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere"
		},
		updateLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere",
			data:"LinkableUpdateInput"
		},
		upsertLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere",
			update:"LinkableUpdateInput",
			create:"LinkableCreateInput"
		},
		createSeo:{
			data:"SeoCreateInput"
		},
		deleteSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere"
		},
		updateSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere",
			data:"SeoUpdateInput"
		},
		upsertSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere",
			update:"SeoUpdateInput",
			create:"SeoCreateInput"
		},
		createContent:{
			data:"ContentCreateInput"
		},
		deleteContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere"
		},
		updateContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere",
			data:"ContentUpdateInput"
		},
		upsertContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere",
			update:"ContentUpdateInput",
			create:"ContentCreateInput"
		},
		createContentBlock:{
			data:"ContentBlockCreateInput"
		},
		deleteContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere"
		},
		updateContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere",
			data:"ContentBlockUpdateInput"
		},
		upsertContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere",
			update:"ContentBlockUpdateInput",
			create:"ContentBlockCreateInput"
		},
		createContentReference:{
			data:"ContentReferenceCreateInput"
		},
		deleteContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere"
		},
		updateContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere",
			data:"ContentReferenceUpdateInput"
		},
		upsertContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere",
			update:"ContentReferenceUpdateInput",
			create:"ContentReferenceCreateInput"
		},
		createRedirect:{
			data:"RedirectCreateInput"
		},
		deleteRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere"
		},
		updateRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere",
			data:"RedirectUpdateInput"
		},
		upsertRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere",
			update:"RedirectUpdateInput",
			create:"RedirectCreateInput"
		},
		createLink:{
			data:"LinkCreateInput"
		},
		deleteLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere"
		},
		updateLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere",
			data:"LinkUpdateInput"
		},
		upsertLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere",
			update:"LinkUpdateInput",
			create:"LinkCreateInput"
		},
		transaction:{
			options:"MutationTransactionOptions"
		},
		generateUploadUrl:{

		},
		generateReadUrl:{

		}
	},
	_MutationErrorType: "enum" as const,
	MutationTransaction:{
		createGeneral:{
			data:"GeneralCreateInput"
		},
		deleteGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere"
		},
		updateGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere",
			data:"GeneralUpdateInput"
		},
		upsertGeneral:{
			by:"GeneralUniqueWhere",
			filter:"GeneralWhere",
			update:"GeneralUpdateInput",
			create:"GeneralCreateInput"
		},
		createImage:{
			data:"ImageCreateInput"
		},
		deleteImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere"
		},
		updateImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere",
			data:"ImageUpdateInput"
		},
		upsertImage:{
			by:"ImageUniqueWhere",
			filter:"ImageWhere",
			update:"ImageUpdateInput",
			create:"ImageCreateInput"
		},
		createGenericPage:{
			data:"GenericPageCreateInput"
		},
		deleteGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere"
		},
		updateGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere",
			data:"GenericPageUpdateInput"
		},
		upsertGenericPage:{
			by:"GenericPageUniqueWhere",
			filter:"GenericPageWhere",
			update:"GenericPageUpdateInput",
			create:"GenericPageCreateInput"
		},
		createLinkable:{
			data:"LinkableCreateInput"
		},
		deleteLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere"
		},
		updateLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere",
			data:"LinkableUpdateInput"
		},
		upsertLinkable:{
			by:"LinkableUniqueWhere",
			filter:"LinkableWhere",
			update:"LinkableUpdateInput",
			create:"LinkableCreateInput"
		},
		createSeo:{
			data:"SeoCreateInput"
		},
		deleteSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere"
		},
		updateSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere",
			data:"SeoUpdateInput"
		},
		upsertSeo:{
			by:"SeoUniqueWhere",
			filter:"SeoWhere",
			update:"SeoUpdateInput",
			create:"SeoCreateInput"
		},
		createContent:{
			data:"ContentCreateInput"
		},
		deleteContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere"
		},
		updateContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere",
			data:"ContentUpdateInput"
		},
		upsertContent:{
			by:"ContentUniqueWhere",
			filter:"ContentWhere",
			update:"ContentUpdateInput",
			create:"ContentCreateInput"
		},
		createContentBlock:{
			data:"ContentBlockCreateInput"
		},
		deleteContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere"
		},
		updateContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere",
			data:"ContentBlockUpdateInput"
		},
		upsertContentBlock:{
			by:"ContentBlockUniqueWhere",
			filter:"ContentBlockWhere",
			update:"ContentBlockUpdateInput",
			create:"ContentBlockCreateInput"
		},
		createContentReference:{
			data:"ContentReferenceCreateInput"
		},
		deleteContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere"
		},
		updateContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere",
			data:"ContentReferenceUpdateInput"
		},
		upsertContentReference:{
			by:"ContentReferenceUniqueWhere",
			filter:"ContentReferenceWhere",
			update:"ContentReferenceUpdateInput",
			create:"ContentReferenceCreateInput"
		},
		createRedirect:{
			data:"RedirectCreateInput"
		},
		deleteRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere"
		},
		updateRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere",
			data:"RedirectUpdateInput"
		},
		upsertRedirect:{
			by:"RedirectUniqueWhere",
			filter:"RedirectWhere",
			update:"RedirectUpdateInput",
			create:"RedirectCreateInput"
		},
		createLink:{
			data:"LinkCreateInput"
		},
		deleteLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere"
		},
		updateLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere",
			data:"LinkUpdateInput"
		},
		upsertLink:{
			by:"LinkUniqueWhere",
			filter:"LinkWhere",
			update:"LinkUpdateInput",
			create:"LinkCreateInput"
		}
	},
	MutationTransactionOptions:{

	},
	Json: `scalar.Json` as const,
	_OnDeleteBehaviour: "enum" as const,
	_RelationSide: "enum" as const,
	_OrderByDirection: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		getGeneral:"General",
		listGeneral:"General",
		paginateGeneral:"GeneralConnection",
		validateCreateGeneral:"_ValidationResult",
		validateUpdateGeneral:"_ValidationResult",
		getImage:"Image",
		listImage:"Image",
		paginateImage:"ImageConnection",
		validateCreateImage:"_ValidationResult",
		validateUpdateImage:"_ValidationResult",
		getGenericPage:"GenericPage",
		listGenericPage:"GenericPage",
		paginateGenericPage:"GenericPageConnection",
		validateCreateGenericPage:"_ValidationResult",
		validateUpdateGenericPage:"_ValidationResult",
		getLinkable:"Linkable",
		listLinkable:"Linkable",
		paginateLinkable:"LinkableConnection",
		validateCreateLinkable:"_ValidationResult",
		validateUpdateLinkable:"_ValidationResult",
		getSeo:"Seo",
		listSeo:"Seo",
		paginateSeo:"SeoConnection",
		validateCreateSeo:"_ValidationResult",
		validateUpdateSeo:"_ValidationResult",
		getContent:"Content",
		listContent:"Content",
		paginateContent:"ContentConnection",
		validateCreateContent:"_ValidationResult",
		validateUpdateContent:"_ValidationResult",
		getContentBlock:"ContentBlock",
		listContentBlock:"ContentBlock",
		paginateContentBlock:"ContentBlockConnection",
		validateCreateContentBlock:"_ValidationResult",
		validateUpdateContentBlock:"_ValidationResult",
		getContentReference:"ContentReference",
		listContentReference:"ContentReference",
		paginateContentReference:"ContentReferenceConnection",
		validateCreateContentReference:"_ValidationResult",
		validateUpdateContentReference:"_ValidationResult",
		getContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		listContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		paginateContentReferenceLinkableItem:"ContentReferenceLinkableItemConnection",
		getRedirect:"Redirect",
		listRedirect:"Redirect",
		paginateRedirect:"RedirectConnection",
		validateCreateRedirect:"_ValidationResult",
		validateUpdateRedirect:"_ValidationResult",
		getLink:"Link",
		listLink:"Link",
		paginateLink:"LinkConnection",
		validateCreateLink:"_ValidationResult",
		validateUpdateLink:"_ValidationResult",
		transaction:"QueryTransaction",
		_info:"Info",
		schema:"_Schema",
		s3DummyQuery:"String"
	},
	General:{
		_meta:"GeneralMeta",
		id:"UUID",
		unique:"One",
		dummy:"String",
		image:"Image",
		seo:"Seo"
	},
	GeneralMeta:{
		id:"FieldMeta",
		unique:"FieldMeta",
		dummy:"FieldMeta",
		image:"FieldMeta",
		seo:"FieldMeta"
	},
	FieldMeta:{
		readable:"Boolean",
		updatable:"Boolean"
	},
	UUID: `scalar.UUID` as const,
	Image:{
		_meta:"ImageMeta",
		id:"UUID",
		url:"String",
		width:"Int",
		height:"Int",
		size:"Int",
		type:"String",
		alt:"String"
	},
	ImageMeta:{
		id:"FieldMeta",
		url:"FieldMeta",
		width:"FieldMeta",
		height:"FieldMeta",
		size:"FieldMeta",
		type:"FieldMeta",
		alt:"FieldMeta"
	},
	Seo:{
		_meta:"SeoMeta",
		id:"UUID",
		title:"String",
		description:"String",
		ogTitle:"String",
		ogDescription:"String",
		noIndex:"Boolean",
		noFollow:"Boolean",
		ogImage:"Image"
	},
	SeoMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		description:"FieldMeta",
		ogTitle:"FieldMeta",
		ogDescription:"FieldMeta",
		noIndex:"FieldMeta",
		noFollow:"FieldMeta",
		ogImage:"FieldMeta"
	},
	GeneralConnection:{
		pageInfo:"PageInfo",
		edges:"GeneralEdge"
	},
	PageInfo:{
		totalCount:"Int"
	},
	GeneralEdge:{
		node:"General"
	},
	_ValidationResult:{
		valid:"Boolean",
		errors:"_ValidationError"
	},
	_ValidationError:{
		path:"_PathFragment",
		message:"_ValidationMessage"
	},
	_PathFragment:{
		"...on _FieldPathFragment":"_FieldPathFragment",
		"...on _IndexPathFragment":"_IndexPathFragment"
	},
	_FieldPathFragment:{
		field:"String"
	},
	_IndexPathFragment:{
		index:"Int",
		alias:"String"
	},
	_ValidationMessage:{
		text:"String"
	},
	ImageConnection:{
		pageInfo:"PageInfo",
		edges:"ImageEdge"
	},
	ImageEdge:{
		node:"Image"
	},
	GenericPage:{
		_meta:"GenericPageMeta",
		id:"UUID",
		seo:"Seo",
		link:"Linkable",
		title:"String",
		content:"Content"
	},
	GenericPageMeta:{
		id:"FieldMeta",
		seo:"FieldMeta",
		link:"FieldMeta",
		title:"FieldMeta",
		content:"FieldMeta"
	},
	Linkable:{
		_meta:"LinkableMeta",
		id:"UUID",
		url:"String",
		genericPage:"GenericPage",
		redirect:"Redirect"
	},
	LinkableMeta:{
		id:"FieldMeta",
		url:"FieldMeta",
		genericPage:"FieldMeta",
		redirect:"FieldMeta"
	},
	Redirect:{
		_meta:"RedirectMeta",
		id:"UUID",
		link:"Linkable",
		target:"Link"
	},
	RedirectMeta:{
		id:"FieldMeta",
		link:"FieldMeta",
		target:"FieldMeta"
	},
	Link:{
		_meta:"LinkMeta",
		id:"UUID",
		type:"LinkType",
		title:"String",
		externalLink:"String",
		internalLink:"Linkable"
	},
	LinkMeta:{
		id:"FieldMeta",
		type:"FieldMeta",
		title:"FieldMeta",
		externalLink:"FieldMeta",
		internalLink:"FieldMeta"
	},
	Content:{
		_meta:"ContentMeta",
		id:"UUID",
		blocks:"ContentBlock",
		blocksByReferences:"ContentBlock",
		paginateBlocks:"ContentBlockConnection"
	},
	ContentMeta:{
		id:"FieldMeta",
		blocks:"FieldMeta"
	},
	ContentBlock:{
		_meta:"ContentBlockMeta",
		id:"UUID",
		order:"Int",
		json:"String",
		content:"Content",
		references:"ContentReference",
		referencesByLinkables:"ContentReference",
		paginateReferences:"ContentReferenceConnection"
	},
	ContentBlockMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		json:"FieldMeta",
		content:"FieldMeta",
		references:"FieldMeta"
	},
	ContentReference:{
		_meta:"ContentReferenceMeta",
		id:"UUID",
		type:"ContentReferenceType",
		primaryText:"String",
		block:"ContentBlock",
		image:"Image",
		linkables:"ContentReferenceLinkableItem",
		linkablesByItem:"ContentReferenceLinkableItem",
		paginateLinkables:"ContentReferenceLinkableItemConnection"
	},
	ContentReferenceMeta:{
		id:"FieldMeta",
		type:"FieldMeta",
		primaryText:"FieldMeta",
		block:"FieldMeta",
		image:"FieldMeta",
		linkables:"FieldMeta"
	},
	ContentReferenceLinkableItem:{
		_meta:"ContentReferenceLinkableItemMeta",
		id:"UUID",
		item:"Linkable",
		reference:"ContentReference"
	},
	ContentReferenceLinkableItemMeta:{
		id:"FieldMeta",
		item:"FieldMeta",
		reference:"FieldMeta"
	},
	ContentReferenceLinkableItemConnection:{
		pageInfo:"PageInfo",
		edges:"ContentReferenceLinkableItemEdge"
	},
	ContentReferenceLinkableItemEdge:{
		node:"ContentReferenceLinkableItem"
	},
	ContentReferenceConnection:{
		pageInfo:"PageInfo",
		edges:"ContentReferenceEdge"
	},
	ContentReferenceEdge:{
		node:"ContentReference"
	},
	ContentBlockConnection:{
		pageInfo:"PageInfo",
		edges:"ContentBlockEdge"
	},
	ContentBlockEdge:{
		node:"ContentBlock"
	},
	GenericPageConnection:{
		pageInfo:"PageInfo",
		edges:"GenericPageEdge"
	},
	GenericPageEdge:{
		node:"GenericPage"
	},
	LinkableConnection:{
		pageInfo:"PageInfo",
		edges:"LinkableEdge"
	},
	LinkableEdge:{
		node:"Linkable"
	},
	SeoConnection:{
		pageInfo:"PageInfo",
		edges:"SeoEdge"
	},
	SeoEdge:{
		node:"Seo"
	},
	ContentConnection:{
		pageInfo:"PageInfo",
		edges:"ContentEdge"
	},
	ContentEdge:{
		node:"Content"
	},
	RedirectConnection:{
		pageInfo:"PageInfo",
		edges:"RedirectEdge"
	},
	RedirectEdge:{
		node:"Redirect"
	},
	LinkConnection:{
		pageInfo:"PageInfo",
		edges:"LinkEdge"
	},
	LinkEdge:{
		node:"Link"
	},
	QueryTransaction:{
		getGeneral:"General",
		listGeneral:"General",
		paginateGeneral:"GeneralConnection",
		validateCreateGeneral:"_ValidationResult",
		validateUpdateGeneral:"_ValidationResult",
		getImage:"Image",
		listImage:"Image",
		paginateImage:"ImageConnection",
		validateCreateImage:"_ValidationResult",
		validateUpdateImage:"_ValidationResult",
		getGenericPage:"GenericPage",
		listGenericPage:"GenericPage",
		paginateGenericPage:"GenericPageConnection",
		validateCreateGenericPage:"_ValidationResult",
		validateUpdateGenericPage:"_ValidationResult",
		getLinkable:"Linkable",
		listLinkable:"Linkable",
		paginateLinkable:"LinkableConnection",
		validateCreateLinkable:"_ValidationResult",
		validateUpdateLinkable:"_ValidationResult",
		getSeo:"Seo",
		listSeo:"Seo",
		paginateSeo:"SeoConnection",
		validateCreateSeo:"_ValidationResult",
		validateUpdateSeo:"_ValidationResult",
		getContent:"Content",
		listContent:"Content",
		paginateContent:"ContentConnection",
		validateCreateContent:"_ValidationResult",
		validateUpdateContent:"_ValidationResult",
		getContentBlock:"ContentBlock",
		listContentBlock:"ContentBlock",
		paginateContentBlock:"ContentBlockConnection",
		validateCreateContentBlock:"_ValidationResult",
		validateUpdateContentBlock:"_ValidationResult",
		getContentReference:"ContentReference",
		listContentReference:"ContentReference",
		paginateContentReference:"ContentReferenceConnection",
		validateCreateContentReference:"_ValidationResult",
		validateUpdateContentReference:"_ValidationResult",
		getContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		listContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		paginateContentReferenceLinkableItem:"ContentReferenceLinkableItemConnection",
		getRedirect:"Redirect",
		listRedirect:"Redirect",
		paginateRedirect:"RedirectConnection",
		validateCreateRedirect:"_ValidationResult",
		validateUpdateRedirect:"_ValidationResult",
		getLink:"Link",
		listLink:"Link",
		paginateLink:"LinkConnection",
		validateCreateLink:"_ValidationResult",
		validateUpdateLink:"_ValidationResult"
	},
	Info:{
		description:"String"
	},
	Mutation:{
		createGeneral:"GeneralCreateResult",
		deleteGeneral:"GeneralDeleteResult",
		updateGeneral:"GeneralUpdateResult",
		upsertGeneral:"GeneralUpsertResult",
		createImage:"ImageCreateResult",
		deleteImage:"ImageDeleteResult",
		updateImage:"ImageUpdateResult",
		upsertImage:"ImageUpsertResult",
		createGenericPage:"GenericPageCreateResult",
		deleteGenericPage:"GenericPageDeleteResult",
		updateGenericPage:"GenericPageUpdateResult",
		upsertGenericPage:"GenericPageUpsertResult",
		createLinkable:"LinkableCreateResult",
		deleteLinkable:"LinkableDeleteResult",
		updateLinkable:"LinkableUpdateResult",
		upsertLinkable:"LinkableUpsertResult",
		createSeo:"SeoCreateResult",
		deleteSeo:"SeoDeleteResult",
		updateSeo:"SeoUpdateResult",
		upsertSeo:"SeoUpsertResult",
		createContent:"ContentCreateResult",
		deleteContent:"ContentDeleteResult",
		updateContent:"ContentUpdateResult",
		upsertContent:"ContentUpsertResult",
		createContentBlock:"ContentBlockCreateResult",
		deleteContentBlock:"ContentBlockDeleteResult",
		updateContentBlock:"ContentBlockUpdateResult",
		upsertContentBlock:"ContentBlockUpsertResult",
		createContentReference:"ContentReferenceCreateResult",
		deleteContentReference:"ContentReferenceDeleteResult",
		updateContentReference:"ContentReferenceUpdateResult",
		upsertContentReference:"ContentReferenceUpsertResult",
		createRedirect:"RedirectCreateResult",
		deleteRedirect:"RedirectDeleteResult",
		updateRedirect:"RedirectUpdateResult",
		upsertRedirect:"RedirectUpsertResult",
		createLink:"LinkCreateResult",
		deleteLink:"LinkDeleteResult",
		updateLink:"LinkUpdateResult",
		upsertLink:"LinkUpsertResult",
		transaction:"MutationTransaction",
		query:"Query",
		generateUploadUrl:"S3SignedUpload",
		generateReadUrl:"S3SignedRead"
	},
	GeneralCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"General",
		validation:"_ValidationResult"
	},
	MutationResult:{
		"...on GeneralCreateResult": "GeneralCreateResult",
		"...on GeneralDeleteResult": "GeneralDeleteResult",
		"...on GeneralUpdateResult": "GeneralUpdateResult",
		"...on GeneralUpsertResult": "GeneralUpsertResult",
		"...on ImageCreateResult": "ImageCreateResult",
		"...on ImageDeleteResult": "ImageDeleteResult",
		"...on ImageUpdateResult": "ImageUpdateResult",
		"...on ImageUpsertResult": "ImageUpsertResult",
		"...on GenericPageCreateResult": "GenericPageCreateResult",
		"...on GenericPageDeleteResult": "GenericPageDeleteResult",
		"...on GenericPageUpdateResult": "GenericPageUpdateResult",
		"...on GenericPageUpsertResult": "GenericPageUpsertResult",
		"...on LinkableCreateResult": "LinkableCreateResult",
		"...on LinkableDeleteResult": "LinkableDeleteResult",
		"...on LinkableUpdateResult": "LinkableUpdateResult",
		"...on LinkableUpsertResult": "LinkableUpsertResult",
		"...on SeoCreateResult": "SeoCreateResult",
		"...on SeoDeleteResult": "SeoDeleteResult",
		"...on SeoUpdateResult": "SeoUpdateResult",
		"...on SeoUpsertResult": "SeoUpsertResult",
		"...on ContentCreateResult": "ContentCreateResult",
		"...on ContentDeleteResult": "ContentDeleteResult",
		"...on ContentUpdateResult": "ContentUpdateResult",
		"...on ContentUpsertResult": "ContentUpsertResult",
		"...on ContentBlockCreateResult": "ContentBlockCreateResult",
		"...on ContentBlockDeleteResult": "ContentBlockDeleteResult",
		"...on ContentBlockUpdateResult": "ContentBlockUpdateResult",
		"...on ContentBlockUpsertResult": "ContentBlockUpsertResult",
		"...on ContentReferenceCreateResult": "ContentReferenceCreateResult",
		"...on ContentReferenceDeleteResult": "ContentReferenceDeleteResult",
		"...on ContentReferenceUpdateResult": "ContentReferenceUpdateResult",
		"...on ContentReferenceUpsertResult": "ContentReferenceUpsertResult",
		"...on RedirectCreateResult": "RedirectCreateResult",
		"...on RedirectDeleteResult": "RedirectDeleteResult",
		"...on RedirectUpdateResult": "RedirectUpdateResult",
		"...on RedirectUpsertResult": "RedirectUpsertResult",
		"...on LinkCreateResult": "LinkCreateResult",
		"...on LinkDeleteResult": "LinkDeleteResult",
		"...on LinkUpdateResult": "LinkUpdateResult",
		"...on LinkUpsertResult": "LinkUpsertResult",
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError"
	},
	_MutationError:{
		path:"_PathFragment",
		paths:"_PathFragment",
		type:"_MutationErrorType",
		message:"String"
	},
	GeneralDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"General"
	},
	GeneralUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"General",
		validation:"_ValidationResult"
	},
	GeneralUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"General",
		validation:"_ValidationResult"
	},
	ImageCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Image",
		validation:"_ValidationResult"
	},
	ImageDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Image"
	},
	ImageUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Image",
		validation:"_ValidationResult"
	},
	ImageUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Image",
		validation:"_ValidationResult"
	},
	GenericPageCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"GenericPage",
		validation:"_ValidationResult"
	},
	GenericPageDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"GenericPage"
	},
	GenericPageUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"GenericPage",
		validation:"_ValidationResult"
	},
	GenericPageUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"GenericPage",
		validation:"_ValidationResult"
	},
	LinkableCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Linkable",
		validation:"_ValidationResult"
	},
	LinkableDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Linkable"
	},
	LinkableUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Linkable",
		validation:"_ValidationResult"
	},
	LinkableUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Linkable",
		validation:"_ValidationResult"
	},
	SeoCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Seo",
		validation:"_ValidationResult"
	},
	SeoDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Seo"
	},
	SeoUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Seo",
		validation:"_ValidationResult"
	},
	SeoUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Seo",
		validation:"_ValidationResult"
	},
	ContentCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Content",
		validation:"_ValidationResult"
	},
	ContentDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Content"
	},
	ContentUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Content",
		validation:"_ValidationResult"
	},
	ContentUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Content",
		validation:"_ValidationResult"
	},
	ContentBlockCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentBlock",
		validation:"_ValidationResult"
	},
	ContentBlockDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentBlock"
	},
	ContentBlockUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentBlock",
		validation:"_ValidationResult"
	},
	ContentBlockUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentBlock",
		validation:"_ValidationResult"
	},
	ContentReferenceCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentReference",
		validation:"_ValidationResult"
	},
	ContentReferenceDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentReference"
	},
	ContentReferenceUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentReference",
		validation:"_ValidationResult"
	},
	ContentReferenceUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ContentReference",
		validation:"_ValidationResult"
	},
	RedirectCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Redirect",
		validation:"_ValidationResult"
	},
	RedirectDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Redirect"
	},
	RedirectUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Redirect",
		validation:"_ValidationResult"
	},
	RedirectUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Redirect",
		validation:"_ValidationResult"
	},
	LinkCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Link",
		validation:"_ValidationResult"
	},
	LinkDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Link"
	},
	LinkUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Link",
		validation:"_ValidationResult"
	},
	LinkUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Link",
		validation:"_ValidationResult"
	},
	MutationTransaction:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		validation:"_ValidationResult",
		createGeneral:"GeneralCreateResult",
		deleteGeneral:"GeneralDeleteResult",
		updateGeneral:"GeneralUpdateResult",
		upsertGeneral:"GeneralUpsertResult",
		createImage:"ImageCreateResult",
		deleteImage:"ImageDeleteResult",
		updateImage:"ImageUpdateResult",
		upsertImage:"ImageUpsertResult",
		createGenericPage:"GenericPageCreateResult",
		deleteGenericPage:"GenericPageDeleteResult",
		updateGenericPage:"GenericPageUpdateResult",
		upsertGenericPage:"GenericPageUpsertResult",
		createLinkable:"LinkableCreateResult",
		deleteLinkable:"LinkableDeleteResult",
		updateLinkable:"LinkableUpdateResult",
		upsertLinkable:"LinkableUpsertResult",
		createSeo:"SeoCreateResult",
		deleteSeo:"SeoDeleteResult",
		updateSeo:"SeoUpdateResult",
		upsertSeo:"SeoUpsertResult",
		createContent:"ContentCreateResult",
		deleteContent:"ContentDeleteResult",
		updateContent:"ContentUpdateResult",
		upsertContent:"ContentUpsertResult",
		createContentBlock:"ContentBlockCreateResult",
		deleteContentBlock:"ContentBlockDeleteResult",
		updateContentBlock:"ContentBlockUpdateResult",
		upsertContentBlock:"ContentBlockUpsertResult",
		createContentReference:"ContentReferenceCreateResult",
		deleteContentReference:"ContentReferenceDeleteResult",
		updateContentReference:"ContentReferenceUpdateResult",
		upsertContentReference:"ContentReferenceUpsertResult",
		createRedirect:"RedirectCreateResult",
		deleteRedirect:"RedirectDeleteResult",
		updateRedirect:"RedirectUpdateResult",
		upsertRedirect:"RedirectUpsertResult",
		createLink:"LinkCreateResult",
		deleteLink:"LinkDeleteResult",
		updateLink:"LinkUpdateResult",
		upsertLink:"LinkUpsertResult",
		query:"Query"
	},
	Json: `scalar.Json` as const,
	_Schema:{
		enums:"_Enum",
		entities:"_Entity"
	},
	_Entity:{
		name:"String",
		customPrimaryAllowed:"Boolean",
		fields:"_Field",
		unique:"_UniqueConstraint"
	},
	_UniqueConstraint:{
		fields:"String"
	},
	_Field:{
		"...on _Column": "_Column",
		"...on _Relation": "_Relation",
		name:"String",
		type:"String",
		nullable:"Boolean",
		rules:"_Rule",
		validators:"_Validator"
	},
	_Column:{
		name:"String",
		type:"String",
		enumName:"String",
		defaultValue:"Json",
		nullable:"Boolean",
		rules:"_Rule",
		validators:"_Validator"
	},
	_OrderBy:{
		path:"String",
		direction:"_OrderByDirection"
	},
	_Relation:{
		name:"String",
		type:"String",
		side:"_RelationSide",
		targetEntity:"String",
		ownedBy:"String",
		inversedBy:"String",
		nullable:"Boolean",
		onDelete:"_OnDeleteBehaviour",
		orphanRemoval:"Boolean",
		orderBy:"_OrderBy",
		rules:"_Rule",
		validators:"_Validator"
	},
	_Rule:{
		message:"_RuleMessage",
		validator:"Int"
	},
	_Validator:{
		operation:"String",
		arguments:"_Argument"
	},
	_Argument:{
		"...on _ValidatorArgument":"_ValidatorArgument",
		"...on _PathArgument":"_PathArgument",
		"...on _LiteralArgument":"_LiteralArgument"
	},
	_ValidatorArgument:{
		validator:"Int"
	},
	_PathArgument:{
		path:"String"
	},
	_LiteralArgument:{
		value:"Json"
	},
	_RuleMessage:{
		text:"String"
	},
	_Enum:{
		name:"String",
		values:"String"
	},
	S3SignedUpload:{
		url:"String",
		headers:"S3Header",
		method:"String",
		objectKey:"String",
		bucket:"String",
		publicUrl:"String"
	},
	S3Header:{
		key:"String",
		value:"String"
	},
	S3SignedRead:{
		url:"String",
		headers:"S3Header",
		method:"String",
		objectKey:"String",
		bucket:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}


export const HOST="Specify host"


export const HEADERS = {}
export const apiSubscription = (options: chainOptions) => (query: string) => {
  try {
    const queryString = options[0] + '?query=' + encodeURIComponent(query);
    const wsString = queryString.replace('http', 'ws');
    const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
    const webSocketOptions = options[1]?.websocket || [host];
    const ws = new WebSocket(...webSocketOptions);
    return {
      ws,
      on: (e: (args: any) => void) => {
        ws.onmessage = (event: any) => {
          if (event.data) {
            const parsed = JSON.parse(event.data);
            const data = parsed.data;
            return e(data);
          }
        };
      },
      off: (e: (args: any) => void) => {
        ws.onclose = e;
      },
      error: (e: (args: any) => void) => {
        ws.onerror = e;
      },
      open: (e: () => void) => {
        ws.onopen = e;
      },
    };
  } catch {
    throw new Error('No websockets implemented');
  }
};
const handleFetchResponse = (response: Response): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

export const apiFetch =
  (options: fetchOptions) =>
  (query: string, variables: Record<string, unknown> = {}) => {
    const fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      return fetch(`${options[0]}?query=${encodeURIComponent(query)}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetch(`${options[0]}`, {
      body: JSON.stringify({ query, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...fetchOptions,
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };

export const InternalsBuildQuery = ({
  ops,
  props,
  returns,
  options,
  scalars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  options?: OperationOptions;
  scalars?: ScalarDefinition;
}) => {
  const ibb = (
    k: string,
    o: InputValueType | VType,
    p = '',
    root = true,
    vars: Array<{ name: string; graphQLType: string }> = [],
  ): string => {
    const keyForPath = purifyGraphQLKey(k);
    const newPath = [p, keyForPath].join(SEPARATOR);
    if (!o) {
      return '';
    }
    if (typeof o === 'boolean' || typeof o === 'number') {
      return k;
    }
    if (typeof o === 'string') {
      return `${k} ${o}`;
    }
    if (Array.isArray(o)) {
      const args = InternalArgsBuilt({
        props,
        returns,
        ops,
        scalars,
        vars,
      })(o[0], newPath);
      return `${ibb(args ? `${k}(${args})` : k, o[1], p, false, vars)}`;
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(`${alias}:${operationName}`, operation, p, false, vars);
        })
        .join('\n');
    }
    const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
    const keyForDirectives = o.__directives ?? '';
    const query = `{${Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false, vars))
      .join('\n')}}`;
    if (!root) {
      return `${k} ${keyForDirectives}${hasOperationName} ${query}`;
    }
    const varsString = vars.map((v) => `${v.name}: ${v.graphQLType}`).join(', ');
    return `${k} ${keyForDirectives}${hasOperationName}${varsString ? `(${varsString})` : ''} ${query}`;
  };
  return ibb;
};

export const Thunder =
  (fn: FetchFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions & { variables?: Record<string, unknown> }) =>
    fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
      }),
      ops?.variables,
    ).then((data) => {
      if (graphqlOptions?.scalars) {
        return decodeScalarsInResponse({
          response: data,
          initialOp: operation,
          initialZeusQuery: o as VType,
          returns: ReturnTypes,
          scalars: graphqlOptions.scalars,
          ops: Ops,
        });
      }
      return data;
    }) as Promise<InputType<GraphQLTypes[R], Z, SCLR>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder =
  (fn: SubscriptionFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions & { variables?: ExtractVariables<Z> }) => {
    const returnedFunction = fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
      }),
    ) as SubscriptionToGraphQL<Z, GraphQLTypes[R], SCLR>;
    if (returnedFunction?.on && graphqlOptions?.scalars) {
      const wrapped = returnedFunction.on;
      returnedFunction.on = (fnToCall: (args: InputType<GraphQLTypes[R], Z, SCLR>) => void) =>
        wrapped((data: InputType<GraphQLTypes[R], Z, SCLR>) => {
          if (graphqlOptions?.scalars) {
            return fnToCall(
              decodeScalarsInResponse({
                response: data,
                initialOp: operation,
                initialZeusQuery: o as VType,
                returns: ReturnTypes,
                scalars: graphqlOptions.scalars,
                ops: Ops,
              }),
            );
          }
          return fnToCall(data);
        });
    }
    return returnedFunction;
  };

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: {
    operationOptions?: OperationOptions;
    scalars?: ScalarDefinition;
  },
) =>
  InternalsBuildQuery({
    props: AllTypesProps,
    returns: ReturnTypes,
    ops: Ops,
    options: ops?.operationOptions,
    scalars: ops?.scalars,
  })(operation, o as VType);

export const ZeusSelect = <T>() => ((t: unknown) => t) as SelectionFunction<T>;

export const Selector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();

export const TypeFromSelector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();
export const Gql = Chain(HOST, {
  headers: {
    'Content-Type': 'application/json',
    ...HEADERS,
  },
});

export const ZeusScalars = ZeusSelect<ScalarCoders>();

export const decodeScalarsInResponse = <O extends Operations>({
  response,
  scalars,
  returns,
  ops,
  initialZeusQuery,
  initialOp,
}: {
  ops: O;
  response: any;
  returns: ReturnTypesType;
  scalars?: Record<string, ScalarResolver | undefined>;
  initialOp: keyof O;
  initialZeusQuery: InputValueType | VType;
}) => {
  if (!scalars) {
    return response;
  }
  const builder = PrepareScalarPaths({
    ops,
    returns,
  });

  const scalarPaths = builder(initialOp as string, ops[initialOp], initialZeusQuery);
  if (scalarPaths) {
    const r = traverseResponse({ scalarPaths, resolvers: scalars })(initialOp as string, response, [ops[initialOp]]);
    return r;
  }
  return response;
};

export const traverseResponse = ({
  resolvers,
  scalarPaths,
}: {
  scalarPaths: { [x: string]: `scalar.${string}` };
  resolvers: {
    [x: string]: ScalarResolver | undefined;
  };
}) => {
  const ibb = (k: string, o: InputValueType | VType, p: string[] = []): unknown => {
    if (Array.isArray(o)) {
      return o.map((eachO) => ibb(k, eachO, p));
    }
    if (o == null) {
      return o;
    }
    const scalarPathString = p.join(SEPARATOR);
    const currentScalarString = scalarPaths[scalarPathString];
    if (currentScalarString) {
      const currentDecoder = resolvers[currentScalarString.split('.')[1]]?.decode;
      if (currentDecoder) {
        return currentDecoder(o);
      }
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string' || !o) {
      return o;
    }
    return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, ibb(k, v, [...p, purifyGraphQLKey(k)])]));
  };
  return ibb;
};

export type AllTypesPropsType = {
  [x: string]:
    | undefined
    | `scalar.${string}`
    | 'enum'
    | {
        [x: string]:
          | undefined
          | string
          | {
              [x: string]: string | undefined;
            };
      };
};

export type ReturnTypesType = {
  [x: string]:
    | {
        [x: string]: string | undefined;
      }
    | `scalar.${string}`
    | undefined;
};
export type InputValueType = {
  [x: string]: undefined | boolean | string | number | [any, undefined | boolean | InputValueType] | InputValueType;
};
export type VType =
  | undefined
  | boolean
  | string
  | number
  | [any, undefined | boolean | InputValueType]
  | InputValueType;

export type PlainType = boolean | number | string | null | undefined;
export type ZeusArgsType =
  | PlainType
  | {
      [x: string]: ZeusArgsType;
    }
  | Array<ZeusArgsType>;

export type Operations = Record<string, string>;

export type VariableDefinition = {
  [x: string]: unknown;
};

export const SEPARATOR = '|';

export type fetchOptions = Parameters<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export type chainOptions = [fetchOptions[0], fetchOptions[1] & { websocket?: websocketOptions }] | [fetchOptions[0]];
export type FetchFunction = (query: string, variables?: Record<string, unknown>) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type OperationOptions = {
  operationName?: string;
};

export type ScalarCoder = Record<string, (s: unknown) => string>;

export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}
export type GenericOperation<O> = O extends keyof typeof Ops ? typeof Ops[O] : never;
export type ThunderGraphQLOptions<SCLR extends ScalarDefinition> = {
  scalars?: SCLR | ScalarCoders;
};

const ExtractScalar = (mappedParts: string[], returns: ReturnTypesType): `scalar.${string}` | undefined => {
  if (mappedParts.length === 0) {
    return;
  }
  const oKey = mappedParts[0];
  const returnP1 = returns[oKey];
  if (typeof returnP1 === 'object') {
    const returnP2 = returnP1[mappedParts[1]];
    if (returnP2) {
      return ExtractScalar([returnP2, ...mappedParts.slice(2)], returns);
    }
    return undefined;
  }
  return returnP1 as `scalar.${string}` | undefined;
};

export const PrepareScalarPaths = ({ ops, returns }: { returns: ReturnTypesType; ops: Operations }) => {
  const ibb = (
    k: string,
    originalKey: string,
    o: InputValueType | VType,
    p: string[] = [],
    pOriginals: string[] = [],
    root = true,
  ): { [x: string]: `scalar.${string}` } | undefined => {
    if (!o) {
      return;
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
      const extractionArray = [...pOriginals, originalKey];
      const isScalar = ExtractScalar(extractionArray, returns);
      if (isScalar?.startsWith('scalar')) {
        const partOfTree = {
          [[...p, k].join(SEPARATOR)]: isScalar,
        };
        return partOfTree;
      }
      return {};
    }
    if (Array.isArray(o)) {
      return ibb(k, k, o[1], p, pOriginals, false);
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(alias, operationName, operation, p, pOriginals, false);
        })
        .reduce((a, b) => ({
          ...a,
          ...b,
        }));
    }
    const keyName = root ? ops[k] : k;
    return Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map(([k, v]) => {
        // Inline fragments shouldn't be added to the path as they aren't a field
        const isInlineFragment = originalKey.match(/^...\s*on/) != null;
        return ibb(
          k,
          k,
          v,
          isInlineFragment ? p : [...p, purifyGraphQLKey(keyName || k)],
          isInlineFragment ? pOriginals : [...pOriginals, purifyGraphQLKey(originalKey)],
          false,
        );
      })
      .reduce((a, b) => ({
        ...a,
        ...b,
      }));
  };
  return ibb;
};

export const purifyGraphQLKey = (k: string) => k.replace(/\([^)]*\)/g, '').replace(/^[^:]*\:/g, '');

const mapPart = (p: string) => {
  const [isArg, isField] = p.split('<>');
  if (isField) {
    return {
      v: isField,
      __type: 'field',
    } as const;
  }
  return {
    v: isArg,
    __type: 'arg',
  } as const;
};

type Part = ReturnType<typeof mapPart>;

export const ResolveFromPath = (props: AllTypesPropsType, returns: ReturnTypesType, ops: Operations) => {
  const ResolvePropsType = (mappedParts: Part[]) => {
    const oKey = ops[mappedParts[0].v];
    const propsP1 = oKey ? props[oKey] : props[mappedParts[0].v];
    if (propsP1 === 'enum' && mappedParts.length === 1) {
      return 'enum';
    }
    if (typeof propsP1 === 'string' && propsP1.startsWith('scalar.') && mappedParts.length === 1) {
      return propsP1;
    }
    if (typeof propsP1 === 'object') {
      if (mappedParts.length < 2) {
        return 'not';
      }
      const propsP2 = propsP1[mappedParts[1].v];
      if (typeof propsP2 === 'string') {
        return rpp(
          `${propsP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
      if (typeof propsP2 === 'object') {
        if (mappedParts.length < 3) {
          return 'not';
        }
        const propsP3 = propsP2[mappedParts[2].v];
        if (propsP3 && mappedParts[2].__type === 'arg') {
          return rpp(
            `${propsP3}${SEPARATOR}${mappedParts
              .slice(3)
              .map((mp) => mp.v)
              .join(SEPARATOR)}`,
          );
        }
      }
    }
  };
  const ResolveReturnType = (mappedParts: Part[]) => {
    if (mappedParts.length === 0) {
      return 'not';
    }
    const oKey = ops[mappedParts[0].v];
    const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
    if (typeof returnP1 === 'object') {
      if (mappedParts.length < 2) return 'not';
      const returnP2 = returnP1[mappedParts[1].v];
      if (returnP2) {
        return rpp(
          `${returnP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
    }
  };
  const rpp = (path: string): 'enum' | 'not' | `scalar.${string}` => {
    const parts = path.split(SEPARATOR).filter((l) => l.length > 0);
    const mappedParts = parts.map(mapPart);
    const propsP1 = ResolvePropsType(mappedParts);
    if (propsP1) {
      return propsP1;
    }
    const returnP1 = ResolveReturnType(mappedParts);
    if (returnP1) {
      return returnP1;
    }
    return 'not';
  };
  return rpp;
};

export const InternalArgsBuilt = ({
  props,
  ops,
  returns,
  scalars,
  vars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  scalars?: ScalarDefinition;
  vars: Array<{ name: string; graphQLType: string }>;
}) => {
  const arb = (a: ZeusArgsType, p = '', root = true): string => {
    if (typeof a === 'string') {
      if (a.startsWith(START_VAR_NAME)) {
        const [varName, graphQLType] = a.replace(START_VAR_NAME, '$').split(GRAPHQL_TYPE_SEPARATOR);
        const v = vars.find((v) => v.name === varName);
        if (!v) {
          vars.push({
            name: varName,
            graphQLType,
          });
        } else {
          if (v.graphQLType !== graphQLType) {
            throw new Error(
              `Invalid variable exists with two different GraphQL Types, "${v.graphQLType}" and ${graphQLType}`,
            );
          }
        }
        return varName;
      }
    }
    const checkType = ResolveFromPath(props, returns, ops)(p);
    if (checkType.startsWith('scalar.')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...splittedScalar] = checkType.split('.');
      const scalarKey = splittedScalar.join('.');
      return (scalars?.[scalarKey]?.encode?.(a) as string) || JSON.stringify(a);
    }
    if (Array.isArray(a)) {
      return `[${a.map((arr) => arb(arr, p, false)).join(', ')}]`;
    }
    if (typeof a === 'string') {
      if (checkType === 'enum') {
        return a;
      }
      return `${JSON.stringify(a)}`;
    }
    if (typeof a === 'object') {
      if (a === null) {
        return `null`;
      }
      const returnedObjectString = Object.entries(a)
        .filter(([, v]) => typeof v !== 'undefined')
        .map(([k, v]) => `${k}: ${arb(v, [p, k].join(SEPARATOR), false)}`)
        .join(',\n');
      if (!root) {
        return `{${returnedObjectString}}`;
      }
      return returnedObjectString;
    }
    return `${a}`;
  };
  return arb;
};

export const resolverFor = <X, T extends keyof ResolverInputTypes, Z extends keyof ResolverInputTypes[T]>(
  type: T,
  field: Z,
  fn: (
    args: Required<ResolverInputTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any, source?: any) => any;

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export type ZeusHook<
  T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>,
> = ZeusState<ReturnType<T>[N]>;

export type WithTypeNameValue<T> = T & {
  __typename?: boolean;
  __directives?: string;
};
export type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
export type ScalarDefinition = Record<string, ScalarResolver>;

type IsScalar<S, SCLR extends ScalarDefinition> = S extends 'scalar' & { name: infer T }
  ? T extends keyof SCLR
    ? SCLR[T]['decode'] extends (s: unknown) => unknown
      ? ReturnType<SCLR[T]['decode']>
      : unknown
    : unknown
  : S;
type IsArray<T, U, SCLR extends ScalarDefinition> = T extends Array<infer R>
  ? InputType<R, U, SCLR>[]
  : InputType<T, U, SCLR>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;
type BaseZeusResolver = boolean | 1 | string | Variable<any, string>;

type IsInterfaced<SRC extends DeepAnify<DST>, DST, SCLR extends ScalarDefinition> = FlattenArray<SRC> extends
  | ZEUS_INTERFACES
  | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P], SCLR>
          : Record<string, unknown>
        : never;
    }[keyof DST] & {
      [P in keyof Omit<
        Pick<
          SRC,
          {
            [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
          }[keyof DST]
        >,
        '__typename'
      >]: IsPayLoad<DST[P]> extends BaseZeusResolver ? IsScalar<SRC[P], SCLR> : IsArray<SRC[P], DST[P], SCLR>;
    }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends BaseZeusResolver
        ? IsScalar<SRC[P], SCLR>
        : IsArray<SRC[P], DST[P], SCLR>;
    };

export type MapType<SRC, DST, SCLR extends ScalarDefinition> = SRC extends DeepAnify<DST>
  ? IsInterfaced<SRC, DST, SCLR>
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
export type InputType<SRC, DST, SCLR extends ScalarDefinition = {}> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P], SCLR>[keyof MapType<SRC, R[P], SCLR>];
    } & MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>, SCLR>
  : MapType<SRC, IsPayLoad<DST>, SCLR>;
export type SubscriptionToGraphQL<Z, T, SCLR extends ScalarDefinition> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z, SCLR>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z, SCLR>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z, SCLR>; errors?: string[] }) => void) => void;
  open: () => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type FromSelector<SELECTOR, NAME extends keyof GraphQLTypes, SCLR extends ScalarDefinition = {}> = InputType<
  GraphQLTypes[NAME],
  SELECTOR,
  SCLR
>;

export type ScalarResolver = {
  encode?: (s: unknown) => string;
  decode?: (s: unknown) => unknown;
};

export type SelectionFunction<V> = <T>(t: T | V) => T;

type BuiltInVariableTypes = {
  ['String']: string;
  ['Int']: number;
  ['Float']: number;
  ['ID']: unknown;
  ['Boolean']: boolean;
};
type AllVariableTypes = keyof BuiltInVariableTypes | keyof ZEUS_VARIABLES;
type VariableRequired<T extends string> = `${T}!` | T | `[${T}]` | `[${T}]!` | `[${T}!]` | `[${T}!]!`;
type VR<T extends string> = VariableRequired<VariableRequired<T>>;

export type GraphQLVariableType = VR<AllVariableTypes>;

type ExtractVariableTypeString<T extends string> = T extends VR<infer R1>
  ? R1 extends VR<infer R2>
    ? R2 extends VR<infer R3>
      ? R3 extends VR<infer R4>
        ? R4 extends VR<infer R5>
          ? R5
          : R4
        : R3
      : R2
    : R1
  : T;

type DecomposeType<T, Type> = T extends `[${infer R}]`
  ? Array<DecomposeType<R, Type>> | undefined
  : T extends `${infer R}!`
  ? NonNullable<DecomposeType<R, Type>>
  : Type | undefined;

type ExtractTypeFromGraphQLType<T extends string> = T extends keyof ZEUS_VARIABLES
  ? ZEUS_VARIABLES[T]
  : T extends keyof BuiltInVariableTypes
  ? BuiltInVariableTypes[T]
  : any;

export type GetVariableType<T extends string> = DecomposeType<
  T,
  ExtractTypeFromGraphQLType<ExtractVariableTypeString<T>>
>;

type UndefinedKeys<T> = {
  [K in keyof T]-?: T[K] extends NonNullable<T[K]> ? never : K;
}[keyof T];

type WithNullableKeys<T> = Pick<T, UndefinedKeys<T>>;
type WithNonNullableKeys<T> = Omit<T, UndefinedKeys<T>>;

type OptionalKeys<T> = {
  [P in keyof T]?: T[P];
};

export type WithOptionalNullables<T> = OptionalKeys<WithNullableKeys<T>> & WithNonNullableKeys<T>;

export type Variable<T extends GraphQLVariableType, Name extends string> = {
  ' __zeus_name': Name;
  ' __zeus_type': T;
};

export type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: GetVariableType<VType> }
  : Query extends [infer Inputs, infer Outputs]
  ? ExtractVariables<Inputs> & ExtractVariables<Outputs>
  : Query extends string | number | boolean
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    {}
  : UnionToIntersection<{ [K in keyof Query]: WithOptionalNullables<ExtractVariables<Query[K]>> }[keyof Query]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export const START_VAR_NAME = `$ZEUS_VAR`;
export const GRAPHQL_TYPE_SEPARATOR = `__$GRAPHQL__`;

export const $ = <Type extends GraphQLVariableType, Name extends string>(name: Name, graphqlType: Type) => {
  return (START_VAR_NAME + name + GRAPHQL_TYPE_SEPARATOR + graphqlType) as unknown as Variable<Type, Name>;
};
type ZEUS_INTERFACES = GraphQLTypes["MutationResult"] | GraphQLTypes["_Field"]
export type ScalarCoders = {
	UUID?: ScalarResolver;
	Json?: ScalarResolver;
}
type ZEUS_UNIONS = GraphQLTypes["_PathFragment"] | GraphQLTypes["_Argument"]

export type ValueTypes = {
    ["Query"]: AliasType<{
getGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>},ValueTypes["General"]],
listGeneral?: [{	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GeneralOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["General"]],
paginateGeneral?: [{	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GeneralOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["GeneralConnection"]],
validateCreateGeneral?: [{	data: ValueTypes["GeneralCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	data: ValueTypes["GeneralUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
listImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Image"]],
paginateImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImageConnection"]],
validateCreateImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["GenericPage"]],
listGenericPage?: [{	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GenericPageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["GenericPage"]],
paginateGenericPage?: [{	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GenericPageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["GenericPageConnection"]],
validateCreateGenericPage?: [{	data: ValueTypes["GenericPageCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	data: ValueTypes["GenericPageUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
listLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
paginateLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
listSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
paginateSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["SeoConnection"]],
validateCreateSeo?: [{	data: ValueTypes["SeoCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	data: ValueTypes["SeoUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["Content"]],
listContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Content"]],
paginateContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentConnection"]],
validateCreateContent?: [{	data: ValueTypes["ContentCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ContentUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlockConnection"]],
validateCreateContentBlock?: [{	data: ValueTypes["ContentBlockCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ContentBlockUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
listContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceConnection"]],
validateCreateContentReference?: [{	data: ValueTypes["ContentReferenceCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ContentReferenceUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
getRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>},ValueTypes["Redirect"]],
listRedirect?: [{	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RedirectOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Redirect"]],
paginateRedirect?: [{	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RedirectOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RedirectConnection"]],
validateCreateRedirect?: [{	data: ValueTypes["RedirectCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	data: ValueTypes["RedirectUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
listLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Link"]],
paginateLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkConnection"]],
validateCreateLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
	transaction?:ValueTypes["QueryTransaction"],
	_info?:ValueTypes["Info"],
	schema?:ValueTypes["_Schema"],
	s3DummyQuery?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["General"]: AliasType<{
	_meta?:ValueTypes["GeneralMeta"],
	id?:boolean | `@${string}`,
	unique?:boolean | `@${string}`,
	dummy?:boolean | `@${string}`,
image?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
seo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
		__typename?: boolean | `@${string}`
}>;
	["GeneralMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	unique?:ValueTypes["FieldMeta"],
	dummy?:ValueTypes["FieldMeta"],
	image?:ValueTypes["FieldMeta"],
	seo?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["FieldMeta"]: AliasType<{
	readable?:boolean | `@${string}`,
	updatable?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["UUID"]:unknown;
	["One"]:One;
	["Image"]: AliasType<{
	_meta?:ValueTypes["ImageMeta"],
	id?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	size?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	alt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ImageMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	url?:ValueTypes["FieldMeta"],
	width?:ValueTypes["FieldMeta"],
	height?:ValueTypes["FieldMeta"],
	size?:ValueTypes["FieldMeta"],
	type?:ValueTypes["FieldMeta"],
	alt?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ImageWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	size?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	alt?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ImageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ImageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>
};
	["UUIDCondition"]: {
	and?: Array<ValueTypes["UUIDCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["UUIDCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["UUID"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["UUID"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["StringCondition"]: {
	and?: Array<ValueTypes["StringCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StringCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: string | undefined | null | Variable<any, string>,
	notEq?: string | undefined | null | Variable<any, string>,
	in?: Array<string> | undefined | null | Variable<any, string>,
	notIn?: Array<string> | undefined | null | Variable<any, string>,
	lt?: string | undefined | null | Variable<any, string>,
	lte?: string | undefined | null | Variable<any, string>,
	gt?: string | undefined | null | Variable<any, string>,
	gte?: string | undefined | null | Variable<any, string>,
	contains?: string | undefined | null | Variable<any, string>,
	startsWith?: string | undefined | null | Variable<any, string>,
	endsWith?: string | undefined | null | Variable<any, string>,
	containsCI?: string | undefined | null | Variable<any, string>,
	startsWithCI?: string | undefined | null | Variable<any, string>,
	endsWithCI?: string | undefined | null | Variable<any, string>
};
	["IntCondition"]: {
	and?: Array<ValueTypes["IntCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["IntCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: number | undefined | null | Variable<any, string>,
	notEq?: number | undefined | null | Variable<any, string>,
	in?: Array<number> | undefined | null | Variable<any, string>,
	notIn?: Array<number> | undefined | null | Variable<any, string>,
	lt?: number | undefined | null | Variable<any, string>,
	lte?: number | undefined | null | Variable<any, string>,
	gt?: number | undefined | null | Variable<any, string>,
	gte?: number | undefined | null | Variable<any, string>
};
	["Seo"]: AliasType<{
	_meta?:ValueTypes["SeoMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
	ogTitle?:boolean | `@${string}`,
	ogDescription?:boolean | `@${string}`,
	noIndex?:boolean | `@${string}`,
	noFollow?:boolean | `@${string}`,
ogImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
		__typename?: boolean | `@${string}`
}>;
	["SeoMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	description?:ValueTypes["FieldMeta"],
	ogTitle?:ValueTypes["FieldMeta"],
	ogDescription?:ValueTypes["FieldMeta"],
	noIndex?:ValueTypes["FieldMeta"],
	noFollow?:ValueTypes["FieldMeta"],
	ogImage?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["SeoWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	ogTitle?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	ogDescription?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	noIndex?: ValueTypes["BooleanCondition"] | undefined | null | Variable<any, string>,
	noFollow?: ValueTypes["BooleanCondition"] | undefined | null | Variable<any, string>,
	ogImage?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["SeoWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["SeoWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>
};
	["BooleanCondition"]: {
	and?: Array<ValueTypes["BooleanCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["BooleanCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["BooleanCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: boolean | undefined | null | Variable<any, string>,
	notEq?: boolean | undefined | null | Variable<any, string>,
	in?: Array<boolean> | undefined | null | Variable<any, string>,
	notIn?: Array<boolean> | undefined | null | Variable<any, string>,
	lt?: boolean | undefined | null | Variable<any, string>,
	lte?: boolean | undefined | null | Variable<any, string>,
	gt?: boolean | undefined | null | Variable<any, string>,
	gte?: boolean | undefined | null | Variable<any, string>
};
	["GeneralUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["SeoUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	ogImage?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ImageUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["GeneralWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["OneCondition"] | undefined | null | Variable<any, string>,
	dummy?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["GeneralWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["GeneralWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>
};
	["OneCondition"]: {
	and?: Array<ValueTypes["OneCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["OneCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["OneCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["One"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["One"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["One"] | undefined | null | Variable<any, string>
};
	["GeneralOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	dummy?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoOrderBy"] | undefined | null | Variable<any, string>
};
	["OrderDirection"]:OrderDirection;
	["ImageOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	size?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	alt?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["SeoOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	ogTitle?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	ogDescription?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	noIndex?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	noFollow?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	ogImage?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>
};
	["GeneralConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["GeneralEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PageInfo"]: AliasType<{
	totalCount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GeneralEdge"]: AliasType<{
	node?:ValueTypes["General"],
		__typename?: boolean | `@${string}`
}>;
	["_ValidationResult"]: AliasType<{
	valid?:boolean | `@${string}`,
	errors?:ValueTypes["_ValidationError"],
		__typename?: boolean | `@${string}`
}>;
	["_ValidationError"]: AliasType<{
	path?:ValueTypes["_PathFragment"],
	message?:ValueTypes["_ValidationMessage"],
		__typename?: boolean | `@${string}`
}>;
	["_PathFragment"]: AliasType<{		["...on _FieldPathFragment"] : ValueTypes["_FieldPathFragment"],
		["...on _IndexPathFragment"] : ValueTypes["_IndexPathFragment"]
		__typename?: boolean | `@${string}`
}>;
	["_FieldPathFragment"]: AliasType<{
	field?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_IndexPathFragment"]: AliasType<{
	index?:boolean | `@${string}`,
	alias?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_ValidationMessage"]: AliasType<{
	text?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GeneralCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	dummy?: string | undefined | null | Variable<any, string>,
	image?: ValueTypes["GeneralCreateImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["GeneralCreateSeoEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GeneralCreateImageEntityRelationInput"]: {
	connect?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>
};
	["ImageCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>,
	width?: number | undefined | null | Variable<any, string>,
	height?: number | undefined | null | Variable<any, string>,
	size?: number | undefined | null | Variable<any, string>,
	type?: string | undefined | null | Variable<any, string>,
	alt?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GeneralCreateSeoEntityRelationInput"]: {
	connect?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["SeoCreateInput"] | undefined | null | Variable<any, string>
};
	["SeoCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	ogTitle?: string | undefined | null | Variable<any, string>,
	ogDescription?: string | undefined | null | Variable<any, string>,
	noIndex?: boolean | undefined | null | Variable<any, string>,
	noFollow?: boolean | undefined | null | Variable<any, string>,
	ogImage?: ValueTypes["SeoCreateOgImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["SeoCreateOgImageEntityRelationInput"]: {
	connect?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>
};
	["GeneralUpdateInput"]: {
	unique?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	dummy?: string | undefined | null | Variable<any, string>,
	image?: ValueTypes["GeneralUpdateImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["GeneralUpdateSeoEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GeneralUpdateImageEntityRelationInput"]: {
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ImageUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["GeneralUpsertImageRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["ImageUpdateInput"]: {
	url?: string | undefined | null | Variable<any, string>,
	width?: number | undefined | null | Variable<any, string>,
	height?: number | undefined | null | Variable<any, string>,
	size?: number | undefined | null | Variable<any, string>,
	type?: string | undefined | null | Variable<any, string>,
	alt?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GeneralUpsertImageRelationInput"]: {
	update?: ValueTypes["ImageUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>
};
	["GeneralUpdateSeoEntityRelationInput"]: {
	create?: ValueTypes["SeoCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["SeoUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["GeneralUpsertSeoRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["SeoUpdateInput"]: {
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	ogTitle?: string | undefined | null | Variable<any, string>,
	ogDescription?: string | undefined | null | Variable<any, string>,
	noIndex?: boolean | undefined | null | Variable<any, string>,
	noFollow?: boolean | undefined | null | Variable<any, string>,
	ogImage?: ValueTypes["SeoUpdateOgImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["SeoUpdateOgImageEntityRelationInput"]: {
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ImageUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["SeoUpsertOgImageRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["SeoUpsertOgImageRelationInput"]: {
	update?: ValueTypes["ImageUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>
};
	["GeneralUpsertSeoRelationInput"]: {
	update?: ValueTypes["SeoUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["SeoCreateInput"] | undefined | null | Variable<any, string>
};
	["ImageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ImageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImageEdge"]: AliasType<{
	node?:ValueTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPage"]: AliasType<{
	_meta?:ValueTypes["GenericPageMeta"],
	id?:boolean | `@${string}`,
seo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
link?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
	title?:boolean | `@${string}`,
content?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["Content"]],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	seo?:ValueTypes["FieldMeta"],
	link?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	content?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Linkable"]: AliasType<{
	_meta?:ValueTypes["LinkableMeta"],
	id?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
genericPage?: [{	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["GenericPage"]],
redirect?: [{	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>},ValueTypes["Redirect"]],
		__typename?: boolean | `@${string}`
}>;
	["LinkableMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	url?:ValueTypes["FieldMeta"],
	genericPage?:ValueTypes["FieldMeta"],
	redirect?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["GenericPageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["GenericPageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>
};
	["LinkableWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["LinkableWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LinkableWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>
};
	["RedirectWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	target?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["RedirectWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["RedirectWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>
};
	["LinkWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["LinkTypeCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	externalLink?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	internalLink?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["LinkWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LinkWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>
};
	["LinkTypeCondition"]: {
	and?: Array<ValueTypes["LinkTypeCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LinkTypeCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LinkTypeCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["LinkType"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["LinkType"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>
};
	["LinkType"]:LinkType;
	["ContentWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	blocks?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ContentWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ContentWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>
};
	["ContentBlockWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	json?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,
	references?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ContentBlockWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ContentBlockWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["ContentReferenceTypeCondition"] | undefined | null | Variable<any, string>,
	primaryText?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	block?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	linkables?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ContentReferenceWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ContentReferenceWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceTypeCondition"]: {
	and?: Array<ValueTypes["ContentReferenceTypeCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ContentReferenceTypeCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ContentReferenceTypeCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["ContentReferenceType"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["ContentReferenceType"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>
};
	["ContentReferenceType"]:ContentReferenceType;
	["ContentReferenceLinkableItemWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	item?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	reference?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>
};
	["Redirect"]: AliasType<{
	_meta?:ValueTypes["RedirectMeta"],
	id?:boolean | `@${string}`,
link?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
target?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
		__typename?: boolean | `@${string}`
}>;
	["RedirectMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	link?:ValueTypes["FieldMeta"],
	target?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Link"]: AliasType<{
	_meta?:ValueTypes["LinkMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	externalLink?:boolean | `@${string}`,
internalLink?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
		__typename?: boolean | `@${string}`
}>;
	["LinkMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	type?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	externalLink?:ValueTypes["FieldMeta"],
	internalLink?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Content"]: AliasType<{
	_meta?:ValueTypes["ContentMeta"],
	id?:boolean | `@${string}`,
blocks?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
blocksByReferences?: [{	by: ValueTypes["ContentBlocksByReferencesUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
paginateBlocks?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlockConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	blocks?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlock"]: AliasType<{
	_meta?:ValueTypes["ContentBlockMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
	json?:boolean | `@${string}`,
content?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["Content"]],
references?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
referencesByLinkables?: [{	by: ValueTypes["ContentBlockReferencesByLinkablesUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
paginateReferences?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	json?:ValueTypes["FieldMeta"],
	content?:ValueTypes["FieldMeta"],
	references?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReference"]: AliasType<{
	_meta?:ValueTypes["ContentReferenceMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	primaryText?:boolean | `@${string}`,
block?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
image?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
linkables?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
linkablesByItem?: [{	by: ValueTypes["ContentReferenceLinkablesByItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateLinkables?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	type?:ValueTypes["FieldMeta"],
	primaryText?:ValueTypes["FieldMeta"],
	block?:ValueTypes["FieldMeta"],
	image?:ValueTypes["FieldMeta"],
	linkables?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItem"]: AliasType<{
	_meta?:ValueTypes["ContentReferenceLinkableItemMeta"],
	id?:boolean | `@${string}`,
item?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
reference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	item?:ValueTypes["FieldMeta"],
	reference?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	item?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	reference?: ValueTypes["ContentReferenceOrderBy"] | undefined | null | Variable<any, string>
};
	["LinkableOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["GenericPageOrderBy"] | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["RedirectOrderBy"] | undefined | null | Variable<any, string>
};
	["GenericPageOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoOrderBy"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentOrderBy"] | undefined | null | Variable<any, string>
};
	["ContentOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["RedirectOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	target?: ValueTypes["LinkOrderBy"] | undefined | null | Variable<any, string>
};
	["LinkOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	externalLink?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	internalLink?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>
};
	["ContentReferenceOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	primaryText?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	block?: ValueTypes["ContentBlockOrderBy"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>
};
	["ContentBlockOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	json?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentOrderBy"] | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
	item?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LinkableUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["GenericPageUniqueWhere"] | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["RedirectUniqueWhere"] | undefined | null | Variable<any, string>
};
	["GenericPageUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	blocks?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentBlockUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	references?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	linkables?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	item?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RedirectUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	target?: ValueTypes["LinkUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LinkUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkableItemConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ContentReferenceLinkableItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemEdge"]: AliasType<{
	node?:ValueTypes["ContentReferenceLinkableItem"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
	linkables?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ContentReferenceEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceEdge"]: AliasType<{
	node?:ValueTypes["ContentReference"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlocksByReferencesUniqueWhere"]: {
	references?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentBlockConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ContentBlockEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockEdge"]: AliasType<{
	node?:ValueTypes["ContentBlock"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["GenericPageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageEdge"]: AliasType<{
	node?:ValueTypes["GenericPage"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["GenericPageCreateSeoEntityRelationInput"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["GenericPageCreateLinkEntityRelationInput"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["GenericPageCreateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GenericPageCreateSeoEntityRelationInput"]: {
	connect?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["SeoCreateInput"] | undefined | null | Variable<any, string>
};
	["GenericPageCreateLinkEntityRelationInput"]: {
	connect?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableWithoutGenericPageCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkableWithoutGenericPageCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["LinkableCreateRedirectEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkableCreateRedirectEntityRelationInput"]: {
	connect?: ValueTypes["RedirectUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RedirectWithoutLinkCreateInput"] | undefined | null | Variable<any, string>
};
	["RedirectWithoutLinkCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	target?: ValueTypes["RedirectCreateTargetEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RedirectCreateTargetEntityRelationInput"]: {
	connect?: ValueTypes["LinkUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	externalLink?: string | undefined | null | Variable<any, string>,
	internalLink?: ValueTypes["LinkCreateInternalLinkEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkCreateInternalLinkEntityRelationInput"]: {
	connect?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkableCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["LinkableCreateRedirectEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkableCreateGenericPageEntityRelationInput"]: {
	connect?: ValueTypes["GenericPageUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["GenericPageWithoutLinkCreateInput"] | undefined | null | Variable<any, string>
};
	["GenericPageWithoutLinkCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["GenericPageCreateSeoEntityRelationInput"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["GenericPageCreateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GenericPageCreateContentEntityRelationInput"]: {
	connect?: ValueTypes["ContentUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	blocks?: Array<ValueTypes["ContentCreateBlocksEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentCreateBlocksEntityRelationInput"]: {
	connect?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentBlockWithoutContentCreateInput"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["ContentBlockWithoutContentCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	order?: number | undefined | null | Variable<any, string>,
	json?: string | undefined | null | Variable<any, string>,
	references?: Array<ValueTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockCreateReferencesEntityRelationInput"]: {
	connect?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentReferenceWithoutBlockCreateInput"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["ContentReferenceWithoutBlockCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	primaryText?: string | undefined | null | Variable<any, string>,
	image?: ValueTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	linkables?: Array<ValueTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceCreateImageEntityRelationInput"]: {
	connect?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
	connect?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["GenericPageUpdateInput"]: {
	seo?: ValueTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["GenericPageUpdateLinkEntityRelationInput"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["GenericPageUpdateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GenericPageUpdateSeoEntityRelationInput"]: {
	create?: ValueTypes["SeoCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["SeoUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["GenericPageUpsertSeoRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["GenericPageUpsertSeoRelationInput"]: {
	update?: ValueTypes["SeoUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["SeoCreateInput"] | undefined | null | Variable<any, string>
};
	["GenericPageUpdateLinkEntityRelationInput"]: {
	create?: ValueTypes["LinkableWithoutGenericPageCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["LinkableWithoutGenericPageUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["GenericPageUpsertLinkRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["LinkableWithoutGenericPageUpdateInput"]: {
	url?: string | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkableUpdateRedirectEntityRelationInput"]: {
	create?: ValueTypes["RedirectWithoutLinkCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["RedirectWithoutLinkUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["LinkableUpsertRedirectRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["RedirectUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["RedirectWithoutLinkUpdateInput"]: {
	target?: ValueTypes["RedirectUpdateTargetEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RedirectUpdateTargetEntityRelationInput"]: {
	create?: ValueTypes["LinkCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["LinkUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["RedirectUpsertTargetRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["LinkUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["LinkUpdateInput"]: {
	type?: ValueTypes["LinkType"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	externalLink?: string | undefined | null | Variable<any, string>,
	internalLink?: ValueTypes["LinkUpdateInternalLinkEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkUpdateInternalLinkEntityRelationInput"]: {
	create?: ValueTypes["LinkableCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["LinkableUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["LinkUpsertInternalLinkRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["LinkableUpdateInput"]: {
	url?: string | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined | null | Variable<any, string>,
	redirect?: ValueTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkableUpdateGenericPageEntityRelationInput"]: {
	create?: ValueTypes["GenericPageWithoutLinkCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["GenericPageWithoutLinkUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["LinkableUpsertGenericPageRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["GenericPageUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["GenericPageWithoutLinkUpdateInput"]: {
	seo?: ValueTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["GenericPageUpdateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["GenericPageUpdateContentEntityRelationInput"]: {
	create?: ValueTypes["ContentCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["GenericPageUpsertContentRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ContentUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["ContentUpdateInput"]: {
	blocks?: Array<ValueTypes["ContentUpdateBlocksEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentUpdateBlocksEntityRelationInput"]: {
	create?: ValueTypes["ContentBlockWithoutContentCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentUpdateBlocksRelationInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["ContentUpsertBlocksRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["ContentUpdateBlocksRelationInput"]: {
	by?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	data?: ValueTypes["ContentBlockWithoutContentUpdateInput"] | undefined | null | Variable<any, string>
};
	["ContentBlockWithoutContentUpdateInput"]: {
	order?: number | undefined | null | Variable<any, string>,
	json?: string | undefined | null | Variable<any, string>,
	references?: Array<ValueTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockUpdateReferencesEntityRelationInput"]: {
	create?: ValueTypes["ContentReferenceWithoutBlockCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentBlockUpdateReferencesRelationInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["ContentBlockUpsertReferencesRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["ContentBlockUpdateReferencesRelationInput"]: {
	by?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>,
	data?: ValueTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined | null | Variable<any, string>
};
	["ContentReferenceWithoutBlockUpdateInput"]: {
	type?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	primaryText?: string | undefined | null | Variable<any, string>,
	image?: ValueTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	linkables?: Array<ValueTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceUpdateImageEntityRelationInput"]: {
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ImageUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["ContentReferenceUpsertImageRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceUpsertImageRelationInput"]: {
	update?: ValueTypes["ImageUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImageCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentReferenceUpdateLinkablesEntityRelationInput"]: {
	connect?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["ContentBlockUpsertReferencesRelationInput"]: {
	by?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentReferenceWithoutBlockCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentUpsertBlocksRelationInput"]: {
	by?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentBlockWithoutContentUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentBlockWithoutContentCreateInput"] | undefined | null | Variable<any, string>
};
	["GenericPageUpsertContentRelationInput"]: {
	update?: ValueTypes["ContentUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkableUpsertGenericPageRelationInput"]: {
	update?: ValueTypes["GenericPageWithoutLinkUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["GenericPageWithoutLinkCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkUpsertInternalLinkRelationInput"]: {
	update?: ValueTypes["LinkableUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableCreateInput"] | undefined | null | Variable<any, string>
};
	["RedirectUpsertTargetRelationInput"]: {
	update?: ValueTypes["LinkUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkableUpsertRedirectRelationInput"]: {
	update?: ValueTypes["RedirectWithoutLinkUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RedirectWithoutLinkCreateInput"] | undefined | null | Variable<any, string>
};
	["GenericPageUpsertLinkRelationInput"]: {
	update?: ValueTypes["LinkableWithoutGenericPageUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableWithoutGenericPageCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkableConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["LinkableEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableEdge"]: AliasType<{
	node?:ValueTypes["Linkable"],
		__typename?: boolean | `@${string}`
}>;
	["SeoConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["SeoEdge"],
		__typename?: boolean | `@${string}`
}>;
	["SeoEdge"]: AliasType<{
	node?:ValueTypes["Seo"],
		__typename?: boolean | `@${string}`
}>;
	["ContentConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ContentEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentEdge"]: AliasType<{
	node?:ValueTypes["Content"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	order?: number | undefined | null | Variable<any, string>,
	json?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentBlockCreateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	references?: Array<ValueTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockCreateContentEntityRelationInput"]: {
	connect?: ValueTypes["ContentUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentWithoutBlocksCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentWithoutBlocksCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockUpdateInput"]: {
	order?: number | undefined | null | Variable<any, string>,
	json?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	references?: Array<ValueTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockUpdateContentEntityRelationInput"]: {
	create?: ValueTypes["ContentWithoutBlocksCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentWithoutBlocksUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["ContentBlockUpsertContentRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ContentUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["ContentWithoutBlocksUpdateInput"]: {
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockUpsertContentRelationInput"]: {
	update?: ValueTypes["ContentWithoutBlocksUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentWithoutBlocksCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentReferenceCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	primaryText?: string | undefined | null | Variable<any, string>,
	block?: ValueTypes["ContentReferenceCreateBlockEntityRelationInput"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	linkables?: Array<ValueTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceCreateBlockEntityRelationInput"]: {
	connect?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentBlockWithoutReferencesCreateInput"] | undefined | null | Variable<any, string>
};
	["ContentBlockWithoutReferencesCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	order?: number | undefined | null | Variable<any, string>,
	json?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentBlockCreateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceUpdateInput"]: {
	type?: ValueTypes["ContentReferenceType"] | undefined | null | Variable<any, string>,
	primaryText?: string | undefined | null | Variable<any, string>,
	block?: ValueTypes["ContentReferenceUpdateBlockEntityRelationInput"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined | null | Variable<any, string>,
	linkables?: Array<ValueTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceUpdateBlockEntityRelationInput"]: {
	create?: ValueTypes["ContentBlockWithoutReferencesCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["ContentReferenceUpsertBlockRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["ContentBlockWithoutReferencesUpdateInput"]: {
	order?: number | undefined | null | Variable<any, string>,
	json?: string | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceUpsertBlockRelationInput"]: {
	update?: ValueTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ContentBlockWithoutReferencesCreateInput"] | undefined | null | Variable<any, string>
};
	["RedirectConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["RedirectEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectEdge"]: AliasType<{
	node?:ValueTypes["Redirect"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["RedirectCreateLinkEntityRelationInput"] | undefined | null | Variable<any, string>,
	target?: ValueTypes["RedirectCreateTargetEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RedirectCreateLinkEntityRelationInput"]: {
	connect?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableWithoutRedirectCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkableWithoutRedirectCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RedirectUpdateInput"]: {
	link?: ValueTypes["RedirectUpdateLinkEntityRelationInput"] | undefined | null | Variable<any, string>,
	target?: ValueTypes["RedirectUpdateTargetEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RedirectUpdateLinkEntityRelationInput"]: {
	create?: ValueTypes["LinkableWithoutRedirectCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["LinkableWithoutRedirectUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["RedirectUpsertLinkRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: boolean | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["LinkableWithoutRedirectUpdateInput"]: {
	url?: string | undefined | null | Variable<any, string>,
	genericPage?: ValueTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RedirectUpsertLinkRelationInput"]: {
	update?: ValueTypes["LinkableWithoutRedirectUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableWithoutRedirectCreateInput"] | undefined | null | Variable<any, string>
};
	["LinkConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["LinkEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LinkEdge"]: AliasType<{
	node?:ValueTypes["Link"],
		__typename?: boolean | `@${string}`
}>;
	["QueryTransaction"]: AliasType<{
getGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>},ValueTypes["General"]],
listGeneral?: [{	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GeneralOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["General"]],
paginateGeneral?: [{	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GeneralOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["GeneralConnection"]],
validateCreateGeneral?: [{	data: ValueTypes["GeneralCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	data: ValueTypes["GeneralUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
listImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Image"]],
paginateImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImageConnection"]],
validateCreateImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["GenericPage"]],
listGenericPage?: [{	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GenericPageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["GenericPage"]],
paginateGenericPage?: [{	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["GenericPageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["GenericPageConnection"]],
validateCreateGenericPage?: [{	data: ValueTypes["GenericPageCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	data: ValueTypes["GenericPageUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
listLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
paginateLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
listSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
paginateSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["SeoConnection"]],
validateCreateSeo?: [{	data: ValueTypes["SeoCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	data: ValueTypes["SeoUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["Content"]],
listContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Content"]],
paginateContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentConnection"]],
validateCreateContent?: [{	data: ValueTypes["ContentCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ContentUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlockConnection"]],
validateCreateContentBlock?: [{	data: ValueTypes["ContentBlockCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ContentBlockUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
listContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceConnection"]],
validateCreateContentReference?: [{	data: ValueTypes["ContentReferenceCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ContentReferenceUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
getRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>},ValueTypes["Redirect"]],
listRedirect?: [{	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RedirectOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Redirect"]],
paginateRedirect?: [{	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RedirectOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RedirectConnection"]],
validateCreateRedirect?: [{	data: ValueTypes["RedirectCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	data: ValueTypes["RedirectUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
listLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Link"]],
paginateLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkConnection"]],
validateCreateLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
		__typename?: boolean | `@${string}`
}>;
	["Info"]: AliasType<{
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
createGeneral?: [{	data: ValueTypes["GeneralCreateInput"] | Variable<any, string>},ValueTypes["GeneralCreateResult"]],
deleteGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>},ValueTypes["GeneralDeleteResult"]],
updateGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["GeneralUpdateInput"] | Variable<any, string>},ValueTypes["GeneralUpdateResult"]],
upsertGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["GeneralUpdateInput"] | Variable<any, string>,	create: ValueTypes["GeneralCreateInput"] | Variable<any, string>},ValueTypes["GeneralUpsertResult"]],
createImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageCreateResult"]],
deleteImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImageDeleteResult"]],
updateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ImageUpdateInput"] | Variable<any, string>,	create: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageUpsertResult"]],
createGenericPage?: [{	data: ValueTypes["GenericPageCreateInput"] | Variable<any, string>},ValueTypes["GenericPageCreateResult"]],
deleteGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["GenericPageDeleteResult"]],
updateGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["GenericPageUpdateInput"] | Variable<any, string>},ValueTypes["GenericPageUpdateResult"]],
upsertGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["GenericPageUpdateInput"] | Variable<any, string>,	create: ValueTypes["GenericPageCreateInput"] | Variable<any, string>},ValueTypes["GenericPageUpsertResult"]],
createLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkableUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableUpsertResult"]],
createSeo?: [{	data: ValueTypes["SeoCreateInput"] | Variable<any, string>},ValueTypes["SeoCreateResult"]],
deleteSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["SeoDeleteResult"]],
updateSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["SeoUpdateInput"] | Variable<any, string>},ValueTypes["SeoUpdateResult"]],
upsertSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["SeoUpdateInput"] | Variable<any, string>,	create: ValueTypes["SeoCreateInput"] | Variable<any, string>},ValueTypes["SeoUpsertResult"]],
createContent?: [{	data: ValueTypes["ContentCreateInput"] | Variable<any, string>},ValueTypes["ContentCreateResult"]],
deleteContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentDeleteResult"]],
updateContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ContentUpdateInput"] | Variable<any, string>},ValueTypes["ContentUpdateResult"]],
upsertContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ContentUpdateInput"] | Variable<any, string>,	create: ValueTypes["ContentCreateInput"] | Variable<any, string>},ValueTypes["ContentUpsertResult"]],
createContentBlock?: [{	data: ValueTypes["ContentBlockCreateInput"] | Variable<any, string>},ValueTypes["ContentBlockCreateResult"]],
deleteContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlockDeleteResult"]],
updateContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ContentBlockUpdateInput"] | Variable<any, string>},ValueTypes["ContentBlockUpdateResult"]],
upsertContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ContentBlockUpdateInput"] | Variable<any, string>,	create: ValueTypes["ContentBlockCreateInput"] | Variable<any, string>},ValueTypes["ContentBlockUpsertResult"]],
createContentReference?: [{	data: ValueTypes["ContentReferenceCreateInput"] | Variable<any, string>},ValueTypes["ContentReferenceCreateResult"]],
deleteContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceDeleteResult"]],
updateContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ContentReferenceUpdateInput"] | Variable<any, string>},ValueTypes["ContentReferenceUpdateResult"]],
upsertContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ContentReferenceUpdateInput"] | Variable<any, string>,	create: ValueTypes["ContentReferenceCreateInput"] | Variable<any, string>},ValueTypes["ContentReferenceUpsertResult"]],
createRedirect?: [{	data: ValueTypes["RedirectCreateInput"] | Variable<any, string>},ValueTypes["RedirectCreateResult"]],
deleteRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>},ValueTypes["RedirectDeleteResult"]],
updateRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["RedirectUpdateInput"] | Variable<any, string>},ValueTypes["RedirectUpdateResult"]],
upsertRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["RedirectUpdateInput"] | Variable<any, string>,	create: ValueTypes["RedirectCreateInput"] | Variable<any, string>},ValueTypes["RedirectUpsertResult"]],
createLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkCreateResult"]],
deleteLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkDeleteResult"]],
updateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkUpsertResult"]],
transaction?: [{	options?: ValueTypes["MutationTransactionOptions"] | undefined | null | Variable<any, string>},ValueTypes["MutationTransaction"]],
	query?:ValueTypes["Query"],
generateUploadUrl?: [{	contentType: string | Variable<any, string>,	expiration?: number | undefined | null | Variable<any, string>,	prefix?: string | undefined | null | Variable<any, string>},ValueTypes["S3SignedUpload"]],
generateReadUrl?: [{	objectKey: string | Variable<any, string>,	expiration?: number | undefined | null | Variable<any, string>},ValueTypes["S3SignedRead"]],
		__typename?: boolean | `@${string}`
}>;
	["GeneralCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["General"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["MutationResult"]:AliasType<{
		ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"];
		['...on GeneralCreateResult']?: Omit<ValueTypes["GeneralCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on GeneralDeleteResult']?: Omit<ValueTypes["GeneralDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on GeneralUpdateResult']?: Omit<ValueTypes["GeneralUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on GeneralUpsertResult']?: Omit<ValueTypes["GeneralUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageCreateResult']?: Omit<ValueTypes["ImageCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageDeleteResult']?: Omit<ValueTypes["ImageDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageUpdateResult']?: Omit<ValueTypes["ImageUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageUpsertResult']?: Omit<ValueTypes["ImageUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on GenericPageCreateResult']?: Omit<ValueTypes["GenericPageCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on GenericPageDeleteResult']?: Omit<ValueTypes["GenericPageDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on GenericPageUpdateResult']?: Omit<ValueTypes["GenericPageUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on GenericPageUpsertResult']?: Omit<ValueTypes["GenericPageUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableCreateResult']?: Omit<ValueTypes["LinkableCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableDeleteResult']?: Omit<ValueTypes["LinkableDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableUpdateResult']?: Omit<ValueTypes["LinkableUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableUpsertResult']?: Omit<ValueTypes["LinkableUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on SeoCreateResult']?: Omit<ValueTypes["SeoCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on SeoDeleteResult']?: Omit<ValueTypes["SeoDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on SeoUpdateResult']?: Omit<ValueTypes["SeoUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on SeoUpsertResult']?: Omit<ValueTypes["SeoUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentCreateResult']?: Omit<ValueTypes["ContentCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentDeleteResult']?: Omit<ValueTypes["ContentDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentUpdateResult']?: Omit<ValueTypes["ContentUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentUpsertResult']?: Omit<ValueTypes["ContentUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentBlockCreateResult']?: Omit<ValueTypes["ContentBlockCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentBlockDeleteResult']?: Omit<ValueTypes["ContentBlockDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentBlockUpdateResult']?: Omit<ValueTypes["ContentBlockUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentBlockUpsertResult']?: Omit<ValueTypes["ContentBlockUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentReferenceCreateResult']?: Omit<ValueTypes["ContentReferenceCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentReferenceDeleteResult']?: Omit<ValueTypes["ContentReferenceDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentReferenceUpdateResult']?: Omit<ValueTypes["ContentReferenceUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ContentReferenceUpsertResult']?: Omit<ValueTypes["ContentReferenceUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on RedirectCreateResult']?: Omit<ValueTypes["RedirectCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on RedirectDeleteResult']?: Omit<ValueTypes["RedirectDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on RedirectUpdateResult']?: Omit<ValueTypes["RedirectUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on RedirectUpsertResult']?: Omit<ValueTypes["RedirectUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkCreateResult']?: Omit<ValueTypes["LinkCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkDeleteResult']?: Omit<ValueTypes["LinkDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkUpdateResult']?: Omit<ValueTypes["LinkUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkUpsertResult']?: Omit<ValueTypes["LinkUpsertResult"],keyof ValueTypes["MutationResult"]>;
		__typename?: boolean | `@${string}`
}>;
	["_MutationError"]: AliasType<{
	path?:ValueTypes["_PathFragment"],
	paths?:ValueTypes["_PathFragment"],
	type?:boolean | `@${string}`,
	message?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_MutationErrorType"]:_MutationErrorType;
	["GeneralDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["General"],
		__typename?: boolean | `@${string}`
}>;
	["GeneralUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["General"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GeneralUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["General"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImageCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Image"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImageDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
	["ImageUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Image"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImageUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Image"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["GenericPage"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["GenericPage"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["GenericPage"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["GenericPage"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Linkable"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Linkable"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Linkable"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Linkable"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["SeoCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Seo"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["SeoDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Seo"],
		__typename?: boolean | `@${string}`
}>;
	["SeoUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Seo"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["SeoUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Seo"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Content"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Content"],
		__typename?: boolean | `@${string}`
}>;
	["ContentUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Content"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Content"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentBlock"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentBlock"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentBlock"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentBlock"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentReference"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentReference"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentReference"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ContentReference"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Redirect"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Redirect"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Redirect"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Redirect"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Link"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Link"],
		__typename?: boolean | `@${string}`
}>;
	["LinkUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Link"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Link"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["MutationTransaction"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	validation?:ValueTypes["_ValidationResult"],
createGeneral?: [{	data: ValueTypes["GeneralCreateInput"] | Variable<any, string>},ValueTypes["GeneralCreateResult"]],
deleteGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>},ValueTypes["GeneralDeleteResult"]],
updateGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["GeneralUpdateInput"] | Variable<any, string>},ValueTypes["GeneralUpdateResult"]],
upsertGeneral?: [{	by: ValueTypes["GeneralUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GeneralWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["GeneralUpdateInput"] | Variable<any, string>,	create: ValueTypes["GeneralCreateInput"] | Variable<any, string>},ValueTypes["GeneralUpsertResult"]],
createImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageCreateResult"]],
deleteImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImageDeleteResult"]],
updateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ImageUpdateInput"] | Variable<any, string>,	create: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageUpsertResult"]],
createGenericPage?: [{	data: ValueTypes["GenericPageCreateInput"] | Variable<any, string>},ValueTypes["GenericPageCreateResult"]],
deleteGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["GenericPageDeleteResult"]],
updateGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["GenericPageUpdateInput"] | Variable<any, string>},ValueTypes["GenericPageUpdateResult"]],
upsertGenericPage?: [{	by: ValueTypes["GenericPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["GenericPageWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["GenericPageUpdateInput"] | Variable<any, string>,	create: ValueTypes["GenericPageCreateInput"] | Variable<any, string>},ValueTypes["GenericPageUpsertResult"]],
createLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkableUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableUpsertResult"]],
createSeo?: [{	data: ValueTypes["SeoCreateInput"] | Variable<any, string>},ValueTypes["SeoCreateResult"]],
deleteSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["SeoDeleteResult"]],
updateSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["SeoUpdateInput"] | Variable<any, string>},ValueTypes["SeoUpdateResult"]],
upsertSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["SeoUpdateInput"] | Variable<any, string>,	create: ValueTypes["SeoCreateInput"] | Variable<any, string>},ValueTypes["SeoUpsertResult"]],
createContent?: [{	data: ValueTypes["ContentCreateInput"] | Variable<any, string>},ValueTypes["ContentCreateResult"]],
deleteContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentDeleteResult"]],
updateContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ContentUpdateInput"] | Variable<any, string>},ValueTypes["ContentUpdateResult"]],
upsertContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ContentUpdateInput"] | Variable<any, string>,	create: ValueTypes["ContentCreateInput"] | Variable<any, string>},ValueTypes["ContentUpsertResult"]],
createContentBlock?: [{	data: ValueTypes["ContentBlockCreateInput"] | Variable<any, string>},ValueTypes["ContentBlockCreateResult"]],
deleteContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlockDeleteResult"]],
updateContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ContentBlockUpdateInput"] | Variable<any, string>},ValueTypes["ContentBlockUpdateResult"]],
upsertContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ContentBlockUpdateInput"] | Variable<any, string>,	create: ValueTypes["ContentBlockCreateInput"] | Variable<any, string>},ValueTypes["ContentBlockUpsertResult"]],
createContentReference?: [{	data: ValueTypes["ContentReferenceCreateInput"] | Variable<any, string>},ValueTypes["ContentReferenceCreateResult"]],
deleteContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceDeleteResult"]],
updateContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ContentReferenceUpdateInput"] | Variable<any, string>},ValueTypes["ContentReferenceUpdateResult"]],
upsertContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ContentReferenceUpdateInput"] | Variable<any, string>,	create: ValueTypes["ContentReferenceCreateInput"] | Variable<any, string>},ValueTypes["ContentReferenceUpsertResult"]],
createRedirect?: [{	data: ValueTypes["RedirectCreateInput"] | Variable<any, string>},ValueTypes["RedirectCreateResult"]],
deleteRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>},ValueTypes["RedirectDeleteResult"]],
updateRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["RedirectUpdateInput"] | Variable<any, string>},ValueTypes["RedirectUpdateResult"]],
upsertRedirect?: [{	by: ValueTypes["RedirectUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RedirectWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["RedirectUpdateInput"] | Variable<any, string>,	create: ValueTypes["RedirectCreateInput"] | Variable<any, string>},ValueTypes["RedirectUpsertResult"]],
createLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkCreateResult"]],
deleteLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkDeleteResult"]],
updateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkUpsertResult"]],
	query?:ValueTypes["Query"],
		__typename?: boolean | `@${string}`
}>;
	["MutationTransactionOptions"]: {
	deferForeignKeyConstraints?: boolean | undefined | null | Variable<any, string>
};
	["Json"]:unknown;
	["_Schema"]: AliasType<{
	enums?:ValueTypes["_Enum"],
	entities?:ValueTypes["_Entity"],
		__typename?: boolean | `@${string}`
}>;
	["_Entity"]: AliasType<{
	name?:boolean | `@${string}`,
	customPrimaryAllowed?:boolean | `@${string}`,
	fields?:ValueTypes["_Field"],
	unique?:ValueTypes["_UniqueConstraint"],
		__typename?: boolean | `@${string}`
}>;
	["_UniqueConstraint"]: AliasType<{
	fields?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Field"]:AliasType<{
		name?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	nullable?:boolean | `@${string}`,
	rules?:ValueTypes["_Rule"],
	validators?:ValueTypes["_Validator"];
		['...on _Column']?: Omit<ValueTypes["_Column"],keyof ValueTypes["_Field"]>;
		['...on _Relation']?: Omit<ValueTypes["_Relation"],keyof ValueTypes["_Field"]>;
		__typename?: boolean | `@${string}`
}>;
	["_Column"]: AliasType<{
	name?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	enumName?:boolean | `@${string}`,
	defaultValue?:boolean | `@${string}`,
	nullable?:boolean | `@${string}`,
	rules?:ValueTypes["_Rule"],
	validators?:ValueTypes["_Validator"],
		__typename?: boolean | `@${string}`
}>;
	["_OnDeleteBehaviour"]:_OnDeleteBehaviour;
	["_RelationSide"]:_RelationSide;
	["_OrderByDirection"]:_OrderByDirection;
	["_OrderBy"]: AliasType<{
	path?:boolean | `@${string}`,
	direction?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Relation"]: AliasType<{
	name?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	side?:boolean | `@${string}`,
	targetEntity?:boolean | `@${string}`,
	ownedBy?:boolean | `@${string}`,
	inversedBy?:boolean | `@${string}`,
	nullable?:boolean | `@${string}`,
	onDelete?:boolean | `@${string}`,
	orphanRemoval?:boolean | `@${string}`,
	orderBy?:ValueTypes["_OrderBy"],
	rules?:ValueTypes["_Rule"],
	validators?:ValueTypes["_Validator"],
		__typename?: boolean | `@${string}`
}>;
	["_Rule"]: AliasType<{
	message?:ValueTypes["_RuleMessage"],
	validator?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Validator"]: AliasType<{
	operation?:boolean | `@${string}`,
	arguments?:ValueTypes["_Argument"],
		__typename?: boolean | `@${string}`
}>;
	["_Argument"]: AliasType<{		["...on _ValidatorArgument"] : ValueTypes["_ValidatorArgument"],
		["...on _PathArgument"] : ValueTypes["_PathArgument"],
		["...on _LiteralArgument"] : ValueTypes["_LiteralArgument"]
		__typename?: boolean | `@${string}`
}>;
	["_ValidatorArgument"]: AliasType<{
	validator?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_PathArgument"]: AliasType<{
	path?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_LiteralArgument"]: AliasType<{
	value?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_RuleMessage"]: AliasType<{
	text?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Enum"]: AliasType<{
	name?:boolean | `@${string}`,
	values?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["S3SignedUpload"]: AliasType<{
	url?:boolean | `@${string}`,
	headers?:ValueTypes["S3Header"],
	method?:boolean | `@${string}`,
	/** Allowed patterns:
** */
	objectKey?:boolean | `@${string}`,
	bucket?:boolean | `@${string}`,
	publicUrl?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["S3Header"]: AliasType<{
	key?:boolean | `@${string}`,
	value?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["S3SignedRead"]: AliasType<{
	url?:boolean | `@${string}`,
	headers?:ValueTypes["S3Header"],
	method?:boolean | `@${string}`,
	/** Allowed patterns:
** */
	objectKey?:boolean | `@${string}`,
	bucket?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>
  }

export type ResolverInputTypes = {
    ["Query"]: AliasType<{
getGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null},ResolverInputTypes["General"]],
listGeneral?: [{	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GeneralOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["General"]],
paginateGeneral?: [{	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GeneralOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["GeneralConnection"]],
validateCreateGeneral?: [{	data: ResolverInputTypes["GeneralCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	data: ResolverInputTypes["GeneralUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
listImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Image"]],
paginateImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImageConnection"]],
validateCreateImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null},ResolverInputTypes["GenericPage"]],
listGenericPage?: [{	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GenericPageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["GenericPage"]],
paginateGenericPage?: [{	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GenericPageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["GenericPageConnection"]],
validateCreateGenericPage?: [{	data: ResolverInputTypes["GenericPageCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	data: ResolverInputTypes["GenericPageUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
listLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Linkable"]],
paginateLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
listSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Seo"]],
paginateSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["SeoConnection"]],
validateCreateSeo?: [{	data: ResolverInputTypes["SeoCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	data: ResolverInputTypes["SeoUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["Content"]],
listContent?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Content"]],
paginateContent?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentConnection"]],
validateCreateContent?: [{	data: ResolverInputTypes["ContentCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	data: ResolverInputTypes["ContentUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentBlockConnection"]],
validateCreateContentBlock?: [{	data: ResolverInputTypes["ContentBlockCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	data: ResolverInputTypes["ContentBlockUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReference"]],
listContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceConnection"]],
validateCreateContentReference?: [{	data: ResolverInputTypes["ContentReferenceCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	data: ResolverInputTypes["ContentReferenceUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
getRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null},ResolverInputTypes["Redirect"]],
listRedirect?: [{	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RedirectOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Redirect"]],
paginateRedirect?: [{	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RedirectOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RedirectConnection"]],
validateCreateRedirect?: [{	data: ResolverInputTypes["RedirectCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	data: ResolverInputTypes["RedirectUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
listLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Link"]],
paginateLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkConnection"]],
validateCreateLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
	transaction?:ResolverInputTypes["QueryTransaction"],
	_info?:ResolverInputTypes["Info"],
	schema?:ResolverInputTypes["_Schema"],
	s3DummyQuery?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["General"]: AliasType<{
	_meta?:ResolverInputTypes["GeneralMeta"],
	id?:boolean | `@${string}`,
	unique?:boolean | `@${string}`,
	dummy?:boolean | `@${string}`,
image?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
seo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
		__typename?: boolean | `@${string}`
}>;
	["GeneralMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	unique?:ResolverInputTypes["FieldMeta"],
	dummy?:ResolverInputTypes["FieldMeta"],
	image?:ResolverInputTypes["FieldMeta"],
	seo?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["FieldMeta"]: AliasType<{
	readable?:boolean | `@${string}`,
	updatable?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["UUID"]:unknown;
	["One"]:One;
	["Image"]: AliasType<{
	_meta?:ResolverInputTypes["ImageMeta"],
	id?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	size?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	alt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ImageMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	url?:ResolverInputTypes["FieldMeta"],
	width?:ResolverInputTypes["FieldMeta"],
	height?:ResolverInputTypes["FieldMeta"],
	size?:ResolverInputTypes["FieldMeta"],
	type?:ResolverInputTypes["FieldMeta"],
	alt?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ImageWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	url?: ResolverInputTypes["StringCondition"] | undefined | null,
	width?: ResolverInputTypes["IntCondition"] | undefined | null,
	height?: ResolverInputTypes["IntCondition"] | undefined | null,
	size?: ResolverInputTypes["IntCondition"] | undefined | null,
	type?: ResolverInputTypes["StringCondition"] | undefined | null,
	alt?: ResolverInputTypes["StringCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["ImageWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ImageWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ImageWhere"] | undefined | null
};
	["UUIDCondition"]: {
	and?: Array<ResolverInputTypes["UUIDCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["UUIDCondition"]> | undefined | null,
	not?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["UUID"] | undefined | null,
	notEq?: ResolverInputTypes["UUID"] | undefined | null,
	in?: Array<ResolverInputTypes["UUID"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["UUID"]> | undefined | null,
	lt?: ResolverInputTypes["UUID"] | undefined | null,
	lte?: ResolverInputTypes["UUID"] | undefined | null,
	gt?: ResolverInputTypes["UUID"] | undefined | null,
	gte?: ResolverInputTypes["UUID"] | undefined | null
};
	["StringCondition"]: {
	and?: Array<ResolverInputTypes["StringCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["StringCondition"]> | undefined | null,
	not?: ResolverInputTypes["StringCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: string | undefined | null,
	notEq?: string | undefined | null,
	in?: Array<string> | undefined | null,
	notIn?: Array<string> | undefined | null,
	lt?: string | undefined | null,
	lte?: string | undefined | null,
	gt?: string | undefined | null,
	gte?: string | undefined | null,
	contains?: string | undefined | null,
	startsWith?: string | undefined | null,
	endsWith?: string | undefined | null,
	containsCI?: string | undefined | null,
	startsWithCI?: string | undefined | null,
	endsWithCI?: string | undefined | null
};
	["IntCondition"]: {
	and?: Array<ResolverInputTypes["IntCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["IntCondition"]> | undefined | null,
	not?: ResolverInputTypes["IntCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: number | undefined | null,
	notEq?: number | undefined | null,
	in?: Array<number> | undefined | null,
	notIn?: Array<number> | undefined | null,
	lt?: number | undefined | null,
	lte?: number | undefined | null,
	gt?: number | undefined | null,
	gte?: number | undefined | null
};
	["Seo"]: AliasType<{
	_meta?:ResolverInputTypes["SeoMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
	ogTitle?:boolean | `@${string}`,
	ogDescription?:boolean | `@${string}`,
	noIndex?:boolean | `@${string}`,
	noFollow?:boolean | `@${string}`,
ogImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
		__typename?: boolean | `@${string}`
}>;
	["SeoMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	description?:ResolverInputTypes["FieldMeta"],
	ogTitle?:ResolverInputTypes["FieldMeta"],
	ogDescription?:ResolverInputTypes["FieldMeta"],
	noIndex?:ResolverInputTypes["FieldMeta"],
	noFollow?:ResolverInputTypes["FieldMeta"],
	ogImage?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["SeoWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	description?: ResolverInputTypes["StringCondition"] | undefined | null,
	ogTitle?: ResolverInputTypes["StringCondition"] | undefined | null,
	ogDescription?: ResolverInputTypes["StringCondition"] | undefined | null,
	noIndex?: ResolverInputTypes["BooleanCondition"] | undefined | null,
	noFollow?: ResolverInputTypes["BooleanCondition"] | undefined | null,
	ogImage?: ResolverInputTypes["ImageWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["SeoWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["SeoWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["SeoWhere"] | undefined | null
};
	["BooleanCondition"]: {
	and?: Array<ResolverInputTypes["BooleanCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["BooleanCondition"]> | undefined | null,
	not?: ResolverInputTypes["BooleanCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: boolean | undefined | null,
	notEq?: boolean | undefined | null,
	in?: Array<boolean> | undefined | null,
	notIn?: Array<boolean> | undefined | null,
	lt?: boolean | undefined | null,
	lte?: boolean | undefined | null,
	gt?: boolean | undefined | null,
	gte?: boolean | undefined | null
};
	["GeneralUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	unique?: ResolverInputTypes["One"] | undefined | null,
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["SeoUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	ogImage?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null
};
	["ImageUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
	["GeneralWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	unique?: ResolverInputTypes["OneCondition"] | undefined | null,
	dummy?: ResolverInputTypes["StringCondition"] | undefined | null,
	image?: ResolverInputTypes["ImageWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["GeneralWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["GeneralWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["GeneralWhere"] | undefined | null
};
	["OneCondition"]: {
	and?: Array<ResolverInputTypes["OneCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["OneCondition"]> | undefined | null,
	not?: ResolverInputTypes["OneCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["One"] | undefined | null,
	notEq?: ResolverInputTypes["One"] | undefined | null,
	in?: Array<ResolverInputTypes["One"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["One"]> | undefined | null,
	lt?: ResolverInputTypes["One"] | undefined | null,
	lte?: ResolverInputTypes["One"] | undefined | null,
	gt?: ResolverInputTypes["One"] | undefined | null,
	gte?: ResolverInputTypes["One"] | undefined | null
};
	["GeneralOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	unique?: ResolverInputTypes["OrderDirection"] | undefined | null,
	dummy?: ResolverInputTypes["OrderDirection"] | undefined | null,
	image?: ResolverInputTypes["ImageOrderBy"] | undefined | null,
	seo?: ResolverInputTypes["SeoOrderBy"] | undefined | null
};
	["OrderDirection"]:OrderDirection;
	["ImageOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	url?: ResolverInputTypes["OrderDirection"] | undefined | null,
	width?: ResolverInputTypes["OrderDirection"] | undefined | null,
	height?: ResolverInputTypes["OrderDirection"] | undefined | null,
	size?: ResolverInputTypes["OrderDirection"] | undefined | null,
	type?: ResolverInputTypes["OrderDirection"] | undefined | null,
	alt?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["SeoOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	description?: ResolverInputTypes["OrderDirection"] | undefined | null,
	ogTitle?: ResolverInputTypes["OrderDirection"] | undefined | null,
	ogDescription?: ResolverInputTypes["OrderDirection"] | undefined | null,
	noIndex?: ResolverInputTypes["OrderDirection"] | undefined | null,
	noFollow?: ResolverInputTypes["OrderDirection"] | undefined | null,
	ogImage?: ResolverInputTypes["ImageOrderBy"] | undefined | null
};
	["GeneralConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["GeneralEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PageInfo"]: AliasType<{
	totalCount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GeneralEdge"]: AliasType<{
	node?:ResolverInputTypes["General"],
		__typename?: boolean | `@${string}`
}>;
	["_ValidationResult"]: AliasType<{
	valid?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_ValidationError"],
		__typename?: boolean | `@${string}`
}>;
	["_ValidationError"]: AliasType<{
	path?:ResolverInputTypes["_PathFragment"],
	message?:ResolverInputTypes["_ValidationMessage"],
		__typename?: boolean | `@${string}`
}>;
	["_PathFragment"]: AliasType<{
	_FieldPathFragment?:ResolverInputTypes["_FieldPathFragment"],
	_IndexPathFragment?:ResolverInputTypes["_IndexPathFragment"],
		__typename?: boolean | `@${string}`
}>;
	["_FieldPathFragment"]: AliasType<{
	field?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_IndexPathFragment"]: AliasType<{
	index?:boolean | `@${string}`,
	alias?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_ValidationMessage"]: AliasType<{
	text?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GeneralCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	unique?: ResolverInputTypes["One"] | undefined | null,
	dummy?: string | undefined | null,
	image?: ResolverInputTypes["GeneralCreateImageEntityRelationInput"] | undefined | null,
	seo?: ResolverInputTypes["GeneralCreateSeoEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GeneralCreateImageEntityRelationInput"]: {
	connect?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null
};
	["ImageCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null,
	width?: number | undefined | null,
	height?: number | undefined | null,
	size?: number | undefined | null,
	type?: string | undefined | null,
	alt?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GeneralCreateSeoEntityRelationInput"]: {
	connect?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["SeoCreateInput"] | undefined | null
};
	["SeoCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	ogTitle?: string | undefined | null,
	ogDescription?: string | undefined | null,
	noIndex?: boolean | undefined | null,
	noFollow?: boolean | undefined | null,
	ogImage?: ResolverInputTypes["SeoCreateOgImageEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["SeoCreateOgImageEntityRelationInput"]: {
	connect?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null
};
	["GeneralUpdateInput"]: {
	unique?: ResolverInputTypes["One"] | undefined | null,
	dummy?: string | undefined | null,
	image?: ResolverInputTypes["GeneralUpdateImageEntityRelationInput"] | undefined | null,
	seo?: ResolverInputTypes["GeneralUpdateSeoEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GeneralUpdateImageEntityRelationInput"]: {
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ImageUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["GeneralUpsertImageRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["ImageUpdateInput"]: {
	url?: string | undefined | null,
	width?: number | undefined | null,
	height?: number | undefined | null,
	size?: number | undefined | null,
	type?: string | undefined | null,
	alt?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GeneralUpsertImageRelationInput"]: {
	update?: ResolverInputTypes["ImageUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null
};
	["GeneralUpdateSeoEntityRelationInput"]: {
	create?: ResolverInputTypes["SeoCreateInput"] | undefined | null,
	update?: ResolverInputTypes["SeoUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["GeneralUpsertSeoRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["SeoUpdateInput"]: {
	title?: string | undefined | null,
	description?: string | undefined | null,
	ogTitle?: string | undefined | null,
	ogDescription?: string | undefined | null,
	noIndex?: boolean | undefined | null,
	noFollow?: boolean | undefined | null,
	ogImage?: ResolverInputTypes["SeoUpdateOgImageEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["SeoUpdateOgImageEntityRelationInput"]: {
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ImageUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["SeoUpsertOgImageRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["SeoUpsertOgImageRelationInput"]: {
	update?: ResolverInputTypes["ImageUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null
};
	["GeneralUpsertSeoRelationInput"]: {
	update?: ResolverInputTypes["SeoUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["SeoCreateInput"] | undefined | null
};
	["ImageConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ImageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImageEdge"]: AliasType<{
	node?:ResolverInputTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPage"]: AliasType<{
	_meta?:ResolverInputTypes["GenericPageMeta"],
	id?:boolean | `@${string}`,
seo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
link?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
	title?:boolean | `@${string}`,
content?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["Content"]],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	seo?:ResolverInputTypes["FieldMeta"],
	link?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	content?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Linkable"]: AliasType<{
	_meta?:ResolverInputTypes["LinkableMeta"],
	id?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
genericPage?: [{	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null},ResolverInputTypes["GenericPage"]],
redirect?: [{	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null},ResolverInputTypes["Redirect"]],
		__typename?: boolean | `@${string}`
}>;
	["LinkableMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	url?:ResolverInputTypes["FieldMeta"],
	genericPage?:ResolverInputTypes["FieldMeta"],
	redirect?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	seo?: ResolverInputTypes["SeoWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	content?: ResolverInputTypes["ContentWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["GenericPageWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["GenericPageWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["GenericPageWhere"] | undefined | null
};
	["LinkableWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	url?: ResolverInputTypes["StringCondition"] | undefined | null,
	genericPage?: ResolverInputTypes["GenericPageWhere"] | undefined | null,
	redirect?: ResolverInputTypes["RedirectWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["LinkableWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["LinkableWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["LinkableWhere"] | undefined | null
};
	["RedirectWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	link?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	target?: ResolverInputTypes["LinkWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["RedirectWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["RedirectWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["RedirectWhere"] | undefined | null
};
	["LinkWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	type?: ResolverInputTypes["LinkTypeCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	externalLink?: ResolverInputTypes["StringCondition"] | undefined | null,
	internalLink?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["LinkWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["LinkWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["LinkWhere"] | undefined | null
};
	["LinkTypeCondition"]: {
	and?: Array<ResolverInputTypes["LinkTypeCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["LinkTypeCondition"]> | undefined | null,
	not?: ResolverInputTypes["LinkTypeCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["LinkType"] | undefined | null,
	notEq?: ResolverInputTypes["LinkType"] | undefined | null,
	in?: Array<ResolverInputTypes["LinkType"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["LinkType"]> | undefined | null,
	lt?: ResolverInputTypes["LinkType"] | undefined | null,
	lte?: ResolverInputTypes["LinkType"] | undefined | null,
	gt?: ResolverInputTypes["LinkType"] | undefined | null,
	gte?: ResolverInputTypes["LinkType"] | undefined | null
};
	["LinkType"]:LinkType;
	["ContentWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	blocks?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["ContentWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ContentWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ContentWhere"] | undefined | null
};
	["ContentBlockWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	json?: ResolverInputTypes["StringCondition"] | undefined | null,
	content?: ResolverInputTypes["ContentWhere"] | undefined | null,
	references?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["ContentBlockWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ContentBlockWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ContentBlockWhere"] | undefined | null
};
	["ContentReferenceWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	type?: ResolverInputTypes["ContentReferenceTypeCondition"] | undefined | null,
	primaryText?: ResolverInputTypes["StringCondition"] | undefined | null,
	block?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,
	image?: ResolverInputTypes["ImageWhere"] | undefined | null,
	linkables?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["ContentReferenceWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ContentReferenceWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null
};
	["ContentReferenceTypeCondition"]: {
	and?: Array<ResolverInputTypes["ContentReferenceTypeCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["ContentReferenceTypeCondition"]> | undefined | null,
	not?: ResolverInputTypes["ContentReferenceTypeCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	notEq?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	in?: Array<ResolverInputTypes["ContentReferenceType"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["ContentReferenceType"]> | undefined | null,
	lt?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	lte?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	gt?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	gte?: ResolverInputTypes["ContentReferenceType"] | undefined | null
};
	["ContentReferenceType"]:ContentReferenceType;
	["ContentReferenceLinkableItemWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	item?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	reference?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null
};
	["Redirect"]: AliasType<{
	_meta?:ResolverInputTypes["RedirectMeta"],
	id?:boolean | `@${string}`,
link?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
target?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
		__typename?: boolean | `@${string}`
}>;
	["RedirectMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	link?:ResolverInputTypes["FieldMeta"],
	target?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Link"]: AliasType<{
	_meta?:ResolverInputTypes["LinkMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	externalLink?:boolean | `@${string}`,
internalLink?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
		__typename?: boolean | `@${string}`
}>;
	["LinkMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	type?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	externalLink?:ResolverInputTypes["FieldMeta"],
	internalLink?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Content"]: AliasType<{
	_meta?:ResolverInputTypes["ContentMeta"],
	id?:boolean | `@${string}`,
blocks?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentBlock"]],
blocksByReferences?: [{	by: ResolverInputTypes["ContentBlocksByReferencesUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
paginateBlocks?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentBlockConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	blocks?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlock"]: AliasType<{
	_meta?:ResolverInputTypes["ContentBlockMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
	json?:boolean | `@${string}`,
content?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["Content"]],
references?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReference"]],
referencesByLinkables?: [{	by: ResolverInputTypes["ContentBlockReferencesByLinkablesUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReference"]],
paginateReferences?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	json?:ResolverInputTypes["FieldMeta"],
	content?:ResolverInputTypes["FieldMeta"],
	references?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReference"]: AliasType<{
	_meta?:ResolverInputTypes["ContentReferenceMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	primaryText?:boolean | `@${string}`,
block?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
image?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
linkables?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
linkablesByItem?: [{	by: ResolverInputTypes["ContentReferenceLinkablesByItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateLinkables?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	type?:ResolverInputTypes["FieldMeta"],
	primaryText?:ResolverInputTypes["FieldMeta"],
	block?:ResolverInputTypes["FieldMeta"],
	image?:ResolverInputTypes["FieldMeta"],
	linkables?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItem"]: AliasType<{
	_meta?:ResolverInputTypes["ContentReferenceLinkableItemMeta"],
	id?:boolean | `@${string}`,
item?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
reference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReference"]],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	item?:ResolverInputTypes["FieldMeta"],
	reference?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	item?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	reference?: ResolverInputTypes["ContentReferenceOrderBy"] | undefined | null
};
	["LinkableOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	url?: ResolverInputTypes["OrderDirection"] | undefined | null,
	genericPage?: ResolverInputTypes["GenericPageOrderBy"] | undefined | null,
	redirect?: ResolverInputTypes["RedirectOrderBy"] | undefined | null
};
	["GenericPageOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	seo?: ResolverInputTypes["SeoOrderBy"] | undefined | null,
	link?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	content?: ResolverInputTypes["ContentOrderBy"] | undefined | null
};
	["ContentOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["RedirectOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	link?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	target?: ResolverInputTypes["LinkOrderBy"] | undefined | null
};
	["LinkOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	type?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	externalLink?: ResolverInputTypes["OrderDirection"] | undefined | null,
	internalLink?: ResolverInputTypes["LinkableOrderBy"] | undefined | null
};
	["ContentReferenceOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	type?: ResolverInputTypes["OrderDirection"] | undefined | null,
	primaryText?: ResolverInputTypes["OrderDirection"] | undefined | null,
	block?: ResolverInputTypes["ContentBlockOrderBy"] | undefined | null,
	image?: ResolverInputTypes["ImageOrderBy"] | undefined | null
};
	["ContentBlockOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	json?: ResolverInputTypes["OrderDirection"] | undefined | null,
	content?: ResolverInputTypes["ContentOrderBy"] | undefined | null
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
	item?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["LinkableUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null,
	genericPage?: ResolverInputTypes["GenericPageUniqueWhere"] | undefined | null,
	redirect?: ResolverInputTypes["RedirectUniqueWhere"] | undefined | null
};
	["GenericPageUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	content?: ResolverInputTypes["ContentUniqueWhere"] | undefined | null
};
	["ContentUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	blocks?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null
};
	["ContentBlockUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	references?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null
};
	["ContentReferenceUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	linkables?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	item?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["RedirectUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	target?: ResolverInputTypes["LinkUniqueWhere"] | undefined | null
};
	["LinkUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
	["ContentReferenceLinkableItemConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ContentReferenceLinkableItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemEdge"]: AliasType<{
	node?:ResolverInputTypes["ContentReferenceLinkableItem"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
	linkables?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null
};
	["ContentReferenceConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ContentReferenceEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceEdge"]: AliasType<{
	node?:ResolverInputTypes["ContentReference"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlocksByReferencesUniqueWhere"]: {
	references?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null
};
	["ContentBlockConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ContentBlockEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockEdge"]: AliasType<{
	node?:ResolverInputTypes["ContentBlock"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["GenericPageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageEdge"]: AliasType<{
	node?:ResolverInputTypes["GenericPage"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	seo?: ResolverInputTypes["GenericPageCreateSeoEntityRelationInput"] | undefined | null,
	link?: ResolverInputTypes["GenericPageCreateLinkEntityRelationInput"] | undefined | null,
	title?: string | undefined | null,
	content?: ResolverInputTypes["GenericPageCreateContentEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GenericPageCreateSeoEntityRelationInput"]: {
	connect?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["SeoCreateInput"] | undefined | null
};
	["GenericPageCreateLinkEntityRelationInput"]: {
	connect?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["LinkableWithoutGenericPageCreateInput"] | undefined | null
};
	["LinkableWithoutGenericPageCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null,
	redirect?: ResolverInputTypes["LinkableCreateRedirectEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LinkableCreateRedirectEntityRelationInput"]: {
	connect?: ResolverInputTypes["RedirectUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["RedirectWithoutLinkCreateInput"] | undefined | null
};
	["RedirectWithoutLinkCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	target?: ResolverInputTypes["RedirectCreateTargetEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RedirectCreateTargetEntityRelationInput"]: {
	connect?: ResolverInputTypes["LinkUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["LinkCreateInput"] | undefined | null
};
	["LinkCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	type?: ResolverInputTypes["LinkType"] | undefined | null,
	title?: string | undefined | null,
	externalLink?: string | undefined | null,
	internalLink?: ResolverInputTypes["LinkCreateInternalLinkEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LinkCreateInternalLinkEntityRelationInput"]: {
	connect?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["LinkableCreateInput"] | undefined | null
};
	["LinkableCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null,
	genericPage?: ResolverInputTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined | null,
	redirect?: ResolverInputTypes["LinkableCreateRedirectEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LinkableCreateGenericPageEntityRelationInput"]: {
	connect?: ResolverInputTypes["GenericPageUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["GenericPageWithoutLinkCreateInput"] | undefined | null
};
	["GenericPageWithoutLinkCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	seo?: ResolverInputTypes["GenericPageCreateSeoEntityRelationInput"] | undefined | null,
	title?: string | undefined | null,
	content?: ResolverInputTypes["GenericPageCreateContentEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GenericPageCreateContentEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ContentCreateInput"] | undefined | null
};
	["ContentCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	blocks?: Array<ResolverInputTypes["ContentCreateBlocksEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentCreateBlocksEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ContentBlockWithoutContentCreateInput"] | undefined | null,
	alias?: string | undefined | null
};
	["ContentBlockWithoutContentCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	order?: number | undefined | null,
	json?: string | undefined | null,
	references?: Array<ResolverInputTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentBlockCreateReferencesEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ContentReferenceWithoutBlockCreateInput"] | undefined | null,
	alias?: string | undefined | null
};
	["ContentReferenceWithoutBlockCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	type?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	primaryText?: string | undefined | null,
	image?: ResolverInputTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined | null,
	linkables?: Array<ResolverInputTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceCreateImageEntityRelationInput"]: {
	connect?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
};
	["GenericPageUpdateInput"]: {
	seo?: ResolverInputTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined | null,
	link?: ResolverInputTypes["GenericPageUpdateLinkEntityRelationInput"] | undefined | null,
	title?: string | undefined | null,
	content?: ResolverInputTypes["GenericPageUpdateContentEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GenericPageUpdateSeoEntityRelationInput"]: {
	create?: ResolverInputTypes["SeoCreateInput"] | undefined | null,
	update?: ResolverInputTypes["SeoUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["GenericPageUpsertSeoRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["GenericPageUpsertSeoRelationInput"]: {
	update?: ResolverInputTypes["SeoUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["SeoCreateInput"] | undefined | null
};
	["GenericPageUpdateLinkEntityRelationInput"]: {
	create?: ResolverInputTypes["LinkableWithoutGenericPageCreateInput"] | undefined | null,
	update?: ResolverInputTypes["LinkableWithoutGenericPageUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["GenericPageUpsertLinkRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["LinkableWithoutGenericPageUpdateInput"]: {
	url?: string | undefined | null,
	redirect?: ResolverInputTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LinkableUpdateRedirectEntityRelationInput"]: {
	create?: ResolverInputTypes["RedirectWithoutLinkCreateInput"] | undefined | null,
	update?: ResolverInputTypes["RedirectWithoutLinkUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["LinkableUpsertRedirectRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["RedirectUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["RedirectWithoutLinkUpdateInput"]: {
	target?: ResolverInputTypes["RedirectUpdateTargetEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RedirectUpdateTargetEntityRelationInput"]: {
	create?: ResolverInputTypes["LinkCreateInput"] | undefined | null,
	update?: ResolverInputTypes["LinkUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["RedirectUpsertTargetRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["LinkUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["LinkUpdateInput"]: {
	type?: ResolverInputTypes["LinkType"] | undefined | null,
	title?: string | undefined | null,
	externalLink?: string | undefined | null,
	internalLink?: ResolverInputTypes["LinkUpdateInternalLinkEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LinkUpdateInternalLinkEntityRelationInput"]: {
	create?: ResolverInputTypes["LinkableCreateInput"] | undefined | null,
	update?: ResolverInputTypes["LinkableUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["LinkUpsertInternalLinkRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["LinkableUpdateInput"]: {
	url?: string | undefined | null,
	genericPage?: ResolverInputTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined | null,
	redirect?: ResolverInputTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LinkableUpdateGenericPageEntityRelationInput"]: {
	create?: ResolverInputTypes["GenericPageWithoutLinkCreateInput"] | undefined | null,
	update?: ResolverInputTypes["GenericPageWithoutLinkUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["LinkableUpsertGenericPageRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["GenericPageUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["GenericPageWithoutLinkUpdateInput"]: {
	seo?: ResolverInputTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined | null,
	title?: string | undefined | null,
	content?: ResolverInputTypes["GenericPageUpdateContentEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["GenericPageUpdateContentEntityRelationInput"]: {
	create?: ResolverInputTypes["ContentCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ContentUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["GenericPageUpsertContentRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ContentUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["ContentUpdateInput"]: {
	blocks?: Array<ResolverInputTypes["ContentUpdateBlocksEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentUpdateBlocksEntityRelationInput"]: {
	create?: ResolverInputTypes["ContentBlockWithoutContentCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ContentUpdateBlocksRelationInput"] | undefined | null,
	upsert?: ResolverInputTypes["ContentUpsertBlocksRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	disconnect?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	delete?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
};
	["ContentUpdateBlocksRelationInput"]: {
	by?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	data?: ResolverInputTypes["ContentBlockWithoutContentUpdateInput"] | undefined | null
};
	["ContentBlockWithoutContentUpdateInput"]: {
	order?: number | undefined | null,
	json?: string | undefined | null,
	references?: Array<ResolverInputTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentBlockUpdateReferencesEntityRelationInput"]: {
	create?: ResolverInputTypes["ContentReferenceWithoutBlockCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ContentBlockUpdateReferencesRelationInput"] | undefined | null,
	upsert?: ResolverInputTypes["ContentBlockUpsertReferencesRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null,
	disconnect?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null,
	delete?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
};
	["ContentBlockUpdateReferencesRelationInput"]: {
	by?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null,
	data?: ResolverInputTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined | null
};
	["ContentReferenceWithoutBlockUpdateInput"]: {
	type?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	primaryText?: string | undefined | null,
	image?: ResolverInputTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined | null,
	linkables?: Array<ResolverInputTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceUpdateImageEntityRelationInput"]: {
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ImageUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["ContentReferenceUpsertImageRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["ContentReferenceUpsertImageRelationInput"]: {
	update?: ResolverInputTypes["ImageUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ImageCreateInput"] | undefined | null
};
	["ContentReferenceUpdateLinkablesEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null,
	disconnect?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null,
	delete?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
};
	["ContentBlockUpsertReferencesRelationInput"]: {
	by?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null,
	update?: ResolverInputTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ContentReferenceWithoutBlockCreateInput"] | undefined | null
};
	["ContentUpsertBlocksRelationInput"]: {
	by?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	update?: ResolverInputTypes["ContentBlockWithoutContentUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ContentBlockWithoutContentCreateInput"] | undefined | null
};
	["GenericPageUpsertContentRelationInput"]: {
	update?: ResolverInputTypes["ContentUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ContentCreateInput"] | undefined | null
};
	["LinkableUpsertGenericPageRelationInput"]: {
	update?: ResolverInputTypes["GenericPageWithoutLinkUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["GenericPageWithoutLinkCreateInput"] | undefined | null
};
	["LinkUpsertInternalLinkRelationInput"]: {
	update?: ResolverInputTypes["LinkableUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["LinkableCreateInput"] | undefined | null
};
	["RedirectUpsertTargetRelationInput"]: {
	update?: ResolverInputTypes["LinkUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["LinkCreateInput"] | undefined | null
};
	["LinkableUpsertRedirectRelationInput"]: {
	update?: ResolverInputTypes["RedirectWithoutLinkUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["RedirectWithoutLinkCreateInput"] | undefined | null
};
	["GenericPageUpsertLinkRelationInput"]: {
	update?: ResolverInputTypes["LinkableWithoutGenericPageUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["LinkableWithoutGenericPageCreateInput"] | undefined | null
};
	["LinkableConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["LinkableEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableEdge"]: AliasType<{
	node?:ResolverInputTypes["Linkable"],
		__typename?: boolean | `@${string}`
}>;
	["SeoConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["SeoEdge"],
		__typename?: boolean | `@${string}`
}>;
	["SeoEdge"]: AliasType<{
	node?:ResolverInputTypes["Seo"],
		__typename?: boolean | `@${string}`
}>;
	["ContentConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ContentEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentEdge"]: AliasType<{
	node?:ResolverInputTypes["Content"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	order?: number | undefined | null,
	json?: string | undefined | null,
	content?: ResolverInputTypes["ContentBlockCreateContentEntityRelationInput"] | undefined | null,
	references?: Array<ResolverInputTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentBlockCreateContentEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ContentWithoutBlocksCreateInput"] | undefined | null
};
	["ContentWithoutBlocksCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentBlockUpdateInput"]: {
	order?: number | undefined | null,
	json?: string | undefined | null,
	content?: ResolverInputTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined | null,
	references?: Array<ResolverInputTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentBlockUpdateContentEntityRelationInput"]: {
	create?: ResolverInputTypes["ContentWithoutBlocksCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ContentWithoutBlocksUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["ContentBlockUpsertContentRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ContentUniqueWhere"] | undefined | null,
	delete?: boolean | undefined | null
};
	["ContentWithoutBlocksUpdateInput"]: {
	_dummy_field_?: boolean | undefined | null
};
	["ContentBlockUpsertContentRelationInput"]: {
	update?: ResolverInputTypes["ContentWithoutBlocksUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ContentWithoutBlocksCreateInput"] | undefined | null
};
	["ContentReferenceCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	type?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	primaryText?: string | undefined | null,
	block?: ResolverInputTypes["ContentReferenceCreateBlockEntityRelationInput"] | undefined | null,
	image?: ResolverInputTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined | null,
	linkables?: Array<ResolverInputTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceCreateBlockEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ContentBlockWithoutReferencesCreateInput"] | undefined | null
};
	["ContentBlockWithoutReferencesCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	order?: number | undefined | null,
	json?: string | undefined | null,
	content?: ResolverInputTypes["ContentBlockCreateContentEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceUpdateInput"]: {
	type?: ResolverInputTypes["ContentReferenceType"] | undefined | null,
	primaryText?: string | undefined | null,
	block?: ResolverInputTypes["ContentReferenceUpdateBlockEntityRelationInput"] | undefined | null,
	image?: ResolverInputTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined | null,
	linkables?: Array<ResolverInputTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceUpdateBlockEntityRelationInput"]: {
	create?: ResolverInputTypes["ContentBlockWithoutReferencesCreateInput"] | undefined | null,
	update?: ResolverInputTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["ContentReferenceUpsertBlockRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null,
	delete?: boolean | undefined | null
};
	["ContentBlockWithoutReferencesUpdateInput"]: {
	order?: number | undefined | null,
	json?: string | undefined | null,
	content?: ResolverInputTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceUpsertBlockRelationInput"]: {
	update?: ResolverInputTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["ContentBlockWithoutReferencesCreateInput"] | undefined | null
};
	["RedirectConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["RedirectEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectEdge"]: AliasType<{
	node?:ResolverInputTypes["Redirect"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	link?: ResolverInputTypes["RedirectCreateLinkEntityRelationInput"] | undefined | null,
	target?: ResolverInputTypes["RedirectCreateTargetEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RedirectCreateLinkEntityRelationInput"]: {
	connect?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["LinkableWithoutRedirectCreateInput"] | undefined | null
};
	["LinkableWithoutRedirectCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null,
	genericPage?: ResolverInputTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RedirectUpdateInput"]: {
	link?: ResolverInputTypes["RedirectUpdateLinkEntityRelationInput"] | undefined | null,
	target?: ResolverInputTypes["RedirectUpdateTargetEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RedirectUpdateLinkEntityRelationInput"]: {
	create?: ResolverInputTypes["LinkableWithoutRedirectCreateInput"] | undefined | null,
	update?: ResolverInputTypes["LinkableWithoutRedirectUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["RedirectUpsertLinkRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	disconnect?: boolean | undefined | null,
	delete?: boolean | undefined | null
};
	["LinkableWithoutRedirectUpdateInput"]: {
	url?: string | undefined | null,
	genericPage?: ResolverInputTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RedirectUpsertLinkRelationInput"]: {
	update?: ResolverInputTypes["LinkableWithoutRedirectUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["LinkableWithoutRedirectCreateInput"] | undefined | null
};
	["LinkConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["LinkEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LinkEdge"]: AliasType<{
	node?:ResolverInputTypes["Link"],
		__typename?: boolean | `@${string}`
}>;
	["QueryTransaction"]: AliasType<{
getGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null},ResolverInputTypes["General"]],
listGeneral?: [{	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GeneralOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["General"]],
paginateGeneral?: [{	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GeneralOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["GeneralConnection"]],
validateCreateGeneral?: [{	data: ResolverInputTypes["GeneralCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	data: ResolverInputTypes["GeneralUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
listImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Image"]],
paginateImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImageConnection"]],
validateCreateImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null},ResolverInputTypes["GenericPage"]],
listGenericPage?: [{	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GenericPageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["GenericPage"]],
paginateGenericPage?: [{	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["GenericPageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["GenericPageConnection"]],
validateCreateGenericPage?: [{	data: ResolverInputTypes["GenericPageCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	data: ResolverInputTypes["GenericPageUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
listLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Linkable"]],
paginateLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
listSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Seo"]],
paginateSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["SeoConnection"]],
validateCreateSeo?: [{	data: ResolverInputTypes["SeoCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	data: ResolverInputTypes["SeoUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["Content"]],
listContent?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Content"]],
paginateContent?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentConnection"]],
validateCreateContent?: [{	data: ResolverInputTypes["ContentCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	data: ResolverInputTypes["ContentUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentBlockConnection"]],
validateCreateContentBlock?: [{	data: ResolverInputTypes["ContentBlockCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	data: ResolverInputTypes["ContentBlockUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReference"]],
listContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceConnection"]],
validateCreateContentReference?: [{	data: ResolverInputTypes["ContentReferenceCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	data: ResolverInputTypes["ContentReferenceUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
getRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null},ResolverInputTypes["Redirect"]],
listRedirect?: [{	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RedirectOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Redirect"]],
paginateRedirect?: [{	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RedirectOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RedirectConnection"]],
validateCreateRedirect?: [{	data: ResolverInputTypes["RedirectCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	data: ResolverInputTypes["RedirectUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
listLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Link"]],
paginateLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkConnection"]],
validateCreateLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
		__typename?: boolean | `@${string}`
}>;
	["Info"]: AliasType<{
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
createGeneral?: [{	data: ResolverInputTypes["GeneralCreateInput"]},ResolverInputTypes["GeneralCreateResult"]],
deleteGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null},ResolverInputTypes["GeneralDeleteResult"]],
updateGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	data: ResolverInputTypes["GeneralUpdateInput"]},ResolverInputTypes["GeneralUpdateResult"]],
upsertGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	update: ResolverInputTypes["GeneralUpdateInput"],	create: ResolverInputTypes["GeneralCreateInput"]},ResolverInputTypes["GeneralUpsertResult"]],
createImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageCreateResult"]],
deleteImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["ImageDeleteResult"]],
updateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	update: ResolverInputTypes["ImageUpdateInput"],	create: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageUpsertResult"]],
createGenericPage?: [{	data: ResolverInputTypes["GenericPageCreateInput"]},ResolverInputTypes["GenericPageCreateResult"]],
deleteGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null},ResolverInputTypes["GenericPageDeleteResult"]],
updateGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	data: ResolverInputTypes["GenericPageUpdateInput"]},ResolverInputTypes["GenericPageUpdateResult"]],
upsertGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	update: ResolverInputTypes["GenericPageUpdateInput"],	create: ResolverInputTypes["GenericPageCreateInput"]},ResolverInputTypes["GenericPageUpsertResult"]],
createLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	update: ResolverInputTypes["LinkableUpdateInput"],	create: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableUpsertResult"]],
createSeo?: [{	data: ResolverInputTypes["SeoCreateInput"]},ResolverInputTypes["SeoCreateResult"]],
deleteSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["SeoDeleteResult"]],
updateSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	data: ResolverInputTypes["SeoUpdateInput"]},ResolverInputTypes["SeoUpdateResult"]],
upsertSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	update: ResolverInputTypes["SeoUpdateInput"],	create: ResolverInputTypes["SeoCreateInput"]},ResolverInputTypes["SeoUpsertResult"]],
createContent?: [{	data: ResolverInputTypes["ContentCreateInput"]},ResolverInputTypes["ContentCreateResult"]],
deleteContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["ContentDeleteResult"]],
updateContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	data: ResolverInputTypes["ContentUpdateInput"]},ResolverInputTypes["ContentUpdateResult"]],
upsertContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	update: ResolverInputTypes["ContentUpdateInput"],	create: ResolverInputTypes["ContentCreateInput"]},ResolverInputTypes["ContentUpsertResult"]],
createContentBlock?: [{	data: ResolverInputTypes["ContentBlockCreateInput"]},ResolverInputTypes["ContentBlockCreateResult"]],
deleteContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlockDeleteResult"]],
updateContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	data: ResolverInputTypes["ContentBlockUpdateInput"]},ResolverInputTypes["ContentBlockUpdateResult"]],
upsertContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	update: ResolverInputTypes["ContentBlockUpdateInput"],	create: ResolverInputTypes["ContentBlockCreateInput"]},ResolverInputTypes["ContentBlockUpsertResult"]],
createContentReference?: [{	data: ResolverInputTypes["ContentReferenceCreateInput"]},ResolverInputTypes["ContentReferenceCreateResult"]],
deleteContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReferenceDeleteResult"]],
updateContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	data: ResolverInputTypes["ContentReferenceUpdateInput"]},ResolverInputTypes["ContentReferenceUpdateResult"]],
upsertContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	update: ResolverInputTypes["ContentReferenceUpdateInput"],	create: ResolverInputTypes["ContentReferenceCreateInput"]},ResolverInputTypes["ContentReferenceUpsertResult"]],
createRedirect?: [{	data: ResolverInputTypes["RedirectCreateInput"]},ResolverInputTypes["RedirectCreateResult"]],
deleteRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null},ResolverInputTypes["RedirectDeleteResult"]],
updateRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	data: ResolverInputTypes["RedirectUpdateInput"]},ResolverInputTypes["RedirectUpdateResult"]],
upsertRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	update: ResolverInputTypes["RedirectUpdateInput"],	create: ResolverInputTypes["RedirectCreateInput"]},ResolverInputTypes["RedirectUpsertResult"]],
createLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkCreateResult"]],
deleteLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["LinkDeleteResult"]],
updateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	update: ResolverInputTypes["LinkUpdateInput"],	create: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkUpsertResult"]],
transaction?: [{	options?: ResolverInputTypes["MutationTransactionOptions"] | undefined | null},ResolverInputTypes["MutationTransaction"]],
	query?:ResolverInputTypes["Query"],
generateUploadUrl?: [{	contentType: string,	expiration?: number | undefined | null,	prefix?: string | undefined | null},ResolverInputTypes["S3SignedUpload"]],
generateReadUrl?: [{	objectKey: string,	expiration?: number | undefined | null},ResolverInputTypes["S3SignedRead"]],
		__typename?: boolean | `@${string}`
}>;
	["GeneralCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["General"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["MutationResult"]:AliasType<{
		ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"];
		['...on GeneralCreateResult']?: Omit<ResolverInputTypes["GeneralCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GeneralDeleteResult']?: Omit<ResolverInputTypes["GeneralDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GeneralUpdateResult']?: Omit<ResolverInputTypes["GeneralUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GeneralUpsertResult']?: Omit<ResolverInputTypes["GeneralUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageCreateResult']?: Omit<ResolverInputTypes["ImageCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageDeleteResult']?: Omit<ResolverInputTypes["ImageDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageUpdateResult']?: Omit<ResolverInputTypes["ImageUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageUpsertResult']?: Omit<ResolverInputTypes["ImageUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GenericPageCreateResult']?: Omit<ResolverInputTypes["GenericPageCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GenericPageDeleteResult']?: Omit<ResolverInputTypes["GenericPageDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GenericPageUpdateResult']?: Omit<ResolverInputTypes["GenericPageUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on GenericPageUpsertResult']?: Omit<ResolverInputTypes["GenericPageUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableCreateResult']?: Omit<ResolverInputTypes["LinkableCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableDeleteResult']?: Omit<ResolverInputTypes["LinkableDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableUpdateResult']?: Omit<ResolverInputTypes["LinkableUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableUpsertResult']?: Omit<ResolverInputTypes["LinkableUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on SeoCreateResult']?: Omit<ResolverInputTypes["SeoCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on SeoDeleteResult']?: Omit<ResolverInputTypes["SeoDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on SeoUpdateResult']?: Omit<ResolverInputTypes["SeoUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on SeoUpsertResult']?: Omit<ResolverInputTypes["SeoUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentCreateResult']?: Omit<ResolverInputTypes["ContentCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentDeleteResult']?: Omit<ResolverInputTypes["ContentDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentUpdateResult']?: Omit<ResolverInputTypes["ContentUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentUpsertResult']?: Omit<ResolverInputTypes["ContentUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentBlockCreateResult']?: Omit<ResolverInputTypes["ContentBlockCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentBlockDeleteResult']?: Omit<ResolverInputTypes["ContentBlockDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentBlockUpdateResult']?: Omit<ResolverInputTypes["ContentBlockUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentBlockUpsertResult']?: Omit<ResolverInputTypes["ContentBlockUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentReferenceCreateResult']?: Omit<ResolverInputTypes["ContentReferenceCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentReferenceDeleteResult']?: Omit<ResolverInputTypes["ContentReferenceDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentReferenceUpdateResult']?: Omit<ResolverInputTypes["ContentReferenceUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ContentReferenceUpsertResult']?: Omit<ResolverInputTypes["ContentReferenceUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RedirectCreateResult']?: Omit<ResolverInputTypes["RedirectCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RedirectDeleteResult']?: Omit<ResolverInputTypes["RedirectDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RedirectUpdateResult']?: Omit<ResolverInputTypes["RedirectUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RedirectUpsertResult']?: Omit<ResolverInputTypes["RedirectUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkCreateResult']?: Omit<ResolverInputTypes["LinkCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkDeleteResult']?: Omit<ResolverInputTypes["LinkDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkUpdateResult']?: Omit<ResolverInputTypes["LinkUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkUpsertResult']?: Omit<ResolverInputTypes["LinkUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		__typename?: boolean | `@${string}`
}>;
	["_MutationError"]: AliasType<{
	path?:ResolverInputTypes["_PathFragment"],
	paths?:ResolverInputTypes["_PathFragment"],
	type?:boolean | `@${string}`,
	message?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_MutationErrorType"]:_MutationErrorType;
	["GeneralDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["General"],
		__typename?: boolean | `@${string}`
}>;
	["GeneralUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["General"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GeneralUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["General"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImageCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Image"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImageDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
	["ImageUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Image"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImageUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Image"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["GenericPage"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["GenericPage"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["GenericPage"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["GenericPageUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["GenericPage"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Linkable"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Linkable"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Linkable"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Linkable"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["SeoCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Seo"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["SeoDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Seo"],
		__typename?: boolean | `@${string}`
}>;
	["SeoUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Seo"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["SeoUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Seo"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Content"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Content"],
		__typename?: boolean | `@${string}`
}>;
	["ContentUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Content"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Content"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentBlock"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentBlock"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentBlock"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentBlock"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentReference"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentReference"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentReference"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ContentReference"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Redirect"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Redirect"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Redirect"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RedirectUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Redirect"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Link"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Link"],
		__typename?: boolean | `@${string}`
}>;
	["LinkUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Link"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LinkUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Link"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["MutationTransaction"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	validation?:ResolverInputTypes["_ValidationResult"],
createGeneral?: [{	data: ResolverInputTypes["GeneralCreateInput"]},ResolverInputTypes["GeneralCreateResult"]],
deleteGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null},ResolverInputTypes["GeneralDeleteResult"]],
updateGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	data: ResolverInputTypes["GeneralUpdateInput"]},ResolverInputTypes["GeneralUpdateResult"]],
upsertGeneral?: [{	by: ResolverInputTypes["GeneralUniqueWhere"],	filter?: ResolverInputTypes["GeneralWhere"] | undefined | null,	update: ResolverInputTypes["GeneralUpdateInput"],	create: ResolverInputTypes["GeneralCreateInput"]},ResolverInputTypes["GeneralUpsertResult"]],
createImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageCreateResult"]],
deleteImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["ImageDeleteResult"]],
updateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	update: ResolverInputTypes["ImageUpdateInput"],	create: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageUpsertResult"]],
createGenericPage?: [{	data: ResolverInputTypes["GenericPageCreateInput"]},ResolverInputTypes["GenericPageCreateResult"]],
deleteGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null},ResolverInputTypes["GenericPageDeleteResult"]],
updateGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	data: ResolverInputTypes["GenericPageUpdateInput"]},ResolverInputTypes["GenericPageUpdateResult"]],
upsertGenericPage?: [{	by: ResolverInputTypes["GenericPageUniqueWhere"],	filter?: ResolverInputTypes["GenericPageWhere"] | undefined | null,	update: ResolverInputTypes["GenericPageUpdateInput"],	create: ResolverInputTypes["GenericPageCreateInput"]},ResolverInputTypes["GenericPageUpsertResult"]],
createLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	update: ResolverInputTypes["LinkableUpdateInput"],	create: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableUpsertResult"]],
createSeo?: [{	data: ResolverInputTypes["SeoCreateInput"]},ResolverInputTypes["SeoCreateResult"]],
deleteSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["SeoDeleteResult"]],
updateSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	data: ResolverInputTypes["SeoUpdateInput"]},ResolverInputTypes["SeoUpdateResult"]],
upsertSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	update: ResolverInputTypes["SeoUpdateInput"],	create: ResolverInputTypes["SeoCreateInput"]},ResolverInputTypes["SeoUpsertResult"]],
createContent?: [{	data: ResolverInputTypes["ContentCreateInput"]},ResolverInputTypes["ContentCreateResult"]],
deleteContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["ContentDeleteResult"]],
updateContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	data: ResolverInputTypes["ContentUpdateInput"]},ResolverInputTypes["ContentUpdateResult"]],
upsertContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	update: ResolverInputTypes["ContentUpdateInput"],	create: ResolverInputTypes["ContentCreateInput"]},ResolverInputTypes["ContentUpsertResult"]],
createContentBlock?: [{	data: ResolverInputTypes["ContentBlockCreateInput"]},ResolverInputTypes["ContentBlockCreateResult"]],
deleteContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlockDeleteResult"]],
updateContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	data: ResolverInputTypes["ContentBlockUpdateInput"]},ResolverInputTypes["ContentBlockUpdateResult"]],
upsertContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	update: ResolverInputTypes["ContentBlockUpdateInput"],	create: ResolverInputTypes["ContentBlockCreateInput"]},ResolverInputTypes["ContentBlockUpsertResult"]],
createContentReference?: [{	data: ResolverInputTypes["ContentReferenceCreateInput"]},ResolverInputTypes["ContentReferenceCreateResult"]],
deleteContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReferenceDeleteResult"]],
updateContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	data: ResolverInputTypes["ContentReferenceUpdateInput"]},ResolverInputTypes["ContentReferenceUpdateResult"]],
upsertContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	update: ResolverInputTypes["ContentReferenceUpdateInput"],	create: ResolverInputTypes["ContentReferenceCreateInput"]},ResolverInputTypes["ContentReferenceUpsertResult"]],
createRedirect?: [{	data: ResolverInputTypes["RedirectCreateInput"]},ResolverInputTypes["RedirectCreateResult"]],
deleteRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null},ResolverInputTypes["RedirectDeleteResult"]],
updateRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	data: ResolverInputTypes["RedirectUpdateInput"]},ResolverInputTypes["RedirectUpdateResult"]],
upsertRedirect?: [{	by: ResolverInputTypes["RedirectUniqueWhere"],	filter?: ResolverInputTypes["RedirectWhere"] | undefined | null,	update: ResolverInputTypes["RedirectUpdateInput"],	create: ResolverInputTypes["RedirectCreateInput"]},ResolverInputTypes["RedirectUpsertResult"]],
createLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkCreateResult"]],
deleteLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["LinkDeleteResult"]],
updateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	update: ResolverInputTypes["LinkUpdateInput"],	create: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkUpsertResult"]],
	query?:ResolverInputTypes["Query"],
		__typename?: boolean | `@${string}`
}>;
	["MutationTransactionOptions"]: {
	deferForeignKeyConstraints?: boolean | undefined | null
};
	["Json"]:unknown;
	["_Schema"]: AliasType<{
	enums?:ResolverInputTypes["_Enum"],
	entities?:ResolverInputTypes["_Entity"],
		__typename?: boolean | `@${string}`
}>;
	["_Entity"]: AliasType<{
	name?:boolean | `@${string}`,
	customPrimaryAllowed?:boolean | `@${string}`,
	fields?:ResolverInputTypes["_Field"],
	unique?:ResolverInputTypes["_UniqueConstraint"],
		__typename?: boolean | `@${string}`
}>;
	["_UniqueConstraint"]: AliasType<{
	fields?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Field"]:AliasType<{
		name?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	nullable?:boolean | `@${string}`,
	rules?:ResolverInputTypes["_Rule"],
	validators?:ResolverInputTypes["_Validator"];
		['...on _Column']?: Omit<ResolverInputTypes["_Column"],keyof ResolverInputTypes["_Field"]>;
		['...on _Relation']?: Omit<ResolverInputTypes["_Relation"],keyof ResolverInputTypes["_Field"]>;
		__typename?: boolean | `@${string}`
}>;
	["_Column"]: AliasType<{
	name?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	enumName?:boolean | `@${string}`,
	defaultValue?:boolean | `@${string}`,
	nullable?:boolean | `@${string}`,
	rules?:ResolverInputTypes["_Rule"],
	validators?:ResolverInputTypes["_Validator"],
		__typename?: boolean | `@${string}`
}>;
	["_OnDeleteBehaviour"]:_OnDeleteBehaviour;
	["_RelationSide"]:_RelationSide;
	["_OrderByDirection"]:_OrderByDirection;
	["_OrderBy"]: AliasType<{
	path?:boolean | `@${string}`,
	direction?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Relation"]: AliasType<{
	name?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	side?:boolean | `@${string}`,
	targetEntity?:boolean | `@${string}`,
	ownedBy?:boolean | `@${string}`,
	inversedBy?:boolean | `@${string}`,
	nullable?:boolean | `@${string}`,
	onDelete?:boolean | `@${string}`,
	orphanRemoval?:boolean | `@${string}`,
	orderBy?:ResolverInputTypes["_OrderBy"],
	rules?:ResolverInputTypes["_Rule"],
	validators?:ResolverInputTypes["_Validator"],
		__typename?: boolean | `@${string}`
}>;
	["_Rule"]: AliasType<{
	message?:ResolverInputTypes["_RuleMessage"],
	validator?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Validator"]: AliasType<{
	operation?:boolean | `@${string}`,
	arguments?:ResolverInputTypes["_Argument"],
		__typename?: boolean | `@${string}`
}>;
	["_Argument"]: AliasType<{
	_ValidatorArgument?:ResolverInputTypes["_ValidatorArgument"],
	_PathArgument?:ResolverInputTypes["_PathArgument"],
	_LiteralArgument?:ResolverInputTypes["_LiteralArgument"],
		__typename?: boolean | `@${string}`
}>;
	["_ValidatorArgument"]: AliasType<{
	validator?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_PathArgument"]: AliasType<{
	path?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_LiteralArgument"]: AliasType<{
	value?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_RuleMessage"]: AliasType<{
	text?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_Enum"]: AliasType<{
	name?:boolean | `@${string}`,
	values?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["S3SignedUpload"]: AliasType<{
	url?:boolean | `@${string}`,
	headers?:ResolverInputTypes["S3Header"],
	method?:boolean | `@${string}`,
	/** Allowed patterns:
** */
	objectKey?:boolean | `@${string}`,
	bucket?:boolean | `@${string}`,
	publicUrl?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["S3Header"]: AliasType<{
	key?:boolean | `@${string}`,
	value?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["S3SignedRead"]: AliasType<{
	url?:boolean | `@${string}`,
	headers?:ResolverInputTypes["S3Header"],
	method?:boolean | `@${string}`,
	/** Allowed patterns:
** */
	objectKey?:boolean | `@${string}`,
	bucket?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>
  }

export type ModelTypes = {
    ["Query"]: {
		getGeneral?: ModelTypes["General"] | undefined,
	listGeneral: Array<ModelTypes["General"]>,
	paginateGeneral: ModelTypes["GeneralConnection"],
	validateCreateGeneral: ModelTypes["_ValidationResult"],
	validateUpdateGeneral: ModelTypes["_ValidationResult"],
	getImage?: ModelTypes["Image"] | undefined,
	listImage: Array<ModelTypes["Image"]>,
	paginateImage: ModelTypes["ImageConnection"],
	validateCreateImage: ModelTypes["_ValidationResult"],
	validateUpdateImage: ModelTypes["_ValidationResult"],
	getGenericPage?: ModelTypes["GenericPage"] | undefined,
	listGenericPage: Array<ModelTypes["GenericPage"]>,
	paginateGenericPage: ModelTypes["GenericPageConnection"],
	validateCreateGenericPage: ModelTypes["_ValidationResult"],
	validateUpdateGenericPage: ModelTypes["_ValidationResult"],
	getLinkable?: ModelTypes["Linkable"] | undefined,
	listLinkable: Array<ModelTypes["Linkable"]>,
	paginateLinkable: ModelTypes["LinkableConnection"],
	validateCreateLinkable: ModelTypes["_ValidationResult"],
	validateUpdateLinkable: ModelTypes["_ValidationResult"],
	getSeo?: ModelTypes["Seo"] | undefined,
	listSeo: Array<ModelTypes["Seo"]>,
	paginateSeo: ModelTypes["SeoConnection"],
	validateCreateSeo: ModelTypes["_ValidationResult"],
	validateUpdateSeo: ModelTypes["_ValidationResult"],
	getContent?: ModelTypes["Content"] | undefined,
	listContent: Array<ModelTypes["Content"]>,
	paginateContent: ModelTypes["ContentConnection"],
	validateCreateContent: ModelTypes["_ValidationResult"],
	validateUpdateContent: ModelTypes["_ValidationResult"],
	getContentBlock?: ModelTypes["ContentBlock"] | undefined,
	listContentBlock: Array<ModelTypes["ContentBlock"]>,
	paginateContentBlock: ModelTypes["ContentBlockConnection"],
	validateCreateContentBlock: ModelTypes["_ValidationResult"],
	validateUpdateContentBlock: ModelTypes["_ValidationResult"],
	getContentReference?: ModelTypes["ContentReference"] | undefined,
	listContentReference: Array<ModelTypes["ContentReference"]>,
	paginateContentReference: ModelTypes["ContentReferenceConnection"],
	validateCreateContentReference: ModelTypes["_ValidationResult"],
	validateUpdateContentReference: ModelTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: ModelTypes["ContentReferenceLinkableItemConnection"],
	getRedirect?: ModelTypes["Redirect"] | undefined,
	listRedirect: Array<ModelTypes["Redirect"]>,
	paginateRedirect: ModelTypes["RedirectConnection"],
	validateCreateRedirect: ModelTypes["_ValidationResult"],
	validateUpdateRedirect: ModelTypes["_ValidationResult"],
	getLink?: ModelTypes["Link"] | undefined,
	listLink: Array<ModelTypes["Link"]>,
	paginateLink: ModelTypes["LinkConnection"],
	validateCreateLink: ModelTypes["_ValidationResult"],
	validateUpdateLink: ModelTypes["_ValidationResult"],
	transaction?: ModelTypes["QueryTransaction"] | undefined,
	_info?: ModelTypes["Info"] | undefined,
	schema?: ModelTypes["_Schema"] | undefined,
	s3DummyQuery?: string | undefined
};
	["General"]: {
		_meta?: ModelTypes["GeneralMeta"] | undefined,
	id: ModelTypes["UUID"],
	unique: ModelTypes["One"],
	dummy?: string | undefined,
	image?: ModelTypes["Image"] | undefined,
	seo?: ModelTypes["Seo"] | undefined
};
	["GeneralMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	unique?: ModelTypes["FieldMeta"] | undefined,
	dummy?: ModelTypes["FieldMeta"] | undefined,
	image?: ModelTypes["FieldMeta"] | undefined,
	seo?: ModelTypes["FieldMeta"] | undefined
};
	["FieldMeta"]: {
		readable?: boolean | undefined,
	updatable?: boolean | undefined
};
	["UUID"]:any;
	["One"]:One;
	["Image"]: {
		_meta?: ModelTypes["ImageMeta"] | undefined,
	id: ModelTypes["UUID"],
	url: string,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined
};
	["ImageMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	url?: ModelTypes["FieldMeta"] | undefined,
	width?: ModelTypes["FieldMeta"] | undefined,
	height?: ModelTypes["FieldMeta"] | undefined,
	size?: ModelTypes["FieldMeta"] | undefined,
	type?: ModelTypes["FieldMeta"] | undefined,
	alt?: ModelTypes["FieldMeta"] | undefined
};
	["ImageWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	url?: ModelTypes["StringCondition"] | undefined,
	width?: ModelTypes["IntCondition"] | undefined,
	height?: ModelTypes["IntCondition"] | undefined,
	size?: ModelTypes["IntCondition"] | undefined,
	type?: ModelTypes["StringCondition"] | undefined,
	alt?: ModelTypes["StringCondition"] | undefined,
	and?: Array<ModelTypes["ImageWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ImageWhere"] | undefined> | undefined,
	not?: ModelTypes["ImageWhere"] | undefined
};
	["UUIDCondition"]: {
	and?: Array<ModelTypes["UUIDCondition"]> | undefined,
	or?: Array<ModelTypes["UUIDCondition"]> | undefined,
	not?: ModelTypes["UUIDCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["UUID"] | undefined,
	notEq?: ModelTypes["UUID"] | undefined,
	in?: Array<ModelTypes["UUID"]> | undefined,
	notIn?: Array<ModelTypes["UUID"]> | undefined,
	lt?: ModelTypes["UUID"] | undefined,
	lte?: ModelTypes["UUID"] | undefined,
	gt?: ModelTypes["UUID"] | undefined,
	gte?: ModelTypes["UUID"] | undefined
};
	["StringCondition"]: {
	and?: Array<ModelTypes["StringCondition"]> | undefined,
	or?: Array<ModelTypes["StringCondition"]> | undefined,
	not?: ModelTypes["StringCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: string | undefined,
	notEq?: string | undefined,
	in?: Array<string> | undefined,
	notIn?: Array<string> | undefined,
	lt?: string | undefined,
	lte?: string | undefined,
	gt?: string | undefined,
	gte?: string | undefined,
	contains?: string | undefined,
	startsWith?: string | undefined,
	endsWith?: string | undefined,
	containsCI?: string | undefined,
	startsWithCI?: string | undefined,
	endsWithCI?: string | undefined
};
	["IntCondition"]: {
	and?: Array<ModelTypes["IntCondition"]> | undefined,
	or?: Array<ModelTypes["IntCondition"]> | undefined,
	not?: ModelTypes["IntCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: number | undefined,
	notEq?: number | undefined,
	in?: Array<number> | undefined,
	notIn?: Array<number> | undefined,
	lt?: number | undefined,
	lte?: number | undefined,
	gt?: number | undefined,
	gte?: number | undefined
};
	["Seo"]: {
		_meta?: ModelTypes["SeoMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	ogTitle?: string | undefined,
	ogDescription?: string | undefined,
	noIndex?: boolean | undefined,
	noFollow?: boolean | undefined,
	ogImage?: ModelTypes["Image"] | undefined
};
	["SeoMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	description?: ModelTypes["FieldMeta"] | undefined,
	ogTitle?: ModelTypes["FieldMeta"] | undefined,
	ogDescription?: ModelTypes["FieldMeta"] | undefined,
	noIndex?: ModelTypes["FieldMeta"] | undefined,
	noFollow?: ModelTypes["FieldMeta"] | undefined,
	ogImage?: ModelTypes["FieldMeta"] | undefined
};
	["SeoWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	description?: ModelTypes["StringCondition"] | undefined,
	ogTitle?: ModelTypes["StringCondition"] | undefined,
	ogDescription?: ModelTypes["StringCondition"] | undefined,
	noIndex?: ModelTypes["BooleanCondition"] | undefined,
	noFollow?: ModelTypes["BooleanCondition"] | undefined,
	ogImage?: ModelTypes["ImageWhere"] | undefined,
	and?: Array<ModelTypes["SeoWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["SeoWhere"] | undefined> | undefined,
	not?: ModelTypes["SeoWhere"] | undefined
};
	["BooleanCondition"]: {
	and?: Array<ModelTypes["BooleanCondition"]> | undefined,
	or?: Array<ModelTypes["BooleanCondition"]> | undefined,
	not?: ModelTypes["BooleanCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: boolean | undefined,
	notEq?: boolean | undefined,
	in?: Array<boolean> | undefined,
	notIn?: Array<boolean> | undefined,
	lt?: boolean | undefined,
	lte?: boolean | undefined,
	gt?: boolean | undefined,
	gte?: boolean | undefined
};
	["GeneralUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	unique?: ModelTypes["One"] | undefined,
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["SeoUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	ogImage?: ModelTypes["ImageUniqueWhere"] | undefined
};
	["ImageUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
};
	["GeneralWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	unique?: ModelTypes["OneCondition"] | undefined,
	dummy?: ModelTypes["StringCondition"] | undefined,
	image?: ModelTypes["ImageWhere"] | undefined,
	seo?: ModelTypes["SeoWhere"] | undefined,
	and?: Array<ModelTypes["GeneralWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["GeneralWhere"] | undefined> | undefined,
	not?: ModelTypes["GeneralWhere"] | undefined
};
	["OneCondition"]: {
	and?: Array<ModelTypes["OneCondition"]> | undefined,
	or?: Array<ModelTypes["OneCondition"]> | undefined,
	not?: ModelTypes["OneCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["One"] | undefined,
	notEq?: ModelTypes["One"] | undefined,
	in?: Array<ModelTypes["One"]> | undefined,
	notIn?: Array<ModelTypes["One"]> | undefined,
	lt?: ModelTypes["One"] | undefined,
	lte?: ModelTypes["One"] | undefined,
	gt?: ModelTypes["One"] | undefined,
	gte?: ModelTypes["One"] | undefined
};
	["GeneralOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	unique?: ModelTypes["OrderDirection"] | undefined,
	dummy?: ModelTypes["OrderDirection"] | undefined,
	image?: ModelTypes["ImageOrderBy"] | undefined,
	seo?: ModelTypes["SeoOrderBy"] | undefined
};
	["OrderDirection"]:OrderDirection;
	["ImageOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	url?: ModelTypes["OrderDirection"] | undefined,
	width?: ModelTypes["OrderDirection"] | undefined,
	height?: ModelTypes["OrderDirection"] | undefined,
	size?: ModelTypes["OrderDirection"] | undefined,
	type?: ModelTypes["OrderDirection"] | undefined,
	alt?: ModelTypes["OrderDirection"] | undefined
};
	["SeoOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	description?: ModelTypes["OrderDirection"] | undefined,
	ogTitle?: ModelTypes["OrderDirection"] | undefined,
	ogDescription?: ModelTypes["OrderDirection"] | undefined,
	noIndex?: ModelTypes["OrderDirection"] | undefined,
	noFollow?: ModelTypes["OrderDirection"] | undefined,
	ogImage?: ModelTypes["ImageOrderBy"] | undefined
};
	["GeneralConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["GeneralEdge"]>
};
	["PageInfo"]: {
		totalCount: number
};
	["GeneralEdge"]: {
		node: ModelTypes["General"]
};
	["_ValidationResult"]: {
		valid: boolean,
	errors: Array<ModelTypes["_ValidationError"]>
};
	["_ValidationError"]: {
		path: Array<ModelTypes["_PathFragment"]>,
	message: ModelTypes["_ValidationMessage"]
};
	["_PathFragment"]:ModelTypes["_FieldPathFragment"] | ModelTypes["_IndexPathFragment"];
	["_FieldPathFragment"]: {
		field: string
};
	["_IndexPathFragment"]: {
		index: number,
	alias?: string | undefined
};
	["_ValidationMessage"]: {
		text: string
};
	["GeneralCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	unique?: ModelTypes["One"] | undefined,
	dummy?: string | undefined,
	image?: ModelTypes["GeneralCreateImageEntityRelationInput"] | undefined,
	seo?: ModelTypes["GeneralCreateSeoEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralCreateImageEntityRelationInput"]: {
	connect?: ModelTypes["ImageUniqueWhere"] | undefined,
	create?: ModelTypes["ImageCreateInput"] | undefined
};
	["ImageCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralCreateSeoEntityRelationInput"]: {
	connect?: ModelTypes["SeoUniqueWhere"] | undefined,
	create?: ModelTypes["SeoCreateInput"] | undefined
};
	["SeoCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	ogTitle?: string | undefined,
	ogDescription?: string | undefined,
	noIndex?: boolean | undefined,
	noFollow?: boolean | undefined,
	ogImage?: ModelTypes["SeoCreateOgImageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["SeoCreateOgImageEntityRelationInput"]: {
	connect?: ModelTypes["ImageUniqueWhere"] | undefined,
	create?: ModelTypes["ImageCreateInput"] | undefined
};
	["GeneralUpdateInput"]: {
	unique?: ModelTypes["One"] | undefined,
	dummy?: string | undefined,
	image?: ModelTypes["GeneralUpdateImageEntityRelationInput"] | undefined,
	seo?: ModelTypes["GeneralUpdateSeoEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralUpdateImageEntityRelationInput"]: {
	create?: ModelTypes["ImageCreateInput"] | undefined,
	update?: ModelTypes["ImageUpdateInput"] | undefined,
	upsert?: ModelTypes["GeneralUpsertImageRelationInput"] | undefined,
	connect?: ModelTypes["ImageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["ImageUpdateInput"]: {
	url?: string | undefined,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralUpsertImageRelationInput"]: {
	update?: ModelTypes["ImageUpdateInput"] | undefined,
	create?: ModelTypes["ImageCreateInput"] | undefined
};
	["GeneralUpdateSeoEntityRelationInput"]: {
	create?: ModelTypes["SeoCreateInput"] | undefined,
	update?: ModelTypes["SeoUpdateInput"] | undefined,
	upsert?: ModelTypes["GeneralUpsertSeoRelationInput"] | undefined,
	connect?: ModelTypes["SeoUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["SeoUpdateInput"]: {
	title?: string | undefined,
	description?: string | undefined,
	ogTitle?: string | undefined,
	ogDescription?: string | undefined,
	noIndex?: boolean | undefined,
	noFollow?: boolean | undefined,
	ogImage?: ModelTypes["SeoUpdateOgImageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["SeoUpdateOgImageEntityRelationInput"]: {
	create?: ModelTypes["ImageCreateInput"] | undefined,
	update?: ModelTypes["ImageUpdateInput"] | undefined,
	upsert?: ModelTypes["SeoUpsertOgImageRelationInput"] | undefined,
	connect?: ModelTypes["ImageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["SeoUpsertOgImageRelationInput"]: {
	update?: ModelTypes["ImageUpdateInput"] | undefined,
	create?: ModelTypes["ImageCreateInput"] | undefined
};
	["GeneralUpsertSeoRelationInput"]: {
	update?: ModelTypes["SeoUpdateInput"] | undefined,
	create?: ModelTypes["SeoCreateInput"] | undefined
};
	["ImageConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ImageEdge"]>
};
	["ImageEdge"]: {
		node: ModelTypes["Image"]
};
	["GenericPage"]: {
		_meta?: ModelTypes["GenericPageMeta"] | undefined,
	id: ModelTypes["UUID"],
	seo?: ModelTypes["Seo"] | undefined,
	link?: ModelTypes["Linkable"] | undefined,
	title?: string | undefined,
	content?: ModelTypes["Content"] | undefined
};
	["GenericPageMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	seo?: ModelTypes["FieldMeta"] | undefined,
	link?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	content?: ModelTypes["FieldMeta"] | undefined
};
	["Linkable"]: {
		_meta?: ModelTypes["LinkableMeta"] | undefined,
	id: ModelTypes["UUID"],
	url: string,
	genericPage?: ModelTypes["GenericPage"] | undefined,
	redirect?: ModelTypes["Redirect"] | undefined
};
	["LinkableMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	url?: ModelTypes["FieldMeta"] | undefined,
	genericPage?: ModelTypes["FieldMeta"] | undefined,
	redirect?: ModelTypes["FieldMeta"] | undefined
};
	["GenericPageWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	seo?: ModelTypes["SeoWhere"] | undefined,
	link?: ModelTypes["LinkableWhere"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	content?: ModelTypes["ContentWhere"] | undefined,
	and?: Array<ModelTypes["GenericPageWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["GenericPageWhere"] | undefined> | undefined,
	not?: ModelTypes["GenericPageWhere"] | undefined
};
	["LinkableWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	url?: ModelTypes["StringCondition"] | undefined,
	genericPage?: ModelTypes["GenericPageWhere"] | undefined,
	redirect?: ModelTypes["RedirectWhere"] | undefined,
	and?: Array<ModelTypes["LinkableWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["LinkableWhere"] | undefined> | undefined,
	not?: ModelTypes["LinkableWhere"] | undefined
};
	["RedirectWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	link?: ModelTypes["LinkableWhere"] | undefined,
	target?: ModelTypes["LinkWhere"] | undefined,
	and?: Array<ModelTypes["RedirectWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["RedirectWhere"] | undefined> | undefined,
	not?: ModelTypes["RedirectWhere"] | undefined
};
	["LinkWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	type?: ModelTypes["LinkTypeCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	externalLink?: ModelTypes["StringCondition"] | undefined,
	internalLink?: ModelTypes["LinkableWhere"] | undefined,
	and?: Array<ModelTypes["LinkWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["LinkWhere"] | undefined> | undefined,
	not?: ModelTypes["LinkWhere"] | undefined
};
	["LinkTypeCondition"]: {
	and?: Array<ModelTypes["LinkTypeCondition"]> | undefined,
	or?: Array<ModelTypes["LinkTypeCondition"]> | undefined,
	not?: ModelTypes["LinkTypeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["LinkType"] | undefined,
	notEq?: ModelTypes["LinkType"] | undefined,
	in?: Array<ModelTypes["LinkType"]> | undefined,
	notIn?: Array<ModelTypes["LinkType"]> | undefined,
	lt?: ModelTypes["LinkType"] | undefined,
	lte?: ModelTypes["LinkType"] | undefined,
	gt?: ModelTypes["LinkType"] | undefined,
	gte?: ModelTypes["LinkType"] | undefined
};
	["LinkType"]:LinkType;
	["ContentWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	blocks?: ModelTypes["ContentBlockWhere"] | undefined,
	and?: Array<ModelTypes["ContentWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ContentWhere"] | undefined> | undefined,
	not?: ModelTypes["ContentWhere"] | undefined
};
	["ContentBlockWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	json?: ModelTypes["StringCondition"] | undefined,
	content?: ModelTypes["ContentWhere"] | undefined,
	references?: ModelTypes["ContentReferenceWhere"] | undefined,
	and?: Array<ModelTypes["ContentBlockWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ContentBlockWhere"] | undefined> | undefined,
	not?: ModelTypes["ContentBlockWhere"] | undefined
};
	["ContentReferenceWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	type?: ModelTypes["ContentReferenceTypeCondition"] | undefined,
	primaryText?: ModelTypes["StringCondition"] | undefined,
	block?: ModelTypes["ContentBlockWhere"] | undefined,
	image?: ModelTypes["ImageWhere"] | undefined,
	linkables?: ModelTypes["ContentReferenceLinkableItemWhere"] | undefined,
	and?: Array<ModelTypes["ContentReferenceWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ContentReferenceWhere"] | undefined> | undefined,
	not?: ModelTypes["ContentReferenceWhere"] | undefined
};
	["ContentReferenceTypeCondition"]: {
	and?: Array<ModelTypes["ContentReferenceTypeCondition"]> | undefined,
	or?: Array<ModelTypes["ContentReferenceTypeCondition"]> | undefined,
	not?: ModelTypes["ContentReferenceTypeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["ContentReferenceType"] | undefined,
	notEq?: ModelTypes["ContentReferenceType"] | undefined,
	in?: Array<ModelTypes["ContentReferenceType"]> | undefined,
	notIn?: Array<ModelTypes["ContentReferenceType"]> | undefined,
	lt?: ModelTypes["ContentReferenceType"] | undefined,
	lte?: ModelTypes["ContentReferenceType"] | undefined,
	gt?: ModelTypes["ContentReferenceType"] | undefined,
	gte?: ModelTypes["ContentReferenceType"] | undefined
};
	["ContentReferenceType"]:ContentReferenceType;
	["ContentReferenceLinkableItemWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	item?: ModelTypes["LinkableWhere"] | undefined,
	reference?: ModelTypes["ContentReferenceWhere"] | undefined,
	and?: Array<ModelTypes["ContentReferenceLinkableItemWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ContentReferenceLinkableItemWhere"] | undefined> | undefined,
	not?: ModelTypes["ContentReferenceLinkableItemWhere"] | undefined
};
	["Redirect"]: {
		_meta?: ModelTypes["RedirectMeta"] | undefined,
	id: ModelTypes["UUID"],
	link?: ModelTypes["Linkable"] | undefined,
	target?: ModelTypes["Link"] | undefined
};
	["RedirectMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	link?: ModelTypes["FieldMeta"] | undefined,
	target?: ModelTypes["FieldMeta"] | undefined
};
	["Link"]: {
		_meta?: ModelTypes["LinkMeta"] | undefined,
	id: ModelTypes["UUID"],
	type: ModelTypes["LinkType"],
	title?: string | undefined,
	externalLink?: string | undefined,
	internalLink?: ModelTypes["Linkable"] | undefined
};
	["LinkMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	type?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	externalLink?: ModelTypes["FieldMeta"] | undefined,
	internalLink?: ModelTypes["FieldMeta"] | undefined
};
	["Content"]: {
		_meta?: ModelTypes["ContentMeta"] | undefined,
	id: ModelTypes["UUID"],
	blocks: Array<ModelTypes["ContentBlock"]>,
	blocksByReferences?: ModelTypes["ContentBlock"] | undefined,
	paginateBlocks: ModelTypes["ContentBlockConnection"]
};
	["ContentMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	blocks?: ModelTypes["FieldMeta"] | undefined
};
	["ContentBlock"]: {
		_meta?: ModelTypes["ContentBlockMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	json: string,
	content?: ModelTypes["Content"] | undefined,
	references: Array<ModelTypes["ContentReference"]>,
	referencesByLinkables?: ModelTypes["ContentReference"] | undefined,
	paginateReferences: ModelTypes["ContentReferenceConnection"]
};
	["ContentBlockMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	json?: ModelTypes["FieldMeta"] | undefined,
	content?: ModelTypes["FieldMeta"] | undefined,
	references?: ModelTypes["FieldMeta"] | undefined
};
	["ContentReference"]: {
		_meta?: ModelTypes["ContentReferenceMeta"] | undefined,
	id: ModelTypes["UUID"],
	type: ModelTypes["ContentReferenceType"],
	primaryText?: string | undefined,
	block?: ModelTypes["ContentBlock"] | undefined,
	image?: ModelTypes["Image"] | undefined,
	linkables: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	linkablesByItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	paginateLinkables: ModelTypes["ContentReferenceLinkableItemConnection"]
};
	["ContentReferenceMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	type?: ModelTypes["FieldMeta"] | undefined,
	primaryText?: ModelTypes["FieldMeta"] | undefined,
	block?: ModelTypes["FieldMeta"] | undefined,
	image?: ModelTypes["FieldMeta"] | undefined,
	linkables?: ModelTypes["FieldMeta"] | undefined
};
	["ContentReferenceLinkableItem"]: {
		_meta?: ModelTypes["ContentReferenceLinkableItemMeta"] | undefined,
	id: ModelTypes["UUID"],
	item?: ModelTypes["Linkable"] | undefined,
	reference?: ModelTypes["ContentReference"] | undefined
};
	["ContentReferenceLinkableItemMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	item?: ModelTypes["FieldMeta"] | undefined,
	reference?: ModelTypes["FieldMeta"] | undefined
};
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	item?: ModelTypes["LinkableOrderBy"] | undefined,
	reference?: ModelTypes["ContentReferenceOrderBy"] | undefined
};
	["LinkableOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	url?: ModelTypes["OrderDirection"] | undefined,
	genericPage?: ModelTypes["GenericPageOrderBy"] | undefined,
	redirect?: ModelTypes["RedirectOrderBy"] | undefined
};
	["GenericPageOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	seo?: ModelTypes["SeoOrderBy"] | undefined,
	link?: ModelTypes["LinkableOrderBy"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	content?: ModelTypes["ContentOrderBy"] | undefined
};
	["ContentOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined
};
	["RedirectOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	link?: ModelTypes["LinkableOrderBy"] | undefined,
	target?: ModelTypes["LinkOrderBy"] | undefined
};
	["LinkOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	type?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	externalLink?: ModelTypes["OrderDirection"] | undefined,
	internalLink?: ModelTypes["LinkableOrderBy"] | undefined
};
	["ContentReferenceOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	type?: ModelTypes["OrderDirection"] | undefined,
	primaryText?: ModelTypes["OrderDirection"] | undefined,
	block?: ModelTypes["ContentBlockOrderBy"] | undefined,
	image?: ModelTypes["ImageOrderBy"] | undefined
};
	["ContentBlockOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	json?: ModelTypes["OrderDirection"] | undefined,
	content?: ModelTypes["ContentOrderBy"] | undefined
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
	item?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["LinkableUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined,
	genericPage?: ModelTypes["GenericPageUniqueWhere"] | undefined,
	redirect?: ModelTypes["RedirectUniqueWhere"] | undefined
};
	["GenericPageUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	seo?: ModelTypes["SeoUniqueWhere"] | undefined,
	link?: ModelTypes["LinkableUniqueWhere"] | undefined,
	content?: ModelTypes["ContentUniqueWhere"] | undefined
};
	["ContentUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	blocks?: ModelTypes["ContentBlockUniqueWhere"] | undefined
};
	["ContentBlockUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	references?: ModelTypes["ContentReferenceUniqueWhere"] | undefined
};
	["ContentReferenceUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	linkables?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	item?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["RedirectUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	link?: ModelTypes["LinkableUniqueWhere"] | undefined,
	target?: ModelTypes["LinkUniqueWhere"] | undefined
};
	["LinkUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
};
	["ContentReferenceLinkableItemConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentReferenceLinkableItemEdge"]>
};
	["ContentReferenceLinkableItemEdge"]: {
		node: ModelTypes["ContentReferenceLinkableItem"]
};
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
	linkables?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentReferenceConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentReferenceEdge"]>
};
	["ContentReferenceEdge"]: {
		node: ModelTypes["ContentReference"]
};
	["ContentBlocksByReferencesUniqueWhere"]: {
	references?: ModelTypes["ContentReferenceUniqueWhere"] | undefined
};
	["ContentBlockConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentBlockEdge"]>
};
	["ContentBlockEdge"]: {
		node: ModelTypes["ContentBlock"]
};
	["GenericPageConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["GenericPageEdge"]>
};
	["GenericPageEdge"]: {
		node: ModelTypes["GenericPage"]
};
	["GenericPageCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	seo?: ModelTypes["GenericPageCreateSeoEntityRelationInput"] | undefined,
	link?: ModelTypes["GenericPageCreateLinkEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: ModelTypes["GenericPageCreateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageCreateSeoEntityRelationInput"]: {
	connect?: ModelTypes["SeoUniqueWhere"] | undefined,
	create?: ModelTypes["SeoCreateInput"] | undefined
};
	["GenericPageCreateLinkEntityRelationInput"]: {
	connect?: ModelTypes["LinkableUniqueWhere"] | undefined,
	create?: ModelTypes["LinkableWithoutGenericPageCreateInput"] | undefined
};
	["LinkableWithoutGenericPageCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined,
	redirect?: ModelTypes["LinkableCreateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableCreateRedirectEntityRelationInput"]: {
	connect?: ModelTypes["RedirectUniqueWhere"] | undefined,
	create?: ModelTypes["RedirectWithoutLinkCreateInput"] | undefined
};
	["RedirectWithoutLinkCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	target?: ModelTypes["RedirectCreateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectCreateTargetEntityRelationInput"]: {
	connect?: ModelTypes["LinkUniqueWhere"] | undefined,
	create?: ModelTypes["LinkCreateInput"] | undefined
};
	["LinkCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	type?: ModelTypes["LinkType"] | undefined,
	title?: string | undefined,
	externalLink?: string | undefined,
	internalLink?: ModelTypes["LinkCreateInternalLinkEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkCreateInternalLinkEntityRelationInput"]: {
	connect?: ModelTypes["LinkableUniqueWhere"] | undefined,
	create?: ModelTypes["LinkableCreateInput"] | undefined
};
	["LinkableCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined,
	genericPage?: ModelTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined,
	redirect?: ModelTypes["LinkableCreateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableCreateGenericPageEntityRelationInput"]: {
	connect?: ModelTypes["GenericPageUniqueWhere"] | undefined,
	create?: ModelTypes["GenericPageWithoutLinkCreateInput"] | undefined
};
	["GenericPageWithoutLinkCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	seo?: ModelTypes["GenericPageCreateSeoEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: ModelTypes["GenericPageCreateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageCreateContentEntityRelationInput"]: {
	connect?: ModelTypes["ContentUniqueWhere"] | undefined,
	create?: ModelTypes["ContentCreateInput"] | undefined
};
	["ContentCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	blocks?: Array<ModelTypes["ContentCreateBlocksEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentCreateBlocksEntityRelationInput"]: {
	connect?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	create?: ModelTypes["ContentBlockWithoutContentCreateInput"] | undefined,
	alias?: string | undefined
};
	["ContentBlockWithoutContentCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	order?: number | undefined,
	json?: string | undefined,
	references?: Array<ModelTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockCreateReferencesEntityRelationInput"]: {
	connect?: ModelTypes["ContentReferenceUniqueWhere"] | undefined,
	create?: ModelTypes["ContentReferenceWithoutBlockCreateInput"] | undefined,
	alias?: string | undefined
};
	["ContentReferenceWithoutBlockCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	type?: ModelTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	image?: ModelTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined,
	linkables?: Array<ModelTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceCreateImageEntityRelationInput"]: {
	connect?: ModelTypes["ImageUniqueWhere"] | undefined,
	create?: ModelTypes["ImageCreateInput"] | undefined
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
	connect?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["GenericPageUpdateInput"]: {
	seo?: ModelTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined,
	link?: ModelTypes["GenericPageUpdateLinkEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: ModelTypes["GenericPageUpdateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageUpdateSeoEntityRelationInput"]: {
	create?: ModelTypes["SeoCreateInput"] | undefined,
	update?: ModelTypes["SeoUpdateInput"] | undefined,
	upsert?: ModelTypes["GenericPageUpsertSeoRelationInput"] | undefined,
	connect?: ModelTypes["SeoUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["GenericPageUpsertSeoRelationInput"]: {
	update?: ModelTypes["SeoUpdateInput"] | undefined,
	create?: ModelTypes["SeoCreateInput"] | undefined
};
	["GenericPageUpdateLinkEntityRelationInput"]: {
	create?: ModelTypes["LinkableWithoutGenericPageCreateInput"] | undefined,
	update?: ModelTypes["LinkableWithoutGenericPageUpdateInput"] | undefined,
	upsert?: ModelTypes["GenericPageUpsertLinkRelationInput"] | undefined,
	connect?: ModelTypes["LinkableUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkableWithoutGenericPageUpdateInput"]: {
	url?: string | undefined,
	redirect?: ModelTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableUpdateRedirectEntityRelationInput"]: {
	create?: ModelTypes["RedirectWithoutLinkCreateInput"] | undefined,
	update?: ModelTypes["RedirectWithoutLinkUpdateInput"] | undefined,
	upsert?: ModelTypes["LinkableUpsertRedirectRelationInput"] | undefined,
	connect?: ModelTypes["RedirectUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["RedirectWithoutLinkUpdateInput"]: {
	target?: ModelTypes["RedirectUpdateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpdateTargetEntityRelationInput"]: {
	create?: ModelTypes["LinkCreateInput"] | undefined,
	update?: ModelTypes["LinkUpdateInput"] | undefined,
	upsert?: ModelTypes["RedirectUpsertTargetRelationInput"] | undefined,
	connect?: ModelTypes["LinkUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkUpdateInput"]: {
	type?: ModelTypes["LinkType"] | undefined,
	title?: string | undefined,
	externalLink?: string | undefined,
	internalLink?: ModelTypes["LinkUpdateInternalLinkEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkUpdateInternalLinkEntityRelationInput"]: {
	create?: ModelTypes["LinkableCreateInput"] | undefined,
	update?: ModelTypes["LinkableUpdateInput"] | undefined,
	upsert?: ModelTypes["LinkUpsertInternalLinkRelationInput"] | undefined,
	connect?: ModelTypes["LinkableUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkableUpdateInput"]: {
	url?: string | undefined,
	genericPage?: ModelTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined,
	redirect?: ModelTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableUpdateGenericPageEntityRelationInput"]: {
	create?: ModelTypes["GenericPageWithoutLinkCreateInput"] | undefined,
	update?: ModelTypes["GenericPageWithoutLinkUpdateInput"] | undefined,
	upsert?: ModelTypes["LinkableUpsertGenericPageRelationInput"] | undefined,
	connect?: ModelTypes["GenericPageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["GenericPageWithoutLinkUpdateInput"]: {
	seo?: ModelTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: ModelTypes["GenericPageUpdateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageUpdateContentEntityRelationInput"]: {
	create?: ModelTypes["ContentCreateInput"] | undefined,
	update?: ModelTypes["ContentUpdateInput"] | undefined,
	upsert?: ModelTypes["GenericPageUpsertContentRelationInput"] | undefined,
	connect?: ModelTypes["ContentUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["ContentUpdateInput"]: {
	blocks?: Array<ModelTypes["ContentUpdateBlocksEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentUpdateBlocksEntityRelationInput"]: {
	create?: ModelTypes["ContentBlockWithoutContentCreateInput"] | undefined,
	update?: ModelTypes["ContentUpdateBlocksRelationInput"] | undefined,
	upsert?: ModelTypes["ContentUpsertBlocksRelationInput"] | undefined,
	connect?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	disconnect?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	delete?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["ContentUpdateBlocksRelationInput"]: {
	by?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	data?: ModelTypes["ContentBlockWithoutContentUpdateInput"] | undefined
};
	["ContentBlockWithoutContentUpdateInput"]: {
	order?: number | undefined,
	json?: string | undefined,
	references?: Array<ModelTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpdateReferencesEntityRelationInput"]: {
	create?: ModelTypes["ContentReferenceWithoutBlockCreateInput"] | undefined,
	update?: ModelTypes["ContentBlockUpdateReferencesRelationInput"] | undefined,
	upsert?: ModelTypes["ContentBlockUpsertReferencesRelationInput"] | undefined,
	connect?: ModelTypes["ContentReferenceUniqueWhere"] | undefined,
	disconnect?: ModelTypes["ContentReferenceUniqueWhere"] | undefined,
	delete?: ModelTypes["ContentReferenceUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["ContentBlockUpdateReferencesRelationInput"]: {
	by?: ModelTypes["ContentReferenceUniqueWhere"] | undefined,
	data?: ModelTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined
};
	["ContentReferenceWithoutBlockUpdateInput"]: {
	type?: ModelTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	image?: ModelTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined,
	linkables?: Array<ModelTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpdateImageEntityRelationInput"]: {
	create?: ModelTypes["ImageCreateInput"] | undefined,
	update?: ModelTypes["ImageUpdateInput"] | undefined,
	upsert?: ModelTypes["ContentReferenceUpsertImageRelationInput"] | undefined,
	connect?: ModelTypes["ImageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["ContentReferenceUpsertImageRelationInput"]: {
	update?: ModelTypes["ImageUpdateInput"] | undefined,
	create?: ModelTypes["ImageCreateInput"] | undefined
};
	["ContentReferenceUpdateLinkablesEntityRelationInput"]: {
	connect?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	disconnect?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	delete?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["ContentBlockUpsertReferencesRelationInput"]: {
	by?: ModelTypes["ContentReferenceUniqueWhere"] | undefined,
	update?: ModelTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined,
	create?: ModelTypes["ContentReferenceWithoutBlockCreateInput"] | undefined
};
	["ContentUpsertBlocksRelationInput"]: {
	by?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	update?: ModelTypes["ContentBlockWithoutContentUpdateInput"] | undefined,
	create?: ModelTypes["ContentBlockWithoutContentCreateInput"] | undefined
};
	["GenericPageUpsertContentRelationInput"]: {
	update?: ModelTypes["ContentUpdateInput"] | undefined,
	create?: ModelTypes["ContentCreateInput"] | undefined
};
	["LinkableUpsertGenericPageRelationInput"]: {
	update?: ModelTypes["GenericPageWithoutLinkUpdateInput"] | undefined,
	create?: ModelTypes["GenericPageWithoutLinkCreateInput"] | undefined
};
	["LinkUpsertInternalLinkRelationInput"]: {
	update?: ModelTypes["LinkableUpdateInput"] | undefined,
	create?: ModelTypes["LinkableCreateInput"] | undefined
};
	["RedirectUpsertTargetRelationInput"]: {
	update?: ModelTypes["LinkUpdateInput"] | undefined,
	create?: ModelTypes["LinkCreateInput"] | undefined
};
	["LinkableUpsertRedirectRelationInput"]: {
	update?: ModelTypes["RedirectWithoutLinkUpdateInput"] | undefined,
	create?: ModelTypes["RedirectWithoutLinkCreateInput"] | undefined
};
	["GenericPageUpsertLinkRelationInput"]: {
	update?: ModelTypes["LinkableWithoutGenericPageUpdateInput"] | undefined,
	create?: ModelTypes["LinkableWithoutGenericPageCreateInput"] | undefined
};
	["LinkableConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LinkableEdge"]>
};
	["LinkableEdge"]: {
		node: ModelTypes["Linkable"]
};
	["SeoConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["SeoEdge"]>
};
	["SeoEdge"]: {
		node: ModelTypes["Seo"]
};
	["ContentConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentEdge"]>
};
	["ContentEdge"]: {
		node: ModelTypes["Content"]
};
	["ContentBlockCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	order?: number | undefined,
	json?: string | undefined,
	content?: ModelTypes["ContentBlockCreateContentEntityRelationInput"] | undefined,
	references?: Array<ModelTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockCreateContentEntityRelationInput"]: {
	connect?: ModelTypes["ContentUniqueWhere"] | undefined,
	create?: ModelTypes["ContentWithoutBlocksCreateInput"] | undefined
};
	["ContentWithoutBlocksCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpdateInput"]: {
	order?: number | undefined,
	json?: string | undefined,
	content?: ModelTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined,
	references?: Array<ModelTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpdateContentEntityRelationInput"]: {
	create?: ModelTypes["ContentWithoutBlocksCreateInput"] | undefined,
	update?: ModelTypes["ContentWithoutBlocksUpdateInput"] | undefined,
	upsert?: ModelTypes["ContentBlockUpsertContentRelationInput"] | undefined,
	connect?: ModelTypes["ContentUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["ContentWithoutBlocksUpdateInput"]: {
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpsertContentRelationInput"]: {
	update?: ModelTypes["ContentWithoutBlocksUpdateInput"] | undefined,
	create?: ModelTypes["ContentWithoutBlocksCreateInput"] | undefined
};
	["ContentReferenceCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	type?: ModelTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	block?: ModelTypes["ContentReferenceCreateBlockEntityRelationInput"] | undefined,
	image?: ModelTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined,
	linkables?: Array<ModelTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceCreateBlockEntityRelationInput"]: {
	connect?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	create?: ModelTypes["ContentBlockWithoutReferencesCreateInput"] | undefined
};
	["ContentBlockWithoutReferencesCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	order?: number | undefined,
	json?: string | undefined,
	content?: ModelTypes["ContentBlockCreateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpdateInput"]: {
	type?: ModelTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	block?: ModelTypes["ContentReferenceUpdateBlockEntityRelationInput"] | undefined,
	image?: ModelTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined,
	linkables?: Array<ModelTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpdateBlockEntityRelationInput"]: {
	create?: ModelTypes["ContentBlockWithoutReferencesCreateInput"] | undefined,
	update?: ModelTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined,
	upsert?: ModelTypes["ContentReferenceUpsertBlockRelationInput"] | undefined,
	connect?: ModelTypes["ContentBlockUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["ContentBlockWithoutReferencesUpdateInput"]: {
	order?: number | undefined,
	json?: string | undefined,
	content?: ModelTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpsertBlockRelationInput"]: {
	update?: ModelTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined,
	create?: ModelTypes["ContentBlockWithoutReferencesCreateInput"] | undefined
};
	["RedirectConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RedirectEdge"]>
};
	["RedirectEdge"]: {
		node: ModelTypes["Redirect"]
};
	["RedirectCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	link?: ModelTypes["RedirectCreateLinkEntityRelationInput"] | undefined,
	target?: ModelTypes["RedirectCreateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectCreateLinkEntityRelationInput"]: {
	connect?: ModelTypes["LinkableUniqueWhere"] | undefined,
	create?: ModelTypes["LinkableWithoutRedirectCreateInput"] | undefined
};
	["LinkableWithoutRedirectCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined,
	genericPage?: ModelTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpdateInput"]: {
	link?: ModelTypes["RedirectUpdateLinkEntityRelationInput"] | undefined,
	target?: ModelTypes["RedirectUpdateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpdateLinkEntityRelationInput"]: {
	create?: ModelTypes["LinkableWithoutRedirectCreateInput"] | undefined,
	update?: ModelTypes["LinkableWithoutRedirectUpdateInput"] | undefined,
	upsert?: ModelTypes["RedirectUpsertLinkRelationInput"] | undefined,
	connect?: ModelTypes["LinkableUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkableWithoutRedirectUpdateInput"]: {
	url?: string | undefined,
	genericPage?: ModelTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpsertLinkRelationInput"]: {
	update?: ModelTypes["LinkableWithoutRedirectUpdateInput"] | undefined,
	create?: ModelTypes["LinkableWithoutRedirectCreateInput"] | undefined
};
	["LinkConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LinkEdge"]>
};
	["LinkEdge"]: {
		node: ModelTypes["Link"]
};
	["QueryTransaction"]: {
		getGeneral?: ModelTypes["General"] | undefined,
	listGeneral: Array<ModelTypes["General"]>,
	paginateGeneral: ModelTypes["GeneralConnection"],
	validateCreateGeneral: ModelTypes["_ValidationResult"],
	validateUpdateGeneral: ModelTypes["_ValidationResult"],
	getImage?: ModelTypes["Image"] | undefined,
	listImage: Array<ModelTypes["Image"]>,
	paginateImage: ModelTypes["ImageConnection"],
	validateCreateImage: ModelTypes["_ValidationResult"],
	validateUpdateImage: ModelTypes["_ValidationResult"],
	getGenericPage?: ModelTypes["GenericPage"] | undefined,
	listGenericPage: Array<ModelTypes["GenericPage"]>,
	paginateGenericPage: ModelTypes["GenericPageConnection"],
	validateCreateGenericPage: ModelTypes["_ValidationResult"],
	validateUpdateGenericPage: ModelTypes["_ValidationResult"],
	getLinkable?: ModelTypes["Linkable"] | undefined,
	listLinkable: Array<ModelTypes["Linkable"]>,
	paginateLinkable: ModelTypes["LinkableConnection"],
	validateCreateLinkable: ModelTypes["_ValidationResult"],
	validateUpdateLinkable: ModelTypes["_ValidationResult"],
	getSeo?: ModelTypes["Seo"] | undefined,
	listSeo: Array<ModelTypes["Seo"]>,
	paginateSeo: ModelTypes["SeoConnection"],
	validateCreateSeo: ModelTypes["_ValidationResult"],
	validateUpdateSeo: ModelTypes["_ValidationResult"],
	getContent?: ModelTypes["Content"] | undefined,
	listContent: Array<ModelTypes["Content"]>,
	paginateContent: ModelTypes["ContentConnection"],
	validateCreateContent: ModelTypes["_ValidationResult"],
	validateUpdateContent: ModelTypes["_ValidationResult"],
	getContentBlock?: ModelTypes["ContentBlock"] | undefined,
	listContentBlock: Array<ModelTypes["ContentBlock"]>,
	paginateContentBlock: ModelTypes["ContentBlockConnection"],
	validateCreateContentBlock: ModelTypes["_ValidationResult"],
	validateUpdateContentBlock: ModelTypes["_ValidationResult"],
	getContentReference?: ModelTypes["ContentReference"] | undefined,
	listContentReference: Array<ModelTypes["ContentReference"]>,
	paginateContentReference: ModelTypes["ContentReferenceConnection"],
	validateCreateContentReference: ModelTypes["_ValidationResult"],
	validateUpdateContentReference: ModelTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: ModelTypes["ContentReferenceLinkableItemConnection"],
	getRedirect?: ModelTypes["Redirect"] | undefined,
	listRedirect: Array<ModelTypes["Redirect"]>,
	paginateRedirect: ModelTypes["RedirectConnection"],
	validateCreateRedirect: ModelTypes["_ValidationResult"],
	validateUpdateRedirect: ModelTypes["_ValidationResult"],
	getLink?: ModelTypes["Link"] | undefined,
	listLink: Array<ModelTypes["Link"]>,
	paginateLink: ModelTypes["LinkConnection"],
	validateCreateLink: ModelTypes["_ValidationResult"],
	validateUpdateLink: ModelTypes["_ValidationResult"]
};
	["Info"]: {
		description?: string | undefined
};
	["Mutation"]: {
		createGeneral: ModelTypes["GeneralCreateResult"],
	deleteGeneral: ModelTypes["GeneralDeleteResult"],
	updateGeneral: ModelTypes["GeneralUpdateResult"],
	upsertGeneral: ModelTypes["GeneralUpsertResult"],
	createImage: ModelTypes["ImageCreateResult"],
	deleteImage: ModelTypes["ImageDeleteResult"],
	updateImage: ModelTypes["ImageUpdateResult"],
	upsertImage: ModelTypes["ImageUpsertResult"],
	createGenericPage: ModelTypes["GenericPageCreateResult"],
	deleteGenericPage: ModelTypes["GenericPageDeleteResult"],
	updateGenericPage: ModelTypes["GenericPageUpdateResult"],
	upsertGenericPage: ModelTypes["GenericPageUpsertResult"],
	createLinkable: ModelTypes["LinkableCreateResult"],
	deleteLinkable: ModelTypes["LinkableDeleteResult"],
	updateLinkable: ModelTypes["LinkableUpdateResult"],
	upsertLinkable: ModelTypes["LinkableUpsertResult"],
	createSeo: ModelTypes["SeoCreateResult"],
	deleteSeo: ModelTypes["SeoDeleteResult"],
	updateSeo: ModelTypes["SeoUpdateResult"],
	upsertSeo: ModelTypes["SeoUpsertResult"],
	createContent: ModelTypes["ContentCreateResult"],
	deleteContent: ModelTypes["ContentDeleteResult"],
	updateContent: ModelTypes["ContentUpdateResult"],
	upsertContent: ModelTypes["ContentUpsertResult"],
	createContentBlock: ModelTypes["ContentBlockCreateResult"],
	deleteContentBlock: ModelTypes["ContentBlockDeleteResult"],
	updateContentBlock: ModelTypes["ContentBlockUpdateResult"],
	upsertContentBlock: ModelTypes["ContentBlockUpsertResult"],
	createContentReference: ModelTypes["ContentReferenceCreateResult"],
	deleteContentReference: ModelTypes["ContentReferenceDeleteResult"],
	updateContentReference: ModelTypes["ContentReferenceUpdateResult"],
	upsertContentReference: ModelTypes["ContentReferenceUpsertResult"],
	createRedirect: ModelTypes["RedirectCreateResult"],
	deleteRedirect: ModelTypes["RedirectDeleteResult"],
	updateRedirect: ModelTypes["RedirectUpdateResult"],
	upsertRedirect: ModelTypes["RedirectUpsertResult"],
	createLink: ModelTypes["LinkCreateResult"],
	deleteLink: ModelTypes["LinkDeleteResult"],
	updateLink: ModelTypes["LinkUpdateResult"],
	upsertLink: ModelTypes["LinkUpsertResult"],
	transaction: ModelTypes["MutationTransaction"],
	query: ModelTypes["Query"],
	generateUploadUrl: ModelTypes["S3SignedUpload"],
	generateReadUrl: ModelTypes["S3SignedRead"]
};
	["GeneralCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["General"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["MutationResult"]: ModelTypes["GeneralCreateResult"] | ModelTypes["GeneralDeleteResult"] | ModelTypes["GeneralUpdateResult"] | ModelTypes["GeneralUpsertResult"] | ModelTypes["ImageCreateResult"] | ModelTypes["ImageDeleteResult"] | ModelTypes["ImageUpdateResult"] | ModelTypes["ImageUpsertResult"] | ModelTypes["GenericPageCreateResult"] | ModelTypes["GenericPageDeleteResult"] | ModelTypes["GenericPageUpdateResult"] | ModelTypes["GenericPageUpsertResult"] | ModelTypes["LinkableCreateResult"] | ModelTypes["LinkableDeleteResult"] | ModelTypes["LinkableUpdateResult"] | ModelTypes["LinkableUpsertResult"] | ModelTypes["SeoCreateResult"] | ModelTypes["SeoDeleteResult"] | ModelTypes["SeoUpdateResult"] | ModelTypes["SeoUpsertResult"] | ModelTypes["ContentCreateResult"] | ModelTypes["ContentDeleteResult"] | ModelTypes["ContentUpdateResult"] | ModelTypes["ContentUpsertResult"] | ModelTypes["ContentBlockCreateResult"] | ModelTypes["ContentBlockDeleteResult"] | ModelTypes["ContentBlockUpdateResult"] | ModelTypes["ContentBlockUpsertResult"] | ModelTypes["ContentReferenceCreateResult"] | ModelTypes["ContentReferenceDeleteResult"] | ModelTypes["ContentReferenceUpdateResult"] | ModelTypes["ContentReferenceUpsertResult"] | ModelTypes["RedirectCreateResult"] | ModelTypes["RedirectDeleteResult"] | ModelTypes["RedirectUpdateResult"] | ModelTypes["RedirectUpsertResult"] | ModelTypes["LinkCreateResult"] | ModelTypes["LinkDeleteResult"] | ModelTypes["LinkUpdateResult"] | ModelTypes["LinkUpsertResult"];
	["_MutationError"]: {
		path: Array<ModelTypes["_PathFragment"]>,
	paths: Array<Array<ModelTypes["_PathFragment"]>>,
	type: ModelTypes["_MutationErrorType"],
	message?: string | undefined
};
	["_MutationErrorType"]:_MutationErrorType;
	["GeneralDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["General"] | undefined
};
	["GeneralUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["General"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["GeneralUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["General"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ImageCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Image"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ImageDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Image"] | undefined
};
	["ImageUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Image"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ImageUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Image"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["GenericPageCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["GenericPage"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["GenericPageDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["GenericPage"] | undefined
};
	["GenericPageUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["GenericPage"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["GenericPageUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["GenericPage"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LinkableCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Linkable"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LinkableDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Linkable"] | undefined
};
	["LinkableUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Linkable"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LinkableUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Linkable"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["SeoCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Seo"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["SeoDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Seo"] | undefined
};
	["SeoUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Seo"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["SeoUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Seo"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Content"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Content"] | undefined
};
	["ContentUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Content"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Content"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentBlockCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentBlock"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentBlockDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentBlock"] | undefined
};
	["ContentBlockUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentBlock"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentBlockUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentBlock"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentReferenceCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentReference"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentReferenceDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentReference"] | undefined
};
	["ContentReferenceUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentReference"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ContentReferenceUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ContentReference"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RedirectCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Redirect"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RedirectDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Redirect"] | undefined
};
	["RedirectUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Redirect"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RedirectUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Redirect"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LinkCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Link"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LinkDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Link"] | undefined
};
	["LinkUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Link"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LinkUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Link"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["MutationTransaction"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	validation: ModelTypes["_ValidationResult"],
	createGeneral: ModelTypes["GeneralCreateResult"],
	deleteGeneral: ModelTypes["GeneralDeleteResult"],
	updateGeneral: ModelTypes["GeneralUpdateResult"],
	upsertGeneral: ModelTypes["GeneralUpsertResult"],
	createImage: ModelTypes["ImageCreateResult"],
	deleteImage: ModelTypes["ImageDeleteResult"],
	updateImage: ModelTypes["ImageUpdateResult"],
	upsertImage: ModelTypes["ImageUpsertResult"],
	createGenericPage: ModelTypes["GenericPageCreateResult"],
	deleteGenericPage: ModelTypes["GenericPageDeleteResult"],
	updateGenericPage: ModelTypes["GenericPageUpdateResult"],
	upsertGenericPage: ModelTypes["GenericPageUpsertResult"],
	createLinkable: ModelTypes["LinkableCreateResult"],
	deleteLinkable: ModelTypes["LinkableDeleteResult"],
	updateLinkable: ModelTypes["LinkableUpdateResult"],
	upsertLinkable: ModelTypes["LinkableUpsertResult"],
	createSeo: ModelTypes["SeoCreateResult"],
	deleteSeo: ModelTypes["SeoDeleteResult"],
	updateSeo: ModelTypes["SeoUpdateResult"],
	upsertSeo: ModelTypes["SeoUpsertResult"],
	createContent: ModelTypes["ContentCreateResult"],
	deleteContent: ModelTypes["ContentDeleteResult"],
	updateContent: ModelTypes["ContentUpdateResult"],
	upsertContent: ModelTypes["ContentUpsertResult"],
	createContentBlock: ModelTypes["ContentBlockCreateResult"],
	deleteContentBlock: ModelTypes["ContentBlockDeleteResult"],
	updateContentBlock: ModelTypes["ContentBlockUpdateResult"],
	upsertContentBlock: ModelTypes["ContentBlockUpsertResult"],
	createContentReference: ModelTypes["ContentReferenceCreateResult"],
	deleteContentReference: ModelTypes["ContentReferenceDeleteResult"],
	updateContentReference: ModelTypes["ContentReferenceUpdateResult"],
	upsertContentReference: ModelTypes["ContentReferenceUpsertResult"],
	createRedirect: ModelTypes["RedirectCreateResult"],
	deleteRedirect: ModelTypes["RedirectDeleteResult"],
	updateRedirect: ModelTypes["RedirectUpdateResult"],
	upsertRedirect: ModelTypes["RedirectUpsertResult"],
	createLink: ModelTypes["LinkCreateResult"],
	deleteLink: ModelTypes["LinkDeleteResult"],
	updateLink: ModelTypes["LinkUpdateResult"],
	upsertLink: ModelTypes["LinkUpsertResult"],
	query?: ModelTypes["Query"] | undefined
};
	["MutationTransactionOptions"]: {
	deferForeignKeyConstraints?: boolean | undefined
};
	["Json"]:any;
	["_Schema"]: {
		enums: Array<ModelTypes["_Enum"]>,
	entities: Array<ModelTypes["_Entity"]>
};
	["_Entity"]: {
		name: string,
	customPrimaryAllowed: boolean,
	fields: Array<ModelTypes["_Field"]>,
	unique: Array<ModelTypes["_UniqueConstraint"]>
};
	["_UniqueConstraint"]: {
		fields: Array<string>
};
	["_Field"]: ModelTypes["_Column"] | ModelTypes["_Relation"];
	["_Column"]: {
		name: string,
	type: string,
	enumName?: string | undefined,
	defaultValue?: ModelTypes["Json"] | undefined,
	nullable: boolean,
	rules: Array<ModelTypes["_Rule"]>,
	validators: Array<ModelTypes["_Validator"]>
};
	["_OnDeleteBehaviour"]:_OnDeleteBehaviour;
	["_RelationSide"]:_RelationSide;
	["_OrderByDirection"]:_OrderByDirection;
	["_OrderBy"]: {
		path: Array<string>,
	direction: ModelTypes["_OrderByDirection"]
};
	["_Relation"]: {
		name: string,
	type: string,
	side: ModelTypes["_RelationSide"],
	targetEntity: string,
	ownedBy?: string | undefined,
	inversedBy?: string | undefined,
	nullable?: boolean | undefined,
	onDelete?: ModelTypes["_OnDeleteBehaviour"] | undefined,
	orphanRemoval?: boolean | undefined,
	orderBy?: Array<ModelTypes["_OrderBy"]> | undefined,
	rules: Array<ModelTypes["_Rule"]>,
	validators: Array<ModelTypes["_Validator"]>
};
	["_Rule"]: {
		message?: ModelTypes["_RuleMessage"] | undefined,
	validator: number
};
	["_Validator"]: {
		operation: string,
	arguments: Array<ModelTypes["_Argument"]>
};
	["_Argument"]:ModelTypes["_ValidatorArgument"] | ModelTypes["_PathArgument"] | ModelTypes["_LiteralArgument"];
	["_ValidatorArgument"]: {
		validator: number
};
	["_PathArgument"]: {
		path: Array<string>
};
	["_LiteralArgument"]: {
		value?: ModelTypes["Json"] | undefined
};
	["_RuleMessage"]: {
		text?: string | undefined
};
	["_Enum"]: {
		name: string,
	values: Array<string>
};
	["S3SignedUpload"]: {
		url: string,
	headers: Array<ModelTypes["S3Header"]>,
	method: string,
	/** Allowed patterns:
** */
	objectKey: string,
	bucket: string,
	publicUrl: string
};
	["S3Header"]: {
		key: string,
	value: string
};
	["S3SignedRead"]: {
		url: string,
	headers: Array<ModelTypes["S3Header"]>,
	method: string,
	/** Allowed patterns:
** */
	objectKey: string,
	bucket: string
}
    }

export type GraphQLTypes = {
    ["Query"]: {
	__typename: "Query",
	getGeneral?: GraphQLTypes["General"] | undefined,
	listGeneral: Array<GraphQLTypes["General"]>,
	paginateGeneral: GraphQLTypes["GeneralConnection"],
	validateCreateGeneral: GraphQLTypes["_ValidationResult"],
	validateUpdateGeneral: GraphQLTypes["_ValidationResult"],
	getImage?: GraphQLTypes["Image"] | undefined,
	listImage: Array<GraphQLTypes["Image"]>,
	paginateImage: GraphQLTypes["ImageConnection"],
	validateCreateImage: GraphQLTypes["_ValidationResult"],
	validateUpdateImage: GraphQLTypes["_ValidationResult"],
	getGenericPage?: GraphQLTypes["GenericPage"] | undefined,
	listGenericPage: Array<GraphQLTypes["GenericPage"]>,
	paginateGenericPage: GraphQLTypes["GenericPageConnection"],
	validateCreateGenericPage: GraphQLTypes["_ValidationResult"],
	validateUpdateGenericPage: GraphQLTypes["_ValidationResult"],
	getLinkable?: GraphQLTypes["Linkable"] | undefined,
	listLinkable: Array<GraphQLTypes["Linkable"]>,
	paginateLinkable: GraphQLTypes["LinkableConnection"],
	validateCreateLinkable: GraphQLTypes["_ValidationResult"],
	validateUpdateLinkable: GraphQLTypes["_ValidationResult"],
	getSeo?: GraphQLTypes["Seo"] | undefined,
	listSeo: Array<GraphQLTypes["Seo"]>,
	paginateSeo: GraphQLTypes["SeoConnection"],
	validateCreateSeo: GraphQLTypes["_ValidationResult"],
	validateUpdateSeo: GraphQLTypes["_ValidationResult"],
	getContent?: GraphQLTypes["Content"] | undefined,
	listContent: Array<GraphQLTypes["Content"]>,
	paginateContent: GraphQLTypes["ContentConnection"],
	validateCreateContent: GraphQLTypes["_ValidationResult"],
	validateUpdateContent: GraphQLTypes["_ValidationResult"],
	getContentBlock?: GraphQLTypes["ContentBlock"] | undefined,
	listContentBlock: Array<GraphQLTypes["ContentBlock"]>,
	paginateContentBlock: GraphQLTypes["ContentBlockConnection"],
	validateCreateContentBlock: GraphQLTypes["_ValidationResult"],
	validateUpdateContentBlock: GraphQLTypes["_ValidationResult"],
	getContentReference?: GraphQLTypes["ContentReference"] | undefined,
	listContentReference: Array<GraphQLTypes["ContentReference"]>,
	paginateContentReference: GraphQLTypes["ContentReferenceConnection"],
	validateCreateContentReference: GraphQLTypes["_ValidationResult"],
	validateUpdateContentReference: GraphQLTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: GraphQLTypes["ContentReferenceLinkableItemConnection"],
	getRedirect?: GraphQLTypes["Redirect"] | undefined,
	listRedirect: Array<GraphQLTypes["Redirect"]>,
	paginateRedirect: GraphQLTypes["RedirectConnection"],
	validateCreateRedirect: GraphQLTypes["_ValidationResult"],
	validateUpdateRedirect: GraphQLTypes["_ValidationResult"],
	getLink?: GraphQLTypes["Link"] | undefined,
	listLink: Array<GraphQLTypes["Link"]>,
	paginateLink: GraphQLTypes["LinkConnection"],
	validateCreateLink: GraphQLTypes["_ValidationResult"],
	validateUpdateLink: GraphQLTypes["_ValidationResult"],
	transaction?: GraphQLTypes["QueryTransaction"] | undefined,
	_info?: GraphQLTypes["Info"] | undefined,
	schema?: GraphQLTypes["_Schema"] | undefined,
	s3DummyQuery?: string | undefined
};
	["General"]: {
	__typename: "General",
	_meta?: GraphQLTypes["GeneralMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	unique: GraphQLTypes["One"],
	dummy?: string | undefined,
	image?: GraphQLTypes["Image"] | undefined,
	seo?: GraphQLTypes["Seo"] | undefined
};
	["GeneralMeta"]: {
	__typename: "GeneralMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	unique?: GraphQLTypes["FieldMeta"] | undefined,
	dummy?: GraphQLTypes["FieldMeta"] | undefined,
	image?: GraphQLTypes["FieldMeta"] | undefined,
	seo?: GraphQLTypes["FieldMeta"] | undefined
};
	["FieldMeta"]: {
	__typename: "FieldMeta",
	readable?: boolean | undefined,
	updatable?: boolean | undefined
};
	["UUID"]: "scalar" & { name: "UUID" };
	["One"]: One;
	["Image"]: {
	__typename: "Image",
	_meta?: GraphQLTypes["ImageMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	url: string,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined
};
	["ImageMeta"]: {
	__typename: "ImageMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	url?: GraphQLTypes["FieldMeta"] | undefined,
	width?: GraphQLTypes["FieldMeta"] | undefined,
	height?: GraphQLTypes["FieldMeta"] | undefined,
	size?: GraphQLTypes["FieldMeta"] | undefined,
	type?: GraphQLTypes["FieldMeta"] | undefined,
	alt?: GraphQLTypes["FieldMeta"] | undefined
};
	["ImageWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	url?: GraphQLTypes["StringCondition"] | undefined,
	width?: GraphQLTypes["IntCondition"] | undefined,
	height?: GraphQLTypes["IntCondition"] | undefined,
	size?: GraphQLTypes["IntCondition"] | undefined,
	type?: GraphQLTypes["StringCondition"] | undefined,
	alt?: GraphQLTypes["StringCondition"] | undefined,
	and?: Array<GraphQLTypes["ImageWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ImageWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ImageWhere"] | undefined
};
	["UUIDCondition"]: {
		and?: Array<GraphQLTypes["UUIDCondition"]> | undefined,
	or?: Array<GraphQLTypes["UUIDCondition"]> | undefined,
	not?: GraphQLTypes["UUIDCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["UUID"] | undefined,
	notEq?: GraphQLTypes["UUID"] | undefined,
	in?: Array<GraphQLTypes["UUID"]> | undefined,
	notIn?: Array<GraphQLTypes["UUID"]> | undefined,
	lt?: GraphQLTypes["UUID"] | undefined,
	lte?: GraphQLTypes["UUID"] | undefined,
	gt?: GraphQLTypes["UUID"] | undefined,
	gte?: GraphQLTypes["UUID"] | undefined
};
	["StringCondition"]: {
		and?: Array<GraphQLTypes["StringCondition"]> | undefined,
	or?: Array<GraphQLTypes["StringCondition"]> | undefined,
	not?: GraphQLTypes["StringCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: string | undefined,
	notEq?: string | undefined,
	in?: Array<string> | undefined,
	notIn?: Array<string> | undefined,
	lt?: string | undefined,
	lte?: string | undefined,
	gt?: string | undefined,
	gte?: string | undefined,
	contains?: string | undefined,
	startsWith?: string | undefined,
	endsWith?: string | undefined,
	containsCI?: string | undefined,
	startsWithCI?: string | undefined,
	endsWithCI?: string | undefined
};
	["IntCondition"]: {
		and?: Array<GraphQLTypes["IntCondition"]> | undefined,
	or?: Array<GraphQLTypes["IntCondition"]> | undefined,
	not?: GraphQLTypes["IntCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: number | undefined,
	notEq?: number | undefined,
	in?: Array<number> | undefined,
	notIn?: Array<number> | undefined,
	lt?: number | undefined,
	lte?: number | undefined,
	gt?: number | undefined,
	gte?: number | undefined
};
	["Seo"]: {
	__typename: "Seo",
	_meta?: GraphQLTypes["SeoMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	ogTitle?: string | undefined,
	ogDescription?: string | undefined,
	noIndex?: boolean | undefined,
	noFollow?: boolean | undefined,
	ogImage?: GraphQLTypes["Image"] | undefined
};
	["SeoMeta"]: {
	__typename: "SeoMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	description?: GraphQLTypes["FieldMeta"] | undefined,
	ogTitle?: GraphQLTypes["FieldMeta"] | undefined,
	ogDescription?: GraphQLTypes["FieldMeta"] | undefined,
	noIndex?: GraphQLTypes["FieldMeta"] | undefined,
	noFollow?: GraphQLTypes["FieldMeta"] | undefined,
	ogImage?: GraphQLTypes["FieldMeta"] | undefined
};
	["SeoWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	description?: GraphQLTypes["StringCondition"] | undefined,
	ogTitle?: GraphQLTypes["StringCondition"] | undefined,
	ogDescription?: GraphQLTypes["StringCondition"] | undefined,
	noIndex?: GraphQLTypes["BooleanCondition"] | undefined,
	noFollow?: GraphQLTypes["BooleanCondition"] | undefined,
	ogImage?: GraphQLTypes["ImageWhere"] | undefined,
	and?: Array<GraphQLTypes["SeoWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["SeoWhere"] | undefined> | undefined,
	not?: GraphQLTypes["SeoWhere"] | undefined
};
	["BooleanCondition"]: {
		and?: Array<GraphQLTypes["BooleanCondition"]> | undefined,
	or?: Array<GraphQLTypes["BooleanCondition"]> | undefined,
	not?: GraphQLTypes["BooleanCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: boolean | undefined,
	notEq?: boolean | undefined,
	in?: Array<boolean> | undefined,
	notIn?: Array<boolean> | undefined,
	lt?: boolean | undefined,
	lte?: boolean | undefined,
	gt?: boolean | undefined,
	gte?: boolean | undefined
};
	["GeneralUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	unique?: GraphQLTypes["One"] | undefined,
	seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["SeoUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	ogImage?: GraphQLTypes["ImageUniqueWhere"] | undefined
};
	["ImageUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
};
	["GeneralWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	unique?: GraphQLTypes["OneCondition"] | undefined,
	dummy?: GraphQLTypes["StringCondition"] | undefined,
	image?: GraphQLTypes["ImageWhere"] | undefined,
	seo?: GraphQLTypes["SeoWhere"] | undefined,
	and?: Array<GraphQLTypes["GeneralWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["GeneralWhere"] | undefined> | undefined,
	not?: GraphQLTypes["GeneralWhere"] | undefined
};
	["OneCondition"]: {
		and?: Array<GraphQLTypes["OneCondition"]> | undefined,
	or?: Array<GraphQLTypes["OneCondition"]> | undefined,
	not?: GraphQLTypes["OneCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["One"] | undefined,
	notEq?: GraphQLTypes["One"] | undefined,
	in?: Array<GraphQLTypes["One"]> | undefined,
	notIn?: Array<GraphQLTypes["One"]> | undefined,
	lt?: GraphQLTypes["One"] | undefined,
	lte?: GraphQLTypes["One"] | undefined,
	gt?: GraphQLTypes["One"] | undefined,
	gte?: GraphQLTypes["One"] | undefined
};
	["GeneralOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	unique?: GraphQLTypes["OrderDirection"] | undefined,
	dummy?: GraphQLTypes["OrderDirection"] | undefined,
	image?: GraphQLTypes["ImageOrderBy"] | undefined,
	seo?: GraphQLTypes["SeoOrderBy"] | undefined
};
	["OrderDirection"]: OrderDirection;
	["ImageOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	url?: GraphQLTypes["OrderDirection"] | undefined,
	width?: GraphQLTypes["OrderDirection"] | undefined,
	height?: GraphQLTypes["OrderDirection"] | undefined,
	size?: GraphQLTypes["OrderDirection"] | undefined,
	type?: GraphQLTypes["OrderDirection"] | undefined,
	alt?: GraphQLTypes["OrderDirection"] | undefined
};
	["SeoOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	description?: GraphQLTypes["OrderDirection"] | undefined,
	ogTitle?: GraphQLTypes["OrderDirection"] | undefined,
	ogDescription?: GraphQLTypes["OrderDirection"] | undefined,
	noIndex?: GraphQLTypes["OrderDirection"] | undefined,
	noFollow?: GraphQLTypes["OrderDirection"] | undefined,
	ogImage?: GraphQLTypes["ImageOrderBy"] | undefined
};
	["GeneralConnection"]: {
	__typename: "GeneralConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["GeneralEdge"]>
};
	["PageInfo"]: {
	__typename: "PageInfo",
	totalCount: number
};
	["GeneralEdge"]: {
	__typename: "GeneralEdge",
	node: GraphQLTypes["General"]
};
	["_ValidationResult"]: {
	__typename: "_ValidationResult",
	valid: boolean,
	errors: Array<GraphQLTypes["_ValidationError"]>
};
	["_ValidationError"]: {
	__typename: "_ValidationError",
	path: Array<GraphQLTypes["_PathFragment"]>,
	message: GraphQLTypes["_ValidationMessage"]
};
	["_PathFragment"]:{
        	__typename:"_FieldPathFragment" | "_IndexPathFragment"
        	['...on _FieldPathFragment']: '__union' & GraphQLTypes["_FieldPathFragment"];
	['...on _IndexPathFragment']: '__union' & GraphQLTypes["_IndexPathFragment"];
};
	["_FieldPathFragment"]: {
	__typename: "_FieldPathFragment",
	field: string
};
	["_IndexPathFragment"]: {
	__typename: "_IndexPathFragment",
	index: number,
	alias?: string | undefined
};
	["_ValidationMessage"]: {
	__typename: "_ValidationMessage",
	text: string
};
	["GeneralCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	unique?: GraphQLTypes["One"] | undefined,
	dummy?: string | undefined,
	image?: GraphQLTypes["GeneralCreateImageEntityRelationInput"] | undefined,
	seo?: GraphQLTypes["GeneralCreateSeoEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralCreateImageEntityRelationInput"]: {
		connect?: GraphQLTypes["ImageUniqueWhere"] | undefined,
	create?: GraphQLTypes["ImageCreateInput"] | undefined
};
	["ImageCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralCreateSeoEntityRelationInput"]: {
		connect?: GraphQLTypes["SeoUniqueWhere"] | undefined,
	create?: GraphQLTypes["SeoCreateInput"] | undefined
};
	["SeoCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	ogTitle?: string | undefined,
	ogDescription?: string | undefined,
	noIndex?: boolean | undefined,
	noFollow?: boolean | undefined,
	ogImage?: GraphQLTypes["SeoCreateOgImageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["SeoCreateOgImageEntityRelationInput"]: {
		connect?: GraphQLTypes["ImageUniqueWhere"] | undefined,
	create?: GraphQLTypes["ImageCreateInput"] | undefined
};
	["GeneralUpdateInput"]: {
		unique?: GraphQLTypes["One"] | undefined,
	dummy?: string | undefined,
	image?: GraphQLTypes["GeneralUpdateImageEntityRelationInput"] | undefined,
	seo?: GraphQLTypes["GeneralUpdateSeoEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralUpdateImageEntityRelationInput"]: {
		create?: GraphQLTypes["ImageCreateInput"] | undefined,
	update?: GraphQLTypes["ImageUpdateInput"] | undefined,
	upsert?: GraphQLTypes["GeneralUpsertImageRelationInput"] | undefined,
	connect?: GraphQLTypes["ImageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["ImageUpdateInput"]: {
		url?: string | undefined,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["GeneralUpsertImageRelationInput"]: {
		update?: GraphQLTypes["ImageUpdateInput"] | undefined,
	create?: GraphQLTypes["ImageCreateInput"] | undefined
};
	["GeneralUpdateSeoEntityRelationInput"]: {
		create?: GraphQLTypes["SeoCreateInput"] | undefined,
	update?: GraphQLTypes["SeoUpdateInput"] | undefined,
	upsert?: GraphQLTypes["GeneralUpsertSeoRelationInput"] | undefined,
	connect?: GraphQLTypes["SeoUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["SeoUpdateInput"]: {
		title?: string | undefined,
	description?: string | undefined,
	ogTitle?: string | undefined,
	ogDescription?: string | undefined,
	noIndex?: boolean | undefined,
	noFollow?: boolean | undefined,
	ogImage?: GraphQLTypes["SeoUpdateOgImageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["SeoUpdateOgImageEntityRelationInput"]: {
		create?: GraphQLTypes["ImageCreateInput"] | undefined,
	update?: GraphQLTypes["ImageUpdateInput"] | undefined,
	upsert?: GraphQLTypes["SeoUpsertOgImageRelationInput"] | undefined,
	connect?: GraphQLTypes["ImageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["SeoUpsertOgImageRelationInput"]: {
		update?: GraphQLTypes["ImageUpdateInput"] | undefined,
	create?: GraphQLTypes["ImageCreateInput"] | undefined
};
	["GeneralUpsertSeoRelationInput"]: {
		update?: GraphQLTypes["SeoUpdateInput"] | undefined,
	create?: GraphQLTypes["SeoCreateInput"] | undefined
};
	["ImageConnection"]: {
	__typename: "ImageConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ImageEdge"]>
};
	["ImageEdge"]: {
	__typename: "ImageEdge",
	node: GraphQLTypes["Image"]
};
	["GenericPage"]: {
	__typename: "GenericPage",
	_meta?: GraphQLTypes["GenericPageMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	seo?: GraphQLTypes["Seo"] | undefined,
	link?: GraphQLTypes["Linkable"] | undefined,
	title?: string | undefined,
	content?: GraphQLTypes["Content"] | undefined
};
	["GenericPageMeta"]: {
	__typename: "GenericPageMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	seo?: GraphQLTypes["FieldMeta"] | undefined,
	link?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	content?: GraphQLTypes["FieldMeta"] | undefined
};
	["Linkable"]: {
	__typename: "Linkable",
	_meta?: GraphQLTypes["LinkableMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	url: string,
	genericPage?: GraphQLTypes["GenericPage"] | undefined,
	redirect?: GraphQLTypes["Redirect"] | undefined
};
	["LinkableMeta"]: {
	__typename: "LinkableMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	url?: GraphQLTypes["FieldMeta"] | undefined,
	genericPage?: GraphQLTypes["FieldMeta"] | undefined,
	redirect?: GraphQLTypes["FieldMeta"] | undefined
};
	["GenericPageWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	seo?: GraphQLTypes["SeoWhere"] | undefined,
	link?: GraphQLTypes["LinkableWhere"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	content?: GraphQLTypes["ContentWhere"] | undefined,
	and?: Array<GraphQLTypes["GenericPageWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["GenericPageWhere"] | undefined> | undefined,
	not?: GraphQLTypes["GenericPageWhere"] | undefined
};
	["LinkableWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	url?: GraphQLTypes["StringCondition"] | undefined,
	genericPage?: GraphQLTypes["GenericPageWhere"] | undefined,
	redirect?: GraphQLTypes["RedirectWhere"] | undefined,
	and?: Array<GraphQLTypes["LinkableWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["LinkableWhere"] | undefined> | undefined,
	not?: GraphQLTypes["LinkableWhere"] | undefined
};
	["RedirectWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	link?: GraphQLTypes["LinkableWhere"] | undefined,
	target?: GraphQLTypes["LinkWhere"] | undefined,
	and?: Array<GraphQLTypes["RedirectWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["RedirectWhere"] | undefined> | undefined,
	not?: GraphQLTypes["RedirectWhere"] | undefined
};
	["LinkWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	type?: GraphQLTypes["LinkTypeCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	externalLink?: GraphQLTypes["StringCondition"] | undefined,
	internalLink?: GraphQLTypes["LinkableWhere"] | undefined,
	and?: Array<GraphQLTypes["LinkWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["LinkWhere"] | undefined> | undefined,
	not?: GraphQLTypes["LinkWhere"] | undefined
};
	["LinkTypeCondition"]: {
		and?: Array<GraphQLTypes["LinkTypeCondition"]> | undefined,
	or?: Array<GraphQLTypes["LinkTypeCondition"]> | undefined,
	not?: GraphQLTypes["LinkTypeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["LinkType"] | undefined,
	notEq?: GraphQLTypes["LinkType"] | undefined,
	in?: Array<GraphQLTypes["LinkType"]> | undefined,
	notIn?: Array<GraphQLTypes["LinkType"]> | undefined,
	lt?: GraphQLTypes["LinkType"] | undefined,
	lte?: GraphQLTypes["LinkType"] | undefined,
	gt?: GraphQLTypes["LinkType"] | undefined,
	gte?: GraphQLTypes["LinkType"] | undefined
};
	["LinkType"]: LinkType;
	["ContentWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	blocks?: GraphQLTypes["ContentBlockWhere"] | undefined,
	and?: Array<GraphQLTypes["ContentWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ContentWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ContentWhere"] | undefined
};
	["ContentBlockWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	json?: GraphQLTypes["StringCondition"] | undefined,
	content?: GraphQLTypes["ContentWhere"] | undefined,
	references?: GraphQLTypes["ContentReferenceWhere"] | undefined,
	and?: Array<GraphQLTypes["ContentBlockWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ContentBlockWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ContentBlockWhere"] | undefined
};
	["ContentReferenceWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	type?: GraphQLTypes["ContentReferenceTypeCondition"] | undefined,
	primaryText?: GraphQLTypes["StringCondition"] | undefined,
	block?: GraphQLTypes["ContentBlockWhere"] | undefined,
	image?: GraphQLTypes["ImageWhere"] | undefined,
	linkables?: GraphQLTypes["ContentReferenceLinkableItemWhere"] | undefined,
	and?: Array<GraphQLTypes["ContentReferenceWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ContentReferenceWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ContentReferenceWhere"] | undefined
};
	["ContentReferenceTypeCondition"]: {
		and?: Array<GraphQLTypes["ContentReferenceTypeCondition"]> | undefined,
	or?: Array<GraphQLTypes["ContentReferenceTypeCondition"]> | undefined,
	not?: GraphQLTypes["ContentReferenceTypeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["ContentReferenceType"] | undefined,
	notEq?: GraphQLTypes["ContentReferenceType"] | undefined,
	in?: Array<GraphQLTypes["ContentReferenceType"]> | undefined,
	notIn?: Array<GraphQLTypes["ContentReferenceType"]> | undefined,
	lt?: GraphQLTypes["ContentReferenceType"] | undefined,
	lte?: GraphQLTypes["ContentReferenceType"] | undefined,
	gt?: GraphQLTypes["ContentReferenceType"] | undefined,
	gte?: GraphQLTypes["ContentReferenceType"] | undefined
};
	["ContentReferenceType"]: ContentReferenceType;
	["ContentReferenceLinkableItemWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	item?: GraphQLTypes["LinkableWhere"] | undefined,
	reference?: GraphQLTypes["ContentReferenceWhere"] | undefined,
	and?: Array<GraphQLTypes["ContentReferenceLinkableItemWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ContentReferenceLinkableItemWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ContentReferenceLinkableItemWhere"] | undefined
};
	["Redirect"]: {
	__typename: "Redirect",
	_meta?: GraphQLTypes["RedirectMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	link?: GraphQLTypes["Linkable"] | undefined,
	target?: GraphQLTypes["Link"] | undefined
};
	["RedirectMeta"]: {
	__typename: "RedirectMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	link?: GraphQLTypes["FieldMeta"] | undefined,
	target?: GraphQLTypes["FieldMeta"] | undefined
};
	["Link"]: {
	__typename: "Link",
	_meta?: GraphQLTypes["LinkMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	type: GraphQLTypes["LinkType"],
	title?: string | undefined,
	externalLink?: string | undefined,
	internalLink?: GraphQLTypes["Linkable"] | undefined
};
	["LinkMeta"]: {
	__typename: "LinkMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	type?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	externalLink?: GraphQLTypes["FieldMeta"] | undefined,
	internalLink?: GraphQLTypes["FieldMeta"] | undefined
};
	["Content"]: {
	__typename: "Content",
	_meta?: GraphQLTypes["ContentMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	blocks: Array<GraphQLTypes["ContentBlock"]>,
	blocksByReferences?: GraphQLTypes["ContentBlock"] | undefined,
	paginateBlocks: GraphQLTypes["ContentBlockConnection"]
};
	["ContentMeta"]: {
	__typename: "ContentMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	blocks?: GraphQLTypes["FieldMeta"] | undefined
};
	["ContentBlock"]: {
	__typename: "ContentBlock",
	_meta?: GraphQLTypes["ContentBlockMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	json: string,
	content?: GraphQLTypes["Content"] | undefined,
	references: Array<GraphQLTypes["ContentReference"]>,
	referencesByLinkables?: GraphQLTypes["ContentReference"] | undefined,
	paginateReferences: GraphQLTypes["ContentReferenceConnection"]
};
	["ContentBlockMeta"]: {
	__typename: "ContentBlockMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	json?: GraphQLTypes["FieldMeta"] | undefined,
	content?: GraphQLTypes["FieldMeta"] | undefined,
	references?: GraphQLTypes["FieldMeta"] | undefined
};
	["ContentReference"]: {
	__typename: "ContentReference",
	_meta?: GraphQLTypes["ContentReferenceMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	type: GraphQLTypes["ContentReferenceType"],
	primaryText?: string | undefined,
	block?: GraphQLTypes["ContentBlock"] | undefined,
	image?: GraphQLTypes["Image"] | undefined,
	linkables: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	linkablesByItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	paginateLinkables: GraphQLTypes["ContentReferenceLinkableItemConnection"]
};
	["ContentReferenceMeta"]: {
	__typename: "ContentReferenceMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	type?: GraphQLTypes["FieldMeta"] | undefined,
	primaryText?: GraphQLTypes["FieldMeta"] | undefined,
	block?: GraphQLTypes["FieldMeta"] | undefined,
	image?: GraphQLTypes["FieldMeta"] | undefined,
	linkables?: GraphQLTypes["FieldMeta"] | undefined
};
	["ContentReferenceLinkableItem"]: {
	__typename: "ContentReferenceLinkableItem",
	_meta?: GraphQLTypes["ContentReferenceLinkableItemMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	item?: GraphQLTypes["Linkable"] | undefined,
	reference?: GraphQLTypes["ContentReference"] | undefined
};
	["ContentReferenceLinkableItemMeta"]: {
	__typename: "ContentReferenceLinkableItemMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	item?: GraphQLTypes["FieldMeta"] | undefined,
	reference?: GraphQLTypes["FieldMeta"] | undefined
};
	["ContentReferenceLinkableItemOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	item?: GraphQLTypes["LinkableOrderBy"] | undefined,
	reference?: GraphQLTypes["ContentReferenceOrderBy"] | undefined
};
	["LinkableOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	url?: GraphQLTypes["OrderDirection"] | undefined,
	genericPage?: GraphQLTypes["GenericPageOrderBy"] | undefined,
	redirect?: GraphQLTypes["RedirectOrderBy"] | undefined
};
	["GenericPageOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	seo?: GraphQLTypes["SeoOrderBy"] | undefined,
	link?: GraphQLTypes["LinkableOrderBy"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	content?: GraphQLTypes["ContentOrderBy"] | undefined
};
	["ContentOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined
};
	["RedirectOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	link?: GraphQLTypes["LinkableOrderBy"] | undefined,
	target?: GraphQLTypes["LinkOrderBy"] | undefined
};
	["LinkOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	type?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	externalLink?: GraphQLTypes["OrderDirection"] | undefined,
	internalLink?: GraphQLTypes["LinkableOrderBy"] | undefined
};
	["ContentReferenceOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	type?: GraphQLTypes["OrderDirection"] | undefined,
	primaryText?: GraphQLTypes["OrderDirection"] | undefined,
	block?: GraphQLTypes["ContentBlockOrderBy"] | undefined,
	image?: GraphQLTypes["ImageOrderBy"] | undefined
};
	["ContentBlockOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	json?: GraphQLTypes["OrderDirection"] | undefined,
	content?: GraphQLTypes["ContentOrderBy"] | undefined
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
		item?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["LinkableUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined,
	genericPage?: GraphQLTypes["GenericPageUniqueWhere"] | undefined,
	redirect?: GraphQLTypes["RedirectUniqueWhere"] | undefined
};
	["GenericPageUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	seo?: GraphQLTypes["SeoUniqueWhere"] | undefined,
	link?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	content?: GraphQLTypes["ContentUniqueWhere"] | undefined
};
	["ContentUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	blocks?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined
};
	["ContentBlockUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	references?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined
};
	["ContentReferenceUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	linkables?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	item?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["RedirectUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	link?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	target?: GraphQLTypes["LinkUniqueWhere"] | undefined
};
	["LinkUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
};
	["ContentReferenceLinkableItemConnection"]: {
	__typename: "ContentReferenceLinkableItemConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ContentReferenceLinkableItemEdge"]>
};
	["ContentReferenceLinkableItemEdge"]: {
	__typename: "ContentReferenceLinkableItemEdge",
	node: GraphQLTypes["ContentReferenceLinkableItem"]
};
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
		linkables?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentReferenceConnection"]: {
	__typename: "ContentReferenceConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ContentReferenceEdge"]>
};
	["ContentReferenceEdge"]: {
	__typename: "ContentReferenceEdge",
	node: GraphQLTypes["ContentReference"]
};
	["ContentBlocksByReferencesUniqueWhere"]: {
		references?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined
};
	["ContentBlockConnection"]: {
	__typename: "ContentBlockConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ContentBlockEdge"]>
};
	["ContentBlockEdge"]: {
	__typename: "ContentBlockEdge",
	node: GraphQLTypes["ContentBlock"]
};
	["GenericPageConnection"]: {
	__typename: "GenericPageConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["GenericPageEdge"]>
};
	["GenericPageEdge"]: {
	__typename: "GenericPageEdge",
	node: GraphQLTypes["GenericPage"]
};
	["GenericPageCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	seo?: GraphQLTypes["GenericPageCreateSeoEntityRelationInput"] | undefined,
	link?: GraphQLTypes["GenericPageCreateLinkEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: GraphQLTypes["GenericPageCreateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageCreateSeoEntityRelationInput"]: {
		connect?: GraphQLTypes["SeoUniqueWhere"] | undefined,
	create?: GraphQLTypes["SeoCreateInput"] | undefined
};
	["GenericPageCreateLinkEntityRelationInput"]: {
		connect?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	create?: GraphQLTypes["LinkableWithoutGenericPageCreateInput"] | undefined
};
	["LinkableWithoutGenericPageCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined,
	redirect?: GraphQLTypes["LinkableCreateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableCreateRedirectEntityRelationInput"]: {
		connect?: GraphQLTypes["RedirectUniqueWhere"] | undefined,
	create?: GraphQLTypes["RedirectWithoutLinkCreateInput"] | undefined
};
	["RedirectWithoutLinkCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	target?: GraphQLTypes["RedirectCreateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectCreateTargetEntityRelationInput"]: {
		connect?: GraphQLTypes["LinkUniqueWhere"] | undefined,
	create?: GraphQLTypes["LinkCreateInput"] | undefined
};
	["LinkCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	type?: GraphQLTypes["LinkType"] | undefined,
	title?: string | undefined,
	externalLink?: string | undefined,
	internalLink?: GraphQLTypes["LinkCreateInternalLinkEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkCreateInternalLinkEntityRelationInput"]: {
		connect?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	create?: GraphQLTypes["LinkableCreateInput"] | undefined
};
	["LinkableCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined,
	genericPage?: GraphQLTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined,
	redirect?: GraphQLTypes["LinkableCreateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableCreateGenericPageEntityRelationInput"]: {
		connect?: GraphQLTypes["GenericPageUniqueWhere"] | undefined,
	create?: GraphQLTypes["GenericPageWithoutLinkCreateInput"] | undefined
};
	["GenericPageWithoutLinkCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	seo?: GraphQLTypes["GenericPageCreateSeoEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: GraphQLTypes["GenericPageCreateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageCreateContentEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentUniqueWhere"] | undefined,
	create?: GraphQLTypes["ContentCreateInput"] | undefined
};
	["ContentCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	blocks?: Array<GraphQLTypes["ContentCreateBlocksEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentCreateBlocksEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	create?: GraphQLTypes["ContentBlockWithoutContentCreateInput"] | undefined,
	alias?: string | undefined
};
	["ContentBlockWithoutContentCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	order?: number | undefined,
	json?: string | undefined,
	references?: Array<GraphQLTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockCreateReferencesEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined,
	create?: GraphQLTypes["ContentReferenceWithoutBlockCreateInput"] | undefined,
	alias?: string | undefined
};
	["ContentReferenceWithoutBlockCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	type?: GraphQLTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	image?: GraphQLTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined,
	linkables?: Array<GraphQLTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceCreateImageEntityRelationInput"]: {
		connect?: GraphQLTypes["ImageUniqueWhere"] | undefined,
	create?: GraphQLTypes["ImageCreateInput"] | undefined
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["GenericPageUpdateInput"]: {
		seo?: GraphQLTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined,
	link?: GraphQLTypes["GenericPageUpdateLinkEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: GraphQLTypes["GenericPageUpdateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageUpdateSeoEntityRelationInput"]: {
		create?: GraphQLTypes["SeoCreateInput"] | undefined,
	update?: GraphQLTypes["SeoUpdateInput"] | undefined,
	upsert?: GraphQLTypes["GenericPageUpsertSeoRelationInput"] | undefined,
	connect?: GraphQLTypes["SeoUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["GenericPageUpsertSeoRelationInput"]: {
		update?: GraphQLTypes["SeoUpdateInput"] | undefined,
	create?: GraphQLTypes["SeoCreateInput"] | undefined
};
	["GenericPageUpdateLinkEntityRelationInput"]: {
		create?: GraphQLTypes["LinkableWithoutGenericPageCreateInput"] | undefined,
	update?: GraphQLTypes["LinkableWithoutGenericPageUpdateInput"] | undefined,
	upsert?: GraphQLTypes["GenericPageUpsertLinkRelationInput"] | undefined,
	connect?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkableWithoutGenericPageUpdateInput"]: {
		url?: string | undefined,
	redirect?: GraphQLTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableUpdateRedirectEntityRelationInput"]: {
		create?: GraphQLTypes["RedirectWithoutLinkCreateInput"] | undefined,
	update?: GraphQLTypes["RedirectWithoutLinkUpdateInput"] | undefined,
	upsert?: GraphQLTypes["LinkableUpsertRedirectRelationInput"] | undefined,
	connect?: GraphQLTypes["RedirectUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["RedirectWithoutLinkUpdateInput"]: {
		target?: GraphQLTypes["RedirectUpdateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpdateTargetEntityRelationInput"]: {
		create?: GraphQLTypes["LinkCreateInput"] | undefined,
	update?: GraphQLTypes["LinkUpdateInput"] | undefined,
	upsert?: GraphQLTypes["RedirectUpsertTargetRelationInput"] | undefined,
	connect?: GraphQLTypes["LinkUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkUpdateInput"]: {
		type?: GraphQLTypes["LinkType"] | undefined,
	title?: string | undefined,
	externalLink?: string | undefined,
	internalLink?: GraphQLTypes["LinkUpdateInternalLinkEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkUpdateInternalLinkEntityRelationInput"]: {
		create?: GraphQLTypes["LinkableCreateInput"] | undefined,
	update?: GraphQLTypes["LinkableUpdateInput"] | undefined,
	upsert?: GraphQLTypes["LinkUpsertInternalLinkRelationInput"] | undefined,
	connect?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkableUpdateInput"]: {
		url?: string | undefined,
	genericPage?: GraphQLTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined,
	redirect?: GraphQLTypes["LinkableUpdateRedirectEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["LinkableUpdateGenericPageEntityRelationInput"]: {
		create?: GraphQLTypes["GenericPageWithoutLinkCreateInput"] | undefined,
	update?: GraphQLTypes["GenericPageWithoutLinkUpdateInput"] | undefined,
	upsert?: GraphQLTypes["LinkableUpsertGenericPageRelationInput"] | undefined,
	connect?: GraphQLTypes["GenericPageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["GenericPageWithoutLinkUpdateInput"]: {
		seo?: GraphQLTypes["GenericPageUpdateSeoEntityRelationInput"] | undefined,
	title?: string | undefined,
	content?: GraphQLTypes["GenericPageUpdateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["GenericPageUpdateContentEntityRelationInput"]: {
		create?: GraphQLTypes["ContentCreateInput"] | undefined,
	update?: GraphQLTypes["ContentUpdateInput"] | undefined,
	upsert?: GraphQLTypes["GenericPageUpsertContentRelationInput"] | undefined,
	connect?: GraphQLTypes["ContentUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["ContentUpdateInput"]: {
		blocks?: Array<GraphQLTypes["ContentUpdateBlocksEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentUpdateBlocksEntityRelationInput"]: {
		create?: GraphQLTypes["ContentBlockWithoutContentCreateInput"] | undefined,
	update?: GraphQLTypes["ContentUpdateBlocksRelationInput"] | undefined,
	upsert?: GraphQLTypes["ContentUpsertBlocksRelationInput"] | undefined,
	connect?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	disconnect?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	delete?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["ContentUpdateBlocksRelationInput"]: {
		by?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	data?: GraphQLTypes["ContentBlockWithoutContentUpdateInput"] | undefined
};
	["ContentBlockWithoutContentUpdateInput"]: {
		order?: number | undefined,
	json?: string | undefined,
	references?: Array<GraphQLTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpdateReferencesEntityRelationInput"]: {
		create?: GraphQLTypes["ContentReferenceWithoutBlockCreateInput"] | undefined,
	update?: GraphQLTypes["ContentBlockUpdateReferencesRelationInput"] | undefined,
	upsert?: GraphQLTypes["ContentBlockUpsertReferencesRelationInput"] | undefined,
	connect?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined,
	disconnect?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined,
	delete?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["ContentBlockUpdateReferencesRelationInput"]: {
		by?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined,
	data?: GraphQLTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined
};
	["ContentReferenceWithoutBlockUpdateInput"]: {
		type?: GraphQLTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	image?: GraphQLTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined,
	linkables?: Array<GraphQLTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpdateImageEntityRelationInput"]: {
		create?: GraphQLTypes["ImageCreateInput"] | undefined,
	update?: GraphQLTypes["ImageUpdateInput"] | undefined,
	upsert?: GraphQLTypes["ContentReferenceUpsertImageRelationInput"] | undefined,
	connect?: GraphQLTypes["ImageUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["ContentReferenceUpsertImageRelationInput"]: {
		update?: GraphQLTypes["ImageUpdateInput"] | undefined,
	create?: GraphQLTypes["ImageCreateInput"] | undefined
};
	["ContentReferenceUpdateLinkablesEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	disconnect?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	delete?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["ContentBlockUpsertReferencesRelationInput"]: {
		by?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined,
	update?: GraphQLTypes["ContentReferenceWithoutBlockUpdateInput"] | undefined,
	create?: GraphQLTypes["ContentReferenceWithoutBlockCreateInput"] | undefined
};
	["ContentUpsertBlocksRelationInput"]: {
		by?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	update?: GraphQLTypes["ContentBlockWithoutContentUpdateInput"] | undefined,
	create?: GraphQLTypes["ContentBlockWithoutContentCreateInput"] | undefined
};
	["GenericPageUpsertContentRelationInput"]: {
		update?: GraphQLTypes["ContentUpdateInput"] | undefined,
	create?: GraphQLTypes["ContentCreateInput"] | undefined
};
	["LinkableUpsertGenericPageRelationInput"]: {
		update?: GraphQLTypes["GenericPageWithoutLinkUpdateInput"] | undefined,
	create?: GraphQLTypes["GenericPageWithoutLinkCreateInput"] | undefined
};
	["LinkUpsertInternalLinkRelationInput"]: {
		update?: GraphQLTypes["LinkableUpdateInput"] | undefined,
	create?: GraphQLTypes["LinkableCreateInput"] | undefined
};
	["RedirectUpsertTargetRelationInput"]: {
		update?: GraphQLTypes["LinkUpdateInput"] | undefined,
	create?: GraphQLTypes["LinkCreateInput"] | undefined
};
	["LinkableUpsertRedirectRelationInput"]: {
		update?: GraphQLTypes["RedirectWithoutLinkUpdateInput"] | undefined,
	create?: GraphQLTypes["RedirectWithoutLinkCreateInput"] | undefined
};
	["GenericPageUpsertLinkRelationInput"]: {
		update?: GraphQLTypes["LinkableWithoutGenericPageUpdateInput"] | undefined,
	create?: GraphQLTypes["LinkableWithoutGenericPageCreateInput"] | undefined
};
	["LinkableConnection"]: {
	__typename: "LinkableConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["LinkableEdge"]>
};
	["LinkableEdge"]: {
	__typename: "LinkableEdge",
	node: GraphQLTypes["Linkable"]
};
	["SeoConnection"]: {
	__typename: "SeoConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["SeoEdge"]>
};
	["SeoEdge"]: {
	__typename: "SeoEdge",
	node: GraphQLTypes["Seo"]
};
	["ContentConnection"]: {
	__typename: "ContentConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ContentEdge"]>
};
	["ContentEdge"]: {
	__typename: "ContentEdge",
	node: GraphQLTypes["Content"]
};
	["ContentBlockCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	order?: number | undefined,
	json?: string | undefined,
	content?: GraphQLTypes["ContentBlockCreateContentEntityRelationInput"] | undefined,
	references?: Array<GraphQLTypes["ContentBlockCreateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockCreateContentEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentUniqueWhere"] | undefined,
	create?: GraphQLTypes["ContentWithoutBlocksCreateInput"] | undefined
};
	["ContentWithoutBlocksCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpdateInput"]: {
		order?: number | undefined,
	json?: string | undefined,
	content?: GraphQLTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined,
	references?: Array<GraphQLTypes["ContentBlockUpdateReferencesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentBlockUpdateContentEntityRelationInput"]: {
		create?: GraphQLTypes["ContentWithoutBlocksCreateInput"] | undefined,
	update?: GraphQLTypes["ContentWithoutBlocksUpdateInput"] | undefined,
	upsert?: GraphQLTypes["ContentBlockUpsertContentRelationInput"] | undefined,
	connect?: GraphQLTypes["ContentUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["ContentWithoutBlocksUpdateInput"]: {
		_dummy_field_?: boolean | undefined
};
	["ContentBlockUpsertContentRelationInput"]: {
		update?: GraphQLTypes["ContentWithoutBlocksUpdateInput"] | undefined,
	create?: GraphQLTypes["ContentWithoutBlocksCreateInput"] | undefined
};
	["ContentReferenceCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	type?: GraphQLTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	block?: GraphQLTypes["ContentReferenceCreateBlockEntityRelationInput"] | undefined,
	image?: GraphQLTypes["ContentReferenceCreateImageEntityRelationInput"] | undefined,
	linkables?: Array<GraphQLTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceCreateBlockEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	create?: GraphQLTypes["ContentBlockWithoutReferencesCreateInput"] | undefined
};
	["ContentBlockWithoutReferencesCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	order?: number | undefined,
	json?: string | undefined,
	content?: GraphQLTypes["ContentBlockCreateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpdateInput"]: {
		type?: GraphQLTypes["ContentReferenceType"] | undefined,
	primaryText?: string | undefined,
	block?: GraphQLTypes["ContentReferenceUpdateBlockEntityRelationInput"] | undefined,
	image?: GraphQLTypes["ContentReferenceUpdateImageEntityRelationInput"] | undefined,
	linkables?: Array<GraphQLTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpdateBlockEntityRelationInput"]: {
		create?: GraphQLTypes["ContentBlockWithoutReferencesCreateInput"] | undefined,
	update?: GraphQLTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined,
	upsert?: GraphQLTypes["ContentReferenceUpsertBlockRelationInput"] | undefined,
	connect?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["ContentBlockWithoutReferencesUpdateInput"]: {
		order?: number | undefined,
	json?: string | undefined,
	content?: GraphQLTypes["ContentBlockUpdateContentEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceUpsertBlockRelationInput"]: {
		update?: GraphQLTypes["ContentBlockWithoutReferencesUpdateInput"] | undefined,
	create?: GraphQLTypes["ContentBlockWithoutReferencesCreateInput"] | undefined
};
	["RedirectConnection"]: {
	__typename: "RedirectConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["RedirectEdge"]>
};
	["RedirectEdge"]: {
	__typename: "RedirectEdge",
	node: GraphQLTypes["Redirect"]
};
	["RedirectCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	link?: GraphQLTypes["RedirectCreateLinkEntityRelationInput"] | undefined,
	target?: GraphQLTypes["RedirectCreateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectCreateLinkEntityRelationInput"]: {
		connect?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	create?: GraphQLTypes["LinkableWithoutRedirectCreateInput"] | undefined
};
	["LinkableWithoutRedirectCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined,
	genericPage?: GraphQLTypes["LinkableCreateGenericPageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpdateInput"]: {
		link?: GraphQLTypes["RedirectUpdateLinkEntityRelationInput"] | undefined,
	target?: GraphQLTypes["RedirectUpdateTargetEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpdateLinkEntityRelationInput"]: {
		create?: GraphQLTypes["LinkableWithoutRedirectCreateInput"] | undefined,
	update?: GraphQLTypes["LinkableWithoutRedirectUpdateInput"] | undefined,
	upsert?: GraphQLTypes["RedirectUpsertLinkRelationInput"] | undefined,
	connect?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	disconnect?: boolean | undefined,
	delete?: boolean | undefined
};
	["LinkableWithoutRedirectUpdateInput"]: {
		url?: string | undefined,
	genericPage?: GraphQLTypes["LinkableUpdateGenericPageEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RedirectUpsertLinkRelationInput"]: {
		update?: GraphQLTypes["LinkableWithoutRedirectUpdateInput"] | undefined,
	create?: GraphQLTypes["LinkableWithoutRedirectCreateInput"] | undefined
};
	["LinkConnection"]: {
	__typename: "LinkConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["LinkEdge"]>
};
	["LinkEdge"]: {
	__typename: "LinkEdge",
	node: GraphQLTypes["Link"]
};
	["QueryTransaction"]: {
	__typename: "QueryTransaction",
	getGeneral?: GraphQLTypes["General"] | undefined,
	listGeneral: Array<GraphQLTypes["General"]>,
	paginateGeneral: GraphQLTypes["GeneralConnection"],
	validateCreateGeneral: GraphQLTypes["_ValidationResult"],
	validateUpdateGeneral: GraphQLTypes["_ValidationResult"],
	getImage?: GraphQLTypes["Image"] | undefined,
	listImage: Array<GraphQLTypes["Image"]>,
	paginateImage: GraphQLTypes["ImageConnection"],
	validateCreateImage: GraphQLTypes["_ValidationResult"],
	validateUpdateImage: GraphQLTypes["_ValidationResult"],
	getGenericPage?: GraphQLTypes["GenericPage"] | undefined,
	listGenericPage: Array<GraphQLTypes["GenericPage"]>,
	paginateGenericPage: GraphQLTypes["GenericPageConnection"],
	validateCreateGenericPage: GraphQLTypes["_ValidationResult"],
	validateUpdateGenericPage: GraphQLTypes["_ValidationResult"],
	getLinkable?: GraphQLTypes["Linkable"] | undefined,
	listLinkable: Array<GraphQLTypes["Linkable"]>,
	paginateLinkable: GraphQLTypes["LinkableConnection"],
	validateCreateLinkable: GraphQLTypes["_ValidationResult"],
	validateUpdateLinkable: GraphQLTypes["_ValidationResult"],
	getSeo?: GraphQLTypes["Seo"] | undefined,
	listSeo: Array<GraphQLTypes["Seo"]>,
	paginateSeo: GraphQLTypes["SeoConnection"],
	validateCreateSeo: GraphQLTypes["_ValidationResult"],
	validateUpdateSeo: GraphQLTypes["_ValidationResult"],
	getContent?: GraphQLTypes["Content"] | undefined,
	listContent: Array<GraphQLTypes["Content"]>,
	paginateContent: GraphQLTypes["ContentConnection"],
	validateCreateContent: GraphQLTypes["_ValidationResult"],
	validateUpdateContent: GraphQLTypes["_ValidationResult"],
	getContentBlock?: GraphQLTypes["ContentBlock"] | undefined,
	listContentBlock: Array<GraphQLTypes["ContentBlock"]>,
	paginateContentBlock: GraphQLTypes["ContentBlockConnection"],
	validateCreateContentBlock: GraphQLTypes["_ValidationResult"],
	validateUpdateContentBlock: GraphQLTypes["_ValidationResult"],
	getContentReference?: GraphQLTypes["ContentReference"] | undefined,
	listContentReference: Array<GraphQLTypes["ContentReference"]>,
	paginateContentReference: GraphQLTypes["ContentReferenceConnection"],
	validateCreateContentReference: GraphQLTypes["_ValidationResult"],
	validateUpdateContentReference: GraphQLTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: GraphQLTypes["ContentReferenceLinkableItemConnection"],
	getRedirect?: GraphQLTypes["Redirect"] | undefined,
	listRedirect: Array<GraphQLTypes["Redirect"]>,
	paginateRedirect: GraphQLTypes["RedirectConnection"],
	validateCreateRedirect: GraphQLTypes["_ValidationResult"],
	validateUpdateRedirect: GraphQLTypes["_ValidationResult"],
	getLink?: GraphQLTypes["Link"] | undefined,
	listLink: Array<GraphQLTypes["Link"]>,
	paginateLink: GraphQLTypes["LinkConnection"],
	validateCreateLink: GraphQLTypes["_ValidationResult"],
	validateUpdateLink: GraphQLTypes["_ValidationResult"]
};
	["Info"]: {
	__typename: "Info",
	description?: string | undefined
};
	["Mutation"]: {
	__typename: "Mutation",
	createGeneral: GraphQLTypes["GeneralCreateResult"],
	deleteGeneral: GraphQLTypes["GeneralDeleteResult"],
	updateGeneral: GraphQLTypes["GeneralUpdateResult"],
	upsertGeneral: GraphQLTypes["GeneralUpsertResult"],
	createImage: GraphQLTypes["ImageCreateResult"],
	deleteImage: GraphQLTypes["ImageDeleteResult"],
	updateImage: GraphQLTypes["ImageUpdateResult"],
	upsertImage: GraphQLTypes["ImageUpsertResult"],
	createGenericPage: GraphQLTypes["GenericPageCreateResult"],
	deleteGenericPage: GraphQLTypes["GenericPageDeleteResult"],
	updateGenericPage: GraphQLTypes["GenericPageUpdateResult"],
	upsertGenericPage: GraphQLTypes["GenericPageUpsertResult"],
	createLinkable: GraphQLTypes["LinkableCreateResult"],
	deleteLinkable: GraphQLTypes["LinkableDeleteResult"],
	updateLinkable: GraphQLTypes["LinkableUpdateResult"],
	upsertLinkable: GraphQLTypes["LinkableUpsertResult"],
	createSeo: GraphQLTypes["SeoCreateResult"],
	deleteSeo: GraphQLTypes["SeoDeleteResult"],
	updateSeo: GraphQLTypes["SeoUpdateResult"],
	upsertSeo: GraphQLTypes["SeoUpsertResult"],
	createContent: GraphQLTypes["ContentCreateResult"],
	deleteContent: GraphQLTypes["ContentDeleteResult"],
	updateContent: GraphQLTypes["ContentUpdateResult"],
	upsertContent: GraphQLTypes["ContentUpsertResult"],
	createContentBlock: GraphQLTypes["ContentBlockCreateResult"],
	deleteContentBlock: GraphQLTypes["ContentBlockDeleteResult"],
	updateContentBlock: GraphQLTypes["ContentBlockUpdateResult"],
	upsertContentBlock: GraphQLTypes["ContentBlockUpsertResult"],
	createContentReference: GraphQLTypes["ContentReferenceCreateResult"],
	deleteContentReference: GraphQLTypes["ContentReferenceDeleteResult"],
	updateContentReference: GraphQLTypes["ContentReferenceUpdateResult"],
	upsertContentReference: GraphQLTypes["ContentReferenceUpsertResult"],
	createRedirect: GraphQLTypes["RedirectCreateResult"],
	deleteRedirect: GraphQLTypes["RedirectDeleteResult"],
	updateRedirect: GraphQLTypes["RedirectUpdateResult"],
	upsertRedirect: GraphQLTypes["RedirectUpsertResult"],
	createLink: GraphQLTypes["LinkCreateResult"],
	deleteLink: GraphQLTypes["LinkDeleteResult"],
	updateLink: GraphQLTypes["LinkUpdateResult"],
	upsertLink: GraphQLTypes["LinkUpsertResult"],
	transaction: GraphQLTypes["MutationTransaction"],
	query: GraphQLTypes["Query"],
	generateUploadUrl: GraphQLTypes["S3SignedUpload"],
	generateReadUrl: GraphQLTypes["S3SignedRead"]
};
	["GeneralCreateResult"]: {
	__typename: "GeneralCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["General"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["MutationResult"]: {
	__typename:"GeneralCreateResult" | "GeneralDeleteResult" | "GeneralUpdateResult" | "GeneralUpsertResult" | "ImageCreateResult" | "ImageDeleteResult" | "ImageUpdateResult" | "ImageUpsertResult" | "GenericPageCreateResult" | "GenericPageDeleteResult" | "GenericPageUpdateResult" | "GenericPageUpsertResult" | "LinkableCreateResult" | "LinkableDeleteResult" | "LinkableUpdateResult" | "LinkableUpsertResult" | "SeoCreateResult" | "SeoDeleteResult" | "SeoUpdateResult" | "SeoUpsertResult" | "ContentCreateResult" | "ContentDeleteResult" | "ContentUpdateResult" | "ContentUpsertResult" | "ContentBlockCreateResult" | "ContentBlockDeleteResult" | "ContentBlockUpdateResult" | "ContentBlockUpsertResult" | "ContentReferenceCreateResult" | "ContentReferenceDeleteResult" | "ContentReferenceUpdateResult" | "ContentReferenceUpsertResult" | "RedirectCreateResult" | "RedirectDeleteResult" | "RedirectUpdateResult" | "RedirectUpsertResult" | "LinkCreateResult" | "LinkDeleteResult" | "LinkUpdateResult" | "LinkUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>
	['...on GeneralCreateResult']: '__union' & GraphQLTypes["GeneralCreateResult"];
	['...on GeneralDeleteResult']: '__union' & GraphQLTypes["GeneralDeleteResult"];
	['...on GeneralUpdateResult']: '__union' & GraphQLTypes["GeneralUpdateResult"];
	['...on GeneralUpsertResult']: '__union' & GraphQLTypes["GeneralUpsertResult"];
	['...on ImageCreateResult']: '__union' & GraphQLTypes["ImageCreateResult"];
	['...on ImageDeleteResult']: '__union' & GraphQLTypes["ImageDeleteResult"];
	['...on ImageUpdateResult']: '__union' & GraphQLTypes["ImageUpdateResult"];
	['...on ImageUpsertResult']: '__union' & GraphQLTypes["ImageUpsertResult"];
	['...on GenericPageCreateResult']: '__union' & GraphQLTypes["GenericPageCreateResult"];
	['...on GenericPageDeleteResult']: '__union' & GraphQLTypes["GenericPageDeleteResult"];
	['...on GenericPageUpdateResult']: '__union' & GraphQLTypes["GenericPageUpdateResult"];
	['...on GenericPageUpsertResult']: '__union' & GraphQLTypes["GenericPageUpsertResult"];
	['...on LinkableCreateResult']: '__union' & GraphQLTypes["LinkableCreateResult"];
	['...on LinkableDeleteResult']: '__union' & GraphQLTypes["LinkableDeleteResult"];
	['...on LinkableUpdateResult']: '__union' & GraphQLTypes["LinkableUpdateResult"];
	['...on LinkableUpsertResult']: '__union' & GraphQLTypes["LinkableUpsertResult"];
	['...on SeoCreateResult']: '__union' & GraphQLTypes["SeoCreateResult"];
	['...on SeoDeleteResult']: '__union' & GraphQLTypes["SeoDeleteResult"];
	['...on SeoUpdateResult']: '__union' & GraphQLTypes["SeoUpdateResult"];
	['...on SeoUpsertResult']: '__union' & GraphQLTypes["SeoUpsertResult"];
	['...on ContentCreateResult']: '__union' & GraphQLTypes["ContentCreateResult"];
	['...on ContentDeleteResult']: '__union' & GraphQLTypes["ContentDeleteResult"];
	['...on ContentUpdateResult']: '__union' & GraphQLTypes["ContentUpdateResult"];
	['...on ContentUpsertResult']: '__union' & GraphQLTypes["ContentUpsertResult"];
	['...on ContentBlockCreateResult']: '__union' & GraphQLTypes["ContentBlockCreateResult"];
	['...on ContentBlockDeleteResult']: '__union' & GraphQLTypes["ContentBlockDeleteResult"];
	['...on ContentBlockUpdateResult']: '__union' & GraphQLTypes["ContentBlockUpdateResult"];
	['...on ContentBlockUpsertResult']: '__union' & GraphQLTypes["ContentBlockUpsertResult"];
	['...on ContentReferenceCreateResult']: '__union' & GraphQLTypes["ContentReferenceCreateResult"];
	['...on ContentReferenceDeleteResult']: '__union' & GraphQLTypes["ContentReferenceDeleteResult"];
	['...on ContentReferenceUpdateResult']: '__union' & GraphQLTypes["ContentReferenceUpdateResult"];
	['...on ContentReferenceUpsertResult']: '__union' & GraphQLTypes["ContentReferenceUpsertResult"];
	['...on RedirectCreateResult']: '__union' & GraphQLTypes["RedirectCreateResult"];
	['...on RedirectDeleteResult']: '__union' & GraphQLTypes["RedirectDeleteResult"];
	['...on RedirectUpdateResult']: '__union' & GraphQLTypes["RedirectUpdateResult"];
	['...on RedirectUpsertResult']: '__union' & GraphQLTypes["RedirectUpsertResult"];
	['...on LinkCreateResult']: '__union' & GraphQLTypes["LinkCreateResult"];
	['...on LinkDeleteResult']: '__union' & GraphQLTypes["LinkDeleteResult"];
	['...on LinkUpdateResult']: '__union' & GraphQLTypes["LinkUpdateResult"];
	['...on LinkUpsertResult']: '__union' & GraphQLTypes["LinkUpsertResult"];
};
	["_MutationError"]: {
	__typename: "_MutationError",
	path: Array<GraphQLTypes["_PathFragment"]>,
	paths: Array<Array<GraphQLTypes["_PathFragment"]>>,
	type: GraphQLTypes["_MutationErrorType"],
	message?: string | undefined
};
	["_MutationErrorType"]: _MutationErrorType;
	["GeneralDeleteResult"]: {
	__typename: "GeneralDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["General"] | undefined
};
	["GeneralUpdateResult"]: {
	__typename: "GeneralUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["General"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["GeneralUpsertResult"]: {
	__typename: "GeneralUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["General"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ImageCreateResult"]: {
	__typename: "ImageCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Image"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ImageDeleteResult"]: {
	__typename: "ImageDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Image"] | undefined
};
	["ImageUpdateResult"]: {
	__typename: "ImageUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Image"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ImageUpsertResult"]: {
	__typename: "ImageUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Image"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["GenericPageCreateResult"]: {
	__typename: "GenericPageCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["GenericPage"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["GenericPageDeleteResult"]: {
	__typename: "GenericPageDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["GenericPage"] | undefined
};
	["GenericPageUpdateResult"]: {
	__typename: "GenericPageUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["GenericPage"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["GenericPageUpsertResult"]: {
	__typename: "GenericPageUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["GenericPage"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LinkableCreateResult"]: {
	__typename: "LinkableCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Linkable"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LinkableDeleteResult"]: {
	__typename: "LinkableDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Linkable"] | undefined
};
	["LinkableUpdateResult"]: {
	__typename: "LinkableUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Linkable"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LinkableUpsertResult"]: {
	__typename: "LinkableUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Linkable"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["SeoCreateResult"]: {
	__typename: "SeoCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Seo"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["SeoDeleteResult"]: {
	__typename: "SeoDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Seo"] | undefined
};
	["SeoUpdateResult"]: {
	__typename: "SeoUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Seo"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["SeoUpsertResult"]: {
	__typename: "SeoUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Seo"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentCreateResult"]: {
	__typename: "ContentCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Content"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentDeleteResult"]: {
	__typename: "ContentDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Content"] | undefined
};
	["ContentUpdateResult"]: {
	__typename: "ContentUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Content"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentUpsertResult"]: {
	__typename: "ContentUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Content"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentBlockCreateResult"]: {
	__typename: "ContentBlockCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentBlock"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentBlockDeleteResult"]: {
	__typename: "ContentBlockDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentBlock"] | undefined
};
	["ContentBlockUpdateResult"]: {
	__typename: "ContentBlockUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentBlock"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentBlockUpsertResult"]: {
	__typename: "ContentBlockUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentBlock"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentReferenceCreateResult"]: {
	__typename: "ContentReferenceCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentReference"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentReferenceDeleteResult"]: {
	__typename: "ContentReferenceDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentReference"] | undefined
};
	["ContentReferenceUpdateResult"]: {
	__typename: "ContentReferenceUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentReference"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ContentReferenceUpsertResult"]: {
	__typename: "ContentReferenceUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ContentReference"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RedirectCreateResult"]: {
	__typename: "RedirectCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Redirect"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RedirectDeleteResult"]: {
	__typename: "RedirectDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Redirect"] | undefined
};
	["RedirectUpdateResult"]: {
	__typename: "RedirectUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Redirect"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RedirectUpsertResult"]: {
	__typename: "RedirectUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Redirect"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LinkCreateResult"]: {
	__typename: "LinkCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Link"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LinkDeleteResult"]: {
	__typename: "LinkDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Link"] | undefined
};
	["LinkUpdateResult"]: {
	__typename: "LinkUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Link"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LinkUpsertResult"]: {
	__typename: "LinkUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Link"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["MutationTransaction"]: {
	__typename: "MutationTransaction",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	validation: GraphQLTypes["_ValidationResult"],
	createGeneral: GraphQLTypes["GeneralCreateResult"],
	deleteGeneral: GraphQLTypes["GeneralDeleteResult"],
	updateGeneral: GraphQLTypes["GeneralUpdateResult"],
	upsertGeneral: GraphQLTypes["GeneralUpsertResult"],
	createImage: GraphQLTypes["ImageCreateResult"],
	deleteImage: GraphQLTypes["ImageDeleteResult"],
	updateImage: GraphQLTypes["ImageUpdateResult"],
	upsertImage: GraphQLTypes["ImageUpsertResult"],
	createGenericPage: GraphQLTypes["GenericPageCreateResult"],
	deleteGenericPage: GraphQLTypes["GenericPageDeleteResult"],
	updateGenericPage: GraphQLTypes["GenericPageUpdateResult"],
	upsertGenericPage: GraphQLTypes["GenericPageUpsertResult"],
	createLinkable: GraphQLTypes["LinkableCreateResult"],
	deleteLinkable: GraphQLTypes["LinkableDeleteResult"],
	updateLinkable: GraphQLTypes["LinkableUpdateResult"],
	upsertLinkable: GraphQLTypes["LinkableUpsertResult"],
	createSeo: GraphQLTypes["SeoCreateResult"],
	deleteSeo: GraphQLTypes["SeoDeleteResult"],
	updateSeo: GraphQLTypes["SeoUpdateResult"],
	upsertSeo: GraphQLTypes["SeoUpsertResult"],
	createContent: GraphQLTypes["ContentCreateResult"],
	deleteContent: GraphQLTypes["ContentDeleteResult"],
	updateContent: GraphQLTypes["ContentUpdateResult"],
	upsertContent: GraphQLTypes["ContentUpsertResult"],
	createContentBlock: GraphQLTypes["ContentBlockCreateResult"],
	deleteContentBlock: GraphQLTypes["ContentBlockDeleteResult"],
	updateContentBlock: GraphQLTypes["ContentBlockUpdateResult"],
	upsertContentBlock: GraphQLTypes["ContentBlockUpsertResult"],
	createContentReference: GraphQLTypes["ContentReferenceCreateResult"],
	deleteContentReference: GraphQLTypes["ContentReferenceDeleteResult"],
	updateContentReference: GraphQLTypes["ContentReferenceUpdateResult"],
	upsertContentReference: GraphQLTypes["ContentReferenceUpsertResult"],
	createRedirect: GraphQLTypes["RedirectCreateResult"],
	deleteRedirect: GraphQLTypes["RedirectDeleteResult"],
	updateRedirect: GraphQLTypes["RedirectUpdateResult"],
	upsertRedirect: GraphQLTypes["RedirectUpsertResult"],
	createLink: GraphQLTypes["LinkCreateResult"],
	deleteLink: GraphQLTypes["LinkDeleteResult"],
	updateLink: GraphQLTypes["LinkUpdateResult"],
	upsertLink: GraphQLTypes["LinkUpsertResult"],
	query?: GraphQLTypes["Query"] | undefined
};
	["MutationTransactionOptions"]: {
		deferForeignKeyConstraints?: boolean | undefined
};
	["Json"]: "scalar" & { name: "Json" };
	["_Schema"]: {
	__typename: "_Schema",
	enums: Array<GraphQLTypes["_Enum"]>,
	entities: Array<GraphQLTypes["_Entity"]>
};
	["_Entity"]: {
	__typename: "_Entity",
	name: string,
	customPrimaryAllowed: boolean,
	fields: Array<GraphQLTypes["_Field"]>,
	unique: Array<GraphQLTypes["_UniqueConstraint"]>
};
	["_UniqueConstraint"]: {
	__typename: "_UniqueConstraint",
	fields: Array<string>
};
	["_Field"]: {
	__typename:"_Column" | "_Relation",
	name: string,
	type: string,
	nullable?: boolean | undefined,
	rules: Array<GraphQLTypes["_Rule"]>,
	validators: Array<GraphQLTypes["_Validator"]>
	['...on _Column']: '__union' & GraphQLTypes["_Column"];
	['...on _Relation']: '__union' & GraphQLTypes["_Relation"];
};
	["_Column"]: {
	__typename: "_Column",
	name: string,
	type: string,
	enumName?: string | undefined,
	defaultValue?: GraphQLTypes["Json"] | undefined,
	nullable: boolean,
	rules: Array<GraphQLTypes["_Rule"]>,
	validators: Array<GraphQLTypes["_Validator"]>
};
	["_OnDeleteBehaviour"]: _OnDeleteBehaviour;
	["_RelationSide"]: _RelationSide;
	["_OrderByDirection"]: _OrderByDirection;
	["_OrderBy"]: {
	__typename: "_OrderBy",
	path: Array<string>,
	direction: GraphQLTypes["_OrderByDirection"]
};
	["_Relation"]: {
	__typename: "_Relation",
	name: string,
	type: string,
	side: GraphQLTypes["_RelationSide"],
	targetEntity: string,
	ownedBy?: string | undefined,
	inversedBy?: string | undefined,
	nullable?: boolean | undefined,
	onDelete?: GraphQLTypes["_OnDeleteBehaviour"] | undefined,
	orphanRemoval?: boolean | undefined,
	orderBy?: Array<GraphQLTypes["_OrderBy"]> | undefined,
	rules: Array<GraphQLTypes["_Rule"]>,
	validators: Array<GraphQLTypes["_Validator"]>
};
	["_Rule"]: {
	__typename: "_Rule",
	message?: GraphQLTypes["_RuleMessage"] | undefined,
	validator: number
};
	["_Validator"]: {
	__typename: "_Validator",
	operation: string,
	arguments: Array<GraphQLTypes["_Argument"]>
};
	["_Argument"]:{
        	__typename:"_ValidatorArgument" | "_PathArgument" | "_LiteralArgument"
        	['...on _ValidatorArgument']: '__union' & GraphQLTypes["_ValidatorArgument"];
	['...on _PathArgument']: '__union' & GraphQLTypes["_PathArgument"];
	['...on _LiteralArgument']: '__union' & GraphQLTypes["_LiteralArgument"];
};
	["_ValidatorArgument"]: {
	__typename: "_ValidatorArgument",
	validator: number
};
	["_PathArgument"]: {
	__typename: "_PathArgument",
	path: Array<string>
};
	["_LiteralArgument"]: {
	__typename: "_LiteralArgument",
	value?: GraphQLTypes["Json"] | undefined
};
	["_RuleMessage"]: {
	__typename: "_RuleMessage",
	text?: string | undefined
};
	["_Enum"]: {
	__typename: "_Enum",
	name: string,
	values: Array<string>
};
	["S3SignedUpload"]: {
	__typename: "S3SignedUpload",
	url: string,
	headers: Array<GraphQLTypes["S3Header"]>,
	method: string,
	/** Allowed patterns:
** */
	objectKey: string,
	bucket: string,
	publicUrl: string
};
	["S3Header"]: {
	__typename: "S3Header",
	key: string,
	value: string
};
	["S3SignedRead"]: {
	__typename: "S3SignedRead",
	url: string,
	headers: Array<GraphQLTypes["S3Header"]>,
	method: string,
	/** Allowed patterns:
** */
	objectKey: string,
	bucket: string
}
    }
export const enum One {
	One = "One"
}
export const enum OrderDirection {
	asc = "asc",
	desc = "desc",
	ascNullsFirst = "ascNullsFirst",
	descNullsLast = "descNullsLast"
}
export const enum LinkType {
	internal = "internal",
	external = "external"
}
export const enum ContentReferenceType {
	image = "image",
	linkables = "linkables"
}
export const enum _MutationErrorType {
	NotNullConstraintViolation = "NotNullConstraintViolation",
	UniqueConstraintViolation = "UniqueConstraintViolation",
	ForeignKeyConstraintViolation = "ForeignKeyConstraintViolation",
	NotFoundOrDenied = "NotFoundOrDenied",
	NonUniqueWhereInput = "NonUniqueWhereInput",
	InvalidDataInput = "InvalidDataInput",
	SqlError = "SqlError"
}
export const enum _OnDeleteBehaviour {
	restrict = "restrict",
	cascade = "cascade",
	setNull = "setNull"
}
export const enum _RelationSide {
	owning = "owning",
	inverse = "inverse"
}
export const enum _OrderByDirection {
	asc = "asc",
	desc = "desc"
}

type ZEUS_VARIABLES = {
	["UUID"]: ValueTypes["UUID"];
	["One"]: ValueTypes["One"];
	["ImageWhere"]: ValueTypes["ImageWhere"];
	["UUIDCondition"]: ValueTypes["UUIDCondition"];
	["StringCondition"]: ValueTypes["StringCondition"];
	["IntCondition"]: ValueTypes["IntCondition"];
	["SeoWhere"]: ValueTypes["SeoWhere"];
	["BooleanCondition"]: ValueTypes["BooleanCondition"];
	["GeneralUniqueWhere"]: ValueTypes["GeneralUniqueWhere"];
	["SeoUniqueWhere"]: ValueTypes["SeoUniqueWhere"];
	["ImageUniqueWhere"]: ValueTypes["ImageUniqueWhere"];
	["GeneralWhere"]: ValueTypes["GeneralWhere"];
	["OneCondition"]: ValueTypes["OneCondition"];
	["GeneralOrderBy"]: ValueTypes["GeneralOrderBy"];
	["OrderDirection"]: ValueTypes["OrderDirection"];
	["ImageOrderBy"]: ValueTypes["ImageOrderBy"];
	["SeoOrderBy"]: ValueTypes["SeoOrderBy"];
	["GeneralCreateInput"]: ValueTypes["GeneralCreateInput"];
	["GeneralCreateImageEntityRelationInput"]: ValueTypes["GeneralCreateImageEntityRelationInput"];
	["ImageCreateInput"]: ValueTypes["ImageCreateInput"];
	["GeneralCreateSeoEntityRelationInput"]: ValueTypes["GeneralCreateSeoEntityRelationInput"];
	["SeoCreateInput"]: ValueTypes["SeoCreateInput"];
	["SeoCreateOgImageEntityRelationInput"]: ValueTypes["SeoCreateOgImageEntityRelationInput"];
	["GeneralUpdateInput"]: ValueTypes["GeneralUpdateInput"];
	["GeneralUpdateImageEntityRelationInput"]: ValueTypes["GeneralUpdateImageEntityRelationInput"];
	["ImageUpdateInput"]: ValueTypes["ImageUpdateInput"];
	["GeneralUpsertImageRelationInput"]: ValueTypes["GeneralUpsertImageRelationInput"];
	["GeneralUpdateSeoEntityRelationInput"]: ValueTypes["GeneralUpdateSeoEntityRelationInput"];
	["SeoUpdateInput"]: ValueTypes["SeoUpdateInput"];
	["SeoUpdateOgImageEntityRelationInput"]: ValueTypes["SeoUpdateOgImageEntityRelationInput"];
	["SeoUpsertOgImageRelationInput"]: ValueTypes["SeoUpsertOgImageRelationInput"];
	["GeneralUpsertSeoRelationInput"]: ValueTypes["GeneralUpsertSeoRelationInput"];
	["GenericPageWhere"]: ValueTypes["GenericPageWhere"];
	["LinkableWhere"]: ValueTypes["LinkableWhere"];
	["RedirectWhere"]: ValueTypes["RedirectWhere"];
	["LinkWhere"]: ValueTypes["LinkWhere"];
	["LinkTypeCondition"]: ValueTypes["LinkTypeCondition"];
	["LinkType"]: ValueTypes["LinkType"];
	["ContentWhere"]: ValueTypes["ContentWhere"];
	["ContentBlockWhere"]: ValueTypes["ContentBlockWhere"];
	["ContentReferenceWhere"]: ValueTypes["ContentReferenceWhere"];
	["ContentReferenceTypeCondition"]: ValueTypes["ContentReferenceTypeCondition"];
	["ContentReferenceType"]: ValueTypes["ContentReferenceType"];
	["ContentReferenceLinkableItemWhere"]: ValueTypes["ContentReferenceLinkableItemWhere"];
	["ContentReferenceLinkableItemOrderBy"]: ValueTypes["ContentReferenceLinkableItemOrderBy"];
	["LinkableOrderBy"]: ValueTypes["LinkableOrderBy"];
	["GenericPageOrderBy"]: ValueTypes["GenericPageOrderBy"];
	["ContentOrderBy"]: ValueTypes["ContentOrderBy"];
	["RedirectOrderBy"]: ValueTypes["RedirectOrderBy"];
	["LinkOrderBy"]: ValueTypes["LinkOrderBy"];
	["ContentReferenceOrderBy"]: ValueTypes["ContentReferenceOrderBy"];
	["ContentBlockOrderBy"]: ValueTypes["ContentBlockOrderBy"];
	["ContentReferenceLinkablesByItemUniqueWhere"]: ValueTypes["ContentReferenceLinkablesByItemUniqueWhere"];
	["LinkableUniqueWhere"]: ValueTypes["LinkableUniqueWhere"];
	["GenericPageUniqueWhere"]: ValueTypes["GenericPageUniqueWhere"];
	["ContentUniqueWhere"]: ValueTypes["ContentUniqueWhere"];
	["ContentBlockUniqueWhere"]: ValueTypes["ContentBlockUniqueWhere"];
	["ContentReferenceUniqueWhere"]: ValueTypes["ContentReferenceUniqueWhere"];
	["ContentReferenceLinkableItemUniqueWhere"]: ValueTypes["ContentReferenceLinkableItemUniqueWhere"];
	["RedirectUniqueWhere"]: ValueTypes["RedirectUniqueWhere"];
	["LinkUniqueWhere"]: ValueTypes["LinkUniqueWhere"];
	["ContentBlockReferencesByLinkablesUniqueWhere"]: ValueTypes["ContentBlockReferencesByLinkablesUniqueWhere"];
	["ContentBlocksByReferencesUniqueWhere"]: ValueTypes["ContentBlocksByReferencesUniqueWhere"];
	["GenericPageCreateInput"]: ValueTypes["GenericPageCreateInput"];
	["GenericPageCreateSeoEntityRelationInput"]: ValueTypes["GenericPageCreateSeoEntityRelationInput"];
	["GenericPageCreateLinkEntityRelationInput"]: ValueTypes["GenericPageCreateLinkEntityRelationInput"];
	["LinkableWithoutGenericPageCreateInput"]: ValueTypes["LinkableWithoutGenericPageCreateInput"];
	["LinkableCreateRedirectEntityRelationInput"]: ValueTypes["LinkableCreateRedirectEntityRelationInput"];
	["RedirectWithoutLinkCreateInput"]: ValueTypes["RedirectWithoutLinkCreateInput"];
	["RedirectCreateTargetEntityRelationInput"]: ValueTypes["RedirectCreateTargetEntityRelationInput"];
	["LinkCreateInput"]: ValueTypes["LinkCreateInput"];
	["LinkCreateInternalLinkEntityRelationInput"]: ValueTypes["LinkCreateInternalLinkEntityRelationInput"];
	["LinkableCreateInput"]: ValueTypes["LinkableCreateInput"];
	["LinkableCreateGenericPageEntityRelationInput"]: ValueTypes["LinkableCreateGenericPageEntityRelationInput"];
	["GenericPageWithoutLinkCreateInput"]: ValueTypes["GenericPageWithoutLinkCreateInput"];
	["GenericPageCreateContentEntityRelationInput"]: ValueTypes["GenericPageCreateContentEntityRelationInput"];
	["ContentCreateInput"]: ValueTypes["ContentCreateInput"];
	["ContentCreateBlocksEntityRelationInput"]: ValueTypes["ContentCreateBlocksEntityRelationInput"];
	["ContentBlockWithoutContentCreateInput"]: ValueTypes["ContentBlockWithoutContentCreateInput"];
	["ContentBlockCreateReferencesEntityRelationInput"]: ValueTypes["ContentBlockCreateReferencesEntityRelationInput"];
	["ContentReferenceWithoutBlockCreateInput"]: ValueTypes["ContentReferenceWithoutBlockCreateInput"];
	["ContentReferenceCreateImageEntityRelationInput"]: ValueTypes["ContentReferenceCreateImageEntityRelationInput"];
	["ContentReferenceCreateLinkablesEntityRelationInput"]: ValueTypes["ContentReferenceCreateLinkablesEntityRelationInput"];
	["GenericPageUpdateInput"]: ValueTypes["GenericPageUpdateInput"];
	["GenericPageUpdateSeoEntityRelationInput"]: ValueTypes["GenericPageUpdateSeoEntityRelationInput"];
	["GenericPageUpsertSeoRelationInput"]: ValueTypes["GenericPageUpsertSeoRelationInput"];
	["GenericPageUpdateLinkEntityRelationInput"]: ValueTypes["GenericPageUpdateLinkEntityRelationInput"];
	["LinkableWithoutGenericPageUpdateInput"]: ValueTypes["LinkableWithoutGenericPageUpdateInput"];
	["LinkableUpdateRedirectEntityRelationInput"]: ValueTypes["LinkableUpdateRedirectEntityRelationInput"];
	["RedirectWithoutLinkUpdateInput"]: ValueTypes["RedirectWithoutLinkUpdateInput"];
	["RedirectUpdateTargetEntityRelationInput"]: ValueTypes["RedirectUpdateTargetEntityRelationInput"];
	["LinkUpdateInput"]: ValueTypes["LinkUpdateInput"];
	["LinkUpdateInternalLinkEntityRelationInput"]: ValueTypes["LinkUpdateInternalLinkEntityRelationInput"];
	["LinkableUpdateInput"]: ValueTypes["LinkableUpdateInput"];
	["LinkableUpdateGenericPageEntityRelationInput"]: ValueTypes["LinkableUpdateGenericPageEntityRelationInput"];
	["GenericPageWithoutLinkUpdateInput"]: ValueTypes["GenericPageWithoutLinkUpdateInput"];
	["GenericPageUpdateContentEntityRelationInput"]: ValueTypes["GenericPageUpdateContentEntityRelationInput"];
	["ContentUpdateInput"]: ValueTypes["ContentUpdateInput"];
	["ContentUpdateBlocksEntityRelationInput"]: ValueTypes["ContentUpdateBlocksEntityRelationInput"];
	["ContentUpdateBlocksRelationInput"]: ValueTypes["ContentUpdateBlocksRelationInput"];
	["ContentBlockWithoutContentUpdateInput"]: ValueTypes["ContentBlockWithoutContentUpdateInput"];
	["ContentBlockUpdateReferencesEntityRelationInput"]: ValueTypes["ContentBlockUpdateReferencesEntityRelationInput"];
	["ContentBlockUpdateReferencesRelationInput"]: ValueTypes["ContentBlockUpdateReferencesRelationInput"];
	["ContentReferenceWithoutBlockUpdateInput"]: ValueTypes["ContentReferenceWithoutBlockUpdateInput"];
	["ContentReferenceUpdateImageEntityRelationInput"]: ValueTypes["ContentReferenceUpdateImageEntityRelationInput"];
	["ContentReferenceUpsertImageRelationInput"]: ValueTypes["ContentReferenceUpsertImageRelationInput"];
	["ContentReferenceUpdateLinkablesEntityRelationInput"]: ValueTypes["ContentReferenceUpdateLinkablesEntityRelationInput"];
	["ContentBlockUpsertReferencesRelationInput"]: ValueTypes["ContentBlockUpsertReferencesRelationInput"];
	["ContentUpsertBlocksRelationInput"]: ValueTypes["ContentUpsertBlocksRelationInput"];
	["GenericPageUpsertContentRelationInput"]: ValueTypes["GenericPageUpsertContentRelationInput"];
	["LinkableUpsertGenericPageRelationInput"]: ValueTypes["LinkableUpsertGenericPageRelationInput"];
	["LinkUpsertInternalLinkRelationInput"]: ValueTypes["LinkUpsertInternalLinkRelationInput"];
	["RedirectUpsertTargetRelationInput"]: ValueTypes["RedirectUpsertTargetRelationInput"];
	["LinkableUpsertRedirectRelationInput"]: ValueTypes["LinkableUpsertRedirectRelationInput"];
	["GenericPageUpsertLinkRelationInput"]: ValueTypes["GenericPageUpsertLinkRelationInput"];
	["ContentBlockCreateInput"]: ValueTypes["ContentBlockCreateInput"];
	["ContentBlockCreateContentEntityRelationInput"]: ValueTypes["ContentBlockCreateContentEntityRelationInput"];
	["ContentWithoutBlocksCreateInput"]: ValueTypes["ContentWithoutBlocksCreateInput"];
	["ContentBlockUpdateInput"]: ValueTypes["ContentBlockUpdateInput"];
	["ContentBlockUpdateContentEntityRelationInput"]: ValueTypes["ContentBlockUpdateContentEntityRelationInput"];
	["ContentWithoutBlocksUpdateInput"]: ValueTypes["ContentWithoutBlocksUpdateInput"];
	["ContentBlockUpsertContentRelationInput"]: ValueTypes["ContentBlockUpsertContentRelationInput"];
	["ContentReferenceCreateInput"]: ValueTypes["ContentReferenceCreateInput"];
	["ContentReferenceCreateBlockEntityRelationInput"]: ValueTypes["ContentReferenceCreateBlockEntityRelationInput"];
	["ContentBlockWithoutReferencesCreateInput"]: ValueTypes["ContentBlockWithoutReferencesCreateInput"];
	["ContentReferenceUpdateInput"]: ValueTypes["ContentReferenceUpdateInput"];
	["ContentReferenceUpdateBlockEntityRelationInput"]: ValueTypes["ContentReferenceUpdateBlockEntityRelationInput"];
	["ContentBlockWithoutReferencesUpdateInput"]: ValueTypes["ContentBlockWithoutReferencesUpdateInput"];
	["ContentReferenceUpsertBlockRelationInput"]: ValueTypes["ContentReferenceUpsertBlockRelationInput"];
	["RedirectCreateInput"]: ValueTypes["RedirectCreateInput"];
	["RedirectCreateLinkEntityRelationInput"]: ValueTypes["RedirectCreateLinkEntityRelationInput"];
	["LinkableWithoutRedirectCreateInput"]: ValueTypes["LinkableWithoutRedirectCreateInput"];
	["RedirectUpdateInput"]: ValueTypes["RedirectUpdateInput"];
	["RedirectUpdateLinkEntityRelationInput"]: ValueTypes["RedirectUpdateLinkEntityRelationInput"];
	["LinkableWithoutRedirectUpdateInput"]: ValueTypes["LinkableWithoutRedirectUpdateInput"];
	["RedirectUpsertLinkRelationInput"]: ValueTypes["RedirectUpsertLinkRelationInput"];
	["_MutationErrorType"]: ValueTypes["_MutationErrorType"];
	["MutationTransactionOptions"]: ValueTypes["MutationTransactionOptions"];
	["Json"]: ValueTypes["Json"];
	["_OnDeleteBehaviour"]: ValueTypes["_OnDeleteBehaviour"];
	["_RelationSide"]: ValueTypes["_RelationSide"];
	["_OrderByDirection"]: ValueTypes["_OrderByDirection"];
}