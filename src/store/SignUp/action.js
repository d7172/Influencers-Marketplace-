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
        console.log(res);
      },
      () => {}
    );
  };
};
