
/**
 *Class definition for the Kaltura service: virusScanProfile.
 **/
var KalturaVirusScanProfileService = {
	/**
	 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
	 * @param	virusScanProfile	KalturaVirusScanProfile		 (optional)
	 **/
	add: function(virusScanProfile){
		var kparams = new Object();
		kparams.virusScanProfile = virusScanProfile;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "add", kparams);
	},
	
	/**
	 * Mark the virus scan profile as deleted.
	 * @param	virusScanProfileId	int		 (optional)
	 **/
	deleteAction: function(virusScanProfileId){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve an virus scan profile object by id.
	 * @param	virusScanProfileId	int		 (optional)
	 **/
	get: function(virusScanProfileId){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "get", kparams);
	},
	
	/**
	 * List virus scan profile objects by filter and pager.
	 * @param	filter	KalturaVirusScanProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "list", kparams);
	},
	
	/**
	 * Scan flavor asset according to virus scan profile.
	 * @param	flavorAssetId	string		 (optional)
	 * @param	virusScanProfileId	int		 (optional, default: null)
	 **/
	scan: function(flavorAssetId, virusScanProfileId){
		if(!virusScanProfileId)
			virusScanProfileId = null;
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "scan", kparams);
	},
	
	/**
	 * Update existing virus scan profile, it is possible to update the virus scan profile id too.
	 * @param	virusScanProfileId	int		 (optional)
	 * @param	virusScanProfile	KalturaVirusScanProfile		Id (optional)
	 **/
	update: function(virusScanProfileId, virusScanProfile){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		kparams.virusScanProfile = virusScanProfile;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "update", kparams);
	}
}
