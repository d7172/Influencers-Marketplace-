const init = {
  count: 0,
  results: [],
};

export const AdminEarning = (state = init, action) => {
  switch (action.type) {
    case "ADMIN_EARNING_SUCCESS":
      return action.data;

    case "ADMIN_EARNING_FAIL":
      return init;

    default:
      return state;
  }
};
