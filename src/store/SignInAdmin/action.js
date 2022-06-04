import { networkRequest } from "../_shared/api";

export const postSignIn = (payload) => {
  const url = "admins-login/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({
          type: "SIGN_IN_ADMIN_SUCCESS",
          data: res.data,
        });
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      },
      () => {
        dispatch({
          type: "SIGN_IN_ADMIN_FAIL",
        });
      }
    );
  };
};
