
/**
 *Class definition for the Kaltura service: uiConf.
 **/
var KalturaUiConfService = {
	/**
	 * UIConf Add action allows you to add a UIConf to Kaltura DB.
	 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional)
	 **/
	add: function(uiConf){
		var kparams = new Object();
		kparams.uiConf = uiConf;
		return new KalturaRequestBuilder("uiconf", "add", kparams);
	},
	
	/**
	 * Clone an existing UIConf.
	 * @param	id	int		 (optional)
	 **/
	cloneAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "clone", kparams);
	},
	
	/**
	 * Delete an existing UIConf.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "delete", kparams);
	},
	
	/**
	 * Retrieve a UIConf by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "get", kparams);
	},
	
	/**
	 * Retrieve a list of all available versions by object type.
	 **/
	getAvailableTypes: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("uiconf", "getAvailableTypes", kparams);
	},
	
	/**
	 * Retrieve a list of available UIConfs.
	 * @param	filter	KalturaUiConfFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("uiconf", "list", kparams);
	},
	
	/**
	 * retrieve a list of available template UIConfs.
	 * @param	filter	KalturaUiConfFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("uiconf", "listTemplates", kparams);
	},
	
	/**
	 * Update an existing UIConf.
	 * @param	id	int		 (optional)
	 * @param	uiConf	KalturaUiConf		 (optional)
	 **/
	update: function(id, uiConf){
		var kparams = new Object();
		kparams.id = id;
		kparams.uiConf = uiConf;
		return new KalturaRequestBuilder("uiconf", "update", kparams);
	}
}
