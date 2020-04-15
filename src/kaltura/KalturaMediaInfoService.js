
/**
 *Class definition for the Kaltura service: mediaInfo.
 **/
var KalturaMediaInfoService = {
	/**
	 * List media info objects by filter and pager.
	 * @param	filter	KalturaMediaInfoFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("mediainfo", "list", kparams);
	}
}
