import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

export const Welcome3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.w3Container}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h5" component="h1">
            ¿Quiénes necesitan una escuela hospitalaria?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Niños, niñas y jóvenes en edad escolar que estén hospitalizados, en
            tratamiento médico ambulatorio y/o domiciliario, de la enseñanza
            pre-básica, básica, media y educación especial que puedan padecer:
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
