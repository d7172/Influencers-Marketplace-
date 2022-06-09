import { networkRequest } from "../../../_shared/api";

export const getBrandActiveUserData = (payload) => {
    const url = "brand-user-list/?status=1"
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_ACTIVE_USER_SUCCESS", data: res })
            },
            () => {
                dispatch({type: "BRAND_ACTIVE_USER_FAIL"})
            }
        )
    }
}