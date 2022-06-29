import { networkRequest } from "../../_shared/api";

export const getBrandTransitionStatementData = (payload) => {
  const url = `brand-campaign-statement-details/?brand_id=${payload.brand_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_TRANSACTION_STATEMENT_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_TRANSACTION_STATEMENT_FAIL" });
      }
    );
  };
};

export const getBrandStatementFilterData = (payload) => {
  const url = `brand-campaign-statement-date-filter/?brand_id=${payload?.brand_id}&date_from=${payload?.date_from}&date_to=${payload?.date_to}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_STATEMENT_FILTER_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_STATEMENT_FILTER_FAIL" });
      }
    );
  };
}

export const DownloadBrandStatementData = (payload) => {
  const url = `brand-campaign-statement-download/?brand_id=${payload?.brand_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "BRAND_TRANSACTION_STATEMENT_DOWNLOAD_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "BRAND_TRANSACTION_STATEMENT_DOWNLOAD_FAIL" });
      }
    );
  };
};
