import { networkRequest } from "../_shared/api";

export const postLogin = (payload, navigate) => {
  const url = "user-login/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        if (res?.status_code === 200 && res?.status === "success") {
          localStorage.setItem("userInfo", JSON.stringify(res));
          navigate(`/${res.type}/dashboard`);
        } else {
          alert("wrong credentials");
        }
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
