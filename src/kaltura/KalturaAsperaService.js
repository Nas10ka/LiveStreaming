
/**
 *Class definition for the Kaltura service: aspera.
 **/
var KalturaAsperaService = {
	/**
	 * .
	 * @param	flavorAssetId	string		 (optional)
	 **/
	getFaspUrl: function(flavorAssetId){
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		return new KalturaRequestBuilder("aspera_aspera", "getFaspUrl", kparams);
	}
}
