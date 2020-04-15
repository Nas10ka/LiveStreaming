
/**
 *Class definition for the Kaltura service: captionAssetItem.
 **/
var KalturaCaptionAssetItemService = {
	/**
	 * List caption asset items by filter and pager.
	 * @param	captionAssetId	string		 (optional)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(captionAssetId, captionAssetItemFilter, captionAssetItemPager){
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "list", kparams);
	},
	
	/**
	 * Parse content of caption asset and index it.
	 * @param	captionAssetId	string		 (optional)
	 **/
	parse: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "parse", kparams);
	},
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 **/
	search: function(entryFilter, captionAssetItemFilter, captionAssetItemPager){
		if(!entryFilter)
			entryFilter = null;
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		if (entryFilter != null)
			kparams.entryFilter = entryFilter;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "search", kparams);
	},
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 **/
	searchEntries: function(entryFilter, captionAssetItemFilter, captionAssetItemPager){
		if(!entryFilter)
			entryFilter = null;
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		if (entryFilter != null)
			kparams.entryFilter = entryFilter;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "searchEntries", kparams);
	}
}
