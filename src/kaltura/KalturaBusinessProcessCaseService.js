
/**
 *Class definition for the Kaltura service: businessProcessCase.
 **/
var KalturaBusinessProcessCaseService = {
	/**
	 * Abort business-process case.
	 * @param	objectType	string		 (optional, enum: KalturaEventNotificationEventObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	businessProcessStartNotificationTemplateId	int		 (optional)
	 **/
	abort: function(objectType, objectId, businessProcessStartNotificationTemplateId){
		var kparams = new Object();
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.businessProcessStartNotificationTemplateId = businessProcessStartNotificationTemplateId;
		return new KalturaRequestBuilder("businessprocessnotification_businessprocesscase", "abort", kparams);
	},
	
	/**
	 * list business-process cases.
	 * @param	objectType	string		 (optional, enum: KalturaEventNotificationEventObjectType)
	 * @param	objectId	string		 (optional)
	 **/
	listAction: function(objectType, objectId){
		var kparams = new Object();
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new KalturaRequestBuilder("businessprocessnotification_businessprocesscase", "list", kparams);
	}
}
