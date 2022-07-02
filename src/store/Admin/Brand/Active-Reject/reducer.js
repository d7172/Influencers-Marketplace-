const init = {
  count: 0,
  results: [],
};

export const brandActiveReject = (state = init, action) => {
  switch (action.type) {
    case "BRAND_ACTIVE_REJECT_SUCCESS":
      return action.data;

    case "BRAND_ACTIVE_REJECT_FAIL":
      return init;

    default:
      return state;
  }
};
