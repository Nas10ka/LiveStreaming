
/**
 *Class definition for the Kaltura service: exportcsv.
 **/
var KalturaExportcsvService = {
	/**
	 * Will serve a requested CSV.
	 * @param	id	string		- the requested file id (optional)
	 **/
	serveCsv: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("exportcsv", "serveCsv", kparams);
	}
}
