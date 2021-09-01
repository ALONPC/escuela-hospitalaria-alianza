import React from "react";
import { Grid, Typography, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/styles";
import Kids from "../../../assets/kids1.svg";
import { useSpacing } from "../../../hooks/useSpacing";
import { useLayout } from "../../../hooks/useLayout";
import { Container } from "../../Atoms/Container";

export const Welcome2 = () => {
  const layout = useLayout(2);
  const spacing = useSpacing();
  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: "70%",
      borderRadius: 30,
      backgroundColor: theme.palette.background.default,
      textAlign: "center",
      marginTop: `${spacing}rem`,
    },
    whatIsIt: {
      padding: theme.spacing(2),
    },
    kids: {
      width: "100%",
      maxWidth: 400,
      height: "auto",
    },
    kidsContainer: {
      textAlign: "center",
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container>
      <Grid
        container
        item
        direction="column"
        className={classes.whatIsIt}
        spacing={2}
        {...layout}
      >
        <Grid item>
          <Typography variant="h4">
            ¿Para qué se necesita una escuela hospitalaria?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            A fin de que los niños no abandonen o retrasen su escolaridad, las
            escuelas hospitalarias brindan una educación compensatoria y de
            calidad que permite su continuidad de estudios mientras que a su
            vez, se les garantiza la reinserción escolar al término de sus
            tratamientos médicos.
          </Typography>
        </Grid>
      </Grid>
      {/* somehow it won't detect the 12 grid layout so i had to use 5 here and space-evenly on justify content above */}
      <Grid item {...layout} className={classes.kidsContainer}>
        <img className={classes.kids} src={Kids} alt="kids"></img>
      </Grid>
    </Container>
  );
};
