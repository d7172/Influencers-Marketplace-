const init = {
  count: 0,
  results: [],
};

export const BrandTransitionEarning = (state = init, action) => {
  switch (action.type) {
    case "BRAND_TRANSITION_EARNING_SUCCESS":
      return action.data;

    case "BRAND_TRANSITION_EARNING_FAIL":
      return init;

    default:
      return state;
  }
};
export const BrandLatestTransition = (state = init, action) => {
  switch (action.type) {
    case "BRAND_LATEST_TRANSITION_SUCCESS":
      return action.data;

    case "BRAND_LATEST_TRANSITION_FAIL":
      return init;

    default:
      return state;
  }
};
