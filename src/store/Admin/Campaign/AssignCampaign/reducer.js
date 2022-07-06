const init = {
  count: 0,
  results: [],
};

export const AdminQuotationCampaign = (state = init, action) => {
  switch (action.type) {
    case "QUOTATION_CAMPAIGN_SUCCESS":
      return action.data;

    case "QUOTATION_CAMPAIGN_FAIL":
      return init;

    default:
      return state;
  }
};
