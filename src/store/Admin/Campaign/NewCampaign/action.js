import { networkRequest } from "../../../_shared/api";

export const getNewCampaignData = (payload, activePage) => {
  const url = `campaign-all-list/?page=${activePage}&status=pending`;
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

export const addNewCampaignData = (payload, navigate) => {
  const url = "campaign/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        if (res?.status_code === 201 && res?.status === "success") {
          navigate("/admin/campaign/new-campaign")
        } else {
          alert("Some error occured!!");
        }
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
