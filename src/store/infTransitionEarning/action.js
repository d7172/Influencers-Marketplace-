import { networkRequest } from "../_shared/api";

export const getTransitionEarningData = (payload) => {
  const url = "influencer-earning/?influencer_id=2";
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
export const getLatestTransitionData = (payload) => {
  const url = "influencer-latest-transaction-list/?influencer_id=2";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_LATEST_TRANSITION_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_LATEST_TRANSITION_FAIL" });
      }
    );
  };
};
