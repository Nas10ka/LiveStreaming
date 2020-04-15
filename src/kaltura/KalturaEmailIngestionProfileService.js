
/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 **/
var KalturaEmailIngestionProfileService = {
	/**
	 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
	 * @param	EmailIP	KalturaEmailIngestionProfile		Mandatory input parameter of type KalturaEmailIngestionProfile (optional)
	 **/
	add: function(EmailIP){
		var kparams = new Object();
		kparams.EmailIP = EmailIP;
		return new KalturaRequestBuilder("emailingestionprofile", "add", kparams);
	},
	
	/**
	 * add KalturaMediaEntry from email ingestion.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 * @param	emailProfId	int		 (optional)
	 * @param	fromAddress	string		 (optional)
	 * @param	emailMsgId	string		 (optional)
	 **/
	addMediaEntry: function(mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.emailProfId = emailProfId;
		kparams.fromAddress = fromAddress;
		kparams.emailMsgId = emailMsgId;
		return new KalturaRequestBuilder("emailingestionprofile", "addMediaEntry", kparams);
	},
	
	/**
	 * Delete an existing EmailIngestionProfile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("emailingestionprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a EmailIngestionProfile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("emailingestionprofile", "get", kparams);
	},
	
	/**
	 * Retrieve a EmailIngestionProfile by email address.
	 * @param	emailAddress	string		 (optional)
	 **/
	getByEmailAddress: function(emailAddress){
		var kparams = new Object();
		kparams.emailAddress = emailAddress;
		return new KalturaRequestBuilder("emailingestionprofile", "getByEmailAddress", kparams);
	},
	
	/**
	 * Update an existing EmailIngestionProfile.
	 * @param	id	int		 (optional)
	 * @param	EmailIP	KalturaEmailIngestionProfile		 (optional)
	 **/
	update: function(id, EmailIP){
		var kparams = new Object();
		kparams.id = id;
		kparams.EmailIP = EmailIP;
		return new KalturaRequestBuilder("emailingestionprofile", "update", kparams);
	}
}
