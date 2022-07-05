import { networkRequest } from "../_shared/api";

export const GetDocumentsList = (payload) => {
  const url = `campaign-document-phase/`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_DOCUMENTS_UPLOAD_LIST_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_DOCUMENTS_UPLOAD_LIST_FAIL" });
      }
    );
  };
};
export const InfUploadDocuments = (payload) => {
  const url = `campaign-document-phase/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({ type: "INF_DOCUMENTS_UPLOAD_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_DOCUMENTS_UPLOAD_FAIL" });
      }
    );
  };
};
