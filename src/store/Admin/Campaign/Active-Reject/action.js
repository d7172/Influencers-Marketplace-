import { networkRequest } from "../../../_shared/api";

export const CampaignActiveReject = (payload, activePage) => {
  const url = `campaign-accept-reject/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "CAMPAIGN_ACTIVE_REJECT_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "CAMPAIGN_ACTIVE_REJECT_FAIL" });
      }
    );
  };
};
