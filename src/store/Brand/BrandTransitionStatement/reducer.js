const init = {
  status: 0,
  response: [],
};

export const BrandTransactionStatement = (state = init, action) => {
  switch (action.type) {
    case "BRAND_TRANSACTION_STATEMENT_SUCCESS":
      return action.data;

    case "BRAND_TRANSACTION_STATEMENT_SUCCESS":
      return init;

    default:
      return state;
  }
};

export const BrandTransactionStatementFilter = (state = init, action) => {
  switch (action.type) {
    case "BRAND_STATEMENT_FILTER_SUCCESS":
      return action.data;

    case "BRAND_STATEMENT_FILTER_FAIL":
      return init;

    default:
      return state;
  }
};

export const BrandTransactionDownloadStatement = (state = init, action) => {
  switch (action.type) {
    case "BRAND_TRANSACTION_STATEMENT_DOWNLOAD_SUCCESS":
      return action.data;

    case "BRAND_TRANSACTION_STATEMENT_DOWNLOAD_FAIL":
      return init;

    default:
      return state;
  }
};
