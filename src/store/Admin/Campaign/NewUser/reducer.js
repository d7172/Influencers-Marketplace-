const init = {
  count: 0,
  results: [],
};

export const AdminNewCampaign = (state = init, action) => {
  switch (action.type) {
    case "NEW_CAMPAIGN_SUCCESS":
      return action.data;

    case "NEW_CAMPAIGN_FAIL":
      return init;

    default:
      return state;
  }
};
