
/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 **/
var KalturaFlavorParamsOutputService = {
	/**
	 * Get flavor params output object by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparamsoutput", "get", kparams);
	},
	
	/**
	 * List flavor params output objects by filter and pager.
	 * @param	filter	KalturaFlavorParamsOutputFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("flavorparamsoutput", "list", kparams);
	}
}
