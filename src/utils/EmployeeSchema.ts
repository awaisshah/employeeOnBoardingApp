import * as Yup from "yup";

export const EmployeeSchema = Yup.object().shape({
  giveLogin: Yup.boolean(),
  email: Yup.string().email("Invalid email address"),
  // .when("giveLogin", {
  //   is: true,
  //   then: Yup.string().required("Email is required when login is given"),
  //   otherwise: Yup.string().notRequired(),
  // }),
});
