const init = {
  count: 0,
  results: [],
};

export const categories = (state = init, action) => {
  switch (action.type) {
    case "CATEGORIES_SUCCESS":
      return action.data;

    case "CATEGORIES_FAIL":
      return init;

    default:
      return state;
  }
};
