
/**
 *Class definition for the Kaltura service: distributionProfile.
 **/
var KalturaDistributionProfileService = {
	/**
	 * Add new Distribution Profile.
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 **/
	add: function(distributionProfile){
		var kparams = new Object();
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "add", kparams);
	},
	
	/**
	 * Delete Distribution Profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "delete", kparams);
	},
	
	/**
	 * Get Distribution Profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "get", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "listByPartner", kparams);
	},
	
	/**
	 * Update Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 **/
	update: function(id, distributionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "update", kparams);
	},
	
	/**
	 * Update Distribution Profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDistributionProfileStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "updateStatus", kparams);
	}
}
