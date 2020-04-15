
/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 **/
var KalturaConversionProfileAssetParamsService = {
	/**
	 * Lists asset parmas of conversion profile by ID.
	 * @param	filter	KalturaConversionProfileAssetParamsFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("conversionprofileassetparams", "list", kparams);
	},
	
	/**
	 * Update asset parmas of conversion profile by ID.
	 * @param	conversionProfileId	int		 (optional)
	 * @param	assetParamsId	int		 (optional)
	 * @param	conversionProfileAssetParams	KalturaConversionProfileAssetParams		 (optional)
	 **/
	update: function(conversionProfileId, assetParamsId, conversionProfileAssetParams){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		kparams.assetParamsId = assetParamsId;
		kparams.conversionProfileAssetParams = conversionProfileAssetParams;
		return new KalturaRequestBuilder("conversionprofileassetparams", "update", kparams);
	}
}
