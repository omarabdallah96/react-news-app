import React, { useState } from "react";
import { Typography, Grid, Box, Paper, TextField, Button } from "@mui/material";

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdate = () => {
    // Perform update logic here, e.g., make API calls, update state, etc.
    console.log("Update profile:", name, email);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Profile Information</Typography>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={handleNameChange}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleUpdate}>
              Update Profile
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
