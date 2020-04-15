
/**
 *Class definition for the Kaltura service: captionParams.
 **/
var KalturaCaptionParamsService = {
	/**
	 * Add new Caption Params.
	 * @param	captionParams	KalturaCaptionParams		 (optional)
	 **/
	add: function(captionParams){
		var kparams = new Object();
		kparams.captionParams = captionParams;
		return new KalturaRequestBuilder("caption_captionparams", "add", kparams);
	},
	
	/**
	 * Delete Caption Params by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionparams", "delete", kparams);
	},
	
	/**
	 * Get Caption Params by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionparams", "get", kparams);
	},
	
	/**
	 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaCaptionParamsFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("caption_captionparams", "list", kparams);
	},
	
	/**
	 * Update Caption Params by ID.
	 * @param	id	int		 (optional)
	 * @param	captionParams	KalturaCaptionParams		 (optional)
	 **/
	update: function(id, captionParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionParams = captionParams;
		return new KalturaRequestBuilder("caption_captionparams", "update", kparams);
	}
}
