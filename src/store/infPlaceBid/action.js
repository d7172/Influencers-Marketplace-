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
          type: "SIGN_UP_SUCCESS",
          data: res,
        });
      },
      () => {
        dispatch({
          type: "SIGN_UP_FAIL",
        });
      }
    );
  };
};
