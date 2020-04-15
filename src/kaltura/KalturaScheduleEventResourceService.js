
/**
 *Class definition for the Kaltura service: scheduleEventResource.
 **/
var KalturaScheduleEventResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleEventResource object.
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 **/
	add: function(scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "add", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEventResource object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	deleteAction: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEventResource object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	get: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "get", kparams);
	},
	
	/**
	 * List KalturaScheduleEventResource objects.
	 * @param	filter	KalturaScheduleEventResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @param	filterBlackoutConflicts	bool		 (optional, default: true)
	 **/
	listAction: function(filter, pager, filterBlackoutConflicts){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		if(!filterBlackoutConflicts)
			filterBlackoutConflicts = true;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		kparams.filterBlackoutConflicts = filterBlackoutConflicts;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEventResource object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 **/
	update: function(scheduleEventId, scheduleResourceId, scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "update", kparams);
	}
}
