
/**
 *Class definition for the Kaltura service: documents.
 **/
var KalturaDocumentsService = {
	/**
	 * Copy entry into new entry.
	 * @param	sourceEntryId	string		Document entry id to copy from (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 **/
	addFromEntry: function(sourceEntryId, documentEntry, sourceFlavorParamsId){
		if(!documentEntry)
			documentEntry = null;
		if(!sourceFlavorParamsId)
			sourceFlavorParamsId = null;
		var kparams = new Object();
		kparams.sourceEntryId = sourceEntryId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new KalturaRequestBuilder("document_documents", "addFromEntry", kparams);
	},
	
	/**
	 * Copy flavor asset into new entry.
	 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 **/
	addFromFlavorAsset: function(sourceFlavorAssetId, documentEntry){
		if(!documentEntry)
			documentEntry = null;
		var kparams = new Object();
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "addFromFlavorAsset", kparams);
	},
	
	/**
	 * Add new document entry after the specific document file was uploaded and the upload token id exists.
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 **/
	addFromUploadedFile: function(documentEntry, uploadTokenId){
		var kparams = new Object();
		kparams.documentEntry = documentEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("document_documents", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Approves document replacement.
	 * @param	entryId	string		document entry id to replace (optional)
	 **/
	approveReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "approveReplace", kparams);
	},
	
	/**
	 * Cancels document replacement.
	 * @param	entryId	string		Document entry id to cancel (optional)
	 **/
	cancelReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "cancelReplace", kparams);
	},
	
	/**
	 * Convert entry.
	 * @param	entryId	string		Document entry id (optional)
	 * @param	conversionProfileId	int		 (optional, default: null)
	 * @param	dynamicConversionAttributes	array		 (optional, default: null)
	 **/
	convert: function(entryId, conversionProfileId, dynamicConversionAttributes){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!dynamicConversionAttributes)
			dynamicConversionAttributes = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new KalturaRequestBuilder("document_documents", "convert", kparams);
	},
	
	/**
	 * This will queue a batch job for converting the document file to swf
 *		 Returns the URL where the new swf will be available.
	 * @param	entryId	string		 (optional)
	 **/
	convertPptToSwf: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "convertPptToSwf", kparams);
	},
	
	/**
	 * Delete a document entry..
	 * @param	entryId	string		Document entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "delete", kparams);
	},
	
	/**
	 * Get document entry by ID..
	 * @param	entryId	string		Document entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("document_documents", "get", kparams);
	},
	
	/**
	 * List document entries by filter with paging support..
	 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
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
		return new KalturaRequestBuilder("document_documents", "list", kparams);
	},
	
	/**
	 * Update document entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Document entry id to update (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional)
	 **/
	update: function(entryId, documentEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "update", kparams);
	},
	
	/**
	 * Replace content associated with the given document entry..
	 * @param	entryId	string		document entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry doc content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 **/
	updateContent: function(entryId, resource, conversionProfileId){
		if(!conversionProfileId)
			conversionProfileId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("document_documents", "updateContent", kparams);
	},
	
	/**
	 * Upload a document file to Kaltura, then the file can be used to create a document entry..
	 * @param	fileData	HTMLElement		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("document_documents", "upload", kparams, kfiles);
	}
}
