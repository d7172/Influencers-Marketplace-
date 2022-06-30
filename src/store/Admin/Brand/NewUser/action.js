import { networkRequest } from "../../../_shared/api";

export const getBrandNewUserData = (payload, activePage) => {
    const url = `brand-user-list/?page=${activePage}&status=0`;
    return (dispatch) => {
      networkRequest(
        url,
        "GET",
        "JSON",
        payload,
        (res) => {
          dispatch({ type: "BRAND_NEW_USER_SUCCESS", data: res },
          console.log("res", res)
          );
        },
        () => {
          dispatch({ type: "BRAND_NEW_USER_FAIL" });
        }
      );
    };
  }

export const addNewBrandUserData = (payload) => {
    const url = "brand-list/";
    return (dispatch) => {
      networkRequest(
        url,
        "POST",
        "JSON",
        payload,
        (res) => {
          dispatch({ type: "NEW_BRAND_ADDED_SUCCESS", data: res });
        },
        () => {
          dispatch({ type: "NEW_BRAND_ADDED_FAIL" });
        }
      );
    };
  }

export const updateBrandUserData = (payload) => {
    const url = `brand-detail/${payload?.brand_id}`;
    return (dispatch) => {
      networkRequest(
        url,
        "PUT",
        "JSON",
        payload,
        (res) => {
          dispatch({ type: "BRAND_UPDATED_SUCCESS", data: res });
        },
        () => {
          dispatch({ type: "BRAND_UPDATED_FAIL" });
        }
      );
    };
  }

export const deleteBrandUserData = (payload) => {
    const url = `brand-detail/${payload?.brand_id}`;
    return (dispatch) => {
      networkRequest(
        url,
        "DELETE",
        "JSON",
        payload,
        (res) => {
          dispatch({ type: "BRAND_DELETED_SUCCESS", data: res });
        },
        () => {
          dispatch({ type: "BRAND_DELETED_FAIL" });
        }
      );
    };
  }