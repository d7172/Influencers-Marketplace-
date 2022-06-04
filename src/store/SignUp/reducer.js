export const signUp = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return action.data;

    case "SIGN_UP_FAIL":
      return { status: false };

    case "SIGN_UP_RESET":
      return {};

    default:
      return state;
  }
};
