
/**
 *Class definition for the Kaltura service: eSearch.
 **/
var KalturaESearchService = {
	/**
	 * .
	 * @param	searchParams	KalturaESearchCategoryParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchCategory: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchCategory", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchEntryParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchEntry: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchEntry", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchGroupParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchGroup: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchGroup", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchUserParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchUser: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchUser", kparams);
	}
}
