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

export const brandassignquotation = (payload, navigate) => {
    const url =`brand-campaign-assign-quotation-accept-reject`;
    return (dispatch) => {
        networkRequest(
            url,
            "POST",
            "JSON",
            payload,
            (res) => {
                if(res.status = 200){
                    navigate(`/brand/campaign/assigned-campaign`)
                }
                console.log("status", res.status);
                dispatch({ type: "BRAND_ASSIGN_QUOTATION_SUCCESS", data: res })
            },
            (error)=>{
                console.log("error", error);
                dispatch({ type: "BRAND_ASSIGN_QUOTATION_FAIL" })
            }

        )
    }
}