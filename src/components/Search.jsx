import { FormControl, InputLabel } from "@material-ui/core";
import { TextField } from "@mui/material";
import React from "react";

function Search(props) {
  return (
    <TextField
    autoComplete="off"
      value={props.value}
      onChange={props.onChange}
      style={{ marginTop: 10, width: "100%" }}
      id="outlined-basic"
      label="Search"
      variant="outlined"
    />
  );
}

export default Search;
