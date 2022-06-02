const init = {
  count: 0,
  results: [],
};

export const AdminActiveBids = (state = init, action) => {
  switch (action.type) {
    case "ADMIN_ACTIVE_BIDS_SUCCESS":
      return action.data;

    case "ADMIN_ACTIVE_BIDS_FAIL":
      return init;

    default:
      return state;
  }
};
