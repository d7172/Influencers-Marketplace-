import { networkRequest } from "../../../_shared/api";

export const getActiveCampaignData = (payload) => {
  const url = "campaign-all-list/?status=1";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "ACTIVE_CAMPAIGN_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "ACTIVE_CAMPAIGN_FAIL" });
      }
    );
  };
};
