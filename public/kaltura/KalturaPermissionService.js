
/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Adds a new permission object to the account..
	 * @param	permission	KalturaPermission		The new permission (optional)
	 **/
	add: function(permission){
		var kparams = new Object();
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "add", kparams);
	},
	
	/**
	 * Deletes an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 **/
	deleteAction: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "delete", kparams);
	},
	
	/**
	 * Retrieves a permission object using its ID..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 **/
	get: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "get", kparams);
	},
	
	/**
	 * Retrieves a list of permissions that apply to the current KS..
	 **/
	getCurrentPermissions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("permission", "getCurrentPermissions", kparams);
	},
	
	/**
	 * Lists permission objects that are associated with an account.
 *		 Blocked permissions are listed unless you use a filter to exclude them.
 *		 Blocked permissions are listed unless you use a filter to exclude them..
	 * @param	filter	KalturaPermissionFilter		A filter used to exclude specific types of permissions (optional, default: null)
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
		return new KalturaRequestBuilder("permission", "list", kparams);
	},
	
	/**
	 * Updates an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @param	permission	KalturaPermission		Name The name assigned to the permission (optional)
	 **/
	update: function(permissionName, permission){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "update", kparams);
	}
}
