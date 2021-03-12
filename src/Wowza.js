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
import { wowza_access_key, wowza_api_key } from './keys';

class Wowza extends Component {
  render () {
    return (
    <>
      <Paper elevation={1}>
          Wowza 
      </Paper>
      <Paper elevation={1}>
          Wowza Player
      </Paper>
    </>
    );
  }
}
export default Wowza;
