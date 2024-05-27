import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";

const DailySpendingLimit = () => (
  <Box>
    <Field name="dailySpendingLimit">
      {({ field }: any) => (
        <TextField
          {...field}
          label="Daily Spending Limit"
          fullWidth
          type="number"
        />
      )}
    </Field>
    <Box sx={{ color: "red", mt: 1 }}>
      <ErrorMessage name="dailySpendingLimit" component="div" />
    </Box>
  </Box>
);

export default DailySpendingLimit;
