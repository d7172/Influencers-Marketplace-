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
      "POST",
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

export const updateCampaignData = (payload) => {
  const url = `campaign/${payload?.influencer_id}/`;
  return (dispatch) => {
    networkRequest(
      url,
      "PUT",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "CAMPAIGN_UPDATED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "CAMPAIGN_UPDATED_FAIL" });
      }
    );
  };
};

export const deleteCampaignData = (payload) => {
  const url = `campaign/${payload?.influencer_id}/`;
  return (dispatch) => {
    networkRequest(
      url,
      "DELETE",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "CAMPAIGN_DELETED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "CAMPAIGN_DELETED_FAIL" });
      }
    );
  };
};
