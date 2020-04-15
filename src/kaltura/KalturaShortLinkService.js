
/**
 *Class definition for the Kaltura service: shortLink.
 **/
var KalturaShortLinkService = {
	/**
	 * Allows you to add a short link object.
	 * @param	shortLink	KalturaShortLink		 (optional)
	 **/
	add: function(shortLink){
		var kparams = new Object();
		kparams.shortLink = shortLink;
		return new KalturaRequestBuilder("shortlink_shortlink", "add", kparams);
	},
	
	/**
	 * Mark the short link as deleted.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("shortlink_shortlink", "delete", kparams);
	},
	
	/**
	 * Retrieve an short link object by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("shortlink_shortlink", "get", kparams);
	},
	
	/**
	 * List short link objects by filter and pager.
	 * @param	filter	KalturaShortLinkFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("shortlink_shortlink", "list", kparams);
	},
	
	/**
	 * Update existing short link.
	 * @param	id	string		 (optional)
	 * @param	shortLink	KalturaShortLink		 (optional)
	 **/
	update: function(id, shortLink){
		var kparams = new Object();
		kparams.id = id;
		kparams.shortLink = shortLink;
		return new KalturaRequestBuilder("shortlink_shortlink", "update", kparams);
	}
}
