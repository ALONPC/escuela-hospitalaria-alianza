import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Button } from "../../Atoms/Button";
import Clouds from "../../../assets/clouds.svg";
import { useSpacing } from "../../../hooks/useSpacing";

export const Welcome1 = () => {
  const spacing = useSpacing();
  const useStyles = makeStyles((theme) => ({
    clouds: {
      position: "absolute",
      width: "100%",
      top: "10%",
      left: 0,
      zIndex: -1,
    },
    betweenClouds: {
      textAlign: "center",
      zIndex: 1,
      marginTop: `${spacing}rem`,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.betweenClouds}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        {/* setting 4 to this grid in order to shrink the width of the text */}
        <Grid item xs={8} lg={6}>
          <Typography style={{ fontWeight: "bold" }} variant="h3" gutterBottom>
            Sé parte de la <span style={{ fontStyle: "italic" }}>alianza</span>{" "}
            por la salud y educación de los niños
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined">Aprende más sobre nosotros</Button>
        </Grid>
      </Grid>
      <img className={classes.clouds} src={Clouds} alt="clouds"></img>
    </>
  );
};
