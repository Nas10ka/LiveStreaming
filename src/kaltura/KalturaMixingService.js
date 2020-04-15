
/**
 *Class definition for the Kaltura service: mixing.
 **/
var KalturaMixingService = {
	/**
	 * Adds a new mix.
 *		 If the dataContent is null, a default timeline will be created..
	 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional)
	 **/
	add: function(mixEntry){
		var kparams = new Object();
		kparams.mixEntry = mixEntry;
		return new KalturaRequestBuilder("mixing", "add", kparams);
	},
	
	/**
	 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("mixing", "anonymousRank", kparams);
	},
	
	/**
	 * Appends a media entry to the end of the mix timeline, this will save the mix timeline as a new version..
	 * @param	mixEntryId	string		Mix entry to append to its timeline (optional)
	 * @param	mediaEntryId	string		Media entry to append to the timeline (optional)
	 **/
	appendMediaEntry: function(mixEntryId, mediaEntryId){
		var kparams = new Object();
		kparams.mixEntryId = mixEntryId;
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("mixing", "appendMediaEntry", kparams);
	},
	
	/**
	 * Clones an existing mix..
	 * @param	entryId	string		Mix entry id to clone (optional)
	 **/
	cloneAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("mixing", "clone", kparams);
	},
	
	/**
	 * Count mix entries by filter..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("mixing", "count", kparams);
	},
	
	/**
	 * Delete a mix entry..
	 * @param	entryId	string		Mix entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("mixing", "delete", kparams);
	},
	
	/**
	 * Get mix entry by id..
	 * @param	entryId	string		Mix entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("mixing", "get", kparams);
	},
	
	/**
	 * Get the mixes in which the media entry is included.
	 * @param	mediaEntryId	string		 (optional)
	 **/
	getMixesByMediaId: function(mediaEntryId){
		var kparams = new Object();
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("mixing", "getMixesByMediaId", kparams);
	},
	
	/**
	 * Get all ready media entries that exist in the given mix id.
	 * @param	mixId	string		 (optional)
	 * @param	version	int		Desired version to get the data from (optional, default: -1)
	 **/
	getReadyMediaEntries: function(mixId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.mixId = mixId;
		kparams.version = version;
		return new KalturaRequestBuilder("mixing", "getReadyMediaEntries", kparams);
	},
	
	/**
	 * List entries by filter with paging support.
 *		 Return parameter is an array of mix entries..
	 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
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
		return new KalturaRequestBuilder("mixing", "list", kparams);
	},
	
	/**
	 * Update mix entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Mix entry id to update (optional)
	 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional)
	 **/
	update: function(entryId, mixEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mixEntry = mixEntry;
		return new KalturaRequestBuilder("mixing", "update", kparams);
	}
}
