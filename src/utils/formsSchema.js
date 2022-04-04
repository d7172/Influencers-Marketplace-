import * as yup from "yup";

export const personalDetailsSchema = yup.object().shape({
  firstName: yup.string().min(3, "Minimum 3 characters").required("First name is required."),
  lastName: yup.string().min(3, "Minimum 3 characters").required("Last name is required."),
  userName: yup.string().min(3, "Minimum 3 characters").required("User name is required."),
  email: yup.string().email("Must be a valid email").max(255).required("Email is required"),
  phone: yup
    .number()
    .min(999999999, "Minimum 10 characters")
    .max(9999999999, "Max 10 characters")
    .required("Mobile number is required"),
  gender: yup.string().required("Gender is required."),
});
