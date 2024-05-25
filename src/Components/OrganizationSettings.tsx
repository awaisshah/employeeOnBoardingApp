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
  const [organizations, setOrganizations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    fetchAllOrganizations().then((data) => {
      console.log("ORganization Data : ", data);
      const newArr = data?.map((organization: any) => {
        return {
          label: organization.organisationName,
          id: organization.organisationKey,
        };
      });
      console.log("NEW ARR ", newArr);
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
        {({ field, form }: any) => (
          <Autocomplete
            disablePortal
            options={organizations}
            onChange={(_, value: IOrganization | null) => {
              console.log("VALUE  : ", value, typeof value);
              form.setFieldValue("organization", value?.label);
              form.setFieldValue("organizationField", value);

              if (value) {
                fetchAllDepartments().then((data) => {
                  console.log("depart Data : ", data);
                  const newArr = data?.map((depart: any) => {
                    return {
                      label: depart.departmentName,
                      id: depart.departmentKey,
                    };
                  });
                  console.log("NEW ARR ", newArr);
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
        )}
      </Field>
      <ErrorMessage name="organization" component="div" />
      <Field name="department">
        {({ field, form }: any) => (
          <Autocomplete
            disablePortal
            options={departments}
            onChange={(_, value: IOrganization | null) => {
              console.log("Depart VALUE  : ", value, typeof value);
              console.log("VALUE  : ", value, typeof value);
              form.setFieldValue("departmentField", value);
              form.setFieldValue("department", value?.label);
              // //  form.setFieldValue("organisation", value);
              if (value) {
                fetchAllDivisions().then((data) => {
                  console.log("Division Data : ", data);
                  const newArr = data?.map((depart: any) => {
                    return {
                      label: depart.departmentName,
                      id: depart.departmentKey,
                    };
                  });
                  console.log("NEW ARR ", newArr);
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
      <ErrorMessage name="department" component="div" />
      <Field name="division">
        {({ field, form }: any) => (
          <Autocomplete
            disablePortal
            options={divisions}
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
      <ErrorMessage name="division" component="div" />
    </Box>
  );
};

export default OrganizationSettings;
