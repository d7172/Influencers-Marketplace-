import { networkRequest } from "../../_shared/api";

export const getActiveBidsCampaignPoolData = (payload, activePage) => {
  const url = `admin-bid-details/?bid_see=campaign_pool&page=${activePage}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "ADMIN_ACTIVE_BIDS_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "ADMIN_ACTIVE_BIDS_FAIL" });
      }
    );
  };
};
export const getActiveBidsAssignInfluencerData = (payload, activePage) => {
  const url = `admin-bid-details/?bid_see=assign_influencer&page=${activePage}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "ADMIN_ACTIVE_BIDS_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "ADMIN_ACTIVE_BIDS_FAIL" });
      }
    );
  };
};
export const AdminAssignCampaignToBrand = (payload, navigate) => {
  const url = `admin-assign-campaign-to-brand/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        if (res?.data?.status === 200) {
          navigate("/admin/active-bids");
        }
        console.log(res?.data, "AdminAssignCampaignToBrand res .data");
        dispatch({ type: "ADMIN_ASSIGN_CAMPAIGN_TO_BRAND_SUCCESS", data: res });
      },
      (err) => {
        console.log(err, "AdminAssignCampaignToBrand error");
        dispatch({ type: "ADMIN_ASSIGN_CAMPAIGN_TO_BRAND_FAIL" });
      }
    );
  };
};
