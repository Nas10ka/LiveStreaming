
/**
 *Class definition for the Kaltura service: bulk.
 **/
var KalturaBulkService = {
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload_bulk", "abort", kparams);
	},
	
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload_bulk", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	bulkUploadFilter	KalturaBulkUploadFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(bulkUploadFilter, pager){
		if(!bulkUploadFilter)
			bulkUploadFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (bulkUploadFilter != null)
			kparams.bulkUploadFilter = bulkUploadFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload_bulk", "list", kparams);
	}
}
