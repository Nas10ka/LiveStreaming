
/**
 *Class definition for the Kaltura service: liveReports.
 **/
var KalturaLiveReportsService = {
	/**
	 * .
	 * @param	reportType	int		 (optional, enum: KalturaLiveReportExportType)
	 * @param	params	KalturaLiveReportExportParams		 (optional)
	 **/
	exportToCsv: function(reportType, params){
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.params = params;
		return new KalturaRequestBuilder("livereports", "exportToCsv", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getEvents: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getEvents", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getReport: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getReport", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 **/
	serveReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livereports", "serveReport", kparams);
	}
}
