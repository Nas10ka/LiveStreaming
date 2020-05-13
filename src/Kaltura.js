import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TextField from "./TextField";
import VideocamIcon from "@material-ui/icons/Videocam";
import AlbumIcon from "@material-ui/icons/Album";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Typography from "@material-ui/core/Typography";
import DropDown from "./DropDown";
// // --=---------------------------------------KALTURA CREDENTIALS---------------------------------------------------
// const kalturaId = "1_l9lov1gt";
const partnerId = "2744221";
// const subPartnerId = "274422100";
const adminSecret = "ad3edf30d8360c3afac80d02cefeefb1";
// const userSecret = "62660697f74012dc6f6cbb668a63aa07";

class KalturaUI extends Component {
  constructor() {
    super();
    this.state = {
      secret: adminSecret,
      partnerId,
      // uiconf_id: "45413001",
      uiconf_id: "",
      subPartnerId: "274422100",
      userId: "Nastenka9410@gmail.com",
      client: null,
      pass: "",
      players: null,
      player: "",
      title: "",
      description: "",
    };
    this.client = null;
  }

  enterPartnerId = (e) => this.setState({ partnerId: e.target.value });

  enterSecret = (e) => this.setState({ secret: e.target.value });

  session_start_cb = (success, ks) => {
    if (!success) console.log(ks.message);

    this.client.setKs(ks);
    console.log("Seesion started: " + ks);
    console.log("client ", this.client);
    this.setState({ client: this.client });
  };

  session_start = () => {
    const { secret, partnerId, userId } = this.state;

    const config = new window.KalturaConfiguration(partnerId);
    config.serviceUrl = "http://www.kaltura.com";

    this.client = new window.KalturaClient(config);
    const type = 0; //'KalturaSessionType.USER';
    window.KalturaSessionService.start(secret, userId, type, partnerId)
      .completion(this.session_start_cb)
      .execute(this.client);
  };

  getConversionProfile = () => {
    var filter = { objectType: "KalturaConversionProfileFilter" };
    var pager = { objectType: "KalturaFilterPager" };

    window.KalturaConversionProfileService.listAction(filter, pager).execute(
      this.client,
      (success, results) => {
        if (!success || (results && results.code && results.message)) {
          console.log("Profile id Kaltura Error", success, results);
        } else {
          console.log("Profile id Kaltura Result", results);
          const propfileId = results.objects.filter((i) => i.type === 2)[0].id;
          this.liveStreamAdd(propfileId);
        }
      }
    );
  };

  liveStreamAdd = (propfileId) => {
    const liveStreamEntry = {
      objectType: "KalturaLiveStreamEntry",
      name: "Test 2.1",
      description: "Test 2.1 - description",
      bitrates: [
        {
          bitrate: 900,
          height: 480,
          objectType: "KalturaLiveStreamBitrate",
          tags: "source,ingest,web,mobile,ipad,ipadnew",
          width: 640,
        },
      ],
      conversionProfileId: propfileId,
      recordStatus: 1,
      explicitLive: 1,
      // dvrStatus: 0,
      mediaType: 201,
    };

    const sourceType = "32";
    window.KalturaLiveStreamService.add(liveStreamEntry, sourceType).execute(
      this.client,
      (success, results) => {
        if (!success || (results && results.code && results.message)) {
          console.log("Kaltura liveStreamAdd Error", success, results);
        } else {
          console.log("Kaltura liveStreamAdd Result", results);
          this.setState({
            entryId: results.id,
            rtmp: results.primaryBroadcastingUrl + "/" + results.id + "_1",
            thumbnailUrl: results.thumbnailUrl,
            streamPassword: results.streamPassword,
          });
        }
      }
    );
  };

  userLogin = () => {
    var partnerId = this.state.partnerId;
    var config = new window.KalturaConfiguration(partnerId);
    config.serviceUrl = "https://www.kaltura.com";
    this.client = new window.KalturaClient(config);
    var loginId = this.state.userId;
    var password = this.state.pass;
    var expiry = 86400;
    var privileges = "*";
    var otp = "";

    window.KalturaUserService.loginByLoginId(
      loginId,
      password,
      partnerId,
      expiry,
      privileges,
      otp
    ).execute(this.client, (success, results) => {
      if (!success || (results && results.code && results.message)) {
        console.log("Kaltura Error", success, results);
      } else {
        console.log("Kaltura Result", results);
      }
    });

    this.setState({ client: this.client });
  };

  getPartnerDataById = () => {
    const { partnerId } = this.state;
    window.KalturaPartnerService.get(partnerId).execute(
      this.client,
      (success, results) => {
        if (!success || (results && results.code && results.message)) {
          console.log("Kaltura Error", success, results);
        } else {
          console.log("Kaltura getPartnerDataById Result", results);
        }
      }
    );
  };

  getPlayers = () => {
    var filter = { objectType: "KalturaUiConfFilter" };
    var pager = { objectType: "KalturaFilterPager" };

    window.KalturaUiConfService.listAction(filter, pager).execute(
      this.client,
      (success, results) => {
        if (!success || (results && results.code && results.message)) {
          console.log("Kaltura Error", success, results);
        } else {
          console.log("Kaltura Players Result", results);
          this.setState({ players: results.objects });
        }
      }
    );
  };

  setPlayerId = (uiconf_id) => this.setState({ uiconf_id });

  generateIframe = () => {
    const {
      partnerId,
      uiconf_id,
      entryId,
      subPartnerId,
      title,
      description,
    } = this.state;
    const iframeSrc = `https://cdnapisec.kaltura.com/p/${partnerId}/sp/${subPartnerId}/embedIframeJs/uiconf_id/${uiconf_id}/partner_id/${partnerId}?iframeembed=true&playerId=kaltura_player_${uiconf_id}&entry_id=${entryId}`;
    const iframe =
      `<iframe id="kaltura_player_` +
      uiconf_id +
      `"
        src="` +
      iframeSrc +
      `"
        width="560" height="395" allowfullscreen webkitallowfullscreen mozAllowFullScreen 
        allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" style="width: 560px; height: 395px;" 
        itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
        <span itemprop="name" content="${title}"></span>
        <span itemprop="description" content="${description}"></span>
        <span itemprop="duration" content="0"></span>
        <span itemprop="uploadDate" content="2020-04-15T07:13:10.000Z"></span>
        <span itemprop="width" content="560"></span>
        <span itemprop="height" content="395"></span>
    </iframe>`;
    this.setState({ iframe, iframeSrc });
  };

  render() {
    const {
      secret,
      iframe,
      partnerId,
      entryId,
      rtmp,
      userId = "",
      pass,
    } = this.state;
    return (
      <>
        <Paper elevation={3}>
          <Typography variant="subtitle1" color="textPrimary">
            User credentials
          </Typography>
          <TextField
            onChange={(e) => this.setState({ userId: e.target.value })}
            value={userId}
            label={"User Id (email)"}
          />
          {/* <TextField
            onChange={(e) => this.setState({ pass: e.target.value })}
            value={pass}
            // type="password"
            label={"Password"}
          /> */}
          <TextField
            onChange={this.enterSecret}
            value={secret}
            label={"Secret"}
          />
          <TextField
            onChange={this.enterPartnerId}
            value={partnerId}
            label={"Partner Id"}
          />
          {this.state.players && (
            <DropDown setPlayer={this.setPlayerId} items={this.state.players} />
          )}
          <Typography variant="subtitle1" color="textPrimary">
            Output Data
          </Typography>
          <TextField
            onChange={() => null}
            value={iframe}
            label={iframe ? null : "Iframe"}
          />
          <TextField
            onChange={() => null}
            value={rtmp}
            label={rtmp ? null : "rtmp"}
          />
          <Button
            color="secondary"
            onClick={this.session_start}
            // onClick={this.userLogin}
            startIcon={<ExitToAppIcon />}
          >
            Kaltura Log In
          </Button>
          <Button
            color='secondary'
            onClick={this.getPartnerDataById}
            startIcon={<ExitToAppIcon />}>
              Get Partner
          </Button>

          {this.client && (
            <>
              <Button
                color="primary"
                onClick={this.getPlayers}
                startIcon={<AlbumIcon />}
              >
                Get Players list
              </Button>
              <Button
                color="primary"
                onClick={this.getConversionProfile}
                startIcon={<VideocamIcon />}
              >
                Add Live Stream
              </Button>
            </>
          )}

          {entryId && (
            <>
              <Button
                color="primary"
                onClick={this.generateIframe}
                startIcon={<VpnKeyIcon />}
              >
                Generate iframe
              </Button>
            </>
          )}
        </Paper>
        <Paper elevation={3}>
          <div id="player" style={{ width: "100%", height: "100%" }}>
            <iframe
              id={`kaltura_player`}
              src={this.state.iframeSrc}
              style={{ width: "100%", height: "100%" }}
            >
              <span itemProp="name" content="Test Create"></span>
              <span itemProp="description" content="NOT Manual"></span>
              <span itemProp="duration" content="0"></span>
              <span
                itemProp="uploadDate"
                content="2020-04-15T07:13:10.000Z"
              ></span>
              <span itemProp="width" content="560"></span>
              <span itemProp="height" content="395"></span>
            </iframe>
          </div>
        </Paper>
      </>
    );
  }
}

export default KalturaUI;
