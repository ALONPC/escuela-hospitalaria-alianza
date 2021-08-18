import { makeStyles } from "@material-ui/styles";
import React from "react";
import LogoImg from "../../assets/logo/logo.png";

const useStyles = makeStyles({
  logo: {
    width: "6rem",
    height: "5rem",
  },
});

export const Logo = () => {
  const classes = useStyles();
  return <img className={classes.logo} src={LogoImg} alt="logo"></img>;
};
