
/**
 *Class definition for the Kaltura service: like.
 **/
var KalturaLikeService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	userId	string		 (optional, default: null)
	 **/
	checkLikeExists: function(entryId, userId){
		if(!userId)
			userId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("like_like", "checkLikeExists", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	like: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("like_like", "like", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaLikeFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("like_like", "list", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	unlike: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("like_like", "unlike", kparams);
	}
}
