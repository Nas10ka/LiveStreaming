
/**
 *Class definition for the Kaltura service: auditTrail.
 **/
var KalturaAuditTrailService = {
	/**
	 * Allows you to add an audit trail object and audit trail content associated with Kaltura object.
	 * @param	auditTrail	KalturaAuditTrail		 (optional)
	 **/
	add: function(auditTrail){
		var kparams = new Object();
		kparams.auditTrail = auditTrail;
		return new KalturaRequestBuilder("audit_audittrail", "add", kparams);
	},
	
	/**
	 * Retrieve an audit trail object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("audit_audittrail", "get", kparams);
	},
	
	/**
	 * List audit trail objects by filter and pager.
	 * @param	filter	KalturaAuditTrailFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("audit_audittrail", "list", kparams);
	}
}
