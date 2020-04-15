
/**
 *Class definition for the Kaltura service: scheduledTaskProfile.
 **/
var KalturaScheduledTaskProfileService = {
	/**
	 * Add a new scheduled task profile.
	 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional)
	 **/
	add: function(scheduledTaskProfile){
		var kparams = new Object();
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "add", kparams);
	},
	
	/**
	 * Delete a scheduled task profile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a scheduled task profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "get", kparams);
	},
	
	/**
	 * .
	 * @param	requestId	int		 (optional)
	 **/
	getDryRunResults: function(requestId){
		var kparams = new Object();
		kparams.requestId = requestId;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "getDryRunResults", kparams);
	},
	
	/**
	 * List scheduled task profiles.
	 * @param	filter	KalturaScheduledTaskProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	scheduledTaskProfileId	int		 (optional)
	 * @param	maxResults	int		 (optional, default: 500)
	 **/
	requestDryRun: function(scheduledTaskProfileId, maxResults){
		if(!maxResults)
			maxResults = 500;
		var kparams = new Object();
		kparams.scheduledTaskProfileId = scheduledTaskProfileId;
		kparams.maxResults = maxResults;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "requestDryRun", kparams);
	},
	
	/**
	 * Update an existing scheduled task profile.
	 * @param	id	int		 (optional)
	 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional)
	 **/
	update: function(id, scheduledTaskProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "update", kparams);
	}
}
