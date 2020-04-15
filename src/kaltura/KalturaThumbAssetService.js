
/**
 *Class definition for the Kaltura service: thumbAsset.
 **/
var KalturaThumbAssetService = {
	/**
	 * Add thumbnail asset.
	 * @param	entryId	string		 (optional)
	 * @param	thumbAsset	KalturaThumbAsset		 (optional)
	 **/
	add: function(entryId, thumbAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.thumbAsset = thumbAsset;
		return new KalturaRequestBuilder("thumbasset", "add", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	fileData	HTMLElement		 (optional)
	 **/
	addFromImage: function(entryId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.entryId = entryId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("thumbasset", "addFromImage", kparams, kfiles);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	url	string		 (optional)
	 **/
	addFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("thumbasset", "addFromUrl", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 **/
	deleteAction: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "delete", kparams);
	},
	
	/**
	 * manually export an asset.
	 * @param	assetId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 **/
	exportAction: function(assetId, storageProfileId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("thumbasset", "export", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 * @param	sourceAssetId	string		id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null)
	 **/
	generate: function(entryId, thumbParams, sourceAssetId){
		if(!sourceAssetId)
			sourceAssetId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.thumbParams = thumbParams;
		kparams.sourceAssetId = sourceAssetId;
		return new KalturaRequestBuilder("thumbasset", "generate", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	destThumbParamsId	int		indicate the id of the ThumbParams to be generate this thumbnail by (optional)
	 **/
	generateByEntryId: function(entryId, destThumbParamsId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.destThumbParamsId = destThumbParamsId;
		return new KalturaRequestBuilder("thumbasset", "generateByEntryId", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 **/
	get: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "get", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	getByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("thumbasset", "getByEntryId", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @param	thumbParams	KalturaThumbParams		 (optional, default: null)
	 **/
	getUrl: function(id, storageId, thumbParams){
		if(!storageId)
			storageId = null;
		if(!thumbParams)
			thumbParams = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		if (thumbParams != null)
			kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbasset", "getUrl", kparams);
	},
	
	/**
	 * List Thumbnail Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("thumbasset", "list", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 **/
	regenerate: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "regenerate", kparams);
	},
	
	/**
	 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *		 Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync..
	 * @param	thumbAssetId	string		 (optional)
	 **/
	setAsDefault: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "setAsDefault", kparams);
	},
	
	/**
	 * Update content of thumbnail asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("thumbasset", "setContent", kparams);
	},
	
	/**
	 * Update thumbnail asset.
	 * @param	id	string		 (optional)
	 * @param	thumbAsset	KalturaThumbAsset		 (optional)
	 **/
	update: function(id, thumbAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.thumbAsset = thumbAsset;
		return new KalturaRequestBuilder("thumbasset", "update", kparams);
	}
}
