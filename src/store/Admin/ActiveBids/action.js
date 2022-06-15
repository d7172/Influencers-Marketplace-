import { networkRequest } from "../../_shared/api";

export const getActiveBidsData = (payload, activePage) => {
  const url = `admin-bid-details/?page=${activePage}&status=active`;
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
