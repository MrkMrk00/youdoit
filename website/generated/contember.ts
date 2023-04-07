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
		getUser:{
			by:"UserUniqueWhere",
			filter:"UserWhere"
		},
		listUser:{
			filter:"UserWhere",
			orderBy:"UserOrderBy"
		},
		paginateUser:{
			filter:"UserWhere",
			orderBy:"UserOrderBy"
		},
		getStep:{
			by:"StepUniqueWhere",
			filter:"StepWhere"
		},
		listStep:{
			filter:"StepWhere",
			orderBy:"StepOrderBy"
		},
		paginateStep:{
			filter:"StepWhere",
			orderBy:"StepOrderBy"
		},
		getStepLocale:{
			by:"StepLocaleUniqueWhere",
			filter:"StepLocaleWhere"
		},
		listStepLocale:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		paginateStepLocale:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		getPinnedRecipe:{
			by:"PinnedRecipeUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		listPinnedRecipe:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		paginatePinnedRecipe:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		validateCreatePinnedRecipe:{
			data:"PinnedRecipeCreateInput"
		},
		getImplemetationDate:{
			by:"ImplemetationDateUniqueWhere",
			filter:"ImplemetationDateWhere"
		},
		listImplemetationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		paginateImplemetationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		validateCreateImplemetationDate:{
			data:"ImplemetationDateCreateInput"
		},
		getStepGroup:{
			by:"StepGroupUniqueWhere",
			filter:"StepGroupWhere"
		},
		listStepGroup:{
			filter:"StepGroupWhere",
			orderBy:"StepGroupOrderBy"
		},
		paginateStepGroup:{
			filter:"StepGroupWhere",
			orderBy:"StepGroupOrderBy"
		},
		getStepGroupLocale:{
			by:"StepGroupLocaleUniqueWhere",
			filter:"StepGroupLocaleWhere"
		},
		listStepGroupLocale:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		paginateStepGroupLocale:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		getHomePage:{
			by:"HomePageUniqueWhere",
			filter:"HomePageWhere"
		},
		listHomePage:{
			filter:"HomePageWhere",
			orderBy:"HomePageOrderBy"
		},
		paginateHomePage:{
			filter:"HomePageWhere",
			orderBy:"HomePageOrderBy"
		},
		getHomePageLocale:{
			by:"HomePageLocaleUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		listHomePageLocale:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
		},
		paginateHomePageLocale:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
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
		getRecipeList:{
			by:"RecipeListUniqueWhere",
			filter:"RecipeListWhere"
		},
		listRecipeList:{
			filter:"RecipeListWhere",
			orderBy:"RecipeListOrderBy"
		},
		paginateRecipeList:{
			filter:"RecipeListWhere",
			orderBy:"RecipeListOrderBy"
		},
		getRecipeListItem:{
			by:"RecipeListItemUniqueWhere",
			filter:"RecipeListItemWhere"
		},
		listRecipeListItem:{
			filter:"RecipeListItemWhere",
			orderBy:"RecipeListItemOrderBy"
		},
		paginateRecipeListItem:{
			filter:"RecipeListItemWhere",
			orderBy:"RecipeListItemOrderBy"
		},
		getCategory:{
			by:"CategoryUniqueWhere",
			filter:"CategoryWhere"
		},
		listCategory:{
			filter:"CategoryWhere",
			orderBy:"CategoryOrderBy"
		},
		paginateCategory:{
			filter:"CategoryWhere",
			orderBy:"CategoryOrderBy"
		},
		getCategoryLocale:{
			by:"CategoryLocaleUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		listCategoryLocale:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		paginateCategoryLocale:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		getStepGroupItem:{
			by:"StepGroupItemUniqueWhere",
			filter:"StepGroupItemWhere"
		},
		listStepGroupItem:{
			filter:"StepGroupItemWhere",
			orderBy:"StepGroupItemOrderBy"
		},
		paginateStepGroupItem:{
			filter:"StepGroupItemWhere",
			orderBy:"StepGroupItemOrderBy"
		},
		getTip:{
			by:"TipUniqueWhere",
			filter:"TipWhere"
		},
		listTip:{
			filter:"TipWhere",
			orderBy:"TipOrderBy"
		},
		paginateTip:{
			filter:"TipWhere",
			orderBy:"TipOrderBy"
		},
		getTipLocale:{
			by:"TipLocaleUniqueWhere",
			filter:"TipLocaleWhere"
		},
		listTipLocale:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		paginateTipLocale:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		getStepModification:{
			by:"StepModificationUniqueWhere",
			filter:"StepModificationWhere"
		},
		listStepModification:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		},
		paginateStepModification:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		},
		getTipGroup:{
			by:"TipGroupUniqueWhere",
			filter:"TipGroupWhere"
		},
		listTipGroup:{
			filter:"TipGroupWhere",
			orderBy:"TipGroupOrderBy"
		},
		paginateTipGroup:{
			filter:"TipGroupWhere",
			orderBy:"TipGroupOrderBy"
		},
		getTipGroupItem:{
			by:"TipGroupItemUniqueWhere",
			filter:"TipGroupItemWhere"
		},
		listTipGroupItem:{
			filter:"TipGroupItemWhere",
			orderBy:"TipGroupItemOrderBy"
		},
		paginateTipGroupItem:{
			filter:"TipGroupItemWhere",
			orderBy:"TipGroupItemOrderBy"
		},
		getTipGroupLocale:{
			by:"TipGroupLocaleUniqueWhere",
			filter:"TipGroupLocaleWhere"
		},
		listTipGroupLocale:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		paginateTipGroupLocale:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		getPinnedRecipesPage:{
			by:"PinnedRecipesPageUniqueWhere",
			filter:"PinnedRecipesPageWhere"
		},
		listPinnedRecipesPage:{
			filter:"PinnedRecipesPageWhere",
			orderBy:"PinnedRecipesPageOrderBy"
		},
		paginatePinnedRecipesPage:{
			filter:"PinnedRecipesPageWhere",
			orderBy:"PinnedRecipesPageOrderBy"
		},
		getPinnedRecipesPageLocale:{
			by:"PinnedRecipesPageLocaleUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		listPinnedRecipesPageLocale:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		},
		paginatePinnedRecipesPageLocale:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
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
		homePage:"HomePageLocaleWhere",
		category:"CategoryLocaleWhere",
		recipe:"RecipeLocaleWhere",
		pinnedRecipesPage:"PinnedRecipesPageLocaleWhere",
		and:"LinkableWhere",
		or:"LinkableWhere",
		not:"LinkableWhere"
	},
	HomePageLocaleWhere:{
		id:"UUIDCondition",
		base:"HomePageWhere",
		locale:"LocaleWhere",
		link:"LinkableWhere",
		seo:"SeoWhere",
		title:"StringCondition",
		and:"HomePageLocaleWhere",
		or:"HomePageLocaleWhere",
		not:"HomePageLocaleWhere"
	},
	HomePageWhere:{
		id:"UUIDCondition",
		locales:"HomePageLocaleWhere",
		unique:"OneCondition",
		and:"HomePageWhere",
		or:"HomePageWhere",
		not:"HomePageWhere"
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
	One: "enum" as const,
	LocaleWhere:{
		id:"UUIDCondition",
		code:"StringCondition",
		label:"StringCondition",
		recipes:"RecipeLocaleWhere",
		steps:"StepLocaleWhere",
		stepsGroups:"StepGroupLocaleWhere",
		homePage:"HomePageLocaleWhere",
		categories:"CategoryLocaleWhere",
		tips:"TipLocaleWhere",
		tipGroups:"TipGroupLocaleWhere",
		pinnedRecipesPage:"PinnedRecipesPageLocaleWhere",
		and:"LocaleWhere",
		or:"LocaleWhere",
		not:"LocaleWhere"
	},
	RecipeLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		description:"StringCondition",
		base:"RecipeWhere",
		locale:"LocaleWhere",
		tileDescription:"StringCondition",
		link:"LinkableWhere",
		and:"RecipeLocaleWhere",
		or:"RecipeLocaleWhere",
		not:"RecipeLocaleWhere"
	},
	RecipeWhere:{
		id:"UUIDCondition",
		publishDate:"DateCondition",
		price:"StringCondition",
		locales:"RecipeLocaleWhere",
		mainImage:"ImageWhere",
		pinnedRecipes:"PinnedRecipeWhere",
		createdBy:"UserWhere",
		stepsGroups:"StepGroupWhere",
		categories:"CategoryWhere",
		tileImage:"ImageWhere",
		tipGroups:"TipGroupWhere",
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
	Date: `scalar.Date` as const,
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
	PinnedRecipeWhere:{
		id:"UUIDCondition",
		user:"UserWhere",
		derivedBy:"RecipeWhere",
		implementationDate:"ImplemetationDateWhere",
		modification:"StepModificationWhere",
		and:"PinnedRecipeWhere",
		or:"PinnedRecipeWhere",
		not:"PinnedRecipeWhere"
	},
	UserWhere:{
		id:"UUIDCondition",
		firstName:"StringCondition",
		lastName:"StringCondition",
		email:"StringCondition",
		image:"ImageWhere",
		pinnedRecipes:"PinnedRecipeWhere",
		createdRecipes:"RecipeWhere",
		and:"UserWhere",
		or:"UserWhere",
		not:"UserWhere"
	},
	ImplemetationDateWhere:{
		id:"UUIDCondition",
		step:"StepWhere",
		pinnedRecipe:"PinnedRecipeWhere",
		date:"DateTimeCondition",
		and:"ImplemetationDateWhere",
		or:"ImplemetationDateWhere",
		not:"ImplemetationDateWhere"
	},
	StepWhere:{
		id:"UUIDCondition",
		locales:"StepLocaleWhere",
		implementationDate:"ImplemetationDateWhere",
		hasTimer:"BooleanCondition",
		timerCount:"IntCondition",
		and:"StepWhere",
		or:"StepWhere",
		not:"StepWhere"
	},
	StepLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		base:"StepWhere",
		locale:"LocaleWhere",
		modificationDate:"StepModificationWhere",
		and:"StepLocaleWhere",
		or:"StepLocaleWhere",
		not:"StepLocaleWhere"
	},
	StepModificationWhere:{
		id:"UUIDCondition",
		date:"DateTimeCondition",
		pinnedRecipe:"PinnedRecipeWhere",
		step:"StepLocaleWhere",
		and:"StepModificationWhere",
		or:"StepModificationWhere",
		not:"StepModificationWhere"
	},
	DateTimeCondition:{
		and:"DateTimeCondition",
		or:"DateTimeCondition",
		not:"DateTimeCondition",
		eq:"DateTime",
		notEq:"DateTime",
		in:"DateTime",
		notIn:"DateTime",
		lt:"DateTime",
		lte:"DateTime",
		gt:"DateTime",
		gte:"DateTime"
	},
	DateTime: `scalar.DateTime` as const,
	BooleanCondition:{
		and:"BooleanCondition",
		or:"BooleanCondition",
		not:"BooleanCondition"
	},
	StepGroupWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		recipe:"RecipeWhere",
		locales:"StepGroupLocaleWhere",
		items:"StepGroupItemWhere",
		and:"StepGroupWhere",
		or:"StepGroupWhere",
		not:"StepGroupWhere"
	},
	StepGroupLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		buttonTitle:"StringCondition",
		base:"StepGroupWhere",
		locale:"LocaleWhere",
		description:"StringCondition",
		and:"StepGroupLocaleWhere",
		or:"StepGroupLocaleWhere",
		not:"StepGroupLocaleWhere"
	},
	StepGroupItemWhere:{
		id:"UUIDCondition",
		type:"StepGroupItemTypeCondition",
		order:"IntCondition",
		group:"StepGroupWhere",
		step:"StepWhere",
		tip:"TipWhere",
		and:"StepGroupItemWhere",
		or:"StepGroupItemWhere",
		not:"StepGroupItemWhere"
	},
	StepGroupItemTypeCondition:{
		and:"StepGroupItemTypeCondition",
		or:"StepGroupItemTypeCondition",
		not:"StepGroupItemTypeCondition",
		eq:"StepGroupItemType",
		notEq:"StepGroupItemType",
		in:"StepGroupItemType",
		notIn:"StepGroupItemType",
		lt:"StepGroupItemType",
		lte:"StepGroupItemType",
		gt:"StepGroupItemType",
		gte:"StepGroupItemType"
	},
	StepGroupItemType: "enum" as const,
	TipWhere:{
		id:"UUIDCondition",
		locales:"TipLocaleWhere",
		and:"TipWhere",
		or:"TipWhere",
		not:"TipWhere"
	},
	TipLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		base:"TipWhere",
		locale:"LocaleWhere",
		and:"TipLocaleWhere",
		or:"TipLocaleWhere",
		not:"TipLocaleWhere"
	},
	CategoryWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		locales:"CategoryLocaleWhere",
		recipes:"RecipeWhere",
		image:"ImageWhere",
		and:"CategoryWhere",
		or:"CategoryWhere",
		not:"CategoryWhere"
	},
	CategoryLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		base:"CategoryWhere",
		seo:"SeoWhere",
		link:"LinkableWhere",
		locale:"LocaleWhere",
		description:"StringCondition",
		and:"CategoryLocaleWhere",
		or:"CategoryLocaleWhere",
		not:"CategoryLocaleWhere"
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
	TipGroupWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		recipe:"RecipeWhere",
		items:"TipGroupItemWhere",
		locales:"TipGroupLocaleWhere",
		and:"TipGroupWhere",
		or:"TipGroupWhere",
		not:"TipGroupWhere"
	},
	TipGroupItemWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		group:"TipGroupWhere",
		tip:"TipWhere",
		and:"TipGroupItemWhere",
		or:"TipGroupItemWhere",
		not:"TipGroupItemWhere"
	},
	TipGroupLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		description:"StringCondition",
		base:"TipGroupWhere",
		locale:"LocaleWhere",
		and:"TipGroupLocaleWhere",
		or:"TipGroupLocaleWhere",
		not:"TipGroupLocaleWhere"
	},
	PinnedRecipesPageLocaleWhere:{
		id:"UUIDCondition",
		title:"StringCondition",
		link:"LinkableWhere",
		base:"PinnedRecipesPageWhere",
		locale:"LocaleWhere",
		seo:"SeoWhere",
		and:"PinnedRecipesPageLocaleWhere",
		or:"PinnedRecipesPageLocaleWhere",
		not:"PinnedRecipesPageLocaleWhere"
	},
	PinnedRecipesPageWhere:{
		id:"UUIDCondition",
		unique:"OneCondition",
		locales:"PinnedRecipesPageLocaleWhere",
		and:"PinnedRecipesPageWhere",
		or:"PinnedRecipesPageWhere",
		not:"PinnedRecipesPageWhere"
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
	Linkable:{
		homePage:{
			filter:"HomePageLocaleWhere"
		},
		category:{
			filter:"CategoryLocaleWhere"
		},
		recipe:{
			filter:"RecipeLocaleWhere"
		},
		pinnedRecipesPage:{
			filter:"PinnedRecipesPageLocaleWhere"
		}
	},
	HomePageLocale:{
		base:{
			filter:"HomePageWhere"
		},
		locale:{
			filter:"LocaleWhere"
		},
		link:{
			filter:"LinkableWhere"
		},
		seo:{
			filter:"SeoWhere"
		}
	},
	HomePage:{
		locales:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
		},
		localesByLocale:{
			by:"HomePageLocalesByLocaleUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		localesByLink:{
			by:"HomePageLocalesByLinkUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		localesBySeo:{
			by:"HomePageLocalesBySeoUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		paginateLocales:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
		}
	},
	HomePageLocaleOrderBy:{
		id:"OrderDirection",
		base:"HomePageOrderBy",
		locale:"LocaleOrderBy",
		link:"LinkableOrderBy",
		seo:"SeoOrderBy",
		title:"OrderDirection"
	},
	OrderDirection: "enum" as const,
	HomePageOrderBy:{
		id:"OrderDirection",
		unique:"OrderDirection"
	},
	LocaleOrderBy:{
		id:"OrderDirection",
		code:"OrderDirection",
		label:"OrderDirection"
	},
	LinkableOrderBy:{
		id:"OrderDirection",
		url:"OrderDirection",
		homePage:"HomePageLocaleOrderBy",
		category:"CategoryLocaleOrderBy",
		recipe:"RecipeLocaleOrderBy",
		pinnedRecipesPage:"PinnedRecipesPageLocaleOrderBy"
	},
	CategoryLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		base:"CategoryOrderBy",
		seo:"SeoOrderBy",
		link:"LinkableOrderBy",
		locale:"LocaleOrderBy",
		description:"OrderDirection"
	},
	CategoryOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		image:"ImageOrderBy"
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
	RecipeLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		description:"OrderDirection",
		base:"RecipeOrderBy",
		locale:"LocaleOrderBy",
		tileDescription:"OrderDirection",
		link:"LinkableOrderBy"
	},
	RecipeOrderBy:{
		id:"OrderDirection",
		publishDate:"OrderDirection",
		price:"OrderDirection",
		mainImage:"ImageOrderBy",
		createdBy:"UserOrderBy",
		tileImage:"ImageOrderBy"
	},
	UserOrderBy:{
		id:"OrderDirection",
		firstName:"OrderDirection",
		lastName:"OrderDirection",
		email:"OrderDirection",
		image:"ImageOrderBy"
	},
	PinnedRecipesPageLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		link:"LinkableOrderBy",
		base:"PinnedRecipesPageOrderBy",
		locale:"LocaleOrderBy",
		seo:"SeoOrderBy"
	},
	PinnedRecipesPageOrderBy:{
		id:"OrderDirection",
		unique:"OrderDirection"
	},
	HomePageLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	LocaleUniqueWhere:{
		id:"UUID",
		recipes:"RecipeLocaleUniqueWhere",
		steps:"StepLocaleUniqueWhere",
		stepsGroups:"StepGroupLocaleUniqueWhere",
		homePage:"HomePageLocaleUniqueWhere",
		categories:"CategoryLocaleUniqueWhere",
		tips:"TipLocaleUniqueWhere",
		tipGroups:"TipGroupLocaleUniqueWhere",
		pinnedRecipesPage:"PinnedRecipesPageLocaleUniqueWhere"
	},
	RecipeLocaleUniqueWhere:{
		id:"UUID",
		base:"RecipeUniqueWhere",
		locale:"LocaleUniqueWhere",
		link:"LinkableUniqueWhere"
	},
	RecipeUniqueWhere:{
		id:"UUID",
		locales:"RecipeLocaleUniqueWhere",
		pinnedRecipes:"PinnedRecipeUniqueWhere",
		stepsGroups:"StepGroupUniqueWhere",
		tipGroups:"TipGroupUniqueWhere"
	},
	PinnedRecipeUniqueWhere:{
		id:"UUID",
		implementationDate:"ImplemetationDateUniqueWhere",
		modification:"StepModificationUniqueWhere"
	},
	ImplemetationDateUniqueWhere:{
		id:"UUID",
		pinnedRecipe:"PinnedRecipeUniqueWhere",
		step:"StepUniqueWhere"
	},
	StepUniqueWhere:{
		id:"UUID",
		locales:"StepLocaleUniqueWhere",
		implementationDate:"ImplemetationDateUniqueWhere"
	},
	StepLocaleUniqueWhere:{
		id:"UUID",
		base:"StepUniqueWhere",
		locale:"LocaleUniqueWhere",
		modificationDate:"StepModificationUniqueWhere"
	},
	StepModificationUniqueWhere:{
		id:"UUID"
	},
	StepGroupUniqueWhere:{
		id:"UUID",
		locales:"StepGroupLocaleUniqueWhere",
		items:"StepGroupItemUniqueWhere"
	},
	StepGroupLocaleUniqueWhere:{
		id:"UUID",
		base:"StepGroupUniqueWhere",
		locale:"LocaleUniqueWhere"
	},
	StepGroupItemUniqueWhere:{
		id:"UUID",
		step:"StepUniqueWhere",
		tip:"TipUniqueWhere"
	},
	TipUniqueWhere:{
		id:"UUID",
		locales:"TipLocaleUniqueWhere"
	},
	TipLocaleUniqueWhere:{
		id:"UUID",
		base:"TipUniqueWhere",
		locale:"LocaleUniqueWhere"
	},
	TipGroupUniqueWhere:{
		id:"UUID",
		items:"TipGroupItemUniqueWhere",
		locales:"TipGroupLocaleUniqueWhere"
	},
	TipGroupItemUniqueWhere:{
		id:"UUID",
		tip:"TipUniqueWhere"
	},
	TipGroupLocaleUniqueWhere:{
		id:"UUID",
		base:"TipGroupUniqueWhere",
		locale:"LocaleUniqueWhere"
	},
	LinkableUniqueWhere:{
		id:"UUID",
		homePage:"HomePageLocaleUniqueWhere",
		category:"CategoryLocaleUniqueWhere",
		recipe:"RecipeLocaleUniqueWhere",
		pinnedRecipesPage:"PinnedRecipesPageLocaleUniqueWhere"
	},
	HomePageLocaleUniqueWhere:{
		id:"UUID",
		base:"HomePageUniqueWhere",
		locale:"LocaleUniqueWhere",
		link:"LinkableUniqueWhere",
		seo:"SeoUniqueWhere"
	},
	HomePageUniqueWhere:{
		id:"UUID",
		unique:"One",
		locales:"HomePageLocaleUniqueWhere"
	},
	SeoUniqueWhere:{
		id:"UUID",
		ogImage:"ImageUniqueWhere"
	},
	ImageUniqueWhere:{
		id:"UUID"
	},
	CategoryLocaleUniqueWhere:{
		id:"UUID",
		base:"CategoryUniqueWhere",
		locale:"LocaleUniqueWhere",
		seo:"SeoUniqueWhere",
		link:"LinkableUniqueWhere"
	},
	CategoryUniqueWhere:{
		id:"UUID",
		locales:"CategoryLocaleUniqueWhere",
		image:"ImageUniqueWhere"
	},
	PinnedRecipesPageLocaleUniqueWhere:{
		id:"UUID",
		base:"PinnedRecipesPageUniqueWhere",
		locale:"LocaleUniqueWhere",
		link:"LinkableUniqueWhere",
		seo:"SeoUniqueWhere"
	},
	PinnedRecipesPageUniqueWhere:{
		id:"UUID",
		unique:"One",
		locales:"PinnedRecipesPageLocaleUniqueWhere"
	},
	HomePageLocalesByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	HomePageLocalesBySeoUniqueWhere:{
		seo:"SeoUniqueWhere"
	},
	Locale:{
		recipes:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		steps:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		stepsGroups:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		homePage:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
		},
		categories:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		tips:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		tipGroups:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		pinnedRecipesPage:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		},
		recipesByBase:{
			by:"LocaleRecipesByBaseUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		recipesByLink:{
			by:"LocaleRecipesByLinkUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		stepsByBase:{
			by:"LocaleStepsByBaseUniqueWhere",
			filter:"StepLocaleWhere"
		},
		stepsByModificationDate:{
			by:"LocaleStepsByModificationDateUniqueWhere",
			filter:"StepLocaleWhere"
		},
		stepsGroupsByBase:{
			by:"LocaleStepsGroupsByBaseUniqueWhere",
			filter:"StepGroupLocaleWhere"
		},
		homePageByBase:{
			by:"LocaleHomePageByBaseUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		homePageByLink:{
			by:"LocaleHomePageByLinkUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		homePageBySeo:{
			by:"LocaleHomePageBySeoUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		categoriesByBase:{
			by:"LocaleCategoriesByBaseUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		categoriesBySeo:{
			by:"LocaleCategoriesBySeoUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		categoriesByLink:{
			by:"LocaleCategoriesByLinkUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		tipsByBase:{
			by:"LocaleTipsByBaseUniqueWhere",
			filter:"TipLocaleWhere"
		},
		tipGroupsByBase:{
			by:"LocaleTipGroupsByBaseUniqueWhere",
			filter:"TipGroupLocaleWhere"
		},
		pinnedRecipesPageByBase:{
			by:"LocalePinnedRecipesPageByBaseUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		pinnedRecipesPageByLink:{
			by:"LocalePinnedRecipesPageByLinkUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		pinnedRecipesPageBySeo:{
			by:"LocalePinnedRecipesPageBySeoUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		paginateRecipes:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		paginateSteps:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		paginateStepsGroups:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		paginateHomePage:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
		},
		paginateCategories:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		paginateTips:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		paginateTipGroups:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		paginatePinnedRecipesPage:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		}
	},
	RecipeLocale:{
		base:{
			filter:"RecipeWhere"
		},
		locale:{
			filter:"LocaleWhere"
		},
		link:{
			filter:"LinkableWhere"
		}
	},
	Recipe:{
		locales:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		mainImage:{
			filter:"ImageWhere"
		},
		pinnedRecipes:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		createdBy:{
			filter:"UserWhere"
		},
		stepsGroups:{
			filter:"StepGroupWhere",
			orderBy:"StepGroupOrderBy"
		},
		categories:{
			filter:"CategoryWhere",
			orderBy:"CategoryOrderBy"
		},
		tileImage:{
			filter:"ImageWhere"
		},
		tipGroups:{
			filter:"TipGroupWhere",
			orderBy:"TipGroupOrderBy"
		},
		localesByLocale:{
			by:"RecipeLocalesByLocaleUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		localesByLink:{
			by:"RecipeLocalesByLinkUniqueWhere",
			filter:"RecipeLocaleWhere"
		},
		pinnedRecipesByImplementationDate:{
			by:"RecipePinnedRecipesByImplementationDateUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		pinnedRecipesByModification:{
			by:"RecipePinnedRecipesByModificationUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		stepsGroupsByLocales:{
			by:"RecipeStepsGroupsByLocalesUniqueWhere",
			filter:"StepGroupWhere"
		},
		stepsGroupsByItems:{
			by:"RecipeStepsGroupsByItemsUniqueWhere",
			filter:"StepGroupWhere"
		},
		tipGroupsByItems:{
			by:"RecipeTipGroupsByItemsUniqueWhere",
			filter:"TipGroupWhere"
		},
		tipGroupsByLocales:{
			by:"RecipeTipGroupsByLocalesUniqueWhere",
			filter:"TipGroupWhere"
		},
		paginateLocales:{
			filter:"RecipeLocaleWhere",
			orderBy:"RecipeLocaleOrderBy"
		},
		paginatePinnedRecipes:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		paginateStepsGroups:{
			filter:"StepGroupWhere",
			orderBy:"StepGroupOrderBy"
		},
		paginateCategories:{
			filter:"CategoryWhere",
			orderBy:"CategoryOrderBy"
		},
		paginateTipGroups:{
			filter:"TipGroupWhere",
			orderBy:"TipGroupOrderBy"
		}
	},
	PinnedRecipe:{
		user:{
			filter:"UserWhere"
		},
		derivedBy:{
			filter:"RecipeWhere"
		},
		implementationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		modification:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		},
		implementationDateByStep:{
			by:"PinnedRecipeImplementationDateByStepUniqueWhere",
			filter:"ImplemetationDateWhere"
		},
		paginateImplementationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		paginateModification:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		}
	},
	User:{
		image:{
			filter:"ImageWhere"
		},
		pinnedRecipes:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		createdRecipes:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		},
		pinnedRecipesByImplementationDate:{
			by:"UserPinnedRecipesByImplementationDateUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		pinnedRecipesByModification:{
			by:"UserPinnedRecipesByModificationUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		createdRecipesByLocales:{
			by:"UserCreatedRecipesByLocalesUniqueWhere",
			filter:"RecipeWhere"
		},
		createdRecipesByPinnedRecipes:{
			by:"UserCreatedRecipesByPinnedRecipesUniqueWhere",
			filter:"RecipeWhere"
		},
		createdRecipesByStepsGroups:{
			by:"UserCreatedRecipesByStepsGroupsUniqueWhere",
			filter:"RecipeWhere"
		},
		createdRecipesByTipGroups:{
			by:"UserCreatedRecipesByTipGroupsUniqueWhere",
			filter:"RecipeWhere"
		},
		paginatePinnedRecipes:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		paginateCreatedRecipes:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		}
	},
	PinnedRecipeOrderBy:{
		id:"OrderDirection",
		user:"UserOrderBy",
		derivedBy:"RecipeOrderBy"
	},
	UserPinnedRecipesByImplementationDateUniqueWhere:{
		implementationDate:"ImplemetationDateUniqueWhere"
	},
	UserPinnedRecipesByModificationUniqueWhere:{
		modification:"StepModificationUniqueWhere"
	},
	UserCreatedRecipesByLocalesUniqueWhere:{
		locales:"RecipeLocaleUniqueWhere"
	},
	UserCreatedRecipesByPinnedRecipesUniqueWhere:{
		pinnedRecipes:"PinnedRecipeUniqueWhere"
	},
	UserCreatedRecipesByStepsGroupsUniqueWhere:{
		stepsGroups:"StepGroupUniqueWhere"
	},
	UserCreatedRecipesByTipGroupsUniqueWhere:{
		tipGroups:"TipGroupUniqueWhere"
	},
	ImplemetationDate:{
		step:{
			filter:"StepWhere"
		},
		pinnedRecipe:{
			filter:"PinnedRecipeWhere"
		}
	},
	Step:{
		locales:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		implementationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		localesByLocale:{
			by:"StepLocalesByLocaleUniqueWhere",
			filter:"StepLocaleWhere"
		},
		localesByModificationDate:{
			by:"StepLocalesByModificationDateUniqueWhere",
			filter:"StepLocaleWhere"
		},
		implementationDateByPinnedRecipe:{
			by:"StepImplementationDateByPinnedRecipeUniqueWhere",
			filter:"ImplemetationDateWhere"
		},
		paginateLocales:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		paginateImplementationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		}
	},
	StepLocale:{
		base:{
			filter:"StepWhere"
		},
		locale:{
			filter:"LocaleWhere"
		},
		modificationDate:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		},
		paginateModificationDate:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		}
	},
	StepModification:{
		pinnedRecipe:{
			filter:"PinnedRecipeWhere"
		},
		step:{
			filter:"StepLocaleWhere"
		}
	},
	StepModificationOrderBy:{
		id:"OrderDirection",
		date:"OrderDirection",
		pinnedRecipe:"PinnedRecipeOrderBy",
		step:"StepLocaleOrderBy"
	},
	StepLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		base:"StepOrderBy",
		locale:"LocaleOrderBy"
	},
	StepOrderBy:{
		id:"OrderDirection",
		hasTimer:"OrderDirection",
		timerCount:"OrderDirection"
	},
	ImplemetationDateOrderBy:{
		id:"OrderDirection",
		step:"StepOrderBy",
		pinnedRecipe:"PinnedRecipeOrderBy",
		date:"OrderDirection"
	},
	StepLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	StepLocalesByModificationDateUniqueWhere:{
		modificationDate:"StepModificationUniqueWhere"
	},
	StepImplementationDateByPinnedRecipeUniqueWhere:{
		pinnedRecipe:"PinnedRecipeUniqueWhere"
	},
	PinnedRecipeImplementationDateByStepUniqueWhere:{
		step:"StepUniqueWhere"
	},
	StepGroup:{
		recipe:{
			filter:"RecipeWhere"
		},
		locales:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		items:{
			filter:"StepGroupItemWhere",
			orderBy:"StepGroupItemOrderBy"
		},
		localesByLocale:{
			by:"StepGroupLocalesByLocaleUniqueWhere",
			filter:"StepGroupLocaleWhere"
		},
		itemsByStep:{
			by:"StepGroupItemsByStepUniqueWhere",
			filter:"StepGroupItemWhere"
		},
		itemsByTip:{
			by:"StepGroupItemsByTipUniqueWhere",
			filter:"StepGroupItemWhere"
		},
		paginateLocales:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		paginateItems:{
			filter:"StepGroupItemWhere",
			orderBy:"StepGroupItemOrderBy"
		}
	},
	StepGroupLocale:{
		base:{
			filter:"StepGroupWhere"
		},
		locale:{
			filter:"LocaleWhere"
		}
	},
	StepGroupLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		buttonTitle:"OrderDirection",
		base:"StepGroupOrderBy",
		locale:"LocaleOrderBy",
		description:"OrderDirection"
	},
	StepGroupOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		recipe:"RecipeOrderBy"
	},
	StepGroupItem:{
		group:{
			filter:"StepGroupWhere"
		},
		step:{
			filter:"StepWhere"
		},
		tip:{
			filter:"TipWhere"
		}
	},
	Tip:{
		locales:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		localesByLocale:{
			by:"TipLocalesByLocaleUniqueWhere",
			filter:"TipLocaleWhere"
		},
		paginateLocales:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		}
	},
	TipLocale:{
		base:{
			filter:"TipWhere"
		},
		locale:{
			filter:"LocaleWhere"
		}
	},
	TipLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		base:"TipOrderBy",
		locale:"LocaleOrderBy"
	},
	TipOrderBy:{
		id:"OrderDirection"
	},
	TipLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	StepGroupItemOrderBy:{
		id:"OrderDirection",
		type:"OrderDirection",
		order:"OrderDirection",
		group:"StepGroupOrderBy",
		step:"StepOrderBy",
		tip:"TipOrderBy"
	},
	StepGroupLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	StepGroupItemsByStepUniqueWhere:{
		step:"StepUniqueWhere"
	},
	StepGroupItemsByTipUniqueWhere:{
		tip:"TipUniqueWhere"
	},
	Category:{
		locales:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		recipes:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		},
		image:{
			filter:"ImageWhere"
		},
		localesByLocale:{
			by:"CategoryLocalesByLocaleUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		localesBySeo:{
			by:"CategoryLocalesBySeoUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		localesByLink:{
			by:"CategoryLocalesByLinkUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		paginateLocales:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		paginateRecipes:{
			filter:"RecipeWhere",
			orderBy:"RecipeOrderBy"
		}
	},
	CategoryLocale:{
		base:{
			filter:"CategoryWhere"
		},
		seo:{
			filter:"SeoWhere"
		},
		link:{
			filter:"LinkableWhere"
		},
		locale:{
			filter:"LocaleWhere"
		}
	},
	Seo:{
		ogImage:{
			filter:"ImageWhere"
		}
	},
	CategoryLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	CategoryLocalesBySeoUniqueWhere:{
		seo:"SeoUniqueWhere"
	},
	CategoryLocalesByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	TipGroup:{
		recipe:{
			filter:"RecipeWhere"
		},
		items:{
			filter:"TipGroupItemWhere",
			orderBy:"TipGroupItemOrderBy"
		},
		locales:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		itemsByTip:{
			by:"TipGroupItemsByTipUniqueWhere",
			filter:"TipGroupItemWhere"
		},
		localesByLocale:{
			by:"TipGroupLocalesByLocaleUniqueWhere",
			filter:"TipGroupLocaleWhere"
		},
		paginateItems:{
			filter:"TipGroupItemWhere",
			orderBy:"TipGroupItemOrderBy"
		},
		paginateLocales:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		}
	},
	TipGroupItem:{
		group:{
			filter:"TipGroupWhere"
		},
		tip:{
			filter:"TipWhere"
		}
	},
	TipGroupItemOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		group:"TipGroupOrderBy",
		tip:"TipOrderBy"
	},
	TipGroupOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		recipe:"RecipeOrderBy"
	},
	TipGroupLocale:{
		base:{
			filter:"TipGroupWhere"
		},
		locale:{
			filter:"LocaleWhere"
		}
	},
	TipGroupLocaleOrderBy:{
		id:"OrderDirection",
		title:"OrderDirection",
		description:"OrderDirection",
		base:"TipGroupOrderBy",
		locale:"LocaleOrderBy"
	},
	TipGroupItemsByTipUniqueWhere:{
		tip:"TipUniqueWhere"
	},
	TipGroupLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	RecipeLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	RecipeLocalesByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	RecipePinnedRecipesByImplementationDateUniqueWhere:{
		implementationDate:"ImplemetationDateUniqueWhere"
	},
	RecipePinnedRecipesByModificationUniqueWhere:{
		modification:"StepModificationUniqueWhere"
	},
	RecipeStepsGroupsByLocalesUniqueWhere:{
		locales:"StepGroupLocaleUniqueWhere"
	},
	RecipeStepsGroupsByItemsUniqueWhere:{
		items:"StepGroupItemUniqueWhere"
	},
	RecipeTipGroupsByItemsUniqueWhere:{
		items:"TipGroupItemUniqueWhere"
	},
	RecipeTipGroupsByLocalesUniqueWhere:{
		locales:"TipGroupLocaleUniqueWhere"
	},
	PinnedRecipesPageLocale:{
		link:{
			filter:"LinkableWhere"
		},
		base:{
			filter:"PinnedRecipesPageWhere"
		},
		locale:{
			filter:"LocaleWhere"
		},
		seo:{
			filter:"SeoWhere"
		}
	},
	PinnedRecipesPage:{
		locales:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		},
		localesByLocale:{
			by:"PinnedRecipesPageLocalesByLocaleUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		localesByLink:{
			by:"PinnedRecipesPageLocalesByLinkUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		localesBySeo:{
			by:"PinnedRecipesPageLocalesBySeoUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		paginateLocales:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		}
	},
	PinnedRecipesPageLocalesByLocaleUniqueWhere:{
		locale:"LocaleUniqueWhere"
	},
	PinnedRecipesPageLocalesByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	PinnedRecipesPageLocalesBySeoUniqueWhere:{
		seo:"SeoUniqueWhere"
	},
	LocaleRecipesByBaseUniqueWhere:{
		base:"RecipeUniqueWhere"
	},
	LocaleRecipesByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	LocaleStepsByBaseUniqueWhere:{
		base:"StepUniqueWhere"
	},
	LocaleStepsByModificationDateUniqueWhere:{
		modificationDate:"StepModificationUniqueWhere"
	},
	LocaleStepsGroupsByBaseUniqueWhere:{
		base:"StepGroupUniqueWhere"
	},
	LocaleHomePageByBaseUniqueWhere:{
		base:"HomePageUniqueWhere"
	},
	LocaleHomePageByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	LocaleHomePageBySeoUniqueWhere:{
		seo:"SeoUniqueWhere"
	},
	LocaleCategoriesByBaseUniqueWhere:{
		base:"CategoryUniqueWhere"
	},
	LocaleCategoriesBySeoUniqueWhere:{
		seo:"SeoUniqueWhere"
	},
	LocaleCategoriesByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	LocaleTipsByBaseUniqueWhere:{
		base:"TipUniqueWhere"
	},
	LocaleTipGroupsByBaseUniqueWhere:{
		base:"TipGroupUniqueWhere"
	},
	LocalePinnedRecipesPageByBaseUniqueWhere:{
		base:"PinnedRecipesPageUniqueWhere"
	},
	LocalePinnedRecipesPageByLinkUniqueWhere:{
		link:"LinkableUniqueWhere"
	},
	LocalePinnedRecipesPageBySeoUniqueWhere:{
		seo:"SeoUniqueWhere"
	},
	ContentReferenceLinkableItemOrderBy:{
		id:"OrderDirection",
		item:"LinkableOrderBy",
		reference:"ContentReferenceOrderBy"
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
	UserUniqueWhere:{
		id:"UUID",
		pinnedRecipes:"PinnedRecipeUniqueWhere",
		createdRecipes:"RecipeUniqueWhere"
	},
	PinnedRecipeCreateInput:{
		user:"PinnedRecipeCreateUserEntityRelationInput",
		derivedBy:"PinnedRecipeCreateDerivedByEntityRelationInput",
		implementationDate:"PinnedRecipeCreateImplementationDateEntityRelationInput"
	},
	PinnedRecipeCreateUserEntityRelationInput:{
		connect:"UserUniqueWhere"
	},
	PinnedRecipeCreateDerivedByEntityRelationInput:{
		connect:"RecipeUniqueWhere"
	},
	PinnedRecipeCreateImplementationDateEntityRelationInput:{
		connect:"ImplemetationDateUniqueWhere",
		create:"ImplemetationDateWithoutPinnedRecipeCreateInput"
	},
	ImplemetationDateWithoutPinnedRecipeCreateInput:{
		step:"ImplemetationDateCreateStepEntityRelationInput",
		date:"DateTime"
	},
	ImplemetationDateCreateStepEntityRelationInput:{
		connect:"StepUniqueWhere"
	},
	ImplemetationDateCreateInput:{
		step:"ImplemetationDateCreateStepEntityRelationInput",
		pinnedRecipe:"ImplemetationDateCreatePinnedRecipeEntityRelationInput",
		date:"DateTime"
	},
	ImplemetationDateCreatePinnedRecipeEntityRelationInput:{
		connect:"PinnedRecipeUniqueWhere",
		create:"PinnedRecipeWithoutImplementationDateCreateInput"
	},
	PinnedRecipeWithoutImplementationDateCreateInput:{
		user:"PinnedRecipeCreateUserEntityRelationInput",
		derivedBy:"PinnedRecipeCreateDerivedByEntityRelationInput"
	},
	RecipeList:{
		items:{
			filter:"RecipeListItemWhere",
			orderBy:"RecipeListItemOrderBy"
		},
		paginateItems:{
			filter:"RecipeListItemWhere",
			orderBy:"RecipeListItemOrderBy"
		}
	},
	RecipeListItem:{
		list:{
			filter:"RecipeListWhere"
		},
		recipe:{
			filter:"RecipeWhere"
		}
	},
	RecipeListWhere:{
		id:"UUIDCondition",
		items:"RecipeListItemWhere",
		and:"RecipeListWhere",
		or:"RecipeListWhere",
		not:"RecipeListWhere"
	},
	RecipeListItemWhere:{
		id:"UUIDCondition",
		order:"IntCondition",
		list:"RecipeListWhere",
		recipe:"RecipeWhere",
		and:"RecipeListItemWhere",
		or:"RecipeListItemWhere",
		not:"RecipeListItemWhere"
	},
	RecipeListItemOrderBy:{
		id:"OrderDirection",
		order:"OrderDirection",
		list:"RecipeListOrderBy",
		recipe:"RecipeOrderBy"
	},
	RecipeListOrderBy:{
		id:"OrderDirection"
	},
	RecipeListUniqueWhere:{
		id:"UUID",
		items:"RecipeListItemUniqueWhere"
	},
	RecipeListItemUniqueWhere:{
		id:"UUID"
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
		getUser:{
			by:"UserUniqueWhere",
			filter:"UserWhere"
		},
		listUser:{
			filter:"UserWhere",
			orderBy:"UserOrderBy"
		},
		paginateUser:{
			filter:"UserWhere",
			orderBy:"UserOrderBy"
		},
		getStep:{
			by:"StepUniqueWhere",
			filter:"StepWhere"
		},
		listStep:{
			filter:"StepWhere",
			orderBy:"StepOrderBy"
		},
		paginateStep:{
			filter:"StepWhere",
			orderBy:"StepOrderBy"
		},
		getStepLocale:{
			by:"StepLocaleUniqueWhere",
			filter:"StepLocaleWhere"
		},
		listStepLocale:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		paginateStepLocale:{
			filter:"StepLocaleWhere",
			orderBy:"StepLocaleOrderBy"
		},
		getPinnedRecipe:{
			by:"PinnedRecipeUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		listPinnedRecipe:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		paginatePinnedRecipe:{
			filter:"PinnedRecipeWhere",
			orderBy:"PinnedRecipeOrderBy"
		},
		validateCreatePinnedRecipe:{
			data:"PinnedRecipeCreateInput"
		},
		getImplemetationDate:{
			by:"ImplemetationDateUniqueWhere",
			filter:"ImplemetationDateWhere"
		},
		listImplemetationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		paginateImplemetationDate:{
			filter:"ImplemetationDateWhere",
			orderBy:"ImplemetationDateOrderBy"
		},
		validateCreateImplemetationDate:{
			data:"ImplemetationDateCreateInput"
		},
		getStepGroup:{
			by:"StepGroupUniqueWhere",
			filter:"StepGroupWhere"
		},
		listStepGroup:{
			filter:"StepGroupWhere",
			orderBy:"StepGroupOrderBy"
		},
		paginateStepGroup:{
			filter:"StepGroupWhere",
			orderBy:"StepGroupOrderBy"
		},
		getStepGroupLocale:{
			by:"StepGroupLocaleUniqueWhere",
			filter:"StepGroupLocaleWhere"
		},
		listStepGroupLocale:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		paginateStepGroupLocale:{
			filter:"StepGroupLocaleWhere",
			orderBy:"StepGroupLocaleOrderBy"
		},
		getHomePage:{
			by:"HomePageUniqueWhere",
			filter:"HomePageWhere"
		},
		listHomePage:{
			filter:"HomePageWhere",
			orderBy:"HomePageOrderBy"
		},
		paginateHomePage:{
			filter:"HomePageWhere",
			orderBy:"HomePageOrderBy"
		},
		getHomePageLocale:{
			by:"HomePageLocaleUniqueWhere",
			filter:"HomePageLocaleWhere"
		},
		listHomePageLocale:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
		},
		paginateHomePageLocale:{
			filter:"HomePageLocaleWhere",
			orderBy:"HomePageLocaleOrderBy"
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
		getRecipeList:{
			by:"RecipeListUniqueWhere",
			filter:"RecipeListWhere"
		},
		listRecipeList:{
			filter:"RecipeListWhere",
			orderBy:"RecipeListOrderBy"
		},
		paginateRecipeList:{
			filter:"RecipeListWhere",
			orderBy:"RecipeListOrderBy"
		},
		getRecipeListItem:{
			by:"RecipeListItemUniqueWhere",
			filter:"RecipeListItemWhere"
		},
		listRecipeListItem:{
			filter:"RecipeListItemWhere",
			orderBy:"RecipeListItemOrderBy"
		},
		paginateRecipeListItem:{
			filter:"RecipeListItemWhere",
			orderBy:"RecipeListItemOrderBy"
		},
		getCategory:{
			by:"CategoryUniqueWhere",
			filter:"CategoryWhere"
		},
		listCategory:{
			filter:"CategoryWhere",
			orderBy:"CategoryOrderBy"
		},
		paginateCategory:{
			filter:"CategoryWhere",
			orderBy:"CategoryOrderBy"
		},
		getCategoryLocale:{
			by:"CategoryLocaleUniqueWhere",
			filter:"CategoryLocaleWhere"
		},
		listCategoryLocale:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		paginateCategoryLocale:{
			filter:"CategoryLocaleWhere",
			orderBy:"CategoryLocaleOrderBy"
		},
		getStepGroupItem:{
			by:"StepGroupItemUniqueWhere",
			filter:"StepGroupItemWhere"
		},
		listStepGroupItem:{
			filter:"StepGroupItemWhere",
			orderBy:"StepGroupItemOrderBy"
		},
		paginateStepGroupItem:{
			filter:"StepGroupItemWhere",
			orderBy:"StepGroupItemOrderBy"
		},
		getTip:{
			by:"TipUniqueWhere",
			filter:"TipWhere"
		},
		listTip:{
			filter:"TipWhere",
			orderBy:"TipOrderBy"
		},
		paginateTip:{
			filter:"TipWhere",
			orderBy:"TipOrderBy"
		},
		getTipLocale:{
			by:"TipLocaleUniqueWhere",
			filter:"TipLocaleWhere"
		},
		listTipLocale:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		paginateTipLocale:{
			filter:"TipLocaleWhere",
			orderBy:"TipLocaleOrderBy"
		},
		getStepModification:{
			by:"StepModificationUniqueWhere",
			filter:"StepModificationWhere"
		},
		listStepModification:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		},
		paginateStepModification:{
			filter:"StepModificationWhere",
			orderBy:"StepModificationOrderBy"
		},
		getTipGroup:{
			by:"TipGroupUniqueWhere",
			filter:"TipGroupWhere"
		},
		listTipGroup:{
			filter:"TipGroupWhere",
			orderBy:"TipGroupOrderBy"
		},
		paginateTipGroup:{
			filter:"TipGroupWhere",
			orderBy:"TipGroupOrderBy"
		},
		getTipGroupItem:{
			by:"TipGroupItemUniqueWhere",
			filter:"TipGroupItemWhere"
		},
		listTipGroupItem:{
			filter:"TipGroupItemWhere",
			orderBy:"TipGroupItemOrderBy"
		},
		paginateTipGroupItem:{
			filter:"TipGroupItemWhere",
			orderBy:"TipGroupItemOrderBy"
		},
		getTipGroupLocale:{
			by:"TipGroupLocaleUniqueWhere",
			filter:"TipGroupLocaleWhere"
		},
		listTipGroupLocale:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		paginateTipGroupLocale:{
			filter:"TipGroupLocaleWhere",
			orderBy:"TipGroupLocaleOrderBy"
		},
		getPinnedRecipesPage:{
			by:"PinnedRecipesPageUniqueWhere",
			filter:"PinnedRecipesPageWhere"
		},
		listPinnedRecipesPage:{
			filter:"PinnedRecipesPageWhere",
			orderBy:"PinnedRecipesPageOrderBy"
		},
		paginatePinnedRecipesPage:{
			filter:"PinnedRecipesPageWhere",
			orderBy:"PinnedRecipesPageOrderBy"
		},
		getPinnedRecipesPageLocale:{
			by:"PinnedRecipesPageLocaleUniqueWhere",
			filter:"PinnedRecipesPageLocaleWhere"
		},
		listPinnedRecipesPageLocale:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		},
		paginatePinnedRecipesPageLocale:{
			filter:"PinnedRecipesPageLocaleWhere",
			orderBy:"PinnedRecipesPageLocaleOrderBy"
		}
	},
	Mutation:{
		createPinnedRecipe:{
			data:"PinnedRecipeCreateInput"
		},
		deletePinnedRecipe:{
			by:"PinnedRecipeUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		createImplemetationDate:{
			data:"ImplemetationDateCreateInput"
		},
		deleteImplemetationDate:{
			by:"ImplemetationDateUniqueWhere",
			filter:"ImplemetationDateWhere"
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
		createPinnedRecipe:{
			data:"PinnedRecipeCreateInput"
		},
		deletePinnedRecipe:{
			by:"PinnedRecipeUniqueWhere",
			filter:"PinnedRecipeWhere"
		},
		createImplemetationDate:{
			data:"ImplemetationDateCreateInput"
		},
		deleteImplemetationDate:{
			by:"ImplemetationDateUniqueWhere",
			filter:"ImplemetationDateWhere"
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
		getContentBlock:"ContentBlock",
		listContentBlock:"ContentBlock",
		paginateContentBlock:"ContentBlockConnection",
		getContentReference:"ContentReference",
		listContentReference:"ContentReference",
		paginateContentReference:"ContentReferenceConnection",
		getLink:"Link",
		listLink:"Link",
		paginateLink:"LinkConnection",
		getLinkable:"Linkable",
		listLinkable:"Linkable",
		paginateLinkable:"LinkableConnection",
		getContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		listContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		paginateContentReferenceLinkableItem:"ContentReferenceLinkableItemConnection",
		getLocale:"Locale",
		listLocale:"Locale",
		paginateLocale:"LocaleConnection",
		getRecipe:"Recipe",
		listRecipe:"Recipe",
		paginateRecipe:"RecipeConnection",
		getRecipeLocale:"RecipeLocale",
		listRecipeLocale:"RecipeLocale",
		paginateRecipeLocale:"RecipeLocaleConnection",
		getImage:"Image",
		listImage:"Image",
		paginateImage:"ImageConnection",
		getUser:"User",
		listUser:"User",
		paginateUser:"UserConnection",
		getStep:"Step",
		listStep:"Step",
		paginateStep:"StepConnection",
		getStepLocale:"StepLocale",
		listStepLocale:"StepLocale",
		paginateStepLocale:"StepLocaleConnection",
		getPinnedRecipe:"PinnedRecipe",
		listPinnedRecipe:"PinnedRecipe",
		paginatePinnedRecipe:"PinnedRecipeConnection",
		validateCreatePinnedRecipe:"_ValidationResult",
		getImplemetationDate:"ImplemetationDate",
		listImplemetationDate:"ImplemetationDate",
		paginateImplemetationDate:"ImplemetationDateConnection",
		validateCreateImplemetationDate:"_ValidationResult",
		getStepGroup:"StepGroup",
		listStepGroup:"StepGroup",
		paginateStepGroup:"StepGroupConnection",
		getStepGroupLocale:"StepGroupLocale",
		listStepGroupLocale:"StepGroupLocale",
		paginateStepGroupLocale:"StepGroupLocaleConnection",
		getHomePage:"HomePage",
		listHomePage:"HomePage",
		paginateHomePage:"HomePageConnection",
		getHomePageLocale:"HomePageLocale",
		listHomePageLocale:"HomePageLocale",
		paginateHomePageLocale:"HomePageLocaleConnection",
		getSeo:"Seo",
		listSeo:"Seo",
		paginateSeo:"SeoConnection",
		getRecipeList:"RecipeList",
		listRecipeList:"RecipeList",
		paginateRecipeList:"RecipeListConnection",
		getRecipeListItem:"RecipeListItem",
		listRecipeListItem:"RecipeListItem",
		paginateRecipeListItem:"RecipeListItemConnection",
		getCategory:"Category",
		listCategory:"Category",
		paginateCategory:"CategoryConnection",
		getCategoryLocale:"CategoryLocale",
		listCategoryLocale:"CategoryLocale",
		paginateCategoryLocale:"CategoryLocaleConnection",
		getStepGroupItem:"StepGroupItem",
		listStepGroupItem:"StepGroupItem",
		paginateStepGroupItem:"StepGroupItemConnection",
		getTip:"Tip",
		listTip:"Tip",
		paginateTip:"TipConnection",
		getTipLocale:"TipLocale",
		listTipLocale:"TipLocale",
		paginateTipLocale:"TipLocaleConnection",
		getStepModification:"StepModification",
		listStepModification:"StepModification",
		paginateStepModification:"StepModificationConnection",
		getTipGroup:"TipGroup",
		listTipGroup:"TipGroup",
		paginateTipGroup:"TipGroupConnection",
		getTipGroupItem:"TipGroupItem",
		listTipGroupItem:"TipGroupItem",
		paginateTipGroupItem:"TipGroupItemConnection",
		getTipGroupLocale:"TipGroupLocale",
		listTipGroupLocale:"TipGroupLocale",
		paginateTipGroupLocale:"TipGroupLocaleConnection",
		getPinnedRecipesPage:"PinnedRecipesPage",
		listPinnedRecipesPage:"PinnedRecipesPage",
		paginatePinnedRecipesPage:"PinnedRecipesPageConnection",
		getPinnedRecipesPageLocale:"PinnedRecipesPageLocale",
		listPinnedRecipesPageLocale:"PinnedRecipesPageLocale",
		paginatePinnedRecipesPageLocale:"PinnedRecipesPageLocaleConnection",
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
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
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
		url:"String",
		homePage:"HomePageLocale",
		category:"CategoryLocale",
		recipe:"RecipeLocale",
		pinnedRecipesPage:"PinnedRecipesPageLocale"
	},
	LinkableMeta:{
		id:"FieldMeta",
		url:"FieldMeta",
		homePage:"FieldMeta",
		category:"FieldMeta",
		recipe:"FieldMeta",
		pinnedRecipesPage:"FieldMeta"
	},
	HomePageLocale:{
		_meta:"HomePageLocaleMeta",
		id:"UUID",
		base:"HomePage",
		locale:"Locale",
		link:"Linkable",
		seo:"Seo",
		title:"String"
	},
	HomePageLocaleMeta:{
		id:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta",
		link:"FieldMeta",
		seo:"FieldMeta",
		title:"FieldMeta"
	},
	HomePage:{
		_meta:"HomePageMeta",
		id:"UUID",
		locales:"HomePageLocale",
		unique:"One",
		localesByLocale:"HomePageLocale",
		localesByLink:"HomePageLocale",
		localesBySeo:"HomePageLocale",
		paginateLocales:"HomePageLocaleConnection"
	},
	HomePageMeta:{
		id:"FieldMeta",
		locales:"FieldMeta",
		unique:"FieldMeta"
	},
	HomePageLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"HomePageLocaleEdge"
	},
	PageInfo:{
		totalCount:"Int"
	},
	HomePageLocaleEdge:{
		node:"HomePageLocale"
	},
	Locale:{
		_meta:"LocaleMeta",
		id:"UUID",
		code:"String",
		label:"String",
		recipes:"RecipeLocale",
		steps:"StepLocale",
		stepsGroups:"StepGroupLocale",
		homePage:"HomePageLocale",
		categories:"CategoryLocale",
		tips:"TipLocale",
		tipGroups:"TipGroupLocale",
		pinnedRecipesPage:"PinnedRecipesPageLocale",
		recipesByBase:"RecipeLocale",
		recipesByLink:"RecipeLocale",
		stepsByBase:"StepLocale",
		stepsByModificationDate:"StepLocale",
		stepsGroupsByBase:"StepGroupLocale",
		homePageByBase:"HomePageLocale",
		homePageByLink:"HomePageLocale",
		homePageBySeo:"HomePageLocale",
		categoriesByBase:"CategoryLocale",
		categoriesBySeo:"CategoryLocale",
		categoriesByLink:"CategoryLocale",
		tipsByBase:"TipLocale",
		tipGroupsByBase:"TipGroupLocale",
		pinnedRecipesPageByBase:"PinnedRecipesPageLocale",
		pinnedRecipesPageByLink:"PinnedRecipesPageLocale",
		pinnedRecipesPageBySeo:"PinnedRecipesPageLocale",
		paginateRecipes:"RecipeLocaleConnection",
		paginateSteps:"StepLocaleConnection",
		paginateStepsGroups:"StepGroupLocaleConnection",
		paginateHomePage:"HomePageLocaleConnection",
		paginateCategories:"CategoryLocaleConnection",
		paginateTips:"TipLocaleConnection",
		paginateTipGroups:"TipGroupLocaleConnection",
		paginatePinnedRecipesPage:"PinnedRecipesPageLocaleConnection"
	},
	LocaleMeta:{
		id:"FieldMeta",
		code:"FieldMeta",
		label:"FieldMeta",
		recipes:"FieldMeta",
		steps:"FieldMeta",
		stepsGroups:"FieldMeta",
		homePage:"FieldMeta",
		categories:"FieldMeta",
		tips:"FieldMeta",
		tipGroups:"FieldMeta",
		pinnedRecipesPage:"FieldMeta"
	},
	RecipeLocale:{
		_meta:"RecipeLocaleMeta",
		id:"UUID",
		title:"String",
		description:"String",
		base:"Recipe",
		locale:"Locale",
		tileDescription:"String",
		link:"Linkable"
	},
	RecipeLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		description:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta",
		tileDescription:"FieldMeta",
		link:"FieldMeta"
	},
	Recipe:{
		_meta:"RecipeMeta",
		id:"UUID",
		publishDate:"Date",
		price:"String",
		locales:"RecipeLocale",
		mainImage:"Image",
		pinnedRecipes:"PinnedRecipe",
		createdBy:"User",
		stepsGroups:"StepGroup",
		categories:"Category",
		tileImage:"Image",
		tipGroups:"TipGroup",
		localesByLocale:"RecipeLocale",
		localesByLink:"RecipeLocale",
		pinnedRecipesByImplementationDate:"PinnedRecipe",
		pinnedRecipesByModification:"PinnedRecipe",
		stepsGroupsByLocales:"StepGroup",
		stepsGroupsByItems:"StepGroup",
		tipGroupsByItems:"TipGroup",
		tipGroupsByLocales:"TipGroup",
		paginateLocales:"RecipeLocaleConnection",
		paginatePinnedRecipes:"PinnedRecipeConnection",
		paginateStepsGroups:"StepGroupConnection",
		paginateCategories:"CategoryConnection",
		paginateTipGroups:"TipGroupConnection"
	},
	RecipeMeta:{
		id:"FieldMeta",
		publishDate:"FieldMeta",
		price:"FieldMeta",
		locales:"FieldMeta",
		mainImage:"FieldMeta",
		pinnedRecipes:"FieldMeta",
		createdBy:"FieldMeta",
		stepsGroups:"FieldMeta",
		categories:"FieldMeta",
		tileImage:"FieldMeta",
		tipGroups:"FieldMeta"
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
	PinnedRecipe:{
		_meta:"PinnedRecipeMeta",
		id:"UUID",
		user:"User",
		derivedBy:"Recipe",
		implementationDate:"ImplemetationDate",
		modification:"StepModification",
		implementationDateByStep:"ImplemetationDate",
		paginateImplementationDate:"ImplemetationDateConnection",
		paginateModification:"StepModificationConnection"
	},
	PinnedRecipeMeta:{
		id:"FieldMeta",
		user:"FieldMeta",
		derivedBy:"FieldMeta",
		implementationDate:"FieldMeta",
		modification:"FieldMeta"
	},
	User:{
		_meta:"UserMeta",
		id:"UUID",
		firstName:"String",
		lastName:"String",
		email:"String",
		image:"Image",
		pinnedRecipes:"PinnedRecipe",
		createdRecipes:"Recipe",
		pinnedRecipesByImplementationDate:"PinnedRecipe",
		pinnedRecipesByModification:"PinnedRecipe",
		createdRecipesByLocales:"Recipe",
		createdRecipesByPinnedRecipes:"Recipe",
		createdRecipesByStepsGroups:"Recipe",
		createdRecipesByTipGroups:"Recipe",
		paginatePinnedRecipes:"PinnedRecipeConnection",
		paginateCreatedRecipes:"RecipeConnection"
	},
	UserMeta:{
		id:"FieldMeta",
		firstName:"FieldMeta",
		lastName:"FieldMeta",
		email:"FieldMeta",
		image:"FieldMeta",
		pinnedRecipes:"FieldMeta",
		createdRecipes:"FieldMeta"
	},
	PinnedRecipeConnection:{
		pageInfo:"PageInfo",
		edges:"PinnedRecipeEdge"
	},
	PinnedRecipeEdge:{
		node:"PinnedRecipe"
	},
	RecipeConnection:{
		pageInfo:"PageInfo",
		edges:"RecipeEdge"
	},
	RecipeEdge:{
		node:"Recipe"
	},
	ImplemetationDate:{
		_meta:"ImplemetationDateMeta",
		id:"UUID",
		step:"Step",
		pinnedRecipe:"PinnedRecipe",
		date:"DateTime"
	},
	ImplemetationDateMeta:{
		id:"FieldMeta",
		step:"FieldMeta",
		pinnedRecipe:"FieldMeta",
		date:"FieldMeta"
	},
	Step:{
		_meta:"StepMeta",
		id:"UUID",
		locales:"StepLocale",
		implementationDate:"ImplemetationDate",
		hasTimer:"Boolean",
		timerCount:"Int",
		localesByLocale:"StepLocale",
		localesByModificationDate:"StepLocale",
		implementationDateByPinnedRecipe:"ImplemetationDate",
		paginateLocales:"StepLocaleConnection",
		paginateImplementationDate:"ImplemetationDateConnection"
	},
	StepMeta:{
		id:"FieldMeta",
		locales:"FieldMeta",
		implementationDate:"FieldMeta",
		hasTimer:"FieldMeta",
		timerCount:"FieldMeta"
	},
	StepLocale:{
		_meta:"StepLocaleMeta",
		id:"UUID",
		title:"String",
		base:"Step",
		locale:"Locale",
		modificationDate:"StepModification",
		paginateModificationDate:"StepModificationConnection"
	},
	StepLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta",
		modificationDate:"FieldMeta"
	},
	StepModification:{
		_meta:"StepModificationMeta",
		id:"UUID",
		date:"DateTime",
		pinnedRecipe:"PinnedRecipe",
		step:"StepLocale"
	},
	StepModificationMeta:{
		id:"FieldMeta",
		date:"FieldMeta",
		pinnedRecipe:"FieldMeta",
		step:"FieldMeta"
	},
	StepModificationConnection:{
		pageInfo:"PageInfo",
		edges:"StepModificationEdge"
	},
	StepModificationEdge:{
		node:"StepModification"
	},
	StepLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"StepLocaleEdge"
	},
	StepLocaleEdge:{
		node:"StepLocale"
	},
	ImplemetationDateConnection:{
		pageInfo:"PageInfo",
		edges:"ImplemetationDateEdge"
	},
	ImplemetationDateEdge:{
		node:"ImplemetationDate"
	},
	StepGroup:{
		_meta:"StepGroupMeta",
		id:"UUID",
		order:"Int",
		recipe:"Recipe",
		locales:"StepGroupLocale",
		items:"StepGroupItem",
		localesByLocale:"StepGroupLocale",
		itemsByStep:"StepGroupItem",
		itemsByTip:"StepGroupItem",
		paginateLocales:"StepGroupLocaleConnection",
		paginateItems:"StepGroupItemConnection"
	},
	StepGroupMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		recipe:"FieldMeta",
		locales:"FieldMeta",
		items:"FieldMeta"
	},
	StepGroupLocale:{
		_meta:"StepGroupLocaleMeta",
		id:"UUID",
		title:"String",
		buttonTitle:"String",
		base:"StepGroup",
		locale:"Locale",
		description:"String"
	},
	StepGroupLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		buttonTitle:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta",
		description:"FieldMeta"
	},
	StepGroupItem:{
		_meta:"StepGroupItemMeta",
		id:"UUID",
		type:"StepGroupItemType",
		order:"Int",
		group:"StepGroup",
		step:"Step",
		tip:"Tip"
	},
	StepGroupItemMeta:{
		id:"FieldMeta",
		type:"FieldMeta",
		order:"FieldMeta",
		group:"FieldMeta",
		step:"FieldMeta",
		tip:"FieldMeta"
	},
	Tip:{
		_meta:"TipMeta",
		id:"UUID",
		locales:"TipLocale",
		localesByLocale:"TipLocale",
		paginateLocales:"TipLocaleConnection"
	},
	TipMeta:{
		id:"FieldMeta",
		locales:"FieldMeta"
	},
	TipLocale:{
		_meta:"TipLocaleMeta",
		id:"UUID",
		title:"String",
		base:"Tip",
		locale:"Locale"
	},
	TipLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta"
	},
	TipLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"TipLocaleEdge"
	},
	TipLocaleEdge:{
		node:"TipLocale"
	},
	StepGroupLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"StepGroupLocaleEdge"
	},
	StepGroupLocaleEdge:{
		node:"StepGroupLocale"
	},
	StepGroupItemConnection:{
		pageInfo:"PageInfo",
		edges:"StepGroupItemEdge"
	},
	StepGroupItemEdge:{
		node:"StepGroupItem"
	},
	Category:{
		_meta:"CategoryMeta",
		id:"UUID",
		order:"Int",
		locales:"CategoryLocale",
		recipes:"Recipe",
		image:"Image",
		localesByLocale:"CategoryLocale",
		localesBySeo:"CategoryLocale",
		localesByLink:"CategoryLocale",
		paginateLocales:"CategoryLocaleConnection",
		paginateRecipes:"RecipeConnection"
	},
	CategoryMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		locales:"FieldMeta",
		recipes:"FieldMeta",
		image:"FieldMeta"
	},
	CategoryLocale:{
		_meta:"CategoryLocaleMeta",
		id:"UUID",
		title:"String",
		base:"Category",
		seo:"Seo",
		link:"Linkable",
		locale:"Locale",
		description:"String"
	},
	CategoryLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		base:"FieldMeta",
		seo:"FieldMeta",
		link:"FieldMeta",
		locale:"FieldMeta",
		description:"FieldMeta"
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
	CategoryLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"CategoryLocaleEdge"
	},
	CategoryLocaleEdge:{
		node:"CategoryLocale"
	},
	TipGroup:{
		_meta:"TipGroupMeta",
		id:"UUID",
		order:"Int",
		recipe:"Recipe",
		items:"TipGroupItem",
		locales:"TipGroupLocale",
		itemsByTip:"TipGroupItem",
		localesByLocale:"TipGroupLocale",
		paginateItems:"TipGroupItemConnection",
		paginateLocales:"TipGroupLocaleConnection"
	},
	TipGroupMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		recipe:"FieldMeta",
		items:"FieldMeta",
		locales:"FieldMeta"
	},
	TipGroupItem:{
		_meta:"TipGroupItemMeta",
		id:"UUID",
		order:"Int",
		group:"TipGroup",
		tip:"Tip"
	},
	TipGroupItemMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		group:"FieldMeta",
		tip:"FieldMeta"
	},
	TipGroupLocale:{
		_meta:"TipGroupLocaleMeta",
		id:"UUID",
		title:"String",
		description:"String",
		base:"TipGroup",
		locale:"Locale"
	},
	TipGroupLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		description:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta"
	},
	TipGroupItemConnection:{
		pageInfo:"PageInfo",
		edges:"TipGroupItemEdge"
	},
	TipGroupItemEdge:{
		node:"TipGroupItem"
	},
	TipGroupLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"TipGroupLocaleEdge"
	},
	TipGroupLocaleEdge:{
		node:"TipGroupLocale"
	},
	RecipeLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"RecipeLocaleEdge"
	},
	RecipeLocaleEdge:{
		node:"RecipeLocale"
	},
	StepGroupConnection:{
		pageInfo:"PageInfo",
		edges:"StepGroupEdge"
	},
	StepGroupEdge:{
		node:"StepGroup"
	},
	CategoryConnection:{
		pageInfo:"PageInfo",
		edges:"CategoryEdge"
	},
	CategoryEdge:{
		node:"Category"
	},
	TipGroupConnection:{
		pageInfo:"PageInfo",
		edges:"TipGroupEdge"
	},
	TipGroupEdge:{
		node:"TipGroup"
	},
	PinnedRecipesPageLocale:{
		_meta:"PinnedRecipesPageLocaleMeta",
		id:"UUID",
		title:"String",
		link:"Linkable",
		base:"PinnedRecipesPage",
		locale:"Locale",
		seo:"Seo"
	},
	PinnedRecipesPageLocaleMeta:{
		id:"FieldMeta",
		title:"FieldMeta",
		link:"FieldMeta",
		base:"FieldMeta",
		locale:"FieldMeta",
		seo:"FieldMeta"
	},
	PinnedRecipesPage:{
		_meta:"PinnedRecipesPageMeta",
		id:"UUID",
		unique:"One",
		locales:"PinnedRecipesPageLocale",
		localesByLocale:"PinnedRecipesPageLocale",
		localesByLink:"PinnedRecipesPageLocale",
		localesBySeo:"PinnedRecipesPageLocale",
		paginateLocales:"PinnedRecipesPageLocaleConnection"
	},
	PinnedRecipesPageMeta:{
		id:"FieldMeta",
		unique:"FieldMeta",
		locales:"FieldMeta"
	},
	PinnedRecipesPageLocaleConnection:{
		pageInfo:"PageInfo",
		edges:"PinnedRecipesPageLocaleEdge"
	},
	PinnedRecipesPageLocaleEdge:{
		node:"PinnedRecipesPageLocale"
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
	ContentConnection:{
		pageInfo:"PageInfo",
		edges:"ContentEdge"
	},
	ContentEdge:{
		node:"Content"
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
	LocaleConnection:{
		pageInfo:"PageInfo",
		edges:"LocaleEdge"
	},
	LocaleEdge:{
		node:"Locale"
	},
	ImageConnection:{
		pageInfo:"PageInfo",
		edges:"ImageEdge"
	},
	ImageEdge:{
		node:"Image"
	},
	UserConnection:{
		pageInfo:"PageInfo",
		edges:"UserEdge"
	},
	UserEdge:{
		node:"User"
	},
	StepConnection:{
		pageInfo:"PageInfo",
		edges:"StepEdge"
	},
	StepEdge:{
		node:"Step"
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
	HomePageConnection:{
		pageInfo:"PageInfo",
		edges:"HomePageEdge"
	},
	HomePageEdge:{
		node:"HomePage"
	},
	SeoConnection:{
		pageInfo:"PageInfo",
		edges:"SeoEdge"
	},
	SeoEdge:{
		node:"Seo"
	},
	RecipeList:{
		_meta:"RecipeListMeta",
		id:"UUID",
		items:"RecipeListItem",
		paginateItems:"RecipeListItemConnection"
	},
	RecipeListMeta:{
		id:"FieldMeta",
		items:"FieldMeta"
	},
	RecipeListItem:{
		_meta:"RecipeListItemMeta",
		id:"UUID",
		order:"Int",
		list:"RecipeList",
		recipe:"Recipe"
	},
	RecipeListItemMeta:{
		id:"FieldMeta",
		order:"FieldMeta",
		list:"FieldMeta",
		recipe:"FieldMeta"
	},
	RecipeListItemConnection:{
		pageInfo:"PageInfo",
		edges:"RecipeListItemEdge"
	},
	RecipeListItemEdge:{
		node:"RecipeListItem"
	},
	RecipeListConnection:{
		pageInfo:"PageInfo",
		edges:"RecipeListEdge"
	},
	RecipeListEdge:{
		node:"RecipeList"
	},
	TipConnection:{
		pageInfo:"PageInfo",
		edges:"TipEdge"
	},
	TipEdge:{
		node:"Tip"
	},
	PinnedRecipesPageConnection:{
		pageInfo:"PageInfo",
		edges:"PinnedRecipesPageEdge"
	},
	PinnedRecipesPageEdge:{
		node:"PinnedRecipesPage"
	},
	QueryTransaction:{
		getContent:"Content",
		listContent:"Content",
		paginateContent:"ContentConnection",
		getContentBlock:"ContentBlock",
		listContentBlock:"ContentBlock",
		paginateContentBlock:"ContentBlockConnection",
		getContentReference:"ContentReference",
		listContentReference:"ContentReference",
		paginateContentReference:"ContentReferenceConnection",
		getLink:"Link",
		listLink:"Link",
		paginateLink:"LinkConnection",
		getLinkable:"Linkable",
		listLinkable:"Linkable",
		paginateLinkable:"LinkableConnection",
		getContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		listContentReferenceLinkableItem:"ContentReferenceLinkableItem",
		paginateContentReferenceLinkableItem:"ContentReferenceLinkableItemConnection",
		getLocale:"Locale",
		listLocale:"Locale",
		paginateLocale:"LocaleConnection",
		getRecipe:"Recipe",
		listRecipe:"Recipe",
		paginateRecipe:"RecipeConnection",
		getRecipeLocale:"RecipeLocale",
		listRecipeLocale:"RecipeLocale",
		paginateRecipeLocale:"RecipeLocaleConnection",
		getImage:"Image",
		listImage:"Image",
		paginateImage:"ImageConnection",
		getUser:"User",
		listUser:"User",
		paginateUser:"UserConnection",
		getStep:"Step",
		listStep:"Step",
		paginateStep:"StepConnection",
		getStepLocale:"StepLocale",
		listStepLocale:"StepLocale",
		paginateStepLocale:"StepLocaleConnection",
		getPinnedRecipe:"PinnedRecipe",
		listPinnedRecipe:"PinnedRecipe",
		paginatePinnedRecipe:"PinnedRecipeConnection",
		validateCreatePinnedRecipe:"_ValidationResult",
		getImplemetationDate:"ImplemetationDate",
		listImplemetationDate:"ImplemetationDate",
		paginateImplemetationDate:"ImplemetationDateConnection",
		validateCreateImplemetationDate:"_ValidationResult",
		getStepGroup:"StepGroup",
		listStepGroup:"StepGroup",
		paginateStepGroup:"StepGroupConnection",
		getStepGroupLocale:"StepGroupLocale",
		listStepGroupLocale:"StepGroupLocale",
		paginateStepGroupLocale:"StepGroupLocaleConnection",
		getHomePage:"HomePage",
		listHomePage:"HomePage",
		paginateHomePage:"HomePageConnection",
		getHomePageLocale:"HomePageLocale",
		listHomePageLocale:"HomePageLocale",
		paginateHomePageLocale:"HomePageLocaleConnection",
		getSeo:"Seo",
		listSeo:"Seo",
		paginateSeo:"SeoConnection",
		getRecipeList:"RecipeList",
		listRecipeList:"RecipeList",
		paginateRecipeList:"RecipeListConnection",
		getRecipeListItem:"RecipeListItem",
		listRecipeListItem:"RecipeListItem",
		paginateRecipeListItem:"RecipeListItemConnection",
		getCategory:"Category",
		listCategory:"Category",
		paginateCategory:"CategoryConnection",
		getCategoryLocale:"CategoryLocale",
		listCategoryLocale:"CategoryLocale",
		paginateCategoryLocale:"CategoryLocaleConnection",
		getStepGroupItem:"StepGroupItem",
		listStepGroupItem:"StepGroupItem",
		paginateStepGroupItem:"StepGroupItemConnection",
		getTip:"Tip",
		listTip:"Tip",
		paginateTip:"TipConnection",
		getTipLocale:"TipLocale",
		listTipLocale:"TipLocale",
		paginateTipLocale:"TipLocaleConnection",
		getStepModification:"StepModification",
		listStepModification:"StepModification",
		paginateStepModification:"StepModificationConnection",
		getTipGroup:"TipGroup",
		listTipGroup:"TipGroup",
		paginateTipGroup:"TipGroupConnection",
		getTipGroupItem:"TipGroupItem",
		listTipGroupItem:"TipGroupItem",
		paginateTipGroupItem:"TipGroupItemConnection",
		getTipGroupLocale:"TipGroupLocale",
		listTipGroupLocale:"TipGroupLocale",
		paginateTipGroupLocale:"TipGroupLocaleConnection",
		getPinnedRecipesPage:"PinnedRecipesPage",
		listPinnedRecipesPage:"PinnedRecipesPage",
		paginatePinnedRecipesPage:"PinnedRecipesPageConnection",
		getPinnedRecipesPageLocale:"PinnedRecipesPageLocale",
		listPinnedRecipesPageLocale:"PinnedRecipesPageLocale",
		paginatePinnedRecipesPageLocale:"PinnedRecipesPageLocaleConnection"
	},
	Info:{
		description:"String"
	},
	Mutation:{
		createPinnedRecipe:"PinnedRecipeCreateResult",
		deletePinnedRecipe:"PinnedRecipeDeleteResult",
		createImplemetationDate:"ImplemetationDateCreateResult",
		deleteImplemetationDate:"ImplemetationDateDeleteResult",
		transaction:"MutationTransaction",
		query:"Query",
		generateUploadUrl:"S3SignedUpload",
		generateReadUrl:"S3SignedRead"
	},
	PinnedRecipeCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"PinnedRecipe",
		validation:"_ValidationResult"
	},
	MutationResult:{
		"...on PinnedRecipeCreateResult": "PinnedRecipeCreateResult",
		"...on PinnedRecipeDeleteResult": "PinnedRecipeDeleteResult",
		"...on ImplemetationDateCreateResult": "ImplemetationDateCreateResult",
		"...on ImplemetationDateDeleteResult": "ImplemetationDateDeleteResult",
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
	PinnedRecipeDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"PinnedRecipe"
	},
	ImplemetationDateCreateResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ImplemetationDate",
		validation:"_ValidationResult"
	},
	ImplemetationDateDeleteResult:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		node:"ImplemetationDate"
	},
	MutationTransaction:{
		ok:"Boolean",
		errorMessage:"String",
		errors:"_MutationError",
		validation:"_ValidationResult",
		createPinnedRecipe:"PinnedRecipeCreateResult",
		deletePinnedRecipe:"PinnedRecipeDeleteResult",
		createImplemetationDate:"ImplemetationDateCreateResult",
		deleteImplemetationDate:"ImplemetationDateDeleteResult",
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
	DateTime?: ScalarResolver;
	Json?: ScalarResolver;
}
type ZEUS_UNIONS = GraphQLTypes["_PathFragment"] | GraphQLTypes["_Argument"]

export type ValueTypes = {
    ["Query"]: AliasType<{
getContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["Content"]],
listContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Content"]],
paginateContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentConnection"]],
getContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlockConnection"]],
getContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
listContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceConnection"]],
getLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
listLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Link"]],
paginateLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkConnection"]],
getLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
listLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
paginateLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkableConnection"]],
getContentReferenceLinkableItem?: [{	by: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
listLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
paginateLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LocaleConnection"]],
getRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
listRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
paginateRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeConnection"]],
getRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
getImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
listImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Image"]],
paginateImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImageConnection"]],
getUser?: [{	by: ValueTypes["UserUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>},ValueTypes["User"]],
listUser?: [{	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["UserOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["User"]],
paginateUser?: [{	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["UserOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["UserConnection"]],
getStep?: [{	by: ValueTypes["StepUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>},ValueTypes["Step"]],
listStep?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Step"]],
paginateStep?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepConnection"]],
getStepLocale?: [{	by: ValueTypes["StepLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
listStepLocale?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
paginateStepLocale?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocaleConnection"]],
getPinnedRecipe?: [{	by: ValueTypes["PinnedRecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
listPinnedRecipe?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
paginatePinnedRecipe?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipeConnection"]],
validateCreatePinnedRecipe?: [{	data: ValueTypes["PinnedRecipeCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getImplemetationDate?: [{	by: ValueTypes["ImplemetationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
listImplemetationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
paginateImplemetationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDateConnection"]],
validateCreateImplemetationDate?: [{	data: ValueTypes["ImplemetationDateCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getStepGroup?: [{	by: ValueTypes["StepGroupUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
listStepGroup?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
paginateStepGroup?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupConnection"]],
getStepGroupLocale?: [{	by: ValueTypes["StepGroupLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
listStepGroupLocale?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
paginateStepGroupLocale?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocaleConnection"]],
getHomePage?: [{	by: ValueTypes["HomePageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePage"]],
listHomePage?: [{	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["HomePage"]],
paginateHomePage?: [{	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageConnection"]],
getHomePageLocale?: [{	by: ValueTypes["HomePageLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
listHomePageLocale?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
paginateHomePageLocale?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocaleConnection"]],
getSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
listSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
paginateSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["SeoConnection"]],
getRecipeList?: [{	by: ValueTypes["RecipeListUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeList"]],
listRecipeList?: [{	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeList"]],
paginateRecipeList?: [{	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListConnection"]],
getRecipeListItem?: [{	by: ValueTypes["RecipeListItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeListItem"]],
listRecipeListItem?: [{	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListItem"]],
paginateRecipeListItem?: [{	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListItemConnection"]],
getCategory?: [{	by: ValueTypes["CategoryUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>},ValueTypes["Category"]],
listCategory?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Category"]],
paginateCategory?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryConnection"]],
getCategoryLocale?: [{	by: ValueTypes["CategoryLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
listCategoryLocale?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
paginateCategoryLocale?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocaleConnection"]],
getStepGroupItem?: [{	by: ValueTypes["StepGroupItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
listStepGroupItem?: [{	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
paginateStepGroupItem?: [{	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupItemConnection"]],
getTip?: [{	by: ValueTypes["TipUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
listTip?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
paginateTip?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipConnection"]],
getTipLocale?: [{	by: ValueTypes["TipLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
listTipLocale?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
paginateTipLocale?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocaleConnection"]],
getStepModification?: [{	by: ValueTypes["StepModificationUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepModification"]],
listStepModification?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepModification"]],
paginateStepModification?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepModificationConnection"]],
getTipGroup?: [{	by: ValueTypes["TipGroupUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
listTipGroup?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
paginateTipGroup?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupConnection"]],
getTipGroupItem?: [{	by: ValueTypes["TipGroupItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupItem"]],
listTipGroupItem?: [{	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupItem"]],
paginateTipGroupItem?: [{	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupItemConnection"]],
getTipGroupLocale?: [{	by: ValueTypes["TipGroupLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
listTipGroupLocale?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
paginateTipGroupLocale?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocaleConnection"]],
getPinnedRecipesPage?: [{	by: ValueTypes["PinnedRecipesPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPage"]],
listPinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPage"]],
paginatePinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageConnection"]],
getPinnedRecipesPageLocale?: [{	by: ValueTypes["PinnedRecipesPageLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
listPinnedRecipesPageLocale?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
paginatePinnedRecipesPageLocale?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocaleConnection"]],
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
	homePage?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,
	category?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipesPage?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["LinkableWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LinkableWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>
};
	["HomePageLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["HomePageLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["HomePageLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>
};
	["HomePageWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["OneCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["HomePageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["HomePageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>
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
	["One"]:One;
	["LocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	code?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	recipes?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,
	steps?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,
	stepsGroups?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,
	homePage?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,
	categories?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,
	tips?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,
	tipGroups?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipesPage?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["LocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["LocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	tileDescription?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>
};
	["RecipeWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["DateCondition"] | undefined | null | Variable<any, string>,
	price?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,
	mainImage?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipes?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,
	createdBy?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>,
	stepsGroups?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,
	categories?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,
	tileImage?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	tipGroups?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,
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
	["Date"]:unknown;
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
	["PinnedRecipeWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	user?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>,
	derivedBy?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	implementationDate?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,
	modification?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["PinnedRecipeWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["PinnedRecipeWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>
};
	["UserWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	firstName?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	lastName?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	email?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipes?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,
	createdRecipes?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["UserWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["UserWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>
};
	["ImplemetationDateWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipe?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["DateTimeCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["ImplemetationDateWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["ImplemetationDateWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>
};
	["StepWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,
	implementationDate?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,
	hasTimer?: ValueTypes["BooleanCondition"] | undefined | null | Variable<any, string>,
	timerCount?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["StepWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>
};
	["StepLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	modificationDate?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["StepLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>
};
	["StepModificationWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["DateTimeCondition"] | undefined | null | Variable<any, string>,
	pinnedRecipe?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["StepModificationWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepModificationWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>
};
	["DateTimeCondition"]: {
	and?: Array<ValueTypes["DateTimeCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["DateTimeCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["DateTimeCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["DateTime"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["DateTime"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>
};
	["DateTime"]:unknown;
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
	["StepGroupWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,
	items?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["StepGroupWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepGroupWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	buttonTitle?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["StepGroupLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepGroupLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupItemWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["StepGroupItemTypeCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	group?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,
	tip?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["StepGroupItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepGroupItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupItemTypeCondition"]: {
	and?: Array<ValueTypes["StepGroupItemTypeCondition"]> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["StepGroupItemTypeCondition"]> | undefined | null | Variable<any, string>,
	not?: ValueTypes["StepGroupItemTypeCondition"] | undefined | null | Variable<any, string>,
	null?: boolean | undefined | null | Variable<any, string>,
	isNull?: boolean | undefined | null | Variable<any, string>,
	eq?: ValueTypes["StepGroupItemType"] | undefined | null | Variable<any, string>,
	notEq?: ValueTypes["StepGroupItemType"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["StepGroupItemType"]> | undefined | null | Variable<any, string>,
	notIn?: Array<ValueTypes["StepGroupItemType"]> | undefined | null | Variable<any, string>,
	lt?: ValueTypes["StepGroupItemType"] | undefined | null | Variable<any, string>,
	lte?: ValueTypes["StepGroupItemType"] | undefined | null | Variable<any, string>,
	gt?: ValueTypes["StepGroupItemType"] | undefined | null | Variable<any, string>,
	gte?: ValueTypes["StepGroupItemType"] | undefined | null | Variable<any, string>
};
	["StepGroupItemType"]:StepGroupItemType;
	["TipWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["TipWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["TipWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>
};
	["TipLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["TipLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["TipLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>
};
	["CategoryWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,
	recipes?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["CategoryWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["CategoryWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>
};
	["CategoryLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["CategoryLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["CategoryLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>
};
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
	["TipGroupWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	items?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["TipGroupWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["TipGroupWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupItemWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	group?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,
	tip?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["TipGroupItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["TipGroupItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["TipGroupLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["TipGroupLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageLocaleWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringCondition"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["OneCondition"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["PinnedRecipesPageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["PinnedRecipesPageWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>
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
homePage?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
category?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
recipe?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
pinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
		__typename?: boolean | `@${string}`
}>;
	["LinkableMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	url?:ValueTypes["FieldMeta"],
	homePage?:ValueTypes["FieldMeta"],
	category?:ValueTypes["FieldMeta"],
	recipe?:ValueTypes["FieldMeta"],
	pinnedRecipesPage?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocale"]: AliasType<{
	_meta?:ValueTypes["HomePageLocaleMeta"],
	id?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePage"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
link?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
seo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
	title?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
	link?:ValueTypes["FieldMeta"],
	seo?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["HomePage"]: AliasType<{
	_meta?:ValueTypes["HomePageMeta"],
	id?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
	unique?:boolean | `@${string}`,
localesByLocale?: [{	by: ValueTypes["HomePageLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
localesByLink?: [{	by: ValueTypes["HomePageLocalesByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
localesBySeo?: [{	by: ValueTypes["HomePageLocalesBySeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
paginateLocales?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["HomePageMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
	unique?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["HomePageOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoOrderBy"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["OrderDirection"]:OrderDirection;
	["HomePageOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["LocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	code?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["LinkableOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	homePage?: ValueTypes["HomePageLocaleOrderBy"] | undefined | null | Variable<any, string>,
	category?: ValueTypes["CategoryLocaleOrderBy"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeLocaleOrderBy"] | undefined | null | Variable<any, string>,
	pinnedRecipesPage?: ValueTypes["PinnedRecipesPageLocaleOrderBy"] | undefined | null | Variable<any, string>
};
	["CategoryLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["CategoryOrderBy"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoOrderBy"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["CategoryOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>
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
	["RecipeLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>,
	tileDescription?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>
};
	["RecipeOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	publishDate?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	price?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	mainImage?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>,
	createdBy?: ValueTypes["UserOrderBy"] | undefined | null | Variable<any, string>,
	tileImage?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>
};
	["UserOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	firstName?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	lastName?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	email?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageOrderBy"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["PinnedRecipesPageOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoOrderBy"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["HomePageLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	code?: string | undefined | null | Variable<any, string>,
	recipes?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	steps?: ValueTypes["StepLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	stepsGroups?: ValueTypes["StepGroupLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	homePage?: ValueTypes["HomePageLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	categories?: ValueTypes["CategoryLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	tips?: ValueTypes["TipLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	tipGroups?: ValueTypes["TipGroupLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipesPage?: ValueTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["RecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipes?: ValueTypes["PinnedRecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	stepsGroups?: ValueTypes["StepGroupUniqueWhere"] | undefined | null | Variable<any, string>,
	tipGroups?: ValueTypes["TipGroupUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipeUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	implementationDate?: ValueTypes["ImplemetationDateUniqueWhere"] | undefined | null | Variable<any, string>,
	modification?: ValueTypes["StepModificationUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ImplemetationDateUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	pinnedRecipe?: ValueTypes["PinnedRecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["StepLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	implementationDate?: ValueTypes["ImplemetationDateUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	modificationDate?: ValueTypes["StepModificationUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepModificationUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["StepGroupUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["StepGroupLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	items?: ValueTypes["StepGroupItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["StepGroupUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupItemUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>,
	tip?: ValueTypes["TipUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["TipLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["TipUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	items?: ValueTypes["TipGroupItemUniqueWhere"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["TipGroupLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupItemUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	tip?: ValueTypes["TipUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["TipGroupUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LinkableUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	url?: string | undefined | null | Variable<any, string>,
	homePage?: ValueTypes["HomePageLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	category?: ValueTypes["CategoryLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	pinnedRecipesPage?: ValueTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["HomePageLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["HomePageUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["HomePageUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["HomePageLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["SeoUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	ogImage?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ImageUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["CategoryLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["CategoryUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["CategoryUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["CategoryLocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageLocaleUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["PinnedRecipesPageUniqueWhere"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>,
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>,
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	unique?: ValueTypes["One"] | undefined | null | Variable<any, string>,
	locales?: ValueTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["HomePageLocalesByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["HomePageLocalesBySeoUniqueWhere"]: {
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["HomePageLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["HomePageLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PageInfo"]: AliasType<{
	totalCount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocaleEdge"]: AliasType<{
	node?:ValueTypes["HomePageLocale"],
		__typename?: boolean | `@${string}`
}>;
	["Locale"]: AliasType<{
	_meta?:ValueTypes["LocaleMeta"],
	id?:boolean | `@${string}`,
	code?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
recipes?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
steps?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
stepsGroups?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
homePage?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
categories?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
tips?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
tipGroups?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
pinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
recipesByBase?: [{	by: ValueTypes["LocaleRecipesByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
recipesByLink?: [{	by: ValueTypes["LocaleRecipesByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
stepsByBase?: [{	by: ValueTypes["LocaleStepsByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
stepsByModificationDate?: [{	by: ValueTypes["LocaleStepsByModificationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
stepsGroupsByBase?: [{	by: ValueTypes["LocaleStepsGroupsByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
homePageByBase?: [{	by: ValueTypes["LocaleHomePageByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
homePageByLink?: [{	by: ValueTypes["LocaleHomePageByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
homePageBySeo?: [{	by: ValueTypes["LocaleHomePageBySeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
categoriesByBase?: [{	by: ValueTypes["LocaleCategoriesByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
categoriesBySeo?: [{	by: ValueTypes["LocaleCategoriesBySeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
categoriesByLink?: [{	by: ValueTypes["LocaleCategoriesByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
tipsByBase?: [{	by: ValueTypes["LocaleTipsByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
tipGroupsByBase?: [{	by: ValueTypes["LocaleTipGroupsByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
pinnedRecipesPageByBase?: [{	by: ValueTypes["LocalePinnedRecipesPageByBaseUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
pinnedRecipesPageByLink?: [{	by: ValueTypes["LocalePinnedRecipesPageByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
pinnedRecipesPageBySeo?: [{	by: ValueTypes["LocalePinnedRecipesPageBySeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
paginateRecipes?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
paginateSteps?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocaleConnection"]],
paginateStepsGroups?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocaleConnection"]],
paginateHomePage?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocaleConnection"]],
paginateCategories?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocaleConnection"]],
paginateTips?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocaleConnection"]],
paginateTipGroups?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocaleConnection"]],
paginatePinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["LocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	code?:ValueTypes["FieldMeta"],
	label?:ValueTypes["FieldMeta"],
	recipes?:ValueTypes["FieldMeta"],
	steps?:ValueTypes["FieldMeta"],
	stepsGroups?:ValueTypes["FieldMeta"],
	homePage?:ValueTypes["FieldMeta"],
	categories?:ValueTypes["FieldMeta"],
	tips?:ValueTypes["FieldMeta"],
	tipGroups?:ValueTypes["FieldMeta"],
	pinnedRecipesPage?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocale"]: AliasType<{
	_meta?:ValueTypes["RecipeLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
	tileDescription?:boolean | `@${string}`,
link?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	description?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
	tileDescription?:ValueTypes["FieldMeta"],
	link?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Recipe"]: AliasType<{
	_meta?:ValueTypes["RecipeMeta"],
	id?:boolean | `@${string}`,
	publishDate?:boolean | `@${string}`,
	price?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
mainImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
pinnedRecipes?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
createdBy?: [{	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>},ValueTypes["User"]],
stepsGroups?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
categories?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Category"]],
tileImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
tipGroups?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
localesByLocale?: [{	by: ValueTypes["RecipeLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
localesByLink?: [{	by: ValueTypes["RecipeLocalesByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
pinnedRecipesByImplementationDate?: [{	by: ValueTypes["RecipePinnedRecipesByImplementationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
pinnedRecipesByModification?: [{	by: ValueTypes["RecipePinnedRecipesByModificationUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
stepsGroupsByLocales?: [{	by: ValueTypes["RecipeStepsGroupsByLocalesUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
stepsGroupsByItems?: [{	by: ValueTypes["RecipeStepsGroupsByItemsUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
tipGroupsByItems?: [{	by: ValueTypes["RecipeTipGroupsByItemsUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
tipGroupsByLocales?: [{	by: ValueTypes["RecipeTipGroupsByLocalesUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
paginateLocales?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
paginatePinnedRecipes?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipeConnection"]],
paginateStepsGroups?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupConnection"]],
paginateCategories?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryConnection"]],
paginateTipGroups?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	publishDate?:ValueTypes["FieldMeta"],
	price?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
	mainImage?:ValueTypes["FieldMeta"],
	pinnedRecipes?:ValueTypes["FieldMeta"],
	createdBy?:ValueTypes["FieldMeta"],
	stepsGroups?:ValueTypes["FieldMeta"],
	categories?:ValueTypes["FieldMeta"],
	tileImage?:ValueTypes["FieldMeta"],
	tipGroups?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
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
	["PinnedRecipe"]: AliasType<{
	_meta?:ValueTypes["PinnedRecipeMeta"],
	id?:boolean | `@${string}`,
user?: [{	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>},ValueTypes["User"]],
derivedBy?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
implementationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
modification?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepModification"]],
implementationDateByStep?: [{	by: ValueTypes["PinnedRecipeImplementationDateByStepUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
paginateImplementationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDateConnection"]],
paginateModification?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepModificationConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	user?:ValueTypes["FieldMeta"],
	derivedBy?:ValueTypes["FieldMeta"],
	implementationDate?:ValueTypes["FieldMeta"],
	modification?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["User"]: AliasType<{
	_meta?:ValueTypes["UserMeta"],
	id?:boolean | `@${string}`,
	firstName?:boolean | `@${string}`,
	lastName?:boolean | `@${string}`,
	email?:boolean | `@${string}`,
image?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
pinnedRecipes?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
createdRecipes?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
pinnedRecipesByImplementationDate?: [{	by: ValueTypes["UserPinnedRecipesByImplementationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
pinnedRecipesByModification?: [{	by: ValueTypes["UserPinnedRecipesByModificationUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
createdRecipesByLocales?: [{	by: ValueTypes["UserCreatedRecipesByLocalesUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
createdRecipesByPinnedRecipes?: [{	by: ValueTypes["UserCreatedRecipesByPinnedRecipesUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
createdRecipesByStepsGroups?: [{	by: ValueTypes["UserCreatedRecipesByStepsGroupsUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
createdRecipesByTipGroups?: [{	by: ValueTypes["UserCreatedRecipesByTipGroupsUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
paginatePinnedRecipes?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipeConnection"]],
paginateCreatedRecipes?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["UserMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	firstName?:ValueTypes["FieldMeta"],
	lastName?:ValueTypes["FieldMeta"],
	email?:ValueTypes["FieldMeta"],
	image?:ValueTypes["FieldMeta"],
	pinnedRecipes?:ValueTypes["FieldMeta"],
	createdRecipes?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	user?: ValueTypes["UserOrderBy"] | undefined | null | Variable<any, string>,
	derivedBy?: ValueTypes["RecipeOrderBy"] | undefined | null | Variable<any, string>
};
	["UserPinnedRecipesByImplementationDateUniqueWhere"]: {
	implementationDate?: ValueTypes["ImplemetationDateUniqueWhere"] | undefined | null | Variable<any, string>
};
	["UserPinnedRecipesByModificationUniqueWhere"]: {
	modification?: ValueTypes["StepModificationUniqueWhere"] | undefined | null | Variable<any, string>
};
	["UserCreatedRecipesByLocalesUniqueWhere"]: {
	locales?: ValueTypes["RecipeLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["UserCreatedRecipesByPinnedRecipesUniqueWhere"]: {
	pinnedRecipes?: ValueTypes["PinnedRecipeUniqueWhere"] | undefined | null | Variable<any, string>
};
	["UserCreatedRecipesByStepsGroupsUniqueWhere"]: {
	stepsGroups?: ValueTypes["StepGroupUniqueWhere"] | undefined | null | Variable<any, string>
};
	["UserCreatedRecipesByTipGroupsUniqueWhere"]: {
	tipGroups?: ValueTypes["TipGroupUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipeConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PinnedRecipeEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeEdge"]: AliasType<{
	node?:ValueTypes["PinnedRecipe"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["RecipeEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeEdge"]: AliasType<{
	node?:ValueTypes["Recipe"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDate"]: AliasType<{
	_meta?:ValueTypes["ImplemetationDateMeta"],
	id?:boolean | `@${string}`,
step?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>},ValueTypes["Step"]],
pinnedRecipe?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
	date?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	step?:ValueTypes["FieldMeta"],
	pinnedRecipe?:ValueTypes["FieldMeta"],
	date?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Step"]: AliasType<{
	_meta?:ValueTypes["StepMeta"],
	id?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
implementationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
	hasTimer?:boolean | `@${string}`,
	timerCount?:boolean | `@${string}`,
localesByLocale?: [{	by: ValueTypes["StepLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
localesByModificationDate?: [{	by: ValueTypes["StepLocalesByModificationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
implementationDateByPinnedRecipe?: [{	by: ValueTypes["StepImplementationDateByPinnedRecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
paginateLocales?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocaleConnection"]],
paginateImplementationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDateConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["StepMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
	implementationDate?:ValueTypes["FieldMeta"],
	hasTimer?:ValueTypes["FieldMeta"],
	timerCount?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepLocale"]: AliasType<{
	_meta?:ValueTypes["StepLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>},ValueTypes["Step"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
modificationDate?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepModification"]],
paginateModificationDate?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepModificationConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["StepLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
	modificationDate?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepModification"]: AliasType<{
	_meta?:ValueTypes["StepModificationMeta"],
	id?:boolean | `@${string}`,
	date?:boolean | `@${string}`,
pinnedRecipe?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
step?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
		__typename?: boolean | `@${string}`
}>;
	["StepModificationMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	date?:ValueTypes["FieldMeta"],
	pinnedRecipe?:ValueTypes["FieldMeta"],
	step?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepModificationOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	pinnedRecipe?: ValueTypes["PinnedRecipeOrderBy"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepLocaleOrderBy"] | undefined | null | Variable<any, string>
};
	["StepLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["StepOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>
};
	["StepOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	hasTimer?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	timerCount?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["StepModificationConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StepModificationEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepModificationEdge"]: AliasType<{
	node?:ValueTypes["StepModification"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepOrderBy"] | undefined | null | Variable<any, string>,
	pinnedRecipe?: ValueTypes["PinnedRecipeOrderBy"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["StepLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepLocalesByModificationDateUniqueWhere"]: {
	modificationDate?: ValueTypes["StepModificationUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepImplementationDateByPinnedRecipeUniqueWhere"]: {
	pinnedRecipe?: ValueTypes["PinnedRecipeUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StepLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepLocaleEdge"]: AliasType<{
	node?:ValueTypes["StepLocale"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ImplemetationDateEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateEdge"]: AliasType<{
	node?:ValueTypes["ImplemetationDate"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeImplementationDateByStepUniqueWhere"]: {
	step?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepGroup"]: AliasType<{
	_meta?:ValueTypes["StepGroupMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
recipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
locales?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
items?: [{	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
localesByLocale?: [{	by: ValueTypes["StepGroupLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
itemsByStep?: [{	by: ValueTypes["StepGroupItemsByStepUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
itemsByTip?: [{	by: ValueTypes["StepGroupItemsByTipUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
paginateLocales?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocaleConnection"]],
paginateItems?: [{	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupItemConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	recipe?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
	items?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocale"]: AliasType<{
	_meta?:ValueTypes["StepGroupLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	buttonTitle?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	buttonTitle?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
	description?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	buttonTitle?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["StepGroupOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["StepGroupOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeOrderBy"] | undefined | null | Variable<any, string>
};
	["StepGroupItem"]: AliasType<{
	_meta?:ValueTypes["StepGroupItemMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
group?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
step?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>},ValueTypes["Step"]],
tip?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	type?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	group?:ValueTypes["FieldMeta"],
	step?:ValueTypes["FieldMeta"],
	tip?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Tip"]: AliasType<{
	_meta?:ValueTypes["TipMeta"],
	id?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
localesByLocale?: [{	by: ValueTypes["TipLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
paginateLocales?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["TipMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipLocale"]: AliasType<{
	_meta?:ValueTypes["TipLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
		__typename?: boolean | `@${string}`
}>;
	["TipLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["TipOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>
};
	["TipOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["TipLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["TipLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipLocaleEdge"]: AliasType<{
	node?:ValueTypes["TipLocale"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	group?: ValueTypes["StepGroupOrderBy"] | undefined | null | Variable<any, string>,
	step?: ValueTypes["StepOrderBy"] | undefined | null | Variable<any, string>,
	tip?: ValueTypes["TipOrderBy"] | undefined | null | Variable<any, string>
};
	["StepGroupLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupItemsByStepUniqueWhere"]: {
	step?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupItemsByTipUniqueWhere"]: {
	tip?: ValueTypes["TipUniqueWhere"] | undefined | null | Variable<any, string>
};
	["StepGroupLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StepGroupLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocaleEdge"]: AliasType<{
	node?:ValueTypes["StepGroupLocale"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StepGroupItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemEdge"]: AliasType<{
	node?:ValueTypes["StepGroupItem"],
		__typename?: boolean | `@${string}`
}>;
	["Category"]: AliasType<{
	_meta?:ValueTypes["CategoryMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
recipes?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
image?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
localesByLocale?: [{	by: ValueTypes["CategoryLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
localesBySeo?: [{	by: ValueTypes["CategoryLocalesBySeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
localesByLink?: [{	by: ValueTypes["CategoryLocalesByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
paginateLocales?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocaleConnection"]],
paginateRecipes?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["CategoryMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
	recipes?:ValueTypes["FieldMeta"],
	image?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryLocale"]: AliasType<{
	_meta?:ValueTypes["CategoryLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>},ValueTypes["Category"]],
seo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
link?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["CategoryLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	seo?:ValueTypes["FieldMeta"],
	link?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
	description?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
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
	["CategoryLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["CategoryLocalesBySeoUniqueWhere"]: {
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["CategoryLocalesByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["CategoryLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["CategoryLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryLocaleEdge"]: AliasType<{
	node?:ValueTypes["CategoryLocale"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroup"]: AliasType<{
	_meta?:ValueTypes["TipGroupMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
recipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
items?: [{	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupItem"]],
locales?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
itemsByTip?: [{	by: ValueTypes["TipGroupItemsByTipUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupItem"]],
localesByLocale?: [{	by: ValueTypes["TipGroupLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
paginateItems?: [{	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupItemConnection"]],
paginateLocales?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	recipe?:ValueTypes["FieldMeta"],
	items?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItem"]: AliasType<{
	_meta?:ValueTypes["TipGroupItemMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
group?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
tip?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItemMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	group?:ValueTypes["FieldMeta"],
	tip?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItemOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	group?: ValueTypes["TipGroupOrderBy"] | undefined | null | Variable<any, string>,
	tip?: ValueTypes["TipOrderBy"] | undefined | null | Variable<any, string>
};
	["TipGroupOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeOrderBy"] | undefined | null | Variable<any, string>
};
	["TipGroupLocale"]: AliasType<{
	_meta?:ValueTypes["TipGroupLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
base?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	description?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	base?: ValueTypes["TipGroupOrderBy"] | undefined | null | Variable<any, string>,
	locale?: ValueTypes["LocaleOrderBy"] | undefined | null | Variable<any, string>
};
	["TipGroupItemsByTipUniqueWhere"]: {
	tip?: ValueTypes["TipUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["TipGroupItemConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["TipGroupItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItemEdge"]: AliasType<{
	node?:ValueTypes["TipGroupItem"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["TipGroupLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleEdge"]: AliasType<{
	node?:ValueTypes["TipGroupLocale"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeLocalesByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipePinnedRecipesByImplementationDateUniqueWhere"]: {
	implementationDate?: ValueTypes["ImplemetationDateUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipePinnedRecipesByModificationUniqueWhere"]: {
	modification?: ValueTypes["StepModificationUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeStepsGroupsByLocalesUniqueWhere"]: {
	locales?: ValueTypes["StepGroupLocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeStepsGroupsByItemsUniqueWhere"]: {
	items?: ValueTypes["StepGroupItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeTipGroupsByItemsUniqueWhere"]: {
	items?: ValueTypes["TipGroupItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeTipGroupsByLocalesUniqueWhere"]: {
	locales?: ValueTypes["TipGroupLocaleUniqueWhere"] | undefined | null | Variable<any, string>
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
	["StepGroupConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StepGroupEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupEdge"]: AliasType<{
	node?:ValueTypes["StepGroup"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["CategoryEdge"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryEdge"]: AliasType<{
	node?:ValueTypes["Category"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["TipGroupEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupEdge"]: AliasType<{
	node?:ValueTypes["TipGroup"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocale"]: AliasType<{
	_meta?:ValueTypes["PinnedRecipesPageLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
link?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
base?: [{	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPage"]],
locale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
seo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocaleMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	title?:ValueTypes["FieldMeta"],
	link?:ValueTypes["FieldMeta"],
	base?:ValueTypes["FieldMeta"],
	locale?:ValueTypes["FieldMeta"],
	seo?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPage"]: AliasType<{
	_meta?:ValueTypes["PinnedRecipesPageMeta"],
	id?:boolean | `@${string}`,
	unique?:boolean | `@${string}`,
locales?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
localesByLocale?: [{	by: ValueTypes["PinnedRecipesPageLocalesByLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
localesByLink?: [{	by: ValueTypes["PinnedRecipesPageLocalesByLinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
localesBySeo?: [{	by: ValueTypes["PinnedRecipesPageLocalesBySeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
paginateLocales?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	unique?:ValueTypes["FieldMeta"],
	locales?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocalesByLocaleUniqueWhere"]: {
	locale?: ValueTypes["LocaleUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageLocalesByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageLocalesBySeoUniqueWhere"]: {
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipesPageLocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PinnedRecipesPageLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocaleEdge"]: AliasType<{
	node?:ValueTypes["PinnedRecipesPageLocale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleRecipesByBaseUniqueWhere"]: {
	base?: ValueTypes["RecipeUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleRecipesByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleStepsByBaseUniqueWhere"]: {
	base?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleStepsByModificationDateUniqueWhere"]: {
	modificationDate?: ValueTypes["StepModificationUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleStepsGroupsByBaseUniqueWhere"]: {
	base?: ValueTypes["StepGroupUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleHomePageByBaseUniqueWhere"]: {
	base?: ValueTypes["HomePageUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleHomePageByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleHomePageBySeoUniqueWhere"]: {
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleCategoriesByBaseUniqueWhere"]: {
	base?: ValueTypes["CategoryUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleCategoriesBySeoUniqueWhere"]: {
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleCategoriesByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleTipsByBaseUniqueWhere"]: {
	base?: ValueTypes["TipUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocaleTipGroupsByBaseUniqueWhere"]: {
	base?: ValueTypes["TipGroupUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocalePinnedRecipesPageByBaseUniqueWhere"]: {
	base?: ValueTypes["PinnedRecipesPageUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocalePinnedRecipesPageByLinkUniqueWhere"]: {
	link?: ValueTypes["LinkableUniqueWhere"] | undefined | null | Variable<any, string>
};
	["LocalePinnedRecipesPageBySeoUniqueWhere"]: {
	seo?: ValueTypes["SeoUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	item?: ValueTypes["LinkableOrderBy"] | undefined | null | Variable<any, string>,
	reference?: ValueTypes["ContentReferenceOrderBy"] | undefined | null | Variable<any, string>
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
	["LinkableConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["LinkableEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableEdge"]: AliasType<{
	node?:ValueTypes["Linkable"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["LocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleEdge"]: AliasType<{
	node?:ValueTypes["Locale"],
		__typename?: boolean | `@${string}`
}>;
	["ImageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ImageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImageEdge"]: AliasType<{
	node?:ValueTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
	["UserUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	email?: string | undefined | null | Variable<any, string>,
	pinnedRecipes?: ValueTypes["PinnedRecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	createdRecipes?: ValueTypes["RecipeUniqueWhere"] | undefined | null | Variable<any, string>
};
	["UserConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["UserEdge"],
		__typename?: boolean | `@${string}`
}>;
	["UserEdge"]: AliasType<{
	node?:ValueTypes["User"],
		__typename?: boolean | `@${string}`
}>;
	["StepConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StepEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepEdge"]: AliasType<{
	node?:ValueTypes["Step"],
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
	["PinnedRecipeCreateInput"]: {
	user?: ValueTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined | null | Variable<any, string>,
	derivedBy?: ValueTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined | null | Variable<any, string>,
	implementationDate?: Array<ValueTypes["PinnedRecipeCreateImplementationDateEntityRelationInput"]> | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["PinnedRecipeCreateUserEntityRelationInput"]: {
	connect?: ValueTypes["UserUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipeCreateDerivedByEntityRelationInput"]: {
	connect?: ValueTypes["RecipeUniqueWhere"] | undefined | null | Variable<any, string>
};
	["PinnedRecipeCreateImplementationDateEntityRelationInput"]: {
	connect?: ValueTypes["ImplemetationDateUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["ImplemetationDateWithoutPinnedRecipeCreateInput"] | undefined | null | Variable<any, string>,
	alias?: string | undefined | null | Variable<any, string>
};
	["ImplemetationDateWithoutPinnedRecipeCreateInput"]: {
	step?: ValueTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ImplemetationDateCreateStepEntityRelationInput"]: {
	connect?: ValueTypes["StepUniqueWhere"] | undefined | null | Variable<any, string>
};
	["ImplemetationDateCreateInput"]: {
	step?: ValueTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined | null | Variable<any, string>,
	pinnedRecipe?: ValueTypes["ImplemetationDateCreatePinnedRecipeEntityRelationInput"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["ImplemetationDateCreatePinnedRecipeEntityRelationInput"]: {
	connect?: ValueTypes["PinnedRecipeUniqueWhere"] | undefined | null | Variable<any, string>,
	create?: ValueTypes["PinnedRecipeWithoutImplementationDateCreateInput"] | undefined | null | Variable<any, string>
};
	["PinnedRecipeWithoutImplementationDateCreateInput"]: {
	user?: ValueTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined | null | Variable<any, string>,
	derivedBy?: ValueTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined | null | Variable<any, string>,
	_dummy_field_?: boolean | undefined | null | Variable<any, string>
};
	["HomePageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["HomePageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["HomePageEdge"]: AliasType<{
	node?:ValueTypes["HomePage"],
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
	["RecipeList"]: AliasType<{
	_meta?:ValueTypes["RecipeListMeta"],
	id?:boolean | `@${string}`,
items?: [{	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListItem"]],
paginateItems?: [{	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListItemConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	items?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListItem"]: AliasType<{
	_meta?:ValueTypes["RecipeListItemMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
list?: [{	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeList"]],
recipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListItemMeta"]: AliasType<{
	id?:ValueTypes["FieldMeta"],
	order?:ValueTypes["FieldMeta"],
	list?:ValueTypes["FieldMeta"],
	recipe?:ValueTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	items?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["RecipeListWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["RecipeListWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>
};
	["RecipeListItemWhere"]: {
	id?: ValueTypes["UUIDCondition"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["IntCondition"] | undefined | null | Variable<any, string>,
	list?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["RecipeListItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["RecipeListItemWhere"] | undefined | null> | undefined | null | Variable<any, string>,
	not?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>
};
	["RecipeListItemOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	order?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,
	list?: ValueTypes["RecipeListOrderBy"] | undefined | null | Variable<any, string>,
	recipe?: ValueTypes["RecipeOrderBy"] | undefined | null | Variable<any, string>
};
	["RecipeListOrderBy"]: {
	_random?: boolean | undefined | null | Variable<any, string>,
	_randomSeeded?: number | undefined | null | Variable<any, string>,
	id?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>
};
	["RecipeListItemConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["RecipeListItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListItemEdge"]: AliasType<{
	node?:ValueTypes["RecipeListItem"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>,
	items?: ValueTypes["RecipeListItemUniqueWhere"] | undefined | null | Variable<any, string>
};
	["RecipeListItemUniqueWhere"]: {
	id?: ValueTypes["UUID"] | undefined | null | Variable<any, string>
};
	["RecipeListConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["RecipeListEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListEdge"]: AliasType<{
	node?:ValueTypes["RecipeList"],
		__typename?: boolean | `@${string}`
}>;
	["TipConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["TipEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipEdge"]: AliasType<{
	node?:ValueTypes["Tip"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PinnedRecipesPageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageEdge"]: AliasType<{
	node?:ValueTypes["PinnedRecipesPage"],
		__typename?: boolean | `@${string}`
}>;
	["QueryTransaction"]: AliasType<{
getContent?: [{	by: ValueTypes["ContentUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>},ValueTypes["Content"]],
listContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Content"]],
paginateContent?: [{	filter?: ValueTypes["ContentWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentConnection"]],
getContentBlock?: [{	by: ValueTypes["ContentBlockUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ValueTypes["ContentBlockWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentBlockOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentBlockConnection"]],
getContentReference?: [{	by: ValueTypes["ContentReferenceUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
listContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ValueTypes["ContentReferenceWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceConnection"]],
getLink?: [{	by: ValueTypes["LinkUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>},ValueTypes["Link"]],
listLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Link"]],
paginateLink?: [{	filter?: ValueTypes["LinkWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkConnection"]],
getLinkable?: [{	by: ValueTypes["LinkableUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
listLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Linkable"]],
paginateLinkable?: [{	filter?: ValueTypes["LinkableWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LinkableOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LinkableConnection"]],
getContentReferenceLinkableItem?: [{	by: ValueTypes["ContentReferenceLinkableItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ValueTypes["ContentReferenceLinkableItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ValueTypes["LocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
listLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Locale"]],
paginateLocale?: [{	filter?: ValueTypes["LocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["LocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["LocaleConnection"]],
getRecipe?: [{	by: ValueTypes["RecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
listRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Recipe"]],
paginateRecipe?: [{	filter?: ValueTypes["RecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeConnection"]],
getRecipeLocale?: [{	by: ValueTypes["RecipeLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ValueTypes["RecipeLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeLocaleConnection"]],
getImage?: [{	by: ValueTypes["ImageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>},ValueTypes["Image"]],
listImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Image"]],
paginateImage?: [{	filter?: ValueTypes["ImageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImageConnection"]],
getUser?: [{	by: ValueTypes["UserUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>},ValueTypes["User"]],
listUser?: [{	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["UserOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["User"]],
paginateUser?: [{	filter?: ValueTypes["UserWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["UserOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["UserConnection"]],
getStep?: [{	by: ValueTypes["StepUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>},ValueTypes["Step"]],
listStep?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Step"]],
paginateStep?: [{	filter?: ValueTypes["StepWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepConnection"]],
getStepLocale?: [{	by: ValueTypes["StepLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
listStepLocale?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocale"]],
paginateStepLocale?: [{	filter?: ValueTypes["StepLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepLocaleConnection"]],
getPinnedRecipe?: [{	by: ValueTypes["PinnedRecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
listPinnedRecipe?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipe"]],
paginatePinnedRecipe?: [{	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipeOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipeConnection"]],
validateCreatePinnedRecipe?: [{	data: ValueTypes["PinnedRecipeCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getImplemetationDate?: [{	by: ValueTypes["ImplemetationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
listImplemetationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDate"]],
paginateImplemetationDate?: [{	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["ImplemetationDateOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDateConnection"]],
validateCreateImplemetationDate?: [{	data: ValueTypes["ImplemetationDateCreateInput"] | Variable<any, string>},ValueTypes["_ValidationResult"]],
getStepGroup?: [{	by: ValueTypes["StepGroupUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
listStepGroup?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroup"]],
paginateStepGroup?: [{	filter?: ValueTypes["StepGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupConnection"]],
getStepGroupLocale?: [{	by: ValueTypes["StepGroupLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
listStepGroupLocale?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocale"]],
paginateStepGroupLocale?: [{	filter?: ValueTypes["StepGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupLocaleConnection"]],
getHomePage?: [{	by: ValueTypes["HomePageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePage"]],
listHomePage?: [{	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["HomePage"]],
paginateHomePage?: [{	filter?: ValueTypes["HomePageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageConnection"]],
getHomePageLocale?: [{	by: ValueTypes["HomePageLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
listHomePageLocale?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocale"]],
paginateHomePageLocale?: [{	filter?: ValueTypes["HomePageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["HomePageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["HomePageLocaleConnection"]],
getSeo?: [{	by: ValueTypes["SeoUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
listSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Seo"]],
paginateSeo?: [{	filter?: ValueTypes["SeoWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["SeoOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["SeoConnection"]],
getRecipeList?: [{	by: ValueTypes["RecipeListUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeList"]],
listRecipeList?: [{	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeList"]],
paginateRecipeList?: [{	filter?: ValueTypes["RecipeListWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListConnection"]],
getRecipeListItem?: [{	by: ValueTypes["RecipeListItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["RecipeListItem"]],
listRecipeListItem?: [{	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListItem"]],
paginateRecipeListItem?: [{	filter?: ValueTypes["RecipeListItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["RecipeListItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["RecipeListItemConnection"]],
getCategory?: [{	by: ValueTypes["CategoryUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>},ValueTypes["Category"]],
listCategory?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Category"]],
paginateCategory?: [{	filter?: ValueTypes["CategoryWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryConnection"]],
getCategoryLocale?: [{	by: ValueTypes["CategoryLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
listCategoryLocale?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocale"]],
paginateCategoryLocale?: [{	filter?: ValueTypes["CategoryLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["CategoryLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["CategoryLocaleConnection"]],
getStepGroupItem?: [{	by: ValueTypes["StepGroupItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
listStepGroupItem?: [{	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupItem"]],
paginateStepGroupItem?: [{	filter?: ValueTypes["StepGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepGroupItemConnection"]],
getTip?: [{	by: ValueTypes["TipUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
listTip?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
paginateTip?: [{	filter?: ValueTypes["TipWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipConnection"]],
getTipLocale?: [{	by: ValueTypes["TipLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
listTipLocale?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocale"]],
paginateTipLocale?: [{	filter?: ValueTypes["TipLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipLocaleConnection"]],
getStepModification?: [{	by: ValueTypes["StepModificationUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>},ValueTypes["StepModification"]],
listStepModification?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["StepModification"]],
paginateStepModification?: [{	filter?: ValueTypes["StepModificationWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["StepModificationOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["StepModificationConnection"]],
getTipGroup?: [{	by: ValueTypes["TipGroupUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
listTipGroup?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroup"]],
paginateTipGroup?: [{	filter?: ValueTypes["TipGroupWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupConnection"]],
getTipGroupItem?: [{	by: ValueTypes["TipGroupItemUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupItem"]],
listTipGroupItem?: [{	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupItem"]],
paginateTipGroupItem?: [{	filter?: ValueTypes["TipGroupItemWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupItemOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupItemConnection"]],
getTipGroupLocale?: [{	by: ValueTypes["TipGroupLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
listTipGroupLocale?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocale"]],
paginateTipGroupLocale?: [{	filter?: ValueTypes["TipGroupLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["TipGroupLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["TipGroupLocaleConnection"]],
getPinnedRecipesPage?: [{	by: ValueTypes["PinnedRecipesPageUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPage"]],
listPinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPage"]],
paginatePinnedRecipesPage?: [{	filter?: ValueTypes["PinnedRecipesPageWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageConnection"]],
getPinnedRecipesPageLocale?: [{	by: ValueTypes["PinnedRecipesPageLocaleUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
listPinnedRecipesPageLocale?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	offset?: number | undefined | null | Variable<any, string>,	limit?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocale"]],
paginatePinnedRecipesPageLocale?: [{	filter?: ValueTypes["PinnedRecipesPageLocaleWhere"] | undefined | null | Variable<any, string>,	orderBy?: Array<ValueTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null | Variable<any, string>,	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipesPageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["Info"]: AliasType<{
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
createPinnedRecipe?: [{	data: ValueTypes["PinnedRecipeCreateInput"] | Variable<any, string>},ValueTypes["PinnedRecipeCreateResult"]],
deletePinnedRecipe?: [{	by: ValueTypes["PinnedRecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipeDeleteResult"]],
createImplemetationDate?: [{	data: ValueTypes["ImplemetationDateCreateInput"] | Variable<any, string>},ValueTypes["ImplemetationDateCreateResult"]],
deleteImplemetationDate?: [{	by: ValueTypes["ImplemetationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDateDeleteResult"]],
transaction?: [{	options?: ValueTypes["MutationTransactionOptions"] | undefined | null | Variable<any, string>},ValueTypes["MutationTransaction"]],
	query?:ValueTypes["Query"],
generateUploadUrl?: [{	contentType: string | Variable<any, string>,	expiration?: number | undefined | null | Variable<any, string>,	prefix?: string | undefined | null | Variable<any, string>},ValueTypes["S3SignedUpload"]],
generateReadUrl?: [{	objectKey: string | Variable<any, string>,	expiration?: number | undefined | null | Variable<any, string>},ValueTypes["S3SignedRead"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["PinnedRecipe"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["MutationResult"]:AliasType<{
		ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"];
		['...on PinnedRecipeCreateResult']?: Omit<ValueTypes["PinnedRecipeCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on PinnedRecipeDeleteResult']?: Omit<ValueTypes["PinnedRecipeDeleteResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImplemetationDateCreateResult']?: Omit<ValueTypes["ImplemetationDateCreateResult"],keyof ValueTypes["MutationResult"]>;
		['...on ImplemetationDateDeleteResult']?: Omit<ValueTypes["ImplemetationDateDeleteResult"],keyof ValueTypes["MutationResult"]>;
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
	["PinnedRecipeDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["PinnedRecipe"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ImplemetationDate"],
	validation?:ValueTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	node?:ValueTypes["ImplemetationDate"],
		__typename?: boolean | `@${string}`
}>;
	["MutationTransaction"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ValueTypes["_MutationError"],
	validation?:ValueTypes["_ValidationResult"],
createPinnedRecipe?: [{	data: ValueTypes["PinnedRecipeCreateInput"] | Variable<any, string>},ValueTypes["PinnedRecipeCreateResult"]],
deletePinnedRecipe?: [{	by: ValueTypes["PinnedRecipeUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["PinnedRecipeWhere"] | undefined | null | Variable<any, string>},ValueTypes["PinnedRecipeDeleteResult"]],
createImplemetationDate?: [{	data: ValueTypes["ImplemetationDateCreateInput"] | Variable<any, string>},ValueTypes["ImplemetationDateCreateResult"]],
deleteImplemetationDate?: [{	by: ValueTypes["ImplemetationDateUniqueWhere"] | Variable<any, string>,	filter?: ValueTypes["ImplemetationDateWhere"] | undefined | null | Variable<any, string>},ValueTypes["ImplemetationDateDeleteResult"]],
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
 */
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
getContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentBlockConnection"]],
getContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReference"]],
listContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceConnection"]],
getLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
listLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Link"]],
paginateLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkConnection"]],
getLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
listLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Linkable"]],
paginateLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkableConnection"]],
getContentReferenceLinkableItem?: [{	by: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
listLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Locale"]],
paginateLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LocaleConnection"]],
getRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
listRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Recipe"]],
paginateRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeConnection"]],
getRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
getImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
listImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Image"]],
paginateImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImageConnection"]],
getUser?: [{	by: ResolverInputTypes["UserUniqueWhere"],	filter?: ResolverInputTypes["UserWhere"] | undefined | null},ResolverInputTypes["User"]],
listUser?: [{	filter?: ResolverInputTypes["UserWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["UserOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["User"]],
paginateUser?: [{	filter?: ResolverInputTypes["UserWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["UserOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["UserConnection"]],
getStep?: [{	by: ResolverInputTypes["StepUniqueWhere"],	filter?: ResolverInputTypes["StepWhere"] | undefined | null},ResolverInputTypes["Step"]],
listStep?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Step"]],
paginateStep?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepConnection"]],
getStepLocale?: [{	by: ResolverInputTypes["StepLocaleUniqueWhere"],	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
listStepLocale?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepLocale"]],
paginateStepLocale?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepLocaleConnection"]],
getPinnedRecipe?: [{	by: ResolverInputTypes["PinnedRecipeUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
listPinnedRecipe?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipe"]],
paginatePinnedRecipe?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipeConnection"]],
validateCreatePinnedRecipe?: [{	data: ResolverInputTypes["PinnedRecipeCreateInput"]},ResolverInputTypes["_ValidationResult"]],
getImplemetationDate?: [{	by: ResolverInputTypes["ImplemetationDateUniqueWhere"],	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null},ResolverInputTypes["ImplemetationDate"]],
listImplemetationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ImplemetationDate"]],
paginateImplemetationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImplemetationDateConnection"]],
validateCreateImplemetationDate?: [{	data: ResolverInputTypes["ImplemetationDateCreateInput"]},ResolverInputTypes["_ValidationResult"]],
getStepGroup?: [{	by: ResolverInputTypes["StepGroupUniqueWhere"],	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null},ResolverInputTypes["StepGroup"]],
listStepGroup?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroup"]],
paginateStepGroup?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupConnection"]],
getStepGroupLocale?: [{	by: ResolverInputTypes["StepGroupLocaleUniqueWhere"],	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null},ResolverInputTypes["StepGroupLocale"]],
listStepGroupLocale?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupLocale"]],
paginateStepGroupLocale?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupLocaleConnection"]],
getHomePage?: [{	by: ResolverInputTypes["HomePageUniqueWhere"],	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null},ResolverInputTypes["HomePage"]],
listHomePage?: [{	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["HomePage"]],
paginateHomePage?: [{	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["HomePageConnection"]],
getHomePageLocale?: [{	by: ResolverInputTypes["HomePageLocaleUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
listHomePageLocale?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["HomePageLocale"]],
paginateHomePageLocale?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["HomePageLocaleConnection"]],
getSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
listSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Seo"]],
paginateSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["SeoConnection"]],
getRecipeList?: [{	by: ResolverInputTypes["RecipeListUniqueWhere"],	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null},ResolverInputTypes["RecipeList"]],
listRecipeList?: [{	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeList"]],
paginateRecipeList?: [{	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeListConnection"]],
getRecipeListItem?: [{	by: ResolverInputTypes["RecipeListItemUniqueWhere"],	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null},ResolverInputTypes["RecipeListItem"]],
listRecipeListItem?: [{	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeListItem"]],
paginateRecipeListItem?: [{	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeListItemConnection"]],
getCategory?: [{	by: ResolverInputTypes["CategoryUniqueWhere"],	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null},ResolverInputTypes["Category"]],
listCategory?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Category"]],
paginateCategory?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryConnection"]],
getCategoryLocale?: [{	by: ResolverInputTypes["CategoryLocaleUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
listCategoryLocale?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["CategoryLocale"]],
paginateCategoryLocale?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryLocaleConnection"]],
getStepGroupItem?: [{	by: ResolverInputTypes["StepGroupItemUniqueWhere"],	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null},ResolverInputTypes["StepGroupItem"]],
listStepGroupItem?: [{	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupItem"]],
paginateStepGroupItem?: [{	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupItemConnection"]],
getTip?: [{	by: ResolverInputTypes["TipUniqueWhere"],	filter?: ResolverInputTypes["TipWhere"] | undefined | null},ResolverInputTypes["Tip"]],
listTip?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Tip"]],
paginateTip?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipConnection"]],
getTipLocale?: [{	by: ResolverInputTypes["TipLocaleUniqueWhere"],	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null},ResolverInputTypes["TipLocale"]],
listTipLocale?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipLocale"]],
paginateTipLocale?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipLocaleConnection"]],
getStepModification?: [{	by: ResolverInputTypes["StepModificationUniqueWhere"],	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null},ResolverInputTypes["StepModification"]],
listStepModification?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepModification"]],
paginateStepModification?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepModificationConnection"]],
getTipGroup?: [{	by: ResolverInputTypes["TipGroupUniqueWhere"],	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null},ResolverInputTypes["TipGroup"]],
listTipGroup?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroup"]],
paginateTipGroup?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupConnection"]],
getTipGroupItem?: [{	by: ResolverInputTypes["TipGroupItemUniqueWhere"],	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null},ResolverInputTypes["TipGroupItem"]],
listTipGroupItem?: [{	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupItem"]],
paginateTipGroupItem?: [{	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupItemConnection"]],
getTipGroupLocale?: [{	by: ResolverInputTypes["TipGroupLocaleUniqueWhere"],	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null},ResolverInputTypes["TipGroupLocale"]],
listTipGroupLocale?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupLocale"]],
paginateTipGroupLocale?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupLocaleConnection"]],
getPinnedRecipesPage?: [{	by: ResolverInputTypes["PinnedRecipesPageUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPage"]],
listPinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipesPage"]],
paginatePinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageConnection"]],
getPinnedRecipesPageLocale?: [{	by: ResolverInputTypes["PinnedRecipesPageLocaleUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
listPinnedRecipesPageLocale?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
paginatePinnedRecipesPageLocale?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocaleConnection"]],
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
	homePage?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,
	category?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,
	pinnedRecipesPage?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["LinkableWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["LinkableWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["LinkableWhere"] | undefined | null
};
	["HomePageLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	base?: ResolverInputTypes["HomePageWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoWhere"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["HomePageLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["HomePageLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null
};
	["HomePageWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	locales?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,
	unique?: ResolverInputTypes["OneCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["HomePageWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["HomePageWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["HomePageWhere"] | undefined | null
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
	["One"]:One;
	["LocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	code?: ResolverInputTypes["StringCondition"] | undefined | null,
	label?: ResolverInputTypes["StringCondition"] | undefined | null,
	recipes?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,
	steps?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,
	stepsGroups?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,
	homePage?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,
	categories?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,
	tips?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,
	tipGroups?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,
	pinnedRecipesPage?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["LocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["LocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["LocaleWhere"] | undefined | null
};
	["RecipeLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	description?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	tileDescription?: ResolverInputTypes["StringCondition"] | undefined | null,
	link?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["RecipeLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null
};
	["RecipeWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	publishDate?: ResolverInputTypes["DateCondition"] | undefined | null,
	price?: ResolverInputTypes["StringCondition"] | undefined | null,
	locales?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,
	mainImage?: ResolverInputTypes["ImageWhere"] | undefined | null,
	pinnedRecipes?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,
	createdBy?: ResolverInputTypes["UserWhere"] | undefined | null,
	stepsGroups?: ResolverInputTypes["StepGroupWhere"] | undefined | null,
	categories?: ResolverInputTypes["CategoryWhere"] | undefined | null,
	tileImage?: ResolverInputTypes["ImageWhere"] | undefined | null,
	tipGroups?: ResolverInputTypes["TipGroupWhere"] | undefined | null,
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
	["Date"]:unknown;
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
	["PinnedRecipeWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	user?: ResolverInputTypes["UserWhere"] | undefined | null,
	derivedBy?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	implementationDate?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,
	modification?: ResolverInputTypes["StepModificationWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["PinnedRecipeWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["PinnedRecipeWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null
};
	["UserWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	firstName?: ResolverInputTypes["StringCondition"] | undefined | null,
	lastName?: ResolverInputTypes["StringCondition"] | undefined | null,
	email?: ResolverInputTypes["StringCondition"] | undefined | null,
	image?: ResolverInputTypes["ImageWhere"] | undefined | null,
	pinnedRecipes?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,
	createdRecipes?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["UserWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["UserWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["UserWhere"] | undefined | null
};
	["ImplemetationDateWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	step?: ResolverInputTypes["StepWhere"] | undefined | null,
	pinnedRecipe?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,
	date?: ResolverInputTypes["DateTimeCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["ImplemetationDateWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["ImplemetationDateWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null
};
	["StepWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	locales?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,
	implementationDate?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,
	hasTimer?: ResolverInputTypes["BooleanCondition"] | undefined | null,
	timerCount?: ResolverInputTypes["IntCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["StepWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["StepWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["StepWhere"] | undefined | null
};
	["StepLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["StepWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	modificationDate?: ResolverInputTypes["StepModificationWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["StepLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["StepLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["StepLocaleWhere"] | undefined | null
};
	["StepModificationWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	date?: ResolverInputTypes["DateTimeCondition"] | undefined | null,
	pinnedRecipe?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,
	step?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["StepModificationWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["StepModificationWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["StepModificationWhere"] | undefined | null
};
	["DateTimeCondition"]: {
	and?: Array<ResolverInputTypes["DateTimeCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["DateTimeCondition"]> | undefined | null,
	not?: ResolverInputTypes["DateTimeCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["DateTime"] | undefined | null,
	notEq?: ResolverInputTypes["DateTime"] | undefined | null,
	in?: Array<ResolverInputTypes["DateTime"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["DateTime"]> | undefined | null,
	lt?: ResolverInputTypes["DateTime"] | undefined | null,
	lte?: ResolverInputTypes["DateTime"] | undefined | null,
	gt?: ResolverInputTypes["DateTime"] | undefined | null,
	gte?: ResolverInputTypes["DateTime"] | undefined | null
};
	["DateTime"]:unknown;
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
	["StepGroupWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	locales?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,
	items?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["StepGroupWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["StepGroupWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["StepGroupWhere"] | undefined | null
};
	["StepGroupLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	buttonTitle?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["StepGroupWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	description?: ResolverInputTypes["StringCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null
};
	["StepGroupItemWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	type?: ResolverInputTypes["StepGroupItemTypeCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	group?: ResolverInputTypes["StepGroupWhere"] | undefined | null,
	step?: ResolverInputTypes["StepWhere"] | undefined | null,
	tip?: ResolverInputTypes["TipWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["StepGroupItemWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["StepGroupItemWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null
};
	["StepGroupItemTypeCondition"]: {
	and?: Array<ResolverInputTypes["StepGroupItemTypeCondition"]> | undefined | null,
	or?: Array<ResolverInputTypes["StepGroupItemTypeCondition"]> | undefined | null,
	not?: ResolverInputTypes["StepGroupItemTypeCondition"] | undefined | null,
	null?: boolean | undefined | null,
	isNull?: boolean | undefined | null,
	eq?: ResolverInputTypes["StepGroupItemType"] | undefined | null,
	notEq?: ResolverInputTypes["StepGroupItemType"] | undefined | null,
	in?: Array<ResolverInputTypes["StepGroupItemType"]> | undefined | null,
	notIn?: Array<ResolverInputTypes["StepGroupItemType"]> | undefined | null,
	lt?: ResolverInputTypes["StepGroupItemType"] | undefined | null,
	lte?: ResolverInputTypes["StepGroupItemType"] | undefined | null,
	gt?: ResolverInputTypes["StepGroupItemType"] | undefined | null,
	gte?: ResolverInputTypes["StepGroupItemType"] | undefined | null
};
	["StepGroupItemType"]:StepGroupItemType;
	["TipWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	locales?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["TipWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["TipWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["TipWhere"] | undefined | null
};
	["TipLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["TipWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["TipLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["TipLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["TipLocaleWhere"] | undefined | null
};
	["CategoryWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	locales?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,
	recipes?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	image?: ResolverInputTypes["ImageWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["CategoryWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["CategoryWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["CategoryWhere"] | undefined | null
};
	["CategoryLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["CategoryWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	description?: ResolverInputTypes["StringCondition"] | undefined | null,
	and?: Array<ResolverInputTypes["CategoryLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["CategoryLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null
};
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
	["TipGroupWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	items?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,
	locales?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["TipGroupWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["TipGroupWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["TipGroupWhere"] | undefined | null
};
	["TipGroupItemWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	group?: ResolverInputTypes["TipGroupWhere"] | undefined | null,
	tip?: ResolverInputTypes["TipWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["TipGroupItemWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["TipGroupItemWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null
};
	["TipGroupLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	description?: ResolverInputTypes["StringCondition"] | undefined | null,
	base?: ResolverInputTypes["TipGroupWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null
};
	["PinnedRecipesPageLocaleWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	title?: ResolverInputTypes["StringCondition"] | undefined | null,
	link?: ResolverInputTypes["LinkableWhere"] | undefined | null,
	base?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null
};
	["PinnedRecipesPageWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	unique?: ResolverInputTypes["OneCondition"] | undefined | null,
	locales?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null
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
homePage?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
category?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
recipe?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
pinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
		__typename?: boolean | `@${string}`
}>;
	["LinkableMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	url?:ResolverInputTypes["FieldMeta"],
	homePage?:ResolverInputTypes["FieldMeta"],
	category?:ResolverInputTypes["FieldMeta"],
	recipe?:ResolverInputTypes["FieldMeta"],
	pinnedRecipesPage?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocale"]: AliasType<{
	_meta?:ResolverInputTypes["HomePageLocaleMeta"],
	id?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null},ResolverInputTypes["HomePage"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
link?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
seo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
	title?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
	link?:ResolverInputTypes["FieldMeta"],
	seo?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["HomePage"]: AliasType<{
	_meta?:ResolverInputTypes["HomePageMeta"],
	id?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["HomePageLocale"]],
	unique?:boolean | `@${string}`,
localesByLocale?: [{	by: ResolverInputTypes["HomePageLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
localesByLink?: [{	by: ResolverInputTypes["HomePageLocalesByLinkUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
localesBySeo?: [{	by: ResolverInputTypes["HomePageLocalesBySeoUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
paginateLocales?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["HomePageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["HomePageMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
	unique?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["HomePageOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null,
	link?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	seo?: ResolverInputTypes["SeoOrderBy"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["OrderDirection"]:OrderDirection;
	["HomePageOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	unique?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["LocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	code?: ResolverInputTypes["OrderDirection"] | undefined | null,
	label?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["LinkableOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	url?: ResolverInputTypes["OrderDirection"] | undefined | null,
	homePage?: ResolverInputTypes["HomePageLocaleOrderBy"] | undefined | null,
	category?: ResolverInputTypes["CategoryLocaleOrderBy"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeLocaleOrderBy"] | undefined | null,
	pinnedRecipesPage?: ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"] | undefined | null
};
	["CategoryLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["CategoryOrderBy"] | undefined | null,
	seo?: ResolverInputTypes["SeoOrderBy"] | undefined | null,
	link?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null,
	description?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["CategoryOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	image?: ResolverInputTypes["ImageOrderBy"] | undefined | null
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
	["RecipeLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	description?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["RecipeOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null,
	tileDescription?: ResolverInputTypes["OrderDirection"] | undefined | null,
	link?: ResolverInputTypes["LinkableOrderBy"] | undefined | null
};
	["RecipeOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	publishDate?: ResolverInputTypes["OrderDirection"] | undefined | null,
	price?: ResolverInputTypes["OrderDirection"] | undefined | null,
	mainImage?: ResolverInputTypes["ImageOrderBy"] | undefined | null,
	createdBy?: ResolverInputTypes["UserOrderBy"] | undefined | null,
	tileImage?: ResolverInputTypes["ImageOrderBy"] | undefined | null
};
	["UserOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	firstName?: ResolverInputTypes["OrderDirection"] | undefined | null,
	lastName?: ResolverInputTypes["OrderDirection"] | undefined | null,
	email?: ResolverInputTypes["OrderDirection"] | undefined | null,
	image?: ResolverInputTypes["ImageOrderBy"] | undefined | null
};
	["PinnedRecipesPageLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	link?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	base?: ResolverInputTypes["PinnedRecipesPageOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null,
	seo?: ResolverInputTypes["SeoOrderBy"] | undefined | null
};
	["PinnedRecipesPageOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	unique?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["HomePageLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["LocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	code?: string | undefined | null,
	recipes?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	steps?: ResolverInputTypes["StepLocaleUniqueWhere"] | undefined | null,
	stepsGroups?: ResolverInputTypes["StepGroupLocaleUniqueWhere"] | undefined | null,
	homePage?: ResolverInputTypes["HomePageLocaleUniqueWhere"] | undefined | null,
	categories?: ResolverInputTypes["CategoryLocaleUniqueWhere"] | undefined | null,
	tips?: ResolverInputTypes["TipLocaleUniqueWhere"] | undefined | null,
	tipGroups?: ResolverInputTypes["TipGroupLocaleUniqueWhere"] | undefined | null,
	pinnedRecipesPage?: ResolverInputTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined | null
};
	["RecipeLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["RecipeUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["RecipeUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	locales?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	pinnedRecipes?: ResolverInputTypes["PinnedRecipeUniqueWhere"] | undefined | null,
	stepsGroups?: ResolverInputTypes["StepGroupUniqueWhere"] | undefined | null,
	tipGroups?: ResolverInputTypes["TipGroupUniqueWhere"] | undefined | null
};
	["PinnedRecipeUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	implementationDate?: ResolverInputTypes["ImplemetationDateUniqueWhere"] | undefined | null,
	modification?: ResolverInputTypes["StepModificationUniqueWhere"] | undefined | null
};
	["ImplemetationDateUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	pinnedRecipe?: ResolverInputTypes["PinnedRecipeUniqueWhere"] | undefined | null,
	step?: ResolverInputTypes["StepUniqueWhere"] | undefined | null
};
	["StepUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	locales?: ResolverInputTypes["StepLocaleUniqueWhere"] | undefined | null,
	implementationDate?: ResolverInputTypes["ImplemetationDateUniqueWhere"] | undefined | null
};
	["StepLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["StepUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	modificationDate?: ResolverInputTypes["StepModificationUniqueWhere"] | undefined | null
};
	["StepModificationUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
	["StepGroupUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	locales?: ResolverInputTypes["StepGroupLocaleUniqueWhere"] | undefined | null,
	items?: ResolverInputTypes["StepGroupItemUniqueWhere"] | undefined | null
};
	["StepGroupLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["StepGroupUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["StepGroupItemUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	step?: ResolverInputTypes["StepUniqueWhere"] | undefined | null,
	tip?: ResolverInputTypes["TipUniqueWhere"] | undefined | null
};
	["TipUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	locales?: ResolverInputTypes["TipLocaleUniqueWhere"] | undefined | null
};
	["TipLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["TipUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["TipGroupUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	items?: ResolverInputTypes["TipGroupItemUniqueWhere"] | undefined | null,
	locales?: ResolverInputTypes["TipGroupLocaleUniqueWhere"] | undefined | null
};
	["TipGroupItemUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	tip?: ResolverInputTypes["TipUniqueWhere"] | undefined | null
};
	["TipGroupLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["TipGroupUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["LinkableUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	url?: string | undefined | null,
	homePage?: ResolverInputTypes["HomePageLocaleUniqueWhere"] | undefined | null,
	category?: ResolverInputTypes["CategoryLocaleUniqueWhere"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null,
	pinnedRecipesPage?: ResolverInputTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined | null
};
	["HomePageLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["HomePageUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["HomePageUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	unique?: ResolverInputTypes["One"] | undefined | null,
	locales?: ResolverInputTypes["HomePageLocaleUniqueWhere"] | undefined | null
};
	["SeoUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	ogImage?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null
};
	["ImageUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
	["CategoryLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["CategoryUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["CategoryUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	locales?: ResolverInputTypes["CategoryLocaleUniqueWhere"] | undefined | null,
	image?: ResolverInputTypes["ImageUniqueWhere"] | undefined | null
};
	["PinnedRecipesPageLocaleUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	base?: ResolverInputTypes["PinnedRecipesPageUniqueWhere"] | undefined | null,
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null,
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null,
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["PinnedRecipesPageUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	unique?: ResolverInputTypes["One"] | undefined | null,
	locales?: ResolverInputTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined | null
};
	["HomePageLocalesByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["HomePageLocalesBySeoUniqueWhere"]: {
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["HomePageLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["HomePageLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PageInfo"]: AliasType<{
	totalCount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["HomePageLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["HomePageLocale"],
		__typename?: boolean | `@${string}`
}>;
	["Locale"]: AliasType<{
	_meta?:ResolverInputTypes["LocaleMeta"],
	id?:boolean | `@${string}`,
	code?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
recipes?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
steps?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepLocale"]],
stepsGroups?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupLocale"]],
homePage?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["HomePageLocale"]],
categories?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["CategoryLocale"]],
tips?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipLocale"]],
tipGroups?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupLocale"]],
pinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
recipesByBase?: [{	by: ResolverInputTypes["LocaleRecipesByBaseUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
recipesByLink?: [{	by: ResolverInputTypes["LocaleRecipesByLinkUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
stepsByBase?: [{	by: ResolverInputTypes["LocaleStepsByBaseUniqueWhere"],	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
stepsByModificationDate?: [{	by: ResolverInputTypes["LocaleStepsByModificationDateUniqueWhere"],	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
stepsGroupsByBase?: [{	by: ResolverInputTypes["LocaleStepsGroupsByBaseUniqueWhere"],	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null},ResolverInputTypes["StepGroupLocale"]],
homePageByBase?: [{	by: ResolverInputTypes["LocaleHomePageByBaseUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
homePageByLink?: [{	by: ResolverInputTypes["LocaleHomePageByLinkUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
homePageBySeo?: [{	by: ResolverInputTypes["LocaleHomePageBySeoUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
categoriesByBase?: [{	by: ResolverInputTypes["LocaleCategoriesByBaseUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
categoriesBySeo?: [{	by: ResolverInputTypes["LocaleCategoriesBySeoUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
categoriesByLink?: [{	by: ResolverInputTypes["LocaleCategoriesByLinkUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
tipsByBase?: [{	by: ResolverInputTypes["LocaleTipsByBaseUniqueWhere"],	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null},ResolverInputTypes["TipLocale"]],
tipGroupsByBase?: [{	by: ResolverInputTypes["LocaleTipGroupsByBaseUniqueWhere"],	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null},ResolverInputTypes["TipGroupLocale"]],
pinnedRecipesPageByBase?: [{	by: ResolverInputTypes["LocalePinnedRecipesPageByBaseUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
pinnedRecipesPageByLink?: [{	by: ResolverInputTypes["LocalePinnedRecipesPageByLinkUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
pinnedRecipesPageBySeo?: [{	by: ResolverInputTypes["LocalePinnedRecipesPageBySeoUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
paginateRecipes?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
paginateSteps?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepLocaleConnection"]],
paginateStepsGroups?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupLocaleConnection"]],
paginateHomePage?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["HomePageLocaleConnection"]],
paginateCategories?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryLocaleConnection"]],
paginateTips?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipLocaleConnection"]],
paginateTipGroups?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupLocaleConnection"]],
paginatePinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["LocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	code?:ResolverInputTypes["FieldMeta"],
	label?:ResolverInputTypes["FieldMeta"],
	recipes?:ResolverInputTypes["FieldMeta"],
	steps?:ResolverInputTypes["FieldMeta"],
	stepsGroups?:ResolverInputTypes["FieldMeta"],
	homePage?:ResolverInputTypes["FieldMeta"],
	categories?:ResolverInputTypes["FieldMeta"],
	tips?:ResolverInputTypes["FieldMeta"],
	tipGroups?:ResolverInputTypes["FieldMeta"],
	pinnedRecipesPage?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocale"]: AliasType<{
	_meta?:ResolverInputTypes["RecipeLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
	tileDescription?:boolean | `@${string}`,
link?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	description?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
	tileDescription?:ResolverInputTypes["FieldMeta"],
	link?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Recipe"]: AliasType<{
	_meta?:ResolverInputTypes["RecipeMeta"],
	id?:boolean | `@${string}`,
	publishDate?:boolean | `@${string}`,
	price?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
mainImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
pinnedRecipes?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipe"]],
createdBy?: [{	filter?: ResolverInputTypes["UserWhere"] | undefined | null},ResolverInputTypes["User"]],
stepsGroups?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroup"]],
categories?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Category"]],
tileImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
tipGroups?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroup"]],
localesByLocale?: [{	by: ResolverInputTypes["RecipeLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
localesByLink?: [{	by: ResolverInputTypes["RecipeLocalesByLinkUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
pinnedRecipesByImplementationDate?: [{	by: ResolverInputTypes["RecipePinnedRecipesByImplementationDateUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
pinnedRecipesByModification?: [{	by: ResolverInputTypes["RecipePinnedRecipesByModificationUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
stepsGroupsByLocales?: [{	by: ResolverInputTypes["RecipeStepsGroupsByLocalesUniqueWhere"],	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null},ResolverInputTypes["StepGroup"]],
stepsGroupsByItems?: [{	by: ResolverInputTypes["RecipeStepsGroupsByItemsUniqueWhere"],	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null},ResolverInputTypes["StepGroup"]],
tipGroupsByItems?: [{	by: ResolverInputTypes["RecipeTipGroupsByItemsUniqueWhere"],	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null},ResolverInputTypes["TipGroup"]],
tipGroupsByLocales?: [{	by: ResolverInputTypes["RecipeTipGroupsByLocalesUniqueWhere"],	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null},ResolverInputTypes["TipGroup"]],
paginateLocales?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
paginatePinnedRecipes?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipeConnection"]],
paginateStepsGroups?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupConnection"]],
paginateCategories?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryConnection"]],
paginateTipGroups?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	publishDate?:ResolverInputTypes["FieldMeta"],
	price?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
	mainImage?:ResolverInputTypes["FieldMeta"],
	pinnedRecipes?:ResolverInputTypes["FieldMeta"],
	createdBy?:ResolverInputTypes["FieldMeta"],
	stepsGroups?:ResolverInputTypes["FieldMeta"],
	categories?:ResolverInputTypes["FieldMeta"],
	tileImage?:ResolverInputTypes["FieldMeta"],
	tipGroups?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
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
	["PinnedRecipe"]: AliasType<{
	_meta?:ResolverInputTypes["PinnedRecipeMeta"],
	id?:boolean | `@${string}`,
user?: [{	filter?: ResolverInputTypes["UserWhere"] | undefined | null},ResolverInputTypes["User"]],
derivedBy?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
implementationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ImplemetationDate"]],
modification?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepModification"]],
implementationDateByStep?: [{	by: ResolverInputTypes["PinnedRecipeImplementationDateByStepUniqueWhere"],	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null},ResolverInputTypes["ImplemetationDate"]],
paginateImplementationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImplemetationDateConnection"]],
paginateModification?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepModificationConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	user?:ResolverInputTypes["FieldMeta"],
	derivedBy?:ResolverInputTypes["FieldMeta"],
	implementationDate?:ResolverInputTypes["FieldMeta"],
	modification?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["User"]: AliasType<{
	_meta?:ResolverInputTypes["UserMeta"],
	id?:boolean | `@${string}`,
	firstName?:boolean | `@${string}`,
	lastName?:boolean | `@${string}`,
	email?:boolean | `@${string}`,
image?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
pinnedRecipes?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipe"]],
createdRecipes?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Recipe"]],
pinnedRecipesByImplementationDate?: [{	by: ResolverInputTypes["UserPinnedRecipesByImplementationDateUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
pinnedRecipesByModification?: [{	by: ResolverInputTypes["UserPinnedRecipesByModificationUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
createdRecipesByLocales?: [{	by: ResolverInputTypes["UserCreatedRecipesByLocalesUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
createdRecipesByPinnedRecipes?: [{	by: ResolverInputTypes["UserCreatedRecipesByPinnedRecipesUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
createdRecipesByStepsGroups?: [{	by: ResolverInputTypes["UserCreatedRecipesByStepsGroupsUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
createdRecipesByTipGroups?: [{	by: ResolverInputTypes["UserCreatedRecipesByTipGroupsUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
paginatePinnedRecipes?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipeConnection"]],
paginateCreatedRecipes?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["UserMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	firstName?:ResolverInputTypes["FieldMeta"],
	lastName?:ResolverInputTypes["FieldMeta"],
	email?:ResolverInputTypes["FieldMeta"],
	image?:ResolverInputTypes["FieldMeta"],
	pinnedRecipes?:ResolverInputTypes["FieldMeta"],
	createdRecipes?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	user?: ResolverInputTypes["UserOrderBy"] | undefined | null,
	derivedBy?: ResolverInputTypes["RecipeOrderBy"] | undefined | null
};
	["UserPinnedRecipesByImplementationDateUniqueWhere"]: {
	implementationDate?: ResolverInputTypes["ImplemetationDateUniqueWhere"] | undefined | null
};
	["UserPinnedRecipesByModificationUniqueWhere"]: {
	modification?: ResolverInputTypes["StepModificationUniqueWhere"] | undefined | null
};
	["UserCreatedRecipesByLocalesUniqueWhere"]: {
	locales?: ResolverInputTypes["RecipeLocaleUniqueWhere"] | undefined | null
};
	["UserCreatedRecipesByPinnedRecipesUniqueWhere"]: {
	pinnedRecipes?: ResolverInputTypes["PinnedRecipeUniqueWhere"] | undefined | null
};
	["UserCreatedRecipesByStepsGroupsUniqueWhere"]: {
	stepsGroups?: ResolverInputTypes["StepGroupUniqueWhere"] | undefined | null
};
	["UserCreatedRecipesByTipGroupsUniqueWhere"]: {
	tipGroups?: ResolverInputTypes["TipGroupUniqueWhere"] | undefined | null
};
	["PinnedRecipeConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["PinnedRecipeEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeEdge"]: AliasType<{
	node?:ResolverInputTypes["PinnedRecipe"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["RecipeEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeEdge"]: AliasType<{
	node?:ResolverInputTypes["Recipe"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDate"]: AliasType<{
	_meta?:ResolverInputTypes["ImplemetationDateMeta"],
	id?:boolean | `@${string}`,
step?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null},ResolverInputTypes["Step"]],
pinnedRecipe?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
	date?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	step?:ResolverInputTypes["FieldMeta"],
	pinnedRecipe?:ResolverInputTypes["FieldMeta"],
	date?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Step"]: AliasType<{
	_meta?:ResolverInputTypes["StepMeta"],
	id?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepLocale"]],
implementationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ImplemetationDate"]],
	hasTimer?:boolean | `@${string}`,
	timerCount?:boolean | `@${string}`,
localesByLocale?: [{	by: ResolverInputTypes["StepLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
localesByModificationDate?: [{	by: ResolverInputTypes["StepLocalesByModificationDateUniqueWhere"],	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
implementationDateByPinnedRecipe?: [{	by: ResolverInputTypes["StepImplementationDateByPinnedRecipeUniqueWhere"],	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null},ResolverInputTypes["ImplemetationDate"]],
paginateLocales?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepLocaleConnection"]],
paginateImplementationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImplemetationDateConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["StepMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
	implementationDate?:ResolverInputTypes["FieldMeta"],
	hasTimer?:ResolverInputTypes["FieldMeta"],
	timerCount?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepLocale"]: AliasType<{
	_meta?:ResolverInputTypes["StepLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null},ResolverInputTypes["Step"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
modificationDate?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepModification"]],
paginateModificationDate?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepModificationConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["StepLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
	modificationDate?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepModification"]: AliasType<{
	_meta?:ResolverInputTypes["StepModificationMeta"],
	id?:boolean | `@${string}`,
	date?:boolean | `@${string}`,
pinnedRecipe?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
step?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
		__typename?: boolean | `@${string}`
}>;
	["StepModificationMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	date?:ResolverInputTypes["FieldMeta"],
	pinnedRecipe?:ResolverInputTypes["FieldMeta"],
	step?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepModificationOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	date?: ResolverInputTypes["OrderDirection"] | undefined | null,
	pinnedRecipe?: ResolverInputTypes["PinnedRecipeOrderBy"] | undefined | null,
	step?: ResolverInputTypes["StepLocaleOrderBy"] | undefined | null
};
	["StepLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["StepOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null
};
	["StepOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	hasTimer?: ResolverInputTypes["OrderDirection"] | undefined | null,
	timerCount?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["StepModificationConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["StepModificationEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepModificationEdge"]: AliasType<{
	node?:ResolverInputTypes["StepModification"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	step?: ResolverInputTypes["StepOrderBy"] | undefined | null,
	pinnedRecipe?: ResolverInputTypes["PinnedRecipeOrderBy"] | undefined | null,
	date?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["StepLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["StepLocalesByModificationDateUniqueWhere"]: {
	modificationDate?: ResolverInputTypes["StepModificationUniqueWhere"] | undefined | null
};
	["StepImplementationDateByPinnedRecipeUniqueWhere"]: {
	pinnedRecipe?: ResolverInputTypes["PinnedRecipeUniqueWhere"] | undefined | null
};
	["StepLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["StepLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["StepLocale"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ImplemetationDateEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateEdge"]: AliasType<{
	node?:ResolverInputTypes["ImplemetationDate"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeImplementationDateByStepUniqueWhere"]: {
	step?: ResolverInputTypes["StepUniqueWhere"] | undefined | null
};
	["StepGroup"]: AliasType<{
	_meta?:ResolverInputTypes["StepGroupMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
recipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
locales?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupLocale"]],
items?: [{	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupItem"]],
localesByLocale?: [{	by: ResolverInputTypes["StepGroupLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null},ResolverInputTypes["StepGroupLocale"]],
itemsByStep?: [{	by: ResolverInputTypes["StepGroupItemsByStepUniqueWhere"],	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null},ResolverInputTypes["StepGroupItem"]],
itemsByTip?: [{	by: ResolverInputTypes["StepGroupItemsByTipUniqueWhere"],	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null},ResolverInputTypes["StepGroupItem"]],
paginateLocales?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupLocaleConnection"]],
paginateItems?: [{	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupItemConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	recipe?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
	items?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocale"]: AliasType<{
	_meta?:ResolverInputTypes["StepGroupLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	buttonTitle?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null},ResolverInputTypes["StepGroup"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	buttonTitle?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
	description?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	buttonTitle?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["StepGroupOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null,
	description?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["StepGroupOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeOrderBy"] | undefined | null
};
	["StepGroupItem"]: AliasType<{
	_meta?:ResolverInputTypes["StepGroupItemMeta"],
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
group?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null},ResolverInputTypes["StepGroup"]],
step?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null},ResolverInputTypes["Step"]],
tip?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null},ResolverInputTypes["Tip"]],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	type?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	group?:ResolverInputTypes["FieldMeta"],
	step?:ResolverInputTypes["FieldMeta"],
	tip?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["Tip"]: AliasType<{
	_meta?:ResolverInputTypes["TipMeta"],
	id?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipLocale"]],
localesByLocale?: [{	by: ResolverInputTypes["TipLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null},ResolverInputTypes["TipLocale"]],
paginateLocales?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["TipMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipLocale"]: AliasType<{
	_meta?:ResolverInputTypes["TipLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null},ResolverInputTypes["Tip"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
		__typename?: boolean | `@${string}`
}>;
	["TipLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["TipOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null
};
	["TipOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["TipLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["TipLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["TipLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["TipLocale"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	type?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	group?: ResolverInputTypes["StepGroupOrderBy"] | undefined | null,
	step?: ResolverInputTypes["StepOrderBy"] | undefined | null,
	tip?: ResolverInputTypes["TipOrderBy"] | undefined | null
};
	["StepGroupLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["StepGroupItemsByStepUniqueWhere"]: {
	step?: ResolverInputTypes["StepUniqueWhere"] | undefined | null
};
	["StepGroupItemsByTipUniqueWhere"]: {
	tip?: ResolverInputTypes["TipUniqueWhere"] | undefined | null
};
	["StepGroupLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["StepGroupLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["StepGroupLocale"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["StepGroupItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupItemEdge"]: AliasType<{
	node?:ResolverInputTypes["StepGroupItem"],
		__typename?: boolean | `@${string}`
}>;
	["Category"]: AliasType<{
	_meta?:ResolverInputTypes["CategoryMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["CategoryLocale"]],
recipes?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Recipe"]],
image?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
localesByLocale?: [{	by: ResolverInputTypes["CategoryLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
localesBySeo?: [{	by: ResolverInputTypes["CategoryLocalesBySeoUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
localesByLink?: [{	by: ResolverInputTypes["CategoryLocalesByLinkUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
paginateLocales?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryLocaleConnection"]],
paginateRecipes?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["CategoryMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
	recipes?:ResolverInputTypes["FieldMeta"],
	image?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryLocale"]: AliasType<{
	_meta?:ResolverInputTypes["CategoryLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null},ResolverInputTypes["Category"]],
seo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
link?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["CategoryLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	seo?:ResolverInputTypes["FieldMeta"],
	link?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
	description?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
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
	["CategoryLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["CategoryLocalesBySeoUniqueWhere"]: {
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["CategoryLocalesByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["CategoryLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["CategoryLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["CategoryLocale"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroup"]: AliasType<{
	_meta?:ResolverInputTypes["TipGroupMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
recipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
items?: [{	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupItem"]],
locales?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupLocale"]],
itemsByTip?: [{	by: ResolverInputTypes["TipGroupItemsByTipUniqueWhere"],	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null},ResolverInputTypes["TipGroupItem"]],
localesByLocale?: [{	by: ResolverInputTypes["TipGroupLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null},ResolverInputTypes["TipGroupLocale"]],
paginateItems?: [{	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupItemConnection"]],
paginateLocales?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	recipe?:ResolverInputTypes["FieldMeta"],
	items?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItem"]: AliasType<{
	_meta?:ResolverInputTypes["TipGroupItemMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
group?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null},ResolverInputTypes["TipGroup"]],
tip?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null},ResolverInputTypes["Tip"]],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItemMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	group?:ResolverInputTypes["FieldMeta"],
	tip?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItemOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	group?: ResolverInputTypes["TipGroupOrderBy"] | undefined | null,
	tip?: ResolverInputTypes["TipOrderBy"] | undefined | null
};
	["TipGroupOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeOrderBy"] | undefined | null
};
	["TipGroupLocale"]: AliasType<{
	_meta?:ResolverInputTypes["TipGroupLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
base?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null},ResolverInputTypes["TipGroup"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	description?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	title?: ResolverInputTypes["OrderDirection"] | undefined | null,
	description?: ResolverInputTypes["OrderDirection"] | undefined | null,
	base?: ResolverInputTypes["TipGroupOrderBy"] | undefined | null,
	locale?: ResolverInputTypes["LocaleOrderBy"] | undefined | null
};
	["TipGroupItemsByTipUniqueWhere"]: {
	tip?: ResolverInputTypes["TipUniqueWhere"] | undefined | null
};
	["TipGroupLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["TipGroupItemConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["TipGroupItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupItemEdge"]: AliasType<{
	node?:ResolverInputTypes["TipGroupItem"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["TipGroupLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["TipGroupLocale"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["RecipeLocalesByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["RecipePinnedRecipesByImplementationDateUniqueWhere"]: {
	implementationDate?: ResolverInputTypes["ImplemetationDateUniqueWhere"] | undefined | null
};
	["RecipePinnedRecipesByModificationUniqueWhere"]: {
	modification?: ResolverInputTypes["StepModificationUniqueWhere"] | undefined | null
};
	["RecipeStepsGroupsByLocalesUniqueWhere"]: {
	locales?: ResolverInputTypes["StepGroupLocaleUniqueWhere"] | undefined | null
};
	["RecipeStepsGroupsByItemsUniqueWhere"]: {
	items?: ResolverInputTypes["StepGroupItemUniqueWhere"] | undefined | null
};
	["RecipeTipGroupsByItemsUniqueWhere"]: {
	items?: ResolverInputTypes["TipGroupItemUniqueWhere"] | undefined | null
};
	["RecipeTipGroupsByLocalesUniqueWhere"]: {
	locales?: ResolverInputTypes["TipGroupLocaleUniqueWhere"] | undefined | null
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
	["StepGroupConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["StepGroupEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepGroupEdge"]: AliasType<{
	node?:ResolverInputTypes["StepGroup"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["CategoryEdge"],
		__typename?: boolean | `@${string}`
}>;
	["CategoryEdge"]: AliasType<{
	node?:ResolverInputTypes["Category"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["TipGroupEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipGroupEdge"]: AliasType<{
	node?:ResolverInputTypes["TipGroup"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocale"]: AliasType<{
	_meta?:ResolverInputTypes["PinnedRecipesPageLocaleMeta"],
	id?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
link?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
base?: [{	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPage"]],
locale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
seo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocaleMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	title?:ResolverInputTypes["FieldMeta"],
	link?:ResolverInputTypes["FieldMeta"],
	base?:ResolverInputTypes["FieldMeta"],
	locale?:ResolverInputTypes["FieldMeta"],
	seo?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPage"]: AliasType<{
	_meta?:ResolverInputTypes["PinnedRecipesPageMeta"],
	id?:boolean | `@${string}`,
	unique?:boolean | `@${string}`,
locales?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
localesByLocale?: [{	by: ResolverInputTypes["PinnedRecipesPageLocalesByLocaleUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
localesByLink?: [{	by: ResolverInputTypes["PinnedRecipesPageLocalesByLinkUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
localesBySeo?: [{	by: ResolverInputTypes["PinnedRecipesPageLocalesBySeoUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
paginateLocales?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	unique?:ResolverInputTypes["FieldMeta"],
	locales?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocalesByLocaleUniqueWhere"]: {
	locale?: ResolverInputTypes["LocaleUniqueWhere"] | undefined | null
};
	["PinnedRecipesPageLocalesByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["PinnedRecipesPageLocalesBySeoUniqueWhere"]: {
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["PinnedRecipesPageLocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["PinnedRecipesPageLocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageLocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["PinnedRecipesPageLocale"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleRecipesByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["RecipeUniqueWhere"] | undefined | null
};
	["LocaleRecipesByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["LocaleStepsByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["StepUniqueWhere"] | undefined | null
};
	["LocaleStepsByModificationDateUniqueWhere"]: {
	modificationDate?: ResolverInputTypes["StepModificationUniqueWhere"] | undefined | null
};
	["LocaleStepsGroupsByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["StepGroupUniqueWhere"] | undefined | null
};
	["LocaleHomePageByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["HomePageUniqueWhere"] | undefined | null
};
	["LocaleHomePageByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["LocaleHomePageBySeoUniqueWhere"]: {
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["LocaleCategoriesByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["CategoryUniqueWhere"] | undefined | null
};
	["LocaleCategoriesBySeoUniqueWhere"]: {
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["LocaleCategoriesByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["LocaleTipsByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["TipUniqueWhere"] | undefined | null
};
	["LocaleTipGroupsByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["TipGroupUniqueWhere"] | undefined | null
};
	["LocalePinnedRecipesPageByBaseUniqueWhere"]: {
	base?: ResolverInputTypes["PinnedRecipesPageUniqueWhere"] | undefined | null
};
	["LocalePinnedRecipesPageByLinkUniqueWhere"]: {
	link?: ResolverInputTypes["LinkableUniqueWhere"] | undefined | null
};
	["LocalePinnedRecipesPageBySeoUniqueWhere"]: {
	seo?: ResolverInputTypes["SeoUniqueWhere"] | undefined | null
};
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	item?: ResolverInputTypes["LinkableOrderBy"] | undefined | null,
	reference?: ResolverInputTypes["ContentReferenceOrderBy"] | undefined | null
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
	["LinkableConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["LinkableEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LinkableEdge"]: AliasType<{
	node?:ResolverInputTypes["Linkable"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["LocaleEdge"],
		__typename?: boolean | `@${string}`
}>;
	["LocaleEdge"]: AliasType<{
	node?:ResolverInputTypes["Locale"],
		__typename?: boolean | `@${string}`
}>;
	["ImageConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["ImageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["ImageEdge"]: AliasType<{
	node?:ResolverInputTypes["Image"],
		__typename?: boolean | `@${string}`
}>;
	["UserUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	email?: string | undefined | null,
	pinnedRecipes?: ResolverInputTypes["PinnedRecipeUniqueWhere"] | undefined | null,
	createdRecipes?: ResolverInputTypes["RecipeUniqueWhere"] | undefined | null
};
	["UserConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["UserEdge"],
		__typename?: boolean | `@${string}`
}>;
	["UserEdge"]: AliasType<{
	node?:ResolverInputTypes["User"],
		__typename?: boolean | `@${string}`
}>;
	["StepConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["StepEdge"],
		__typename?: boolean | `@${string}`
}>;
	["StepEdge"]: AliasType<{
	node?:ResolverInputTypes["Step"],
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
	["PinnedRecipeCreateInput"]: {
	user?: ResolverInputTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined | null,
	derivedBy?: ResolverInputTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined | null,
	implementationDate?: Array<ResolverInputTypes["PinnedRecipeCreateImplementationDateEntityRelationInput"]> | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["PinnedRecipeCreateUserEntityRelationInput"]: {
	connect?: ResolverInputTypes["UserUniqueWhere"] | undefined | null
};
	["PinnedRecipeCreateDerivedByEntityRelationInput"]: {
	connect?: ResolverInputTypes["RecipeUniqueWhere"] | undefined | null
};
	["PinnedRecipeCreateImplementationDateEntityRelationInput"]: {
	connect?: ResolverInputTypes["ImplemetationDateUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["ImplemetationDateWithoutPinnedRecipeCreateInput"] | undefined | null,
	alias?: string | undefined | null
};
	["ImplemetationDateWithoutPinnedRecipeCreateInput"]: {
	step?: ResolverInputTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined | null,
	date?: ResolverInputTypes["DateTime"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ImplemetationDateCreateStepEntityRelationInput"]: {
	connect?: ResolverInputTypes["StepUniqueWhere"] | undefined | null
};
	["ImplemetationDateCreateInput"]: {
	step?: ResolverInputTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined | null,
	pinnedRecipe?: ResolverInputTypes["ImplemetationDateCreatePinnedRecipeEntityRelationInput"] | undefined | null,
	date?: ResolverInputTypes["DateTime"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["ImplemetationDateCreatePinnedRecipeEntityRelationInput"]: {
	connect?: ResolverInputTypes["PinnedRecipeUniqueWhere"] | undefined | null,
	create?: ResolverInputTypes["PinnedRecipeWithoutImplementationDateCreateInput"] | undefined | null
};
	["PinnedRecipeWithoutImplementationDateCreateInput"]: {
	user?: ResolverInputTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined | null,
	derivedBy?: ResolverInputTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined | null,
	_dummy_field_?: boolean | undefined | null
};
	["HomePageConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["HomePageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["HomePageEdge"]: AliasType<{
	node?:ResolverInputTypes["HomePage"],
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
	["RecipeList"]: AliasType<{
	_meta?:ResolverInputTypes["RecipeListMeta"],
	id?:boolean | `@${string}`,
items?: [{	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeListItem"]],
paginateItems?: [{	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeListItemConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	items?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListItem"]: AliasType<{
	_meta?:ResolverInputTypes["RecipeListItemMeta"],
	id?:boolean | `@${string}`,
	order?:boolean | `@${string}`,
list?: [{	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null},ResolverInputTypes["RecipeList"]],
recipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListItemMeta"]: AliasType<{
	id?:ResolverInputTypes["FieldMeta"],
	order?:ResolverInputTypes["FieldMeta"],
	list?:ResolverInputTypes["FieldMeta"],
	recipe?:ResolverInputTypes["FieldMeta"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	items?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["RecipeListWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["RecipeListWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["RecipeListWhere"] | undefined | null
};
	["RecipeListItemWhere"]: {
	id?: ResolverInputTypes["UUIDCondition"] | undefined | null,
	order?: ResolverInputTypes["IntCondition"] | undefined | null,
	list?: ResolverInputTypes["RecipeListWhere"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeWhere"] | undefined | null,
	and?: Array<ResolverInputTypes["RecipeListItemWhere"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["RecipeListItemWhere"] | undefined | null> | undefined | null,
	not?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null
};
	["RecipeListItemOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null,
	order?: ResolverInputTypes["OrderDirection"] | undefined | null,
	list?: ResolverInputTypes["RecipeListOrderBy"] | undefined | null,
	recipe?: ResolverInputTypes["RecipeOrderBy"] | undefined | null
};
	["RecipeListOrderBy"]: {
	_random?: boolean | undefined | null,
	_randomSeeded?: number | undefined | null,
	id?: ResolverInputTypes["OrderDirection"] | undefined | null
};
	["RecipeListItemConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["RecipeListItemEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListItemEdge"]: AliasType<{
	node?:ResolverInputTypes["RecipeListItem"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null,
	items?: ResolverInputTypes["RecipeListItemUniqueWhere"] | undefined | null
};
	["RecipeListItemUniqueWhere"]: {
	id?: ResolverInputTypes["UUID"] | undefined | null
};
	["RecipeListConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["RecipeListEdge"],
		__typename?: boolean | `@${string}`
}>;
	["RecipeListEdge"]: AliasType<{
	node?:ResolverInputTypes["RecipeList"],
		__typename?: boolean | `@${string}`
}>;
	["TipConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["TipEdge"],
		__typename?: boolean | `@${string}`
}>;
	["TipEdge"]: AliasType<{
	node?:ResolverInputTypes["Tip"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageConnection"]: AliasType<{
	pageInfo?:ResolverInputTypes["PageInfo"],
	edges?:ResolverInputTypes["PinnedRecipesPageEdge"],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipesPageEdge"]: AliasType<{
	node?:ResolverInputTypes["PinnedRecipesPage"],
		__typename?: boolean | `@${string}`
}>;
	["QueryTransaction"]: AliasType<{
getContent?: [{	by: ResolverInputTypes["ContentUniqueWhere"],	filter?: ResolverInputTypes["ContentWhere"] | undefined | null},ResolverInputTypes["Content"]],
listContent?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Content"]],
paginateContent?: [{	filter?: ResolverInputTypes["ContentWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentConnection"]],
getContentBlock?: [{	by: ResolverInputTypes["ContentBlockUniqueWhere"],	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null},ResolverInputTypes["ContentBlock"]],
listContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentBlock"]],
paginateContentBlock?: [{	filter?: ResolverInputTypes["ContentBlockWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentBlockOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentBlockConnection"]],
getContentReference?: [{	by: ResolverInputTypes["ContentReferenceUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null},ResolverInputTypes["ContentReference"]],
listContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReference"]],
paginateContentReference?: [{	filter?: ResolverInputTypes["ContentReferenceWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceConnection"]],
getLink?: [{	by: ResolverInputTypes["LinkUniqueWhere"],	filter?: ResolverInputTypes["LinkWhere"] | undefined | null},ResolverInputTypes["Link"]],
listLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Link"]],
paginateLink?: [{	filter?: ResolverInputTypes["LinkWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkConnection"]],
getLinkable?: [{	by: ResolverInputTypes["LinkableUniqueWhere"],	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null},ResolverInputTypes["Linkable"]],
listLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Linkable"]],
paginateLinkable?: [{	filter?: ResolverInputTypes["LinkableWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LinkableOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LinkableConnection"]],
getContentReferenceLinkableItem?: [{	by: ResolverInputTypes["ContentReferenceLinkableItemUniqueWhere"],	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
listContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItem"]],
paginateContentReferenceLinkableItem?: [{	filter?: ResolverInputTypes["ContentReferenceLinkableItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ContentReferenceLinkableItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ContentReferenceLinkableItemConnection"]],
getLocale?: [{	by: ResolverInputTypes["LocaleUniqueWhere"],	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null},ResolverInputTypes["Locale"]],
listLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Locale"]],
paginateLocale?: [{	filter?: ResolverInputTypes["LocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["LocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["LocaleConnection"]],
getRecipe?: [{	by: ResolverInputTypes["RecipeUniqueWhere"],	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null},ResolverInputTypes["Recipe"]],
listRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Recipe"]],
paginateRecipe?: [{	filter?: ResolverInputTypes["RecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeConnection"]],
getRecipeLocale?: [{	by: ResolverInputTypes["RecipeLocaleUniqueWhere"],	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null},ResolverInputTypes["RecipeLocale"]],
listRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeLocale"]],
paginateRecipeLocale?: [{	filter?: ResolverInputTypes["RecipeLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeLocaleConnection"]],
getImage?: [{	by: ResolverInputTypes["ImageUniqueWhere"],	filter?: ResolverInputTypes["ImageWhere"] | undefined | null},ResolverInputTypes["Image"]],
listImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Image"]],
paginateImage?: [{	filter?: ResolverInputTypes["ImageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImageConnection"]],
getUser?: [{	by: ResolverInputTypes["UserUniqueWhere"],	filter?: ResolverInputTypes["UserWhere"] | undefined | null},ResolverInputTypes["User"]],
listUser?: [{	filter?: ResolverInputTypes["UserWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["UserOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["User"]],
paginateUser?: [{	filter?: ResolverInputTypes["UserWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["UserOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["UserConnection"]],
getStep?: [{	by: ResolverInputTypes["StepUniqueWhere"],	filter?: ResolverInputTypes["StepWhere"] | undefined | null},ResolverInputTypes["Step"]],
listStep?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Step"]],
paginateStep?: [{	filter?: ResolverInputTypes["StepWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepConnection"]],
getStepLocale?: [{	by: ResolverInputTypes["StepLocaleUniqueWhere"],	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null},ResolverInputTypes["StepLocale"]],
listStepLocale?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepLocale"]],
paginateStepLocale?: [{	filter?: ResolverInputTypes["StepLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepLocaleConnection"]],
getPinnedRecipe?: [{	by: ResolverInputTypes["PinnedRecipeUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipe"]],
listPinnedRecipe?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipe"]],
paginatePinnedRecipe?: [{	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipeOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipeConnection"]],
validateCreatePinnedRecipe?: [{	data: ResolverInputTypes["PinnedRecipeCreateInput"]},ResolverInputTypes["_ValidationResult"]],
getImplemetationDate?: [{	by: ResolverInputTypes["ImplemetationDateUniqueWhere"],	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null},ResolverInputTypes["ImplemetationDate"]],
listImplemetationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["ImplemetationDate"]],
paginateImplemetationDate?: [{	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["ImplemetationDateOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["ImplemetationDateConnection"]],
validateCreateImplemetationDate?: [{	data: ResolverInputTypes["ImplemetationDateCreateInput"]},ResolverInputTypes["_ValidationResult"]],
getStepGroup?: [{	by: ResolverInputTypes["StepGroupUniqueWhere"],	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null},ResolverInputTypes["StepGroup"]],
listStepGroup?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroup"]],
paginateStepGroup?: [{	filter?: ResolverInputTypes["StepGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupConnection"]],
getStepGroupLocale?: [{	by: ResolverInputTypes["StepGroupLocaleUniqueWhere"],	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null},ResolverInputTypes["StepGroupLocale"]],
listStepGroupLocale?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupLocale"]],
paginateStepGroupLocale?: [{	filter?: ResolverInputTypes["StepGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupLocaleConnection"]],
getHomePage?: [{	by: ResolverInputTypes["HomePageUniqueWhere"],	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null},ResolverInputTypes["HomePage"]],
listHomePage?: [{	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["HomePage"]],
paginateHomePage?: [{	filter?: ResolverInputTypes["HomePageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["HomePageConnection"]],
getHomePageLocale?: [{	by: ResolverInputTypes["HomePageLocaleUniqueWhere"],	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null},ResolverInputTypes["HomePageLocale"]],
listHomePageLocale?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["HomePageLocale"]],
paginateHomePageLocale?: [{	filter?: ResolverInputTypes["HomePageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["HomePageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["HomePageLocaleConnection"]],
getSeo?: [{	by: ResolverInputTypes["SeoUniqueWhere"],	filter?: ResolverInputTypes["SeoWhere"] | undefined | null},ResolverInputTypes["Seo"]],
listSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Seo"]],
paginateSeo?: [{	filter?: ResolverInputTypes["SeoWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["SeoOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["SeoConnection"]],
getRecipeList?: [{	by: ResolverInputTypes["RecipeListUniqueWhere"],	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null},ResolverInputTypes["RecipeList"]],
listRecipeList?: [{	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeList"]],
paginateRecipeList?: [{	filter?: ResolverInputTypes["RecipeListWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeListConnection"]],
getRecipeListItem?: [{	by: ResolverInputTypes["RecipeListItemUniqueWhere"],	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null},ResolverInputTypes["RecipeListItem"]],
listRecipeListItem?: [{	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["RecipeListItem"]],
paginateRecipeListItem?: [{	filter?: ResolverInputTypes["RecipeListItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["RecipeListItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["RecipeListItemConnection"]],
getCategory?: [{	by: ResolverInputTypes["CategoryUniqueWhere"],	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null},ResolverInputTypes["Category"]],
listCategory?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Category"]],
paginateCategory?: [{	filter?: ResolverInputTypes["CategoryWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryConnection"]],
getCategoryLocale?: [{	by: ResolverInputTypes["CategoryLocaleUniqueWhere"],	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null},ResolverInputTypes["CategoryLocale"]],
listCategoryLocale?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["CategoryLocale"]],
paginateCategoryLocale?: [{	filter?: ResolverInputTypes["CategoryLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["CategoryLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["CategoryLocaleConnection"]],
getStepGroupItem?: [{	by: ResolverInputTypes["StepGroupItemUniqueWhere"],	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null},ResolverInputTypes["StepGroupItem"]],
listStepGroupItem?: [{	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepGroupItem"]],
paginateStepGroupItem?: [{	filter?: ResolverInputTypes["StepGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepGroupItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepGroupItemConnection"]],
getTip?: [{	by: ResolverInputTypes["TipUniqueWhere"],	filter?: ResolverInputTypes["TipWhere"] | undefined | null},ResolverInputTypes["Tip"]],
listTip?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["Tip"]],
paginateTip?: [{	filter?: ResolverInputTypes["TipWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipConnection"]],
getTipLocale?: [{	by: ResolverInputTypes["TipLocaleUniqueWhere"],	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null},ResolverInputTypes["TipLocale"]],
listTipLocale?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipLocale"]],
paginateTipLocale?: [{	filter?: ResolverInputTypes["TipLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipLocaleConnection"]],
getStepModification?: [{	by: ResolverInputTypes["StepModificationUniqueWhere"],	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null},ResolverInputTypes["StepModification"]],
listStepModification?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["StepModification"]],
paginateStepModification?: [{	filter?: ResolverInputTypes["StepModificationWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["StepModificationOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["StepModificationConnection"]],
getTipGroup?: [{	by: ResolverInputTypes["TipGroupUniqueWhere"],	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null},ResolverInputTypes["TipGroup"]],
listTipGroup?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroup"]],
paginateTipGroup?: [{	filter?: ResolverInputTypes["TipGroupWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupConnection"]],
getTipGroupItem?: [{	by: ResolverInputTypes["TipGroupItemUniqueWhere"],	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null},ResolverInputTypes["TipGroupItem"]],
listTipGroupItem?: [{	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupItemOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupItem"]],
paginateTipGroupItem?: [{	filter?: ResolverInputTypes["TipGroupItemWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupItemOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupItemConnection"]],
getTipGroupLocale?: [{	by: ResolverInputTypes["TipGroupLocaleUniqueWhere"],	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null},ResolverInputTypes["TipGroupLocale"]],
listTipGroupLocale?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["TipGroupLocale"]],
paginateTipGroupLocale?: [{	filter?: ResolverInputTypes["TipGroupLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["TipGroupLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["TipGroupLocaleConnection"]],
getPinnedRecipesPage?: [{	by: ResolverInputTypes["PinnedRecipesPageUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPage"]],
listPinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipesPage"]],
paginatePinnedRecipesPage?: [{	filter?: ResolverInputTypes["PinnedRecipesPageWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageConnection"]],
getPinnedRecipesPageLocale?: [{	by: ResolverInputTypes["PinnedRecipesPageLocaleUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
listPinnedRecipesPageLocale?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	offset?: number | undefined | null,	limit?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocale"]],
paginatePinnedRecipesPageLocale?: [{	filter?: ResolverInputTypes["PinnedRecipesPageLocaleWhere"] | undefined | null,	orderBy?: Array<ResolverInputTypes["PinnedRecipesPageLocaleOrderBy"]> | undefined | null,	skip?: number | undefined | null,	first?: number | undefined | null},ResolverInputTypes["PinnedRecipesPageLocaleConnection"]],
		__typename?: boolean | `@${string}`
}>;
	["Info"]: AliasType<{
	description?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
createPinnedRecipe?: [{	data: ResolverInputTypes["PinnedRecipeCreateInput"]},ResolverInputTypes["PinnedRecipeCreateResult"]],
deletePinnedRecipe?: [{	by: ResolverInputTypes["PinnedRecipeUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipeDeleteResult"]],
createImplemetationDate?: [{	data: ResolverInputTypes["ImplemetationDateCreateInput"]},ResolverInputTypes["ImplemetationDateCreateResult"]],
deleteImplemetationDate?: [{	by: ResolverInputTypes["ImplemetationDateUniqueWhere"],	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null},ResolverInputTypes["ImplemetationDateDeleteResult"]],
transaction?: [{	options?: ResolverInputTypes["MutationTransactionOptions"] | undefined | null},ResolverInputTypes["MutationTransaction"]],
	query?:ResolverInputTypes["Query"],
generateUploadUrl?: [{	contentType: string,	expiration?: number | undefined | null,	prefix?: string | undefined | null},ResolverInputTypes["S3SignedUpload"]],
generateReadUrl?: [{	objectKey: string,	expiration?: number | undefined | null},ResolverInputTypes["S3SignedRead"]],
		__typename?: boolean | `@${string}`
}>;
	["PinnedRecipeCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["PinnedRecipe"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["MutationResult"]:AliasType<{
		ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"];
		['...on PinnedRecipeCreateResult']?: Omit<ResolverInputTypes["PinnedRecipeCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on PinnedRecipeDeleteResult']?: Omit<ResolverInputTypes["PinnedRecipeDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImplemetationDateCreateResult']?: Omit<ResolverInputTypes["ImplemetationDateCreateResult"],keyof ResolverInputTypes["MutationResult"]>;
		['...on ImplemetationDateDeleteResult']?: Omit<ResolverInputTypes["ImplemetationDateDeleteResult"],keyof ResolverInputTypes["MutationResult"]>;
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
	["PinnedRecipeDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["PinnedRecipe"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateCreateResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ImplemetationDate"],
	validation?:ResolverInputTypes["_ValidationResult"],
		__typename?: boolean | `@${string}`
}>;
	["ImplemetationDateDeleteResult"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	node?:ResolverInputTypes["ImplemetationDate"],
		__typename?: boolean | `@${string}`
}>;
	["MutationTransaction"]: AliasType<{
	ok?:boolean | `@${string}`,
	errorMessage?:boolean | `@${string}`,
	errors?:ResolverInputTypes["_MutationError"],
	validation?:ResolverInputTypes["_ValidationResult"],
createPinnedRecipe?: [{	data: ResolverInputTypes["PinnedRecipeCreateInput"]},ResolverInputTypes["PinnedRecipeCreateResult"]],
deletePinnedRecipe?: [{	by: ResolverInputTypes["PinnedRecipeUniqueWhere"],	filter?: ResolverInputTypes["PinnedRecipeWhere"] | undefined | null},ResolverInputTypes["PinnedRecipeDeleteResult"]],
createImplemetationDate?: [{	data: ResolverInputTypes["ImplemetationDateCreateInput"]},ResolverInputTypes["ImplemetationDateCreateResult"]],
deleteImplemetationDate?: [{	by: ResolverInputTypes["ImplemetationDateUniqueWhere"],	filter?: ResolverInputTypes["ImplemetationDateWhere"] | undefined | null},ResolverInputTypes["ImplemetationDateDeleteResult"]],
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
 */
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
	getContentBlock?: ModelTypes["ContentBlock"] | undefined,
	listContentBlock: Array<ModelTypes["ContentBlock"]>,
	paginateContentBlock: ModelTypes["ContentBlockConnection"],
	getContentReference?: ModelTypes["ContentReference"] | undefined,
	listContentReference: Array<ModelTypes["ContentReference"]>,
	paginateContentReference: ModelTypes["ContentReferenceConnection"],
	getLink?: ModelTypes["Link"] | undefined,
	listLink: Array<ModelTypes["Link"]>,
	paginateLink: ModelTypes["LinkConnection"],
	getLinkable?: ModelTypes["Linkable"] | undefined,
	listLinkable: Array<ModelTypes["Linkable"]>,
	paginateLinkable: ModelTypes["LinkableConnection"],
	getContentReferenceLinkableItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: ModelTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: ModelTypes["Locale"] | undefined,
	listLocale: Array<ModelTypes["Locale"]>,
	paginateLocale: ModelTypes["LocaleConnection"],
	getRecipe?: ModelTypes["Recipe"] | undefined,
	listRecipe: Array<ModelTypes["Recipe"]>,
	paginateRecipe: ModelTypes["RecipeConnection"],
	getRecipeLocale?: ModelTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<ModelTypes["RecipeLocale"]>,
	paginateRecipeLocale: ModelTypes["RecipeLocaleConnection"],
	getImage?: ModelTypes["Image"] | undefined,
	listImage: Array<ModelTypes["Image"]>,
	paginateImage: ModelTypes["ImageConnection"],
	getUser?: ModelTypes["User"] | undefined,
	listUser: Array<ModelTypes["User"]>,
	paginateUser: ModelTypes["UserConnection"],
	getStep?: ModelTypes["Step"] | undefined,
	listStep: Array<ModelTypes["Step"]>,
	paginateStep: ModelTypes["StepConnection"],
	getStepLocale?: ModelTypes["StepLocale"] | undefined,
	listStepLocale: Array<ModelTypes["StepLocale"]>,
	paginateStepLocale: ModelTypes["StepLocaleConnection"],
	getPinnedRecipe?: ModelTypes["PinnedRecipe"] | undefined,
	listPinnedRecipe: Array<ModelTypes["PinnedRecipe"]>,
	paginatePinnedRecipe: ModelTypes["PinnedRecipeConnection"],
	validateCreatePinnedRecipe: ModelTypes["_ValidationResult"],
	getImplemetationDate?: ModelTypes["ImplemetationDate"] | undefined,
	listImplemetationDate: Array<ModelTypes["ImplemetationDate"]>,
	paginateImplemetationDate: ModelTypes["ImplemetationDateConnection"],
	validateCreateImplemetationDate: ModelTypes["_ValidationResult"],
	getStepGroup?: ModelTypes["StepGroup"] | undefined,
	listStepGroup: Array<ModelTypes["StepGroup"]>,
	paginateStepGroup: ModelTypes["StepGroupConnection"],
	getStepGroupLocale?: ModelTypes["StepGroupLocale"] | undefined,
	listStepGroupLocale: Array<ModelTypes["StepGroupLocale"]>,
	paginateStepGroupLocale: ModelTypes["StepGroupLocaleConnection"],
	getHomePage?: ModelTypes["HomePage"] | undefined,
	listHomePage: Array<ModelTypes["HomePage"]>,
	paginateHomePage: ModelTypes["HomePageConnection"],
	getHomePageLocale?: ModelTypes["HomePageLocale"] | undefined,
	listHomePageLocale: Array<ModelTypes["HomePageLocale"]>,
	paginateHomePageLocale: ModelTypes["HomePageLocaleConnection"],
	getSeo?: ModelTypes["Seo"] | undefined,
	listSeo: Array<ModelTypes["Seo"]>,
	paginateSeo: ModelTypes["SeoConnection"],
	getRecipeList?: ModelTypes["RecipeList"] | undefined,
	listRecipeList: Array<ModelTypes["RecipeList"]>,
	paginateRecipeList: ModelTypes["RecipeListConnection"],
	getRecipeListItem?: ModelTypes["RecipeListItem"] | undefined,
	listRecipeListItem: Array<ModelTypes["RecipeListItem"]>,
	paginateRecipeListItem: ModelTypes["RecipeListItemConnection"],
	getCategory?: ModelTypes["Category"] | undefined,
	listCategory: Array<ModelTypes["Category"]>,
	paginateCategory: ModelTypes["CategoryConnection"],
	getCategoryLocale?: ModelTypes["CategoryLocale"] | undefined,
	listCategoryLocale: Array<ModelTypes["CategoryLocale"]>,
	paginateCategoryLocale: ModelTypes["CategoryLocaleConnection"],
	getStepGroupItem?: ModelTypes["StepGroupItem"] | undefined,
	listStepGroupItem: Array<ModelTypes["StepGroupItem"]>,
	paginateStepGroupItem: ModelTypes["StepGroupItemConnection"],
	getTip?: ModelTypes["Tip"] | undefined,
	listTip: Array<ModelTypes["Tip"]>,
	paginateTip: ModelTypes["TipConnection"],
	getTipLocale?: ModelTypes["TipLocale"] | undefined,
	listTipLocale: Array<ModelTypes["TipLocale"]>,
	paginateTipLocale: ModelTypes["TipLocaleConnection"],
	getStepModification?: ModelTypes["StepModification"] | undefined,
	listStepModification: Array<ModelTypes["StepModification"]>,
	paginateStepModification: ModelTypes["StepModificationConnection"],
	getTipGroup?: ModelTypes["TipGroup"] | undefined,
	listTipGroup: Array<ModelTypes["TipGroup"]>,
	paginateTipGroup: ModelTypes["TipGroupConnection"],
	getTipGroupItem?: ModelTypes["TipGroupItem"] | undefined,
	listTipGroupItem: Array<ModelTypes["TipGroupItem"]>,
	paginateTipGroupItem: ModelTypes["TipGroupItemConnection"],
	getTipGroupLocale?: ModelTypes["TipGroupLocale"] | undefined,
	listTipGroupLocale: Array<ModelTypes["TipGroupLocale"]>,
	paginateTipGroupLocale: ModelTypes["TipGroupLocaleConnection"],
	getPinnedRecipesPage?: ModelTypes["PinnedRecipesPage"] | undefined,
	listPinnedRecipesPage: Array<ModelTypes["PinnedRecipesPage"]>,
	paginatePinnedRecipesPage: ModelTypes["PinnedRecipesPageConnection"],
	getPinnedRecipesPageLocale?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	listPinnedRecipesPageLocale: Array<ModelTypes["PinnedRecipesPageLocale"]>,
	paginatePinnedRecipesPageLocale: ModelTypes["PinnedRecipesPageLocaleConnection"],
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
	homePage?: ModelTypes["HomePageLocaleWhere"] | undefined,
	category?: ModelTypes["CategoryLocaleWhere"] | undefined,
	recipe?: ModelTypes["RecipeLocaleWhere"] | undefined,
	pinnedRecipesPage?: ModelTypes["PinnedRecipesPageLocaleWhere"] | undefined,
	and?: Array<ModelTypes["LinkableWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["LinkableWhere"] | undefined> | undefined,
	not?: ModelTypes["LinkableWhere"] | undefined
};
	["HomePageLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	base?: ModelTypes["HomePageWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	link?: ModelTypes["LinkableWhere"] | undefined,
	seo?: ModelTypes["SeoWhere"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	and?: Array<ModelTypes["HomePageLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["HomePageLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["HomePageLocaleWhere"] | undefined
};
	["HomePageWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	locales?: ModelTypes["HomePageLocaleWhere"] | undefined,
	unique?: ModelTypes["OneCondition"] | undefined,
	and?: Array<ModelTypes["HomePageWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["HomePageWhere"] | undefined> | undefined,
	not?: ModelTypes["HomePageWhere"] | undefined
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
	["One"]:One;
	["LocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	code?: ModelTypes["StringCondition"] | undefined,
	label?: ModelTypes["StringCondition"] | undefined,
	recipes?: ModelTypes["RecipeLocaleWhere"] | undefined,
	steps?: ModelTypes["StepLocaleWhere"] | undefined,
	stepsGroups?: ModelTypes["StepGroupLocaleWhere"] | undefined,
	homePage?: ModelTypes["HomePageLocaleWhere"] | undefined,
	categories?: ModelTypes["CategoryLocaleWhere"] | undefined,
	tips?: ModelTypes["TipLocaleWhere"] | undefined,
	tipGroups?: ModelTypes["TipGroupLocaleWhere"] | undefined,
	pinnedRecipesPage?: ModelTypes["PinnedRecipesPageLocaleWhere"] | undefined,
	and?: Array<ModelTypes["LocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["LocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["LocaleWhere"] | undefined
};
	["RecipeLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	description?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["RecipeWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	tileDescription?: ModelTypes["StringCondition"] | undefined,
	link?: ModelTypes["LinkableWhere"] | undefined,
	and?: Array<ModelTypes["RecipeLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["RecipeLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["RecipeLocaleWhere"] | undefined
};
	["RecipeWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	publishDate?: ModelTypes["DateCondition"] | undefined,
	price?: ModelTypes["StringCondition"] | undefined,
	locales?: ModelTypes["RecipeLocaleWhere"] | undefined,
	mainImage?: ModelTypes["ImageWhere"] | undefined,
	pinnedRecipes?: ModelTypes["PinnedRecipeWhere"] | undefined,
	createdBy?: ModelTypes["UserWhere"] | undefined,
	stepsGroups?: ModelTypes["StepGroupWhere"] | undefined,
	categories?: ModelTypes["CategoryWhere"] | undefined,
	tileImage?: ModelTypes["ImageWhere"] | undefined,
	tipGroups?: ModelTypes["TipGroupWhere"] | undefined,
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
	["Date"]:any;
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
	["PinnedRecipeWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	user?: ModelTypes["UserWhere"] | undefined,
	derivedBy?: ModelTypes["RecipeWhere"] | undefined,
	implementationDate?: ModelTypes["ImplemetationDateWhere"] | undefined,
	modification?: ModelTypes["StepModificationWhere"] | undefined,
	and?: Array<ModelTypes["PinnedRecipeWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["PinnedRecipeWhere"] | undefined> | undefined,
	not?: ModelTypes["PinnedRecipeWhere"] | undefined
};
	["UserWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	firstName?: ModelTypes["StringCondition"] | undefined,
	lastName?: ModelTypes["StringCondition"] | undefined,
	email?: ModelTypes["StringCondition"] | undefined,
	image?: ModelTypes["ImageWhere"] | undefined,
	pinnedRecipes?: ModelTypes["PinnedRecipeWhere"] | undefined,
	createdRecipes?: ModelTypes["RecipeWhere"] | undefined,
	and?: Array<ModelTypes["UserWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["UserWhere"] | undefined> | undefined,
	not?: ModelTypes["UserWhere"] | undefined
};
	["ImplemetationDateWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	step?: ModelTypes["StepWhere"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipeWhere"] | undefined,
	date?: ModelTypes["DateTimeCondition"] | undefined,
	and?: Array<ModelTypes["ImplemetationDateWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["ImplemetationDateWhere"] | undefined> | undefined,
	not?: ModelTypes["ImplemetationDateWhere"] | undefined
};
	["StepWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	locales?: ModelTypes["StepLocaleWhere"] | undefined,
	implementationDate?: ModelTypes["ImplemetationDateWhere"] | undefined,
	hasTimer?: ModelTypes["BooleanCondition"] | undefined,
	timerCount?: ModelTypes["IntCondition"] | undefined,
	and?: Array<ModelTypes["StepWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["StepWhere"] | undefined> | undefined,
	not?: ModelTypes["StepWhere"] | undefined
};
	["StepLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["StepWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	modificationDate?: ModelTypes["StepModificationWhere"] | undefined,
	and?: Array<ModelTypes["StepLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["StepLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["StepLocaleWhere"] | undefined
};
	["StepModificationWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	date?: ModelTypes["DateTimeCondition"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipeWhere"] | undefined,
	step?: ModelTypes["StepLocaleWhere"] | undefined,
	and?: Array<ModelTypes["StepModificationWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["StepModificationWhere"] | undefined> | undefined,
	not?: ModelTypes["StepModificationWhere"] | undefined
};
	["DateTimeCondition"]: {
	and?: Array<ModelTypes["DateTimeCondition"]> | undefined,
	or?: Array<ModelTypes["DateTimeCondition"]> | undefined,
	not?: ModelTypes["DateTimeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["DateTime"] | undefined,
	notEq?: ModelTypes["DateTime"] | undefined,
	in?: Array<ModelTypes["DateTime"]> | undefined,
	notIn?: Array<ModelTypes["DateTime"]> | undefined,
	lt?: ModelTypes["DateTime"] | undefined,
	lte?: ModelTypes["DateTime"] | undefined,
	gt?: ModelTypes["DateTime"] | undefined,
	gte?: ModelTypes["DateTime"] | undefined
};
	["DateTime"]:any;
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
	["StepGroupWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	recipe?: ModelTypes["RecipeWhere"] | undefined,
	locales?: ModelTypes["StepGroupLocaleWhere"] | undefined,
	items?: ModelTypes["StepGroupItemWhere"] | undefined,
	and?: Array<ModelTypes["StepGroupWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["StepGroupWhere"] | undefined> | undefined,
	not?: ModelTypes["StepGroupWhere"] | undefined
};
	["StepGroupLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	buttonTitle?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["StepGroupWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	description?: ModelTypes["StringCondition"] | undefined,
	and?: Array<ModelTypes["StepGroupLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["StepGroupLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["StepGroupLocaleWhere"] | undefined
};
	["StepGroupItemWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	type?: ModelTypes["StepGroupItemTypeCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	group?: ModelTypes["StepGroupWhere"] | undefined,
	step?: ModelTypes["StepWhere"] | undefined,
	tip?: ModelTypes["TipWhere"] | undefined,
	and?: Array<ModelTypes["StepGroupItemWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["StepGroupItemWhere"] | undefined> | undefined,
	not?: ModelTypes["StepGroupItemWhere"] | undefined
};
	["StepGroupItemTypeCondition"]: {
	and?: Array<ModelTypes["StepGroupItemTypeCondition"]> | undefined,
	or?: Array<ModelTypes["StepGroupItemTypeCondition"]> | undefined,
	not?: ModelTypes["StepGroupItemTypeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: ModelTypes["StepGroupItemType"] | undefined,
	notEq?: ModelTypes["StepGroupItemType"] | undefined,
	in?: Array<ModelTypes["StepGroupItemType"]> | undefined,
	notIn?: Array<ModelTypes["StepGroupItemType"]> | undefined,
	lt?: ModelTypes["StepGroupItemType"] | undefined,
	lte?: ModelTypes["StepGroupItemType"] | undefined,
	gt?: ModelTypes["StepGroupItemType"] | undefined,
	gte?: ModelTypes["StepGroupItemType"] | undefined
};
	["StepGroupItemType"]:StepGroupItemType;
	["TipWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	locales?: ModelTypes["TipLocaleWhere"] | undefined,
	and?: Array<ModelTypes["TipWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["TipWhere"] | undefined> | undefined,
	not?: ModelTypes["TipWhere"] | undefined
};
	["TipLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["TipWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	and?: Array<ModelTypes["TipLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["TipLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["TipLocaleWhere"] | undefined
};
	["CategoryWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	locales?: ModelTypes["CategoryLocaleWhere"] | undefined,
	recipes?: ModelTypes["RecipeWhere"] | undefined,
	image?: ModelTypes["ImageWhere"] | undefined,
	and?: Array<ModelTypes["CategoryWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["CategoryWhere"] | undefined> | undefined,
	not?: ModelTypes["CategoryWhere"] | undefined
};
	["CategoryLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["CategoryWhere"] | undefined,
	seo?: ModelTypes["SeoWhere"] | undefined,
	link?: ModelTypes["LinkableWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	description?: ModelTypes["StringCondition"] | undefined,
	and?: Array<ModelTypes["CategoryLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["CategoryLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["CategoryLocaleWhere"] | undefined
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
	["TipGroupWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	recipe?: ModelTypes["RecipeWhere"] | undefined,
	items?: ModelTypes["TipGroupItemWhere"] | undefined,
	locales?: ModelTypes["TipGroupLocaleWhere"] | undefined,
	and?: Array<ModelTypes["TipGroupWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["TipGroupWhere"] | undefined> | undefined,
	not?: ModelTypes["TipGroupWhere"] | undefined
};
	["TipGroupItemWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	group?: ModelTypes["TipGroupWhere"] | undefined,
	tip?: ModelTypes["TipWhere"] | undefined,
	and?: Array<ModelTypes["TipGroupItemWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["TipGroupItemWhere"] | undefined> | undefined,
	not?: ModelTypes["TipGroupItemWhere"] | undefined
};
	["TipGroupLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	description?: ModelTypes["StringCondition"] | undefined,
	base?: ModelTypes["TipGroupWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	and?: Array<ModelTypes["TipGroupLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["TipGroupLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["TipGroupLocaleWhere"] | undefined
};
	["PinnedRecipesPageLocaleWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	title?: ModelTypes["StringCondition"] | undefined,
	link?: ModelTypes["LinkableWhere"] | undefined,
	base?: ModelTypes["PinnedRecipesPageWhere"] | undefined,
	locale?: ModelTypes["LocaleWhere"] | undefined,
	seo?: ModelTypes["SeoWhere"] | undefined,
	and?: Array<ModelTypes["PinnedRecipesPageLocaleWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["PinnedRecipesPageLocaleWhere"] | undefined> | undefined,
	not?: ModelTypes["PinnedRecipesPageLocaleWhere"] | undefined
};
	["PinnedRecipesPageWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	unique?: ModelTypes["OneCondition"] | undefined,
	locales?: ModelTypes["PinnedRecipesPageLocaleWhere"] | undefined,
	and?: Array<ModelTypes["PinnedRecipesPageWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["PinnedRecipesPageWhere"] | undefined> | undefined,
	not?: ModelTypes["PinnedRecipesPageWhere"] | undefined
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
	url: string,
	homePage?: ModelTypes["HomePageLocale"] | undefined,
	category?: ModelTypes["CategoryLocale"] | undefined,
	recipe?: ModelTypes["RecipeLocale"] | undefined,
	pinnedRecipesPage?: ModelTypes["PinnedRecipesPageLocale"] | undefined
};
	["LinkableMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	url?: ModelTypes["FieldMeta"] | undefined,
	homePage?: ModelTypes["FieldMeta"] | undefined,
	category?: ModelTypes["FieldMeta"] | undefined,
	recipe?: ModelTypes["FieldMeta"] | undefined,
	pinnedRecipesPage?: ModelTypes["FieldMeta"] | undefined
};
	["HomePageLocale"]: {
		_meta?: ModelTypes["HomePageLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	base?: ModelTypes["HomePage"] | undefined,
	locale?: ModelTypes["Locale"] | undefined,
	link?: ModelTypes["Linkable"] | undefined,
	seo?: ModelTypes["Seo"] | undefined,
	title?: string | undefined
};
	["HomePageLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined,
	link?: ModelTypes["FieldMeta"] | undefined,
	seo?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined
};
	["HomePage"]: {
		_meta?: ModelTypes["HomePageMeta"] | undefined,
	id: ModelTypes["UUID"],
	locales: Array<ModelTypes["HomePageLocale"]>,
	unique: ModelTypes["One"],
	localesByLocale?: ModelTypes["HomePageLocale"] | undefined,
	localesByLink?: ModelTypes["HomePageLocale"] | undefined,
	localesBySeo?: ModelTypes["HomePageLocale"] | undefined,
	paginateLocales: ModelTypes["HomePageLocaleConnection"]
};
	["HomePageMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined,
	unique?: ModelTypes["FieldMeta"] | undefined
};
	["HomePageLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["HomePageOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined,
	link?: ModelTypes["LinkableOrderBy"] | undefined,
	seo?: ModelTypes["SeoOrderBy"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined
};
	["OrderDirection"]:OrderDirection;
	["HomePageOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	unique?: ModelTypes["OrderDirection"] | undefined
};
	["LocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	code?: ModelTypes["OrderDirection"] | undefined,
	label?: ModelTypes["OrderDirection"] | undefined
};
	["LinkableOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	url?: ModelTypes["OrderDirection"] | undefined,
	homePage?: ModelTypes["HomePageLocaleOrderBy"] | undefined,
	category?: ModelTypes["CategoryLocaleOrderBy"] | undefined,
	recipe?: ModelTypes["RecipeLocaleOrderBy"] | undefined,
	pinnedRecipesPage?: ModelTypes["PinnedRecipesPageLocaleOrderBy"] | undefined
};
	["CategoryLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["CategoryOrderBy"] | undefined,
	seo?: ModelTypes["SeoOrderBy"] | undefined,
	link?: ModelTypes["LinkableOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined,
	description?: ModelTypes["OrderDirection"] | undefined
};
	["CategoryOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	image?: ModelTypes["ImageOrderBy"] | undefined
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
	["RecipeLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	description?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["RecipeOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined,
	tileDescription?: ModelTypes["OrderDirection"] | undefined,
	link?: ModelTypes["LinkableOrderBy"] | undefined
};
	["RecipeOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	publishDate?: ModelTypes["OrderDirection"] | undefined,
	price?: ModelTypes["OrderDirection"] | undefined,
	mainImage?: ModelTypes["ImageOrderBy"] | undefined,
	createdBy?: ModelTypes["UserOrderBy"] | undefined,
	tileImage?: ModelTypes["ImageOrderBy"] | undefined
};
	["UserOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	firstName?: ModelTypes["OrderDirection"] | undefined,
	lastName?: ModelTypes["OrderDirection"] | undefined,
	email?: ModelTypes["OrderDirection"] | undefined,
	image?: ModelTypes["ImageOrderBy"] | undefined
};
	["PinnedRecipesPageLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	link?: ModelTypes["LinkableOrderBy"] | undefined,
	base?: ModelTypes["PinnedRecipesPageOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined,
	seo?: ModelTypes["SeoOrderBy"] | undefined
};
	["PinnedRecipesPageOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	unique?: ModelTypes["OrderDirection"] | undefined
};
	["HomePageLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["LocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	code?: string | undefined,
	recipes?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	steps?: ModelTypes["StepLocaleUniqueWhere"] | undefined,
	stepsGroups?: ModelTypes["StepGroupLocaleUniqueWhere"] | undefined,
	homePage?: ModelTypes["HomePageLocaleUniqueWhere"] | undefined,
	categories?: ModelTypes["CategoryLocaleUniqueWhere"] | undefined,
	tips?: ModelTypes["TipLocaleUniqueWhere"] | undefined,
	tipGroups?: ModelTypes["TipGroupLocaleUniqueWhere"] | undefined,
	pinnedRecipesPage?: ModelTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined
};
	["RecipeLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["RecipeUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined,
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["RecipeUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	locales?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	pinnedRecipes?: ModelTypes["PinnedRecipeUniqueWhere"] | undefined,
	stepsGroups?: ModelTypes["StepGroupUniqueWhere"] | undefined,
	tipGroups?: ModelTypes["TipGroupUniqueWhere"] | undefined
};
	["PinnedRecipeUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	implementationDate?: ModelTypes["ImplemetationDateUniqueWhere"] | undefined,
	modification?: ModelTypes["StepModificationUniqueWhere"] | undefined
};
	["ImplemetationDateUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipeUniqueWhere"] | undefined,
	step?: ModelTypes["StepUniqueWhere"] | undefined
};
	["StepUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	locales?: ModelTypes["StepLocaleUniqueWhere"] | undefined,
	implementationDate?: ModelTypes["ImplemetationDateUniqueWhere"] | undefined
};
	["StepLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["StepUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined,
	modificationDate?: ModelTypes["StepModificationUniqueWhere"] | undefined
};
	["StepModificationUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
};
	["StepGroupUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	locales?: ModelTypes["StepGroupLocaleUniqueWhere"] | undefined,
	items?: ModelTypes["StepGroupItemUniqueWhere"] | undefined
};
	["StepGroupLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["StepGroupUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["StepGroupItemUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	step?: ModelTypes["StepUniqueWhere"] | undefined,
	tip?: ModelTypes["TipUniqueWhere"] | undefined
};
	["TipUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	locales?: ModelTypes["TipLocaleUniqueWhere"] | undefined
};
	["TipLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["TipUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["TipGroupUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	items?: ModelTypes["TipGroupItemUniqueWhere"] | undefined,
	locales?: ModelTypes["TipGroupLocaleUniqueWhere"] | undefined
};
	["TipGroupItemUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	tip?: ModelTypes["TipUniqueWhere"] | undefined
};
	["TipGroupLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["TipGroupUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["LinkableUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	url?: string | undefined,
	homePage?: ModelTypes["HomePageLocaleUniqueWhere"] | undefined,
	category?: ModelTypes["CategoryLocaleUniqueWhere"] | undefined,
	recipe?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined,
	pinnedRecipesPage?: ModelTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined
};
	["HomePageLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["HomePageUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined,
	link?: ModelTypes["LinkableUniqueWhere"] | undefined,
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["HomePageUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	unique?: ModelTypes["One"] | undefined,
	locales?: ModelTypes["HomePageLocaleUniqueWhere"] | undefined
};
	["SeoUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	ogImage?: ModelTypes["ImageUniqueWhere"] | undefined
};
	["ImageUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
};
	["CategoryLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["CategoryUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined,
	seo?: ModelTypes["SeoUniqueWhere"] | undefined,
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["CategoryUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	locales?: ModelTypes["CategoryLocaleUniqueWhere"] | undefined,
	image?: ModelTypes["ImageUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocaleUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	base?: ModelTypes["PinnedRecipesPageUniqueWhere"] | undefined,
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined,
	link?: ModelTypes["LinkableUniqueWhere"] | undefined,
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["PinnedRecipesPageUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	unique?: ModelTypes["One"] | undefined,
	locales?: ModelTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined
};
	["HomePageLocalesByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["HomePageLocalesBySeoUniqueWhere"]: {
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["HomePageLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["HomePageLocaleEdge"]>
};
	["PageInfo"]: {
		totalCount: number
};
	["HomePageLocaleEdge"]: {
		node: ModelTypes["HomePageLocale"]
};
	["Locale"]: {
		_meta?: ModelTypes["LocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	code: string,
	label?: string | undefined,
	recipes: Array<ModelTypes["RecipeLocale"]>,
	steps: Array<ModelTypes["StepLocale"]>,
	stepsGroups: Array<ModelTypes["StepGroupLocale"]>,
	homePage: Array<ModelTypes["HomePageLocale"]>,
	categories: Array<ModelTypes["CategoryLocale"]>,
	tips: Array<ModelTypes["TipLocale"]>,
	tipGroups: Array<ModelTypes["TipGroupLocale"]>,
	pinnedRecipesPage: Array<ModelTypes["PinnedRecipesPageLocale"]>,
	recipesByBase?: ModelTypes["RecipeLocale"] | undefined,
	recipesByLink?: ModelTypes["RecipeLocale"] | undefined,
	stepsByBase?: ModelTypes["StepLocale"] | undefined,
	stepsByModificationDate?: ModelTypes["StepLocale"] | undefined,
	stepsGroupsByBase?: ModelTypes["StepGroupLocale"] | undefined,
	homePageByBase?: ModelTypes["HomePageLocale"] | undefined,
	homePageByLink?: ModelTypes["HomePageLocale"] | undefined,
	homePageBySeo?: ModelTypes["HomePageLocale"] | undefined,
	categoriesByBase?: ModelTypes["CategoryLocale"] | undefined,
	categoriesBySeo?: ModelTypes["CategoryLocale"] | undefined,
	categoriesByLink?: ModelTypes["CategoryLocale"] | undefined,
	tipsByBase?: ModelTypes["TipLocale"] | undefined,
	tipGroupsByBase?: ModelTypes["TipGroupLocale"] | undefined,
	pinnedRecipesPageByBase?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	pinnedRecipesPageByLink?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	pinnedRecipesPageBySeo?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	paginateRecipes: ModelTypes["RecipeLocaleConnection"],
	paginateSteps: ModelTypes["StepLocaleConnection"],
	paginateStepsGroups: ModelTypes["StepGroupLocaleConnection"],
	paginateHomePage: ModelTypes["HomePageLocaleConnection"],
	paginateCategories: ModelTypes["CategoryLocaleConnection"],
	paginateTips: ModelTypes["TipLocaleConnection"],
	paginateTipGroups: ModelTypes["TipGroupLocaleConnection"],
	paginatePinnedRecipesPage: ModelTypes["PinnedRecipesPageLocaleConnection"]
};
	["LocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	code?: ModelTypes["FieldMeta"] | undefined,
	label?: ModelTypes["FieldMeta"] | undefined,
	recipes?: ModelTypes["FieldMeta"] | undefined,
	steps?: ModelTypes["FieldMeta"] | undefined,
	stepsGroups?: ModelTypes["FieldMeta"] | undefined,
	homePage?: ModelTypes["FieldMeta"] | undefined,
	categories?: ModelTypes["FieldMeta"] | undefined,
	tips?: ModelTypes["FieldMeta"] | undefined,
	tipGroups?: ModelTypes["FieldMeta"] | undefined,
	pinnedRecipesPage?: ModelTypes["FieldMeta"] | undefined
};
	["RecipeLocale"]: {
		_meta?: ModelTypes["RecipeLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["Recipe"] | undefined,
	locale?: ModelTypes["Locale"] | undefined,
	tileDescription?: string | undefined,
	link?: ModelTypes["Linkable"] | undefined
};
	["RecipeLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	description?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined,
	tileDescription?: ModelTypes["FieldMeta"] | undefined,
	link?: ModelTypes["FieldMeta"] | undefined
};
	["Recipe"]: {
		_meta?: ModelTypes["RecipeMeta"] | undefined,
	id: ModelTypes["UUID"],
	publishDate?: ModelTypes["Date"] | undefined,
	price?: string | undefined,
	locales: Array<ModelTypes["RecipeLocale"]>,
	mainImage?: ModelTypes["Image"] | undefined,
	pinnedRecipes: Array<ModelTypes["PinnedRecipe"]>,
	createdBy?: ModelTypes["User"] | undefined,
	stepsGroups: Array<ModelTypes["StepGroup"]>,
	categories: Array<ModelTypes["Category"]>,
	tileImage?: ModelTypes["Image"] | undefined,
	tipGroups: Array<ModelTypes["TipGroup"]>,
	localesByLocale?: ModelTypes["RecipeLocale"] | undefined,
	localesByLink?: ModelTypes["RecipeLocale"] | undefined,
	pinnedRecipesByImplementationDate?: ModelTypes["PinnedRecipe"] | undefined,
	pinnedRecipesByModification?: ModelTypes["PinnedRecipe"] | undefined,
	stepsGroupsByLocales?: ModelTypes["StepGroup"] | undefined,
	stepsGroupsByItems?: ModelTypes["StepGroup"] | undefined,
	tipGroupsByItems?: ModelTypes["TipGroup"] | undefined,
	tipGroupsByLocales?: ModelTypes["TipGroup"] | undefined,
	paginateLocales: ModelTypes["RecipeLocaleConnection"],
	paginatePinnedRecipes: ModelTypes["PinnedRecipeConnection"],
	paginateStepsGroups: ModelTypes["StepGroupConnection"],
	paginateCategories: ModelTypes["CategoryConnection"],
	paginateTipGroups: ModelTypes["TipGroupConnection"]
};
	["RecipeMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	publishDate?: ModelTypes["FieldMeta"] | undefined,
	price?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined,
	mainImage?: ModelTypes["FieldMeta"] | undefined,
	pinnedRecipes?: ModelTypes["FieldMeta"] | undefined,
	createdBy?: ModelTypes["FieldMeta"] | undefined,
	stepsGroups?: ModelTypes["FieldMeta"] | undefined,
	categories?: ModelTypes["FieldMeta"] | undefined,
	tileImage?: ModelTypes["FieldMeta"] | undefined,
	tipGroups?: ModelTypes["FieldMeta"] | undefined
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
	["PinnedRecipe"]: {
		_meta?: ModelTypes["PinnedRecipeMeta"] | undefined,
	id: ModelTypes["UUID"],
	user?: ModelTypes["User"] | undefined,
	derivedBy?: ModelTypes["Recipe"] | undefined,
	implementationDate: Array<ModelTypes["ImplemetationDate"]>,
	modification: Array<ModelTypes["StepModification"]>,
	implementationDateByStep?: ModelTypes["ImplemetationDate"] | undefined,
	paginateImplementationDate: ModelTypes["ImplemetationDateConnection"],
	paginateModification: ModelTypes["StepModificationConnection"]
};
	["PinnedRecipeMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	user?: ModelTypes["FieldMeta"] | undefined,
	derivedBy?: ModelTypes["FieldMeta"] | undefined,
	implementationDate?: ModelTypes["FieldMeta"] | undefined,
	modification?: ModelTypes["FieldMeta"] | undefined
};
	["User"]: {
		_meta?: ModelTypes["UserMeta"] | undefined,
	id: ModelTypes["UUID"],
	firstName: string,
	lastName: string,
	email: string,
	image?: ModelTypes["Image"] | undefined,
	pinnedRecipes: Array<ModelTypes["PinnedRecipe"]>,
	createdRecipes: Array<ModelTypes["Recipe"]>,
	pinnedRecipesByImplementationDate?: ModelTypes["PinnedRecipe"] | undefined,
	pinnedRecipesByModification?: ModelTypes["PinnedRecipe"] | undefined,
	createdRecipesByLocales?: ModelTypes["Recipe"] | undefined,
	createdRecipesByPinnedRecipes?: ModelTypes["Recipe"] | undefined,
	createdRecipesByStepsGroups?: ModelTypes["Recipe"] | undefined,
	createdRecipesByTipGroups?: ModelTypes["Recipe"] | undefined,
	paginatePinnedRecipes: ModelTypes["PinnedRecipeConnection"],
	paginateCreatedRecipes: ModelTypes["RecipeConnection"]
};
	["UserMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	firstName?: ModelTypes["FieldMeta"] | undefined,
	lastName?: ModelTypes["FieldMeta"] | undefined,
	email?: ModelTypes["FieldMeta"] | undefined,
	image?: ModelTypes["FieldMeta"] | undefined,
	pinnedRecipes?: ModelTypes["FieldMeta"] | undefined,
	createdRecipes?: ModelTypes["FieldMeta"] | undefined
};
	["PinnedRecipeOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	user?: ModelTypes["UserOrderBy"] | undefined,
	derivedBy?: ModelTypes["RecipeOrderBy"] | undefined
};
	["UserPinnedRecipesByImplementationDateUniqueWhere"]: {
	implementationDate?: ModelTypes["ImplemetationDateUniqueWhere"] | undefined
};
	["UserPinnedRecipesByModificationUniqueWhere"]: {
	modification?: ModelTypes["StepModificationUniqueWhere"] | undefined
};
	["UserCreatedRecipesByLocalesUniqueWhere"]: {
	locales?: ModelTypes["RecipeLocaleUniqueWhere"] | undefined
};
	["UserCreatedRecipesByPinnedRecipesUniqueWhere"]: {
	pinnedRecipes?: ModelTypes["PinnedRecipeUniqueWhere"] | undefined
};
	["UserCreatedRecipesByStepsGroupsUniqueWhere"]: {
	stepsGroups?: ModelTypes["StepGroupUniqueWhere"] | undefined
};
	["UserCreatedRecipesByTipGroupsUniqueWhere"]: {
	tipGroups?: ModelTypes["TipGroupUniqueWhere"] | undefined
};
	["PinnedRecipeConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["PinnedRecipeEdge"]>
};
	["PinnedRecipeEdge"]: {
		node: ModelTypes["PinnedRecipe"]
};
	["RecipeConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RecipeEdge"]>
};
	["RecipeEdge"]: {
		node: ModelTypes["Recipe"]
};
	["ImplemetationDate"]: {
		_meta?: ModelTypes["ImplemetationDateMeta"] | undefined,
	id: ModelTypes["UUID"],
	step?: ModelTypes["Step"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipe"] | undefined,
	date: ModelTypes["DateTime"]
};
	["ImplemetationDateMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	step?: ModelTypes["FieldMeta"] | undefined,
	pinnedRecipe?: ModelTypes["FieldMeta"] | undefined,
	date?: ModelTypes["FieldMeta"] | undefined
};
	["Step"]: {
		_meta?: ModelTypes["StepMeta"] | undefined,
	id: ModelTypes["UUID"],
	locales: Array<ModelTypes["StepLocale"]>,
	implementationDate: Array<ModelTypes["ImplemetationDate"]>,
	hasTimer?: boolean | undefined,
	timerCount?: number | undefined,
	localesByLocale?: ModelTypes["StepLocale"] | undefined,
	localesByModificationDate?: ModelTypes["StepLocale"] | undefined,
	implementationDateByPinnedRecipe?: ModelTypes["ImplemetationDate"] | undefined,
	paginateLocales: ModelTypes["StepLocaleConnection"],
	paginateImplementationDate: ModelTypes["ImplemetationDateConnection"]
};
	["StepMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined,
	implementationDate?: ModelTypes["FieldMeta"] | undefined,
	hasTimer?: ModelTypes["FieldMeta"] | undefined,
	timerCount?: ModelTypes["FieldMeta"] | undefined
};
	["StepLocale"]: {
		_meta?: ModelTypes["StepLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	base?: ModelTypes["Step"] | undefined,
	locale?: ModelTypes["Locale"] | undefined,
	modificationDate: Array<ModelTypes["StepModification"]>,
	paginateModificationDate: ModelTypes["StepModificationConnection"]
};
	["StepLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined,
	modificationDate?: ModelTypes["FieldMeta"] | undefined
};
	["StepModification"]: {
		_meta?: ModelTypes["StepModificationMeta"] | undefined,
	id: ModelTypes["UUID"],
	date?: ModelTypes["DateTime"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipe"] | undefined,
	step?: ModelTypes["StepLocale"] | undefined
};
	["StepModificationMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	date?: ModelTypes["FieldMeta"] | undefined,
	pinnedRecipe?: ModelTypes["FieldMeta"] | undefined,
	step?: ModelTypes["FieldMeta"] | undefined
};
	["StepModificationOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	date?: ModelTypes["OrderDirection"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipeOrderBy"] | undefined,
	step?: ModelTypes["StepLocaleOrderBy"] | undefined
};
	["StepLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["StepOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined
};
	["StepOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	hasTimer?: ModelTypes["OrderDirection"] | undefined,
	timerCount?: ModelTypes["OrderDirection"] | undefined
};
	["StepModificationConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["StepModificationEdge"]>
};
	["StepModificationEdge"]: {
		node: ModelTypes["StepModification"]
};
	["ImplemetationDateOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	step?: ModelTypes["StepOrderBy"] | undefined,
	pinnedRecipe?: ModelTypes["PinnedRecipeOrderBy"] | undefined,
	date?: ModelTypes["OrderDirection"] | undefined
};
	["StepLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["StepLocalesByModificationDateUniqueWhere"]: {
	modificationDate?: ModelTypes["StepModificationUniqueWhere"] | undefined
};
	["StepImplementationDateByPinnedRecipeUniqueWhere"]: {
	pinnedRecipe?: ModelTypes["PinnedRecipeUniqueWhere"] | undefined
};
	["StepLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["StepLocaleEdge"]>
};
	["StepLocaleEdge"]: {
		node: ModelTypes["StepLocale"]
};
	["ImplemetationDateConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ImplemetationDateEdge"]>
};
	["ImplemetationDateEdge"]: {
		node: ModelTypes["ImplemetationDate"]
};
	["PinnedRecipeImplementationDateByStepUniqueWhere"]: {
	step?: ModelTypes["StepUniqueWhere"] | undefined
};
	["StepGroup"]: {
		_meta?: ModelTypes["StepGroupMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	recipe?: ModelTypes["Recipe"] | undefined,
	locales: Array<ModelTypes["StepGroupLocale"]>,
	items: Array<ModelTypes["StepGroupItem"]>,
	localesByLocale?: ModelTypes["StepGroupLocale"] | undefined,
	itemsByStep?: ModelTypes["StepGroupItem"] | undefined,
	itemsByTip?: ModelTypes["StepGroupItem"] | undefined,
	paginateLocales: ModelTypes["StepGroupLocaleConnection"],
	paginateItems: ModelTypes["StepGroupItemConnection"]
};
	["StepGroupMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	recipe?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined,
	items?: ModelTypes["FieldMeta"] | undefined
};
	["StepGroupLocale"]: {
		_meta?: ModelTypes["StepGroupLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	buttonTitle?: string | undefined,
	base?: ModelTypes["StepGroup"] | undefined,
	locale?: ModelTypes["Locale"] | undefined,
	description?: string | undefined
};
	["StepGroupLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	buttonTitle?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined,
	description?: ModelTypes["FieldMeta"] | undefined
};
	["StepGroupLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	buttonTitle?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["StepGroupOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined,
	description?: ModelTypes["OrderDirection"] | undefined
};
	["StepGroupOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	recipe?: ModelTypes["RecipeOrderBy"] | undefined
};
	["StepGroupItem"]: {
		_meta?: ModelTypes["StepGroupItemMeta"] | undefined,
	id: ModelTypes["UUID"],
	type: ModelTypes["StepGroupItemType"],
	order: number,
	group?: ModelTypes["StepGroup"] | undefined,
	step?: ModelTypes["Step"] | undefined,
	tip?: ModelTypes["Tip"] | undefined
};
	["StepGroupItemMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	type?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	group?: ModelTypes["FieldMeta"] | undefined,
	step?: ModelTypes["FieldMeta"] | undefined,
	tip?: ModelTypes["FieldMeta"] | undefined
};
	["Tip"]: {
		_meta?: ModelTypes["TipMeta"] | undefined,
	id: ModelTypes["UUID"],
	locales: Array<ModelTypes["TipLocale"]>,
	localesByLocale?: ModelTypes["TipLocale"] | undefined,
	paginateLocales: ModelTypes["TipLocaleConnection"]
};
	["TipMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined
};
	["TipLocale"]: {
		_meta?: ModelTypes["TipLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	base?: ModelTypes["Tip"] | undefined,
	locale?: ModelTypes["Locale"] | undefined
};
	["TipLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined
};
	["TipLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["TipOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined
};
	["TipOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined
};
	["TipLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["TipLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["TipLocaleEdge"]>
};
	["TipLocaleEdge"]: {
		node: ModelTypes["TipLocale"]
};
	["StepGroupItemOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	type?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	group?: ModelTypes["StepGroupOrderBy"] | undefined,
	step?: ModelTypes["StepOrderBy"] | undefined,
	tip?: ModelTypes["TipOrderBy"] | undefined
};
	["StepGroupLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["StepGroupItemsByStepUniqueWhere"]: {
	step?: ModelTypes["StepUniqueWhere"] | undefined
};
	["StepGroupItemsByTipUniqueWhere"]: {
	tip?: ModelTypes["TipUniqueWhere"] | undefined
};
	["StepGroupLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["StepGroupLocaleEdge"]>
};
	["StepGroupLocaleEdge"]: {
		node: ModelTypes["StepGroupLocale"]
};
	["StepGroupItemConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["StepGroupItemEdge"]>
};
	["StepGroupItemEdge"]: {
		node: ModelTypes["StepGroupItem"]
};
	["Category"]: {
		_meta?: ModelTypes["CategoryMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	locales: Array<ModelTypes["CategoryLocale"]>,
	recipes: Array<ModelTypes["Recipe"]>,
	image?: ModelTypes["Image"] | undefined,
	localesByLocale?: ModelTypes["CategoryLocale"] | undefined,
	localesBySeo?: ModelTypes["CategoryLocale"] | undefined,
	localesByLink?: ModelTypes["CategoryLocale"] | undefined,
	paginateLocales: ModelTypes["CategoryLocaleConnection"],
	paginateRecipes: ModelTypes["RecipeConnection"]
};
	["CategoryMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined,
	recipes?: ModelTypes["FieldMeta"] | undefined,
	image?: ModelTypes["FieldMeta"] | undefined
};
	["CategoryLocale"]: {
		_meta?: ModelTypes["CategoryLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	base?: ModelTypes["Category"] | undefined,
	seo?: ModelTypes["Seo"] | undefined,
	link?: ModelTypes["Linkable"] | undefined,
	locale?: ModelTypes["Locale"] | undefined,
	description?: string | undefined
};
	["CategoryLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	seo?: ModelTypes["FieldMeta"] | undefined,
	link?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined,
	description?: ModelTypes["FieldMeta"] | undefined
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
	["CategoryLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["CategoryLocalesBySeoUniqueWhere"]: {
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["CategoryLocalesByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["CategoryLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["CategoryLocaleEdge"]>
};
	["CategoryLocaleEdge"]: {
		node: ModelTypes["CategoryLocale"]
};
	["TipGroup"]: {
		_meta?: ModelTypes["TipGroupMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	recipe?: ModelTypes["Recipe"] | undefined,
	items: Array<ModelTypes["TipGroupItem"]>,
	locales: Array<ModelTypes["TipGroupLocale"]>,
	itemsByTip?: ModelTypes["TipGroupItem"] | undefined,
	localesByLocale?: ModelTypes["TipGroupLocale"] | undefined,
	paginateItems: ModelTypes["TipGroupItemConnection"],
	paginateLocales: ModelTypes["TipGroupLocaleConnection"]
};
	["TipGroupMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	recipe?: ModelTypes["FieldMeta"] | undefined,
	items?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined
};
	["TipGroupItem"]: {
		_meta?: ModelTypes["TipGroupItemMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	group?: ModelTypes["TipGroup"] | undefined,
	tip?: ModelTypes["Tip"] | undefined
};
	["TipGroupItemMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	group?: ModelTypes["FieldMeta"] | undefined,
	tip?: ModelTypes["FieldMeta"] | undefined
};
	["TipGroupItemOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	group?: ModelTypes["TipGroupOrderBy"] | undefined,
	tip?: ModelTypes["TipOrderBy"] | undefined
};
	["TipGroupOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	recipe?: ModelTypes["RecipeOrderBy"] | undefined
};
	["TipGroupLocale"]: {
		_meta?: ModelTypes["TipGroupLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	base?: ModelTypes["TipGroup"] | undefined,
	locale?: ModelTypes["Locale"] | undefined
};
	["TipGroupLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	description?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined
};
	["TipGroupLocaleOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	title?: ModelTypes["OrderDirection"] | undefined,
	description?: ModelTypes["OrderDirection"] | undefined,
	base?: ModelTypes["TipGroupOrderBy"] | undefined,
	locale?: ModelTypes["LocaleOrderBy"] | undefined
};
	["TipGroupItemsByTipUniqueWhere"]: {
	tip?: ModelTypes["TipUniqueWhere"] | undefined
};
	["TipGroupLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["TipGroupItemConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["TipGroupItemEdge"]>
};
	["TipGroupItemEdge"]: {
		node: ModelTypes["TipGroupItem"]
};
	["TipGroupLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["TipGroupLocaleEdge"]>
};
	["TipGroupLocaleEdge"]: {
		node: ModelTypes["TipGroupLocale"]
};
	["RecipeLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["RecipeLocalesByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["RecipePinnedRecipesByImplementationDateUniqueWhere"]: {
	implementationDate?: ModelTypes["ImplemetationDateUniqueWhere"] | undefined
};
	["RecipePinnedRecipesByModificationUniqueWhere"]: {
	modification?: ModelTypes["StepModificationUniqueWhere"] | undefined
};
	["RecipeStepsGroupsByLocalesUniqueWhere"]: {
	locales?: ModelTypes["StepGroupLocaleUniqueWhere"] | undefined
};
	["RecipeStepsGroupsByItemsUniqueWhere"]: {
	items?: ModelTypes["StepGroupItemUniqueWhere"] | undefined
};
	["RecipeTipGroupsByItemsUniqueWhere"]: {
	items?: ModelTypes["TipGroupItemUniqueWhere"] | undefined
};
	["RecipeTipGroupsByLocalesUniqueWhere"]: {
	locales?: ModelTypes["TipGroupLocaleUniqueWhere"] | undefined
};
	["RecipeLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RecipeLocaleEdge"]>
};
	["RecipeLocaleEdge"]: {
		node: ModelTypes["RecipeLocale"]
};
	["StepGroupConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["StepGroupEdge"]>
};
	["StepGroupEdge"]: {
		node: ModelTypes["StepGroup"]
};
	["CategoryConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["CategoryEdge"]>
};
	["CategoryEdge"]: {
		node: ModelTypes["Category"]
};
	["TipGroupConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["TipGroupEdge"]>
};
	["TipGroupEdge"]: {
		node: ModelTypes["TipGroup"]
};
	["PinnedRecipesPageLocale"]: {
		_meta?: ModelTypes["PinnedRecipesPageLocaleMeta"] | undefined,
	id: ModelTypes["UUID"],
	title?: string | undefined,
	link?: ModelTypes["Linkable"] | undefined,
	base?: ModelTypes["PinnedRecipesPage"] | undefined,
	locale?: ModelTypes["Locale"] | undefined,
	seo?: ModelTypes["Seo"] | undefined
};
	["PinnedRecipesPageLocaleMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	title?: ModelTypes["FieldMeta"] | undefined,
	link?: ModelTypes["FieldMeta"] | undefined,
	base?: ModelTypes["FieldMeta"] | undefined,
	locale?: ModelTypes["FieldMeta"] | undefined,
	seo?: ModelTypes["FieldMeta"] | undefined
};
	["PinnedRecipesPage"]: {
		_meta?: ModelTypes["PinnedRecipesPageMeta"] | undefined,
	id: ModelTypes["UUID"],
	unique: ModelTypes["One"],
	locales: Array<ModelTypes["PinnedRecipesPageLocale"]>,
	localesByLocale?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	localesByLink?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	localesBySeo?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	paginateLocales: ModelTypes["PinnedRecipesPageLocaleConnection"]
};
	["PinnedRecipesPageMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	unique?: ModelTypes["FieldMeta"] | undefined,
	locales?: ModelTypes["FieldMeta"] | undefined
};
	["PinnedRecipesPageLocalesByLocaleUniqueWhere"]: {
	locale?: ModelTypes["LocaleUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocalesByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocalesBySeoUniqueWhere"]: {
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["PinnedRecipesPageLocaleEdge"]>
};
	["PinnedRecipesPageLocaleEdge"]: {
		node: ModelTypes["PinnedRecipesPageLocale"]
};
	["LocaleRecipesByBaseUniqueWhere"]: {
	base?: ModelTypes["RecipeUniqueWhere"] | undefined
};
	["LocaleRecipesByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["LocaleStepsByBaseUniqueWhere"]: {
	base?: ModelTypes["StepUniqueWhere"] | undefined
};
	["LocaleStepsByModificationDateUniqueWhere"]: {
	modificationDate?: ModelTypes["StepModificationUniqueWhere"] | undefined
};
	["LocaleStepsGroupsByBaseUniqueWhere"]: {
	base?: ModelTypes["StepGroupUniqueWhere"] | undefined
};
	["LocaleHomePageByBaseUniqueWhere"]: {
	base?: ModelTypes["HomePageUniqueWhere"] | undefined
};
	["LocaleHomePageByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["LocaleHomePageBySeoUniqueWhere"]: {
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["LocaleCategoriesByBaseUniqueWhere"]: {
	base?: ModelTypes["CategoryUniqueWhere"] | undefined
};
	["LocaleCategoriesBySeoUniqueWhere"]: {
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["LocaleCategoriesByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["LocaleTipsByBaseUniqueWhere"]: {
	base?: ModelTypes["TipUniqueWhere"] | undefined
};
	["LocaleTipGroupsByBaseUniqueWhere"]: {
	base?: ModelTypes["TipGroupUniqueWhere"] | undefined
};
	["LocalePinnedRecipesPageByBaseUniqueWhere"]: {
	base?: ModelTypes["PinnedRecipesPageUniqueWhere"] | undefined
};
	["LocalePinnedRecipesPageByLinkUniqueWhere"]: {
	link?: ModelTypes["LinkableUniqueWhere"] | undefined
};
	["LocalePinnedRecipesPageBySeoUniqueWhere"]: {
	seo?: ModelTypes["SeoUniqueWhere"] | undefined
};
	["ContentReferenceLinkableItemOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	item?: ModelTypes["LinkableOrderBy"] | undefined,
	reference?: ModelTypes["ContentReferenceOrderBy"] | undefined
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
	["LinkableConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LinkableEdge"]>
};
	["LinkableEdge"]: {
		node: ModelTypes["Linkable"]
};
	["LocaleConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["LocaleEdge"]>
};
	["LocaleEdge"]: {
		node: ModelTypes["Locale"]
};
	["ImageConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["ImageEdge"]>
};
	["ImageEdge"]: {
		node: ModelTypes["Image"]
};
	["UserUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	email?: string | undefined,
	pinnedRecipes?: ModelTypes["PinnedRecipeUniqueWhere"] | undefined,
	createdRecipes?: ModelTypes["RecipeUniqueWhere"] | undefined
};
	["UserConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["UserEdge"]>
};
	["UserEdge"]: {
		node: ModelTypes["User"]
};
	["StepConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["StepEdge"]>
};
	["StepEdge"]: {
		node: ModelTypes["Step"]
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
	["PinnedRecipeCreateInput"]: {
	user?: ModelTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined,
	derivedBy?: ModelTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined,
	implementationDate?: Array<ModelTypes["PinnedRecipeCreateImplementationDateEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["PinnedRecipeCreateUserEntityRelationInput"]: {
	connect?: ModelTypes["UserUniqueWhere"] | undefined
};
	["PinnedRecipeCreateDerivedByEntityRelationInput"]: {
	connect?: ModelTypes["RecipeUniqueWhere"] | undefined
};
	["PinnedRecipeCreateImplementationDateEntityRelationInput"]: {
	connect?: ModelTypes["ImplemetationDateUniqueWhere"] | undefined,
	create?: ModelTypes["ImplemetationDateWithoutPinnedRecipeCreateInput"] | undefined,
	alias?: string | undefined
};
	["ImplemetationDateWithoutPinnedRecipeCreateInput"]: {
	step?: ModelTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined,
	date?: ModelTypes["DateTime"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ImplemetationDateCreateStepEntityRelationInput"]: {
	connect?: ModelTypes["StepUniqueWhere"] | undefined
};
	["ImplemetationDateCreateInput"]: {
	step?: ModelTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined,
	pinnedRecipe?: ModelTypes["ImplemetationDateCreatePinnedRecipeEntityRelationInput"] | undefined,
	date?: ModelTypes["DateTime"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ImplemetationDateCreatePinnedRecipeEntityRelationInput"]: {
	connect?: ModelTypes["PinnedRecipeUniqueWhere"] | undefined,
	create?: ModelTypes["PinnedRecipeWithoutImplementationDateCreateInput"] | undefined
};
	["PinnedRecipeWithoutImplementationDateCreateInput"]: {
	user?: ModelTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined,
	derivedBy?: ModelTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["HomePageConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["HomePageEdge"]>
};
	["HomePageEdge"]: {
		node: ModelTypes["HomePage"]
};
	["SeoConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["SeoEdge"]>
};
	["SeoEdge"]: {
		node: ModelTypes["Seo"]
};
	["RecipeList"]: {
		_meta?: ModelTypes["RecipeListMeta"] | undefined,
	id: ModelTypes["UUID"],
	items: Array<ModelTypes["RecipeListItem"]>,
	paginateItems: ModelTypes["RecipeListItemConnection"]
};
	["RecipeListMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	items?: ModelTypes["FieldMeta"] | undefined
};
	["RecipeListItem"]: {
		_meta?: ModelTypes["RecipeListItemMeta"] | undefined,
	id: ModelTypes["UUID"],
	order: number,
	list?: ModelTypes["RecipeList"] | undefined,
	recipe?: ModelTypes["Recipe"] | undefined
};
	["RecipeListItemMeta"]: {
		id?: ModelTypes["FieldMeta"] | undefined,
	order?: ModelTypes["FieldMeta"] | undefined,
	list?: ModelTypes["FieldMeta"] | undefined,
	recipe?: ModelTypes["FieldMeta"] | undefined
};
	["RecipeListWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	items?: ModelTypes["RecipeListItemWhere"] | undefined,
	and?: Array<ModelTypes["RecipeListWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["RecipeListWhere"] | undefined> | undefined,
	not?: ModelTypes["RecipeListWhere"] | undefined
};
	["RecipeListItemWhere"]: {
	id?: ModelTypes["UUIDCondition"] | undefined,
	order?: ModelTypes["IntCondition"] | undefined,
	list?: ModelTypes["RecipeListWhere"] | undefined,
	recipe?: ModelTypes["RecipeWhere"] | undefined,
	and?: Array<ModelTypes["RecipeListItemWhere"] | undefined> | undefined,
	or?: Array<ModelTypes["RecipeListItemWhere"] | undefined> | undefined,
	not?: ModelTypes["RecipeListItemWhere"] | undefined
};
	["RecipeListItemOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined,
	order?: ModelTypes["OrderDirection"] | undefined,
	list?: ModelTypes["RecipeListOrderBy"] | undefined,
	recipe?: ModelTypes["RecipeOrderBy"] | undefined
};
	["RecipeListOrderBy"]: {
	_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: ModelTypes["OrderDirection"] | undefined
};
	["RecipeListItemConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RecipeListItemEdge"]>
};
	["RecipeListItemEdge"]: {
		node: ModelTypes["RecipeListItem"]
};
	["RecipeListUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined,
	items?: ModelTypes["RecipeListItemUniqueWhere"] | undefined
};
	["RecipeListItemUniqueWhere"]: {
	id?: ModelTypes["UUID"] | undefined
};
	["RecipeListConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["RecipeListEdge"]>
};
	["RecipeListEdge"]: {
		node: ModelTypes["RecipeList"]
};
	["TipConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["TipEdge"]>
};
	["TipEdge"]: {
		node: ModelTypes["Tip"]
};
	["PinnedRecipesPageConnection"]: {
		pageInfo: ModelTypes["PageInfo"],
	edges: Array<ModelTypes["PinnedRecipesPageEdge"]>
};
	["PinnedRecipesPageEdge"]: {
		node: ModelTypes["PinnedRecipesPage"]
};
	["QueryTransaction"]: {
		getContent?: ModelTypes["Content"] | undefined,
	listContent: Array<ModelTypes["Content"]>,
	paginateContent: ModelTypes["ContentConnection"],
	getContentBlock?: ModelTypes["ContentBlock"] | undefined,
	listContentBlock: Array<ModelTypes["ContentBlock"]>,
	paginateContentBlock: ModelTypes["ContentBlockConnection"],
	getContentReference?: ModelTypes["ContentReference"] | undefined,
	listContentReference: Array<ModelTypes["ContentReference"]>,
	paginateContentReference: ModelTypes["ContentReferenceConnection"],
	getLink?: ModelTypes["Link"] | undefined,
	listLink: Array<ModelTypes["Link"]>,
	paginateLink: ModelTypes["LinkConnection"],
	getLinkable?: ModelTypes["Linkable"] | undefined,
	listLinkable: Array<ModelTypes["Linkable"]>,
	paginateLinkable: ModelTypes["LinkableConnection"],
	getContentReferenceLinkableItem?: ModelTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<ModelTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: ModelTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: ModelTypes["Locale"] | undefined,
	listLocale: Array<ModelTypes["Locale"]>,
	paginateLocale: ModelTypes["LocaleConnection"],
	getRecipe?: ModelTypes["Recipe"] | undefined,
	listRecipe: Array<ModelTypes["Recipe"]>,
	paginateRecipe: ModelTypes["RecipeConnection"],
	getRecipeLocale?: ModelTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<ModelTypes["RecipeLocale"]>,
	paginateRecipeLocale: ModelTypes["RecipeLocaleConnection"],
	getImage?: ModelTypes["Image"] | undefined,
	listImage: Array<ModelTypes["Image"]>,
	paginateImage: ModelTypes["ImageConnection"],
	getUser?: ModelTypes["User"] | undefined,
	listUser: Array<ModelTypes["User"]>,
	paginateUser: ModelTypes["UserConnection"],
	getStep?: ModelTypes["Step"] | undefined,
	listStep: Array<ModelTypes["Step"]>,
	paginateStep: ModelTypes["StepConnection"],
	getStepLocale?: ModelTypes["StepLocale"] | undefined,
	listStepLocale: Array<ModelTypes["StepLocale"]>,
	paginateStepLocale: ModelTypes["StepLocaleConnection"],
	getPinnedRecipe?: ModelTypes["PinnedRecipe"] | undefined,
	listPinnedRecipe: Array<ModelTypes["PinnedRecipe"]>,
	paginatePinnedRecipe: ModelTypes["PinnedRecipeConnection"],
	validateCreatePinnedRecipe: ModelTypes["_ValidationResult"],
	getImplemetationDate?: ModelTypes["ImplemetationDate"] | undefined,
	listImplemetationDate: Array<ModelTypes["ImplemetationDate"]>,
	paginateImplemetationDate: ModelTypes["ImplemetationDateConnection"],
	validateCreateImplemetationDate: ModelTypes["_ValidationResult"],
	getStepGroup?: ModelTypes["StepGroup"] | undefined,
	listStepGroup: Array<ModelTypes["StepGroup"]>,
	paginateStepGroup: ModelTypes["StepGroupConnection"],
	getStepGroupLocale?: ModelTypes["StepGroupLocale"] | undefined,
	listStepGroupLocale: Array<ModelTypes["StepGroupLocale"]>,
	paginateStepGroupLocale: ModelTypes["StepGroupLocaleConnection"],
	getHomePage?: ModelTypes["HomePage"] | undefined,
	listHomePage: Array<ModelTypes["HomePage"]>,
	paginateHomePage: ModelTypes["HomePageConnection"],
	getHomePageLocale?: ModelTypes["HomePageLocale"] | undefined,
	listHomePageLocale: Array<ModelTypes["HomePageLocale"]>,
	paginateHomePageLocale: ModelTypes["HomePageLocaleConnection"],
	getSeo?: ModelTypes["Seo"] | undefined,
	listSeo: Array<ModelTypes["Seo"]>,
	paginateSeo: ModelTypes["SeoConnection"],
	getRecipeList?: ModelTypes["RecipeList"] | undefined,
	listRecipeList: Array<ModelTypes["RecipeList"]>,
	paginateRecipeList: ModelTypes["RecipeListConnection"],
	getRecipeListItem?: ModelTypes["RecipeListItem"] | undefined,
	listRecipeListItem: Array<ModelTypes["RecipeListItem"]>,
	paginateRecipeListItem: ModelTypes["RecipeListItemConnection"],
	getCategory?: ModelTypes["Category"] | undefined,
	listCategory: Array<ModelTypes["Category"]>,
	paginateCategory: ModelTypes["CategoryConnection"],
	getCategoryLocale?: ModelTypes["CategoryLocale"] | undefined,
	listCategoryLocale: Array<ModelTypes["CategoryLocale"]>,
	paginateCategoryLocale: ModelTypes["CategoryLocaleConnection"],
	getStepGroupItem?: ModelTypes["StepGroupItem"] | undefined,
	listStepGroupItem: Array<ModelTypes["StepGroupItem"]>,
	paginateStepGroupItem: ModelTypes["StepGroupItemConnection"],
	getTip?: ModelTypes["Tip"] | undefined,
	listTip: Array<ModelTypes["Tip"]>,
	paginateTip: ModelTypes["TipConnection"],
	getTipLocale?: ModelTypes["TipLocale"] | undefined,
	listTipLocale: Array<ModelTypes["TipLocale"]>,
	paginateTipLocale: ModelTypes["TipLocaleConnection"],
	getStepModification?: ModelTypes["StepModification"] | undefined,
	listStepModification: Array<ModelTypes["StepModification"]>,
	paginateStepModification: ModelTypes["StepModificationConnection"],
	getTipGroup?: ModelTypes["TipGroup"] | undefined,
	listTipGroup: Array<ModelTypes["TipGroup"]>,
	paginateTipGroup: ModelTypes["TipGroupConnection"],
	getTipGroupItem?: ModelTypes["TipGroupItem"] | undefined,
	listTipGroupItem: Array<ModelTypes["TipGroupItem"]>,
	paginateTipGroupItem: ModelTypes["TipGroupItemConnection"],
	getTipGroupLocale?: ModelTypes["TipGroupLocale"] | undefined,
	listTipGroupLocale: Array<ModelTypes["TipGroupLocale"]>,
	paginateTipGroupLocale: ModelTypes["TipGroupLocaleConnection"],
	getPinnedRecipesPage?: ModelTypes["PinnedRecipesPage"] | undefined,
	listPinnedRecipesPage: Array<ModelTypes["PinnedRecipesPage"]>,
	paginatePinnedRecipesPage: ModelTypes["PinnedRecipesPageConnection"],
	getPinnedRecipesPageLocale?: ModelTypes["PinnedRecipesPageLocale"] | undefined,
	listPinnedRecipesPageLocale: Array<ModelTypes["PinnedRecipesPageLocale"]>,
	paginatePinnedRecipesPageLocale: ModelTypes["PinnedRecipesPageLocaleConnection"]
};
	["Info"]: {
		description?: string | undefined
};
	["Mutation"]: {
		createPinnedRecipe: ModelTypes["PinnedRecipeCreateResult"],
	deletePinnedRecipe: ModelTypes["PinnedRecipeDeleteResult"],
	createImplemetationDate: ModelTypes["ImplemetationDateCreateResult"],
	deleteImplemetationDate: ModelTypes["ImplemetationDateDeleteResult"],
	transaction: ModelTypes["MutationTransaction"],
	query: ModelTypes["Query"],
	generateUploadUrl: ModelTypes["S3SignedUpload"],
	generateReadUrl: ModelTypes["S3SignedRead"]
};
	["PinnedRecipeCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["PinnedRecipe"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["MutationResult"]: ModelTypes["PinnedRecipeCreateResult"] | ModelTypes["PinnedRecipeDeleteResult"] | ModelTypes["ImplemetationDateCreateResult"] | ModelTypes["ImplemetationDateDeleteResult"];
	["_MutationError"]: {
		path: Array<ModelTypes["_PathFragment"]>,
	paths: Array<Array<ModelTypes["_PathFragment"]>>,
	type: ModelTypes["_MutationErrorType"],
	message?: string | undefined
};
	["_MutationErrorType"]:_MutationErrorType;
	["PinnedRecipeDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["PinnedRecipe"] | undefined
};
	["ImplemetationDateCreateResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ImplemetationDate"] | undefined,
	validation: ModelTypes["_ValidationResult"]
};
	["ImplemetationDateDeleteResult"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	node?: ModelTypes["ImplemetationDate"] | undefined
};
	["MutationTransaction"]: {
		ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<ModelTypes["_MutationError"]>,
	validation: ModelTypes["_ValidationResult"],
	createPinnedRecipe: ModelTypes["PinnedRecipeCreateResult"],
	deletePinnedRecipe: ModelTypes["PinnedRecipeDeleteResult"],
	createImplemetationDate: ModelTypes["ImplemetationDateCreateResult"],
	deleteImplemetationDate: ModelTypes["ImplemetationDateDeleteResult"],
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
 */
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
	getContentBlock?: GraphQLTypes["ContentBlock"] | undefined,
	listContentBlock: Array<GraphQLTypes["ContentBlock"]>,
	paginateContentBlock: GraphQLTypes["ContentBlockConnection"],
	getContentReference?: GraphQLTypes["ContentReference"] | undefined,
	listContentReference: Array<GraphQLTypes["ContentReference"]>,
	paginateContentReference: GraphQLTypes["ContentReferenceConnection"],
	getLink?: GraphQLTypes["Link"] | undefined,
	listLink: Array<GraphQLTypes["Link"]>,
	paginateLink: GraphQLTypes["LinkConnection"],
	getLinkable?: GraphQLTypes["Linkable"] | undefined,
	listLinkable: Array<GraphQLTypes["Linkable"]>,
	paginateLinkable: GraphQLTypes["LinkableConnection"],
	getContentReferenceLinkableItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: GraphQLTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: GraphQLTypes["Locale"] | undefined,
	listLocale: Array<GraphQLTypes["Locale"]>,
	paginateLocale: GraphQLTypes["LocaleConnection"],
	getRecipe?: GraphQLTypes["Recipe"] | undefined,
	listRecipe: Array<GraphQLTypes["Recipe"]>,
	paginateRecipe: GraphQLTypes["RecipeConnection"],
	getRecipeLocale?: GraphQLTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<GraphQLTypes["RecipeLocale"]>,
	paginateRecipeLocale: GraphQLTypes["RecipeLocaleConnection"],
	getImage?: GraphQLTypes["Image"] | undefined,
	listImage: Array<GraphQLTypes["Image"]>,
	paginateImage: GraphQLTypes["ImageConnection"],
	getUser?: GraphQLTypes["User"] | undefined,
	listUser: Array<GraphQLTypes["User"]>,
	paginateUser: GraphQLTypes["UserConnection"],
	getStep?: GraphQLTypes["Step"] | undefined,
	listStep: Array<GraphQLTypes["Step"]>,
	paginateStep: GraphQLTypes["StepConnection"],
	getStepLocale?: GraphQLTypes["StepLocale"] | undefined,
	listStepLocale: Array<GraphQLTypes["StepLocale"]>,
	paginateStepLocale: GraphQLTypes["StepLocaleConnection"],
	getPinnedRecipe?: GraphQLTypes["PinnedRecipe"] | undefined,
	listPinnedRecipe: Array<GraphQLTypes["PinnedRecipe"]>,
	paginatePinnedRecipe: GraphQLTypes["PinnedRecipeConnection"],
	validateCreatePinnedRecipe: GraphQLTypes["_ValidationResult"],
	getImplemetationDate?: GraphQLTypes["ImplemetationDate"] | undefined,
	listImplemetationDate: Array<GraphQLTypes["ImplemetationDate"]>,
	paginateImplemetationDate: GraphQLTypes["ImplemetationDateConnection"],
	validateCreateImplemetationDate: GraphQLTypes["_ValidationResult"],
	getStepGroup?: GraphQLTypes["StepGroup"] | undefined,
	listStepGroup: Array<GraphQLTypes["StepGroup"]>,
	paginateStepGroup: GraphQLTypes["StepGroupConnection"],
	getStepGroupLocale?: GraphQLTypes["StepGroupLocale"] | undefined,
	listStepGroupLocale: Array<GraphQLTypes["StepGroupLocale"]>,
	paginateStepGroupLocale: GraphQLTypes["StepGroupLocaleConnection"],
	getHomePage?: GraphQLTypes["HomePage"] | undefined,
	listHomePage: Array<GraphQLTypes["HomePage"]>,
	paginateHomePage: GraphQLTypes["HomePageConnection"],
	getHomePageLocale?: GraphQLTypes["HomePageLocale"] | undefined,
	listHomePageLocale: Array<GraphQLTypes["HomePageLocale"]>,
	paginateHomePageLocale: GraphQLTypes["HomePageLocaleConnection"],
	getSeo?: GraphQLTypes["Seo"] | undefined,
	listSeo: Array<GraphQLTypes["Seo"]>,
	paginateSeo: GraphQLTypes["SeoConnection"],
	getRecipeList?: GraphQLTypes["RecipeList"] | undefined,
	listRecipeList: Array<GraphQLTypes["RecipeList"]>,
	paginateRecipeList: GraphQLTypes["RecipeListConnection"],
	getRecipeListItem?: GraphQLTypes["RecipeListItem"] | undefined,
	listRecipeListItem: Array<GraphQLTypes["RecipeListItem"]>,
	paginateRecipeListItem: GraphQLTypes["RecipeListItemConnection"],
	getCategory?: GraphQLTypes["Category"] | undefined,
	listCategory: Array<GraphQLTypes["Category"]>,
	paginateCategory: GraphQLTypes["CategoryConnection"],
	getCategoryLocale?: GraphQLTypes["CategoryLocale"] | undefined,
	listCategoryLocale: Array<GraphQLTypes["CategoryLocale"]>,
	paginateCategoryLocale: GraphQLTypes["CategoryLocaleConnection"],
	getStepGroupItem?: GraphQLTypes["StepGroupItem"] | undefined,
	listStepGroupItem: Array<GraphQLTypes["StepGroupItem"]>,
	paginateStepGroupItem: GraphQLTypes["StepGroupItemConnection"],
	getTip?: GraphQLTypes["Tip"] | undefined,
	listTip: Array<GraphQLTypes["Tip"]>,
	paginateTip: GraphQLTypes["TipConnection"],
	getTipLocale?: GraphQLTypes["TipLocale"] | undefined,
	listTipLocale: Array<GraphQLTypes["TipLocale"]>,
	paginateTipLocale: GraphQLTypes["TipLocaleConnection"],
	getStepModification?: GraphQLTypes["StepModification"] | undefined,
	listStepModification: Array<GraphQLTypes["StepModification"]>,
	paginateStepModification: GraphQLTypes["StepModificationConnection"],
	getTipGroup?: GraphQLTypes["TipGroup"] | undefined,
	listTipGroup: Array<GraphQLTypes["TipGroup"]>,
	paginateTipGroup: GraphQLTypes["TipGroupConnection"],
	getTipGroupItem?: GraphQLTypes["TipGroupItem"] | undefined,
	listTipGroupItem: Array<GraphQLTypes["TipGroupItem"]>,
	paginateTipGroupItem: GraphQLTypes["TipGroupItemConnection"],
	getTipGroupLocale?: GraphQLTypes["TipGroupLocale"] | undefined,
	listTipGroupLocale: Array<GraphQLTypes["TipGroupLocale"]>,
	paginateTipGroupLocale: GraphQLTypes["TipGroupLocaleConnection"],
	getPinnedRecipesPage?: GraphQLTypes["PinnedRecipesPage"] | undefined,
	listPinnedRecipesPage: Array<GraphQLTypes["PinnedRecipesPage"]>,
	paginatePinnedRecipesPage: GraphQLTypes["PinnedRecipesPageConnection"],
	getPinnedRecipesPageLocale?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	listPinnedRecipesPageLocale: Array<GraphQLTypes["PinnedRecipesPageLocale"]>,
	paginatePinnedRecipesPageLocale: GraphQLTypes["PinnedRecipesPageLocaleConnection"],
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
	homePage?: GraphQLTypes["HomePageLocaleWhere"] | undefined,
	category?: GraphQLTypes["CategoryLocaleWhere"] | undefined,
	recipe?: GraphQLTypes["RecipeLocaleWhere"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["PinnedRecipesPageLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["LinkableWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["LinkableWhere"] | undefined> | undefined,
	not?: GraphQLTypes["LinkableWhere"] | undefined
};
	["HomePageLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	base?: GraphQLTypes["HomePageWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	link?: GraphQLTypes["LinkableWhere"] | undefined,
	seo?: GraphQLTypes["SeoWhere"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	and?: Array<GraphQLTypes["HomePageLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["HomePageLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["HomePageLocaleWhere"] | undefined
};
	["HomePageWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	locales?: GraphQLTypes["HomePageLocaleWhere"] | undefined,
	unique?: GraphQLTypes["OneCondition"] | undefined,
	and?: Array<GraphQLTypes["HomePageWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["HomePageWhere"] | undefined> | undefined,
	not?: GraphQLTypes["HomePageWhere"] | undefined
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
	["One"]: One;
	["LocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	code?: GraphQLTypes["StringCondition"] | undefined,
	label?: GraphQLTypes["StringCondition"] | undefined,
	recipes?: GraphQLTypes["RecipeLocaleWhere"] | undefined,
	steps?: GraphQLTypes["StepLocaleWhere"] | undefined,
	stepsGroups?: GraphQLTypes["StepGroupLocaleWhere"] | undefined,
	homePage?: GraphQLTypes["HomePageLocaleWhere"] | undefined,
	categories?: GraphQLTypes["CategoryLocaleWhere"] | undefined,
	tips?: GraphQLTypes["TipLocaleWhere"] | undefined,
	tipGroups?: GraphQLTypes["TipGroupLocaleWhere"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["PinnedRecipesPageLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["LocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["LocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["LocaleWhere"] | undefined
};
	["RecipeLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	description?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["RecipeWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	tileDescription?: GraphQLTypes["StringCondition"] | undefined,
	link?: GraphQLTypes["LinkableWhere"] | undefined,
	and?: Array<GraphQLTypes["RecipeLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["RecipeLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["RecipeLocaleWhere"] | undefined
};
	["RecipeWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	publishDate?: GraphQLTypes["DateCondition"] | undefined,
	price?: GraphQLTypes["StringCondition"] | undefined,
	locales?: GraphQLTypes["RecipeLocaleWhere"] | undefined,
	mainImage?: GraphQLTypes["ImageWhere"] | undefined,
	pinnedRecipes?: GraphQLTypes["PinnedRecipeWhere"] | undefined,
	createdBy?: GraphQLTypes["UserWhere"] | undefined,
	stepsGroups?: GraphQLTypes["StepGroupWhere"] | undefined,
	categories?: GraphQLTypes["CategoryWhere"] | undefined,
	tileImage?: GraphQLTypes["ImageWhere"] | undefined,
	tipGroups?: GraphQLTypes["TipGroupWhere"] | undefined,
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
	["Date"]: "scalar" & { name: "Date" };
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
	["PinnedRecipeWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	user?: GraphQLTypes["UserWhere"] | undefined,
	derivedBy?: GraphQLTypes["RecipeWhere"] | undefined,
	implementationDate?: GraphQLTypes["ImplemetationDateWhere"] | undefined,
	modification?: GraphQLTypes["StepModificationWhere"] | undefined,
	and?: Array<GraphQLTypes["PinnedRecipeWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["PinnedRecipeWhere"] | undefined> | undefined,
	not?: GraphQLTypes["PinnedRecipeWhere"] | undefined
};
	["UserWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	firstName?: GraphQLTypes["StringCondition"] | undefined,
	lastName?: GraphQLTypes["StringCondition"] | undefined,
	email?: GraphQLTypes["StringCondition"] | undefined,
	image?: GraphQLTypes["ImageWhere"] | undefined,
	pinnedRecipes?: GraphQLTypes["PinnedRecipeWhere"] | undefined,
	createdRecipes?: GraphQLTypes["RecipeWhere"] | undefined,
	and?: Array<GraphQLTypes["UserWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["UserWhere"] | undefined> | undefined,
	not?: GraphQLTypes["UserWhere"] | undefined
};
	["ImplemetationDateWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	step?: GraphQLTypes["StepWhere"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipeWhere"] | undefined,
	date?: GraphQLTypes["DateTimeCondition"] | undefined,
	and?: Array<GraphQLTypes["ImplemetationDateWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["ImplemetationDateWhere"] | undefined> | undefined,
	not?: GraphQLTypes["ImplemetationDateWhere"] | undefined
};
	["StepWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	locales?: GraphQLTypes["StepLocaleWhere"] | undefined,
	implementationDate?: GraphQLTypes["ImplemetationDateWhere"] | undefined,
	hasTimer?: GraphQLTypes["BooleanCondition"] | undefined,
	timerCount?: GraphQLTypes["IntCondition"] | undefined,
	and?: Array<GraphQLTypes["StepWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["StepWhere"] | undefined> | undefined,
	not?: GraphQLTypes["StepWhere"] | undefined
};
	["StepLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["StepWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	modificationDate?: GraphQLTypes["StepModificationWhere"] | undefined,
	and?: Array<GraphQLTypes["StepLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["StepLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["StepLocaleWhere"] | undefined
};
	["StepModificationWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	date?: GraphQLTypes["DateTimeCondition"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipeWhere"] | undefined,
	step?: GraphQLTypes["StepLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["StepModificationWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["StepModificationWhere"] | undefined> | undefined,
	not?: GraphQLTypes["StepModificationWhere"] | undefined
};
	["DateTimeCondition"]: {
		and?: Array<GraphQLTypes["DateTimeCondition"]> | undefined,
	or?: Array<GraphQLTypes["DateTimeCondition"]> | undefined,
	not?: GraphQLTypes["DateTimeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["DateTime"] | undefined,
	notEq?: GraphQLTypes["DateTime"] | undefined,
	in?: Array<GraphQLTypes["DateTime"]> | undefined,
	notIn?: Array<GraphQLTypes["DateTime"]> | undefined,
	lt?: GraphQLTypes["DateTime"] | undefined,
	lte?: GraphQLTypes["DateTime"] | undefined,
	gt?: GraphQLTypes["DateTime"] | undefined,
	gte?: GraphQLTypes["DateTime"] | undefined
};
	["DateTime"]: "scalar" & { name: "DateTime" };
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
	["StepGroupWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	recipe?: GraphQLTypes["RecipeWhere"] | undefined,
	locales?: GraphQLTypes["StepGroupLocaleWhere"] | undefined,
	items?: GraphQLTypes["StepGroupItemWhere"] | undefined,
	and?: Array<GraphQLTypes["StepGroupWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["StepGroupWhere"] | undefined> | undefined,
	not?: GraphQLTypes["StepGroupWhere"] | undefined
};
	["StepGroupLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	buttonTitle?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["StepGroupWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	description?: GraphQLTypes["StringCondition"] | undefined,
	and?: Array<GraphQLTypes["StepGroupLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["StepGroupLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["StepGroupLocaleWhere"] | undefined
};
	["StepGroupItemWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	type?: GraphQLTypes["StepGroupItemTypeCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	group?: GraphQLTypes["StepGroupWhere"] | undefined,
	step?: GraphQLTypes["StepWhere"] | undefined,
	tip?: GraphQLTypes["TipWhere"] | undefined,
	and?: Array<GraphQLTypes["StepGroupItemWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["StepGroupItemWhere"] | undefined> | undefined,
	not?: GraphQLTypes["StepGroupItemWhere"] | undefined
};
	["StepGroupItemTypeCondition"]: {
		and?: Array<GraphQLTypes["StepGroupItemTypeCondition"]> | undefined,
	or?: Array<GraphQLTypes["StepGroupItemTypeCondition"]> | undefined,
	not?: GraphQLTypes["StepGroupItemTypeCondition"] | undefined,
	null?: boolean | undefined,
	isNull?: boolean | undefined,
	eq?: GraphQLTypes["StepGroupItemType"] | undefined,
	notEq?: GraphQLTypes["StepGroupItemType"] | undefined,
	in?: Array<GraphQLTypes["StepGroupItemType"]> | undefined,
	notIn?: Array<GraphQLTypes["StepGroupItemType"]> | undefined,
	lt?: GraphQLTypes["StepGroupItemType"] | undefined,
	lte?: GraphQLTypes["StepGroupItemType"] | undefined,
	gt?: GraphQLTypes["StepGroupItemType"] | undefined,
	gte?: GraphQLTypes["StepGroupItemType"] | undefined
};
	["StepGroupItemType"]: StepGroupItemType;
	["TipWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	locales?: GraphQLTypes["TipLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["TipWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["TipWhere"] | undefined> | undefined,
	not?: GraphQLTypes["TipWhere"] | undefined
};
	["TipLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["TipWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["TipLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["TipLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["TipLocaleWhere"] | undefined
};
	["CategoryWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	locales?: GraphQLTypes["CategoryLocaleWhere"] | undefined,
	recipes?: GraphQLTypes["RecipeWhere"] | undefined,
	image?: GraphQLTypes["ImageWhere"] | undefined,
	and?: Array<GraphQLTypes["CategoryWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["CategoryWhere"] | undefined> | undefined,
	not?: GraphQLTypes["CategoryWhere"] | undefined
};
	["CategoryLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["CategoryWhere"] | undefined,
	seo?: GraphQLTypes["SeoWhere"] | undefined,
	link?: GraphQLTypes["LinkableWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	description?: GraphQLTypes["StringCondition"] | undefined,
	and?: Array<GraphQLTypes["CategoryLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["CategoryLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["CategoryLocaleWhere"] | undefined
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
	["TipGroupWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	recipe?: GraphQLTypes["RecipeWhere"] | undefined,
	items?: GraphQLTypes["TipGroupItemWhere"] | undefined,
	locales?: GraphQLTypes["TipGroupLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["TipGroupWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["TipGroupWhere"] | undefined> | undefined,
	not?: GraphQLTypes["TipGroupWhere"] | undefined
};
	["TipGroupItemWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	group?: GraphQLTypes["TipGroupWhere"] | undefined,
	tip?: GraphQLTypes["TipWhere"] | undefined,
	and?: Array<GraphQLTypes["TipGroupItemWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["TipGroupItemWhere"] | undefined> | undefined,
	not?: GraphQLTypes["TipGroupItemWhere"] | undefined
};
	["TipGroupLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	description?: GraphQLTypes["StringCondition"] | undefined,
	base?: GraphQLTypes["TipGroupWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["TipGroupLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["TipGroupLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["TipGroupLocaleWhere"] | undefined
};
	["PinnedRecipesPageLocaleWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	title?: GraphQLTypes["StringCondition"] | undefined,
	link?: GraphQLTypes["LinkableWhere"] | undefined,
	base?: GraphQLTypes["PinnedRecipesPageWhere"] | undefined,
	locale?: GraphQLTypes["LocaleWhere"] | undefined,
	seo?: GraphQLTypes["SeoWhere"] | undefined,
	and?: Array<GraphQLTypes["PinnedRecipesPageLocaleWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["PinnedRecipesPageLocaleWhere"] | undefined> | undefined,
	not?: GraphQLTypes["PinnedRecipesPageLocaleWhere"] | undefined
};
	["PinnedRecipesPageWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	unique?: GraphQLTypes["OneCondition"] | undefined,
	locales?: GraphQLTypes["PinnedRecipesPageLocaleWhere"] | undefined,
	and?: Array<GraphQLTypes["PinnedRecipesPageWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["PinnedRecipesPageWhere"] | undefined> | undefined,
	not?: GraphQLTypes["PinnedRecipesPageWhere"] | undefined
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
	url: string,
	homePage?: GraphQLTypes["HomePageLocale"] | undefined,
	category?: GraphQLTypes["CategoryLocale"] | undefined,
	recipe?: GraphQLTypes["RecipeLocale"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined
};
	["LinkableMeta"]: {
	__typename: "LinkableMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	url?: GraphQLTypes["FieldMeta"] | undefined,
	homePage?: GraphQLTypes["FieldMeta"] | undefined,
	category?: GraphQLTypes["FieldMeta"] | undefined,
	recipe?: GraphQLTypes["FieldMeta"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["FieldMeta"] | undefined
};
	["HomePageLocale"]: {
	__typename: "HomePageLocale",
	_meta?: GraphQLTypes["HomePageLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	base?: GraphQLTypes["HomePage"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined,
	link?: GraphQLTypes["Linkable"] | undefined,
	seo?: GraphQLTypes["Seo"] | undefined,
	title?: string | undefined
};
	["HomePageLocaleMeta"]: {
	__typename: "HomePageLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined,
	link?: GraphQLTypes["FieldMeta"] | undefined,
	seo?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined
};
	["HomePage"]: {
	__typename: "HomePage",
	_meta?: GraphQLTypes["HomePageMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	locales: Array<GraphQLTypes["HomePageLocale"]>,
	unique: GraphQLTypes["One"],
	localesByLocale?: GraphQLTypes["HomePageLocale"] | undefined,
	localesByLink?: GraphQLTypes["HomePageLocale"] | undefined,
	localesBySeo?: GraphQLTypes["HomePageLocale"] | undefined,
	paginateLocales: GraphQLTypes["HomePageLocaleConnection"]
};
	["HomePageMeta"]: {
	__typename: "HomePageMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined,
	unique?: GraphQLTypes["FieldMeta"] | undefined
};
	["HomePageLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["HomePageOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined,
	link?: GraphQLTypes["LinkableOrderBy"] | undefined,
	seo?: GraphQLTypes["SeoOrderBy"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined
};
	["OrderDirection"]: OrderDirection;
	["HomePageOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	unique?: GraphQLTypes["OrderDirection"] | undefined
};
	["LocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	code?: GraphQLTypes["OrderDirection"] | undefined,
	label?: GraphQLTypes["OrderDirection"] | undefined
};
	["LinkableOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	url?: GraphQLTypes["OrderDirection"] | undefined,
	homePage?: GraphQLTypes["HomePageLocaleOrderBy"] | undefined,
	category?: GraphQLTypes["CategoryLocaleOrderBy"] | undefined,
	recipe?: GraphQLTypes["RecipeLocaleOrderBy"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["PinnedRecipesPageLocaleOrderBy"] | undefined
};
	["CategoryLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["CategoryOrderBy"] | undefined,
	seo?: GraphQLTypes["SeoOrderBy"] | undefined,
	link?: GraphQLTypes["LinkableOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined,
	description?: GraphQLTypes["OrderDirection"] | undefined
};
	["CategoryOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	image?: GraphQLTypes["ImageOrderBy"] | undefined
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
	["RecipeLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	description?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["RecipeOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined,
	tileDescription?: GraphQLTypes["OrderDirection"] | undefined,
	link?: GraphQLTypes["LinkableOrderBy"] | undefined
};
	["RecipeOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	publishDate?: GraphQLTypes["OrderDirection"] | undefined,
	price?: GraphQLTypes["OrderDirection"] | undefined,
	mainImage?: GraphQLTypes["ImageOrderBy"] | undefined,
	createdBy?: GraphQLTypes["UserOrderBy"] | undefined,
	tileImage?: GraphQLTypes["ImageOrderBy"] | undefined
};
	["UserOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	firstName?: GraphQLTypes["OrderDirection"] | undefined,
	lastName?: GraphQLTypes["OrderDirection"] | undefined,
	email?: GraphQLTypes["OrderDirection"] | undefined,
	image?: GraphQLTypes["ImageOrderBy"] | undefined
};
	["PinnedRecipesPageLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	link?: GraphQLTypes["LinkableOrderBy"] | undefined,
	base?: GraphQLTypes["PinnedRecipesPageOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined,
	seo?: GraphQLTypes["SeoOrderBy"] | undefined
};
	["PinnedRecipesPageOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	unique?: GraphQLTypes["OrderDirection"] | undefined
};
	["HomePageLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["LocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	code?: string | undefined,
	recipes?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	steps?: GraphQLTypes["StepLocaleUniqueWhere"] | undefined,
	stepsGroups?: GraphQLTypes["StepGroupLocaleUniqueWhere"] | undefined,
	homePage?: GraphQLTypes["HomePageLocaleUniqueWhere"] | undefined,
	categories?: GraphQLTypes["CategoryLocaleUniqueWhere"] | undefined,
	tips?: GraphQLTypes["TipLocaleUniqueWhere"] | undefined,
	tipGroups?: GraphQLTypes["TipGroupLocaleUniqueWhere"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined
};
	["RecipeLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["RecipeUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["RecipeUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	locales?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	pinnedRecipes?: GraphQLTypes["PinnedRecipeUniqueWhere"] | undefined,
	stepsGroups?: GraphQLTypes["StepGroupUniqueWhere"] | undefined,
	tipGroups?: GraphQLTypes["TipGroupUniqueWhere"] | undefined
};
	["PinnedRecipeUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	implementationDate?: GraphQLTypes["ImplemetationDateUniqueWhere"] | undefined,
	modification?: GraphQLTypes["StepModificationUniqueWhere"] | undefined
};
	["ImplemetationDateUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipeUniqueWhere"] | undefined,
	step?: GraphQLTypes["StepUniqueWhere"] | undefined
};
	["StepUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	locales?: GraphQLTypes["StepLocaleUniqueWhere"] | undefined,
	implementationDate?: GraphQLTypes["ImplemetationDateUniqueWhere"] | undefined
};
	["StepLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["StepUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	modificationDate?: GraphQLTypes["StepModificationUniqueWhere"] | undefined
};
	["StepModificationUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
};
	["StepGroupUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	locales?: GraphQLTypes["StepGroupLocaleUniqueWhere"] | undefined,
	items?: GraphQLTypes["StepGroupItemUniqueWhere"] | undefined
};
	["StepGroupLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["StepGroupUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["StepGroupItemUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	step?: GraphQLTypes["StepUniqueWhere"] | undefined,
	tip?: GraphQLTypes["TipUniqueWhere"] | undefined
};
	["TipUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	locales?: GraphQLTypes["TipLocaleUniqueWhere"] | undefined
};
	["TipLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["TipUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["TipGroupUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	items?: GraphQLTypes["TipGroupItemUniqueWhere"] | undefined,
	locales?: GraphQLTypes["TipGroupLocaleUniqueWhere"] | undefined
};
	["TipGroupItemUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	tip?: GraphQLTypes["TipUniqueWhere"] | undefined
};
	["TipGroupLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["TipGroupUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["LinkableUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	url?: string | undefined,
	homePage?: GraphQLTypes["HomePageLocaleUniqueWhere"] | undefined,
	category?: GraphQLTypes["CategoryLocaleUniqueWhere"] | undefined,
	recipe?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined
};
	["HomePageLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["HomePageUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	link?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["HomePageUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	unique?: GraphQLTypes["One"] | undefined,
	locales?: GraphQLTypes["HomePageLocaleUniqueWhere"] | undefined
};
	["SeoUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	ogImage?: GraphQLTypes["ImageUniqueWhere"] | undefined
};
	["ImageUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
};
	["CategoryLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["CategoryUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	seo?: GraphQLTypes["SeoUniqueWhere"] | undefined,
	link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["CategoryUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	locales?: GraphQLTypes["CategoryLocaleUniqueWhere"] | undefined,
	image?: GraphQLTypes["ImageUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocaleUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	base?: GraphQLTypes["PinnedRecipesPageUniqueWhere"] | undefined,
	locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined,
	link?: GraphQLTypes["LinkableUniqueWhere"] | undefined,
	seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["PinnedRecipesPageUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	unique?: GraphQLTypes["One"] | undefined,
	locales?: GraphQLTypes["PinnedRecipesPageLocaleUniqueWhere"] | undefined
};
	["HomePageLocalesByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["HomePageLocalesBySeoUniqueWhere"]: {
		seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["HomePageLocaleConnection"]: {
	__typename: "HomePageLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["HomePageLocaleEdge"]>
};
	["PageInfo"]: {
	__typename: "PageInfo",
	totalCount: number
};
	["HomePageLocaleEdge"]: {
	__typename: "HomePageLocaleEdge",
	node: GraphQLTypes["HomePageLocale"]
};
	["Locale"]: {
	__typename: "Locale",
	_meta?: GraphQLTypes["LocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	code: string,
	label?: string | undefined,
	recipes: Array<GraphQLTypes["RecipeLocale"]>,
	steps: Array<GraphQLTypes["StepLocale"]>,
	stepsGroups: Array<GraphQLTypes["StepGroupLocale"]>,
	homePage: Array<GraphQLTypes["HomePageLocale"]>,
	categories: Array<GraphQLTypes["CategoryLocale"]>,
	tips: Array<GraphQLTypes["TipLocale"]>,
	tipGroups: Array<GraphQLTypes["TipGroupLocale"]>,
	pinnedRecipesPage: Array<GraphQLTypes["PinnedRecipesPageLocale"]>,
	recipesByBase?: GraphQLTypes["RecipeLocale"] | undefined,
	recipesByLink?: GraphQLTypes["RecipeLocale"] | undefined,
	stepsByBase?: GraphQLTypes["StepLocale"] | undefined,
	stepsByModificationDate?: GraphQLTypes["StepLocale"] | undefined,
	stepsGroupsByBase?: GraphQLTypes["StepGroupLocale"] | undefined,
	homePageByBase?: GraphQLTypes["HomePageLocale"] | undefined,
	homePageByLink?: GraphQLTypes["HomePageLocale"] | undefined,
	homePageBySeo?: GraphQLTypes["HomePageLocale"] | undefined,
	categoriesByBase?: GraphQLTypes["CategoryLocale"] | undefined,
	categoriesBySeo?: GraphQLTypes["CategoryLocale"] | undefined,
	categoriesByLink?: GraphQLTypes["CategoryLocale"] | undefined,
	tipsByBase?: GraphQLTypes["TipLocale"] | undefined,
	tipGroupsByBase?: GraphQLTypes["TipGroupLocale"] | undefined,
	pinnedRecipesPageByBase?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	pinnedRecipesPageByLink?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	pinnedRecipesPageBySeo?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	paginateRecipes: GraphQLTypes["RecipeLocaleConnection"],
	paginateSteps: GraphQLTypes["StepLocaleConnection"],
	paginateStepsGroups: GraphQLTypes["StepGroupLocaleConnection"],
	paginateHomePage: GraphQLTypes["HomePageLocaleConnection"],
	paginateCategories: GraphQLTypes["CategoryLocaleConnection"],
	paginateTips: GraphQLTypes["TipLocaleConnection"],
	paginateTipGroups: GraphQLTypes["TipGroupLocaleConnection"],
	paginatePinnedRecipesPage: GraphQLTypes["PinnedRecipesPageLocaleConnection"]
};
	["LocaleMeta"]: {
	__typename: "LocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	code?: GraphQLTypes["FieldMeta"] | undefined,
	label?: GraphQLTypes["FieldMeta"] | undefined,
	recipes?: GraphQLTypes["FieldMeta"] | undefined,
	steps?: GraphQLTypes["FieldMeta"] | undefined,
	stepsGroups?: GraphQLTypes["FieldMeta"] | undefined,
	homePage?: GraphQLTypes["FieldMeta"] | undefined,
	categories?: GraphQLTypes["FieldMeta"] | undefined,
	tips?: GraphQLTypes["FieldMeta"] | undefined,
	tipGroups?: GraphQLTypes["FieldMeta"] | undefined,
	pinnedRecipesPage?: GraphQLTypes["FieldMeta"] | undefined
};
	["RecipeLocale"]: {
	__typename: "RecipeLocale",
	_meta?: GraphQLTypes["RecipeLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["Recipe"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined,
	tileDescription?: string | undefined,
	link?: GraphQLTypes["Linkable"] | undefined
};
	["RecipeLocaleMeta"]: {
	__typename: "RecipeLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	description?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined,
	tileDescription?: GraphQLTypes["FieldMeta"] | undefined,
	link?: GraphQLTypes["FieldMeta"] | undefined
};
	["Recipe"]: {
	__typename: "Recipe",
	_meta?: GraphQLTypes["RecipeMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	publishDate?: GraphQLTypes["Date"] | undefined,
	price?: string | undefined,
	locales: Array<GraphQLTypes["RecipeLocale"]>,
	mainImage?: GraphQLTypes["Image"] | undefined,
	pinnedRecipes: Array<GraphQLTypes["PinnedRecipe"]>,
	createdBy?: GraphQLTypes["User"] | undefined,
	stepsGroups: Array<GraphQLTypes["StepGroup"]>,
	categories: Array<GraphQLTypes["Category"]>,
	tileImage?: GraphQLTypes["Image"] | undefined,
	tipGroups: Array<GraphQLTypes["TipGroup"]>,
	localesByLocale?: GraphQLTypes["RecipeLocale"] | undefined,
	localesByLink?: GraphQLTypes["RecipeLocale"] | undefined,
	pinnedRecipesByImplementationDate?: GraphQLTypes["PinnedRecipe"] | undefined,
	pinnedRecipesByModification?: GraphQLTypes["PinnedRecipe"] | undefined,
	stepsGroupsByLocales?: GraphQLTypes["StepGroup"] | undefined,
	stepsGroupsByItems?: GraphQLTypes["StepGroup"] | undefined,
	tipGroupsByItems?: GraphQLTypes["TipGroup"] | undefined,
	tipGroupsByLocales?: GraphQLTypes["TipGroup"] | undefined,
	paginateLocales: GraphQLTypes["RecipeLocaleConnection"],
	paginatePinnedRecipes: GraphQLTypes["PinnedRecipeConnection"],
	paginateStepsGroups: GraphQLTypes["StepGroupConnection"],
	paginateCategories: GraphQLTypes["CategoryConnection"],
	paginateTipGroups: GraphQLTypes["TipGroupConnection"]
};
	["RecipeMeta"]: {
	__typename: "RecipeMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	publishDate?: GraphQLTypes["FieldMeta"] | undefined,
	price?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined,
	mainImage?: GraphQLTypes["FieldMeta"] | undefined,
	pinnedRecipes?: GraphQLTypes["FieldMeta"] | undefined,
	createdBy?: GraphQLTypes["FieldMeta"] | undefined,
	stepsGroups?: GraphQLTypes["FieldMeta"] | undefined,
	categories?: GraphQLTypes["FieldMeta"] | undefined,
	tileImage?: GraphQLTypes["FieldMeta"] | undefined,
	tipGroups?: GraphQLTypes["FieldMeta"] | undefined
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
	["PinnedRecipe"]: {
	__typename: "PinnedRecipe",
	_meta?: GraphQLTypes["PinnedRecipeMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	user?: GraphQLTypes["User"] | undefined,
	derivedBy?: GraphQLTypes["Recipe"] | undefined,
	implementationDate: Array<GraphQLTypes["ImplemetationDate"]>,
	modification: Array<GraphQLTypes["StepModification"]>,
	implementationDateByStep?: GraphQLTypes["ImplemetationDate"] | undefined,
	paginateImplementationDate: GraphQLTypes["ImplemetationDateConnection"],
	paginateModification: GraphQLTypes["StepModificationConnection"]
};
	["PinnedRecipeMeta"]: {
	__typename: "PinnedRecipeMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	user?: GraphQLTypes["FieldMeta"] | undefined,
	derivedBy?: GraphQLTypes["FieldMeta"] | undefined,
	implementationDate?: GraphQLTypes["FieldMeta"] | undefined,
	modification?: GraphQLTypes["FieldMeta"] | undefined
};
	["User"]: {
	__typename: "User",
	_meta?: GraphQLTypes["UserMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	firstName: string,
	lastName: string,
	email: string,
	image?: GraphQLTypes["Image"] | undefined,
	pinnedRecipes: Array<GraphQLTypes["PinnedRecipe"]>,
	createdRecipes: Array<GraphQLTypes["Recipe"]>,
	pinnedRecipesByImplementationDate?: GraphQLTypes["PinnedRecipe"] | undefined,
	pinnedRecipesByModification?: GraphQLTypes["PinnedRecipe"] | undefined,
	createdRecipesByLocales?: GraphQLTypes["Recipe"] | undefined,
	createdRecipesByPinnedRecipes?: GraphQLTypes["Recipe"] | undefined,
	createdRecipesByStepsGroups?: GraphQLTypes["Recipe"] | undefined,
	createdRecipesByTipGroups?: GraphQLTypes["Recipe"] | undefined,
	paginatePinnedRecipes: GraphQLTypes["PinnedRecipeConnection"],
	paginateCreatedRecipes: GraphQLTypes["RecipeConnection"]
};
	["UserMeta"]: {
	__typename: "UserMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	firstName?: GraphQLTypes["FieldMeta"] | undefined,
	lastName?: GraphQLTypes["FieldMeta"] | undefined,
	email?: GraphQLTypes["FieldMeta"] | undefined,
	image?: GraphQLTypes["FieldMeta"] | undefined,
	pinnedRecipes?: GraphQLTypes["FieldMeta"] | undefined,
	createdRecipes?: GraphQLTypes["FieldMeta"] | undefined
};
	["PinnedRecipeOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	user?: GraphQLTypes["UserOrderBy"] | undefined,
	derivedBy?: GraphQLTypes["RecipeOrderBy"] | undefined
};
	["UserPinnedRecipesByImplementationDateUniqueWhere"]: {
		implementationDate?: GraphQLTypes["ImplemetationDateUniqueWhere"] | undefined
};
	["UserPinnedRecipesByModificationUniqueWhere"]: {
		modification?: GraphQLTypes["StepModificationUniqueWhere"] | undefined
};
	["UserCreatedRecipesByLocalesUniqueWhere"]: {
		locales?: GraphQLTypes["RecipeLocaleUniqueWhere"] | undefined
};
	["UserCreatedRecipesByPinnedRecipesUniqueWhere"]: {
		pinnedRecipes?: GraphQLTypes["PinnedRecipeUniqueWhere"] | undefined
};
	["UserCreatedRecipesByStepsGroupsUniqueWhere"]: {
		stepsGroups?: GraphQLTypes["StepGroupUniqueWhere"] | undefined
};
	["UserCreatedRecipesByTipGroupsUniqueWhere"]: {
		tipGroups?: GraphQLTypes["TipGroupUniqueWhere"] | undefined
};
	["PinnedRecipeConnection"]: {
	__typename: "PinnedRecipeConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PinnedRecipeEdge"]>
};
	["PinnedRecipeEdge"]: {
	__typename: "PinnedRecipeEdge",
	node: GraphQLTypes["PinnedRecipe"]
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
	["ImplemetationDate"]: {
	__typename: "ImplemetationDate",
	_meta?: GraphQLTypes["ImplemetationDateMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	step?: GraphQLTypes["Step"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipe"] | undefined,
	date: GraphQLTypes["DateTime"]
};
	["ImplemetationDateMeta"]: {
	__typename: "ImplemetationDateMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	step?: GraphQLTypes["FieldMeta"] | undefined,
	pinnedRecipe?: GraphQLTypes["FieldMeta"] | undefined,
	date?: GraphQLTypes["FieldMeta"] | undefined
};
	["Step"]: {
	__typename: "Step",
	_meta?: GraphQLTypes["StepMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	locales: Array<GraphQLTypes["StepLocale"]>,
	implementationDate: Array<GraphQLTypes["ImplemetationDate"]>,
	hasTimer?: boolean | undefined,
	timerCount?: number | undefined,
	localesByLocale?: GraphQLTypes["StepLocale"] | undefined,
	localesByModificationDate?: GraphQLTypes["StepLocale"] | undefined,
	implementationDateByPinnedRecipe?: GraphQLTypes["ImplemetationDate"] | undefined,
	paginateLocales: GraphQLTypes["StepLocaleConnection"],
	paginateImplementationDate: GraphQLTypes["ImplemetationDateConnection"]
};
	["StepMeta"]: {
	__typename: "StepMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined,
	implementationDate?: GraphQLTypes["FieldMeta"] | undefined,
	hasTimer?: GraphQLTypes["FieldMeta"] | undefined,
	timerCount?: GraphQLTypes["FieldMeta"] | undefined
};
	["StepLocale"]: {
	__typename: "StepLocale",
	_meta?: GraphQLTypes["StepLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	base?: GraphQLTypes["Step"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined,
	modificationDate: Array<GraphQLTypes["StepModification"]>,
	paginateModificationDate: GraphQLTypes["StepModificationConnection"]
};
	["StepLocaleMeta"]: {
	__typename: "StepLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined,
	modificationDate?: GraphQLTypes["FieldMeta"] | undefined
};
	["StepModification"]: {
	__typename: "StepModification",
	_meta?: GraphQLTypes["StepModificationMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	date?: GraphQLTypes["DateTime"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipe"] | undefined,
	step?: GraphQLTypes["StepLocale"] | undefined
};
	["StepModificationMeta"]: {
	__typename: "StepModificationMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	date?: GraphQLTypes["FieldMeta"] | undefined,
	pinnedRecipe?: GraphQLTypes["FieldMeta"] | undefined,
	step?: GraphQLTypes["FieldMeta"] | undefined
};
	["StepModificationOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	date?: GraphQLTypes["OrderDirection"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipeOrderBy"] | undefined,
	step?: GraphQLTypes["StepLocaleOrderBy"] | undefined
};
	["StepLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["StepOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined
};
	["StepOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	hasTimer?: GraphQLTypes["OrderDirection"] | undefined,
	timerCount?: GraphQLTypes["OrderDirection"] | undefined
};
	["StepModificationConnection"]: {
	__typename: "StepModificationConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StepModificationEdge"]>
};
	["StepModificationEdge"]: {
	__typename: "StepModificationEdge",
	node: GraphQLTypes["StepModification"]
};
	["ImplemetationDateOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	step?: GraphQLTypes["StepOrderBy"] | undefined,
	pinnedRecipe?: GraphQLTypes["PinnedRecipeOrderBy"] | undefined,
	date?: GraphQLTypes["OrderDirection"] | undefined
};
	["StepLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["StepLocalesByModificationDateUniqueWhere"]: {
		modificationDate?: GraphQLTypes["StepModificationUniqueWhere"] | undefined
};
	["StepImplementationDateByPinnedRecipeUniqueWhere"]: {
		pinnedRecipe?: GraphQLTypes["PinnedRecipeUniqueWhere"] | undefined
};
	["StepLocaleConnection"]: {
	__typename: "StepLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StepLocaleEdge"]>
};
	["StepLocaleEdge"]: {
	__typename: "StepLocaleEdge",
	node: GraphQLTypes["StepLocale"]
};
	["ImplemetationDateConnection"]: {
	__typename: "ImplemetationDateConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ImplemetationDateEdge"]>
};
	["ImplemetationDateEdge"]: {
	__typename: "ImplemetationDateEdge",
	node: GraphQLTypes["ImplemetationDate"]
};
	["PinnedRecipeImplementationDateByStepUniqueWhere"]: {
		step?: GraphQLTypes["StepUniqueWhere"] | undefined
};
	["StepGroup"]: {
	__typename: "StepGroup",
	_meta?: GraphQLTypes["StepGroupMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	recipe?: GraphQLTypes["Recipe"] | undefined,
	locales: Array<GraphQLTypes["StepGroupLocale"]>,
	items: Array<GraphQLTypes["StepGroupItem"]>,
	localesByLocale?: GraphQLTypes["StepGroupLocale"] | undefined,
	itemsByStep?: GraphQLTypes["StepGroupItem"] | undefined,
	itemsByTip?: GraphQLTypes["StepGroupItem"] | undefined,
	paginateLocales: GraphQLTypes["StepGroupLocaleConnection"],
	paginateItems: GraphQLTypes["StepGroupItemConnection"]
};
	["StepGroupMeta"]: {
	__typename: "StepGroupMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	recipe?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined,
	items?: GraphQLTypes["FieldMeta"] | undefined
};
	["StepGroupLocale"]: {
	__typename: "StepGroupLocale",
	_meta?: GraphQLTypes["StepGroupLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	buttonTitle?: string | undefined,
	base?: GraphQLTypes["StepGroup"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined,
	description?: string | undefined
};
	["StepGroupLocaleMeta"]: {
	__typename: "StepGroupLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	buttonTitle?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined,
	description?: GraphQLTypes["FieldMeta"] | undefined
};
	["StepGroupLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	buttonTitle?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["StepGroupOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined,
	description?: GraphQLTypes["OrderDirection"] | undefined
};
	["StepGroupOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	recipe?: GraphQLTypes["RecipeOrderBy"] | undefined
};
	["StepGroupItem"]: {
	__typename: "StepGroupItem",
	_meta?: GraphQLTypes["StepGroupItemMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	type: GraphQLTypes["StepGroupItemType"],
	order: number,
	group?: GraphQLTypes["StepGroup"] | undefined,
	step?: GraphQLTypes["Step"] | undefined,
	tip?: GraphQLTypes["Tip"] | undefined
};
	["StepGroupItemMeta"]: {
	__typename: "StepGroupItemMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	type?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	group?: GraphQLTypes["FieldMeta"] | undefined,
	step?: GraphQLTypes["FieldMeta"] | undefined,
	tip?: GraphQLTypes["FieldMeta"] | undefined
};
	["Tip"]: {
	__typename: "Tip",
	_meta?: GraphQLTypes["TipMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	locales: Array<GraphQLTypes["TipLocale"]>,
	localesByLocale?: GraphQLTypes["TipLocale"] | undefined,
	paginateLocales: GraphQLTypes["TipLocaleConnection"]
};
	["TipMeta"]: {
	__typename: "TipMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined
};
	["TipLocale"]: {
	__typename: "TipLocale",
	_meta?: GraphQLTypes["TipLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	base?: GraphQLTypes["Tip"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined
};
	["TipLocaleMeta"]: {
	__typename: "TipLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined
};
	["TipLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["TipOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined
};
	["TipOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined
};
	["TipLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["TipLocaleConnection"]: {
	__typename: "TipLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["TipLocaleEdge"]>
};
	["TipLocaleEdge"]: {
	__typename: "TipLocaleEdge",
	node: GraphQLTypes["TipLocale"]
};
	["StepGroupItemOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	type?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	group?: GraphQLTypes["StepGroupOrderBy"] | undefined,
	step?: GraphQLTypes["StepOrderBy"] | undefined,
	tip?: GraphQLTypes["TipOrderBy"] | undefined
};
	["StepGroupLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["StepGroupItemsByStepUniqueWhere"]: {
		step?: GraphQLTypes["StepUniqueWhere"] | undefined
};
	["StepGroupItemsByTipUniqueWhere"]: {
		tip?: GraphQLTypes["TipUniqueWhere"] | undefined
};
	["StepGroupLocaleConnection"]: {
	__typename: "StepGroupLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StepGroupLocaleEdge"]>
};
	["StepGroupLocaleEdge"]: {
	__typename: "StepGroupLocaleEdge",
	node: GraphQLTypes["StepGroupLocale"]
};
	["StepGroupItemConnection"]: {
	__typename: "StepGroupItemConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StepGroupItemEdge"]>
};
	["StepGroupItemEdge"]: {
	__typename: "StepGroupItemEdge",
	node: GraphQLTypes["StepGroupItem"]
};
	["Category"]: {
	__typename: "Category",
	_meta?: GraphQLTypes["CategoryMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	locales: Array<GraphQLTypes["CategoryLocale"]>,
	recipes: Array<GraphQLTypes["Recipe"]>,
	image?: GraphQLTypes["Image"] | undefined,
	localesByLocale?: GraphQLTypes["CategoryLocale"] | undefined,
	localesBySeo?: GraphQLTypes["CategoryLocale"] | undefined,
	localesByLink?: GraphQLTypes["CategoryLocale"] | undefined,
	paginateLocales: GraphQLTypes["CategoryLocaleConnection"],
	paginateRecipes: GraphQLTypes["RecipeConnection"]
};
	["CategoryMeta"]: {
	__typename: "CategoryMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined,
	recipes?: GraphQLTypes["FieldMeta"] | undefined,
	image?: GraphQLTypes["FieldMeta"] | undefined
};
	["CategoryLocale"]: {
	__typename: "CategoryLocale",
	_meta?: GraphQLTypes["CategoryLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	base?: GraphQLTypes["Category"] | undefined,
	seo?: GraphQLTypes["Seo"] | undefined,
	link?: GraphQLTypes["Linkable"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined,
	description?: string | undefined
};
	["CategoryLocaleMeta"]: {
	__typename: "CategoryLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	seo?: GraphQLTypes["FieldMeta"] | undefined,
	link?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined,
	description?: GraphQLTypes["FieldMeta"] | undefined
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
	["CategoryLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["CategoryLocalesBySeoUniqueWhere"]: {
		seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["CategoryLocalesByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["CategoryLocaleConnection"]: {
	__typename: "CategoryLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["CategoryLocaleEdge"]>
};
	["CategoryLocaleEdge"]: {
	__typename: "CategoryLocaleEdge",
	node: GraphQLTypes["CategoryLocale"]
};
	["TipGroup"]: {
	__typename: "TipGroup",
	_meta?: GraphQLTypes["TipGroupMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	recipe?: GraphQLTypes["Recipe"] | undefined,
	items: Array<GraphQLTypes["TipGroupItem"]>,
	locales: Array<GraphQLTypes["TipGroupLocale"]>,
	itemsByTip?: GraphQLTypes["TipGroupItem"] | undefined,
	localesByLocale?: GraphQLTypes["TipGroupLocale"] | undefined,
	paginateItems: GraphQLTypes["TipGroupItemConnection"],
	paginateLocales: GraphQLTypes["TipGroupLocaleConnection"]
};
	["TipGroupMeta"]: {
	__typename: "TipGroupMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	recipe?: GraphQLTypes["FieldMeta"] | undefined,
	items?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined
};
	["TipGroupItem"]: {
	__typename: "TipGroupItem",
	_meta?: GraphQLTypes["TipGroupItemMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	group?: GraphQLTypes["TipGroup"] | undefined,
	tip?: GraphQLTypes["Tip"] | undefined
};
	["TipGroupItemMeta"]: {
	__typename: "TipGroupItemMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	group?: GraphQLTypes["FieldMeta"] | undefined,
	tip?: GraphQLTypes["FieldMeta"] | undefined
};
	["TipGroupItemOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	group?: GraphQLTypes["TipGroupOrderBy"] | undefined,
	tip?: GraphQLTypes["TipOrderBy"] | undefined
};
	["TipGroupOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	recipe?: GraphQLTypes["RecipeOrderBy"] | undefined
};
	["TipGroupLocale"]: {
	__typename: "TipGroupLocale",
	_meta?: GraphQLTypes["TipGroupLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	description?: string | undefined,
	base?: GraphQLTypes["TipGroup"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined
};
	["TipGroupLocaleMeta"]: {
	__typename: "TipGroupLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	description?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined
};
	["TipGroupLocaleOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	title?: GraphQLTypes["OrderDirection"] | undefined,
	description?: GraphQLTypes["OrderDirection"] | undefined,
	base?: GraphQLTypes["TipGroupOrderBy"] | undefined,
	locale?: GraphQLTypes["LocaleOrderBy"] | undefined
};
	["TipGroupItemsByTipUniqueWhere"]: {
		tip?: GraphQLTypes["TipUniqueWhere"] | undefined
};
	["TipGroupLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["TipGroupItemConnection"]: {
	__typename: "TipGroupItemConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["TipGroupItemEdge"]>
};
	["TipGroupItemEdge"]: {
	__typename: "TipGroupItemEdge",
	node: GraphQLTypes["TipGroupItem"]
};
	["TipGroupLocaleConnection"]: {
	__typename: "TipGroupLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["TipGroupLocaleEdge"]>
};
	["TipGroupLocaleEdge"]: {
	__typename: "TipGroupLocaleEdge",
	node: GraphQLTypes["TipGroupLocale"]
};
	["RecipeLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["RecipeLocalesByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["RecipePinnedRecipesByImplementationDateUniqueWhere"]: {
		implementationDate?: GraphQLTypes["ImplemetationDateUniqueWhere"] | undefined
};
	["RecipePinnedRecipesByModificationUniqueWhere"]: {
		modification?: GraphQLTypes["StepModificationUniqueWhere"] | undefined
};
	["RecipeStepsGroupsByLocalesUniqueWhere"]: {
		locales?: GraphQLTypes["StepGroupLocaleUniqueWhere"] | undefined
};
	["RecipeStepsGroupsByItemsUniqueWhere"]: {
		items?: GraphQLTypes["StepGroupItemUniqueWhere"] | undefined
};
	["RecipeTipGroupsByItemsUniqueWhere"]: {
		items?: GraphQLTypes["TipGroupItemUniqueWhere"] | undefined
};
	["RecipeTipGroupsByLocalesUniqueWhere"]: {
		locales?: GraphQLTypes["TipGroupLocaleUniqueWhere"] | undefined
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
	["StepGroupConnection"]: {
	__typename: "StepGroupConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StepGroupEdge"]>
};
	["StepGroupEdge"]: {
	__typename: "StepGroupEdge",
	node: GraphQLTypes["StepGroup"]
};
	["CategoryConnection"]: {
	__typename: "CategoryConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["CategoryEdge"]>
};
	["CategoryEdge"]: {
	__typename: "CategoryEdge",
	node: GraphQLTypes["Category"]
};
	["TipGroupConnection"]: {
	__typename: "TipGroupConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["TipGroupEdge"]>
};
	["TipGroupEdge"]: {
	__typename: "TipGroupEdge",
	node: GraphQLTypes["TipGroup"]
};
	["PinnedRecipesPageLocale"]: {
	__typename: "PinnedRecipesPageLocale",
	_meta?: GraphQLTypes["PinnedRecipesPageLocaleMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	title?: string | undefined,
	link?: GraphQLTypes["Linkable"] | undefined,
	base?: GraphQLTypes["PinnedRecipesPage"] | undefined,
	locale?: GraphQLTypes["Locale"] | undefined,
	seo?: GraphQLTypes["Seo"] | undefined
};
	["PinnedRecipesPageLocaleMeta"]: {
	__typename: "PinnedRecipesPageLocaleMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	title?: GraphQLTypes["FieldMeta"] | undefined,
	link?: GraphQLTypes["FieldMeta"] | undefined,
	base?: GraphQLTypes["FieldMeta"] | undefined,
	locale?: GraphQLTypes["FieldMeta"] | undefined,
	seo?: GraphQLTypes["FieldMeta"] | undefined
};
	["PinnedRecipesPage"]: {
	__typename: "PinnedRecipesPage",
	_meta?: GraphQLTypes["PinnedRecipesPageMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	unique: GraphQLTypes["One"],
	locales: Array<GraphQLTypes["PinnedRecipesPageLocale"]>,
	localesByLocale?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	localesByLink?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	localesBySeo?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	paginateLocales: GraphQLTypes["PinnedRecipesPageLocaleConnection"]
};
	["PinnedRecipesPageMeta"]: {
	__typename: "PinnedRecipesPageMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	unique?: GraphQLTypes["FieldMeta"] | undefined,
	locales?: GraphQLTypes["FieldMeta"] | undefined
};
	["PinnedRecipesPageLocalesByLocaleUniqueWhere"]: {
		locale?: GraphQLTypes["LocaleUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocalesByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocalesBySeoUniqueWhere"]: {
		seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["PinnedRecipesPageLocaleConnection"]: {
	__typename: "PinnedRecipesPageLocaleConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PinnedRecipesPageLocaleEdge"]>
};
	["PinnedRecipesPageLocaleEdge"]: {
	__typename: "PinnedRecipesPageLocaleEdge",
	node: GraphQLTypes["PinnedRecipesPageLocale"]
};
	["LocaleRecipesByBaseUniqueWhere"]: {
		base?: GraphQLTypes["RecipeUniqueWhere"] | undefined
};
	["LocaleRecipesByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["LocaleStepsByBaseUniqueWhere"]: {
		base?: GraphQLTypes["StepUniqueWhere"] | undefined
};
	["LocaleStepsByModificationDateUniqueWhere"]: {
		modificationDate?: GraphQLTypes["StepModificationUniqueWhere"] | undefined
};
	["LocaleStepsGroupsByBaseUniqueWhere"]: {
		base?: GraphQLTypes["StepGroupUniqueWhere"] | undefined
};
	["LocaleHomePageByBaseUniqueWhere"]: {
		base?: GraphQLTypes["HomePageUniqueWhere"] | undefined
};
	["LocaleHomePageByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["LocaleHomePageBySeoUniqueWhere"]: {
		seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["LocaleCategoriesByBaseUniqueWhere"]: {
		base?: GraphQLTypes["CategoryUniqueWhere"] | undefined
};
	["LocaleCategoriesBySeoUniqueWhere"]: {
		seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["LocaleCategoriesByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["LocaleTipsByBaseUniqueWhere"]: {
		base?: GraphQLTypes["TipUniqueWhere"] | undefined
};
	["LocaleTipGroupsByBaseUniqueWhere"]: {
		base?: GraphQLTypes["TipGroupUniqueWhere"] | undefined
};
	["LocalePinnedRecipesPageByBaseUniqueWhere"]: {
		base?: GraphQLTypes["PinnedRecipesPageUniqueWhere"] | undefined
};
	["LocalePinnedRecipesPageByLinkUniqueWhere"]: {
		link?: GraphQLTypes["LinkableUniqueWhere"] | undefined
};
	["LocalePinnedRecipesPageBySeoUniqueWhere"]: {
		seo?: GraphQLTypes["SeoUniqueWhere"] | undefined
};
	["ContentReferenceLinkableItemOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	item?: GraphQLTypes["LinkableOrderBy"] | undefined,
	reference?: GraphQLTypes["ContentReferenceOrderBy"] | undefined
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
	["LinkableConnection"]: {
	__typename: "LinkableConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["LinkableEdge"]>
};
	["LinkableEdge"]: {
	__typename: "LinkableEdge",
	node: GraphQLTypes["Linkable"]
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
	["ImageConnection"]: {
	__typename: "ImageConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ImageEdge"]>
};
	["ImageEdge"]: {
	__typename: "ImageEdge",
	node: GraphQLTypes["Image"]
};
	["UserUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	email?: string | undefined,
	pinnedRecipes?: GraphQLTypes["PinnedRecipeUniqueWhere"] | undefined,
	createdRecipes?: GraphQLTypes["RecipeUniqueWhere"] | undefined
};
	["UserConnection"]: {
	__typename: "UserConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["UserEdge"]>
};
	["UserEdge"]: {
	__typename: "UserEdge",
	node: GraphQLTypes["User"]
};
	["StepConnection"]: {
	__typename: "StepConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StepEdge"]>
};
	["StepEdge"]: {
	__typename: "StepEdge",
	node: GraphQLTypes["Step"]
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
	["PinnedRecipeCreateInput"]: {
		user?: GraphQLTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined,
	derivedBy?: GraphQLTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined,
	implementationDate?: Array<GraphQLTypes["PinnedRecipeCreateImplementationDateEntityRelationInput"]> | undefined,
	_dummy_field_?: boolean | undefined
};
	["PinnedRecipeCreateUserEntityRelationInput"]: {
		connect?: GraphQLTypes["UserUniqueWhere"] | undefined
};
	["PinnedRecipeCreateDerivedByEntityRelationInput"]: {
		connect?: GraphQLTypes["RecipeUniqueWhere"] | undefined
};
	["PinnedRecipeCreateImplementationDateEntityRelationInput"]: {
		connect?: GraphQLTypes["ImplemetationDateUniqueWhere"] | undefined,
	create?: GraphQLTypes["ImplemetationDateWithoutPinnedRecipeCreateInput"] | undefined,
	alias?: string | undefined
};
	["ImplemetationDateWithoutPinnedRecipeCreateInput"]: {
		step?: GraphQLTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined,
	date?: GraphQLTypes["DateTime"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ImplemetationDateCreateStepEntityRelationInput"]: {
		connect?: GraphQLTypes["StepUniqueWhere"] | undefined
};
	["ImplemetationDateCreateInput"]: {
		step?: GraphQLTypes["ImplemetationDateCreateStepEntityRelationInput"] | undefined,
	pinnedRecipe?: GraphQLTypes["ImplemetationDateCreatePinnedRecipeEntityRelationInput"] | undefined,
	date?: GraphQLTypes["DateTime"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["ImplemetationDateCreatePinnedRecipeEntityRelationInput"]: {
		connect?: GraphQLTypes["PinnedRecipeUniqueWhere"] | undefined,
	create?: GraphQLTypes["PinnedRecipeWithoutImplementationDateCreateInput"] | undefined
};
	["PinnedRecipeWithoutImplementationDateCreateInput"]: {
		user?: GraphQLTypes["PinnedRecipeCreateUserEntityRelationInput"] | undefined,
	derivedBy?: GraphQLTypes["PinnedRecipeCreateDerivedByEntityRelationInput"] | undefined,
	_dummy_field_?: boolean | undefined
};
	["HomePageConnection"]: {
	__typename: "HomePageConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["HomePageEdge"]>
};
	["HomePageEdge"]: {
	__typename: "HomePageEdge",
	node: GraphQLTypes["HomePage"]
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
	["RecipeList"]: {
	__typename: "RecipeList",
	_meta?: GraphQLTypes["RecipeListMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	items: Array<GraphQLTypes["RecipeListItem"]>,
	paginateItems: GraphQLTypes["RecipeListItemConnection"]
};
	["RecipeListMeta"]: {
	__typename: "RecipeListMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	items?: GraphQLTypes["FieldMeta"] | undefined
};
	["RecipeListItem"]: {
	__typename: "RecipeListItem",
	_meta?: GraphQLTypes["RecipeListItemMeta"] | undefined,
	id: GraphQLTypes["UUID"],
	order: number,
	list?: GraphQLTypes["RecipeList"] | undefined,
	recipe?: GraphQLTypes["Recipe"] | undefined
};
	["RecipeListItemMeta"]: {
	__typename: "RecipeListItemMeta",
	id?: GraphQLTypes["FieldMeta"] | undefined,
	order?: GraphQLTypes["FieldMeta"] | undefined,
	list?: GraphQLTypes["FieldMeta"] | undefined,
	recipe?: GraphQLTypes["FieldMeta"] | undefined
};
	["RecipeListWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	items?: GraphQLTypes["RecipeListItemWhere"] | undefined,
	and?: Array<GraphQLTypes["RecipeListWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["RecipeListWhere"] | undefined> | undefined,
	not?: GraphQLTypes["RecipeListWhere"] | undefined
};
	["RecipeListItemWhere"]: {
		id?: GraphQLTypes["UUIDCondition"] | undefined,
	order?: GraphQLTypes["IntCondition"] | undefined,
	list?: GraphQLTypes["RecipeListWhere"] | undefined,
	recipe?: GraphQLTypes["RecipeWhere"] | undefined,
	and?: Array<GraphQLTypes["RecipeListItemWhere"] | undefined> | undefined,
	or?: Array<GraphQLTypes["RecipeListItemWhere"] | undefined> | undefined,
	not?: GraphQLTypes["RecipeListItemWhere"] | undefined
};
	["RecipeListItemOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined,
	order?: GraphQLTypes["OrderDirection"] | undefined,
	list?: GraphQLTypes["RecipeListOrderBy"] | undefined,
	recipe?: GraphQLTypes["RecipeOrderBy"] | undefined
};
	["RecipeListOrderBy"]: {
		_random?: boolean | undefined,
	_randomSeeded?: number | undefined,
	id?: GraphQLTypes["OrderDirection"] | undefined
};
	["RecipeListItemConnection"]: {
	__typename: "RecipeListItemConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["RecipeListItemEdge"]>
};
	["RecipeListItemEdge"]: {
	__typename: "RecipeListItemEdge",
	node: GraphQLTypes["RecipeListItem"]
};
	["RecipeListUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined,
	items?: GraphQLTypes["RecipeListItemUniqueWhere"] | undefined
};
	["RecipeListItemUniqueWhere"]: {
		id?: GraphQLTypes["UUID"] | undefined
};
	["RecipeListConnection"]: {
	__typename: "RecipeListConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["RecipeListEdge"]>
};
	["RecipeListEdge"]: {
	__typename: "RecipeListEdge",
	node: GraphQLTypes["RecipeList"]
};
	["TipConnection"]: {
	__typename: "TipConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["TipEdge"]>
};
	["TipEdge"]: {
	__typename: "TipEdge",
	node: GraphQLTypes["Tip"]
};
	["PinnedRecipesPageConnection"]: {
	__typename: "PinnedRecipesPageConnection",
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PinnedRecipesPageEdge"]>
};
	["PinnedRecipesPageEdge"]: {
	__typename: "PinnedRecipesPageEdge",
	node: GraphQLTypes["PinnedRecipesPage"]
};
	["QueryTransaction"]: {
	__typename: "QueryTransaction",
	getContent?: GraphQLTypes["Content"] | undefined,
	listContent: Array<GraphQLTypes["Content"]>,
	paginateContent: GraphQLTypes["ContentConnection"],
	getContentBlock?: GraphQLTypes["ContentBlock"] | undefined,
	listContentBlock: Array<GraphQLTypes["ContentBlock"]>,
	paginateContentBlock: GraphQLTypes["ContentBlockConnection"],
	getContentReference?: GraphQLTypes["ContentReference"] | undefined,
	listContentReference: Array<GraphQLTypes["ContentReference"]>,
	paginateContentReference: GraphQLTypes["ContentReferenceConnection"],
	getLink?: GraphQLTypes["Link"] | undefined,
	listLink: Array<GraphQLTypes["Link"]>,
	paginateLink: GraphQLTypes["LinkConnection"],
	getLinkable?: GraphQLTypes["Linkable"] | undefined,
	listLinkable: Array<GraphQLTypes["Linkable"]>,
	paginateLinkable: GraphQLTypes["LinkableConnection"],
	getContentReferenceLinkableItem?: GraphQLTypes["ContentReferenceLinkableItem"] | undefined,
	listContentReferenceLinkableItem: Array<GraphQLTypes["ContentReferenceLinkableItem"]>,
	paginateContentReferenceLinkableItem: GraphQLTypes["ContentReferenceLinkableItemConnection"],
	getLocale?: GraphQLTypes["Locale"] | undefined,
	listLocale: Array<GraphQLTypes["Locale"]>,
	paginateLocale: GraphQLTypes["LocaleConnection"],
	getRecipe?: GraphQLTypes["Recipe"] | undefined,
	listRecipe: Array<GraphQLTypes["Recipe"]>,
	paginateRecipe: GraphQLTypes["RecipeConnection"],
	getRecipeLocale?: GraphQLTypes["RecipeLocale"] | undefined,
	listRecipeLocale: Array<GraphQLTypes["RecipeLocale"]>,
	paginateRecipeLocale: GraphQLTypes["RecipeLocaleConnection"],
	getImage?: GraphQLTypes["Image"] | undefined,
	listImage: Array<GraphQLTypes["Image"]>,
	paginateImage: GraphQLTypes["ImageConnection"],
	getUser?: GraphQLTypes["User"] | undefined,
	listUser: Array<GraphQLTypes["User"]>,
	paginateUser: GraphQLTypes["UserConnection"],
	getStep?: GraphQLTypes["Step"] | undefined,
	listStep: Array<GraphQLTypes["Step"]>,
	paginateStep: GraphQLTypes["StepConnection"],
	getStepLocale?: GraphQLTypes["StepLocale"] | undefined,
	listStepLocale: Array<GraphQLTypes["StepLocale"]>,
	paginateStepLocale: GraphQLTypes["StepLocaleConnection"],
	getPinnedRecipe?: GraphQLTypes["PinnedRecipe"] | undefined,
	listPinnedRecipe: Array<GraphQLTypes["PinnedRecipe"]>,
	paginatePinnedRecipe: GraphQLTypes["PinnedRecipeConnection"],
	validateCreatePinnedRecipe: GraphQLTypes["_ValidationResult"],
	getImplemetationDate?: GraphQLTypes["ImplemetationDate"] | undefined,
	listImplemetationDate: Array<GraphQLTypes["ImplemetationDate"]>,
	paginateImplemetationDate: GraphQLTypes["ImplemetationDateConnection"],
	validateCreateImplemetationDate: GraphQLTypes["_ValidationResult"],
	getStepGroup?: GraphQLTypes["StepGroup"] | undefined,
	listStepGroup: Array<GraphQLTypes["StepGroup"]>,
	paginateStepGroup: GraphQLTypes["StepGroupConnection"],
	getStepGroupLocale?: GraphQLTypes["StepGroupLocale"] | undefined,
	listStepGroupLocale: Array<GraphQLTypes["StepGroupLocale"]>,
	paginateStepGroupLocale: GraphQLTypes["StepGroupLocaleConnection"],
	getHomePage?: GraphQLTypes["HomePage"] | undefined,
	listHomePage: Array<GraphQLTypes["HomePage"]>,
	paginateHomePage: GraphQLTypes["HomePageConnection"],
	getHomePageLocale?: GraphQLTypes["HomePageLocale"] | undefined,
	listHomePageLocale: Array<GraphQLTypes["HomePageLocale"]>,
	paginateHomePageLocale: GraphQLTypes["HomePageLocaleConnection"],
	getSeo?: GraphQLTypes["Seo"] | undefined,
	listSeo: Array<GraphQLTypes["Seo"]>,
	paginateSeo: GraphQLTypes["SeoConnection"],
	getRecipeList?: GraphQLTypes["RecipeList"] | undefined,
	listRecipeList: Array<GraphQLTypes["RecipeList"]>,
	paginateRecipeList: GraphQLTypes["RecipeListConnection"],
	getRecipeListItem?: GraphQLTypes["RecipeListItem"] | undefined,
	listRecipeListItem: Array<GraphQLTypes["RecipeListItem"]>,
	paginateRecipeListItem: GraphQLTypes["RecipeListItemConnection"],
	getCategory?: GraphQLTypes["Category"] | undefined,
	listCategory: Array<GraphQLTypes["Category"]>,
	paginateCategory: GraphQLTypes["CategoryConnection"],
	getCategoryLocale?: GraphQLTypes["CategoryLocale"] | undefined,
	listCategoryLocale: Array<GraphQLTypes["CategoryLocale"]>,
	paginateCategoryLocale: GraphQLTypes["CategoryLocaleConnection"],
	getStepGroupItem?: GraphQLTypes["StepGroupItem"] | undefined,
	listStepGroupItem: Array<GraphQLTypes["StepGroupItem"]>,
	paginateStepGroupItem: GraphQLTypes["StepGroupItemConnection"],
	getTip?: GraphQLTypes["Tip"] | undefined,
	listTip: Array<GraphQLTypes["Tip"]>,
	paginateTip: GraphQLTypes["TipConnection"],
	getTipLocale?: GraphQLTypes["TipLocale"] | undefined,
	listTipLocale: Array<GraphQLTypes["TipLocale"]>,
	paginateTipLocale: GraphQLTypes["TipLocaleConnection"],
	getStepModification?: GraphQLTypes["StepModification"] | undefined,
	listStepModification: Array<GraphQLTypes["StepModification"]>,
	paginateStepModification: GraphQLTypes["StepModificationConnection"],
	getTipGroup?: GraphQLTypes["TipGroup"] | undefined,
	listTipGroup: Array<GraphQLTypes["TipGroup"]>,
	paginateTipGroup: GraphQLTypes["TipGroupConnection"],
	getTipGroupItem?: GraphQLTypes["TipGroupItem"] | undefined,
	listTipGroupItem: Array<GraphQLTypes["TipGroupItem"]>,
	paginateTipGroupItem: GraphQLTypes["TipGroupItemConnection"],
	getTipGroupLocale?: GraphQLTypes["TipGroupLocale"] | undefined,
	listTipGroupLocale: Array<GraphQLTypes["TipGroupLocale"]>,
	paginateTipGroupLocale: GraphQLTypes["TipGroupLocaleConnection"],
	getPinnedRecipesPage?: GraphQLTypes["PinnedRecipesPage"] | undefined,
	listPinnedRecipesPage: Array<GraphQLTypes["PinnedRecipesPage"]>,
	paginatePinnedRecipesPage: GraphQLTypes["PinnedRecipesPageConnection"],
	getPinnedRecipesPageLocale?: GraphQLTypes["PinnedRecipesPageLocale"] | undefined,
	listPinnedRecipesPageLocale: Array<GraphQLTypes["PinnedRecipesPageLocale"]>,
	paginatePinnedRecipesPageLocale: GraphQLTypes["PinnedRecipesPageLocaleConnection"]
};
	["Info"]: {
	__typename: "Info",
	description?: string | undefined
};
	["Mutation"]: {
	__typename: "Mutation",
	createPinnedRecipe: GraphQLTypes["PinnedRecipeCreateResult"],
	deletePinnedRecipe: GraphQLTypes["PinnedRecipeDeleteResult"],
	createImplemetationDate: GraphQLTypes["ImplemetationDateCreateResult"],
	deleteImplemetationDate: GraphQLTypes["ImplemetationDateDeleteResult"],
	transaction: GraphQLTypes["MutationTransaction"],
	query: GraphQLTypes["Query"],
	generateUploadUrl: GraphQLTypes["S3SignedUpload"],
	generateReadUrl: GraphQLTypes["S3SignedRead"]
};
	["PinnedRecipeCreateResult"]: {
	__typename: "PinnedRecipeCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["PinnedRecipe"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["MutationResult"]: {
	__typename:"PinnedRecipeCreateResult" | "PinnedRecipeDeleteResult" | "ImplemetationDateCreateResult" | "ImplemetationDateDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>
	['...on PinnedRecipeCreateResult']: '__union' & GraphQLTypes["PinnedRecipeCreateResult"];
	['...on PinnedRecipeDeleteResult']: '__union' & GraphQLTypes["PinnedRecipeDeleteResult"];
	['...on ImplemetationDateCreateResult']: '__union' & GraphQLTypes["ImplemetationDateCreateResult"];
	['...on ImplemetationDateDeleteResult']: '__union' & GraphQLTypes["ImplemetationDateDeleteResult"];
};
	["_MutationError"]: {
	__typename: "_MutationError",
	path: Array<GraphQLTypes["_PathFragment"]>,
	paths: Array<Array<GraphQLTypes["_PathFragment"]>>,
	type: GraphQLTypes["_MutationErrorType"],
	message?: string | undefined
};
	["_MutationErrorType"]: _MutationErrorType;
	["PinnedRecipeDeleteResult"]: {
	__typename: "PinnedRecipeDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["PinnedRecipe"] | undefined
};
	["ImplemetationDateCreateResult"]: {
	__typename: "ImplemetationDateCreateResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ImplemetationDate"] | undefined,
	validation: GraphQLTypes["_ValidationResult"]
};
	["ImplemetationDateDeleteResult"]: {
	__typename: "ImplemetationDateDeleteResult",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	node?: GraphQLTypes["ImplemetationDate"] | undefined
};
	["MutationTransaction"]: {
	__typename: "MutationTransaction",
	ok: boolean,
	errorMessage?: string | undefined,
	errors: Array<GraphQLTypes["_MutationError"]>,
	validation: GraphQLTypes["_ValidationResult"],
	createPinnedRecipe: GraphQLTypes["PinnedRecipeCreateResult"],
	deletePinnedRecipe: GraphQLTypes["PinnedRecipeDeleteResult"],
	createImplemetationDate: GraphQLTypes["ImplemetationDateCreateResult"],
	deleteImplemetationDate: GraphQLTypes["ImplemetationDateDeleteResult"],
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
 */
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
export const enum One {
	One = "One"
}
export const enum StepGroupItemType {
	step = "step",
	tip = "tip"
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
	["HomePageLocaleWhere"]: ValueTypes["HomePageLocaleWhere"];
	["HomePageWhere"]: ValueTypes["HomePageWhere"];
	["OneCondition"]: ValueTypes["OneCondition"];
	["One"]: ValueTypes["One"];
	["LocaleWhere"]: ValueTypes["LocaleWhere"];
	["RecipeLocaleWhere"]: ValueTypes["RecipeLocaleWhere"];
	["RecipeWhere"]: ValueTypes["RecipeWhere"];
	["DateCondition"]: ValueTypes["DateCondition"];
	["Date"]: ValueTypes["Date"];
	["ImageWhere"]: ValueTypes["ImageWhere"];
	["PinnedRecipeWhere"]: ValueTypes["PinnedRecipeWhere"];
	["UserWhere"]: ValueTypes["UserWhere"];
	["ImplemetationDateWhere"]: ValueTypes["ImplemetationDateWhere"];
	["StepWhere"]: ValueTypes["StepWhere"];
	["StepLocaleWhere"]: ValueTypes["StepLocaleWhere"];
	["StepModificationWhere"]: ValueTypes["StepModificationWhere"];
	["DateTimeCondition"]: ValueTypes["DateTimeCondition"];
	["DateTime"]: ValueTypes["DateTime"];
	["BooleanCondition"]: ValueTypes["BooleanCondition"];
	["StepGroupWhere"]: ValueTypes["StepGroupWhere"];
	["StepGroupLocaleWhere"]: ValueTypes["StepGroupLocaleWhere"];
	["StepGroupItemWhere"]: ValueTypes["StepGroupItemWhere"];
	["StepGroupItemTypeCondition"]: ValueTypes["StepGroupItemTypeCondition"];
	["StepGroupItemType"]: ValueTypes["StepGroupItemType"];
	["TipWhere"]: ValueTypes["TipWhere"];
	["TipLocaleWhere"]: ValueTypes["TipLocaleWhere"];
	["CategoryWhere"]: ValueTypes["CategoryWhere"];
	["CategoryLocaleWhere"]: ValueTypes["CategoryLocaleWhere"];
	["SeoWhere"]: ValueTypes["SeoWhere"];
	["TipGroupWhere"]: ValueTypes["TipGroupWhere"];
	["TipGroupItemWhere"]: ValueTypes["TipGroupItemWhere"];
	["TipGroupLocaleWhere"]: ValueTypes["TipGroupLocaleWhere"];
	["PinnedRecipesPageLocaleWhere"]: ValueTypes["PinnedRecipesPageLocaleWhere"];
	["PinnedRecipesPageWhere"]: ValueTypes["PinnedRecipesPageWhere"];
	["HomePageLocaleOrderBy"]: ValueTypes["HomePageLocaleOrderBy"];
	["OrderDirection"]: ValueTypes["OrderDirection"];
	["HomePageOrderBy"]: ValueTypes["HomePageOrderBy"];
	["LocaleOrderBy"]: ValueTypes["LocaleOrderBy"];
	["LinkableOrderBy"]: ValueTypes["LinkableOrderBy"];
	["CategoryLocaleOrderBy"]: ValueTypes["CategoryLocaleOrderBy"];
	["CategoryOrderBy"]: ValueTypes["CategoryOrderBy"];
	["ImageOrderBy"]: ValueTypes["ImageOrderBy"];
	["SeoOrderBy"]: ValueTypes["SeoOrderBy"];
	["RecipeLocaleOrderBy"]: ValueTypes["RecipeLocaleOrderBy"];
	["RecipeOrderBy"]: ValueTypes["RecipeOrderBy"];
	["UserOrderBy"]: ValueTypes["UserOrderBy"];
	["PinnedRecipesPageLocaleOrderBy"]: ValueTypes["PinnedRecipesPageLocaleOrderBy"];
	["PinnedRecipesPageOrderBy"]: ValueTypes["PinnedRecipesPageOrderBy"];
	["HomePageLocalesByLocaleUniqueWhere"]: ValueTypes["HomePageLocalesByLocaleUniqueWhere"];
	["LocaleUniqueWhere"]: ValueTypes["LocaleUniqueWhere"];
	["RecipeLocaleUniqueWhere"]: ValueTypes["RecipeLocaleUniqueWhere"];
	["RecipeUniqueWhere"]: ValueTypes["RecipeUniqueWhere"];
	["PinnedRecipeUniqueWhere"]: ValueTypes["PinnedRecipeUniqueWhere"];
	["ImplemetationDateUniqueWhere"]: ValueTypes["ImplemetationDateUniqueWhere"];
	["StepUniqueWhere"]: ValueTypes["StepUniqueWhere"];
	["StepLocaleUniqueWhere"]: ValueTypes["StepLocaleUniqueWhere"];
	["StepModificationUniqueWhere"]: ValueTypes["StepModificationUniqueWhere"];
	["StepGroupUniqueWhere"]: ValueTypes["StepGroupUniqueWhere"];
	["StepGroupLocaleUniqueWhere"]: ValueTypes["StepGroupLocaleUniqueWhere"];
	["StepGroupItemUniqueWhere"]: ValueTypes["StepGroupItemUniqueWhere"];
	["TipUniqueWhere"]: ValueTypes["TipUniqueWhere"];
	["TipLocaleUniqueWhere"]: ValueTypes["TipLocaleUniqueWhere"];
	["TipGroupUniqueWhere"]: ValueTypes["TipGroupUniqueWhere"];
	["TipGroupItemUniqueWhere"]: ValueTypes["TipGroupItemUniqueWhere"];
	["TipGroupLocaleUniqueWhere"]: ValueTypes["TipGroupLocaleUniqueWhere"];
	["LinkableUniqueWhere"]: ValueTypes["LinkableUniqueWhere"];
	["HomePageLocaleUniqueWhere"]: ValueTypes["HomePageLocaleUniqueWhere"];
	["HomePageUniqueWhere"]: ValueTypes["HomePageUniqueWhere"];
	["SeoUniqueWhere"]: ValueTypes["SeoUniqueWhere"];
	["ImageUniqueWhere"]: ValueTypes["ImageUniqueWhere"];
	["CategoryLocaleUniqueWhere"]: ValueTypes["CategoryLocaleUniqueWhere"];
	["CategoryUniqueWhere"]: ValueTypes["CategoryUniqueWhere"];
	["PinnedRecipesPageLocaleUniqueWhere"]: ValueTypes["PinnedRecipesPageLocaleUniqueWhere"];
	["PinnedRecipesPageUniqueWhere"]: ValueTypes["PinnedRecipesPageUniqueWhere"];
	["HomePageLocalesByLinkUniqueWhere"]: ValueTypes["HomePageLocalesByLinkUniqueWhere"];
	["HomePageLocalesBySeoUniqueWhere"]: ValueTypes["HomePageLocalesBySeoUniqueWhere"];
	["PinnedRecipeOrderBy"]: ValueTypes["PinnedRecipeOrderBy"];
	["UserPinnedRecipesByImplementationDateUniqueWhere"]: ValueTypes["UserPinnedRecipesByImplementationDateUniqueWhere"];
	["UserPinnedRecipesByModificationUniqueWhere"]: ValueTypes["UserPinnedRecipesByModificationUniqueWhere"];
	["UserCreatedRecipesByLocalesUniqueWhere"]: ValueTypes["UserCreatedRecipesByLocalesUniqueWhere"];
	["UserCreatedRecipesByPinnedRecipesUniqueWhere"]: ValueTypes["UserCreatedRecipesByPinnedRecipesUniqueWhere"];
	["UserCreatedRecipesByStepsGroupsUniqueWhere"]: ValueTypes["UserCreatedRecipesByStepsGroupsUniqueWhere"];
	["UserCreatedRecipesByTipGroupsUniqueWhere"]: ValueTypes["UserCreatedRecipesByTipGroupsUniqueWhere"];
	["StepModificationOrderBy"]: ValueTypes["StepModificationOrderBy"];
	["StepLocaleOrderBy"]: ValueTypes["StepLocaleOrderBy"];
	["StepOrderBy"]: ValueTypes["StepOrderBy"];
	["ImplemetationDateOrderBy"]: ValueTypes["ImplemetationDateOrderBy"];
	["StepLocalesByLocaleUniqueWhere"]: ValueTypes["StepLocalesByLocaleUniqueWhere"];
	["StepLocalesByModificationDateUniqueWhere"]: ValueTypes["StepLocalesByModificationDateUniqueWhere"];
	["StepImplementationDateByPinnedRecipeUniqueWhere"]: ValueTypes["StepImplementationDateByPinnedRecipeUniqueWhere"];
	["PinnedRecipeImplementationDateByStepUniqueWhere"]: ValueTypes["PinnedRecipeImplementationDateByStepUniqueWhere"];
	["StepGroupLocaleOrderBy"]: ValueTypes["StepGroupLocaleOrderBy"];
	["StepGroupOrderBy"]: ValueTypes["StepGroupOrderBy"];
	["TipLocaleOrderBy"]: ValueTypes["TipLocaleOrderBy"];
	["TipOrderBy"]: ValueTypes["TipOrderBy"];
	["TipLocalesByLocaleUniqueWhere"]: ValueTypes["TipLocalesByLocaleUniqueWhere"];
	["StepGroupItemOrderBy"]: ValueTypes["StepGroupItemOrderBy"];
	["StepGroupLocalesByLocaleUniqueWhere"]: ValueTypes["StepGroupLocalesByLocaleUniqueWhere"];
	["StepGroupItemsByStepUniqueWhere"]: ValueTypes["StepGroupItemsByStepUniqueWhere"];
	["StepGroupItemsByTipUniqueWhere"]: ValueTypes["StepGroupItemsByTipUniqueWhere"];
	["CategoryLocalesByLocaleUniqueWhere"]: ValueTypes["CategoryLocalesByLocaleUniqueWhere"];
	["CategoryLocalesBySeoUniqueWhere"]: ValueTypes["CategoryLocalesBySeoUniqueWhere"];
	["CategoryLocalesByLinkUniqueWhere"]: ValueTypes["CategoryLocalesByLinkUniqueWhere"];
	["TipGroupItemOrderBy"]: ValueTypes["TipGroupItemOrderBy"];
	["TipGroupOrderBy"]: ValueTypes["TipGroupOrderBy"];
	["TipGroupLocaleOrderBy"]: ValueTypes["TipGroupLocaleOrderBy"];
	["TipGroupItemsByTipUniqueWhere"]: ValueTypes["TipGroupItemsByTipUniqueWhere"];
	["TipGroupLocalesByLocaleUniqueWhere"]: ValueTypes["TipGroupLocalesByLocaleUniqueWhere"];
	["RecipeLocalesByLocaleUniqueWhere"]: ValueTypes["RecipeLocalesByLocaleUniqueWhere"];
	["RecipeLocalesByLinkUniqueWhere"]: ValueTypes["RecipeLocalesByLinkUniqueWhere"];
	["RecipePinnedRecipesByImplementationDateUniqueWhere"]: ValueTypes["RecipePinnedRecipesByImplementationDateUniqueWhere"];
	["RecipePinnedRecipesByModificationUniqueWhere"]: ValueTypes["RecipePinnedRecipesByModificationUniqueWhere"];
	["RecipeStepsGroupsByLocalesUniqueWhere"]: ValueTypes["RecipeStepsGroupsByLocalesUniqueWhere"];
	["RecipeStepsGroupsByItemsUniqueWhere"]: ValueTypes["RecipeStepsGroupsByItemsUniqueWhere"];
	["RecipeTipGroupsByItemsUniqueWhere"]: ValueTypes["RecipeTipGroupsByItemsUniqueWhere"];
	["RecipeTipGroupsByLocalesUniqueWhere"]: ValueTypes["RecipeTipGroupsByLocalesUniqueWhere"];
	["PinnedRecipesPageLocalesByLocaleUniqueWhere"]: ValueTypes["PinnedRecipesPageLocalesByLocaleUniqueWhere"];
	["PinnedRecipesPageLocalesByLinkUniqueWhere"]: ValueTypes["PinnedRecipesPageLocalesByLinkUniqueWhere"];
	["PinnedRecipesPageLocalesBySeoUniqueWhere"]: ValueTypes["PinnedRecipesPageLocalesBySeoUniqueWhere"];
	["LocaleRecipesByBaseUniqueWhere"]: ValueTypes["LocaleRecipesByBaseUniqueWhere"];
	["LocaleRecipesByLinkUniqueWhere"]: ValueTypes["LocaleRecipesByLinkUniqueWhere"];
	["LocaleStepsByBaseUniqueWhere"]: ValueTypes["LocaleStepsByBaseUniqueWhere"];
	["LocaleStepsByModificationDateUniqueWhere"]: ValueTypes["LocaleStepsByModificationDateUniqueWhere"];
	["LocaleStepsGroupsByBaseUniqueWhere"]: ValueTypes["LocaleStepsGroupsByBaseUniqueWhere"];
	["LocaleHomePageByBaseUniqueWhere"]: ValueTypes["LocaleHomePageByBaseUniqueWhere"];
	["LocaleHomePageByLinkUniqueWhere"]: ValueTypes["LocaleHomePageByLinkUniqueWhere"];
	["LocaleHomePageBySeoUniqueWhere"]: ValueTypes["LocaleHomePageBySeoUniqueWhere"];
	["LocaleCategoriesByBaseUniqueWhere"]: ValueTypes["LocaleCategoriesByBaseUniqueWhere"];
	["LocaleCategoriesBySeoUniqueWhere"]: ValueTypes["LocaleCategoriesBySeoUniqueWhere"];
	["LocaleCategoriesByLinkUniqueWhere"]: ValueTypes["LocaleCategoriesByLinkUniqueWhere"];
	["LocaleTipsByBaseUniqueWhere"]: ValueTypes["LocaleTipsByBaseUniqueWhere"];
	["LocaleTipGroupsByBaseUniqueWhere"]: ValueTypes["LocaleTipGroupsByBaseUniqueWhere"];
	["LocalePinnedRecipesPageByBaseUniqueWhere"]: ValueTypes["LocalePinnedRecipesPageByBaseUniqueWhere"];
	["LocalePinnedRecipesPageByLinkUniqueWhere"]: ValueTypes["LocalePinnedRecipesPageByLinkUniqueWhere"];
	["LocalePinnedRecipesPageBySeoUniqueWhere"]: ValueTypes["LocalePinnedRecipesPageBySeoUniqueWhere"];
	["ContentReferenceLinkableItemOrderBy"]: ValueTypes["ContentReferenceLinkableItemOrderBy"];
	["ContentReferenceOrderBy"]: ValueTypes["ContentReferenceOrderBy"];
	["ContentBlockOrderBy"]: ValueTypes["ContentBlockOrderBy"];
	["ContentOrderBy"]: ValueTypes["ContentOrderBy"];
	["ContentReferenceLinkablesByItemUniqueWhere"]: ValueTypes["ContentReferenceLinkablesByItemUniqueWhere"];
	["ContentBlockReferencesByLinkablesUniqueWhere"]: ValueTypes["ContentBlockReferencesByLinkablesUniqueWhere"];
	["ContentReferenceLinkableItemUniqueWhere"]: ValueTypes["ContentReferenceLinkableItemUniqueWhere"];
	["ContentBlocksByReferencesUniqueWhere"]: ValueTypes["ContentBlocksByReferencesUniqueWhere"];
	["ContentReferenceUniqueWhere"]: ValueTypes["ContentReferenceUniqueWhere"];
	["ContentUniqueWhere"]: ValueTypes["ContentUniqueWhere"];
	["ContentBlockUniqueWhere"]: ValueTypes["ContentBlockUniqueWhere"];
	["LinkType"]: ValueTypes["LinkType"];
	["LinkUniqueWhere"]: ValueTypes["LinkUniqueWhere"];
	["LinkWhere"]: ValueTypes["LinkWhere"];
	["LinkTypeCondition"]: ValueTypes["LinkTypeCondition"];
	["LinkOrderBy"]: ValueTypes["LinkOrderBy"];
	["UserUniqueWhere"]: ValueTypes["UserUniqueWhere"];
	["PinnedRecipeCreateInput"]: ValueTypes["PinnedRecipeCreateInput"];
	["PinnedRecipeCreateUserEntityRelationInput"]: ValueTypes["PinnedRecipeCreateUserEntityRelationInput"];
	["PinnedRecipeCreateDerivedByEntityRelationInput"]: ValueTypes["PinnedRecipeCreateDerivedByEntityRelationInput"];
	["PinnedRecipeCreateImplementationDateEntityRelationInput"]: ValueTypes["PinnedRecipeCreateImplementationDateEntityRelationInput"];
	["ImplemetationDateWithoutPinnedRecipeCreateInput"]: ValueTypes["ImplemetationDateWithoutPinnedRecipeCreateInput"];
	["ImplemetationDateCreateStepEntityRelationInput"]: ValueTypes["ImplemetationDateCreateStepEntityRelationInput"];
	["ImplemetationDateCreateInput"]: ValueTypes["ImplemetationDateCreateInput"];
	["ImplemetationDateCreatePinnedRecipeEntityRelationInput"]: ValueTypes["ImplemetationDateCreatePinnedRecipeEntityRelationInput"];
	["PinnedRecipeWithoutImplementationDateCreateInput"]: ValueTypes["PinnedRecipeWithoutImplementationDateCreateInput"];
	["RecipeListWhere"]: ValueTypes["RecipeListWhere"];
	["RecipeListItemWhere"]: ValueTypes["RecipeListItemWhere"];
	["RecipeListItemOrderBy"]: ValueTypes["RecipeListItemOrderBy"];
	["RecipeListOrderBy"]: ValueTypes["RecipeListOrderBy"];
	["RecipeListUniqueWhere"]: ValueTypes["RecipeListUniqueWhere"];
	["RecipeListItemUniqueWhere"]: ValueTypes["RecipeListItemUniqueWhere"];
	["_MutationErrorType"]: ValueTypes["_MutationErrorType"];
	["MutationTransactionOptions"]: ValueTypes["MutationTransactionOptions"];
	["Json"]: ValueTypes["Json"];
	["_OnDeleteBehaviour"]: ValueTypes["_OnDeleteBehaviour"];
	["_RelationSide"]: ValueTypes["_RelationSide"];
	["_OrderByDirection"]: ValueTypes["_OrderByDirection"];
}