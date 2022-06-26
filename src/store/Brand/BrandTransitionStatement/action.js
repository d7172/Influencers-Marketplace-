import { networkRequest } from "../_shared/api";

export const getTransitionStatementData = (payload) => {
  const url = `brand-transition-statement/?influencer_id=${payload.influencer_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_TRANSITION_STATEMENT_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_TRANSITION_STATEMENT_FAIL" });
      }
    );
  };
};
export const DownloadTransStatementData = (payload) => {
  const url = "brand-transition-statement-downloading/?influencer_id=3";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_TRANSITION_STATEMENT_DOWNLOAD_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_TRANSITION_STATEMENT_DOWNLOAD_FAIL" });
      }
    );
  };
};
