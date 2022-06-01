export const signUp = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_UP_ADMIN_SUCCESS":
      return {
        userInfo: action.data,
      };

    case "SIGN_UP_ADMIN_FAIL":
      return { status: false };

    case "SIGN_UP_ADMIN_RESET":
      return {};

    default:
      return state;
  }
};
