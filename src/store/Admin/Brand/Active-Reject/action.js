import { networkRequest } from "../../../_shared/api";

export const InfActiveReject = (payload, activePage) => {
  const url = `brand-accept-reject/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_ACTIVE_REJECT_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_ACTIVE_REJECT_FAIL" });
      }
    );
  };
};
