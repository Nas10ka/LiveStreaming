
/**
 *Class definition for the Kaltura service: analytics.
 **/
var KalturaAnalyticsService = {
	/**
	 * report query action allows to get a analytics data for specific query dimensions, metrics and filters..
	 * @param	filter	KalturaAnalyticsFilter		the analytics query filter (optional)
	 * @param	pager	KalturaFilterPager		the analytics query result pager (optional, default: null)
	 **/
	query: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("analytics", "query", kparams);
	}
}
