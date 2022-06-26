import { networkRequest } from "../../../_shared/api";

export const getMoveToCampaignPoolData = (payload) => {
  console.log(payload, "getMoveToCampaignPoolData");
  const url = `campaign-pool/${payload}/?status=active`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "MOVE_TO_CAMPAIGN_POOL_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "MOVE_TO_CAMPAIGN_POOL_FAIL" });
      }
    );
  };
};
