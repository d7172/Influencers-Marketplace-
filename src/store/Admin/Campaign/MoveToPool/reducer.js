const init = {
  count: 0,
  results: [],
};

export const AdminMoveToCampaignPool = (state = init, action) => {
  switch (action.type) {
    case "MOVE_TO_CAMPAIGN_POOL_SUCCESS":
      return action.data;

    case "MOVE_TO_CAMPAIGN_POOL_FAIL":
      return init;

    default:
      return state;
  }
};
