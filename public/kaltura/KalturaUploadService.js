
/**
 *Class definition for the Kaltura service: upload.
 **/
var KalturaUploadService = {
	/**
	 * .
	 * @param	fileName	string		 (optional)
	 **/
	getUploadedFileTokenByFileName: function(fileName){
		var kparams = new Object();
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("upload", "getUploadedFileTokenByFileName", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("upload", "upload", kparams, kfiles);
	}
}
