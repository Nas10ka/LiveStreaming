
/**
 *Class definition for the Kaltura service: beacon.
 **/
var KalturaBeaconService = {
	/**
	 * .
	 * @param	beacon	KalturaBeacon		 (optional)
	 * @param	shouldLog	int		 (optional, enum: KalturaNullableBoolean)
	 **/
	add: function(beacon, shouldLog){
		if(!shouldLog)
			shouldLog = 0;
		var kparams = new Object();
		kparams.beacon = beacon;
		kparams.shouldLog = shouldLog;
		return new KalturaRequestBuilder("beacon_beacon", "add", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaBeaconEnhanceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	enhanceSearch: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("beacon_beacon", "enhanceSearch", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaBeaconFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("beacon_beacon", "list", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaBeaconSearchParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchScheduledResource: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("beacon_beacon", "searchScheduledResource", kparams);
	}
}
