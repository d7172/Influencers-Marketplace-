const init = {
  count: 0,
  results: [],
};

export const countryList = (state = init, action) => {
  switch (action.type) {
    case "GET_COUNTRY_SUCCESS":
      return action.data;

    case "GET_COUNTRY_FAIL":
      return init;

    default:
      return state;
  }
};
