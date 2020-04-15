import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AdbIcon from "@material-ui/icons/Adb";
import TextField from "./TextField";

// --=--------------------------------------GOOGLE CREDENTIALS---------------------------------------------------
let GOOGLE_AUTH;
const client_id =
  "21927936131-5ec1l4efj9k85at3kqvbqf7na4e6edij.apps.googleusercontent.com";
//"330659782595-ovqi66ln555v5nqlv6rdhuu7jl4cas7h.apps.googleusercontent.com";
const client_secret = "22YVap9wGEaaaIf7F4yGiIyc"; //"5y8xoKRffx45Lf9oNTkExCe8";
const redirect_url = "http://localhost:8000";
const api_key = "AIzaSyB99huaz6ldMqdMLaoM1jqmpRcIsU7uIFc"; //"AIzaSyDIaRxarRiEbltKv1DhfWrMEYeByWhk6Mk";
const scope = "https://www.googleapis.com/auth/youtube"; //, https://www.googleapis.com/auth/youtube.readonly";

class YoutubeUI extends Component {
  constructor() {
    super();
    this.state = {};
  }
  execute = () => {
    var user = GOOGLE_AUTH.currentUser.get();
    console.log("user ", user);
    this._liveStream()
      .then(this._liveBroadcast)
      .then(this._liveBroadcastBindStream);
  };

  _liveStream = () => {
    return window.gapi.client.youtube.liveStreams
      .insert({
        part: "snippet,cdn,contentDetails,status",
        resource: {
          snippet: {
            title: "default start",
            description:
              "TEEVID A description of your video stream. This field is optional.",
          },
          cdn: {
            frameRate: "60fps",
            ingestionType: "rtmp",
            resolution: "1080p",
          },
          contentDetails: {
            isReusable: true,
          },
        },
      })
      .then(
        (response) => {
          console.log("Response", response.result);
          const { id: streamId, cdn } = response.result;
          const { streamName, ingestionAddress } = cdn.ingestionInfo;
          const rtmp = `${ingestionAddress}/${streamName}`;
          this.setState({ streamId, rtmp });
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  };

  _liveBroadcast = () => {
    const startTime = new Date(Date.now() + 200).toISOString();
    const endTime = new Date(Date.now() + 400).toISOString();
    return window.gapi.client.youtube.liveBroadcasts
      .insert({
        part: "snippet,contentDetails,status",
        resource: {
          snippet: {
            scheduledStartTime: startTime,
            title: "Nastenka Title",
            description: "Description is optional",
            // isDefaultBroadcast: true,
          },
          status: {
            privacyStatus: "private",
          },
        },
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
          return response;
          //   this._liveBroadcastBindStream(response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  };

  _liveBroadcastBindStream = (response) => {
    const { id, contentDetails } = response.result;
    const { embedHtml: iframe } = contentDetails.monitorStream;
    const { streamId } = this.state;
    return window.gapi.client.youtube.liveBroadcasts
      .bind({ id, part: "snippet", streamId })
      .then(
        (response) => {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);

          this.setState({ iframe });
        },
        (err) => {
          console.error("Execute error", err);
        }
      );
  };

  loadClient = () => {
    window.gapi.load("client");
    window.gapi.client.setApiKey(api_key);
    return window.gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(
        function () {
          console.log("GAPI client loaded for API");
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
        }
      )
      .then(this.execute);
  };

  signIn = () => {
    const _onInit = (auth2) => {
      console.log("init OK", auth2);
      GOOGLE_AUTH = window.gapi.auth2.getAuthInstance();
      GOOGLE_AUTH.signIn({ scope })
        .then((googleUser) => {
          // метод возвращает объект пользователя
          // где есть все необходимые нам поля
          const data = googleUser.getBasicProfile();
          const profile = {};
          profile.id = data.getId(); // не посылайте подобную информацию напрямую, на ваш сервер!
          profile.name = data.getName();
          profile.givenName = data.getGivenName();
          profile.familyName = data.getFamilyName();
          profile.avatar = data.getImageUrl();
          profile.email = data.getEmail();
          console.log("Profile ", profile);
          // токен
          const token = googleUser.getAuthResponse().id_token;
          this.setState({ profile, token });
        })
        .then(this.loadClient);
    };

    const _onError = (err) => {
      console.log("error", err);
    };

    window.gapi.load("client:auth2", function () {
      window.gapi.auth2
        .init({
          // не забудьте указать ваш ключ в .env
          client_id,
        })
        .then(_onInit, _onError);
    });
  };

  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
  };
  render() {
    const { rtmp, iframe } = this.state;

    return (
      <>
        <Button
          color="primary"
          onClick={this.signIn}
          startIcon={<PermIdentityIcon />}
        >
          Google Log In
        </Button>
        {/* <Button color="primary" onClick={this.execute} startIcon={<AdbIcon />}>
          Google Execute
        </Button> */}
        <Button
          color="secondary"
          onClick={this.signOut}
          startIcon={<ExitToAppIcon />}
        >
          Google Log Out
        </Button>
        <TextField value={rtmp} label={rtmp ? "" : "rtmpURL"} />
        <TextField value={iframe} label={iframe ? "" : "iframe"} />
      </>
    );
  }
}

export default YoutubeUI;

// -----=-----------Live Broadcast Response------------------
/**
 * {
 "kind": "youtube#liveBroadcast",
 "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/ByL1JwBOy1o7KMSDEyYLl_wRsOw\"",
 "id": "nZVngrbs2yw",
 "snippet": {
  "publishedAt": "2020-04-10T10:46:22.000Z",
  "channelId": "UCxkAlenqNcttVTrG5vxug1Q",
  "title": "Nastenka Title",
  "description": "",
  "thumbnails": {
   "default": {
    "url": "https://i9.ytimg.com/vi/nZVngrbs2yw/default_live.jpg?sqp=CKycwfQF&rs=AOn4CLCcHsc7XisxaUyqGX7_J6CMkVQqvQ",
    "width": 120,
    "height": 90
   },
   "medium": {
    "url": "https://i9.ytimg.com/vi/nZVngrbs2yw/mqdefault_live.jpg?sqp=CKycwfQF&rs=AOn4CLDDuKVzN5MWGSjZgn-fuEiamumJkA",
    "width": 320,
    "height": 180
   },
   "high": {
    "url": "https://i9.ytimg.com/vi/nZVngrbs2yw/hqdefault_live.jpg?sqp=CKycwfQF&rs=AOn4CLDuClvCZ7li3GqS_k5eTPbkqG0ONQ",
    "width": 480,
    "height": 360
   }
  },
  "scheduledStartTime": "2020-04-10T10:44:08.000Z",
  "isDefaultBroadcast": false,
  "liveChatId": "Cg0KC25aVm5ncmJzMnl3KicKGFVDeGtBbGVucU5jdHRWVHJHNXZ4dWcxURILblpWbmdyYnMyeXc"
 },
 "status": {
  "lifeCycleStatus": "created",
  "privacyStatus": "private",
  "recordingStatus": "notRecording",
  "selfDeclaredMadeForKids": false
 },
 "contentDetails": {
  "monitorStream": {
   "enableMonitorStream": true,
   "broadcastStreamDelayMs": 0,
   "embedHtml": "\u003ciframe width=\"425\" height=\"344\" src=\"https://www.youtube.com/embed/nZVngrbs2yw?autoplay=1&livemonitor=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
  },
  "enableEmbed": true,
  "enableDvr": true,
  "enableContentEncryption": false,
  "startWithSlate": false,
  "recordFromStart": true,
  "enableClosedCaptions": false,
  "closedCaptionsType": "closedCaptionsDisabled",
  "enableLowLatency": false,
  "latencyPreference": "normal",
  "projection": "rectangular",
  "enableAutoStart": false,
  "enableAutoStop": false
 }
}
 */

// ------------------liveStreams Response --------------------------------
/**
  * HTTP/1.1 200 
cache-control: no-cache, no-store, max-age=0, must-revalidate
content-encoding: gzip
content-length: 543
content-type: application/json; charset=UTF-8
date: Fri, 10 Apr 2020 07:32:59 GMT
etag: "tnVOtk4NeGU6nDncDTE5m9SmuHc/CykWt3-G52yTjFJBKmVQgSdD1qA"
expires: Mon, 01 Jan 1990 00:00:00 GMT
pragma: no-cache
server: GSE
vary: Origin, X-Origin

{
 "kind": "youtube#liveStream",
 "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/CykWt3-G52yTjFJBKmVQgSdD1qA\"",
 "id": "xkAlenqNcttVTrG5vxug1Q1586503979308717",
 "snippet": {
  "publishedAt": "2020-04-10T07:32:59.000Z",
  "channelId": "UCxkAlenqNcttVTrG5vxug1Q",
  "title": "Your new video stream's name",
  "description": "A description of your video stream. This field is optional.",
  "isDefaultStream": false
 },
 "cdn": {
  "format": "1080p_hfr",
  "ingestionType": "rtmp",
  "ingestionInfo": {
   "streamName": "tvs8-rmz3-06hh-6ctq",
   "ingestionAddress": "rtmp://a.rtmp.youtube.com/live2",
   "backupIngestionAddress": "rtmp://b.rtmp.youtube.com/live2?backup=1"
  },
  "resolution": "1080p",
  "frameRate": "60fps"
 },
 "status": {
  "streamStatus": "ready",
  "healthStatus": {
   "status": "noData"
  }
 },
 "contentDetails": {
  "closedCaptionsIngestionUrl": "http://upload.youtube.com/closedcaption?cid=tvs8-rmz3-06hh-6ctq",
  "isReusable": true
 }
}

  */
