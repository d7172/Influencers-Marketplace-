import { networkRequest } from "../../_shared/api";

export const getBrandTransitionEarningData = (payload) => {
  const url = `brand-campaign-transaction-details/?brand_id=${payload.brand_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_TRANSACTION_EARNING_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_TRANSACTION_EARNING_FAIL" });
      }
    );

  };
};

