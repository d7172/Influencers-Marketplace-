import { networkRequest } from "../../../_shared/api";

export const getBrandNewCampaignData = (payload, activePage) => {
    const url = `campaign-all-list/?page=${activePage}&status=pending`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "NEW_CAMPAIGN_SUCCESS", data: res });
            },
            () => {
                dispatch({ type: "NEW_CAMPAIGN_FAIL" });
            }
        );
    };
};