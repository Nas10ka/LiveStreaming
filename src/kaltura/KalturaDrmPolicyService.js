
/**
 *Class definition for the Kaltura service: drmPolicy.
 **/
var KalturaDrmPolicyService = {
	/**
	 * Allows you to add a new DrmPolicy object.
	 * @param	drmPolicy	KalturaDrmPolicy		 (optional)
	 **/
	add: function(drmPolicy){
		var kparams = new Object();
		kparams.drmPolicy = drmPolicy;
		return new KalturaRequestBuilder("drm_drmpolicy", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDrmPolicy object as deleted.
	 * @param	drmPolicyId	int		 (optional)
	 **/
	deleteAction: function(drmPolicyId){
		var kparams = new Object();
		kparams.drmPolicyId = drmPolicyId;
		return new KalturaRequestBuilder("drm_drmpolicy", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDrmPolicy object by ID.
	 * @param	drmPolicyId	int		 (optional)
	 **/
	get: function(drmPolicyId){
		var kparams = new Object();
		kparams.drmPolicyId = drmPolicyId;
		return new KalturaRequestBuilder("drm_drmpolicy", "get", kparams);
	},
	
	/**
	 * List KalturaDrmPolicy objects.
	 * @param	filter	KalturaDrmPolicyFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("drm_drmpolicy", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDrmPolicy object.
	 * @param	drmPolicyId	int		 (optional)
	 * @param	drmPolicy	KalturaDrmPolicy		Id (optional)
	 **/
	update: function(drmPolicyId, drmPolicy){
		var kparams = new Object();
		kparams.drmPolicyId = drmPolicyId;
		kparams.drmPolicy = drmPolicy;
		return new KalturaRequestBuilder("drm_drmpolicy", "update", kparams);
	}
}
