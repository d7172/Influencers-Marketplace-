import { networkRequest } from "../_shared/api";

export const postSignUp = (payload, type) => {
  const url = `${type}-register/`;
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
