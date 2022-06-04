export const placeBid = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_BID_SUCCESS":
      return action.data;

    case "PLACE_BID_FAIL":
      return { state: {} };

    default:
      return state;
  }
};
