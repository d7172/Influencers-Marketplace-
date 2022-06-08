import { networkRequest } from "../_shared/api";

export const getCampaignCompletedData = (payload) => {
  const url = `influencer-active-campaign-pool/?category=${payload.category}&status=complete&influencer_id=${payload.influencer_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_CAMPAIGN_COMPLETED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_CAMPAIGN_COMPLETED_FAIL" });
      }
    );
  };
};
