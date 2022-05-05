const init = {
  count: 0,
  results: [],
};

export const infCampaignActive = (state = init, action) => {
  switch (action.type) {
    case "INF_CAMPAIGN_ACTIVE_SUCCESS":
      return action.data;

    case "INF_CAMPAIGN_ACTIVE_FAIL":
      return init;

    default:
      return state;
  }
};
