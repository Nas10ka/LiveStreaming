import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FacebookLogin from "react-facebook-login";
import TheatersIcon from "@material-ui/icons/Theaters";
// --=--------------------------------------FACEBOOK CREDENTIALS---------------------------------------------------
const facebookAppId = "678257483004241";

class FacebookUI extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  createBroadcast = () => {
    const { accessToken, userID } = this.state.user;
    window.FB.api(
      `/${userID}/live_videos`,
      "POST",
      {
        status: "UNPUBLISHED",
        title: '"Today\'s Live Video"',
        description: '"This is the live video for today."',
      },
      function (response) {
        // Insert your code here
        console.log("broadcast ", response);
      }
    );
  };

  responseFacebook = (resp) => {
    console.log("resp", resp);
    this.setState({ user: resp });
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <FacebookLogin
          appId={facebookAppId}
          // autoLoad
          size="small"
          callback={this.responseFacebook}
          render={(renderProps) => (
            <Button
              color="primary"
              onClick={() => renderProps.onClick}
              startIcon={<PermIdentityIcon />}
            >
              Facebook log in
            </Button>
          )}
        />

        {user ? (
          <Button
            color="primary"
            onClick={this.createBroadcast}
            startIcon={<TheatersIcon />}
          >
            Create a broadcast
          </Button>
        ) : null}
      </>
    );
  }
}

export default FacebookUI;
