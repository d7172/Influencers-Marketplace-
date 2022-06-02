import { networkRequest } from "../../../_shared/api";

export const getAdminEarningData = (payload) => {
  const url = "admin-earning/";
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "ADMIN_EARNING_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "ADMIN_EARNING_FAIL" });
      }
    );
  };
};
