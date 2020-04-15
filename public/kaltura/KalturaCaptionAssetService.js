
/**
 *Class definition for the Kaltura service: captionAsset.
 **/
var KalturaCaptionAssetService = {
	/**
	 * Add caption asset.
	 * @param	entryId	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 **/
	add: function(entryId, captionAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "add", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 **/
	deleteAction: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 **/
	get: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "get", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 **/
	getUrl: function(id, storageId){
		if(!storageId)
			storageId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		return new KalturaRequestBuilder("caption_captionasset", "getUrl", kparams);
	},
	
	/**
	 * List caption Assets by filter and pager.
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
		return new KalturaRequestBuilder("caption_captionasset", "list", kparams);
	},
	
	/**
	 * Markss the caption as default and removes that mark from all other caption assets of the entry..
	 * @param	captionAssetId	string		 (optional)
	 **/
	setAsDefault: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "setAsDefault", kparams);
	},
	
	/**
	 * Update content of caption asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("caption_captionasset", "setContent", kparams);
	},
	
	/**
	 * Update caption asset.
	 * @param	id	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 **/
	update: function(id, captionAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "update", kparams);
	}
}
