import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

export const Input = ({ ...textFieldProps }) => {
  const StyledTextField = withStyles((theme) => ({
    root: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 30,
        "& fieldset": {
          borderColor: theme.palette.primary.main,
        },
        "&:hover fieldset": {
          border: `2px solid ${theme.palette.primary.hover}`,
        },
      },
    },
  }))(TextField);
  return <StyledTextField {...textFieldProps}></StyledTextField>;
};
