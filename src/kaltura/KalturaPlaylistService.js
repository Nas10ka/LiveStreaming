
/**
 *Class definition for the Kaltura service: playlist.
 **/
var KalturaPlaylistService = {
	/**
	 * Add new playlist
 *		 Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false)
	 **/
	add: function(playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "add", kparams);
	},
	
	/**
	 * Clone an existing playlist.
	 * @param	id	string		Id of the playlist to clone (optional)
	 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null)
	 **/
	cloneAction: function(id, newPlaylist){
		if(!newPlaylist)
			newPlaylist = null;
		var kparams = new Object();
		kparams.id = id;
		if (newPlaylist != null)
			kparams.newPlaylist = newPlaylist;
		return new KalturaRequestBuilder("playlist", "clone", kparams);
	},
	
	/**
	 * Delete existing playlist.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("playlist", "delete", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose.
	 * @param	id	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	playlistContext	KalturaContext		 (optional, default: null)
	 * @param	filter	KalturaMediaEntryFilterForPlaylist		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	execute: function(id, detailed, playlistContext, filter, pager){
		if(!detailed)
			detailed = "";
		if(!playlistContext)
			playlistContext = null;
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.detailed = detailed;
		if (playlistContext != null)
			kparams.playlistContext = playlistContext;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "execute", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose, based on content.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	executeFromContent: function(playlistType, playlistContent, detailed, pager){
		if(!detailed)
			detailed = "";
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromContent", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose, based on media entry filters.
	 * @param	filters	array		 (optional)
	 * @param	totalResults	int		 (optional)
	 * @param	detailed	string		 (optional, default: 1)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	executeFromFilters: function(filters, totalResults, detailed, pager){
		if(!detailed)
			detailed = 1;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filters = filters;
		kparams.totalResults = totalResults;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromFilters", kparams);
	},
	
	/**
	 * Retrieve a playlist.
	 * @param	id	string		 (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(id, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("playlist", "get", kparams);
	},
	
	/**
	 * Retrieve playlist statistics.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 **/
	getStatsFromContent: function(playlistType, playlistContent){
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		return new KalturaRequestBuilder("playlist", "getStatsFromContent", kparams);
	},
	
	/**
	 * List available playlists.
	 * @param	filter	KalturaPlaylistFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("playlist", "list", kparams);
	},
	
	/**
	 * Update existing playlist
 *		 Note - you cannot change playlist type. Updated playlist must be of the same type..
	 * @param	id	string		 (optional)
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		 (optional, default: false)
	 **/
	update: function(id, playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "update", kparams);
	}
}
