import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import { Container } from "../../Atoms/Container";
import Kids from "../../../assets/kids2.svg";
import WhiteBean from "../../../assets/whiteBean.svg";
import { Grid, Typography } from "@material-ui/core";
import { useLayout } from "../../../hooks/useLayout";

export const Welcome4 = () => {
  const theme = useTheme();
  const layout = useLayout(2);
  const useStyles = makeStyles((theme) => ({
    whiteBean: {
      width: "100%",
      maxWidth: 400,
      height: "auto",
    },
    kids: {
      position: "absolute",
      right: 0,
      //   float: "left",
      width: "100%",
      maxWidth: 400,
      height: "auto",
    },
    kidsContainer: {
      position: "relative",
      textAlign: "center",
    },
    text: {
      textAlign: "center",
    },
  }));
  const classes = useStyles();
  return (
    <Container
      additionalStyles={{
        marginTop: "6rem",
        backgroundColor: theme.palette.tertiary.main,
      }}
      gridProps={{
        container: true,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Grid
        container
        item
        className={classes.kidsContainer}
        {...layout}
        justifyContent="center"
      >
        <Grid item style={{ position: "relative" }}>
          <img
            className={classes.whiteBean}
            src={WhiteBean}
            alt="whiteBean"
          ></img>
          <img className={classes.kids} src={Kids} alt="kids"></img>
        </Grid>
      </Grid>
      <Grid
        className={classes.text}
        container
        item
        justifyContent="center"
        {...layout}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4">
            ¿Cuáles son nuestras modalidades de atención?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Atención en cama pediátrica</Typography>
          <Typography variant="h5">Visita domiciliaria</Typography>
          <Typography variant="h5">En aula hospitalaria</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
