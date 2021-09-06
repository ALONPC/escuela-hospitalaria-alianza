import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useLayout } from "../../../hooks/useLayout";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

import Kids from "../../../assets/kids3.svg";
import { Container } from "../../Atoms/Container";
import YellowBean from "../../../assets/yellowBean2.svg";
import OrangeBean from "../../../assets/orangeBean2.svg";
import BlueBean from "../../../assets/blueBean2.svg";

export const Welcome5 = () => {
  const layout = useLayout(2);
  const [small] = useMediaQuery();
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: "6rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    blueBean: {
      width: "100%",
      maxWidth: 300,
      height: "auto",
      position: "relative",
    },
    yellowBean: {
      // width: "auto", //  this for mobile version ?
      // height: "100%",
      marginTop: -20, // renders above the blue bean
      width: "100%",
      height: "80%",
      zIndex: 1,
    },
    orangeBean: {
      width: "100%",
      // maxWidth: 200,
      height: "auto",
    },
    kids: {
      position: "absolute",
      // float: "right",
      // left: "50%",
      width: "100%",
      maxWidth: 400,
      height: "auto",
      zIndex: 2,
    },
    contactUs: {
      position: "absolute",
      float: "left",
      top: small ? "10%" : "6%",
      left: small ? "20%" : "10%",
      color: theme.palette.primary.contrastText,
    },
  }));
  const classes = useStyles();
  return (
    <Container
      additionalStyles={{
        backgroundColor: "transparent",
        border: "1px solid red",
      }}
      className={classes.container}
    >
      <Grid container item xs={12} lg={5}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField fullWidth label="Nombre" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField fullWidth label="Mensaje" variant="outlined" />
        </form>
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={7}
        style={{
          position: "relative",
        }}
      >
        <Grid container item xs={12}>
          <img src={BlueBean} alt="blueBean" className={classes.blueBean}></img>
          <Typography className={classes.contactUs} variant="h4">
            Contáctanos
          </Typography>
        </Grid>
        <Grid container item>
          <Grid container item xs={6}>
            <img
              src={YellowBean}
              alt="yellowBean"
              className={classes.yellowBean}
            ></img>
            <img src={Kids} alt="kids" className={classes.kids}></img>
          </Grid>
          <Grid item xs={6}>
            <img
              src={OrangeBean}
              alt="orangeBean"
              className={classes.orangeBean}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
