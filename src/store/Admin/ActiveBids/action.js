import { networkRequest } from "../../_shared/api";

export const getActiveBidsCampaignPoolData = (payload, activePage) => {
  const url = `admin-bid-details/?bid_see=campaign_pool`;
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
  const url = `admin-bid-details/?bid_see=assign_influencer`;
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
