
/**
 *Class definition for the Kaltura service: notification.
 **/
var KalturaNotificationService = {
	/**
	 * Return the notifications for a specific entry id and type.
	 * @param	entryId	string		 (optional)
	 * @param	type	int		 (optional, enum: KalturaNotificationType)
	 **/
	getClientNotification: function(entryId, type){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.type = type;
		return new KalturaRequestBuilder("notification", "getClientNotification", kparams);
	}
}
