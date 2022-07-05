const init = {
  count: 0,
  results: [],
};

export const infUploadDocuments = (state = init, action) => {
  switch (action.type) {
    case "INF_DOCUMENTS_UPLOAD_LIST_SUCCESS":
      return action.data;

    case "INF_DOCUMENTS_UPLOAD_LIST_FAIL":
      return init;

    case "INF_DOCUMENTS_UPLOAD_SUCCESS":
      return action.data;

    case "INF_DOCUMENTS_UPLOAD_FAIL":
      return init;

    default:
      return state;
  }
};
