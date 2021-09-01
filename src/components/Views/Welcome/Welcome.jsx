import React from "react";
import { Grid, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Welcome1 } from "./Welcome1";
import { Welcome2 } from "./Welcome2";
import { Welcome3 } from "./Welcome3";
import { Welcome4 } from "./Welcome4";

const useStyles = makeStyles((theme) => ({}));

const layout = {
  container: true,
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  // spacing: 10, // setting this to 10 messes up with padding of container atom
  spacing: 6,
};

export const Welcome = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Grid {...layout}>
      <Grid item>
        <Welcome1></Welcome1>
      </Grid>
      {/* section separated from the cloud section (welcome1) */}
      <Grid item>
        <Grid {...layout}>
          <Welcome2></Welcome2>
          <Welcome3></Welcome3>
          <Welcome4></Welcome4>
        </Grid>
      </Grid>
    </Grid>
  );
};
