
/**
 *Class definition for the Kaltura service: accessControlProfile.
 **/
var KalturaAccessControlProfileService = {
	/**
	 * Add new access control profile.
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 **/
	add: function(accessControlProfile){
		var kparams = new Object();
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "add", kparams);
	},
	
	/**
	 * Delete access control profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "delete", kparams);
	},
	
	/**
	 * Get access control profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "get", kparams);
	},
	
	/**
	 * List access control profiles by filter and pager.
	 * @param	filter	KalturaAccessControlProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("accesscontrolprofile", "list", kparams);
	},
	
	/**
	 * Update access control profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 **/
	update: function(id, accessControlProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "update", kparams);
	}
}
