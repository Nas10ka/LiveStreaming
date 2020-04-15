
/**
 *Class definition for the Kaltura service: entryDistribution.
 **/
var KalturaEntryDistributionService = {
	/**
	 * Add new Entry Distribution.
	 * @param	entryDistribution	KalturaEntryDistribution		 (optional)
	 **/
	add: function(entryDistribution){
		var kparams = new Object();
		kparams.entryDistribution = entryDistribution;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "add", kparams);
	},
	
	/**
	 * Delete Entry Distribution by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "delete", kparams);
	},
	
	/**
	 * Get Entry Distribution by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "get", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaEntryDistributionFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "list", kparams);
	},
	
	/**
	 * Retries last submit action.
	 * @param	id	int		 (optional)
	 **/
	retrySubmit: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "retrySubmit", kparams);
	},
	
	/**
	 * Submits Entry Distribution to the remote destination.
	 * @param	id	int		 (optional)
	 * @param	submitWhenReady	bool		 (optional, default: false)
	 **/
	submitAdd: function(id, submitWhenReady){
		if(!submitWhenReady)
			submitWhenReady = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.submitWhenReady = submitWhenReady;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitAdd", kparams);
	},
	
	/**
	 * Deletes Entry Distribution from the remote destination.
	 * @param	id	int		 (optional)
	 **/
	submitDelete: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitDelete", kparams);
	},
	
	/**
	 * Submits Entry Distribution report request.
	 * @param	id	int		 (optional)
	 **/
	submitFetchReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitFetchReport", kparams);
	},
	
	/**
	 * Submits Entry Distribution changes to the remote destination.
	 * @param	id	int		 (optional)
	 **/
	submitUpdate: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitUpdate", kparams);
	},
	
	/**
	 * Update Entry Distribution by id.
	 * @param	id	int		 (optional)
	 * @param	entryDistribution	KalturaEntryDistribution		 (optional)
	 **/
	update: function(id, entryDistribution){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryDistribution = entryDistribution;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "update", kparams);
	},
	
	/**
	 * Validates Entry Distribution by id for submission.
	 * @param	id	int		 (optional)
	 **/
	validate: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "validate", kparams);
	}
}
