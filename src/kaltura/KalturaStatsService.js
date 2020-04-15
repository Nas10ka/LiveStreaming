
/**
 *Class definition for the Kaltura service: stats.
 **/
var KalturaStatsService = {
	/**
	 * Will write to the event log a single line representing the event
 *		 client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 *	event_id - number is the row number in yuval's excel
 *	datetime - same format as MySql's datetime - can change and should reflect the time zone
 *	session id - can be some big random number or guid
 *	partner id
 *	entry id
 *	unique viewer
 *	widget id
 *	ui_conf id
 *	uid - the puser id as set by the ppartner
 *	current point - in milliseconds
 *	duration - milliseconds
 *	user ip
 *	process duration - in milliseconds
 *	control id
 *	seek
 *	new point
 *	referrer
 *		
 *		
 *		 KalturaStatsEvent $event.
	 * @param	event	KalturaStatsEvent		 (optional)
	 **/
	collect: function(event){
		var kparams = new Object();
		kparams.event = event;
		return new KalturaRequestBuilder("stats", "collect", kparams);
	},
	
	/**
	 * Will collect the kmcEvent sent form the KMC client
 *		 // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
	 * @param	kmcEvent	KalturaStatsKmcEvent		 (optional)
	 **/
	kmcCollect: function(kmcEvent){
		var kparams = new Object();
		kparams.kmcEvent = kmcEvent;
		return new KalturaRequestBuilder("stats", "kmcCollect", kparams);
	},
	
	/**
	 * Use this action to report device capabilities to the kaltura server..
	 * @param	data	string		 (optional)
	 **/
	reportDeviceCapabilities: function(data){
		var kparams = new Object();
		kparams.data = data;
		return new KalturaRequestBuilder("stats", "reportDeviceCapabilities", kparams);
	},
	
	/**
	 * Use this action to report errors to the kaltura server..
	 * @param	errorCode	string		 (optional)
	 * @param	errorMessage	string		 (optional)
	 **/
	reportError: function(errorCode, errorMessage){
		var kparams = new Object();
		kparams.errorCode = errorCode;
		kparams.errorMessage = errorMessage;
		return new KalturaRequestBuilder("stats", "reportError", kparams);
	},
	
	/**
	 * .
	 * @param	kalturaCEError	KalturaCEError		 (optional)
	 **/
	reportKceError: function(kalturaCEError){
		var kparams = new Object();
		kparams.kalturaCEError = kalturaCEError;
		return new KalturaRequestBuilder("stats", "reportKceError", kparams);
	}
}
