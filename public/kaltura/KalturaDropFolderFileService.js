
/**
 *Class definition for the Kaltura service: dropFolderFile.
 **/
var KalturaDropFolderFileService = {
	/**
	 * Allows you to add a new KalturaDropFolderFile object.
	 * @param	dropFolderFile	KalturaDropFolderFile		 (optional)
	 **/
	add: function(dropFolderFile){
		var kparams = new Object();
		kparams.dropFolderFile = dropFolderFile;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDropFolderFile object as deleted.
	 * @param	dropFolderFileId	int		 (optional)
	 **/
	deleteAction: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDropFolderFile object by ID.
	 * @param	dropFolderFileId	int		 (optional)
	 **/
	get: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "get", kparams);
	},
	
	/**
	 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
	 * @param	dropFolderFileId	int		 (optional)
	 **/
	ignore: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "ignore", kparams);
	},
	
	/**
	 * List KalturaDropFolderFile objects.
	 * @param	filter	KalturaDropFolderFileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDropFolderFile object.
	 * @param	dropFolderFileId	int		 (optional)
	 * @param	dropFolderFile	KalturaDropFolderFile		Id (optional)
	 **/
	update: function(dropFolderFileId, dropFolderFile){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.dropFolderFile = dropFolderFile;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "update", kparams);
	},
	
	/**
	 * Update status of KalturaDropFolderFile.
	 * @param	dropFolderFileId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDropFolderFileStatus)
	 **/
	updateStatus: function(dropFolderFileId, status){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.status = status;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "updateStatus", kparams);
	}
}
