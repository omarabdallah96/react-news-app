import React from "react";
import { Typography, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  message: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
  },
}));

function NoNewsFound() {
  const classes = useStyles();

  return (
    <Grow in={true}>
      <div className={classes.root}>
        <div className={classes.message}>
          <Typography variant="h5" align="center">
            No news found. Please try a different search term.
          </Typography>
        </div>
      </div>
    </Grow>
  );
}

export default NoNewsFound;
