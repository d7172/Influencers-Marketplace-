import { networkRequest } from "../_shared/api";

export const getTransitionEarningData = (payload) => {
  const url = "influencer-earning/?influencer_id=3";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_TRANSITION_EARNING_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_TRANSITION_EARNING_FAIL" });
      }
    );
  };
};
