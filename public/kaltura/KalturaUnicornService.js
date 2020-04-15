
/**
 *Class definition for the Kaltura service: unicorn.
 **/
var KalturaUnicornService = {
	/**
	 * .
	 * @param	id	int		distribution job id (optional)
	 **/
	notify: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("unicorndistribution_unicorn", "notify", kparams);
	}
}
