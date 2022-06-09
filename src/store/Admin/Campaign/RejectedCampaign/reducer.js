const init = {
  count: 0,
  results: [],
};

export const AdminRejectedCampaign = (state = init, action) => {
  switch (action.type) {
    case "CAMPAIGN_REJECTED_USER_SUCCESS":
      return action.data;

    case "CAMPAIGN_REJECTED_USER_FAIL":
      return init;

    default:
      return state;
  }
};
