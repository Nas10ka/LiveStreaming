
/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "abort", kparams);
	},
	
	/**
	 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
	 * @param	conversionProfileId	int		Conversion profile id to use for converting the current bulk (-1 to use partner's default) (optional)
	 * @param	csvFileData	HTMLElement		bulk upload file (optional)
	 * @param	bulkUploadType	string		 (optional, enum: KalturaBulkUploadType, default: null)
	 * @param	uploadedBy	string		 (optional, default: null)
	 * @param	fileName	string		Friendly name of the file, used to be recognized later in the logs. (optional, default: null)
	 **/
	add: function(conversionProfileId, csvFileData, bulkUploadType, uploadedBy, fileName){
		if(!bulkUploadType)
			bulkUploadType = null;
		if(!uploadedBy)
			uploadedBy = null;
		if(!fileName)
			fileName = null;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.conversionProfileId = conversionProfileId;
		kfiles.csvFileData = csvFileData;
		kparams.bulkUploadType = bulkUploadType;
		kparams.uploadedBy = uploadedBy;
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("bulkupload", "add", kparams, kfiles);
	},
	
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	}
}
