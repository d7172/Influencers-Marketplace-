import { networkRequest } from "../_shared/api";

export const getInfBidData = (payload, activePage) => {
  const url = `influencer-bids-list/?page=${activePage}`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_BID_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_BID_FAIL" });
      }
    );
  };
};
