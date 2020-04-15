
/**
 *Class definition for the Kaltura service: entryServerNode.
 **/
var KalturaEntryServerNodeService = {
	/**
	 * .
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaEntryServerNodeFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("entryservernode", "list", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	entryServerNode	KalturaEntryServerNode		 (optional)
	 **/
	update: function(id, entryServerNode){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryServerNode = entryServerNode;
		return new KalturaRequestBuilder("entryservernode", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaEntryServerNodeStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("entryservernode", "updateStatus", kparams);
	},
	
	/**
	 * Validates server node still registered on entry.
	 * @param	id	int		entry server node id (optional)
	 **/
	validateRegisteredEntryServerNode: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "validateRegisteredEntryServerNode", kparams);
	}
}
