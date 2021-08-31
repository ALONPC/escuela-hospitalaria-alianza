import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import { useLayout } from "../../../hooks/useLayout";
import { useSpacing } from "../../../hooks/useSpacing";

import BlueBean from "../../../assets/blueBean.svg";
import Hospital from "../../../assets/hospital.svg";

import YellowBean from "../../../assets/yellowBean.svg";
import Patch from "../../../assets/patch.svg";

import OrangeBean from "../../../assets/orangeBean.svg";
import Pill from "../../../assets/pill.svg";

export const Welcome3 = () => {
  let layout = useLayout(3);
  // const layout = {
  //   lg: 4,
  //   xs: 4,
  // };
  const spacing = useSpacing();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.between("xs", "lg"));
  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: "70%",
      borderRadius: 30,
      backgroundColor: theme.palette.background.default, // #fafafa
      textAlign: "center",
      marginTop: `${spacing / 2}rem`,
    },
    beanWrapper: {
      // border: "1px solid red",
      maxWidth: "80%",
      textAlign: "center",
    },
    hospital: {
      position: "absolute",
      top: 0,
      float: "left",
      left: small ? "30%" : "1rem",
      zIndex: 1,
    },
    patch: {
      position: "absolute",
      top: 0,
      float: "left",
      left: small ? "50%" : "4rem",
      zIndex: 1,
    },
    pill: {
      position: "absolute",
      top: 0,
      float: "left",
      left: small ? "50%" : "4rem",
      zIndex: 1,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        item
        className={classes.container}
        spacing={2}
        direction="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item {...layout}>
          <Typography variant="h4">
            ¿Quiénes necesitan una escuela hospitalaria?
          </Typography>
        </Grid>
        <Grid item {...layout}>
          <Typography variant="body1">
            Niños, niñas y jóvenes en edad escolar que estén hospitalizados, en
            tratamiento médico ambulatorio y/o domiciliario, de la enseñanza
            pre-básica, básica, media y educación especial que puedan padecer:
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.beanWrapper}
        container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid style={{ position: "relative" }} item {...layout}>
          <div>
            <img src={BlueBean} alt="blueBean"></img>
            <Grid style={{ position: "absolute", top: "50%" }}>
              <Typography variant="h5">Patologías Crónicas</Typography>
              <Typography variant="subtitle1">
                tales como hemodializados u oxígeno dependientes
              </Typography>
            </Grid>
          </div>
          <img className={classes.hospital} src={Hospital} alt="hospital"></img>
        </Grid>
        <Grid style={{ position: "relative" }} item {...layout}>
          <img src={YellowBean} alt="yellowBean"></img>
          <img className={classes.patch} src={Patch} alt="patch"></img>
        </Grid>
        <Grid style={{ position: "relative" }} item {...layout}>
          <img src={OrangeBean} alt="orangeBean"></img>
          <img className={classes.pill} src={Pill} alt="pill"></img>
        </Grid>
      </Grid>
    </>
  );
};
