import { networkRequest } from "../_shared/api";

export const getCampaignActiveData = (payload) => {
  const url = `influencer-active-campaign-pool/?category=${payload?.category}&status=${payload?.status}&influencer_id=${payload?.influencer_id}`;
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
