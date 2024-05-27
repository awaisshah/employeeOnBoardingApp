import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box, FormControlLabel, Switch } from "@mui/material";

const EmployeeLogin = (props: any) => {
  const { formValues } = props;
  console.log("EmployeeLogin FormValue :", formValues);
  return (
    <Box>
      <Field name="giveLogin">
        {({ field, form }: any) => (
          <FormControlLabel
            control={
              <Switch
                {...field}
                onChange={() => form.setFieldValue("giveLogin", !field.value)}
              />
            }
            label="Student Login"
          />
        )}
      </Field>

      {formValues?.giveLogin && (
        <Field name="email">
          {({ field, meta }: any) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              error={meta.touched && Boolean(meta.error)}
            />
          )}
        </Field>
      )}
      <Box sx={{ color: "red", mt: 1 }}>
        <ErrorMessage name="email" component="div" />
      </Box>
    </Box>
  );
};

export default EmployeeLogin;
