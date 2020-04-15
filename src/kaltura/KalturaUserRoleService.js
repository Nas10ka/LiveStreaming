
/**
 *Class definition for the Kaltura service: userRole.
 **/
var KalturaUserRoleService = {
	/**
	 * Adds a new user role object to the account..
	 * @param	userRole	KalturaUserRole		A new role (optional)
	 **/
	add: function(userRole){
		var kparams = new Object();
		kparams.userRole = userRole;
		return new KalturaRequestBuilder("userrole", "add", kparams);
	},
	
	/**
	 * Creates a new user role object that is a duplicate of an existing role..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 **/
	cloneAction: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "clone", kparams);
	},
	
	/**
	 * Deletes an existing user role object..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 **/
	deleteAction: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "delete", kparams);
	},
	
	/**
	 * Retrieves a user role object using its ID..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 **/
	get: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "get", kparams);
	},
	
	/**
	 * Lists user role objects that are associated with an account.
 *		 Blocked user roles are listed unless you use a filter to exclude them.
 *		 Deleted user roles are not listed unless you use a filter to include them..
	 * @param	filter	KalturaUserRoleFilter		A filter used to exclude specific types of user roles (optional, default: null)
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
		return new KalturaRequestBuilder("userrole", "list", kparams);
	},
	
	/**
	 * Updates an existing user role object..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 * @param	userRole	KalturaUserRole		Id The user role's unique identifier (optional)
	 **/
	update: function(userRoleId, userRole){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		kparams.userRole = userRole;
		return new KalturaRequestBuilder("userrole", "update", kparams);
	}
}
