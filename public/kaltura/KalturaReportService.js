
/**
 *Class definition for the Kaltura service: report.
 **/
var KalturaReportService = {
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	params	array		 (optional, default: null)
	 **/
	execute: function(id, params){
		if(!params)
			params = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.params = params;
		return new KalturaRequestBuilder("report", "execute", kparams);
	},
	
	/**
	 * .
	 * @param	params	KalturaReportExportParams		 (optional)
	 **/
	exportToCsv: function(params){
		var kparams = new Object();
		kparams.params = params;
		return new KalturaRequestBuilder("report", "exportToCsv", kparams);
	},
	
	/**
	 * report getBaseTotal action allows to get the total base for storage reports.
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getBaseTotal: function(reportType, reportInputFilter, objectIds, responseOptions){
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getBaseTotal", kparams);
	},
	
	/**
	 * report getGraphs action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	dimension	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getGraphs: function(reportType, reportInputFilter, dimension, objectIds, responseOptions){
		if(!dimension)
			dimension = null;
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getGraphs", kparams);
	},
	
	/**
	 * report getTable action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional)
	 * @param	order	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getTable: function(reportType, reportInputFilter, pager, order, objectIds, responseOptions){
		if(!order)
			order = null;
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getTable", kparams);
	},
	
	/**
	 * report getTotal action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getTotal: function(reportType, reportInputFilter, objectIds, responseOptions){
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getTotal", kparams);
	},
	
	/**
	 * will create a CSV file for the given report and return the URL to access it.
	 * @param	reportTitle	string		The title of the report to display at top of CSV (optional)
	 * @param	reportText	string		The text of the filter of the report (optional)
	 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text (optional)
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	dimension	string		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @param	order	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getUrlForReportAsCsv: function(reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds, responseOptions){
		if(!dimension)
			dimension = null;
		if(!pager)
			pager = null;
		if(!order)
			order = null;
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportTitle = reportTitle;
		kparams.reportText = reportText;
		kparams.headers = headers;
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		if (pager != null)
			kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getUrlForReportAsCsv", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 **/
	serve: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("report", "serve", kparams);
	}
}
