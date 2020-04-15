import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TextField from "@material-ui/core/TextField";
import VideocamIcon from "@material-ui/icons/Videocam";
import AlbumIcon from "@material-ui/icons/Album";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// const secret = "62660697f74012dc6f6cbb668a63aa07";
// const entryName = "test";
// const entryDescription = "test";
// // --=---------------------------------------KALTURA CREDENTIALS---------------------------------------------------
// const kalturaId = "1_l9lov1gt";
// const partnerId = "2744221";
// const subPartnerId = "274422100";
// const adminSecret = "ad3edf30d8360c3afac80d02cefeefb1";
// const userSecret = "62660697f74012dc6f6cbb668a63aa07";

class KalturaUI extends Component {
  constructor() {
    super();
    this.state = {
      secret: "62660697f74012dc6f6cbb668a63aa07",
      partnerId: "2744221",
      uiconf_id: "45413001",
      subPartnerId: "274422100",
      userId:'Nastenka9410@gmail.com',
      client: null,
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
    console.log(this.setState({ client: this.client }));
  };

  session_start = () => {
    const { secret, partnerId, userId } = this.state;
    
    const config = new window.KalturaConfiguration(partnerId);
    config.serviceUrl = "http://www.kaltura.com";

    this.client = new window.KalturaClient(config);
    const type = 'KalturaSessionType.USER';
    window.KalturaSessionService.start(
      secret,
      userId,
      type,
      partnerId,
    )
      .completion(this.session_start_cb)
      .execute(this.client);
  };

  add = () => {
    var entry = {
      objectType: "KalturaLiveStreamEntry", //"KalturaMediaEntry",
      name: "Test 2.0",
      sourceType: "32",
      description: "Test 2.0- description",
      bitrates: [
        {
          bitrate: 900,
          height: 480,
          objectType: "KalturaLiveStreamBitrate",
          tags: "source,ingest,web,mobile,ipad,ipadnew",
          width: 640,
        },
      ],
      mediaType: 203,
    };
    // const sourceType = "32";

    window.KalturaMediaService.add(entry)
      // .add(window.KalturaMediaService.deleteAction("{1:result:id}"))
      .execute(this.client, (success, results) => {
        console.log("success ", success);
        console.log("results ", results);
        if (success) {
          this.setState({
            entryId: results.id,
            rtmp: results.primaryBroadcastingUrl,
            thumbnailUrl: results.thumbnailUrl,
            streamPassword: results.streamPassword,
          });
        }
      });
  };

  createScript = () => {
    const { partnerId, uiconf_id, entryId, subPartnerId } = this.state;
    const src =  `https://cdnapisec.kaltura.com/p/${partnerId}/sp/${subPartnerId}/embedIframeJs/uiconf_id/${uiconf_id}/partner_id/${partnerId}`;
    const script = document.createElement('script');
    script.onload = this.embedPlayer;
    script.id = 'player_script'
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }

  embedPlayer = () => {
    const date  = Date.now();
    window.kWidget.embed({
      targetId: `kaltura_player_${date}`,
      wid: `_${this.state.partnerId}`,
      uiconf_id: this.state.uiconf_id,
      flashvars: {},
      cache_st: date,
      entry_id: this.state.entryId,
      readyCallback: playerId => {
        console.log('Player ID ', playerId); // --- kaltura_player
      }
    });
  }

  generateIframe = () => {
    const { partnerId, uiconf_id, entryId } = this.state;
    const iframeSrc = `https://cdnapisec.kaltura.com/p/${partnerId}/embedPlaykitJs/uiconf_id/${uiconf_id}?iframeembed=true&playerId=kaltura_player_${uiconf_id}&entry_id=${entryId}`
    const iframe = (
      `<iframe id=${`kaltura_player_${uiconf_id}`} 
        src=${iframeSrc}
        width="560" height="395" allowfullscreen webkitallowfullscreen mozAllowFullScreen 
        allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" style="width: 560px; height: 395px;" 
        itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
        <span itemprop="name" content="Test Create"></span>
        <span itemprop="description" content="NOT Manual"></span>
        <span itemprop="duration" content="0"></span>
        <span itemprop="uploadDate" content="2020-04-15T07:13:10.000Z"></span>
        <span itemprop="width" content="560"></span>
        <span itemprop="height" content="395"></span>
    </iframe>`
    );
    this.setState({ iframe });

  }

  render() {
    const { secret, iframe, partnerId, entryId, rtmp } = this.state;
    return (
      <>
        <Paper elevation={3}>
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
          <TextField
            onChange={this.enterSecret}
            value={secret}
            label={"User Secret"}
          />
          <TextField
            onChange={this.enterPartnerId}
            value={partnerId}
            label={"Partner Id"}
          />
          <Button
            color="secondary"
            onClick={this.session_start}
            startIcon={<ExitToAppIcon />}
          >
            Kaltura Log In
          </Button>

          {this.client && (
            <Button
              color="primary"
              onClick={this.add}
              startIcon={<VideocamIcon />}
            >
              Add Media
            </Button>
          )}

          {entryId && (
            <>
              <Button
                color="primary"
                onClick={this.createScript}
                startIcon={<AlbumIcon />}
              >
                Add Player
              </Button>
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
          <div id="test" style={{ width: "100%", height: "100%" }}></div>
        </Paper>
      </>
    );
  }
}

export default KalturaUI;
