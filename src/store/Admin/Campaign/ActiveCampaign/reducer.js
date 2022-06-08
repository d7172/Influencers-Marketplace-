const init = {
  count: 0,
  results: [],
};

export const AdminActiveCampaign = (state = init, action) => {
  switch (action.type) {
    case "ACTIVE_CAMPAIGN_SUCCESS":
      return action.data;

    case "ACTIVE_CAMPAIGN_FAIL":
      return init;

    default:
      return state;
  }
};
