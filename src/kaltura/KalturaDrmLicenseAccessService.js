
/**
 *Class definition for the Kaltura service: drmLicenseAccess.
 **/
var KalturaDrmLicenseAccessService = {
	/**
	 * getAccessAction
 *	     input: flavor ids, drmProvider
 *	     Get Access Action.
	 * @param	entryId	string		 (optional)
	 * @param	flavorIds	string		 (optional)
	 * @param	referrer	string		 (optional)
	 **/
	getAccess: function(entryId, flavorIds, referrer){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.flavorIds = flavorIds;
		kparams.referrer = referrer;
		return new KalturaRequestBuilder("drm_drmlicenseaccess", "getAccess", kparams);
	}
}
