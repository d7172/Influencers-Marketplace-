const init = {
  count: 0,
  results: [],
};

export const UploadAdminDocs = (state = init, action) => {
  switch (action.type) {
    case "UPLOAD_INF_DOCS_SUCCESS":
      return action.data;
    case "UPLOAD_INF_DOCS_FAIL":
      return init;
    default:
      return state;
  }
};
