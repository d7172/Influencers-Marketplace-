import { networkRequest } from "../../../_shared/api";

export const getBrandActiveCampaignData = (payload, activePage) => {
    const url = `brand-campaign-active-reject/?brand_id=${payload?.brand_id}&status=${payload?.status}&page=${activePage}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_ACTIVE_CAMPAIGN_SUCCESS", data: res });
            },
            () => {
                dispatch({ type: "BRAND_ACTIVE_CAMPAIGN_FAIL" });
            }
        );
    };
};
