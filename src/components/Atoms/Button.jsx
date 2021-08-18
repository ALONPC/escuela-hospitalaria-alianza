import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    borderRadius: 30,
    padding: "8px 24px",
  },
  link: {
    border: "none",
    "&:hover": {
      backgroundColor: "none",
      border: "none",
      textDecoration: "underline hsla(19, 82%, 63%, 1)",
    },
  },
});

const CustomLink = (props) => <Link {...props}></Link>;

export const Button = ({ children, type, ...restOfProps }) => {
  const classes = useStyles();
  return (
    <MuiButton
      {...restOfProps}
      {...(type === "link"
        ? {
            className: classes.link,
            component: CustomLink,
            variant: "text",
          }
        : {
            className: classes.button,
          })}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["default", "link"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
};

Button.defaultProps = {
  color: "primary",
  type: "default",
  variant: "contained",
};
