
/**
 *Class definition for the Kaltura service: playReadyDrm.
 **/
var KalturaPlayReadyDrmService = {
	/**
	 * Generate key id and content key for PlayReady encryption.
	 **/
	generateKey: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("playready_playreadydrm", "generateKey", kparams);
	},
	
	/**
	 * Get content keys for input key ids.
	 * @param	keyIds	string		- comma separated key id's (optional)
	 **/
	getContentKeys: function(keyIds){
		var kparams = new Object();
		kparams.keyIds = keyIds;
		return new KalturaRequestBuilder("playready_playreadydrm", "getContentKeys", kparams);
	},
	
	/**
	 * Get content key and key id for the given entry.
	 * @param	entryId	string		 (optional)
	 * @param	createIfMissing	bool		 (optional, default: false)
	 **/
	getEntryContentKey: function(entryId, createIfMissing){
		if(!createIfMissing)
			createIfMissing = false;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.createIfMissing = createIfMissing;
		return new KalturaRequestBuilder("playready_playreadydrm", "getEntryContentKey", kparams);
	},
	
	/**
	 * Get Play Ready policy and dates for license creation.
	 * @param	keyId	string		 (optional)
	 * @param	deviceId	string		 (optional)
	 * @param	deviceType	int		 (optional)
	 * @param	entryId	string		 (optional, default: null)
	 * @param	referrer	string		64base encoded (optional, default: null)
	 **/
	getLicenseDetails: function(keyId, deviceId, deviceType, entryId, referrer){
		if(!entryId)
			entryId = null;
		if(!referrer)
			referrer = null;
		var kparams = new Object();
		kparams.keyId = keyId;
		kparams.deviceId = deviceId;
		kparams.deviceType = deviceType;
		kparams.entryId = entryId;
		kparams.referrer = referrer;
		return new KalturaRequestBuilder("playready_playreadydrm", "getLicenseDetails", kparams);
	}
}
