import { networkRequest } from "../_shared/api";

export const getTransitionStatementData = (payload) => {
  const url = "influencer-transition-statement/?influencer_id=3";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_TRANSITION_STATEMENT_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_TRANSITION_STATEMENT_FAIL" });
      }
    );
  };
};
export const DownloadTransStatementData = (payload) => {
  const url = "influencer-transition-statement-downloading/?influencer_id=3";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_TRANSITION_STATEMENT_DOWNLOAD_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_TRANSITION_STATEMENT_DOWNLOAD_FAIL" });
      }
    );
  };
};
