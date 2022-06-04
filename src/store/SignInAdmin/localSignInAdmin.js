const initialState = {
  phone: {
    dail_code: "+91",
    contact_number: "",
  },
  otp: "",
};

export const signInState = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNIN_STATE":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
