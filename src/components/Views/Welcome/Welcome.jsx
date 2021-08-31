import React from "react";
import { Grid, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Welcome1 } from "./Welcome1";
import { Welcome2 } from "./Welcome2";
import { Welcome3 } from "./Welcome3";

const useStyles = makeStyles((theme) => ({}));

export const Welcome = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Grid
      container
      // spacing={responsiveSpacing()}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      {/* // <Grid container spacing={10}> */}
      <Grid item>
        <Welcome1></Welcome1>
      </Grid>
      {/* section separated from the cloud section (welcome1) */}
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          // spacing={responsiveSpacing()}
        >
          <Welcome2></Welcome2>
          <Welcome3></Welcome3>
        </Grid>
      </Grid>
    </Grid>
  );
};
