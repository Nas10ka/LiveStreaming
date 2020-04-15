
/**
 *Class definition for the Kaltura service: search.
 **/
var KalturaSearchService = {
	/**
	 * .
	 * @param	searchSource	int		 (optional, enum: KalturaSearchProviderType)
	 * @param	userName	string		 (optional)
	 * @param	password	string		 (optional)
	 **/
	externalLogin: function(searchSource, userName, password){
		var kparams = new Object();
		kparams.searchSource = searchSource;
		kparams.userName = userName;
		kparams.password = password;
		return new KalturaRequestBuilder("search", "externalLogin", kparams);
	},
	
	/**
	 * Retrieve extra information about media found in search action
 *		 Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
	 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional)
	 **/
	getMediaInfo: function(searchResult){
		var kparams = new Object();
		kparams.searchResult = searchResult;
		return new KalturaRequestBuilder("search", "getMediaInfo", kparams);
	},
	
	/**
	 * Search for media in one of the supported media providers.
	 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	search: function(search, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.search = search;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("search", "search", kparams);
	},
	
	/**
	 * Search for media given a specific URL
 *		 Kaltura supports a searchURL action on some of the media providers.
 *		 This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
	 * @param	mediaType	int		 (optional, enum: KalturaMediaType)
	 * @param	url	string		 (optional)
	 **/
	searchUrl: function(mediaType, url){
		var kparams = new Object();
		kparams.mediaType = mediaType;
		kparams.url = url;
		return new KalturaRequestBuilder("search", "searchUrl", kparams);
	}
}
