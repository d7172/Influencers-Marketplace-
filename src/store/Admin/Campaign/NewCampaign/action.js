import { networkRequest } from "../../../_shared/api";

export const getNewCampaignData = (payload) => {
  const url = "campaign-all-list/?status=0";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "NEW_CAMPAIGN_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "NEW_CAMPAIGN_FAIL" });
      }
    );
  };
};

export const addNewCampaignData = (payload) => {
  const url = "campaign/";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "NEW_CAMPAIGN_ADDED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "NEW_CAMPAIGN_ADDED_FAIL" });
      }
    );
  };
};
