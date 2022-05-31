const init = {
  count: 0,
  results: [],
};

export const infNewUser = (state = init, action) => {
  switch (action.type) {
    case "INF_NEW_USER_SUCCESS":
      return action.data;

    case "INF_NEW_USER_FAIL":
      return init;

    default:
      return state;
  }
};
