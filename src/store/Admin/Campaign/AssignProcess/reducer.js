const init = {
  count: 0,
  results: [],
};

export const AdminAssignProcess = (state = init, action) => {
  switch (action.type) {
    case "ASSIGN_PROCESS_SUCCESS":
      return action.data;

    case "ASSIGN_PROCESS_FAIL":
      return init;

    case "ASSIGN_TO_INF_SUCCESS": 
      return action.data;
    
    case "ASSIGN_TO_INF_FAIL":
      return init;
    default:
      return state;
  }
};
