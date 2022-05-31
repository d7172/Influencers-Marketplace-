const init = {
  count: 0,
  results: [],
};

export const infRejectedUser = (state = init, action) => {
  switch (action.type) {
    case "INF_REJECTED_USER_SUCCESS":
      return action.data;

    case "INF_REJECTED_USER_FAIL":
      return init;

    default:
      return state;
  }
};
