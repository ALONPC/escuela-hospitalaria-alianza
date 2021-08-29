import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Clouds from "../../assets/clouds.svg";
import { Button } from "../Atoms/Button";

const useStyles = makeStyles({
  clouds: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "30%",
    zIndex: -1,
  },
  betweenClouds: {
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
  welcome2: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    width: "80%",
    height: 400,
    top: "100%",
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  // welcome2: {
  //   position: "absolute",
  // },
});

const Welcome1 = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.betweenClouds}>
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
      <img className={classes.clouds} src={Clouds} alt="clouds"></img>
    </>
  );
};

const Welcome2 = () => {
  const classes = useStyles();
  return <div className={classes.welcome2}></div>;
};

export const Welcome = () => {
  return (
    <>
      <Welcome1></Welcome1>
      <Welcome2></Welcome2>
    </>
  );
};
