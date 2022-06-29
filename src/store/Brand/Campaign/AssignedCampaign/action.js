import { networkRequest } from "../../../_shared/api";

export const getBrandAssignedCampaign = (payload, activePage) => {
    const url = `brand-campaign-assign-campaign-list/?brand_id=${payload?.brand_id}&page=${activePage}`;
    return (dispatch) => networkRequest(
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