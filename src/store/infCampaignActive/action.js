import { networkRequest } from "../_shared/api";

export const getCampaignActiveData = (payload) => {
  const url = "influencer-active-campaign-pool/?category=fashion&status=active&influencer_id=1";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
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
