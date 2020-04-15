
/**
 *Class definition for the Kaltura service: conversionProfile.
 **/
var KalturaConversionProfileService = {
	/**
	 * Add new Conversion Profile.
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 **/
	add: function(conversionProfile){
		var kparams = new Object();
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "add", kparams);
	},
	
	/**
	 * Delete Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "delete", kparams);
	},
	
	/**
	 * Get Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "get", kparams);
	},
	
	/**
	 * Get the partner's default conversion profile.
	 * @param	type	string		 (optional, enum: KalturaConversionProfileType, default: null)
	 **/
	getDefault: function(type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.type = type;
		return new KalturaRequestBuilder("conversionprofile", "getDefault", kparams);
	},
	
	/**
	 * List Conversion Profiles by filter with paging support.
	 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("conversionprofile", "list", kparams);
	},
	
	/**
	 * Set Conversion Profile to be the partner default.
	 * @param	id	int		 (optional)
	 **/
	setAsDefault: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "setAsDefault", kparams);
	},
	
	/**
	 * Update Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 **/
	update: function(id, conversionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "update", kparams);
	}
}
