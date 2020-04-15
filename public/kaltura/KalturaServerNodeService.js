
/**
 *Class definition for the Kaltura service: serverNode.
 **/
var KalturaServerNodeService = {
	/**
	 * Adds a server node to the Kaltura DB..
	 * @param	serverNode	KalturaServerNode		 (optional)
	 **/
	add: function(serverNode){
		var kparams = new Object();
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "add", kparams);
	},
	
	/**
	 * delete server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	deleteAction: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "delete", kparams);
	},
	
	/**
	 * Disable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	disable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "disable", kparams);
	},
	
	/**
	 * Enable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	enable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "enable", kparams);
	},
	
	/**
	 * Get server node by id.
	 * @param	serverNodeId	int		 (optional)
	 **/
	get: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "get", kparams);
	},
	
	/**
	 * Get the edge server node full path.
	 * @param	hostName	string		 (optional)
	 * @param	protocol	string		 (optional, default: http)
	 * @param	deliveryFormat	string		 (optional, default: null)
	 * @param	deliveryType	string		 (optional, default: null)
	 **/
	getFullPath: function(hostName, protocol, deliveryFormat, deliveryType){
		if(!protocol)
			protocol = "http";
		if(!deliveryFormat)
			deliveryFormat = null;
		if(!deliveryType)
			deliveryType = null;
		var kparams = new Object();
		kparams.hostName = hostName;
		kparams.protocol = protocol;
		kparams.deliveryFormat = deliveryFormat;
		kparams.deliveryType = deliveryType;
		return new KalturaRequestBuilder("servernode", "getFullPath", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaServerNodeFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("servernode", "list", kparams);
	},
	
	/**
	 * Mark server node offline.
	 * @param	serverNodeId	string		 (optional)
	 **/
	markOffline: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "markOffline", kparams);
	},
	
	/**
	 * Update server node status.
	 * @param	hostName	string		 (optional)
	 * @param	serverNode	KalturaServerNode		 (optional, default: null)
	 * @param	serverNodeStatus	int		 (optional, enum: KalturaServerNodeStatus, default: 1)
	 **/
	reportStatus: function(hostName, serverNode, serverNodeStatus){
		if(!serverNode)
			serverNode = null;
		if(!serverNodeStatus)
			serverNodeStatus = 1;
		var kparams = new Object();
		kparams.hostName = hostName;
		if (serverNode != null)
			kparams.serverNode = serverNode;
		kparams.serverNodeStatus = serverNodeStatus;
		return new KalturaRequestBuilder("servernode", "reportStatus", kparams);
	},
	
	/**
	 * Update server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @param	serverNode	KalturaServerNode		Id (optional)
	 **/
	update: function(serverNodeId, serverNode){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "update", kparams);
	}
}
