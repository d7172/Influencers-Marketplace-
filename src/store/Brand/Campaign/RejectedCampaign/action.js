import { networkRequest } from "../../../_shared/api";

export const getBrandRejectedCampaignData = (payload, activePage) => {
        console.log("payload", JSON.stringify(payload));
    const url = `brand-campaign-active-reject/?brand_id=${payload?.brand_id}&status=${payload?.status}&page=${activePage}`;
    // const url ='brand-campaign-active-reject/?brand_id=4&status=reject'
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_REJECTED_CAMPAIGN_SUCCESS", data: res });
                console.log("rejected campaign", res);
            },
            () => {
                dispatch({ type: "BRAND_REJECTED_CAMPAIGN_FAIL" });
            }
        );
    };
};
