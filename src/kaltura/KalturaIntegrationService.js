
/**
 *Class definition for the Kaltura service: integration.
 **/
var KalturaIntegrationService = {
	/**
	 * Dispatch integration task.
	 * @param	data	KalturaIntegrationJobData		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaBatchJobObjectType)
	 * @param	objectId	string		 (optional)
	 **/
	dispatch: function(data, objectType, objectId){
		var kparams = new Object();
		kparams.data = data;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new KalturaRequestBuilder("integration_integration", "dispatch", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		integration job id (optional)
	 **/
	notify: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("integration_integration", "notify", kparams);
	}
}
