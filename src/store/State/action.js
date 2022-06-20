import { networkRequest } from "../_shared/api";

export const getStatesData = (payload) => {
  const url = "state/";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "GET_STATE_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "GET_STATE_FAIL" });
      }
    );
  };
};
