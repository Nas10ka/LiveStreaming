
/**
 *Class definition for the Kaltura service: distributionProvider.
 **/
var KalturaDistributionProviderService = {
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProviderFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("contentdistribution_distributionprovider", "list", kparams);
	}
}
