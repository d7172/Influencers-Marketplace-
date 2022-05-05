const init = {
  count: 0,
  results: [],
};

export const infBids = (state = init, action) => {
  switch (action.type) {
    case "INF_BID_SUCCESS":
      return action.data;

    case "INF_BID_FAIL":
      return init;

    default:
      return state;
  }
};
