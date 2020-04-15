
/**
 *Class definition for the Kaltura service: accessControl.
 **/
var KalturaAccessControlService = {
	/**
	 * Add new Access Control Profile.
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 **/
	add: function(accessControl){
		var kparams = new Object();
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "add", kparams);
	},
	
	/**
	 * Delete Access Control Profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "delete", kparams);
	},
	
	/**
	 * Get Access Control Profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "get", kparams);
	},
	
	/**
	 * List Access Control Profiles by filter and pager.
	 * @param	filter	KalturaAccessControlFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("accesscontrol", "list", kparams);
	},
	
	/**
	 * Update Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 **/
	update: function(id, accessControl){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "update", kparams);
	}
}
