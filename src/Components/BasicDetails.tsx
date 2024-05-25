import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";

const BasicDetails = () => (
  <Box
    sx={{
      "& .MuiTextField-root": { m: 1 },
    }}
  >
    <Field name="firstName">
      {({ field }: any) => (
        <TextField {...field} label="First Name" fullWidth />
      )}
    </Field>
    <ErrorMessage name="firstName" component="div" />
    <Field name="lastName">
      {({ field }: any) => <TextField {...field} label="Last Name" fullWidth />}
    </Field>
    <ErrorMessage name="lastName" component="div" />
    <Field name="photo">
      {({ field, form }: any) => (
        <input
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget.files) {
              form.setFieldValue("photo", event.currentTarget.files[0]);
            }
          }}
        />
      )}
    </Field>
  </Box>
);

export default BasicDetails;
