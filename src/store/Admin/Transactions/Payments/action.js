import { networkRequest } from "../../../_shared/api";

export const getBrandPaymentData = (payload, activePage) => {
    const url = `admin-payments-from-brand/?page=${activePage}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({type: "ADMIN_BRAND_PAYMENT_SUCCESS", data: res});
            },
            () => {
                dispatch({type: "ADMIN_BRAND_PAYMENT_FAIL"});
            }
        );
    };
};

export const getInfPaymentData = (payload, activePage) => {
    const url = `admin-payments-to-influencer/?page=${activePage}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({type: "ADMIN_INF_PAYMENT_SUCCESS", data: res})
            },
            () => {
                dispatch({type: "ADMIN_INF_PAYMENT_FAIL"})
            }
        )
    }
}