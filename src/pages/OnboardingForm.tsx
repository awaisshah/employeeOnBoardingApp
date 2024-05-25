import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  TextField,
  Container,
} from "@mui/material";
import * as Yup from "yup";
import BasicDetails from "../Components/BasicDetails";
import ConfirmationModal from "../Components/ConfirmationModal";
import OrganizationSettings from "../Components/OrganizationSettings";
import EmployeeLogin from "../Components/EmployeeLogin";
import DailySpendingLimit from "../Components/DailySpendingLimit";
import { BasicSchema } from "../utils/BasicSchema";
import { OrganizationSchema } from "../utils/OrganizationSchema";
import { DailySpendingSchema } from "../utils/DailySpendingSchema";

const steps = [
  "Basic Details",
  "Organisation Settings",
  "Employee Login",
  "Daily Spending Limit",
];

const OnboardingForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState();

  const handleNext = (values: any) => {
    if (activeStep === steps.length - 1) {
      setFormValues(values);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Validator = () => {
    switch (activeStep >= 0) {
      case activeStep === 0:
        return BasicSchema;
      case activeStep === 1:
        return OrganizationSchema;
      case activeStep === 2:
        break;
      case activeStep === 3:
        break;

      case activeStep === 4:
        return DailySpendingSchema;
      default:
        console.log("unknown STEPPER");
      //   // code block
    }
  };

  return (
    <Container maxWidth="lg" style={{ padding: "20px 15px" }}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          photo: null,
          organization: "",
          department: "",
          division: "",
          giveLogin: false,
          email: "",
          dailySpendingLimit: "",
        }}
        validationSchema={BasicSchema}
        onSubmit={(values) => handleNext(values)}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ padding: "24px 15px" }}>
              {activeStep === 0 && <BasicDetails />}
              {activeStep === 1 && <OrganizationSettings formValues={values} />}
              {activeStep === 2 && <EmployeeLogin formValues={values} />}
              {activeStep === 3 && <DailySpendingLimit />}
            </Box>
            <Box>
              {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
              <Button type="submit">
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
            {formValues && <ConfirmationModal values={formValues} />}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default OnboardingForm;
