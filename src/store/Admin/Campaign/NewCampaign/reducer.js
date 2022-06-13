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

    case "NEW_CAMPAIGN_ADDED_SUCCESS":
      return action.data;

    case "NEW_CAMPAIGN_ADDED_FAIL":
      return init;

    case "CAMPAIGN_UPDATED_SUCCESS":
      return action.data;

    case "CAMPAIGN_UPDATED_FAIL":
      return init;

    case "CAMPAIGN_DELETED_SUCCESS":
      return action.data;

    case "CAMPAIGN_DELETED_FAIL":
      return init;

    default:
      return state;
  }
};
