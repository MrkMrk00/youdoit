/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
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
		getLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere"
		},
		listLocale:{
			filter:"LocaleWhere",
			orderBy:"LocaleOrderBy"
		},
		paginateLocale:{
			filter:"LocaleWhere",
			orderBy:"LocaleOrderBy"
		},
		validateCreateLocale:{
			data:"LocaleCreateInput"
		},
		validateUpdateLocale:{
			by:"LocaleUniqueWhere",
			data:"LocaleUpdateInput"
		},
		getRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere"
		},
		listRecipe:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		},
		paginateRecipe:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		},
		validateCreateRecipe:{
			data:"RecipeCreateInput"
		},
		validateUpdateRecipe:{
			by:"RecipeUniqueWhere",
			data:"RecipeUpdateInput"
		},
		getRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		listRecipeLocale:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		paginateRecipeLocale:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		validateCreateRecipeLocale:{
			data:"RecipeLocaleCreateInput"
		},
		validateUpdateRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			data:"RecipeLocaleUpdateInput"
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
	UUID: `scalar.UUID` as const,
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
	ContentWhere:{
		id:"UUIDCondition",
		blocks:"ContentBlockWhere",
		and:"ContentWhere",
		or:"ContentWhere",
		not:"ContentWhere"
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
	IntCondition:{
		and:"IntCondition",
		or:"IntCondition",
		not:"IntCondition"
	},
	StringCondition:{
		and:"StringCondition",
		or:"StringCondition",
		not:"StringCondition"
	},
	ContentReferenceWhere:{
		id:"UUIDCondition",
		type:"ContentReferenceTypeCondition",
		primaryText:"StringCondition",
		block:"ContentBlockWhere",
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
	LinkableWhere:{
		id:"UUIDCondition",
		url:"StringCondition",
		and:"LinkableWhere",
		or:"LinkableWhere",
		not:"LinkableWhere"
	},
	ContentReference:{
		block:{
			filter:"ContentBlockWhere"
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
	OrderDirection: "enum" as const,
	LinkableOrderBy:{
		id:"OrderDirection",
		url:"OrderDirection"
	},
	ContentReferenceOrderBy:{
		id:"OrderDirection",
		type:"OrderDirection",
		primaryText:"OrderDirection",
		block:"ContentBlockOrderBy"
	},
	ContentBlockOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		json:"OrderDirection",
		content:"ContentOrderBy"
	},
	ContentOrderBy:{
		id:"OrderDirection"
	},
	ContentReferenceLinkablesByItemUniqueWhere:{
		item:"LinkableUniqueWhere"
	},
	LinkableUniqueWhere:{
		id:"UUID"
	},
	ContentBlockReferencesByLinkablesUniqueWhere:{
		linkables:"ContentReferenceLinkableItemUniqueWhere"
	},
	ContentReferenceLinkableItemUniqueWhere:{
		id:"UUID",
		item:"LinkableUniqueWhere"
	},
	ContentBlocksByReferencesUniqueWhere:{
		references:"ContentReferenceUniqueWhere"
	},
	ContentReferenceUniqueWhere:{
		id:"UUID",
		linkables:"ContentReferenceLinkableItemUniqueWhere"
	},
	ContentUniqueWhere:{
		id:"UUID",
		blocks:"ContentBlockUniqueWhere"
	},
	ContentBlockUniqueWhere:{
		id:"UUID",
		references:"ContentReferenceUniqueWhere"
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
		linkables:"ContentReferenceCreateLinkablesEntityRelationInput"
	},
	ContentReferenceCreateLinkablesEntityRelationInput:{
		connect:"ContentReferenceLinkableItemUniqueWhere"
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
		linkables:"ContentReferenceUpdateLinkablesEntityRelationInput"
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
	Link:{
		internalLink:{
			filter:"LinkableWhere"
		}
	},
	LinkType: "enum" as const,
	LinkUniqueWhere:{
		id:"UUID"
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
	LinkOrderBy:{
		id:"OrderDirection",
		type:"OrderDirection",
		title:"OrderDirection",
		externalLink:"OrderDirection",
		internalLink:"LinkableOrderBy"
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
		id:"UUID"
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

	},
	LinkUpsertInternalLinkRelationInput:{
		update:"LinkableUpdateInput",
		create:"LinkableCreateInput"
	},
	Locale:{
		recipes:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		paginateRecipes:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		}
	},
	RecipeLocale:{
		base:{
			filter:"RecipeWhere"
		},
		locale:{
			filter:"LocaleWhere"
		}
	},
	Recipe:{
		locales:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		paginateLocales:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		}
	},
	Date: `scalar.Date` as const,
	RecipeLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		description:"StringCondition",
		base:"RecipeWhere",
		locale:"LocaleWhere",
		and:"RecipeLocaleWhere",
		or:"RecipeLocaleWhere",
		not:"RecipeLocaleWhere"
	},
	RecipeWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		publishDate:"DateCondition",
		price:"StringCondition",
		locales:"RecipeLocaleWhere",
		and:"RecipeWhere",
		or:"RecipeWhere",
		not:"RecipeWhere"
	},
	DateCondition:{
		and:"DateCondition",
		or:"DateCondition",
		not:"DateCondition",
		eq:"Date",
		notEq:"Date",
		in:"Date",
		notIn:"Date",
		lt:"Date",
		lte:"Date",
		gt:"Date",
		gte:"Date"
	},
	LocaleWhere:{
		id:"UUIDCondition",
		code:"StringCondition",
		label:"StringCondition",
		recipes:"RecipeLocaleWhere",
		and:"LocaleWhere",
		or:"LocaleWhere",
		not:"LocaleWhere"
	},
	RecipeLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		description:"OrderDirection",
		base:"RecipeOrderBy",
		locale:"LocaleOrderBy"
	},
	RecipeOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		publishDate:"OrderDirection",
		price:"OrderDirection"
	},
	LocaleOrderBy:{
		id:"OrderDirection",
		code:"OrderDirection",
		label:"OrderDirection"
	},
	LocaleUniqueWhere:{
		id:"UUID",
		recipes:"RecipeLocaleUniqueWhere"
	},
	RecipeLocaleUniqueWhere:{
		id:"UUID"
	},
	LocaleCreateInput:{
		id:"UUID",
		recipes:"LocaleCreateRecipesEntityRelationInput"
	},
	LocaleCreateRecipesEntityRelationInput:{
		connect:"RecipeLocaleUniqueWhere",
		create:"RecipeLocaleWithoutLocaleCreateInput"
	},
	RecipeLocaleWithoutLocaleCreateInput:{
		id:"UUID",
		base:"RecipeLocaleCreateBaseEntityRelationInput"
	},
	RecipeLocaleCreateBaseEntityRelationInput:{
		connect:"RecipeUniqueWhere",
		create:"RecipeWithoutLocalesCreateInput"
	},
	RecipeUniqueWhere:{
		id:"UUID",
		locales:"RecipeLocaleUniqueWhere"
	},
	RecipeWithoutLocalesCreateInput:{
		id:"UUID",
		publishDate:"Date"
	},
	LocaleUpdateInput:{
		recipes:"LocaleUpdateRecipesEntityRelationInput"
	},
	LocaleUpdateRecipesEntityRelationInput:{
		create:"RecipeLocaleWithoutLocaleCreateInput",
		update:"LocaleUpdateRecipesRelationInput",
		upsert:"LocaleUpsertRecipesRelationInput",
		connect:"RecipeLocaleUniqueWhere",
		disconnect:"RecipeLocaleUniqueWhere",
		delete:"RecipeLocaleUniqueWhere"
	},
	LocaleUpdateRecipesRelationInput:{
		by:"RecipeLocaleUniqueWhere",
		data:"RecipeLocaleWithoutLocaleUpdateInput"
	},
	RecipeLocaleWithoutLocaleUpdateInput:{
		base:"RecipeLocaleUpdateBaseEntityRelationInput"
	},
	RecipeLocaleUpdateBaseEntityRelationInput:{
		create:"RecipeWithoutLocalesCreateInput",
		update:"RecipeWithoutLocalesUpdateInput",
		upsert:"RecipeLocaleUpsertBaseRelationInput",
		connect:"RecipeUniqueWhere"
	},
	RecipeWithoutLocalesUpdateInput:{
		publishDate:"Date"
	},
	RecipeLocaleUpsertBaseRelationInput:{
		update:"RecipeWithoutLocalesUpdateInput",
		create:"RecipeWithoutLocalesCreateInput"
	},
	LocaleUpsertRecipesRelationInput:{
		by:"RecipeLocaleUniqueWhere",
		update:"RecipeLocaleWithoutLocaleUpdateInput",
		create:"RecipeLocaleWithoutLocaleCreateInput"
	},
	RecipeCreateInput:{
		id:"UUID",
		publishDate:"Date",
		locales:"RecipeCreateLocalesEntityRelationInput"
	},
	RecipeCreateLocalesEntityRelationInput:{
		connect:"RecipeLocaleUniqueWhere",
		create:"RecipeLocaleWithoutBaseCreateInput"
	},
	RecipeLocaleWithoutBaseCreateInput:{
		id:"UUID",
		locale:"RecipeLocaleCreateLocaleEntityRelationInput"
	},
	RecipeLocaleCreateLocaleEntityRelationInput:{
		connect:"LocaleUniqueWhere",
		create:"LocaleWithoutRecipesCreateInput"
	},
	LocaleWithoutRecipesCreateInput:{
		id:"UUID"
	},
	RecipeUpdateInput:{
		publishDate:"Date",
		locales:"RecipeUpdateLocalesEntityRelationInput"
	},
	RecipeUpdateLocalesEntityRelationInput:{
		create:"RecipeLocaleWithoutBaseCreateInput",
		update:"RecipeUpdateLocalesRelationInput",
		upsert:"RecipeUpsertLocalesRelationInput",
		connect:"RecipeLocaleUniqueWhere",
		disconnect:"RecipeLocaleUniqueWhere",
		delete:"RecipeLocaleUniqueWhere"
	},
	RecipeUpdateLocalesRelationInput:{
		by:"RecipeLocaleUniqueWhere",
		data:"RecipeLocaleWithoutBaseUpdateInput"
	},
	RecipeLocaleWithoutBaseUpdateInput:{
		locale:"RecipeLocaleUpdateLocaleEntityRelationInput"
	},
	RecipeLocaleUpdateLocaleEntityRelationInput:{
		create:"LocaleWithoutRecipesCreateInput",
		update:"LocaleWithoutRecipesUpdateInput",
		upsert:"RecipeLocaleUpsertLocaleRelationInput",
		connect:"LocaleUniqueWhere"
	},
	LocaleWithoutRecipesUpdateInput:{

	},
	RecipeLocaleUpsertLocaleRelationInput:{
		update:"LocaleWithoutRecipesUpdateInput",
		create:"LocaleWithoutRecipesCreateInput"
	},
	RecipeUpsertLocalesRelationInput:{
		by:"RecipeLocaleUniqueWhere",
		update:"RecipeLocaleWithoutBaseUpdateInput",
		create:"RecipeLocaleWithoutBaseCreateInput"
	},
	RecipeLocaleCreateInput:{
		id:"UUID",
		base:"RecipeLocaleCreateBaseEntityRelationInput",
		locale:"RecipeLocaleCreateLocaleEntityRelationInput"
	},
	RecipeLocaleUpdateInput:{
		base:"RecipeLocaleUpdateBaseEntityRelationInput",
		locale:"RecipeLocaleUpdateLocaleEntityRelationInput"
	},
	ImageUniqueWhere:{
		id:"UUID"
	},
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
	ImageOrderBy:{
		id:"OrderDirection",
		url:"OrderDirection",
		width:"OrderDirection",
		height:"OrderDirection",
		size:"OrderDirection",
		type:"OrderDirection",
		alt:"OrderDirection"
	},
	ImageCreateInput:{
		id:"UUID"
	},
	ImageUpdateInput:{

	},
	QueryTransaction:{
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
		getLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere"
		},
		listLocale:{
			filter:"LocaleWhere",
			orderBy:"LocaleOrderBy"
		},
		paginateLocale:{
			filter:"LocaleWhere",
			orderBy:"LocaleOrderBy"
		},
		validateCreateLocale:{
			data:"LocaleCreateInput"
		},
		validateUpdateLocale:{
			by:"LocaleUniqueWhere",
			data:"LocaleUpdateInput"
		},
		getRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere"
		},
		listRecipe:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		},
		paginateRecipe:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		},
		validateCreateRecipe:{
			data:"RecipeCreateInput"
		},
		validateUpdateRecipe:{
			by:"RecipeUniqueWhere",
			data:"RecipeUpdateInput"
		},
		getRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		listRecipeLocale:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		paginateRecipeLocale:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		validateCreateRecipeLocale:{
			data:"RecipeLocaleCreateInput"
		},
		validateUpdateRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			data:"RecipeLocaleUpdateInput"
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
		}
	},
	Mutation:{
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
		createLocale:{
			data:"LocaleCreateInput"
		},
		deleteLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere"
		},
		updateLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere",
			data:"LocaleUpdateInput"
		},
		upsertLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere",
			update:"LocaleUpdateInput",
			create:"LocaleCreateInput"
		},
		createRecipe:{
			data:"RecipeCreateInput"
		},
		deleteRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere"
		},
		updateRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere",
			data:"RecipeUpdateInput"
		},
		upsertRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere",
			update:"RecipeUpdateInput",
			create:"RecipeCreateInput"
		},
		createRecipeLocale:{
			data:"RecipeLocaleCreateInput"
		},
		deleteRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		updateRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere",
			data:"RecipeLocaleUpdateInput"
		},
		upsertRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere",
			update:"RecipeLocaleUpdateInput",
			create:"RecipeLocaleCreateInput"
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
		createLocale:{
			data:"LocaleCreateInput"
		},
		deleteLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere"
		},
		updateLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere",
			data:"LocaleUpdateInput"
		},
		upsertLocale:{
			by:"LocaleUniqueWhere",
			filter:"LocaleWhere",
			update:"LocaleUpdateInput",
			create:"LocaleCreateInput"
		},
		createRecipe:{
			data:"RecipeCreateInput"
		},
		deleteRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere"
		},
		updateRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere",
			data:"RecipeUpdateInput"
		},
		upsertRecipe:{
			by:"RecipeUniqueWhere",
			filter:"RecipeWhere",
			update:"RecipeUpdateInput",
			create:"RecipeCreateInput"
		},
		createRecipeLocale:{
			data:"RecipeLocaleCreateInput"
		},
		deleteRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		updateRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere",
			data:"RecipeLocaleUpdateInput"
		},
		upsertRecipeLocale:{
			by:"RecipeLocaleUniqueWhere",
			filter:"RecipeLocaleWhere",
			update:"RecipeLocaleUpdateInput",
			create:"RecipeLocaleCreateInput"
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
		getLink:"Link",
		listLink:"Link",
		paginateLink:"LinkConnection",
		validateCreateLink:"_ValidationResult",
		validateUpdateLink:"_ValidationResult",
		getLinkable:"Linkable",
		listLinkable:"Linkable",
		paginateLinkable:"LinkableConnection",
		validateCreateLinkable:"_ValidationResult",
		validateUpdateLinkable:"_ValidationResult",
		getContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		listContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		paginateContentReferenceLinkableItem:"ContentReferenceLinkableItemConnection",
		getLocale:"Locale",
		listLocale:"Locale",
		paginateLocale:"LocaleConnection",
		validateCreateLocale:"_ValidationResult",
		validateUpdateLocale:"_ValidationResult",
		getRecipe:"Recipe",
		listRecipe:"Recipe",
		paginateRecipe:"RecipeConnection",
		validateCreateRecipe:"_ValidationResult",
		validateUpdateRecipe:"_ValidationResult",
		getRecipeLocale:"RecipeLocale",
		listRecipeLocale:"RecipeLocale",
		paginateRecipeLocale:"RecipeLocaleConnection",
		validateCreateRecipeLocale:"_ValidationResult",
		validateUpdateRecipeLocale:"_ValidationResult",
		getImage:"Image",
		listImage:"Image",
		paginateImage:"ImageConnection",
		validateCreateImage:"_ValidationResult",
		validateUpdateImage:"_ValidationResult",
		transaction:"QueryTransaction",
		_info:"Info",
		schema:"_Schema",
		s3DummyQuery:"String"
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
	FieldMeta:{
		readable:"Boolean",
		updatable:"Boolean"
	},
	UUID: `scalar.UUID` as const,
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
		linkables:"ContentReferenceLinkableItem",
		linkablesByItem:"ContentReferenceLinkableItem",
		paginateLinkables:"ContentReferenceLinkableItemConnection"
	},
	ContentReferenceMeta:{
		id:"FieldMeta",
		type:"FieldMeta",
		primaryText:"FieldMeta",
		block:"FieldMeta",
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
	Linkable:{
		_meta:"LinkableMeta",
		id:"UUID",
		url:"String"
	},
	LinkableMeta:{
		id:"FieldMeta",
		url:"FieldMeta"
	},
	ContentReferenceLinkableItemConnection:{
		pageInfo:"PageInfo",
		edges:"ContentReferenceLinkableItemEdge"
	},
	PageInfo:{
		totalCount:"Int"
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
	ContentConnection:{
		pageInfo:"PageInfo",
		edges:"ContentEdge"
	},
	ContentEdge:{
		node:"Content"
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
	LinkConnection:{
		pageInfo:"PageInfo",
		edges:"LinkEdge"
	},
	LinkEdge:{
		node:"Link"
	},
	LinkableConnection:{
		pageInfo:"PageInfo",
		edges:"LinkableEdge"
	},
	LinkableEdge:{
		node:"Linkable"
	},
	Locale:{
		_meta:"LocaleMeta",
		id:"UUID",
		code:"String",
		label:"String",
		recipes:"RecipeLocale",
		paginateRecipes:"RecipeLocaleConnection"
	},
	LocaleMeta:{
		id:"FieldMeta",
		code:"FieldMeta",
		label:"FieldMeta",
		recipes:"FieldMeta"
	},
	RecipeLocale:{
		_meta:"RecipeLocaleMeta",
		id:"UUID",
		title:"String",
		description:"String",
		base:"Recipe",
		locale:"Locale"
	},
	RecipeLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		description:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta"
	},
	Recipe:{
		_meta:"RecipeMeta",
		id:"UUID",
		order:"Int",
		publishDate:"Date",
		price:"String",
		locales:"RecipeLocale",
		paginateLocales:"RecipeLocaleConnection"
	},
	RecipeMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		publishDate:"FieldMeta",
		price:"FieldMeta",
		locales:"FieldMeta"
	},
	Date: `scalar.Date` as const,
	RecipeLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"RecipeLocaleEdge"
	},
	RecipeLocaleEdge:{
		node:"RecipeLocale"
	},
	LocaleConnection:{
		pageInfo:"PageInfo",
		edges:"LocaleEdge"
	},
	LocaleEdge:{
		node:"Locale"
	},
	RecipeConnection:{
		pageInfo:"PageInfo",
		edges:"RecipeEdge"
	},
	RecipeEdge:{
		node:"Recipe"
	},
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
	ImageConnection:{
		pageInfo:"PageInfo",
		edges:"ImageEdge"
	},
	ImageEdge:{
		node:"Image"
	},
	QueryTransaction:{
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
		getLink:"Link",
		listLink:"Link",
		paginateLink:"LinkConnection",
		validateCreateLink:"_ValidationResult",
		validateUpdateLink:"_ValidationResult",
		getLinkable:"Linkable",
		listLinkable:"Linkable",
		paginateLinkable:"LinkableConnection",
		validateCreateLinkable:"_ValidationResult",
		validateUpdateLinkable:"_ValidationResult",
		getContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		listContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		paginateContentReferenceLinkableItem:"ContentReferenceLinkableItemConnection",
		getLocale:"Locale",
		listLocale:"Locale",
		paginateLocale:"LocaleConnection",
		validateCreateLocale:"_ValidationResult",
		validateUpdateLocale:"_ValidationResult",
		getRecipe:"Recipe",
		listRecipe:"Recipe",
		paginateRecipe:"RecipeConnection",
		validateCreateRecipe:"_ValidationResult",
		validateUpdateRecipe:"_ValidationResult",
		getRecipeLocale:"RecipeLocale",
		listRecipeLocale:"RecipeLocale",
		paginateRecipeLocale:"RecipeLocaleConnection",
		validateCreateRecipeLocale:"_ValidationResult",
		validateUpdateRecipeLocale:"_ValidationResult",
		getImage:"Image",
		listImage:"Image",
		paginateImage:"ImageConnection",
		validateCreateImage:"_ValidationResult",
		validateUpdateImage:"_ValidationResult"
	},
	Info:{
		description:"String"
	},
	Mutation:{
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
		createLink:"LinkCreateResult",
		deleteLink:"LinkDeleteResult",
		updateLink:"LinkUpdateResult",
		upsertLink:"LinkUpsertResult",
		createLinkable:"LinkableCreateResult",
		deleteLinkable:"LinkableDeleteResult",
		updateLinkable:"LinkableUpdateResult",
		upsertLinkable:"LinkableUpsertResult",
		createLocale:"LocaleCreateResult",
		deleteLocale:"LocaleDeleteResult",
		updateLocale:"LocaleUpdateResult",
		upsertLocale:"LocaleUpsertResult",
		createRecipe:"RecipeCreateResult",
		deleteRecipe:"RecipeDeleteResult",
		updateRecipe:"RecipeUpdateResult",
		upsertRecipe:"RecipeUpsertResult",
		createRecipeLocale:"RecipeLocaleCreateResult",
		deleteRecipeLocale:"RecipeLocaleDeleteResult",
		updateRecipeLocale:"RecipeLocaleUpdateResult",
		upsertRecipeLocale:"RecipeLocaleUpsertResult",
		createImage:"ImageCreateResult",
		deleteImage:"ImageDeleteResult",
		updateImage:"ImageUpdateResult",
		upsertImage:"ImageUpsertResult",
		transaction:"MutationTransaction",
		query:"Query",
		generateUploadUrl:"S3SignedUpload",
		generateReadUrl:"S3SignedRead"
	},
	ContentCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Content",
		validation:"_ValidationResult"
	},
	MutationResult:{
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
		"...on LinkCreateResult": "LinkCreateResult",
		"...on LinkDeleteResult": "LinkDeleteResult",
		"...on LinkUpdateResult": "LinkUpdateResult",
		"...on LinkUpsertResult": "LinkUpsertResult",
		"...on LinkableCreateResult": "LinkableCreateResult",
		"...on LinkableDeleteResult": "LinkableDeleteResult",
		"...on LinkableUpdateResult": "LinkableUpdateResult",
		"...on LinkableUpsertResult": "LinkableUpsertResult",
		"...on LocaleCreateResult": "LocaleCreateResult",
		"...on LocaleDeleteResult": "LocaleDeleteResult",
		"...on LocaleUpdateResult": "LocaleUpdateResult",
		"...on LocaleUpsertResult": "LocaleUpsertResult",
		"...on RecipeCreateResult": "RecipeCreateResult",
		"...on RecipeDeleteResult": "RecipeDeleteResult",
		"...on RecipeUpdateResult": "RecipeUpdateResult",
		"...on RecipeUpsertResult": "RecipeUpsertResult",
		"...on RecipeLocaleCreateResult": "RecipeLocaleCreateResult",
		"...on RecipeLocaleDeleteResult": "RecipeLocaleDeleteResult",
		"...on RecipeLocaleUpdateResult": "RecipeLocaleUpdateResult",
		"...on RecipeLocaleUpsertResult": "RecipeLocaleUpsertResult",
		"...on ImageCreateResult": "ImageCreateResult",
		"...on ImageDeleteResult": "ImageDeleteResult",
		"...on ImageUpdateResult": "ImageUpdateResult",
		"...on ImageUpsertResult": "ImageUpsertResult",
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
	LocaleCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Locale",
		validation:"_ValidationResult"
	},
	LocaleDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Locale"
	},
	LocaleUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Locale",
		validation:"_ValidationResult"
	},
	LocaleUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Locale",
		validation:"_ValidationResult"
	},
	RecipeCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Recipe",
		validation:"_ValidationResult"
	},
	RecipeDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Recipe"
	},
	RecipeUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Recipe",
		validation:"_ValidationResult"
	},
	RecipeUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"Recipe",
		validation:"_ValidationResult"
	},
	RecipeLocaleCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"RecipeLocale",
		validation:"_ValidationResult"
	},
	RecipeLocaleDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"RecipeLocale"
	},
	RecipeLocaleUpdateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"RecipeLocale",
		validation:"_ValidationResult"
	},
	RecipeLocaleUpsertResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"RecipeLocale",
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
	MutationTransaction:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		validation:"_ValidationResult",
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
		createLink:"LinkCreateResult",
		deleteLink:"LinkDeleteResult",
		updateLink:"LinkUpdateResult",
		upsertLink:"LinkUpsertResult",
		createLinkable:"LinkableCreateResult",
		deleteLinkable:"LinkableDeleteResult",
		updateLinkable:"LinkableUpdateResult",
		upsertLinkable:"LinkableUpsertResult",
		createLocale:"LocaleCreateResult",
		deleteLocale:"LocaleDeleteResult",
		updateLocale:"LocaleUpdateResult",
		upsertLocale:"LocaleUpsertResult",
		createRecipe:"RecipeCreateResult",
		deleteRecipe:"RecipeDeleteResult",
		updateRecipe:"RecipeUpdateResult",
		upsertRecipe:"RecipeUpsertResult",
		createRecipeLocale:"RecipeLocaleCreateResult",
		deleteRecipeLocale:"RecipeLocaleDeleteResult",
		updateRecipeLocale:"RecipeLocaleUpdateResult",
		upsertRecipeLocale:"RecipeLocaleUpsertResult",
		createImage:"ImageCreateResult",
		deleteImage:"ImageDeleteResult",
		updateImage:"ImageUpdateResult",
		upsertImage:"ImageUpsertResult",
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
	Date?: ScalarResolver;
	Json?: ScalarResolver;
}
type ZEUS_UNIONS = GraphQLTypes["_PathFragment"] | GraphQLTypes["_Argument"]

export type ValueTypes = {
    ["Query"]: AliasType<{
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
getLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
listLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Link"]],
paginateLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkConnection"]],
validateCreateLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
listLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
paginateLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
listLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
paginateLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LocaleConnection"]],
validateCreateLocale?: [{	data: ValueTypes["LocaleCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LocaleUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
listRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
paginateRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeConnection"]],
validateCreateRecipe?: [{	data: ValueTypes["RecipeCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	data: ValueTypes["RecipeUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
validateCreateRecipeLocale?: [{	data: ValueTypes["RecipeLocaleCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	data: ValueTypes["RecipeLocaleUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
listImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Image"]],
paginateImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImageConnection"]],
validateCreateImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
	transaction?:ValueTypes["QueryTransaction"],
	_info?:ValueTypes["Info"],
	schema?:ValueTypes["_Schema"],
	s3DummyQuery?:boolean | `@${string}`,
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
	["FieldMeta"]: AliasType<{
	readable?:boolean | `@${string}`,
	updatable?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["UUID"]:unknown;
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
	["ContentWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	blocks?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ContentWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ContentWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>
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
	["ContentReferenceWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["ContentReferenceTypeCondition"] | undefined | null | Variable<any, string>,
	primaryText?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	block?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,
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
	["LinkableWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["LinkableWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LinkableWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>
};
	["ContentReference"]: AliasType<{
	_meta?:ValueTypes["ContentReferenceMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	primaryText?:boolean | `@${string}`,
block?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
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
	["Linkable"]: AliasType<{
	_meta?:ValueTypes["LinkableMeta"],
	id?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["LinkableMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	url?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	item?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	reference?: ValueTypes["ContentReferenceOrderBy"] | undefined | null | Variable<any, string>
};
	["OrderDirection"]:OrderDirection;
	["LinkableOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["ContentReferenceOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	primaryText?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	block?: ValueTypes["ContentBlockOrderBy"] | undefined | null | Variable<any, string>
};
	["ContentBlockOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	json?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	content?: ValueTypes["ContentOrderBy"] | undefined | null | Variable<any, string>
};
	["ContentOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
	item?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LinkableUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkableItemConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ContentReferenceLinkableItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PageInfo"]: AliasType<{
	totalCount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemEdge"]: AliasType<{
	node?:ValueTypes["ContentReferenceLinkableItem"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
	linkables?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	item?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
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
	["ContentReferenceUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	linkables?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>
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
	["ContentUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	blocks?: ValueTypes["ContentBlockUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentBlockUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	references?: ValueTypes["ContentReferenceUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ContentEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentEdge"]: AliasType<{
	node?:ValueTypes["Content"],
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
	linkables?: Array<ValueTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
	connect?: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
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
	linkables?: Array<ValueTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
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
	["LinkType"]:LinkType;
	["LinkUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
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
	["LinkOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	externalLink?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	internalLink?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>
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
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
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
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LinkUpsertInternalLinkRelationInput"]: {
	update?: ValueTypes["LinkableUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LinkableCreateInput"] | undefined | null | Variable<any, string>
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
	["Locale"]: AliasType<{
	_meta?:ValueTypes["LocaleMeta"],
	id?:boolean | `@${string}`,
	code?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
recipes?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
paginateRecipes?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["LocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	code?:ValueTypes["FieldMeta"],
	label?:ValueTypes["FieldMeta"],
	recipes?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocale"]: AliasType<{
	_meta?:ValueTypes["RecipeLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	description?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Recipe"]: AliasType<{
	_meta?:ValueTypes["RecipeMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
	publishDate?:boolean | `@${string}`,
	price?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
paginateLocales?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	publishDate?:ValueTypes["FieldMeta"],
	price?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Date"]:unknown;
	["RecipeLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>
};
	["RecipeWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["DateCondition"] | undefined | null | Variable<any, string>,
	price?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["RecipeWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["RecipeWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>
};
	["DateCondition"]: {
	and?: Array<ValueTypes["DateCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["DateCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["DateCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["Date"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["Date"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["Date"] | undefined | null | Variable<any, string>
};
	["LocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	code?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	recipes?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["LocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>
};
	["RecipeOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	price?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["LocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	code?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["RecipeLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleEdge"]: AliasType<{
	node?:ValueTypes["RecipeLocale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	code?: string | undefined | null | Variable<any, string>,
	recipes?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["LocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["LocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleEdge"]: AliasType<{
	node?:ValueTypes["Locale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	code?: string | undefined | null | Variable<any, string>,
	label?: string | undefined | null | Variable<any, string>,
	recipes?: Array<ValueTypes["LocaleCreateRecipesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LocaleCreateRecipesEntityRelationInput"]: {
	connect?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["RecipeLocaleWithoutLocaleCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleCreateBaseEntityRelationInput"]: {
	connect?: ValueTypes["RecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RecipeWithoutLocalesCreateInput"] | undefined | null | Variable<any, string>
};
	["RecipeUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeWithoutLocalesCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	order?: number | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	price?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LocaleUpdateInput"]: {
	code?: string | undefined | null | Variable<any, string>,
	label?: string | undefined | null | Variable<any, string>,
	recipes?: Array<ValueTypes["LocaleUpdateRecipesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["LocaleUpdateRecipesEntityRelationInput"]: {
	create?: ValueTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["LocaleUpdateRecipesRelationInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["LocaleUpsertRecipesRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["LocaleUpdateRecipesRelationInput"]: {
	by?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	data?: ValueTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleWithoutLocaleUpdateInput"]: {
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleUpdateBaseEntityRelationInput"]: {
	create?: ValueTypes["RecipeWithoutLocalesCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["RecipeWithoutLocalesUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["RecipeLocaleUpsertBaseRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["RecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["RecipeWithoutLocalesUpdateInput"]: {
	order?: number | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	price?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleUpsertBaseRelationInput"]: {
	update?: ValueTypes["RecipeWithoutLocalesUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RecipeWithoutLocalesCreateInput"] | undefined | null | Variable<any, string>
};
	["LocaleUpsertRecipesRelationInput"]: {
	by?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined | null | Variable<any, string>
};
	["RecipeConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["RecipeEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeEdge"]: AliasType<{
	node?:ValueTypes["Recipe"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	order?: number | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	price?: string | undefined | null | Variable<any, string>,
	locales?: Array<ValueTypes["RecipeCreateLocalesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeCreateLocalesEntityRelationInput"]: {
	connect?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["RecipeLocaleWithoutBaseCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	locale?: ValueTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleCreateLocaleEntityRelationInput"]: {
	connect?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LocaleWithoutRecipesCreateInput"] | undefined | null | Variable<any, string>
};
	["LocaleWithoutRecipesCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	code?: string | undefined | null | Variable<any, string>,
	label?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeUpdateInput"]: {
	order?: number | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	price?: string | undefined | null | Variable<any, string>,
	locales?: Array<ValueTypes["RecipeUpdateLocalesEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeUpdateLocalesEntityRelationInput"]: {
	create?: ValueTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["RecipeUpdateLocalesRelationInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["RecipeUpsertLocalesRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	disconnect?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["RecipeUpdateLocalesRelationInput"]: {
	by?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	data?: ValueTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleWithoutBaseUpdateInput"]: {
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	locale?: ValueTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleUpdateLocaleEntityRelationInput"]: {
	create?: ValueTypes["LocaleWithoutRecipesCreateInput"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["LocaleWithoutRecipesUpdateInput"] | undefined | null | Variable<any, string>,
	upsert?: ValueTypes["RecipeLocaleUpsertLocaleRelationInput"] | undefined | null | Variable<any, string>,
	connect?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	delete?: boolean | undefined | null | Variable<any, string>
};
	["LocaleWithoutRecipesUpdateInput"]: {
	code?: string | undefined | null | Variable<any, string>,
	label?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleUpsertLocaleRelationInput"]: {
	update?: ValueTypes["LocaleWithoutRecipesUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["LocaleWithoutRecipesCreateInput"] | undefined | null | Variable<any, string>
};
	["RecipeUpsertLocalesRelationInput"]: {
	by?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	update?: ValueTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleCreateInput"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["RecipeLocaleUpdateInput"]: {
	title?: string | undefined | null | Variable<any, string>,
	description?: string | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
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
	["ImageUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
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
	["ImageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ImageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImageEdge"]: AliasType<{
	node?:ValueTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
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
	["ImageUpdateInput"]: {
	url?: string | undefined | null | Variable<any, string>,
	width?: number | undefined | null | Variable<any, string>,
	height?: number | undefined | null | Variable<any, string>,
	size?: number | undefined | null | Variable<any, string>,
	type?: string | undefined | null | Variable<any, string>,
	alt?: string | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["QueryTransaction"]: AliasType<{
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
getLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
listLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Link"]],
paginateLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkConnection"]],
validateCreateLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
listLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
paginateLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
listLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
paginateLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LocaleConnection"]],
validateCreateLocale?: [{	data: ValueTypes["LocaleCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	data: ValueTypes["LocaleUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
listRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
paginateRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeConnection"]],
validateCreateRecipe?: [{	data: ValueTypes["RecipeCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	data: ValueTypes["RecipeUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
validateCreateRecipeLocale?: [{	data: ValueTypes["RecipeLocaleCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	data: ValueTypes["RecipeLocaleUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
listImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Image"]],
paginateImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImageConnection"]],
validateCreateImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
		__typename?: boolean | `@${string}`
}>;
	["Info"]: AliasType<{
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
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
createLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkCreateResult"]],
deleteLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkDeleteResult"]],
updateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkUpsertResult"]],
createLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkableUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableUpsertResult"]],
createLocale?: [{	data: ValueTypes["LocaleCreateInput"] | Variable<any, string>},ValueTypes["LocaleCreateResult"]],
deleteLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["LocaleDeleteResult"]],
updateLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LocaleUpdateInput"] | Variable<any, string>},ValueTypes["LocaleUpdateResult"]],
upsertLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LocaleUpdateInput"] | Variable<any, string>,	create: ValueTypes["LocaleCreateInput"] | Variable<any, string>},ValueTypes["LocaleUpsertResult"]],
createRecipe?: [{	data: ValueTypes["RecipeCreateInput"] | Variable<any, string>},ValueTypes["RecipeCreateResult"]],
deleteRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeDeleteResult"]],
updateRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["RecipeUpdateInput"] | Variable<any, string>},ValueTypes["RecipeUpdateResult"]],
upsertRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["RecipeUpdateInput"] | Variable<any, string>,	create: ValueTypes["RecipeCreateInput"] | Variable<any, string>},ValueTypes["RecipeUpsertResult"]],
createRecipeLocale?: [{	data: ValueTypes["RecipeLocaleCreateInput"] | Variable<any, string>},ValueTypes["RecipeLocaleCreateResult"]],
deleteRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleDeleteResult"]],
updateRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["RecipeLocaleUpdateInput"] | Variable<any, string>},ValueTypes["RecipeLocaleUpdateResult"]],
upsertRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["RecipeLocaleUpdateInput"] | Variable<any, string>,	create: ValueTypes["RecipeLocaleCreateInput"] | Variable<any, string>},ValueTypes["RecipeLocaleUpsertResult"]],
createImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageCreateResult"]],
deleteImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImageDeleteResult"]],
updateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ImageUpdateInput"] | Variable<any, string>,	create: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageUpsertResult"]],
transaction?: [{	options?: ValueTypes["MutationTransactionOptions"] | undefined | null | Variable<any, string>},ValueTypes["MutationTransaction"]],
	query?:ValueTypes["Query"],
generateUploadUrl?: [{	contentType: string | Variable<any, string>,	expiration?: number | undefined | null | Variable<any, string>,	prefix?: string | undefined | null | Variable<any, string>},ValueTypes["S3SignedUpload"]],
generateReadUrl?: [{	objectKey: string | Variable<any, string>,	expiration?: number | undefined | null | Variable<any, string>},ValueTypes["S3SignedRead"]],
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
	["MutationResult"]:AliasType<{
		ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"];
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
		['...on LinkCreateResult']?: Omit<ValueTypes["LinkCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkDeleteResult']?: Omit<ValueTypes["LinkDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkUpdateResult']?: Omit<ValueTypes["LinkUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkUpsertResult']?: Omit<ValueTypes["LinkUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableCreateResult']?: Omit<ValueTypes["LinkableCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableDeleteResult']?: Omit<ValueTypes["LinkableDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableUpdateResult']?: Omit<ValueTypes["LinkableUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LinkableUpsertResult']?: Omit<ValueTypes["LinkableUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on LocaleCreateResult']?: Omit<ValueTypes["LocaleCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LocaleDeleteResult']?: Omit<ValueTypes["LocaleDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on LocaleUpdateResult']?: Omit<ValueTypes["LocaleUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on LocaleUpsertResult']?: Omit<ValueTypes["LocaleUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeCreateResult']?: Omit<ValueTypes["RecipeCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeDeleteResult']?: Omit<ValueTypes["RecipeDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeUpdateResult']?: Omit<ValueTypes["RecipeUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeUpsertResult']?: Omit<ValueTypes["RecipeUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeLocaleCreateResult']?: Omit<ValueTypes["RecipeLocaleCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeLocaleDeleteResult']?: Omit<ValueTypes["RecipeLocaleDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeLocaleUpdateResult']?: Omit<ValueTypes["RecipeLocaleUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on RecipeLocaleUpsertResult']?: Omit<ValueTypes["RecipeLocaleUpsertResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageCreateResult']?: Omit<ValueTypes["ImageCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageDeleteResult']?: Omit<ValueTypes["ImageDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageUpdateResult']?: Omit<ValueTypes["ImageUpdateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImageUpsertResult']?: Omit<ValueTypes["ImageUpsertResult"],keyof ValueTypes["MutationResult"]>;
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
	["LocaleCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Locale"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Locale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Locale"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Locale"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Recipe"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Recipe"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Recipe"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["Recipe"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["RecipeLocale"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["RecipeLocale"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["RecipeLocale"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["RecipeLocale"],
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
	["MutationTransaction"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	validation?:ValueTypes["_ValidationResult"],
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
createLink?: [{	data: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkCreateResult"]],
deleteLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkDeleteResult"]],
updateLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkUpdateInput"] | Variable<any, string>},ValueTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkCreateInput"] | Variable<any, string>},ValueTypes["LinkUpsertResult"]],
createLinkable?: [{	data: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LinkableUpdateInput"] | Variable<any, string>},ValueTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LinkableUpdateInput"] | Variable<any, string>,	create: ValueTypes["LinkableCreateInput"] | Variable<any, string>},ValueTypes["LinkableUpsertResult"]],
createLocale?: [{	data: ValueTypes["LocaleCreateInput"] | Variable<any, string>},ValueTypes["LocaleCreateResult"]],
deleteLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["LocaleDeleteResult"]],
updateLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["LocaleUpdateInput"] | Variable<any, string>},ValueTypes["LocaleUpdateResult"]],
upsertLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["LocaleUpdateInput"] | Variable<any, string>,	create: ValueTypes["LocaleCreateInput"] | Variable<any, string>},ValueTypes["LocaleUpsertResult"]],
createRecipe?: [{	data: ValueTypes["RecipeCreateInput"] | Variable<any, string>},ValueTypes["RecipeCreateResult"]],
deleteRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeDeleteResult"]],
updateRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["RecipeUpdateInput"] | Variable<any, string>},ValueTypes["RecipeUpdateResult"]],
upsertRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["RecipeUpdateInput"] | Variable<any, string>,	create: ValueTypes["RecipeCreateInput"] | Variable<any, string>},ValueTypes["RecipeUpsertResult"]],
createRecipeLocale?: [{	data: ValueTypes["RecipeLocaleCreateInput"] | Variable<any, string>},ValueTypes["RecipeLocaleCreateResult"]],
deleteRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleDeleteResult"]],
updateRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["RecipeLocaleUpdateInput"] | Variable<any, string>},ValueTypes["RecipeLocaleUpdateResult"]],
upsertRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["RecipeLocaleUpdateInput"] | Variable<any, string>,	create: ValueTypes["RecipeLocaleCreateInput"] | Variable<any, string>},ValueTypes["RecipeLocaleUpsertResult"]],
createImage?: [{	data: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageCreateResult"]],
deleteImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImageDeleteResult"]],
updateImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	data: ValueTypes["ImageUpdateInput"] | Variable<any, string>},ValueTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	update: ValueTypes["ImageUpdateInput"] | Variable<any, string>,	create: ValueTypes["ImageCreateInput"] | Variable<any, string>},ValueTypes["ImageUpsertResult"]],
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
getLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
listLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Link"]],
paginateLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkConnection"]],
validateCreateLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
listLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Linkable"]],
paginateLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
listLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Locale"]],
paginateLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LocaleConnection"]],
validateCreateLocale?: [{	data: ResolverInputTypes["LocaleCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	data: ResolverInputTypes["LocaleUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
listRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Recipe"]],
paginateRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeConnection"]],
validateCreateRecipe?: [{	data: ResolverInputTypes["RecipeCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	data: ResolverInputTypes["RecipeUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
validateCreateRecipeLocale?: [{	data: ResolverInputTypes["RecipeLocaleCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	data: ResolverInputTypes["RecipeLocaleUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
listImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Image"]],
paginateImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImageConnection"]],
validateCreateImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
	transaction?:ResolverInputTypes["QueryTransaction"],
	_info?:ResolverInputTypes["Info"],
	schema?:ResolverInputTypes["_Schema"],
	s3DummyQuery?:boolean | `@${string}`,
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
	["FieldMeta"]: AliasType<{
	readable?:boolean | `@${string}`,
	updatable?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["UUID"]:unknown;
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
	["ContentWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	blocks?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["ContentWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ContentWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ContentWhere"] | undefined | null
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
	["ContentReferenceWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	type?: ResolverInputTypes["ContentReferenceTypeCondition"] | undefined | null,
	primaryText?: ResolverInputTypes["StringCondition"] | undefined | null,
	block?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,
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
	["LinkableWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	url?: ResolverInputTypes["StringCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["LinkableWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["LinkableWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["LinkableWhere"] | undefined | null
};
	["ContentReference"]: AliasType<{
	_meta?:ResolverInputTypes["ContentReferenceMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	primaryText?:boolean | `@${string}`,
block?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
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
	["Linkable"]: AliasType<{
	_meta?:ResolverInputTypes["LinkableMeta"],
	id?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["LinkableMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	url?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	item?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	reference?: ResolverInputTypes["ContentReferenceOrderBy"] | undefined | null
};
	["OrderDirection"]:OrderDirection;
	["LinkableOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	url?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["ContentReferenceOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	type?: ResolverInputTypes["OrderDirection"] | undefined | null,
	primaryText?: ResolverInputTypes["OrderDirection"] | undefined | null,
	block?: ResolverInputTypes["ContentBlockOrderBy"] | undefined | null
};
	["ContentBlockOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	json?: ResolverInputTypes["OrderDirection"] | undefined | null,
	content?: ResolverInputTypes["ContentOrderBy"] | undefined | null
};
	["ContentOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
	item?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["LinkableUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null
};
	["ContentReferenceLinkableItemConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ContentReferenceLinkableItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PageInfo"]: AliasType<{
	totalCount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ContentReferenceLinkableItemEdge"]: AliasType<{
	node?:ResolverInputTypes["ContentReferenceLinkableItem"],
		__typename?: boolean | `@${string}`
}>;
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
	linkables?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	item?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
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
	["ContentReferenceUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	linkables?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null
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
	["ContentUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	blocks?: ResolverInputTypes["ContentBlockUniqueWhere"] | undefined | null
};
	["ContentBlockUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	references?: ResolverInputTypes["ContentReferenceUniqueWhere"] | undefined | null
};
	["ContentConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ContentEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ContentEdge"]: AliasType<{
	node?:ResolverInputTypes["Content"],
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
	linkables?: Array<ResolverInputTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
	connect?: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
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
	linkables?: Array<ResolverInputTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
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
	["LinkType"]:LinkType;
	["LinkUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
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
	["LinkOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	type?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	externalLink?: ResolverInputTypes["OrderDirection"] | undefined | null,
	internalLink?: ResolverInputTypes["LinkableOrderBy"] | undefined | null
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
	_dummy_field_?: boolean | undefined | null
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
	_dummy_field_?: boolean | undefined | null
};
	["LinkUpsertInternalLinkRelationInput"]: {
	update?: ResolverInputTypes["LinkableUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["LinkableCreateInput"] | undefined | null
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
	["Locale"]: AliasType<{
	_meta?:ResolverInputTypes["LocaleMeta"],
	id?:boolean | `@${string}`,
	code?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
recipes?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
paginateRecipes?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["LocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	code?:ResolverInputTypes["FieldMeta"],
	label?:ResolverInputTypes["FieldMeta"],
	recipes?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocale"]: AliasType<{
	_meta?:ResolverInputTypes["RecipeLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	description?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Recipe"]: AliasType<{
	_meta?:ResolverInputTypes["RecipeMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
	publishDate?:boolean | `@${string}`,
	price?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
paginateLocales?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	publishDate?:ResolverInputTypes["FieldMeta"],
	price?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Date"]:unknown;
	["RecipeLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	description?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null
};
	["RecipeWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	publishDate?: ResolverInputTypes["DateCondition"] | undefined | null,
	price?: ResolverInputTypes["StringCondition"] | undefined | null,
	locales?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["RecipeWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["RecipeWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["RecipeWhere"] | undefined | null
};
	["DateCondition"]: {
	and?: Array<ResolverInputTypes["DateCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["DateCondition"]> | undefined | null,
	not?: ResolverInputTypes["DateCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["Date"] | undefined | null,
	notEq?: ResolverInputTypes["Date"] | undefined | null,
	in?: Array<ResolverInputTypes["Date"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["Date"]> | undefined | null,
	lt?: ResolverInputTypes["Date"] | undefined | null,
	lte?: ResolverInputTypes["Date"] | undefined | null,
	gt?: ResolverInputTypes["Date"] | undefined | null,
	gte?: ResolverInputTypes["Date"] | undefined | null
};
	["LocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	code?: ResolverInputTypes["StringCondition"] | undefined | null,
	label?: ResolverInputTypes["StringCondition"] | undefined | null,
	recipes?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["LocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["LocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["LocaleWhere"] | undefined | null
};
	["RecipeLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	description?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["RecipeOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null
};
	["RecipeOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	publishDate?: ResolverInputTypes["OrderDirection"] | undefined | null,
	price?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["LocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	code?: ResolverInputTypes["OrderDirection"] | undefined | null,
	label?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["RecipeLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["RecipeLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["RecipeLocale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	code?: string | undefined | null,
	recipes?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null
};
	["RecipeLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
	["LocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["LocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["Locale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	code?: string | undefined | null,
	label?: string | undefined | null,
	recipes?: Array<ResolverInputTypes["LocaleCreateRecipesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LocaleCreateRecipesEntityRelationInput"]: {
	connect?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined | null,
	alias?: string | undefined | null
};
	["RecipeLocaleWithoutLocaleCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	base?: ResolverInputTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleCreateBaseEntityRelationInput"]: {
	connect?: ResolverInputTypes["RecipeUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["RecipeWithoutLocalesCreateInput"] | undefined | null
};
	["RecipeUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	locales?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null
};
	["RecipeWithoutLocalesCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	order?: number | undefined | null,
	publishDate?: ResolverInputTypes["Date"] | undefined | null,
	price?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LocaleUpdateInput"]: {
	code?: string | undefined | null,
	label?: string | undefined | null,
	recipes?: Array<ResolverInputTypes["LocaleUpdateRecipesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["LocaleUpdateRecipesEntityRelationInput"]: {
	create?: ResolverInputTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined | null,
	update?: ResolverInputTypes["LocaleUpdateRecipesRelationInput"] | undefined | null,
	upsert?: ResolverInputTypes["LocaleUpsertRecipesRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	disconnect?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	delete?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
};
	["LocaleUpdateRecipesRelationInput"]: {
	by?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	data?: ResolverInputTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined | null
};
	["RecipeLocaleWithoutLocaleUpdateInput"]: {
	title?: string | undefined | null,
	description?: string | undefined | null,
	base?: ResolverInputTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleUpdateBaseEntityRelationInput"]: {
	create?: ResolverInputTypes["RecipeWithoutLocalesCreateInput"] | undefined | null,
	update?: ResolverInputTypes["RecipeWithoutLocalesUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["RecipeLocaleUpsertBaseRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["RecipeUniqueWhere"] | undefined | null,
	delete?: boolean | undefined | null
};
	["RecipeWithoutLocalesUpdateInput"]: {
	order?: number | undefined | null,
	publishDate?: ResolverInputTypes["Date"] | undefined | null,
	price?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleUpsertBaseRelationInput"]: {
	update?: ResolverInputTypes["RecipeWithoutLocalesUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["RecipeWithoutLocalesCreateInput"] | undefined | null
};
	["LocaleUpsertRecipesRelationInput"]: {
	by?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	update?: ResolverInputTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined | null
};
	["RecipeConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["RecipeEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeEdge"]: AliasType<{
	node?:ResolverInputTypes["Recipe"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	order?: number | undefined | null,
	publishDate?: ResolverInputTypes["Date"] | undefined | null,
	price?: string | undefined | null,
	locales?: Array<ResolverInputTypes["RecipeCreateLocalesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeCreateLocalesEntityRelationInput"]: {
	connect?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined | null,
	alias?: string | undefined | null
};
	["RecipeLocaleWithoutBaseCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	locale?: ResolverInputTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleCreateLocaleEntityRelationInput"]: {
	connect?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["LocaleWithoutRecipesCreateInput"] | undefined | null
};
	["LocaleWithoutRecipesCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	code?: string | undefined | null,
	label?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeUpdateInput"]: {
	order?: number | undefined | null,
	publishDate?: ResolverInputTypes["Date"] | undefined | null,
	price?: string | undefined | null,
	locales?: Array<ResolverInputTypes["RecipeUpdateLocalesEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeUpdateLocalesEntityRelationInput"]: {
	create?: ResolverInputTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined | null,
	update?: ResolverInputTypes["RecipeUpdateLocalesRelationInput"] | undefined | null,
	upsert?: ResolverInputTypes["RecipeUpsertLocalesRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	disconnect?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	delete?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	alias?: string | undefined | null
};
	["RecipeUpdateLocalesRelationInput"]: {
	by?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	data?: ResolverInputTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined | null
};
	["RecipeLocaleWithoutBaseUpdateInput"]: {
	title?: string | undefined | null,
	description?: string | undefined | null,
	locale?: ResolverInputTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleUpdateLocaleEntityRelationInput"]: {
	create?: ResolverInputTypes["LocaleWithoutRecipesCreateInput"] | undefined | null,
	update?: ResolverInputTypes["LocaleWithoutRecipesUpdateInput"] | undefined | null,
	upsert?: ResolverInputTypes["RecipeLocaleUpsertLocaleRelationInput"] | undefined | null,
	connect?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	delete?: boolean | undefined | null
};
	["LocaleWithoutRecipesUpdateInput"]: {
	code?: string | undefined | null,
	label?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleUpsertLocaleRelationInput"]: {
	update?: ResolverInputTypes["LocaleWithoutRecipesUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["LocaleWithoutRecipesCreateInput"] | undefined | null
};
	["RecipeUpsertLocalesRelationInput"]: {
	by?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	update?: ResolverInputTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined | null,
	create?: ResolverInputTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined | null
};
	["RecipeLocaleCreateInput"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	base?: ResolverInputTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined | null,
	locale?: ResolverInputTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["RecipeLocaleUpdateInput"]: {
	title?: string | undefined | null,
	description?: string | undefined | null,
	base?: ResolverInputTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined | null,
	locale?: ResolverInputTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
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
	["ImageUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
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
	["ImageConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ImageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImageEdge"]: AliasType<{
	node?:ResolverInputTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
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
	["ImageUpdateInput"]: {
	url?: string | undefined | null,
	width?: number | undefined | null,
	height?: number | undefined | null,
	size?: number | undefined | null,
	type?: string | undefined | null,
	alt?: string | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["QueryTransaction"]: AliasType<{
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
getLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
listLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Link"]],
paginateLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkConnection"]],
validateCreateLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
listLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Linkable"]],
paginateLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkableConnection"]],
validateCreateLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getContentReferenceLinkableItem?: [{	by: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
listLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Locale"]],
paginateLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LocaleConnection"]],
validateCreateLocale?: [{	data: ResolverInputTypes["LocaleCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	data: ResolverInputTypes["LocaleUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
listRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Recipe"]],
paginateRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeConnection"]],
validateCreateRecipe?: [{	data: ResolverInputTypes["RecipeCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	data: ResolverInputTypes["RecipeUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
validateCreateRecipeLocale?: [{	data: ResolverInputTypes["RecipeLocaleCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	data: ResolverInputTypes["RecipeLocaleUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
getImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
listImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Image"]],
paginateImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImageConnection"]],
validateCreateImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["_ValidationResult"]],
validateUpdateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["_ValidationResult"]],
		__typename?: boolean | `@${string}`
}>;
	["Info"]: AliasType<{
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
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
createLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkCreateResult"]],
deleteLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["LinkDeleteResult"]],
updateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	update: ResolverInputTypes["LinkUpdateInput"],	create: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkUpsertResult"]],
createLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	update: ResolverInputTypes["LinkableUpdateInput"],	create: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableUpsertResult"]],
createLocale?: [{	data: ResolverInputTypes["LocaleCreateInput"]},ResolverInputTypes["LocaleCreateResult"]],
deleteLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["LocaleDeleteResult"]],
updateLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	data: ResolverInputTypes["LocaleUpdateInput"]},ResolverInputTypes["LocaleUpdateResult"]],
upsertLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	update: ResolverInputTypes["LocaleUpdateInput"],	create: ResolverInputTypes["LocaleCreateInput"]},ResolverInputTypes["LocaleUpsertResult"]],
createRecipe?: [{	data: ResolverInputTypes["RecipeCreateInput"]},ResolverInputTypes["RecipeCreateResult"]],
deleteRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["RecipeDeleteResult"]],
updateRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	data: ResolverInputTypes["RecipeUpdateInput"]},ResolverInputTypes["RecipeUpdateResult"]],
upsertRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	update: ResolverInputTypes["RecipeUpdateInput"],	create: ResolverInputTypes["RecipeCreateInput"]},ResolverInputTypes["RecipeUpsertResult"]],
createRecipeLocale?: [{	data: ResolverInputTypes["RecipeLocaleCreateInput"]},ResolverInputTypes["RecipeLocaleCreateResult"]],
deleteRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocaleDeleteResult"]],
updateRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	data: ResolverInputTypes["RecipeLocaleUpdateInput"]},ResolverInputTypes["RecipeLocaleUpdateResult"]],
upsertRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	update: ResolverInputTypes["RecipeLocaleUpdateInput"],	create: ResolverInputTypes["RecipeLocaleCreateInput"]},ResolverInputTypes["RecipeLocaleUpsertResult"]],
createImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageCreateResult"]],
deleteImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["ImageDeleteResult"]],
updateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	update: ResolverInputTypes["ImageUpdateInput"],	create: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageUpsertResult"]],
transaction?: [{	options?: ResolverInputTypes["MutationTransactionOptions"] | undefined | null},ResolverInputTypes["MutationTransaction"]],
	query?:ResolverInputTypes["Query"],
generateUploadUrl?: [{	contentType: string,	expiration?: number | undefined | null,	prefix?: string | undefined | null},ResolverInputTypes["S3SignedUpload"]],
generateReadUrl?: [{	objectKey: string,	expiration?: number | undefined | null},ResolverInputTypes["S3SignedRead"]],
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
	["MutationResult"]:AliasType<{
		ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"];
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
		['...on LinkCreateResult']?: Omit<ResolverInputTypes["LinkCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkDeleteResult']?: Omit<ResolverInputTypes["LinkDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkUpdateResult']?: Omit<ResolverInputTypes["LinkUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkUpsertResult']?: Omit<ResolverInputTypes["LinkUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableCreateResult']?: Omit<ResolverInputTypes["LinkableCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableDeleteResult']?: Omit<ResolverInputTypes["LinkableDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableUpdateResult']?: Omit<ResolverInputTypes["LinkableUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LinkableUpsertResult']?: Omit<ResolverInputTypes["LinkableUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LocaleCreateResult']?: Omit<ResolverInputTypes["LocaleCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LocaleDeleteResult']?: Omit<ResolverInputTypes["LocaleDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LocaleUpdateResult']?: Omit<ResolverInputTypes["LocaleUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on LocaleUpsertResult']?: Omit<ResolverInputTypes["LocaleUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeCreateResult']?: Omit<ResolverInputTypes["RecipeCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeDeleteResult']?: Omit<ResolverInputTypes["RecipeDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeUpdateResult']?: Omit<ResolverInputTypes["RecipeUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeUpsertResult']?: Omit<ResolverInputTypes["RecipeUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeLocaleCreateResult']?: Omit<ResolverInputTypes["RecipeLocaleCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeLocaleDeleteResult']?: Omit<ResolverInputTypes["RecipeLocaleDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeLocaleUpdateResult']?: Omit<ResolverInputTypes["RecipeLocaleUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on RecipeLocaleUpsertResult']?: Omit<ResolverInputTypes["RecipeLocaleUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageCreateResult']?: Omit<ResolverInputTypes["ImageCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageDeleteResult']?: Omit<ResolverInputTypes["ImageDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageUpdateResult']?: Omit<ResolverInputTypes["ImageUpdateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImageUpsertResult']?: Omit<ResolverInputTypes["ImageUpsertResult"],keyof ResolverInputTypes["MutationResult"]>;
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
	["LocaleCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Locale"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Locale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Locale"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Locale"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Recipe"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Recipe"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Recipe"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["Recipe"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["RecipeLocale"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["RecipeLocale"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleUpdateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["RecipeLocale"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleUpsertResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["RecipeLocale"],
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
	["MutationTransaction"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	validation?:ResolverInputTypes["_ValidationResult"],
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
createLink?: [{	data: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkCreateResult"]],
deleteLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["LinkDeleteResult"]],
updateLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	data: ResolverInputTypes["LinkUpdateInput"]},ResolverInputTypes["LinkUpdateResult"]],
upsertLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	update: ResolverInputTypes["LinkUpdateInput"],	create: ResolverInputTypes["LinkCreateInput"]},ResolverInputTypes["LinkUpsertResult"]],
createLinkable?: [{	data: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableCreateResult"]],
deleteLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["LinkableDeleteResult"]],
updateLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	data: ResolverInputTypes["LinkableUpdateInput"]},ResolverInputTypes["LinkableUpdateResult"]],
upsertLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	update: ResolverInputTypes["LinkableUpdateInput"],	create: ResolverInputTypes["LinkableCreateInput"]},ResolverInputTypes["LinkableUpsertResult"]],
createLocale?: [{	data: ResolverInputTypes["LocaleCreateInput"]},ResolverInputTypes["LocaleCreateResult"]],
deleteLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["LocaleDeleteResult"]],
updateLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	data: ResolverInputTypes["LocaleUpdateInput"]},ResolverInputTypes["LocaleUpdateResult"]],
upsertLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	update: ResolverInputTypes["LocaleUpdateInput"],	create: ResolverInputTypes["LocaleCreateInput"]},ResolverInputTypes["LocaleUpsertResult"]],
createRecipe?: [{	data: ResolverInputTypes["RecipeCreateInput"]},ResolverInputTypes["RecipeCreateResult"]],
deleteRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["RecipeDeleteResult"]],
updateRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	data: ResolverInputTypes["RecipeUpdateInput"]},ResolverInputTypes["RecipeUpdateResult"]],
upsertRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	update: ResolverInputTypes["RecipeUpdateInput"],	create: ResolverInputTypes["RecipeCreateInput"]},ResolverInputTypes["RecipeUpsertResult"]],
createRecipeLocale?: [{	data: ResolverInputTypes["RecipeLocaleCreateInput"]},ResolverInputTypes["RecipeLocaleCreateResult"]],
deleteRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocaleDeleteResult"]],
updateRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	data: ResolverInputTypes["RecipeLocaleUpdateInput"]},ResolverInputTypes["RecipeLocaleUpdateResult"]],
upsertRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	update: ResolverInputTypes["RecipeLocaleUpdateInput"],	create: ResolverInputTypes["RecipeLocaleCreateInput"]},ResolverInputTypes["RecipeLocaleUpsertResult"]],
createImage?: [{	data: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageCreateResult"]],
deleteImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["ImageDeleteResult"]],
updateImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	data: ResolverInputTypes["ImageUpdateInput"]},ResolverInputTypes["ImageUpdateResult"]],
upsertImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	update: ResolverInputTypes["ImageUpdateInput"],	create: ResolverInputTypes["ImageCreateInput"]},ResolverInputTypes["ImageUpsertResult"]],
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
	getLink?: ModelTypes["Link"] | undefined,
	listLink: Array<ModelTypes["Link"]>,
	paginateLink: ModelTypes["LinkConnection"],
	validateCreateLink: ModelTypes["_ValidationResult"],
	validateUpdateLink: ModelTypes["_ValidationResult"],
	getLinkable?: ModelTypes["Linkable"] | undefined,
	listLinkable: Array<ModelTypes["Linkable"]>,
	paginateLinkable: ModelTypes["LinkableConnection"],
	validateCreateLinkable: ModelTypes["_ValidationResult"],
	validateUpdateLinkable: ModelTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: ModelTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: ModelTypes["Locale"] | undefined,
	listLocale: Array<ModelTypes["Locale"]>,
	paginateLocale: ModelTypes["LocaleConnection"],
	validateCreateLocale: ModelTypes["_ValidationResult"],
	validateUpdateLocale: ModelTypes["_ValidationResult"],
	getRecipe?: ModelTypes["Recipe"] | undefined,
	listRecipe: Array<ModelTypes["Recipe"]>,
	paginateRecipe: ModelTypes["RecipeConnection"],
	validateCreateRecipe: ModelTypes["_ValidationResult"],
	validateUpdateRecipe: ModelTypes["_ValidationResult"],
	getRecipeLocale?: ModelTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<ModelTypes["RecipeLocale"]>,
	paginateRecipeLocale: ModelTypes["RecipeLocaleConnection"],
	validateCreateRecipeLocale: ModelTypes["_ValidationResult"],
	validateUpdateRecipeLocale: ModelTypes["_ValidationResult"],
	getImage?: ModelTypes["Image"] | undefined,
	listImage: Array<ModelTypes["Image"]>,
	paginateImage: ModelTypes["ImageConnection"],
	validateCreateImage: ModelTypes["_ValidationResult"],
	validateUpdateImage: ModelTypes["_ValidationResult"],
	transaction?: ModelTypes["QueryTransaction"] | undefined,
	_info?: ModelTypes["Info"] | undefined,
	schema?: ModelTypes["_Schema"] | undefined,
	s3DummyQuery?: string | undefined
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
	["FieldMeta"]: {
		readable?: boolean | undefined,
	updatable?: boolean | undefined
};
	["UUID"]:any;
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
	["ContentWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	blocks?: ModelTypes["ContentBlockWhere"] | undefined,
	and?: Array<ModelTypes["ContentWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ContentWhere"] | undefined> | undefined,
	not?: ModelTypes["ContentWhere"] | undefined
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
	["ContentReferenceWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	type?: ModelTypes["ContentReferenceTypeCondition"] | undefined,
	primaryText?: ModelTypes["StringCondition"] | undefined,
	block?: ModelTypes["ContentBlockWhere"] | undefined,
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
	["LinkableWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	url?: ModelTypes["StringCondition"] | undefined,
	and?: Array<ModelTypes["LinkableWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["LinkableWhere"] | undefined> | undefined,
	not?: ModelTypes["LinkableWhere"] | undefined
};
	["ContentReference"]: {
		_meta?: ModelTypes["ContentReferenceMeta"] | undefined,
	id: ModelTypes["UUID"],
	type: ModelTypes["ContentReferenceType"],
	primaryText?: string | undefined,
	block?: ModelTypes["ContentBlock"] | undefined,
	linkables: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	linkablesByItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	paginateLinkables: ModelTypes["ContentReferenceLinkableItemConnection"]
};
	["ContentReferenceMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	type?: ModelTypes["FieldMeta"] | undefined,
	primaryText?: ModelTypes["FieldMeta"] | undefined,
	block?: ModelTypes["FieldMeta"] | undefined,
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
	["Linkable"]: {
		_meta?: ModelTypes["LinkableMeta"] | undefined,
	id: ModelTypes["UUID"],
	url: string
};
	["LinkableMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	url?: ModelTypes["FieldMeta"] | undefined
};
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	item?: ModelTypes["LinkableOrderBy"] | undefined,
	reference?: ModelTypes["ContentReferenceOrderBy"] | undefined
};
	["OrderDirection"]:OrderDirection;
	["LinkableOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	url?: ModelTypes["OrderDirection"] | undefined
};
	["ContentReferenceOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	type?: ModelTypes["OrderDirection"] | undefined,
	primaryText?: ModelTypes["OrderDirection"] | undefined,
	block?: ModelTypes["ContentBlockOrderBy"] | undefined
};
	["ContentBlockOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	json?: ModelTypes["OrderDirection"] | undefined,
	content?: ModelTypes["ContentOrderBy"] | undefined
};
	["ContentOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
	item?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["LinkableUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined
};
	["ContentReferenceLinkableItemConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentReferenceLinkableItemEdge"]>
};
	["PageInfo"]: {
		totalCount: number
};
	["ContentReferenceLinkableItemEdge"]: {
		node: ModelTypes["ContentReferenceLinkableItem"]
};
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
	linkables?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	item?: ModelTypes["LinkableUniqueWhere"] | undefined
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
	["ContentReferenceUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	linkables?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentBlockConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentBlockEdge"]>
};
	["ContentBlockEdge"]: {
		node: ModelTypes["ContentBlock"]
};
	["ContentUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	blocks?: ModelTypes["ContentBlockUniqueWhere"] | undefined
};
	["ContentBlockUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	references?: ModelTypes["ContentReferenceUniqueWhere"] | undefined
};
	["ContentConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ContentEdge"]>
};
	["ContentEdge"]: {
		node: ModelTypes["Content"]
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
	linkables?: Array<ModelTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
	connect?: ModelTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	alias?: string | undefined
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
	linkables?: Array<ModelTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
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
	["LinkType"]:LinkType;
	["LinkUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
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
	["LinkOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	type?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	externalLink?: ModelTypes["OrderDirection"] | undefined,
	internalLink?: ModelTypes["LinkableOrderBy"] | undefined
};
	["LinkConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LinkEdge"]>
};
	["LinkEdge"]: {
		node: ModelTypes["Link"]
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
	_dummy_field_?: boolean | undefined
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
	_dummy_field_?: boolean | undefined
};
	["LinkUpsertInternalLinkRelationInput"]: {
	update?: ModelTypes["LinkableUpdateInput"] | undefined,
	create?: ModelTypes["LinkableCreateInput"] | undefined
};
	["LinkableConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LinkableEdge"]>
};
	["LinkableEdge"]: {
		node: ModelTypes["Linkable"]
};
	["Locale"]: {
		_meta?: ModelTypes["LocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	code: string,
	label?: string | undefined,
	recipes: Array<ModelTypes["RecipeLocale"]>,
	paginateRecipes: ModelTypes["RecipeLocaleConnection"]
};
	["LocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	code?: ModelTypes["FieldMeta"] | undefined,
	label?: ModelTypes["FieldMeta"] | undefined,
	recipes?: ModelTypes["FieldMeta"] | undefined
};
	["RecipeLocale"]: {
		_meta?: ModelTypes["RecipeLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["Recipe"] | undefined,
	locale?: ModelTypes["Locale"] | undefined
};
	["RecipeLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	description?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined
};
	["Recipe"]: {
		_meta?: ModelTypes["RecipeMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	publishDate?: ModelTypes["Date"] | undefined,
	price?: string | undefined,
	locales: Array<ModelTypes["RecipeLocale"]>,
	paginateLocales: ModelTypes["RecipeLocaleConnection"]
};
	["RecipeMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	publishDate?: ModelTypes["FieldMeta"] | undefined,
	price?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined
};
	["Date"]:any;
	["RecipeLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	description?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["RecipeWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	and?: Array<ModelTypes["RecipeLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["RecipeLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["RecipeLocaleWhere"] | undefined
};
	["RecipeWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	publishDate?: ModelTypes["DateCondition"] | undefined,
	price?: ModelTypes["StringCondition"] | undefined,
	locales?: ModelTypes["RecipeLocaleWhere"] | undefined,
	and?: Array<ModelTypes["RecipeWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["RecipeWhere"] | undefined> | undefined,
	not?: ModelTypes["RecipeWhere"] | undefined
};
	["DateCondition"]: {
	and?: Array<ModelTypes["DateCondition"]> | undefined,
	or?: Array<ModelTypes["DateCondition"]> | undefined,
	not?: ModelTypes["DateCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["Date"] | undefined,
	notEq?: ModelTypes["Date"] | undefined,
	in?: Array<ModelTypes["Date"]> | undefined,
	notIn?: Array<ModelTypes["Date"]> | undefined,
	lt?: ModelTypes["Date"] | undefined,
	lte?: ModelTypes["Date"] | undefined,
	gt?: ModelTypes["Date"] | undefined,
	gte?: ModelTypes["Date"] | undefined
};
	["LocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	code?: ModelTypes["StringCondition"] | undefined,
	label?: ModelTypes["StringCondition"] | undefined,
	recipes?: ModelTypes["RecipeLocaleWhere"] | undefined,
	and?: Array<ModelTypes["LocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["LocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["LocaleWhere"] | undefined
};
	["RecipeLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	description?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["RecipeOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined
};
	["RecipeOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	publishDate?: ModelTypes["OrderDirection"] | undefined,
	price?: ModelTypes["OrderDirection"] | undefined
};
	["LocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	code?: ModelTypes["OrderDirection"] | undefined,
	label?: ModelTypes["OrderDirection"] | undefined
};
	["RecipeLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RecipeLocaleEdge"]>
};
	["RecipeLocaleEdge"]: {
		node: ModelTypes["RecipeLocale"]
};
	["LocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	code?: string | undefined,
	recipes?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined
};
	["RecipeLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
};
	["LocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LocaleEdge"]>
};
	["LocaleEdge"]: {
		node: ModelTypes["Locale"]
};
	["LocaleCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	code?: string | undefined,
	label?: string | undefined,
	recipes?: Array<ModelTypes["LocaleCreateRecipesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["LocaleCreateRecipesEntityRelationInput"]: {
	connect?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	create?: ModelTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined,
	alias?: string | undefined
};
	["RecipeLocaleWithoutLocaleCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleCreateBaseEntityRelationInput"]: {
	connect?: ModelTypes["RecipeUniqueWhere"] | undefined,
	create?: ModelTypes["RecipeWithoutLocalesCreateInput"] | undefined
};
	["RecipeUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	locales?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined
};
	["RecipeWithoutLocalesCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	order?: number | undefined,
	publishDate?: ModelTypes["Date"] | undefined,
	price?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["LocaleUpdateInput"]: {
	code?: string | undefined,
	label?: string | undefined,
	recipes?: Array<ModelTypes["LocaleUpdateRecipesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["LocaleUpdateRecipesEntityRelationInput"]: {
	create?: ModelTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined,
	update?: ModelTypes["LocaleUpdateRecipesRelationInput"] | undefined,
	upsert?: ModelTypes["LocaleUpsertRecipesRelationInput"] | undefined,
	connect?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	disconnect?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	delete?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["LocaleUpdateRecipesRelationInput"]: {
	by?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	data?: ModelTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined
};
	["RecipeLocaleWithoutLocaleUpdateInput"]: {
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpdateBaseEntityRelationInput"]: {
	create?: ModelTypes["RecipeWithoutLocalesCreateInput"] | undefined,
	update?: ModelTypes["RecipeWithoutLocalesUpdateInput"] | undefined,
	upsert?: ModelTypes["RecipeLocaleUpsertBaseRelationInput"] | undefined,
	connect?: ModelTypes["RecipeUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["RecipeWithoutLocalesUpdateInput"]: {
	order?: number | undefined,
	publishDate?: ModelTypes["Date"] | undefined,
	price?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpsertBaseRelationInput"]: {
	update?: ModelTypes["RecipeWithoutLocalesUpdateInput"] | undefined,
	create?: ModelTypes["RecipeWithoutLocalesCreateInput"] | undefined
};
	["LocaleUpsertRecipesRelationInput"]: {
	by?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	update?: ModelTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined,
	create?: ModelTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined
};
	["RecipeConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RecipeEdge"]>
};
	["RecipeEdge"]: {
		node: ModelTypes["Recipe"]
};
	["RecipeCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	order?: number | undefined,
	publishDate?: ModelTypes["Date"] | undefined,
	price?: string | undefined,
	locales?: Array<ModelTypes["RecipeCreateLocalesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeCreateLocalesEntityRelationInput"]: {
	connect?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	create?: ModelTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined,
	alias?: string | undefined
};
	["RecipeLocaleWithoutBaseCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	locale?: ModelTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleCreateLocaleEntityRelationInput"]: {
	connect?: ModelTypes["LocaleUniqueWhere"] | undefined,
	create?: ModelTypes["LocaleWithoutRecipesCreateInput"] | undefined
};
	["LocaleWithoutRecipesCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	code?: string | undefined,
	label?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeUpdateInput"]: {
	order?: number | undefined,
	publishDate?: ModelTypes["Date"] | undefined,
	price?: string | undefined,
	locales?: Array<ModelTypes["RecipeUpdateLocalesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeUpdateLocalesEntityRelationInput"]: {
	create?: ModelTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined,
	update?: ModelTypes["RecipeUpdateLocalesRelationInput"] | undefined,
	upsert?: ModelTypes["RecipeUpsertLocalesRelationInput"] | undefined,
	connect?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	disconnect?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	delete?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["RecipeUpdateLocalesRelationInput"]: {
	by?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	data?: ModelTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined
};
	["RecipeLocaleWithoutBaseUpdateInput"]: {
	title?: string | undefined,
	description?: string | undefined,
	locale?: ModelTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpdateLocaleEntityRelationInput"]: {
	create?: ModelTypes["LocaleWithoutRecipesCreateInput"] | undefined,
	update?: ModelTypes["LocaleWithoutRecipesUpdateInput"] | undefined,
	upsert?: ModelTypes["RecipeLocaleUpsertLocaleRelationInput"] | undefined,
	connect?: ModelTypes["LocaleUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["LocaleWithoutRecipesUpdateInput"]: {
	code?: string | undefined,
	label?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpsertLocaleRelationInput"]: {
	update?: ModelTypes["LocaleWithoutRecipesUpdateInput"] | undefined,
	create?: ModelTypes["LocaleWithoutRecipesCreateInput"] | undefined
};
	["RecipeUpsertLocalesRelationInput"]: {
	by?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	update?: ModelTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined,
	create?: ModelTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined
};
	["RecipeLocaleCreateInput"]: {
	id?: ModelTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined,
	locale?: ModelTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpdateInput"]: {
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined,
	locale?: ModelTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
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
	["ImageUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
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
	["ImageConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ImageEdge"]>
};
	["ImageEdge"]: {
		node: ModelTypes["Image"]
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
	["ImageUpdateInput"]: {
	url?: string | undefined,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["QueryTransaction"]: {
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
	getLink?: ModelTypes["Link"] | undefined,
	listLink: Array<ModelTypes["Link"]>,
	paginateLink: ModelTypes["LinkConnection"],
	validateCreateLink: ModelTypes["_ValidationResult"],
	validateUpdateLink: ModelTypes["_ValidationResult"],
	getLinkable?: ModelTypes["Linkable"] | undefined,
	listLinkable: Array<ModelTypes["Linkable"]>,
	paginateLinkable: ModelTypes["LinkableConnection"],
	validateCreateLinkable: ModelTypes["_ValidationResult"],
	validateUpdateLinkable: ModelTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: ModelTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: ModelTypes["Locale"] | undefined,
	listLocale: Array<ModelTypes["Locale"]>,
	paginateLocale: ModelTypes["LocaleConnection"],
	validateCreateLocale: ModelTypes["_ValidationResult"],
	validateUpdateLocale: ModelTypes["_ValidationResult"],
	getRecipe?: ModelTypes["Recipe"] | undefined,
	listRecipe: Array<ModelTypes["Recipe"]>,
	paginateRecipe: ModelTypes["RecipeConnection"],
	validateCreateRecipe: ModelTypes["_ValidationResult"],
	validateUpdateRecipe: ModelTypes["_ValidationResult"],
	getRecipeLocale?: ModelTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<ModelTypes["RecipeLocale"]>,
	paginateRecipeLocale: ModelTypes["RecipeLocaleConnection"],
	validateCreateRecipeLocale: ModelTypes["_ValidationResult"],
	validateUpdateRecipeLocale: ModelTypes["_ValidationResult"],
	getImage?: ModelTypes["Image"] | undefined,
	listImage: Array<ModelTypes["Image"]>,
	paginateImage: ModelTypes["ImageConnection"],
	validateCreateImage: ModelTypes["_ValidationResult"],
	validateUpdateImage: ModelTypes["_ValidationResult"]
};
	["Info"]: {
		description?: string | undefined
};
	["Mutation"]: {
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
	createLink: ModelTypes["LinkCreateResult"],
	deleteLink: ModelTypes["LinkDeleteResult"],
	updateLink: ModelTypes["LinkUpdateResult"],
	upsertLink: ModelTypes["LinkUpsertResult"],
	createLinkable: ModelTypes["LinkableCreateResult"],
	deleteLinkable: ModelTypes["LinkableDeleteResult"],
	updateLinkable: ModelTypes["LinkableUpdateResult"],
	upsertLinkable: ModelTypes["LinkableUpsertResult"],
	createLocale: ModelTypes["LocaleCreateResult"],
	deleteLocale: ModelTypes["LocaleDeleteResult"],
	updateLocale: ModelTypes["LocaleUpdateResult"],
	upsertLocale: ModelTypes["LocaleUpsertResult"],
	createRecipe: ModelTypes["RecipeCreateResult"],
	deleteRecipe: ModelTypes["RecipeDeleteResult"],
	updateRecipe: ModelTypes["RecipeUpdateResult"],
	upsertRecipe: ModelTypes["RecipeUpsertResult"],
	createRecipeLocale: ModelTypes["RecipeLocaleCreateResult"],
	deleteRecipeLocale: ModelTypes["RecipeLocaleDeleteResult"],
	updateRecipeLocale: ModelTypes["RecipeLocaleUpdateResult"],
	upsertRecipeLocale: ModelTypes["RecipeLocaleUpsertResult"],
	createImage: ModelTypes["ImageCreateResult"],
	deleteImage: ModelTypes["ImageDeleteResult"],
	updateImage: ModelTypes["ImageUpdateResult"],
	upsertImage: ModelTypes["ImageUpsertResult"],
	transaction: ModelTypes["MutationTransaction"],
	query: ModelTypes["Query"],
	generateUploadUrl: ModelTypes["S3SignedUpload"],
	generateReadUrl: ModelTypes["S3SignedRead"]
};
	["ContentCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Content"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["MutationResult"]: ModelTypes["ContentCreateResult"] | ModelTypes["ContentDeleteResult"] | ModelTypes["ContentUpdateResult"] | ModelTypes["ContentUpsertResult"] | ModelTypes["ContentBlockCreateResult"] | ModelTypes["ContentBlockDeleteResult"] | ModelTypes["ContentBlockUpdateResult"] | ModelTypes["ContentBlockUpsertResult"] | ModelTypes["ContentReferenceCreateResult"] | ModelTypes["ContentReferenceDeleteResult"] | ModelTypes["ContentReferenceUpdateResult"] | ModelTypes["ContentReferenceUpsertResult"] | ModelTypes["LinkCreateResult"] | ModelTypes["LinkDeleteResult"] | ModelTypes["LinkUpdateResult"] | ModelTypes["LinkUpsertResult"] | ModelTypes["LinkableCreateResult"] | ModelTypes["LinkableDeleteResult"] | ModelTypes["LinkableUpdateResult"] | ModelTypes["LinkableUpsertResult"] | ModelTypes["LocaleCreateResult"] | ModelTypes["LocaleDeleteResult"] | ModelTypes["LocaleUpdateResult"] | ModelTypes["LocaleUpsertResult"] | ModelTypes["RecipeCreateResult"] | ModelTypes["RecipeDeleteResult"] | ModelTypes["RecipeUpdateResult"] | ModelTypes["RecipeUpsertResult"] | ModelTypes["RecipeLocaleCreateResult"] | ModelTypes["RecipeLocaleDeleteResult"] | ModelTypes["RecipeLocaleUpdateResult"] | ModelTypes["RecipeLocaleUpsertResult"] | ModelTypes["ImageCreateResult"] | ModelTypes["ImageDeleteResult"] | ModelTypes["ImageUpdateResult"] | ModelTypes["ImageUpsertResult"];
	["_MutationError"]: {
		path: Array<ModelTypes["_PathFragment"]>,
	paths: Array<Array<ModelTypes["_PathFragment"]>>,
	type: ModelTypes["_MutationErrorType"],
	message?: string | undefined
};
	["_MutationErrorType"]:_MutationErrorType;
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
	["LocaleCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Locale"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LocaleDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Locale"] | undefined
};
	["LocaleUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Locale"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["LocaleUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Locale"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RecipeCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Recipe"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RecipeDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Recipe"] | undefined
};
	["RecipeUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Recipe"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RecipeUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["Recipe"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RecipeLocaleCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["RecipeLocale"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RecipeLocaleDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["RecipeLocale"] | undefined
};
	["RecipeLocaleUpdateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["RecipeLocale"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["RecipeLocaleUpsertResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["RecipeLocale"] | undefined,
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
	["MutationTransaction"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	validation: ModelTypes["_ValidationResult"],
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
	createLink: ModelTypes["LinkCreateResult"],
	deleteLink: ModelTypes["LinkDeleteResult"],
	updateLink: ModelTypes["LinkUpdateResult"],
	upsertLink: ModelTypes["LinkUpsertResult"],
	createLinkable: ModelTypes["LinkableCreateResult"],
	deleteLinkable: ModelTypes["LinkableDeleteResult"],
	updateLinkable: ModelTypes["LinkableUpdateResult"],
	upsertLinkable: ModelTypes["LinkableUpsertResult"],
	createLocale: ModelTypes["LocaleCreateResult"],
	deleteLocale: ModelTypes["LocaleDeleteResult"],
	updateLocale: ModelTypes["LocaleUpdateResult"],
	upsertLocale: ModelTypes["LocaleUpsertResult"],
	createRecipe: ModelTypes["RecipeCreateResult"],
	deleteRecipe: ModelTypes["RecipeDeleteResult"],
	updateRecipe: ModelTypes["RecipeUpdateResult"],
	upsertRecipe: ModelTypes["RecipeUpsertResult"],
	createRecipeLocale: ModelTypes["RecipeLocaleCreateResult"],
	deleteRecipeLocale: ModelTypes["RecipeLocaleDeleteResult"],
	updateRecipeLocale: ModelTypes["RecipeLocaleUpdateResult"],
	upsertRecipeLocale: ModelTypes["RecipeLocaleUpsertResult"],
	createImage: ModelTypes["ImageCreateResult"],
	deleteImage: ModelTypes["ImageDeleteResult"],
	updateImage: ModelTypes["ImageUpdateResult"],
	upsertImage: ModelTypes["ImageUpsertResult"],
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
	getLink?: GraphQLTypes["Link"] | undefined,
	listLink: Array<GraphQLTypes["Link"]>,
	paginateLink: GraphQLTypes["LinkConnection"],
	validateCreateLink: GraphQLTypes["_ValidationResult"],
	validateUpdateLink: GraphQLTypes["_ValidationResult"],
	getLinkable?: GraphQLTypes["Linkable"] | undefined,
	listLinkable: Array<GraphQLTypes["Linkable"]>,
	paginateLinkable: GraphQLTypes["LinkableConnection"],
	validateCreateLinkable: GraphQLTypes["_ValidationResult"],
	validateUpdateLinkable: GraphQLTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: GraphQLTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: GraphQLTypes["Locale"] | undefined,
	listLocale: Array<GraphQLTypes["Locale"]>,
	paginateLocale: GraphQLTypes["LocaleConnection"],
	validateCreateLocale: GraphQLTypes["_ValidationResult"],
	validateUpdateLocale: GraphQLTypes["_ValidationResult"],
	getRecipe?: GraphQLTypes["Recipe"] | undefined,
	listRecipe: Array<GraphQLTypes["Recipe"]>,
	paginateRecipe: GraphQLTypes["RecipeConnection"],
	validateCreateRecipe: GraphQLTypes["_ValidationResult"],
	validateUpdateRecipe: GraphQLTypes["_ValidationResult"],
	getRecipeLocale?: GraphQLTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<GraphQLTypes["RecipeLocale"]>,
	paginateRecipeLocale: GraphQLTypes["RecipeLocaleConnection"],
	validateCreateRecipeLocale: GraphQLTypes["_ValidationResult"],
	validateUpdateRecipeLocale: GraphQLTypes["_ValidationResult"],
	getImage?: GraphQLTypes["Image"] | undefined,
	listImage: Array<GraphQLTypes["Image"]>,
	paginateImage: GraphQLTypes["ImageConnection"],
	validateCreateImage: GraphQLTypes["_ValidationResult"],
	validateUpdateImage: GraphQLTypes["_ValidationResult"],
	transaction?: GraphQLTypes["QueryTransaction"] | undefined,
	_info?: GraphQLTypes["Info"] | undefined,
	schema?: GraphQLTypes["_Schema"] | undefined,
	s3DummyQuery?: string | undefined
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
	["FieldMeta"]: {
	__typename: "FieldMeta",
	readable?: boolean | undefined,
	updatable?: boolean | undefined
};
	["UUID"]: "scalar" & { name: "UUID" };
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
	["ContentWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	blocks?: GraphQLTypes["ContentBlockWhere"] | undefined,
	and?: Array<GraphQLTypes["ContentWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ContentWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ContentWhere"] | undefined
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
	["ContentReferenceWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	type?: GraphQLTypes["ContentReferenceTypeCondition"] | undefined,
	primaryText?: GraphQLTypes["StringCondition"] | undefined,
	block?: GraphQLTypes["ContentBlockWhere"] | undefined,
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
	["LinkableWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	url?: GraphQLTypes["StringCondition"] | undefined,
	and?: Array<GraphQLTypes["LinkableWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["LinkableWhere"] | undefined> | undefined,
	not?: GraphQLTypes["LinkableWhere"] | undefined
};
	["ContentReference"]: {
	__typename: "ContentReference",
	_meta?: GraphQLTypes["ContentReferenceMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	type: GraphQLTypes["ContentReferenceType"],
	primaryText?: string | undefined,
	block?: GraphQLTypes["ContentBlock"] | undefined,
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
	["Linkable"]: {
	__typename: "Linkable",
	_meta?: GraphQLTypes["LinkableMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	url: string
};
	["LinkableMeta"]: {
	__typename: "LinkableMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	url?: GraphQLTypes["FieldMeta"] | undefined
};
	["ContentReferenceLinkableItemOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	item?: GraphQLTypes["LinkableOrderBy"] | undefined,
	reference?: GraphQLTypes["ContentReferenceOrderBy"] | undefined
};
	["OrderDirection"]: OrderDirection;
	["LinkableOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	url?: GraphQLTypes["OrderDirection"] | undefined
};
	["ContentReferenceOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	type?: GraphQLTypes["OrderDirection"] | undefined,
	primaryText?: GraphQLTypes["OrderDirection"] | undefined,
	block?: GraphQLTypes["ContentBlockOrderBy"] | undefined
};
	["ContentBlockOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	json?: GraphQLTypes["OrderDirection"] | undefined,
	content?: GraphQLTypes["ContentOrderBy"] | undefined
};
	["ContentOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined
};
	["ContentReferenceLinkablesByItemUniqueWhere"]: {
		item?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["LinkableUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined
};
	["ContentReferenceLinkableItemConnection"]: {
	__typename: "ContentReferenceLinkableItemConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ContentReferenceLinkableItemEdge"]>
};
	["PageInfo"]: {
	__typename: "PageInfo",
	totalCount: number
};
	["ContentReferenceLinkableItemEdge"]: {
	__typename: "ContentReferenceLinkableItemEdge",
	node: GraphQLTypes["ContentReferenceLinkableItem"]
};
	["ContentBlockReferencesByLinkablesUniqueWhere"]: {
		linkables?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
};
	["ContentReferenceLinkableItemUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	item?: GraphQLTypes["LinkableUniqueWhere"] | undefined
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
	["ContentReferenceUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	linkables?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined
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
	["ContentUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	blocks?: GraphQLTypes["ContentBlockUniqueWhere"] | undefined
};
	["ContentBlockUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	references?: GraphQLTypes["ContentReferenceUniqueWhere"] | undefined
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
	linkables?: Array<GraphQLTypes["ContentReferenceCreateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["ContentReferenceCreateLinkablesEntityRelationInput"]: {
		connect?: GraphQLTypes["ContentReferenceLinkableItemUniqueWhere"] | undefined,
	alias?: string | undefined
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
	linkables?: Array<GraphQLTypes["ContentReferenceUpdateLinkablesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
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
	["LinkType"]: LinkType;
	["LinkUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
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
	["LinkOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	type?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	externalLink?: GraphQLTypes["OrderDirection"] | undefined,
	internalLink?: GraphQLTypes["LinkableOrderBy"] | undefined
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
	_dummy_field_?: boolean | undefined
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
	_dummy_field_?: boolean | undefined
};
	["LinkUpsertInternalLinkRelationInput"]: {
		update?: GraphQLTypes["LinkableUpdateInput"] | undefined,
	create?: GraphQLTypes["LinkableCreateInput"] | undefined
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
	["Locale"]: {
	__typename: "Locale",
	_meta?: GraphQLTypes["LocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	code: string,
	label?: string | undefined,
	recipes: Array<GraphQLTypes["RecipeLocale"]>,
	paginateRecipes: GraphQLTypes["RecipeLocaleConnection"]
};
	["LocaleMeta"]: {
	__typename: "LocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	code?: GraphQLTypes["FieldMeta"] | undefined,
	label?: GraphQLTypes["FieldMeta"] | undefined,
	recipes?: GraphQLTypes["FieldMeta"] | undefined
};
	["RecipeLocale"]: {
	__typename: "RecipeLocale",
	_meta?: GraphQLTypes["RecipeLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["Recipe"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined
};
	["RecipeLocaleMeta"]: {
	__typename: "RecipeLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	description?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined
};
	["Recipe"]: {
	__typename: "Recipe",
	_meta?: GraphQLTypes["RecipeMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	publishDate?: GraphQLTypes["Date"] | undefined,
	price?: string | undefined,
	locales: Array<GraphQLTypes["RecipeLocale"]>,
	paginateLocales: GraphQLTypes["RecipeLocaleConnection"]
};
	["RecipeMeta"]: {
	__typename: "RecipeMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	publishDate?: GraphQLTypes["FieldMeta"] | undefined,
	price?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined
};
	["Date"]: "scalar" & { name: "Date" };
	["RecipeLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	description?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["RecipeWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["RecipeLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["RecipeLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["RecipeLocaleWhere"] | undefined
};
	["RecipeWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	publishDate?: GraphQLTypes["DateCondition"] | undefined,
	price?: GraphQLTypes["StringCondition"] | undefined,
	locales?: GraphQLTypes["RecipeLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["RecipeWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["RecipeWhere"] | undefined> | undefined,
	not?: GraphQLTypes["RecipeWhere"] | undefined
};
	["DateCondition"]: {
		and?: Array<GraphQLTypes["DateCondition"]> | undefined,
	or?: Array<GraphQLTypes["DateCondition"]> | undefined,
	not?: GraphQLTypes["DateCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["Date"] | undefined,
	notEq?: GraphQLTypes["Date"] | undefined,
	in?: Array<GraphQLTypes["Date"]> | undefined,
	notIn?: Array<GraphQLTypes["Date"]> | undefined,
	lt?: GraphQLTypes["Date"] | undefined,
	lte?: GraphQLTypes["Date"] | undefined,
	gt?: GraphQLTypes["Date"] | undefined,
	gte?: GraphQLTypes["Date"] | undefined
};
	["LocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	code?: GraphQLTypes["StringCondition"] | undefined,
	label?: GraphQLTypes["StringCondition"] | undefined,
	recipes?: GraphQLTypes["RecipeLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["LocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["LocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["LocaleWhere"] | undefined
};
	["RecipeLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	description?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["RecipeOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined
};
	["RecipeOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	publishDate?: GraphQLTypes["OrderDirection"] | undefined,
	price?: GraphQLTypes["OrderDirection"] | undefined
};
	["LocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	code?: GraphQLTypes["OrderDirection"] | undefined,
	label?: GraphQLTypes["OrderDirection"] | undefined
};
	["RecipeLocaleConnection"]: {
	__typename: "RecipeLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["RecipeLocaleEdge"]>
};
	["RecipeLocaleEdge"]: {
	__typename: "RecipeLocaleEdge",
	node: GraphQLTypes["RecipeLocale"]
};
	["LocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	code?: string | undefined,
	recipes?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined
};
	["RecipeLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
};
	["LocaleConnection"]: {
	__typename: "LocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["LocaleEdge"]>
};
	["LocaleEdge"]: {
	__typename: "LocaleEdge",
	node: GraphQLTypes["Locale"]
};
	["LocaleCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	code?: string | undefined,
	label?: string | undefined,
	recipes?: Array<GraphQLTypes["LocaleCreateRecipesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["LocaleCreateRecipesEntityRelationInput"]: {
		connect?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	create?: GraphQLTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined,
	alias?: string | undefined
};
	["RecipeLocaleWithoutLocaleCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleCreateBaseEntityRelationInput"]: {
		connect?: GraphQLTypes["RecipeUniqueWhere"] | undefined,
	create?: GraphQLTypes["RecipeWithoutLocalesCreateInput"] | undefined
};
	["RecipeUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	locales?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined
};
	["RecipeWithoutLocalesCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	order?: number | undefined,
	publishDate?: GraphQLTypes["Date"] | undefined,
	price?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["LocaleUpdateInput"]: {
		code?: string | undefined,
	label?: string | undefined,
	recipes?: Array<GraphQLTypes["LocaleUpdateRecipesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["LocaleUpdateRecipesEntityRelationInput"]: {
		create?: GraphQLTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined,
	update?: GraphQLTypes["LocaleUpdateRecipesRelationInput"] | undefined,
	upsert?: GraphQLTypes["LocaleUpsertRecipesRelationInput"] | undefined,
	connect?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	disconnect?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	delete?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["LocaleUpdateRecipesRelationInput"]: {
		by?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	data?: GraphQLTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined
};
	["RecipeLocaleWithoutLocaleUpdateInput"]: {
		title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpdateBaseEntityRelationInput"]: {
		create?: GraphQLTypes["RecipeWithoutLocalesCreateInput"] | undefined,
	update?: GraphQLTypes["RecipeWithoutLocalesUpdateInput"] | undefined,
	upsert?: GraphQLTypes["RecipeLocaleUpsertBaseRelationInput"] | undefined,
	connect?: GraphQLTypes["RecipeUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["RecipeWithoutLocalesUpdateInput"]: {
		order?: number | undefined,
	publishDate?: GraphQLTypes["Date"] | undefined,
	price?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpsertBaseRelationInput"]: {
		update?: GraphQLTypes["RecipeWithoutLocalesUpdateInput"] | undefined,
	create?: GraphQLTypes["RecipeWithoutLocalesCreateInput"] | undefined
};
	["LocaleUpsertRecipesRelationInput"]: {
		by?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	update?: GraphQLTypes["RecipeLocaleWithoutLocaleUpdateInput"] | undefined,
	create?: GraphQLTypes["RecipeLocaleWithoutLocaleCreateInput"] | undefined
};
	["RecipeConnection"]: {
	__typename: "RecipeConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["RecipeEdge"]>
};
	["RecipeEdge"]: {
	__typename: "RecipeEdge",
	node: GraphQLTypes["Recipe"]
};
	["RecipeCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	order?: number | undefined,
	publishDate?: GraphQLTypes["Date"] | undefined,
	price?: string | undefined,
	locales?: Array<GraphQLTypes["RecipeCreateLocalesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeCreateLocalesEntityRelationInput"]: {
		connect?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	create?: GraphQLTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined,
	alias?: string | undefined
};
	["RecipeLocaleWithoutBaseCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	locale?: GraphQLTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleCreateLocaleEntityRelationInput"]: {
		connect?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	create?: GraphQLTypes["LocaleWithoutRecipesCreateInput"] | undefined
};
	["LocaleWithoutRecipesCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	code?: string | undefined,
	label?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeUpdateInput"]: {
		order?: number | undefined,
	publishDate?: GraphQLTypes["Date"] | undefined,
	price?: string | undefined,
	locales?: Array<GraphQLTypes["RecipeUpdateLocalesEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeUpdateLocalesEntityRelationInput"]: {
		create?: GraphQLTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined,
	update?: GraphQLTypes["RecipeUpdateLocalesRelationInput"] | undefined,
	upsert?: GraphQLTypes["RecipeUpsertLocalesRelationInput"] | undefined,
	connect?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	disconnect?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	delete?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	alias?: string | undefined
};
	["RecipeUpdateLocalesRelationInput"]: {
		by?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	data?: GraphQLTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined
};
	["RecipeLocaleWithoutBaseUpdateInput"]: {
		title?: string | undefined,
	description?: string | undefined,
	locale?: GraphQLTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpdateLocaleEntityRelationInput"]: {
		create?: GraphQLTypes["LocaleWithoutRecipesCreateInput"] | undefined,
	update?: GraphQLTypes["LocaleWithoutRecipesUpdateInput"] | undefined,
	upsert?: GraphQLTypes["RecipeLocaleUpsertLocaleRelationInput"] | undefined,
	connect?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	delete?: boolean | undefined
};
	["LocaleWithoutRecipesUpdateInput"]: {
		code?: string | undefined,
	label?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpsertLocaleRelationInput"]: {
		update?: GraphQLTypes["LocaleWithoutRecipesUpdateInput"] | undefined,
	create?: GraphQLTypes["LocaleWithoutRecipesCreateInput"] | undefined
};
	["RecipeUpsertLocalesRelationInput"]: {
		by?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	update?: GraphQLTypes["RecipeLocaleWithoutBaseUpdateInput"] | undefined,
	create?: GraphQLTypes["RecipeLocaleWithoutBaseCreateInput"] | undefined
};
	["RecipeLocaleCreateInput"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["RecipeLocaleCreateBaseEntityRelationInput"] | undefined,
	locale?: GraphQLTypes["RecipeLocaleCreateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["RecipeLocaleUpdateInput"]: {
		title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["RecipeLocaleUpdateBaseEntityRelationInput"] | undefined,
	locale?: GraphQLTypes["RecipeLocaleUpdateLocaleEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
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
	["ImageUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
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
	["ImageConnection"]: {
	__typename: "ImageConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ImageEdge"]>
};
	["ImageEdge"]: {
	__typename: "ImageEdge",
	node: GraphQLTypes["Image"]
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
	["ImageUpdateInput"]: {
		url?: string | undefined,
	width?: number | undefined,
	height?: number | undefined,
	size?: number | undefined,
	type?: string | undefined,
	alt?: string | undefined,
	_dummy_field_?: boolean | undefined
};
	["QueryTransaction"]: {
	__typename: "QueryTransaction",
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
	getLink?: GraphQLTypes["Link"] | undefined,
	listLink: Array<GraphQLTypes["Link"]>,
	paginateLink: GraphQLTypes["LinkConnection"],
	validateCreateLink: GraphQLTypes["_ValidationResult"],
	validateUpdateLink: GraphQLTypes["_ValidationResult"],
	getLinkable?: GraphQLTypes["Linkable"] | undefined,
	listLinkable: Array<GraphQLTypes["Linkable"]>,
	paginateLinkable: GraphQLTypes["LinkableConnection"],
	validateCreateLinkable: GraphQLTypes["_ValidationResult"],
	validateUpdateLinkable: GraphQLTypes["_ValidationResult"],
	getContentReferenceLinkableItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: GraphQLTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: GraphQLTypes["Locale"] | undefined,
	listLocale: Array<GraphQLTypes["Locale"]>,
	paginateLocale: GraphQLTypes["LocaleConnection"],
	validateCreateLocale: GraphQLTypes["_ValidationResult"],
	validateUpdateLocale: GraphQLTypes["_ValidationResult"],
	getRecipe?: GraphQLTypes["Recipe"] | undefined,
	listRecipe: Array<GraphQLTypes["Recipe"]>,
	paginateRecipe: GraphQLTypes["RecipeConnection"],
	validateCreateRecipe: GraphQLTypes["_ValidationResult"],
	validateUpdateRecipe: GraphQLTypes["_ValidationResult"],
	getRecipeLocale?: GraphQLTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<GraphQLTypes["RecipeLocale"]>,
	paginateRecipeLocale: GraphQLTypes["RecipeLocaleConnection"],
	validateCreateRecipeLocale: GraphQLTypes["_ValidationResult"],
	validateUpdateRecipeLocale: GraphQLTypes["_ValidationResult"],
	getImage?: GraphQLTypes["Image"] | undefined,
	listImage: Array<GraphQLTypes["Image"]>,
	paginateImage: GraphQLTypes["ImageConnection"],
	validateCreateImage: GraphQLTypes["_ValidationResult"],
	validateUpdateImage: GraphQLTypes["_ValidationResult"]
};
	["Info"]: {
	__typename: "Info",
	description?: string | undefined
};
	["Mutation"]: {
	__typename: "Mutation",
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
	createLink: GraphQLTypes["LinkCreateResult"],
	deleteLink: GraphQLTypes["LinkDeleteResult"],
	updateLink: GraphQLTypes["LinkUpdateResult"],
	upsertLink: GraphQLTypes["LinkUpsertResult"],
	createLinkable: GraphQLTypes["LinkableCreateResult"],
	deleteLinkable: GraphQLTypes["LinkableDeleteResult"],
	updateLinkable: GraphQLTypes["LinkableUpdateResult"],
	upsertLinkable: GraphQLTypes["LinkableUpsertResult"],
	createLocale: GraphQLTypes["LocaleCreateResult"],
	deleteLocale: GraphQLTypes["LocaleDeleteResult"],
	updateLocale: GraphQLTypes["LocaleUpdateResult"],
	upsertLocale: GraphQLTypes["LocaleUpsertResult"],
	createRecipe: GraphQLTypes["RecipeCreateResult"],
	deleteRecipe: GraphQLTypes["RecipeDeleteResult"],
	updateRecipe: GraphQLTypes["RecipeUpdateResult"],
	upsertRecipe: GraphQLTypes["RecipeUpsertResult"],
	createRecipeLocale: GraphQLTypes["RecipeLocaleCreateResult"],
	deleteRecipeLocale: GraphQLTypes["RecipeLocaleDeleteResult"],
	updateRecipeLocale: GraphQLTypes["RecipeLocaleUpdateResult"],
	upsertRecipeLocale: GraphQLTypes["RecipeLocaleUpsertResult"],
	createImage: GraphQLTypes["ImageCreateResult"],
	deleteImage: GraphQLTypes["ImageDeleteResult"],
	updateImage: GraphQLTypes["ImageUpdateResult"],
	upsertImage: GraphQLTypes["ImageUpsertResult"],
	transaction: GraphQLTypes["MutationTransaction"],
	query: GraphQLTypes["Query"],
	generateUploadUrl: GraphQLTypes["S3SignedUpload"],
	generateReadUrl: GraphQLTypes["S3SignedRead"]
};
	["ContentCreateResult"]: {
	__typename: "ContentCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Content"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["MutationResult"]: {
	__typename:"ContentCreateResult" | "ContentDeleteResult" | "ContentUpdateResult" | "ContentUpsertResult" | "ContentBlockCreateResult" | "ContentBlockDeleteResult" | "ContentBlockUpdateResult" | "ContentBlockUpsertResult" | "ContentReferenceCreateResult" | "ContentReferenceDeleteResult" | "ContentReferenceUpdateResult" | "ContentReferenceUpsertResult" | "LinkCreateResult" | "LinkDeleteResult" | "LinkUpdateResult" | "LinkUpsertResult" | "LinkableCreateResult" | "LinkableDeleteResult" | "LinkableUpdateResult" | "LinkableUpsertResult" | "LocaleCreateResult" | "LocaleDeleteResult" | "LocaleUpdateResult" | "LocaleUpsertResult" | "RecipeCreateResult" | "RecipeDeleteResult" | "RecipeUpdateResult" | "RecipeUpsertResult" | "RecipeLocaleCreateResult" | "RecipeLocaleDeleteResult" | "RecipeLocaleUpdateResult" | "RecipeLocaleUpsertResult" | "ImageCreateResult" | "ImageDeleteResult" | "ImageUpdateResult" | "ImageUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>
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
	['...on LinkCreateResult']: '__union' & GraphQLTypes["LinkCreateResult"];
	['...on LinkDeleteResult']: '__union' & GraphQLTypes["LinkDeleteResult"];
	['...on LinkUpdateResult']: '__union' & GraphQLTypes["LinkUpdateResult"];
	['...on LinkUpsertResult']: '__union' & GraphQLTypes["LinkUpsertResult"];
	['...on LinkableCreateResult']: '__union' & GraphQLTypes["LinkableCreateResult"];
	['...on LinkableDeleteResult']: '__union' & GraphQLTypes["LinkableDeleteResult"];
	['...on LinkableUpdateResult']: '__union' & GraphQLTypes["LinkableUpdateResult"];
	['...on LinkableUpsertResult']: '__union' & GraphQLTypes["LinkableUpsertResult"];
	['...on LocaleCreateResult']: '__union' & GraphQLTypes["LocaleCreateResult"];
	['...on LocaleDeleteResult']: '__union' & GraphQLTypes["LocaleDeleteResult"];
	['...on LocaleUpdateResult']: '__union' & GraphQLTypes["LocaleUpdateResult"];
	['...on LocaleUpsertResult']: '__union' & GraphQLTypes["LocaleUpsertResult"];
	['...on RecipeCreateResult']: '__union' & GraphQLTypes["RecipeCreateResult"];
	['...on RecipeDeleteResult']: '__union' & GraphQLTypes["RecipeDeleteResult"];
	['...on RecipeUpdateResult']: '__union' & GraphQLTypes["RecipeUpdateResult"];
	['...on RecipeUpsertResult']: '__union' & GraphQLTypes["RecipeUpsertResult"];
	['...on RecipeLocaleCreateResult']: '__union' & GraphQLTypes["RecipeLocaleCreateResult"];
	['...on RecipeLocaleDeleteResult']: '__union' & GraphQLTypes["RecipeLocaleDeleteResult"];
	['...on RecipeLocaleUpdateResult']: '__union' & GraphQLTypes["RecipeLocaleUpdateResult"];
	['...on RecipeLocaleUpsertResult']: '__union' & GraphQLTypes["RecipeLocaleUpsertResult"];
	['...on ImageCreateResult']: '__union' & GraphQLTypes["ImageCreateResult"];
	['...on ImageDeleteResult']: '__union' & GraphQLTypes["ImageDeleteResult"];
	['...on ImageUpdateResult']: '__union' & GraphQLTypes["ImageUpdateResult"];
	['...on ImageUpsertResult']: '__union' & GraphQLTypes["ImageUpsertResult"];
};
	["_MutationError"]: {
	__typename: "_MutationError",
	path: Array<GraphQLTypes["_PathFragment"]>,
	paths: Array<Array<GraphQLTypes["_PathFragment"]>>,
	type: GraphQLTypes["_MutationErrorType"],
	message?: string | undefined
};
	["_MutationErrorType"]: _MutationErrorType;
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
	["LocaleCreateResult"]: {
	__typename: "LocaleCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Locale"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LocaleDeleteResult"]: {
	__typename: "LocaleDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Locale"] | undefined
};
	["LocaleUpdateResult"]: {
	__typename: "LocaleUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Locale"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["LocaleUpsertResult"]: {
	__typename: "LocaleUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Locale"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RecipeCreateResult"]: {
	__typename: "RecipeCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Recipe"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RecipeDeleteResult"]: {
	__typename: "RecipeDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Recipe"] | undefined
};
	["RecipeUpdateResult"]: {
	__typename: "RecipeUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Recipe"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RecipeUpsertResult"]: {
	__typename: "RecipeUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["Recipe"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RecipeLocaleCreateResult"]: {
	__typename: "RecipeLocaleCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["RecipeLocale"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RecipeLocaleDeleteResult"]: {
	__typename: "RecipeLocaleDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["RecipeLocale"] | undefined
};
	["RecipeLocaleUpdateResult"]: {
	__typename: "RecipeLocaleUpdateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["RecipeLocale"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["RecipeLocaleUpsertResult"]: {
	__typename: "RecipeLocaleUpsertResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["RecipeLocale"] | undefined,
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
	["MutationTransaction"]: {
	__typename: "MutationTransaction",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	validation: GraphQLTypes["_ValidationResult"],
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
	createLink: GraphQLTypes["LinkCreateResult"],
	deleteLink: GraphQLTypes["LinkDeleteResult"],
	updateLink: GraphQLTypes["LinkUpdateResult"],
	upsertLink: GraphQLTypes["LinkUpsertResult"],
	createLinkable: GraphQLTypes["LinkableCreateResult"],
	deleteLinkable: GraphQLTypes["LinkableDeleteResult"],
	updateLinkable: GraphQLTypes["LinkableUpdateResult"],
	upsertLinkable: GraphQLTypes["LinkableUpsertResult"],
	createLocale: GraphQLTypes["LocaleCreateResult"],
	deleteLocale: GraphQLTypes["LocaleDeleteResult"],
	updateLocale: GraphQLTypes["LocaleUpdateResult"],
	upsertLocale: GraphQLTypes["LocaleUpsertResult"],
	createRecipe: GraphQLTypes["RecipeCreateResult"],
	deleteRecipe: GraphQLTypes["RecipeDeleteResult"],
	updateRecipe: GraphQLTypes["RecipeUpdateResult"],
	upsertRecipe: GraphQLTypes["RecipeUpsertResult"],
	createRecipeLocale: GraphQLTypes["RecipeLocaleCreateResult"],
	deleteRecipeLocale: GraphQLTypes["RecipeLocaleDeleteResult"],
	updateRecipeLocale: GraphQLTypes["RecipeLocaleUpdateResult"],
	upsertRecipeLocale: GraphQLTypes["RecipeLocaleUpsertResult"],
	createImage: GraphQLTypes["ImageCreateResult"],
	deleteImage: GraphQLTypes["ImageDeleteResult"],
	updateImage: GraphQLTypes["ImageUpdateResult"],
	upsertImage: GraphQLTypes["ImageUpsertResult"],
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
export const enum ContentReferenceType {
	image = "image",
	linkables = "linkables"
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
	["ContentWhere"]: ValueTypes["ContentWhere"];
	["UUIDCondition"]: ValueTypes["UUIDCondition"];
	["ContentBlockWhere"]: ValueTypes["ContentBlockWhere"];
	["IntCondition"]: ValueTypes["IntCondition"];
	["StringCondition"]: ValueTypes["StringCondition"];
	["ContentReferenceWhere"]: ValueTypes["ContentReferenceWhere"];
	["ContentReferenceTypeCondition"]: ValueTypes["ContentReferenceTypeCondition"];
	["ContentReferenceType"]: ValueTypes["ContentReferenceType"];
	["ContentReferenceLinkableItemWhere"]: ValueTypes["ContentReferenceLinkableItemWhere"];
	["LinkableWhere"]: ValueTypes["LinkableWhere"];
	["ContentReferenceLinkableItemOrderBy"]: ValueTypes["ContentReferenceLinkableItemOrderBy"];
	["OrderDirection"]: ValueTypes["OrderDirection"];
	["LinkableOrderBy"]: ValueTypes["LinkableOrderBy"];
	["ContentReferenceOrderBy"]: ValueTypes["ContentReferenceOrderBy"];
	["ContentBlockOrderBy"]: ValueTypes["ContentBlockOrderBy"];
	["ContentOrderBy"]: ValueTypes["ContentOrderBy"];
	["ContentReferenceLinkablesByItemUniqueWhere"]: ValueTypes["ContentReferenceLinkablesByItemUniqueWhere"];
	["LinkableUniqueWhere"]: ValueTypes["LinkableUniqueWhere"];
	["ContentBlockReferencesByLinkablesUniqueWhere"]: ValueTypes["ContentBlockReferencesByLinkablesUniqueWhere"];
	["ContentReferenceLinkableItemUniqueWhere"]: ValueTypes["ContentReferenceLinkableItemUniqueWhere"];
	["ContentBlocksByReferencesUniqueWhere"]: ValueTypes["ContentBlocksByReferencesUniqueWhere"];
	["ContentReferenceUniqueWhere"]: ValueTypes["ContentReferenceUniqueWhere"];
	["ContentUniqueWhere"]: ValueTypes["ContentUniqueWhere"];
	["ContentBlockUniqueWhere"]: ValueTypes["ContentBlockUniqueWhere"];
	["ContentCreateInput"]: ValueTypes["ContentCreateInput"];
	["ContentCreateBlocksEntityRelationInput"]: ValueTypes["ContentCreateBlocksEntityRelationInput"];
	["ContentBlockWithoutContentCreateInput"]: ValueTypes["ContentBlockWithoutContentCreateInput"];
	["ContentBlockCreateReferencesEntityRelationInput"]: ValueTypes["ContentBlockCreateReferencesEntityRelationInput"];
	["ContentReferenceWithoutBlockCreateInput"]: ValueTypes["ContentReferenceWithoutBlockCreateInput"];
	["ContentReferenceCreateLinkablesEntityRelationInput"]: ValueTypes["ContentReferenceCreateLinkablesEntityRelationInput"];
	["ContentUpdateInput"]: ValueTypes["ContentUpdateInput"];
	["ContentUpdateBlocksEntityRelationInput"]: ValueTypes["ContentUpdateBlocksEntityRelationInput"];
	["ContentUpdateBlocksRelationInput"]: ValueTypes["ContentUpdateBlocksRelationInput"];
	["ContentBlockWithoutContentUpdateInput"]: ValueTypes["ContentBlockWithoutContentUpdateInput"];
	["ContentBlockUpdateReferencesEntityRelationInput"]: ValueTypes["ContentBlockUpdateReferencesEntityRelationInput"];
	["ContentBlockUpdateReferencesRelationInput"]: ValueTypes["ContentBlockUpdateReferencesRelationInput"];
	["ContentReferenceWithoutBlockUpdateInput"]: ValueTypes["ContentReferenceWithoutBlockUpdateInput"];
	["ContentReferenceUpdateLinkablesEntityRelationInput"]: ValueTypes["ContentReferenceUpdateLinkablesEntityRelationInput"];
	["ContentBlockUpsertReferencesRelationInput"]: ValueTypes["ContentBlockUpsertReferencesRelationInput"];
	["ContentUpsertBlocksRelationInput"]: ValueTypes["ContentUpsertBlocksRelationInput"];
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
	["LinkType"]: ValueTypes["LinkType"];
	["LinkUniqueWhere"]: ValueTypes["LinkUniqueWhere"];
	["LinkWhere"]: ValueTypes["LinkWhere"];
	["LinkTypeCondition"]: ValueTypes["LinkTypeCondition"];
	["LinkOrderBy"]: ValueTypes["LinkOrderBy"];
	["LinkCreateInput"]: ValueTypes["LinkCreateInput"];
	["LinkCreateInternalLinkEntityRelationInput"]: ValueTypes["LinkCreateInternalLinkEntityRelationInput"];
	["LinkableCreateInput"]: ValueTypes["LinkableCreateInput"];
	["LinkUpdateInput"]: ValueTypes["LinkUpdateInput"];
	["LinkUpdateInternalLinkEntityRelationInput"]: ValueTypes["LinkUpdateInternalLinkEntityRelationInput"];
	["LinkableUpdateInput"]: ValueTypes["LinkableUpdateInput"];
	["LinkUpsertInternalLinkRelationInput"]: ValueTypes["LinkUpsertInternalLinkRelationInput"];
	["Date"]: ValueTypes["Date"];
	["RecipeLocaleWhere"]: ValueTypes["RecipeLocaleWhere"];
	["RecipeWhere"]: ValueTypes["RecipeWhere"];
	["DateCondition"]: ValueTypes["DateCondition"];
	["LocaleWhere"]: ValueTypes["LocaleWhere"];
	["RecipeLocaleOrderBy"]: ValueTypes["RecipeLocaleOrderBy"];
	["RecipeOrderBy"]: ValueTypes["RecipeOrderBy"];
	["LocaleOrderBy"]: ValueTypes["LocaleOrderBy"];
	["LocaleUniqueWhere"]: ValueTypes["LocaleUniqueWhere"];
	["RecipeLocaleUniqueWhere"]: ValueTypes["RecipeLocaleUniqueWhere"];
	["LocaleCreateInput"]: ValueTypes["LocaleCreateInput"];
	["LocaleCreateRecipesEntityRelationInput"]: ValueTypes["LocaleCreateRecipesEntityRelationInput"];
	["RecipeLocaleWithoutLocaleCreateInput"]: ValueTypes["RecipeLocaleWithoutLocaleCreateInput"];
	["RecipeLocaleCreateBaseEntityRelationInput"]: ValueTypes["RecipeLocaleCreateBaseEntityRelationInput"];
	["RecipeUniqueWhere"]: ValueTypes["RecipeUniqueWhere"];
	["RecipeWithoutLocalesCreateInput"]: ValueTypes["RecipeWithoutLocalesCreateInput"];
	["LocaleUpdateInput"]: ValueTypes["LocaleUpdateInput"];
	["LocaleUpdateRecipesEntityRelationInput"]: ValueTypes["LocaleUpdateRecipesEntityRelationInput"];
	["LocaleUpdateRecipesRelationInput"]: ValueTypes["LocaleUpdateRecipesRelationInput"];
	["RecipeLocaleWithoutLocaleUpdateInput"]: ValueTypes["RecipeLocaleWithoutLocaleUpdateInput"];
	["RecipeLocaleUpdateBaseEntityRelationInput"]: ValueTypes["RecipeLocaleUpdateBaseEntityRelationInput"];
	["RecipeWithoutLocalesUpdateInput"]: ValueTypes["RecipeWithoutLocalesUpdateInput"];
	["RecipeLocaleUpsertBaseRelationInput"]: ValueTypes["RecipeLocaleUpsertBaseRelationInput"];
	["LocaleUpsertRecipesRelationInput"]: ValueTypes["LocaleUpsertRecipesRelationInput"];
	["RecipeCreateInput"]: ValueTypes["RecipeCreateInput"];
	["RecipeCreateLocalesEntityRelationInput"]: ValueTypes["RecipeCreateLocalesEntityRelationInput"];
	["RecipeLocaleWithoutBaseCreateInput"]: ValueTypes["RecipeLocaleWithoutBaseCreateInput"];
	["RecipeLocaleCreateLocaleEntityRelationInput"]: ValueTypes["RecipeLocaleCreateLocaleEntityRelationInput"];
	["LocaleWithoutRecipesCreateInput"]: ValueTypes["LocaleWithoutRecipesCreateInput"];
	["RecipeUpdateInput"]: ValueTypes["RecipeUpdateInput"];
	["RecipeUpdateLocalesEntityRelationInput"]: ValueTypes["RecipeUpdateLocalesEntityRelationInput"];
	["RecipeUpdateLocalesRelationInput"]: ValueTypes["RecipeUpdateLocalesRelationInput"];
	["RecipeLocaleWithoutBaseUpdateInput"]: ValueTypes["RecipeLocaleWithoutBaseUpdateInput"];
	["RecipeLocaleUpdateLocaleEntityRelationInput"]: ValueTypes["RecipeLocaleUpdateLocaleEntityRelationInput"];
	["LocaleWithoutRecipesUpdateInput"]: ValueTypes["LocaleWithoutRecipesUpdateInput"];
	["RecipeLocaleUpsertLocaleRelationInput"]: ValueTypes["RecipeLocaleUpsertLocaleRelationInput"];
	["RecipeUpsertLocalesRelationInput"]: ValueTypes["RecipeUpsertLocalesRelationInput"];
	["RecipeLocaleCreateInput"]: ValueTypes["RecipeLocaleCreateInput"];
	["RecipeLocaleUpdateInput"]: ValueTypes["RecipeLocaleUpdateInput"];
	["ImageUniqueWhere"]: ValueTypes["ImageUniqueWhere"];
	["ImageWhere"]: ValueTypes["ImageWhere"];
	["ImageOrderBy"]: ValueTypes["ImageOrderBy"];
	["ImageCreateInput"]: ValueTypes["ImageCreateInput"];
	["ImageUpdateInput"]: ValueTypes["ImageUpdateInput"];
	["_MutationErrorType"]: ValueTypes["_MutationErrorType"];
	["MutationTransactionOptions"]: ValueTypes["MutationTransactionOptions"];
	["Json"]: ValueTypes["Json"];
	["_OnDeleteBehaviour"]: ValueTypes["_OnDeleteBehaviour"];
	["_RelationSide"]: ValueTypes["_RelationSide"];
	["_OrderByDirection"]: ValueTypes["_OrderByDirection"];
}