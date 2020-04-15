
/**
 *Class definition for the Kaltura service: annotation.
 **/
var KalturaAnnotationService = {
	/**
	 * Allows you to add an annotation object associated with an entry.
	 * @param	annotation	KalturaCuePoint		 (optional)
	 **/
	add: function(annotation){
		var kparams = new Object();
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "add", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	HTMLElement		 (optional)
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("annotation_annotation", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param	id	string		 (optional)
	 * @param	entryId	string		 (optional)
	 * @param	parentId	string		 (optional, default: null)
	 **/
	cloneAction: function(id, entryId, parentId){
		if(!parentId)
			parentId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.entryId = entryId;
		kparams.parentId = parentId;
		return new KalturaRequestBuilder("annotation_annotation", "clone", kparams);
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
		return new KalturaRequestBuilder("annotation_annotation", "count", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "delete", kparams);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "get", kparams);
	},
	
	/**
	 * List annotation objects by filter and pager.
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
		return new KalturaRequestBuilder("annotation_annotation", "list", kparams);
	},
	
	/**
	 * Update annotation by id.
	 * @param	id	string		 (optional)
	 * @param	annotation	KalturaCuePoint		 (optional)
	 **/
	update: function(id, annotation){
		var kparams = new Object();
		kparams.id = id;
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "update", kparams);
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
		return new KalturaRequestBuilder("annotation_annotation", "updateCuePointsTimes", kparams);
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
		return new KalturaRequestBuilder("annotation_annotation", "updateStatus", kparams);
	}
}
