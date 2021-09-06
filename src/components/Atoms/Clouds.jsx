import React from "react";
import { makeStyles } from "@material-ui/core";
import CloudsImg from "../../assets/clouds.svg";
import PropTypes from "prop-types";
import { hidden } from "jest-matcher-utils/node_modules/chalk";

export const Clouds = ({ place }) => {
  const useStyles = makeStyles((theme) => ({
    clouds: {
      position: "absolute",
      width: "100%",
      left: 0,
      zIndex: -1,
      ...(place.includes("top") ? { top: "7%" } : { top: "200%" }),
      overflow: "hidden",
    },
  }));
  const classes = useStyles();
  return <img className={classes.clouds} src={CloudsImg} alt="clouds"></img>;
};

Clouds.propTypes = {
  place: PropTypes.string,
};

Clouds.defaultProps = {
  place: "top",
};
