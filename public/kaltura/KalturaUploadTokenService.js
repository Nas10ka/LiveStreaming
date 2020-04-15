
/**
 *Class definition for the Kaltura service: uploadToken.
 **/
var KalturaUploadTokenService = {
	/**
	 * Adds new upload token to upload a file.
	 * @param	uploadToken	KalturaUploadToken		 (optional, default: null)
	 **/
	add: function(uploadToken){
		if(!uploadToken)
			uploadToken = null;
		var kparams = new Object();
		if (uploadToken != null)
			kparams.uploadToken = uploadToken;
		return new KalturaRequestBuilder("uploadtoken", "add", kparams);
	},
	
	/**
	 * Deletes the upload token by upload token id.
	 * @param	uploadTokenId	string		 (optional)
	 **/
	deleteAction: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "delete", kparams);
	},
	
	/**
	 * Get upload token by id.
	 * @param	uploadTokenId	string		 (optional)
	 **/
	get: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "get", kparams);
	},
	
	/**
	 * List upload token by filter with pager support. 
 *		 When using a user session the service will be restricted to users objects only..
	 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("uploadtoken", "list", kparams);
	},
	
	/**
	 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 *		 Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 *		 A parallel upload session should have three stages:
 *		 1. A single upload with resume=false and finalChunk=false
 *		 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 *		 If a chunk fails to upload it can be re-uploaded.
 *		 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded 
 *		 with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 *		 has been returned (indicating not all of the chunks were appended yet) the final request can be retried..
	 * @param	uploadTokenId	string		 (optional)
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	resume	bool		 (optional, default: false)
	 * @param	finalChunk	bool		 (optional, default: true)
	 * @param	resumeAt	float		 (optional, default: -1)
	 **/
	upload: function(uploadTokenId, fileData, resume, finalChunk, resumeAt){
		if(!resume)
			resume = false;
		if(!finalChunk)
			finalChunk = true;
		if(!resumeAt)
			resumeAt = -1;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.uploadTokenId = uploadTokenId;
		kfiles.fileData = fileData;
		kparams.resume = resume;
		kparams.finalChunk = finalChunk;
		kparams.resumeAt = resumeAt;
		return new KalturaRequestBuilder("uploadtoken", "upload", kparams, kfiles);
	}
}
