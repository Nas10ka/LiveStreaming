
/**
 *Class definition for the Kaltura service: reachProfile.
 **/
var KalturaReachProfileService = {
	/**
	 * Allows you to add a partner specific reach profile.
	 * @param	reachProfile	KalturaReachProfile		 (optional)
	 **/
	add: function(reachProfile){
		var kparams = new Object();
		kparams.reachProfile = reachProfile;
		return new KalturaRequestBuilder("reach_reachprofile", "add", kparams);
	},
	
	/**
	 * Delete vednor profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_reachprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve specific reach profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_reachprofile", "get", kparams);
	},
	
	/**
	 * List KalturaReachProfile objects.
	 * @param	filter	KalturaReachProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("reach_reachprofile", "list", kparams);
	},
	
	/**
	 * sync vednor profile credit.
	 * @param	reachProfileId	int		 (optional)
	 **/
	syncCredit: function(reachProfileId){
		var kparams = new Object();
		kparams.reachProfileId = reachProfileId;
		return new KalturaRequestBuilder("reach_reachprofile", "syncCredit", kparams);
	},
	
	/**
	 * Update an existing reach profile object.
	 * @param	id	int		 (optional)
	 * @param	reachProfile	KalturaReachProfile		 (optional)
	 **/
	update: function(id, reachProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.reachProfile = reachProfile;
		return new KalturaRequestBuilder("reach_reachprofile", "update", kparams);
	},
	
	/**
	 * Update reach profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaReachProfileStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("reach_reachprofile", "updateStatus", kparams);
	}
}
