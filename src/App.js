import React, { Component } from "react";
import "./App.css";
import YoutubeUI from "./Youtube";
import FacebookUI from "./Facebook";
import KalturaUI from "./Kaltura";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Wowza from './Wowza';

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: "auto",
      alignItems: "center",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      padding: "20px",
    },
  },
});
class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root + " App"}>
         
        <Wowza />

        {/* <Paper elevation={1}>
          <YoutubeUI />
        </Paper>
        <Paper elevation={1}>
          <FacebookUI />
        </Paper>

        <KalturaUI /> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
