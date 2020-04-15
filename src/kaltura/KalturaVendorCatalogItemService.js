
/**
 *Class definition for the Kaltura service: vendorCatalogItem.
 **/
var KalturaVendorCatalogItemService = {
	/**
	 * Allows you to add an service catalog item.
	 * @param	vendorCatalogItem	KalturaVendorCatalogItem		 (optional)
	 **/
	add: function(vendorCatalogItem){
		var kparams = new Object();
		kparams.vendorCatalogItem = vendorCatalogItem;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "add", kparams);
	},
	
	/**
	 * Delete vedor catalog item object.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "delete", kparams);
	},
	
	/**
	 * Retrieve specific catalog item by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "get", kparams);
	},
	
	/**
	 * List KalturaVendorCatalogItem objects.
	 * @param	filter	KalturaVendorCatalogItemFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "list", kparams);
	},
	
	/**
	 * Update an existing vedor catalog item object.
	 * @param	id	int		 (optional)
	 * @param	vendorCatalogItem	KalturaVendorCatalogItem		 (optional)
	 **/
	update: function(id, vendorCatalogItem){
		var kparams = new Object();
		kparams.id = id;
		kparams.vendorCatalogItem = vendorCatalogItem;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "update", kparams);
	},
	
	/**
	 * Update vendor catalog item status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaVendorCatalogItemStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "updateStatus", kparams);
	}
}
