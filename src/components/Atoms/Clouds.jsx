import React from "react";
import { makeStyles } from "@material-ui/core";
import CloudsImg from "../../assets/clouds.svg";

export const Clouds = ({ place = "top" }) => {
  const useStyles = makeStyles((theme) => ({
    clouds: {
      position: "absolute",
      width: "100%",
      ...(place.includes("top") ? { top: "7%" } : { top: "200%" }),
      //   top: "7%",
      left: 0,
      zIndex: -1,
    },
  }));
  const classes = useStyles();
  return <img className={classes.clouds} src={CloudsImg} alt="clouds"></img>;
};
