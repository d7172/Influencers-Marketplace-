import { networkRequest } from "../_shared/api";

export const getCampaignPoolData = (payload) => {
  const url = "influencer-campaign-pool/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_CAMPAIGN_POOL_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_CAMPAIGN_POOL_FAIL" });
      }
    );
  };
};
