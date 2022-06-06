const init = {
  count: 0,
  results: [],
};

export const infCampaignCompleted = (state = init, action) => {
  switch (action.type) {
    case "INF_CAMPAIGN_COMPLETED_SUCCESS":
      return action.data;

    case "INF_CAMPAIGN_COMPLETED_FAIL":
      return init;

    default:
      return state;
  }
};
