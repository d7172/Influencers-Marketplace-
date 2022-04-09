import { data } from "autoprefixer";
import { networkRequest } from "../_shared/api";

export const postSignUp = (payload) => {
  const url = "influencer-register/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({
          type: "SIGN_UP_SUCCESS",
          data: res,
        });
      },
      () => {
        dispatch({
          type: "SIGN_UP_FAIL",
        });
      }
    );
  };
};
