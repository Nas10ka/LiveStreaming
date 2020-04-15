
/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 **/
var KalturaThumbParamsOutputService = {
	/**
	 * Get thumb params output object by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparamsoutput", "get", kparams);
	},
	
	/**
	 * List thumb params output objects by filter and pager.
	 * @param	filter	KalturaThumbParamsOutputFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("thumbparamsoutput", "list", kparams);
	}
}
