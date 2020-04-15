
/**
 *Class definition for the Kaltura service: fileAsset.
 **/
var KalturaFileAssetService = {
	/**
	 * Add new file asset.
	 * @param	fileAsset	KalturaFileAsset		 (optional)
	 **/
	add: function(fileAsset){
		var kparams = new Object();
		kparams.fileAsset = fileAsset;
		return new KalturaRequestBuilder("fileasset", "add", kparams);
	},
	
	/**
	 * Delete file asset by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("fileasset", "delete", kparams);
	},
	
	/**
	 * Get file asset by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("fileasset", "get", kparams);
	},
	
	/**
	 * List file assets by filter and pager.
	 * @param	filter	KalturaFileAssetFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("fileasset", "list", kparams);
	},
	
	/**
	 * Set content of file asset.
	 * @param	id	int		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("fileasset", "setContent", kparams);
	},
	
	/**
	 * Update file asset by id.
	 * @param	id	int		 (optional)
	 * @param	fileAsset	KalturaFileAsset		 (optional)
	 **/
	update: function(id, fileAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.fileAsset = fileAsset;
		return new KalturaRequestBuilder("fileasset", "update", kparams);
	}
}
