const init = {
  count: 0,
  results: [],
};

export const stateList = (state = init, action) => {
  switch (action.type) {
    case "GET_STATE_SUCCESS":
      return action.data;

    case "GET_STATE_FAIL":
      return init;

    default:
      return state;
  }
};
