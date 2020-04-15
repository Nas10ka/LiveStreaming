
/**
 *Class definition for the Kaltura service: varConsole.
 **/
var KalturaVarConsoleService = {
	/**
	 * Function which calulates partner usage of a group of a VAR's sub-publishers.
	 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	usageFilter	KalturaReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getPartnerUsage: function(partnerFilter, usageFilter, pager){
		if(!partnerFilter)
			partnerFilter = null;
		if(!usageFilter)
			usageFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (partnerFilter != null)
			kparams.partnerFilter = partnerFilter;
		if (usageFilter != null)
			kparams.usageFilter = usageFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("varconsole_varconsole", "getPartnerUsage", kparams);
	},
	
	/**
	 * Function to change a sub-publisher's status.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaPartnerStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("varconsole_varconsole", "updateStatus", kparams);
	}
}
