import * as Yup from "yup";

export const OrganizationSchema = Yup.object().shape({
  organization: Yup.string().required("Organization is required"),
  department: Yup.string().required("Department is required"),
  division: Yup.string().required("Division is required"),
});
