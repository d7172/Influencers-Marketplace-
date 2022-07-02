const init = {
  count: 0,
  results: [],
};

export const infActiveReject = (state = init, action) => {
  switch (action.type) {
    case "INF_ACTIVE_REJECT_SUCCESS":
      return action.data;

    case "INF_ACTIVE_REJECT_FAIL":
      return init;

    default:
      return state;
  }
};
