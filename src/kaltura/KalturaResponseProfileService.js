
/**
 *Class definition for the Kaltura service: responseProfile.
 **/
var KalturaResponseProfileService = {
	/**
	 * Add new response profile.
	 * @param	addResponseProfile	KalturaResponseProfile		 (optional)
	 **/
	add: function(addResponseProfile){
		var kparams = new Object();
		kparams.addResponseProfile = addResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "add", kparams);
	},
	
	/**
	 * Clone an existing response profile.
	 * @param	id	int		 (optional)
	 * @param	profile	KalturaResponseProfile		 (optional)
	 **/
	cloneAction: function(id, profile){
		var kparams = new Object();
		kparams.id = id;
		kparams.profile = profile;
		return new KalturaRequestBuilder("responseprofile", "clone", kparams);
	},
	
	/**
	 * Delete response profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "delete", kparams);
	},
	
	/**
	 * Get response profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "get", kparams);
	},
	
	/**
	 * List response profiles by filter and pager.
	 * @param	filter	KalturaResponseProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("responseprofile", "list", kparams);
	},
	
	/**
	 * Recalculate response profile cached objects.
	 * @param	options	KalturaResponseProfileCacheRecalculateOptions		 (optional)
	 **/
	recalculate: function(options){
		var kparams = new Object();
		kparams.options = options;
		return new KalturaRequestBuilder("responseprofile", "recalculate", kparams);
	},
	
	/**
	 * Update response profile by id.
	 * @param	id	int		 (optional)
	 * @param	updateResponseProfile	KalturaResponseProfile		 (optional)
	 **/
	update: function(id, updateResponseProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.updateResponseProfile = updateResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "update", kparams);
	},
	
	/**
	 * Update response profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaResponseProfileStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("responseprofile", "updateStatus", kparams);
	}
}
