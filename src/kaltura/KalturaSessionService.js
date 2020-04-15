
/**
 *Class definition for the Kaltura service: session.
 **/
var KalturaSessionService = {
	/**
	 * End a session with the Kaltura server, making the current KS invalid..
	 **/
	end: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("session", "end", kparams);
	},
	
	/**
	 * Parse session key and return its info.
	 * @param	session	string		The KS to be parsed, keep it empty to use current session. (optional, default: null)
	 **/
	get: function(session){
		if(!session)
			session = null;
		var kparams = new Object();
		kparams.session = session;
		return new KalturaRequestBuilder("session", "get", kparams);
	},
	
	/**
	 * Start an impersonated session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
	 * @param	secret	string		- should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId). (optional)
	 * @param	impersonatedPartnerId	int		 (optional)
	 * @param	userId	string		- impersonated userId (optional)
	 * @param	type	int		 (optional, enum: KalturaSessionType)
	 * @param	partnerId	int		 (optional, default: null)
	 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400)
	 * @param	privileges	string		 (optional, default: null)
	 **/
	impersonate: function(secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
		if(!userId)
			userId = "";
		if(!type)
			type = 0;
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.secret = secret;
		kparams.impersonatedPartnerId = impersonatedPartnerId;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "impersonate", kparams);
	},
	
	/**
	 * Start an impersonated session with Kaltura's server.
 *		 The result KS info contains the session key that you should pass to all services that requires a ticket.
 *		 Type, expiry and privileges won't be changed if they're not set.
	 * @param	session	string		The old KS of the impersonated partner (optional)
	 * @param	type	int		Type of the new KS (optional, enum: KalturaSessionType, default: null)
	 * @param	expiry	int		Expiry time in seconds of the new KS (optional, default: null)
	 * @param	privileges	string		Privileges of the new KS (optional, default: null)
	 **/
	impersonateByKs: function(session, type, expiry, privileges){
		if(!type)
			type = null;
		if(!expiry)
			expiry = null;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.session = session;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "impersonateByKs", kparams);
	},
	
	/**
	 * Start a session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
	 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional)
	 * @param	userId	string		 (optional)
	 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType)
	 * @param	partnerId	int		 (optional, default: null)
	 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400)
	 * @param	privileges	string		 (optional, default: null)
	 **/
	start: function(secret, userId, type, partnerId, expiry, privileges){
		if(!userId)
			userId = "";
		if(!type)
			type = 0;
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.secret = secret;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "start", kparams);
	},
	
	/**
	 * Start a session for Kaltura's flash widgets.
	 * @param	widgetId	string		 (optional)
	 * @param	expiry	int		 (optional, default: 86400)
	 **/
	startWidgetSession: function(widgetId, expiry){
		if(!expiry)
			expiry = 86400;
		var kparams = new Object();
		kparams.widgetId = widgetId;
		kparams.expiry = expiry;
		return new KalturaRequestBuilder("session", "startWidgetSession", kparams);
	}
}
