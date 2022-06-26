const init = {
  count: 0,
  results: [],
};

export const infTransitionStatement = (state = init, action) => {
  switch (action.type) {
    case "INF_TRANSITION_STATEMENT_SUCCESS":
      return action.data;

    case "INF_TRANSITION_STATEMENT_FAIL":
      return init;

    default:
      return state;
  }
};
export const infTransitionDownloadStatement = (state = init, action) => {
  switch (action.type) {
    case "INF_TRANSITION_STATEMENT_DOWNLOAD_SUCCESS":
      return action.data;

    case "INF_TRANSITION_STATEMENT_DOWNLOAD_FAIL":
      return init;

    default:
      return state;
  }
};
