
/**
 *Class definition for the Kaltura service: scheduleResource.
 **/
var KalturaScheduleResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleResource object.
	 * @param	scheduleResource	KalturaScheduleResource		 (optional)
	 **/
	add: function(scheduleResource){
		var kparams = new Object();
		kparams.scheduleResource = scheduleResource;
		return new KalturaRequestBuilder("schedule_scheduleresource", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadCsvJobData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleresource", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Mark the KalturaScheduleResource object as deleted.
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	deleteAction: function(scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleresource", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleResource object by ID.
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	get: function(scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleresource", "get", kparams);
	},
	
	/**
	 * List KalturaScheduleResource objects.
	 * @param	filter	KalturaScheduleResourceFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("schedule_scheduleresource", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleResource object.
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleResource	KalturaScheduleResource		Id (optional)
	 **/
	update: function(scheduleResourceId, scheduleResource){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleResource = scheduleResource;
		return new KalturaRequestBuilder("schedule_scheduleresource", "update", kparams);
	}
}
