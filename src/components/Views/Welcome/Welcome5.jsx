import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { useLayout } from "../../../hooks/useLayout";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

import Kids from "../../../assets/kids3.svg";
import { Container } from "../../Atoms/Container";
import YellowBean from "../../../assets/yellowBean2.svg";
import OrangeBean from "../../../assets/orangeBean2.svg";
import BlueBean from "../../../assets/blueBean2.svg";
import { Button } from "../../Atoms/Button";

export const Welcome5 = () => {
  const theme = useTheme();
  const layout = useLayout(2);
  const [small] = useMediaQuery();
  const useStyles = makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
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
    textField: {
      //   margin: theme.spacing(2),
      width: "100%",
    },
  }));
  const classes = useStyles();

  const KidsSide = () => (
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
  );

  const FormSide = () => (
    <Grid container item xs={12} lg={5} style={{ padding: theme.spacing(2) }}>
      {/* <form noValidate autoComplete="off"> */}
      <Grid
        container
        //   direction="column"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        spacing={4}
      >
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            required
            //   fullWidth
            label="Nombre"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            required
            fullWidth
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            required
            fullWidth
            multiline
            rows={4}
            maxRows={4}
            label="Mensaje"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large">Enviar</Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Container
      noBackground
      additionalStyles={{
        border: "1px solid red",
      }}
    >
      <KidsSide></KidsSide>
      <FormSide></FormSide>
    </Container>
  );
};
