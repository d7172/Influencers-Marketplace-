import { networkRequest } from "../../../_shared/api";

export const getBrandAssignedCampaign = (payload, activePage) => {
    const url = `brand-campaign-assign-campaign-list/?brand_id=${payload?.brand_id}&page=${activePage}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_ASSIGNED_CAMPAIGN_SUCCESS", data: res })
            },
            () => {
                dispatch({ type: "BRAND_ASSIGNED_CAMPAIGN_FAIL" })
            }
        )
    }
}

export const updateQuotationStatus = (payload, navigate) => {
    const url = `campaign-accept-reject/`;

    return (dispatch) => {
        networkRequest(
            url,
            "POST",
            "JSON",
            payload,
            (res) => {
                res.status==="success" && navigate(`/brand/campaign/assigned-campaign`)
                console.log("status", res.status);
                console.log("response", res.response);
            },
            () => {
                alert("Failed to update status!!");
            }
        )
    }
}