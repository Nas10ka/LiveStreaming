
/**
 *Class definition for the Kaltura service: groupUser.
 **/
var KalturaGroupUserService = {
	/**
	 * Add new GroupUser.
	 * @param	groupUser	KalturaGroupUser		 (optional)
	 **/
	add: function(groupUser){
		var kparams = new Object();
		kparams.groupUser = groupUser;
		return new KalturaRequestBuilder("groupuser", "add", kparams);
	},
	
	/**
	 * delete by userId and groupId.
	 * @param	userId	string		 (optional)
	 * @param	groupId	string		 (optional)
	 **/
	deleteAction: function(userId, groupId){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("groupuser", "delete", kparams);
	},
	
	/**
	 * List all GroupUsers.
	 * @param	filter	KalturaGroupUserFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("groupuser", "list", kparams);
	},
	
	/**
	 * sync by userId and groupIds.
	 * @param	userId	string		 (optional)
	 * @param	groupIds	string		 (optional)
	 * @param	removeFromExistingGroups	bool		 (optional, default: true)
	 * @param	createNewGroups	bool		 (optional, default: true)
	 **/
	sync: function(userId, groupIds, removeFromExistingGroups, createNewGroups){
		if(!removeFromExistingGroups)
			removeFromExistingGroups = true;
		if(!createNewGroups)
			createNewGroups = true;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.groupIds = groupIds;
		kparams.removeFromExistingGroups = removeFromExistingGroups;
		kparams.createNewGroups = createNewGroups;
		return new KalturaRequestBuilder("groupuser", "sync", kparams);
	},
	
	/**
	 * update GroupUser.
	 * @param	groupUserId	string		 (optional)
	 * @param	groupUser	KalturaGroupUser		Id (optional)
	 **/
	update: function(groupUserId, groupUser){
		var kparams = new Object();
		kparams.groupUserId = groupUserId;
		kparams.groupUser = groupUser;
		return new KalturaRequestBuilder("groupuser", "update", kparams);
	}
}
