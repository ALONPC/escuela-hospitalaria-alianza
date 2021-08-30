import { Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MinistriesLogo from "../../assets/logo/logoMinisteriosChile.png";
import HospitalLogo from "../../assets/logo/logoHospitalSanJose.png";

import Logo from "../../assets/logo/logo.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {},

  container: {
    backgroundColor: theme.palette.primary.light,
    height: 182,
  },
  // circle: {
  //   backgroundColor: "#CDEFFD",
  //   borderRadius: "50%",
  //   width: 250,
  //   height: 250,
  //   border: "1px solid red",
  //   position: "absolute",
  //   top: "100vh",
  //   left: "50%",
  //   transform: "translate(-50%, 0%)",
  // },
}));

const socialMedia = [
  {
    name: "Facebook",
    url: "",
    icon: <Facebook color="primary" fontSize="large"></Facebook>,
  },
  {
    name: "WhatsApp",
    url: "",
    icon: <WhatsApp color="primary" fontSize="large"></WhatsApp>,
  },
  {
    name: "Instagram",
    url: "",
    icon: <Instagram color="primary" fontSize="large"></Instagram>,
  },
  {
    name: "Twitter",
    url: "",
    icon: <Twitter color="primary" fontSize="large"></Twitter>,
  },
];

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.circle}></div>
      <div style={{ flexGrow: 1 }}>
        <Grid
          container
          className={classes.container}
          justifyContent="space-center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={4}>
            <Grid container justifyContent="center">
              {socialMedia.map((media) => {
                return <Grid item>{media.icon}</Grid>;
              })}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              spacing={3}
            >
              <Grid item>
                <img src={Logo} alt="logo"></img>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="p">
                  © Todos los derechos reservados 2021
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              alignItems="center"
              // spacing={2}
              //  justifyContent="flex-end"
            >
              <Grid item xs={2}>
                <img
                  style={{ width: 100, height: "auto" }}
                  src={HospitalLogo}
                  alt="hospitalLogo"
                ></img>
              </Grid>
              <Grid item xs={2}>
                <img
                  style={{ width: 300, height: "auto" }}
                  src={MinistriesLogo}
                  alt="ministriesLogo"
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
