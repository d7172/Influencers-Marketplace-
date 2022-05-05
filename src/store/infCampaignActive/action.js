import { networkRequest } from "../_shared/api";

export const getCampaignActiveData = (payload) => {
  const url = "influencer-active-campaign-pool/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_CAMPAIGN_ACTIVE_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_CAMPAIGN_ACTIVE_FAIL" });
      }
    );
  };
};
