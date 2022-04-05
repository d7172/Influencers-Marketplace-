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
  whatsapp: yup
    .number()
    .min(999999999, "Minimum 10 characters")
    .max(9999999999, "Max 10 characters")
    .required("WhastsApp number is required"),
  DOB: yup.string().required("DOB is required."),
  aboutYourself: yup.string().required("About Yourself is required."),
  profile: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.name) return false;
    return value.size <= 2000000;
  }),
  cover: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.name) return true; // attachment is optional
    return value.size <= 2000000;
  }),
});

export const contactInfoSchema = yup.object().shape({
  address: yup.string().min(3, "Minimum 3 characters").required("Address is required."),
  city: yup.string().required("City is required."),
  state: yup.string().required("State is required."),
  pinCode: yup.string().min(3, "Minimum 3 characters").required("Zip is required."),
  avgUserEngagement: yup.string().required("Avg User Engagement is required."),
  basicChargesPerPost: yup.string().required("Charge per post is required."),
  influencerExperience: yup.string().required("Influencer experience is required."),
  profileTitle: yup.string().required("Profile Title is required."),
  bankName: yup.string().min(3, "Minimum 3 characters").required("Bank Name is required."),
  accountNumber: yup.string().min(3, "Minimum 3 characters").required("Account Number is required."),
  confirmAccountNumber: yup.string().min(3, "Minimum 3 characters").required("Confirm Account Number is required."),
  IFSCCode: yup.string().min(3, "Minimum 3 characters").required("IFSC Code is required."),
  panCardNumber: yup.string().min(3, "Minimum 3 characters").required("Pan Card Number is required."),
  aadharCardNumber: yup.string().min(3, "Minimum 3 characters").required("AAdhaar Card Number is required."),
  uploadPanCard: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.name) return false;
    return value.size <= 2000000;
  }),
  uploadAadharFront: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.name) return false;
    return value.size <= 2000000;
  }),
  uploadAadharBack: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.name) return false;
    return value.size <= 2000000;
  }),
});
