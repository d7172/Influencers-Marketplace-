const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  otp: "",
  extra: {},
  admin_type: "superadmin",
};

export const signUpState = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_STATE":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
