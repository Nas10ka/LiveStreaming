
/**
 *Class definition for the Kaltura service: adminUser.
 **/
var KalturaAdminUserService = {
	/**
	 * Get an admin session using admin email and password (Used for login to the KMC application).
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	partnerId	int		 (optional, default: null)
	 **/
	login: function(email, password, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("adminuser", "login", kparams);
	},
	
	/**
	 * Reset admin user password and send it to the users email address.
	 * @param	email	string		 (optional)
	 **/
	resetPassword: function(email){
		var kparams = new Object();
		kparams.email = email;
		return new KalturaRequestBuilder("adminuser", "resetPassword", kparams);
	},
	
	/**
	 * Set initial users password.
	 * @param	hashKey	string		 (optional)
	 * @param	newPassword	string		new password to set (optional)
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("adminuser", "setInitialPassword", kparams);
	},
	
	/**
	 * Update admin user password and email.
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	newEmail	string		Optional, provide only when you want to update the email (optional)
	 * @param	newPassword	string		 (optional)
	 * @param	otp	string		the user's one-time password (optional, default: null)
	 **/
	updatePassword: function(email, password, newEmail, newPassword, otp){
		if(!newEmail)
			newEmail = "";
		if(!newPassword)
			newPassword = "";
		if(!otp)
			otp = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.newEmail = newEmail;
		kparams.newPassword = newPassword;
		kparams.otp = otp;
		return new KalturaRequestBuilder("adminuser", "updatePassword", kparams);
	}
}
