const init = {
  count: 0,
  results: [],
};

export const infCampaignAssigned = (state = init, action) => {
  switch (action.type) {
    case "INF_CAMPAIGN_ASSIGNED_SUCCESS":
      return action.data;

    case "INF_CAMPAIGN_ASSIGNED_FAIL":
      return init;

    default:
      return state;
  }
};
