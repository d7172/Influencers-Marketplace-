import { networkRequest } from "../_shared/api";

export const getCategoriesData = (payload) => {
  const url = "categories/";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "CATEGORIES_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "CATEGORIES_FAIL" });
      }
    );
  };
};
