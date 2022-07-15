import { networkRequest } from "../../../_shared/api";

export const getBrandActiveUserData = (payload,activePage) => {
    console.log("payload", payload);
    const url = `brand-user-list/?page=${activePage}&status=1`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_ACTIVE_USER_SUCCESS", data: res })
                // console.log("res", res);
            },
            () => {
                dispatch({type: "BRAND_ACTIVE_USER_FAIL"})
            }
        )
    }
}