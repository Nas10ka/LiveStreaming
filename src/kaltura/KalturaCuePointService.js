
/**
 *Class definition for the Kaltura service: cuePoint.
 **/
var KalturaCuePointService = {
	/**
	 * Allows you to add an cue point object associated with an entry.
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 **/
	add: function(cuePoint){
		var kparams = new Object();
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "add", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	HTMLElement		 (optional)
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param	id	string		 (optional)
	 * @param	entryId	string		 (optional)
	 **/
	cloneAction: function(id, entryId){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "clone", kparams);
	},
	
	/**
	 * count cue point objects by filter.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "count", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "delete", kparams);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "get", kparams);
	},
	
	/**
	 * List cue point objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("cuepoint_cuepoint", "list", kparams);
	},
	
	/**
	 * Update cue point by id.
	 * @param	id	string		 (optional)
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 **/
	update: function(id, cuePoint){
		var kparams = new Object();
		kparams.id = id;
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @param	startTime	int		 (optional)
	 * @param	endTime	int		 (optional, default: null)
	 **/
	updateCuePointsTimes: function(id, startTime, endTime){
		if(!endTime)
			endTime = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.startTime = startTime;
		kparams.endTime = endTime;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "updateCuePointsTimes", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "updateStatus", kparams);
	}
}
