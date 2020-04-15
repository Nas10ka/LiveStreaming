
/**
 *Class definition for the Kaltura service: liveStats.
 **/
var KalturaLiveStatsService = {
	/**
	 * Will write to the event log a single line representing the event
 *		 KalturaStatsEvent $event.
	 * @param	event	KalturaLiveStatsEvent		 (optional)
	 **/
	collect: function(event){
		var kparams = new Object();
		kparams.event = event;
		return new KalturaRequestBuilder("livestats", "collect", kparams);
	}
}
