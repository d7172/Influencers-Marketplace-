import { networkRequest } from "../../../_shared/api";

export const getQuotationCampaignData = (payload, activePage) => {
  const url = `admin-campaign-quotation-list/?page=${activePage}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "QUOTATION_CAMPAIGN_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "QUOTATION_CAMPAIGN_FAIL" });
      }
    );
  };
};
