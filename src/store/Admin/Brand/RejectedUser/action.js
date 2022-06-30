import { networkRequest } from "../../../_shared/api";

export const getBrandRejectedUserData = (payload, activePage) => {
    const url = `brand-user-list/?page=${activePage}&status=2`;
    return (dispatch) => {
        networkRequest(
        url,
        "GET",
        "JSON",
        payload,
        (res) => {
            dispatch({ type: "BRAND_REJECTED_USER_SUCCESS", data: res });
        },
        () => {
            dispatch({ type: "BRAND_REJECTED_USER_FAIL" });
        }
        );
    };
}