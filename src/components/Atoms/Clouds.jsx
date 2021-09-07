import React from "react";
import { makeStyles } from "@material-ui/core";
import CloudsImg from "../../assets/clouds.svg";
import PropTypes from "prop-types";

export const Clouds = ({ place }) => {
  const useStyles = makeStyles((theme) => ({
    clouds: {
      //   position: "fixed", // makes a cool paralax effect
      position: "absolute",
      width: "100%",
      left: 0,
      zIndex: -1,
      ...(place.includes("bottom") && {
        bottom: "-24%",
        // bottom: -700, // almost the same
      }),
      ...(place.includes("top") && { top: "2%" }),
      overflow: "hidden",
    },
  }));
  const classes = useStyles();
  return <img className={classes.clouds} src={CloudsImg} alt="clouds"></img>;
};

Clouds.propTypes = {
  place: PropTypes.oneOf(["top", "bottom"]),
};

Clouds.defaultProps = {
  place: "top",
};
