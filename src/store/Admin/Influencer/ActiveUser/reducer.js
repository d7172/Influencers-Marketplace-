const init = {
  count: 0,
  results: [],
};

export const infActiveUser = (state = init, action) => {
  switch (action.type) {
    case "INF_ACTIVE_USER_SUCCESS":
      return action.data;

    case "INF_ACTIVE_USER_FAIL":
      return init;

    default:
      return state;
  }
};
