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
      {({ field, meta }: any) => (
        <TextField
          {...field}
          label="First Name"
          fullWidth
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error ? meta.error : ""}
        />
      )}
    </Field>
    <Field name="lastName">
      {({ field, meta }: any) => (
        <TextField
          {...field}
          label="Last Name"
          fullWidth
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error ? meta.error : ""}
        />
      )}
    </Field>
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
    <Box sx={{ color: "red", mt: 1 }}>
      <ErrorMessage name="firstName" component="div" />
      <ErrorMessage name="lastName" component="div" />
    </Box>
  </Box>
);

export default BasicDetails;
