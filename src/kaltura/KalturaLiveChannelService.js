
/**
 *Class definition for the Kaltura service: liveChannel.
 **/
var KalturaLiveChannelService = {
	/**
	 * Adds new live channel..
	 * @param	liveChannel	KalturaLiveChannel		Live channel metadata (optional)
	 **/
	add: function(liveChannel){
		var kparams = new Object();
		kparams.liveChannel = liveChannel;
		return new KalturaRequestBuilder("livechannel", "add", kparams);
	},
	
	/**
	 * Append recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	assetId	string		Live asset id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	isLastChunk	bool		Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false)
	 **/
	appendRecording: function(entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
		if(!isLastChunk)
			isLastChunk = false;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.assetId = assetId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.isLastChunk = isLastChunk;
		return new KalturaRequestBuilder("livechannel", "appendRecording", kparams);
	},
	
	/**
	 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
	 * @param	entryId	string		Live entry id (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus)
	 **/
	createRecordedEntry: function(entryId, mediaServerIndex, liveEntryStatus){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.liveEntryStatus = liveEntryStatus;
		return new KalturaRequestBuilder("livechannel", "createRecordedEntry", kparams);
	},
	
	/**
	 * Delete a live channel..
	 * @param	id	string		Live channel id to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "delete", kparams);
	},
	
	/**
	 * Get live channel by ID..
	 * @param	id	string		Live channel id (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "get", kparams);
	},
	
	/**
	 * Delivering the status of a live channel (on-air/offline).
	 * @param	id	string		ID of the live channel (optional)
	 **/
	isLive: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "isLive", kparams);
	},
	
	/**
	 * List live channels by filter with paging support..
	 * @param	filter	KalturaLiveChannelFilter		live channel filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
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
		return new KalturaRequestBuilder("livechannel", "list", kparams);
	},
	
	/**
	 * Register media server to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1)
	 * @param	shouldCreateRecordedEntry	bool		 (optional, default: true)
	 **/
	registerMediaServer: function(entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus, shouldCreateRecordedEntry){
		if(!applicationName)
			applicationName = null;
		if(!liveEntryStatus)
			liveEntryStatus = 1;
		if(!shouldCreateRecordedEntry)
			shouldCreateRecordedEntry = true;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		kparams.liveEntryStatus = liveEntryStatus;
		kparams.shouldCreateRecordedEntry = shouldCreateRecordedEntry;
		return new KalturaRequestBuilder("livechannel", "registerMediaServer", kparams);
	},
	
	/**
	 * Set recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	recordedEntryId	string		Recorded entry Id (optional, default: null)
	 * @param	flavorParamsId	int		Recorded entry Id (optional, default: null)
	 **/
	setRecordedContent: function(entryId, mediaServerIndex, resource, duration, recordedEntryId, flavorParamsId){
		if(!recordedEntryId)
			recordedEntryId = null;
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.recordedEntryId = recordedEntryId;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("livechannel", "setRecordedContent", kparams);
	},
	
	/**
	 * Unregister media server from live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 **/
	unregisterMediaServer: function(entryId, hostname, mediaServerIndex){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		return new KalturaRequestBuilder("livechannel", "unregisterMediaServer", kparams);
	},
	
	/**
	 * Update live channel. Only the properties that were set will be updated..
	 * @param	id	string		Live channel id to update (optional)
	 * @param	liveChannel	KalturaLiveChannel		Live channel metadata to update (optional)
	 **/
	update: function(id, liveChannel){
		var kparams = new Object();
		kparams.id = id;
		kparams.liveChannel = liveChannel;
		return new KalturaRequestBuilder("livechannel", "update", kparams);
	},
	
	/**
	 * Validates all registered media servers.
	 * @param	entryId	string		Live entry id (optional)
	 **/
	validateRegisteredMediaServers: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livechannel", "validateRegisteredMediaServers", kparams);
	}
}
