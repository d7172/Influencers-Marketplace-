import { networkRequest } from "../../../_shared/api";

export const getBrandRejectedCampaignData = (payload, activePage) => {
    const url = `brand-campaign-active-reject/?brand_id=${payload?.brand_id}&status=${payload?.status}&page=${activePage}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_REJECTED_CAMPAIGN_SUCCESS", data: res });
            },
            () => {
                dispatch({ type: "BRAND_REJECTED_CAMPAIGN_FAIL" });
            }
        );
    };
};
