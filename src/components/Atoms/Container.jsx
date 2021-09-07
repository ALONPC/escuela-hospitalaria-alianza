import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSpacing } from "../../hooks/useSpacing";

export const Container = ({
  children,
  noBackground,
  gridProps,
  additionalStyles,
}) => {
  const spacing = useSpacing();
  const useStyles = makeStyles((theme) => ({
    container: {
      ...(noBackground
        ? {
            maxWidth: "80%",
          }
        : {
            maxWidth: "70%",
            borderRadius: 30,
            backgroundColor: theme.palette.background.default,
          }),
      textAlign: "center",
      marginTop: `${spacing}rem`,
      ...additionalStyles,
    },
  }));
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      item
      justifyContent="center"
      alignItems="center"
      {...gridProps}
    >
      {children}
    </Grid>
  );
};
