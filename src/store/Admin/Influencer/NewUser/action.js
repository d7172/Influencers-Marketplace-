import { networkRequest } from "../../../_shared/api";

export const getInfNewUserData = (payload) => {
  const url = "influencer-user-list/?status=1";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_NEW_USER_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_NEW_USER_FAIL" });
      }
    );
  };
};
