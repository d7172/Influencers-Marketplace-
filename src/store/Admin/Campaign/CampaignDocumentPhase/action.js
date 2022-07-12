import { networkRequest } from "../../../_shared/api";

export const adminUploadDocs = (payload) => {
  const url = `campaign-document-phase-brand/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "UPLOAD_INF_DOCS_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "UPLOAD_INF_DOCS_FAIL" });
      }
    );
  };
};
