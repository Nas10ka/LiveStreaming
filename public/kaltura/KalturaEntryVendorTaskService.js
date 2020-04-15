
/**
 *Class definition for the Kaltura service: entryVendorTask.
 **/
var KalturaEntryVendorTaskService = {
	/**
	 * Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status.
	 * @param	id	int		vendor task id (optional)
	 * @param	abortReason	string		 (optional, default: null)
	 **/
	abort: function(id, abortReason){
		if(!abortReason)
			abortReason = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.abortReason = abortReason;
		return new KalturaRequestBuilder("reach_entryvendortask", "abort", kparams);
	},
	
	/**
	 * Allows you to add a entry vendor task.
	 * @param	entryVendorTask	KalturaEntryVendorTask		 (optional)
	 **/
	add: function(entryVendorTask){
		var kparams = new Object();
		kparams.entryVendorTask = entryVendorTask;
		return new KalturaRequestBuilder("reach_entryvendortask", "add", kparams);
	},
	
	/**
	 * Approve entry vendor task for execution..
	 * @param	id	int		vendor task id to approve (optional)
	 **/
	approve: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "approve", kparams);
	},
	
	/**
	 * add batch job that sends an email with a link to download an updated CSV that contains list of users.
	 * @param	filter	KalturaEntryVendorTaskFilter		A filter used to exclude specific tasks (optional)
	 **/
	exportToCsv: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("reach_entryvendortask", "exportToCsv", kparams);
	},
	
	/**
	 * Extend access key in case the existing one has expired..
	 * @param	id	int		vendor task id (optional)
	 **/
	extendAccessKey: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "extendAccessKey", kparams);
	},
	
	/**
	 * Retrieve specific entry vendor task by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "get", kparams);
	},
	
	/**
	 * get KalturaEntryVendorTask objects for specific vendor partner.
	 * @param	filter	KalturaEntryVendorTaskFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getJobs: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reach_entryvendortask", "getJobs", kparams);
	},
	
	/**
	 * List KalturaEntryVendorTask objects.
	 * @param	filter	KalturaEntryVendorTaskFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("reach_entryvendortask", "list", kparams);
	},
	
	/**
	 * Reject entry vendor task for execution..
	 * @param	id	int		vendor task id to reject (optional)
	 * @param	rejectReason	string		 (optional, default: null)
	 **/
	reject: function(id, rejectReason){
		if(!rejectReason)
			rejectReason = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.rejectReason = rejectReason;
		return new KalturaRequestBuilder("reach_entryvendortask", "reject", kparams);
	},
	
	/**
	 * Will serve a requested csv.
	 * @param	id	string		- the requested file id (optional)
	 **/
	serveCsv: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "serveCsv", kparams);
	},
	
	/**
	 * Update entry vendor task. Only the properties that were set will be updated..
	 * @param	id	int		vendor task id to update (optional)
	 * @param	entryVendorTask	KalturaEntryVendorTask		evntry vendor task to update (optional)
	 **/
	update: function(id, entryVendorTask){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryVendorTask = entryVendorTask;
		return new KalturaRequestBuilder("reach_entryvendortask", "update", kparams);
	},
	
	/**
	 * Update entry vendor task. Only the properties that were set will be updated..
	 * @param	id	int		vendor task id to update (optional)
	 * @param	entryVendorTask	KalturaEntryVendorTask		evntry vendor task to update (optional)
	 **/
	updateJob: function(id, entryVendorTask){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryVendorTask = entryVendorTask;
		return new KalturaRequestBuilder("reach_entryvendortask", "updateJob", kparams);
	}
}
