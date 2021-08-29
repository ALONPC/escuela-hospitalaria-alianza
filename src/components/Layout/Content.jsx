import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.xl,
  },
}));

export const Content = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
