
/**
 *Class definition for the Kaltura service: scheduleEvent.
 **/
var KalturaScheduleEventService = {
	/**
	 * Allows you to add a new KalturaScheduleEvent object.
	 * @param	scheduleEvent	KalturaScheduleEvent		 (optional)
	 **/
	add: function(scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadScheduleEventJobData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleevent", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as cancelled.
	 * @param	scheduleEventId	int		 (optional)
	 **/
	cancel: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "cancel", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 **/
	deleteAction: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEvent object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 **/
	get: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "get", kparams);
	},
	
	/**
	 * List conflicting events for resourcesIds by event's dates.
	 * @param	resourceIds	string		comma separated (optional)
	 * @param	scheduleEvent	KalturaScheduleEvent		 (optional)
	 * @param	scheduleEventIdToIgnore	string		 (optional, default: null)
	 * @param	scheduleEventConflictType	int		 (optional, enum: KalturaScheduleEventConflictType, default: 1)
	 **/
	getConflicts: function(resourceIds, scheduleEvent, scheduleEventIdToIgnore, scheduleEventConflictType){
		if(!scheduleEventIdToIgnore)
			scheduleEventIdToIgnore = null;
		if(!scheduleEventConflictType)
			scheduleEventConflictType = 1;
		var kparams = new Object();
		kparams.resourceIds = resourceIds;
		kparams.scheduleEvent = scheduleEvent;
		kparams.scheduleEventIdToIgnore = scheduleEventIdToIgnore;
		kparams.scheduleEventConflictType = scheduleEventConflictType;
		return new KalturaRequestBuilder("schedule_scheduleevent", "getConflicts", kparams);
	},
	
	/**
	 * List KalturaScheduleEvent objects.
	 * @param	filter	KalturaScheduleEventFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("schedule_scheduleevent", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEvent object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleEvent	KalturaScheduleEvent		Id (optional)
	 **/
	update: function(scheduleEventId, scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "update", kparams);
	}
}
