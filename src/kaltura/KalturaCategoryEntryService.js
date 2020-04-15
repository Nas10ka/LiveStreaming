
/**
 *Class definition for the Kaltura service: categoryEntry.
 **/
var KalturaCategoryEntryService = {
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	activate: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "activate", kparams);
	},
	
	/**
	 * Add new CategoryEntry.
	 * @param	categoryEntry	KalturaCategoryEntry		 (optional)
	 **/
	add: function(categoryEntry){
		var kparams = new Object();
		kparams.categoryEntry = categoryEntry;
		return new KalturaRequestBuilder("categoryentry", "add", kparams);
	},
	
	/**
	 * .
	 * @param	bulkUploadData	KalturaBulkServiceData		 (optional)
	 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(bulkUploadData, bulkUploadCategoryEntryData){
		if(!bulkUploadCategoryEntryData)
			bulkUploadCategoryEntryData = null;
		var kparams = new Object();
		kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryEntryData != null)
			kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new KalturaRequestBuilder("categoryentry", "addFromBulkUpload", kparams);
	},
	
	/**
	 * Delete CategoryEntry.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	deleteAction: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "delete", kparams);
	},
	
	/**
	 * Index CategoryEntry by Id.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(entryId, categoryId, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("categoryentry", "index", kparams);
	},
	
	/**
	 * List all categoryEntry.
	 * @param	filter	KalturaCategoryEntryFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("categoryentry", "list", kparams);
	},
	
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	reject: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "reject", kparams);
	},
	
	/**
	 * update privacy context from the category.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	syncPrivacyContext: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "syncPrivacyContext", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null)
	 **/
	updateStatusFromBulk: function(fileData, bulkUploadData, bulkUploadCategoryEntryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryEntryData)
			bulkUploadCategoryEntryData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryEntryData != null)
			kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new KalturaRequestBuilder("categoryentry", "updateStatusFromBulk", kparams, kfiles);
	}
}
