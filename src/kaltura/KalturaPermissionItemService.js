
/**
 *Class definition for the Kaltura service: permissionItem.
 **/
var KalturaPermissionItemService = {
	/**
	 * Adds a new permission item object to the account.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItem	KalturaPermissionItem		The new permission item (optional)
	 **/
	add: function(permissionItem){
		var kparams = new Object();
		kparams.permissionItem = permissionItem;
		return new KalturaRequestBuilder("permissionitem", "add", kparams);
	},
	
	/**
	 * Deletes an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 **/
	deleteAction: function(permissionItemId){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permissionitem", "delete", kparams);
	},
	
	/**
	 * Retrieves a permission item object using its ID..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 **/
	get: function(permissionItemId){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permissionitem", "get", kparams);
	},
	
	/**
	 * Lists permission item objects that are associated with an account..
	 * @param	filter	KalturaPermissionItemFilter		A filter used to exclude specific types of permission items (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
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
		return new KalturaRequestBuilder("permissionitem", "list", kparams);
	},
	
	/**
	 * Updates an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 * @param	permissionItem	KalturaPermissionItem		Id The permission item's unique identifier (optional)
	 **/
	update: function(permissionItemId, permissionItem){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		kparams.permissionItem = permissionItem;
		return new KalturaRequestBuilder("permissionitem", "update", kparams);
	}
}
