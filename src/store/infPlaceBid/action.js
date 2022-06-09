import { networkRequest } from "../_shared/api";

export const postPlaceBid = (payload) => {
  const url = "influencer-bids/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({
          type: "PLACE_BID_SUCCESS",
          data: res,
        });
      },
      () => {
        dispatch({
          type: "PLACE_BID_FAIL",
        });
      }
    );
  };
};
