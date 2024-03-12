import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Avatar, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { useDropzone } from "react-dropzone";

// ... rest of your code

const  regEmail 
=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
const Form = () => {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
    },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(true);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneeeeeeeeeeee");
   



    
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Box
        sx={{
          width: "50%", // Adjust width as needed
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
<Box sx={{ mb: 3 }}>
  <Box {...getRootProps()} sx={{ position: "relative" }}>
    <input {...getInputProps()} />
    {file ? (
      <Avatar
        src={URL.createObjectURL(file)}
        sx={{ width: 150, height: 150, bgcolor: "primary.main" }}
      />
    ) : (
      <Avatar sx={{ width: 150, height: 150, bgcolor: "primary.main" }}>
        <Button sx={{ color: "inherit", position: "absolute", top: "center" }}>
          +
        </Button>
      </Avatar>
    )}
  </Box>
</Box>

<Button
  sx={{ color: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}
>

</Button>
      </Box>

      {/* ... rest of your form content */}
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
  
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>
  
        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? "Please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern:regEmail })}
          label="Email"
          variant="filled"
        />
  
        <TextField
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "Please provide a valid Phone number"
              : null
          }
          {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
          label="Contact Number"
          variant="filled"
        />
        <TextField label="Adress 1" variant="filled" />
   
  
     
  
        <Box sx={{ textAlign: "right" }}>
        
  
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account Updated successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
      <Box sx={{ textAlign: "right" }}>
      <Button
  type="submit"
  sx={{ textTransform: "capitalize" }}
  variant="contained"
  onClick={handleSubmit(onSubmit)} // Add handleSubmit here
>
  Update Profil
</Button>


        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account Updated successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;