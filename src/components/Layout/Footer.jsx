import { Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MinistriesLogo from "../../assets/logo/logoMinisteriosChile.png";
import HospitalLogo from "../../assets/logo/logoHospitalSanJose.png";
import { Logo } from "../Atoms/Logo";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 182,
    backgroundColor: theme.palette.primary.light,
    border: "1px solid red",
  },
  // circle: {
  //   backgroundColor: "#CDEFFD",
  //   borderRadius: "50%",
  //   width: 250,
  //   height: 250,
  //   border: "1px solid red",
  //   position: "absolute",
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
    <div className={classes.container}>
      <Grid
        container
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
        <Grid item xs={4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            spacing={4}
          >
            <Grid item>
              <Logo></Logo>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="p"
                style={{ color: "#4D4D4D" }}
              >
                © Todos los derechos reservados 2021
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            alignItems="center"
            spacing={2}
            justifyContent="flex-end"
          >
            <Grid item>
              <img
                style={{ width: 120, height: "auto" }}
                src={HospitalLogo}
                alt="hospitalLogo"
              ></img>
            </Grid>
            <Grid item>
              <img
                style={{ width: 270, height: "auto" }}
                src={MinistriesLogo}
                alt="ministriesLogo"
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
