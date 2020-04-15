
/**
 *Class definition for the Kaltura service: metadataProfile.
 **/
var KalturaMetadataProfileService = {
	/**
	 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 **/
	add: function(metadataProfile, xsdData, viewsData){
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "add", kparams);
	},
	
	/**
	 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdFile	HTMLElement		XSD metadata definition (optional)
	 * @param	viewsFile	HTMLElement		UI views definition (optional, default: null)
	 **/
	addFromFile: function(metadataProfile, xsdFile, viewsFile){
		if(!viewsFile)
			viewsFile = null;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.metadataProfile = metadataProfile;
		kfiles.xsdFile = xsdFile;
		kfiles.viewsFile = viewsFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "addFromFile", kparams, kfiles);
	},
	
	/**
	 * Delete an existing metadata profile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a metadata profile object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "get", kparams);
	},
	
	/**
	 * List metadata profile objects by filter and pager.
	 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("metadata_metadataprofile", "list", kparams);
	},
	
	/**
	 * List metadata profile fields by metadata profile id.
	 * @param	metadataProfileId	int		 (optional)
	 **/
	listFields: function(metadataProfileId){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		return new KalturaRequestBuilder("metadata_metadataprofile", "listFields", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	toVersion	int		 (optional)
	 **/
	revert: function(id, toVersion){
		var kparams = new Object();
		kparams.id = id;
		kparams.toVersion = toVersion;
		return new KalturaRequestBuilder("metadata_metadataprofile", "revert", kparams);
	},
	
	/**
	 * Update an existing metadata object.
	 * @param	id	int		 (optional)
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional, default: null)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 **/
	update: function(id, metadataProfile, xsdData, viewsData){
		if(!xsdData)
			xsdData = null;
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "update", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	xsdFile	HTMLElement		XSD metadata definition (optional)
	 **/
	updateDefinitionFromFile: function(id, xsdFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xsdFile = xsdFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateDefinitionFromFile", kparams, kfiles);
	},
	
	/**
	 * Update an existing metadata object XSLT file.
	 * @param	id	int		 (optional)
	 * @param	xsltFile	HTMLElement		XSLT file, will be executed on every metadata add/update (optional)
	 **/
	updateTransformationFromFile: function(id, xsltFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xsltFile = xsltFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateTransformationFromFile", kparams, kfiles);
	},
	
	/**
	 * Update an existing metadata object views file.
	 * @param	id	int		 (optional)
	 * @param	viewsFile	HTMLElement		UI views file (optional)
	 **/
	updateViewsFromFile: function(id, viewsFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.viewsFile = viewsFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateViewsFromFile", kparams, kfiles);
	}
}
