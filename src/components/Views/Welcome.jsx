import { Grid, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Clouds from "../../assets/clouds.svg";
import { Button } from "../Atoms/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import W2Kids from "../../assets/w2kids.svg";

const useStyles = makeStyles((theme) => ({
  w1Clouds: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "10%",
    zIndex: -1,
  },
  w1BetweenClouds: {
    position: "relative",
    top: 160,
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  w2Container: {
    borderRadius: 30,
    height: 300,
    position: "absolute",
    width: "95%",
    transform: "translate(-50%, 0)",
    top: "70%",
    left: "50%",
    boxSizing: "border-box", // just in case
    backgroundColor: "#ffffff",
  },
  w2Text: {
    margin: theme.spacing(8),
  },
  w2Kids: {
    width: 500,
    height: "auto",
  },
}));

const Welcome1 = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.w1BetweenClouds}>
        <Typography
          style={{ maxWidth: 600, fontWeight: "bold" }}
          gutterBottom
          variant="h4"
          component="h1"
        >
          Sé parte de la <span style={{ fontStyle: "italic" }}>alianza</span>{" "}
          por la salud y educación de los niños
        </Typography>
        <Button variant="outlined">Aprende más sobre nosotros</Button>
      </div>
      <Grid container>
        <Grid item>
          <img className={classes.w1Clouds} src={Clouds} alt="clouds"></img>
        </Grid>
      </Grid>
    </>
  );
};

const Welcome2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    lg && (
      <div style={{ flexGrow: 1 }}>
        <Grid
          container
          className={classes.w2Container}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className={classes.w2Text} xs={5}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography variant="h5" component="h1">
                  ¿Para qué se necesita una escuela hospitalaria?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  A fin de que los niños no abandonen o retrasen su escolaridad,
                  las escuelas hospitalarias brindan una educación compensatoria
                  y de calidad que permite su continuidad de estudios mientras
                  que a su vez, se les garantiza la reinserción escolar al
                  término de sus tratamientos médicos.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* somehow it won't detect the 12 grid layout so i had to use 5 here and space-evenly on justify content above */}
          <Grid item xs={5}>
            <img className={classes.w2Kids} src={W2Kids} alt="w2Kids"></img>
          </Grid>
        </Grid>
      </div>
    )
  );
};

export const Welcome = () => {
  return (
    <>
      <Welcome1></Welcome1>
      <Welcome2></Welcome2>
    </>
  );
};
