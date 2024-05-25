import * as Yup from "yup";

export const BasicSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),

  // email: Yup.string().email("Invalid email"),
  // .when("giveLogin", {
  //   is: true,
  //   then: Yup.string().required("Email is required"),
  // }),
});
