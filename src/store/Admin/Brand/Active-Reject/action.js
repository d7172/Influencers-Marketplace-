import { networkRequest } from "../../../_shared/api";

export const brandActiveReject = (payload, activePage) => {
  const url = `brand-accept-reject/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_ACTIVE_REJECT_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_ACTIVE_REJECT_FAIL" });
      }
    );
  };
};
