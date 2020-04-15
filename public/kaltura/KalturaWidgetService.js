
/**
 *Class definition for the Kaltura service: widget.
 **/
var KalturaWidgetService = {
	/**
	 * Add new widget, can be attached to entry or kshow
 *		 SourceWidget is ignored..
	 * @param	widget	KalturaWidget		 (optional)
	 **/
	add: function(widget){
		var kparams = new Object();
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "add", kparams);
	},
	
	/**
	 * Add widget based on existing widget.
 *		 Must provide valid sourceWidgetId.
	 * @param	widget	KalturaWidget		 (optional)
	 **/
	cloneAction: function(widget){
		var kparams = new Object();
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "clone", kparams);
	},
	
	/**
	 * Get widget by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("widget", "get", kparams);
	},
	
	/**
	 * Retrieve a list of available widget depends on the filter given.
	 * @param	filter	KalturaWidgetFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("widget", "list", kparams);
	},
	
	/**
	 * Update existing widget.
	 * @param	id	string		 (optional)
	 * @param	widget	KalturaWidget		 (optional)
	 **/
	update: function(id, widget){
		var kparams = new Object();
		kparams.id = id;
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "update", kparams);
	}
}
