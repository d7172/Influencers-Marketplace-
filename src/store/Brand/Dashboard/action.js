import { networkRequest } from "../../_shared/api";

export const getBrandDashboardData = (payload) => {
    const url = `brand-dashboard/?brand_id=${payload?.brand_id}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_DASHBOARD_SUCCESS", data: res })
            },
            () => {
                dispatch({ type: "BRAND_DASHBOARD_FAIL" })
            }
        )
    }
}