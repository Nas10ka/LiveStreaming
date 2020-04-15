
/**
 *Class definition for the Kaltura service: categoryUser.
 **/
var KalturaCategoryUserService = {
	/**
	 * activate CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	activate: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "activate", kparams);
	},
	
	/**
	 * Add new CategoryUser.
	 * @param	categoryUser	KalturaCategoryUser		 (optional)
	 **/
	add: function(categoryUser){
		var kparams = new Object();
		kparams.categoryUser = categoryUser;
		return new KalturaRequestBuilder("categoryuser", "add", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryUserData	KalturaBulkUploadCategoryUserData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadCategoryUserData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryUserData)
			bulkUploadCategoryUserData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryUserData != null)
			kparams.bulkUploadCategoryUserData = bulkUploadCategoryUserData;
		return new KalturaRequestBuilder("categoryuser", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Copy all member from parent category.
	 * @param	categoryId	int		 (optional)
	 **/
	copyFromCategory: function(categoryId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryuser", "copyFromCategory", kparams);
	},
	
	/**
	 * reject CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	deactivate: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "deactivate", kparams);
	},
	
	/**
	 * Delete a CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	deleteAction: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "delete", kparams);
	},
	
	/**
	 * Get CategoryUser by id.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	get: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "get", kparams);
	},
	
	/**
	 * Index CategoryUser by userid and category id.
	 * @param	userId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(userId, categoryId, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("categoryuser", "index", kparams);
	},
	
	/**
	 * List all categories.
	 * @param	filter	KalturaCategoryUserFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("categoryuser", "list", kparams);
	},
	
	/**
	 * Update CategoryUser by id.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @param	categoryUser	KalturaCategoryUser		 (optional)
	 * @param	override	bool		- to override manual changes (optional, default: false)
	 **/
	update: function(categoryId, userId, categoryUser, override){
		if(!override)
			override = false;
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		kparams.categoryUser = categoryUser;
		kparams.override = override;
		return new KalturaRequestBuilder("categoryuser", "update", kparams);
	}
}
