export const signIn = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN_ADMIN_SUCCESS":
      return {
        userInfo: action.data,
      };

    case "SIGN_IN_ADMIN_FAIL":
      return { status: false };

    case "SIGN_IN_ADMIN_RESET":
      return {};

    default:
      return state;
  }
};
