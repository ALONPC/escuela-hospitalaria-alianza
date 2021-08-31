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
  const layout = useLayout(3);
  // const layout = {
  //   lg: 4,
  //   xs: 4,
  // };
  const beanLayout = {
    lg: 4,
    md: 4,
    xs: 4,
  };
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
      left: small ? "30%" : "4rem",
      zIndex: 1,
    },
    patch: {
      position: "absolute",
      top: -10,
      float: "left", // this 'fixes' the element with the nearest relative element, which is the grid
      left: small ? "50%" : "4rem",
      zIndex: 1,
    },
    pill: {
      position: "absolute",
      top: -20,
      float: "left",
      left: small ? "50%" : "4rem",
      zIndex: 1,
    },
    text: {
      position: "absolute",
      top: "30%",
      left: "30%",
      // transform: "translate(-50%, 0%)",
      float: "left",
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
          <>
            <img src={BlueBean} alt="blueBean"></img>
            <Grid
              container
              className={classes.text}
              spacing={1}
              {...beanLayout}
            >
              <Grid item>
                <Typography variant="h5">Patologías Crónicas</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Tales como hemodializados u oxígeno dependientes
                </Typography>
              </Grid>
            </Grid>
          </>
          <img className={classes.hospital} src={Hospital} alt="hospital"></img>
        </Grid>
        <Grid style={{ position: "relative" }} item {...layout}>
          <>
            <img src={YellowBean} alt="yellowBean"></img>
            <Grid
              container
              className={classes.text}
              spacing={1}
              {...beanLayout}
            >
              <Grid item>
                <Typography variant="h5">
                  Patologías Agudas de curso prolongado
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Como quemaduras, politraumatismos y oncológicos
                </Typography>
              </Grid>
            </Grid>
          </>
          <img className={classes.patch} src={Patch} alt="patch"></img>
        </Grid>
        <Grid style={{ position: "relative" }} item {...layout}>
          <>
            <img src={OrangeBean} alt="orangeBean"></img>
            <Grid
              container
              className={classes.text}
              spacing={1}
              {...beanLayout}
            >
              <Grid item>
                <Typography variant="h5">Otras enfermedades</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Que requieran de hospitalización o de un tratamiento médico
                </Typography>
              </Grid>
            </Grid>
          </>
          <img className={classes.pill} src={Pill} alt="pill"></img>
        </Grid>
      </Grid>
    </>
  );
};
