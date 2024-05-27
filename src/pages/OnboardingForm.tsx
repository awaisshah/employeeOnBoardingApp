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
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    photo: null,
    organization: "",
    department: "",
    division: "",
    giveLogin: false,
    email: "",
    dailySpendingLimit: "",
  });

  console.log("activeStep : ", activeStep);

  const handleNext = (values: any) => {
    if (activeStep === steps.length - 1) {
      setFormValues(values);
    } else {
      setActiveStep(activeStep + 1);
      //  setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        onSubmit={(values) => {
          handleNext(values);
          if (activeStep === steps.length - 1) {
            // Final submit action here
            setFormValues(values);
            console.log("Final Form Values:", values);
          } else {
            handleNext(values);
          }
        }}
      >
        {({ values }) => (
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
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  if (activeStep === steps.length - 1) {
                    setIsModalOpen(true);
                  }
                }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>

            {formValues.firstName && activeStep === steps.length - 1 && (
              <ConfirmationModal
                values={formValues}
                open={isModalOpen}
                setOpen={setIsModalOpen}
              />
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default OnboardingForm;
