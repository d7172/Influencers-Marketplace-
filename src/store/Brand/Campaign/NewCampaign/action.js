import { networkRequest } from "../../../_shared/api";

export const getBrandNewCampaignData = (payload, activePage) => {
    const url = `brand-campaign/?page=${activePage}`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "BRAND_NEW_CAMPAIGN_SUCCESS", data: res });
            },
            () => {
                dispatch({ type: "BRAND_NEW_CAMPAIGN_FAIL" });
            }
        );
    };
};