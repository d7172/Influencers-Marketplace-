import { networkRequest } from "../../../_shared/api";

export const getActiveCampaignData = (payload, activePage) => {
  const url = `campaign-all-list/?page=${activePage}&status=active`;
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
