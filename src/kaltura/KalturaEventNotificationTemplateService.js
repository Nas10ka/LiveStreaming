
/**
 *Class definition for the Kaltura service: eventNotificationTemplate.
 **/
var KalturaEventNotificationTemplateService = {
	/**
	 * This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead..
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional)
	 **/
	add: function(eventNotificationTemplate){
		var kparams = new Object();
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "add", kparams);
	},
	
	/**
	 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action..
	 * @param	id	int		source template to clone (optional)
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		overwrite configuration object (optional, default: null)
	 **/
	cloneAction: function(id, eventNotificationTemplate){
		if(!eventNotificationTemplate)
			eventNotificationTemplate = null;
		var kparams = new Object();
		kparams.id = id;
		if (eventNotificationTemplate != null)
			kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "clone", kparams);
	},
	
	/**
	 * Delete an event notification template object.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "delete", kparams);
	},
	
	/**
	 * Dispatch event notification object by id.
	 * @param	id	int		 (optional)
	 * @param	scope	KalturaEventNotificationScope		 (optional)
	 **/
	dispatch: function(id, scope){
		var kparams = new Object();
		kparams.id = id;
		kparams.scope = scope;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "dispatch", kparams);
	},
	
	/**
	 * Retrieve an event notification template object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "get", kparams);
	},
	
	/**
	 * list event notification template objects.
	 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "listByPartner", kparams);
	},
	
	/**
	 * Action lists the template partner event notification templates..
	 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listTemplates: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "listTemplates", kparams);
	},
	
	/**
	 * Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
	 * @param	notificationTemplateSystemName	string		Existing push notification template system name (optional)
	 * @param	pushNotificationParams	KalturaPushNotificationParams		 (optional)
	 **/
	register: function(notificationTemplateSystemName, pushNotificationParams){
		var kparams = new Object();
		kparams.notificationTemplateSystemName = notificationTemplateSystemName;
		kparams.pushNotificationParams = pushNotificationParams;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "register", kparams);
	},
	
	/**
	 * Clear queue messages.
	 * @param	notificationTemplateSystemName	string		Existing push notification template system name (optional)
	 * @param	pushNotificationParams	KalturaPushNotificationParams		 (optional)
	 * @param	command	string		Command to be sent to push server (optional, enum: KalturaPushNotificationCommandType)
	 **/
	sendCommand: function(notificationTemplateSystemName, pushNotificationParams, command){
		var kparams = new Object();
		kparams.notificationTemplateSystemName = notificationTemplateSystemName;
		kparams.pushNotificationParams = pushNotificationParams;
		kparams.command = command;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "sendCommand", kparams);
	},
	
	/**
	 * Update an existing event notification template object.
	 * @param	id	int		 (optional)
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional)
	 **/
	update: function(id, eventNotificationTemplate){
		var kparams = new Object();
		kparams.id = id;
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "update", kparams);
	},
	
	/**
	 * Update event notification template status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaEventNotificationTemplateStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "updateStatus", kparams);
	}
}
