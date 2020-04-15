
/**
 *Class definition for the Kaltura service: appToken.
 **/
var KalturaAppTokenService = {
	/**
	 * Add new application authentication token.
	 * @param	appToken	KalturaAppToken		 (optional)
	 **/
	add: function(appToken){
		var kparams = new Object();
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "add", kparams);
	},
	
	/**
	 * Delete application authentication token by ID.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "delete", kparams);
	},
	
	/**
	 * Get application authentication token by ID.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "get", kparams);
	},
	
	/**
	 * List application authentication tokens by filter and pager.
	 * @param	filter	KalturaAppTokenFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("apptoken", "list", kparams);
	},
	
	/**
	 * Starts a new KS (kaltura Session) based on an application authentication token ID.
	 * @param	id	string		application token ID (optional)
	 * @param	tokenHash	string		a hash [MD5, SHA1, SHA256 and SHA512 are supported] of the current KS concatenated with the application token (optional)
	 * @param	userId	string		session user ID, will be ignored if a different user ID already defined on the application token (optional, default: null)
	 * @param	type	int		session type, will be ignored if a different session type is already defined on the application token (optional, enum: KalturaSessionType, default: null)
	 * @param	expiry	int		session expiry (in seconds), could be overridden by shorter expiry of the application token (optional, default: null)
	 * @param	sessionPrivileges	string		session privileges, will be ignored if a similar privilege is already defined on the application token or the privilege is server reserved (optional, default: null)
	 **/
	startSession: function(id, tokenHash, userId, type, expiry, sessionPrivileges){
		if(!userId)
			userId = null;
		if(!type)
			type = null;
		if(!expiry)
			expiry = null;
		if(!sessionPrivileges)
			sessionPrivileges = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.sessionPrivileges = sessionPrivileges;
		return new KalturaRequestBuilder("apptoken", "startSession", kparams);
	},
	
	/**
	 * Update application authentication token by ID.
	 * @param	id	string		 (optional)
	 * @param	appToken	KalturaAppToken		 (optional)
	 **/
	update: function(id, appToken){
		var kparams = new Object();
		kparams.id = id;
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "update", kparams);
	}
}
