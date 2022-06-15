import { networkRequest } from "../../../_shared/api";

export const getInfRejectedUserData = (payload, activePage) => {
  const url = `influencer-user-list/?page=${activePage}&status=2`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_REJECTED_USER_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_REJECTED_USER_FAIL" });
      }
    );
  };
};
