export const login = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.data;

    case "LOGIN_FAIL":
      return { status: false };

    case "LOGIN_RESET":
      return {};

    default:
      return state;
  }
};
