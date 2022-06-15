import { networkRequest } from "../_shared/api";

export const getCountryData = (payload) => {
  const url = "country/";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "GET_COUNTRY_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "GET_COUNTRY_FAIL" });
      }
    );
  };
};
