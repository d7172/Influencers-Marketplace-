const init = {
  count: 0,
  results: [],
};

export const infNewUser = (state = init, action) => {
  switch (action.type) {
    case "INF_NEW_USER_SUCCESS":
      return action.data;

    case "INF_NEW_USER_FAIL":
      return init;

    case "NEW_INFLUENCER_ADDED_SUCCESS":
      return action.data;

    case "NEW_INFLUENCER_ADDED_FAIL":
      return init;

    case "INFLUENCER_UPDATED_SUCCESS":
      return action.data;

    case "INFLUENCER_UPDATED_FAIL":
      return init;

    case "INFLUENCER_DELETED_SUCCESS":
      return action.data;

    case "INFLUENCER_DELETED_SUCCESS":
      return init;

    default:
      return state;
  }
};
