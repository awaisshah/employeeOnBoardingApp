import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Autocomplete, TextField, Select, MenuItem, Box } from "@mui/material";
import {
  fetchAllDepartments,
  fetchAllDivisions,
  fetchAllOrganizations,
  fetchDepartments,
  fetchDivisions,
  fetchOrganizations,
} from "../services/EmployeeService";

interface IName {
  name: string;
  id: string;
}

interface IOrganization {
  label: string;
  id: string;
}

interface IId {
  id: string;
}

const OrganizationSettings = (props: any) => {
  console.log("Form values : ", props?.formValues);
  const [organizations, setOrganizations] = useState(
    props?.formValues?.organizationField || []
  );
  console.log("VALUES FROM ORGANIZATION : ", organizations);
  const [departments, setDepartments] = useState(
    props?.formValues?.departmentField || []
  );
  const [divisions, setDivisions] = useState(
    props?.formValues?.organizationField || []
  );

  useEffect(() => {
    fetchAllOrganizations().then((data) => {
      console.log("ORganization Data : ", data);

      setOrganizations(
        data?.map((organization: any) => {
          return {
            label: organization.organisationName,
            id: organization.organisationKey,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    fetchDepartments(props?.formValues?.organization?.id).then((data) => {
      console.log("Department : ", data);
    });
  }, [props?.formValues?.organization]);

  return (
    <Box
      sx={{
        "& .MuiAutocomplete-root": { m: 1 },
      }}
    >
      <Field name="organisation">
        {({ field, form }: any) => {
          console.log("Form : ", form);
          return (
            <Autocomplete
              disablePortal
              options={organizations}
              defaultValue={props?.formValues?.organizationField || []}
              onChange={(_, value: IOrganization | null) => {
                console.log("VALUE  : ", value, typeof value);
                form.setFieldValue("organization", value?.label);
                form.setFieldValue("organizationField", value);

                if (value) {
                  fetchAllDepartments().then((data) => {
                    console.log("depart Data : ", data);

                    setDepartments(
                      data?.map((depart: any) => {
                        return {
                          label: depart.departmentName,
                          id: depart.departmentKey,
                        };
                      })
                    );
                  });
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label="Organization" />
              )}
            />
          );
        }}
      </Field>
      <Field name="department">
        {({ field, form }: any) => (
          <Autocomplete
            disablePortal
            options={departments}
            defaultValue={props?.formValues?.departmentField || []}
            readOnly={!organizations}
            onChange={(_, value: IOrganization | null) => {
              console.log("Depart VALUE  : ", value, typeof value);
              console.log("VALUE  : ", value, typeof value);
              form.setFieldValue("departmentField", value);
              form.setFieldValue("department", value?.label);
              // //  form.setFieldValue("organisation", value);
              if (value) {
                fetchAllDivisions().then((data) => {
                  console.log("Division Data : ", data);

                  setDivisions(
                    data?.map((division: any) => {
                      return {
                        label: division.divisionName,
                        id: division.divisionKey,
                      };
                    })
                  );
                });
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="Department" />
            )}
          />
        )}
      </Field>
      <Field name="division">
        {({ field, form }: any) => (
          <Autocomplete
            disablePortal
            options={divisions}
            defaultValue={props?.formValues?.divisionField || []}
            onChange={(_, value: IOrganization | null) => {
              console.log("Division VALUE  : ", value, typeof value);
              form.setFieldValue("division", value?.label);
              form.setFieldValue("divisionField", value);

              // //  form.setFieldValue("organisation", value);
            }}
            renderInput={(params) => <TextField {...params} label="Division" />}
          />
        )}
      </Field>
      <Box sx={{ color: "red", mt: 1 }}>
        <ErrorMessage name="organization" component="div" />

        <ErrorMessage name="department" component="div" />

        <ErrorMessage name="division" component="div" />
      </Box>
    </Box>
  );
};

export default OrganizationSettings;
