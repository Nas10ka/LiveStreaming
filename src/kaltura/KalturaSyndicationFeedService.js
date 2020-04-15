
/**
 *Class definition for the Kaltura service: syndicationFeed.
 **/
var KalturaSyndicationFeedService = {
	/**
	 * Add new Syndication Feed.
	 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional)
	 **/
	add: function(syndicationFeed){
		var kparams = new Object();
		kparams.syndicationFeed = syndicationFeed;
		return new KalturaRequestBuilder("syndicationfeed", "add", kparams);
	},
	
	/**
	 * Delete Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("syndicationfeed", "delete", kparams);
	},
	
	/**
	 * Get Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("syndicationfeed", "get", kparams);
	},
	
	/**
	 * get entry count for a syndication feed.
	 * @param	feedId	string		 (optional)
	 **/
	getEntryCount: function(feedId){
		var kparams = new Object();
		kparams.feedId = feedId;
		return new KalturaRequestBuilder("syndicationfeed", "getEntryCount", kparams);
	},
	
	/**
	 * List Syndication Feeds by filter with paging support.
	 * @param	filter	KalturaBaseSyndicationFeedFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("syndicationfeed", "list", kparams);
	},
	
	/**
	 * request conversion for all entries that doesn't have the required flavor param
 *		 returns a comma-separated ids of conversion jobs.
	 * @param	feedId	string		 (optional)
	 **/
	requestConversion: function(feedId){
		var kparams = new Object();
		kparams.feedId = feedId;
		return new KalturaRequestBuilder("syndicationfeed", "requestConversion", kparams);
	},
	
	/**
	 * Update Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional)
	 **/
	update: function(id, syndicationFeed){
		var kparams = new Object();
		kparams.id = id;
		kparams.syndicationFeed = syndicationFeed;
		return new KalturaRequestBuilder("syndicationfeed", "update", kparams);
	}
}
