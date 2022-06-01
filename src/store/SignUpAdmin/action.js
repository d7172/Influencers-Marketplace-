import { networkRequest } from "../_shared/api";

export const postSignUp = (payload) => {
  const url = "admins/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({
          type: "SIGN_UP_ADMIN_SUCCESS",
          data: res,
        });
        localStorage.setItem("userInfo", JSON.stringify(res));
      },
      () => {
        dispatch({
          type: "SIGN_UP_ADMIN_FAIL",
        });
      }
    );
  };
};
