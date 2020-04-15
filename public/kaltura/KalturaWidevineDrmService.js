
/**
 *Class definition for the Kaltura service: widevineDrm.
 **/
var KalturaWidevineDrmService = {
	/**
	 * Get license for encrypted content playback.
	 * @param	flavorAssetId	string		 (optional)
	 * @param	referrer	string		64base encoded (optional, default: null)
	 **/
	getLicense: function(flavorAssetId, referrer){
		if(!referrer)
			referrer = null;
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		kparams.referrer = referrer;
		return new KalturaRequestBuilder("widevine_widevinedrm", "getLicense", kparams);
	}
}
