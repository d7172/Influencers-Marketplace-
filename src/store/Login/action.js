import { networkRequest } from "../_shared/api";

export const postLogin = (payload) => {
  const url = "influencer-login/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          data: res,
        });
      },
      () => {
        dispatch({
          type: "LOGIN_FAIL",
        });
      }
    );
  };
};
