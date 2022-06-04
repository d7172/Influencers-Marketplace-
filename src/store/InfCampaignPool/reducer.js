const init = {
  count: 0,
  results: [],
};

export const infCampaignPool = (state = init, action) => {
  switch (action.type) {
    case "INF_CAMPAIGN_POOL_SUCCESS":
      return action.data;

    case "INF_CAMPAIGN_POOL_FAIL":
      return init;

    default:
      return state;
  }
};
