const init = {
  count: 0,
  results: [],
};

export const BrandTransactionEarning = (state = init, action) => {
  switch (action.type) {
    case "BRAND_TRANSACTION_EARNING_SUCCESS":
      return action.data;

    case "BRAND_TRANSACTION_EARNING_FAIL":
      return init;

    default:
      return state;
  }
};