import { networkRequest } from "../../../_shared/api";

export const getInfNewUserData = (payload, activePage) => {
  const url = `influencer-user-list/?page=${activePage}&status=1`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INF_NEW_USER_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INF_NEW_USER_FAIL" });
      }
    );
  };
};

export const addNewInfUserData = (payload) => {
  const url = "influencer-list/";
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "NEW_INFLUENCER_ADDED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "NEW_INFLUENCER_ADDED_FAIL" });
      }
    );
  };
};

export const updateInfUserData = (payload) => {
  const url = `influencer-detail/${payload?.influencer_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "PUT",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INFLUENCER_UPDATED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INFLUENCER_UPDATED_FAIL" });
      }
    );
  };
};

export const deleteInfUserData = (payload) => {
  const url = `influencer-detail/${payload?.influencer_id}`;
  return (dispatch) => {
    networkRequest(
      url,
      "DELETE",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "INFLUENCER_DELETED_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "INFLUENCER_DELETED_FAIL" });
      }
    );
  };
};
