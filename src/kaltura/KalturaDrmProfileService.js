
/**
 *Class definition for the Kaltura service: drmProfile.
 **/
var KalturaDrmProfileService = {
	/**
	 * Allows you to add a new DrmProfile object.
	 * @param	drmProfile	KalturaDrmProfile		 (optional)
	 **/
	add: function(drmProfile){
		var kparams = new Object();
		kparams.drmProfile = drmProfile;
		return new KalturaRequestBuilder("drm_drmprofile", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDrmProfile object as deleted.
	 * @param	drmProfileId	int		 (optional)
	 **/
	deleteAction: function(drmProfileId){
		var kparams = new Object();
		kparams.drmProfileId = drmProfileId;
		return new KalturaRequestBuilder("drm_drmprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDrmProfile object by ID.
	 * @param	drmProfileId	int		 (optional)
	 **/
	get: function(drmProfileId){
		var kparams = new Object();
		kparams.drmProfileId = drmProfileId;
		return new KalturaRequestBuilder("drm_drmprofile", "get", kparams);
	},
	
	/**
	 * Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
	 * @param	provider	string		 (optional, enum: KalturaDrmProviderType)
	 **/
	getByProvider: function(provider){
		var kparams = new Object();
		kparams.provider = provider;
		return new KalturaRequestBuilder("drm_drmprofile", "getByProvider", kparams);
	},
	
	/**
	 * List KalturaDrmProfile objects.
	 * @param	filter	KalturaDrmProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("drm_drmprofile", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDrmProfile object.
	 * @param	drmProfileId	int		 (optional)
	 * @param	drmProfile	KalturaDrmProfile		Id (optional)
	 **/
	update: function(drmProfileId, drmProfile){
		var kparams = new Object();
		kparams.drmProfileId = drmProfileId;
		kparams.drmProfile = drmProfile;
		return new KalturaRequestBuilder("drm_drmprofile", "update", kparams);
	}
}
