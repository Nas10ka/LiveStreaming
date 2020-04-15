import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > *": {
      margin: "8px auto",

      width: "100%",
    },
  },
}));

export default function Text({ value, label }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField label={label} variant="outlined" value={value} onChange={() => null} />
    </div>
  );
}
