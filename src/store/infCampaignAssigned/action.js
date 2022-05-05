import { networkRequest } from "../_shared/api";

export const getCampaignAssignedData = (payload) => {
  const url = "influencer-assign-campaign-pool/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_CAMPAIGN_ASSIGNED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_CAMPAIGN_ASSIGNED_FAIL" });
      }
    );
  };
};
