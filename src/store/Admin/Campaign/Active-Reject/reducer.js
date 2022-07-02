const init = {
  count: 0,
  results: [],
};

export const campaignActiveReject = (state = init, action) => {
  switch (action.type) {
    case "CAMPAIGN_ACTIVE_REJECT_SUCCESS":
      return action.data;

    case "CAMPAIGN_ACTIVE_REJECT_FAIL":
      return init;

    default:
      return state;
  }
};
