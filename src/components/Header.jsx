import React, { useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Stack,
  Chip
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function MultiSelect({options}) {
  const [selectedNames, setSelectedNames] = useState([]);
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel>Multiple Select</InputLabel>
      <Select
        multiple
        value={selectedNames}
        onChange={(e) => setSelectedNames(e.target.value)}
        input={<OutlinedInput label="Multiple Select" />}
        renderValue={(selected) => (
          <Stack gap={1} direction="row" flexWrap="wrap">
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={() =>{
                  setSelectedNames(
                    selectedNames.filter((item) => item !== value)
                  )
                  console.log(selectedNames)
                }}
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
              />
            ))}
          </Stack>
        )}
      >
        {options.map((name) => (
          <MenuItem key={name.value} value={name.value}>
            {name.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}