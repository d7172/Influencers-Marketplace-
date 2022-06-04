const init = {
  count: 0,
  results: [],
};

export const infTransitionEarning = (state = init, action) => {
  switch (action.type) {
    case "INF_TRANSITION_EARNING_SUCCESS":
      return action.data;

    case "INF_TRANSITION_EARNING_FAIL":
      return init;

    default:
      return state;
  }
};
export const infLatestTransition = (state = init, action) => {
  switch (action.type) {
    case "INF_LATEST_TRANSITION_SUCCESS":
      return action.data;

    case "INF_LATEST_TRANSITION_FAIL":
      return init;

    default:
      return state;
  }
};
