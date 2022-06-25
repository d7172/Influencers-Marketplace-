import { networkRequest } from "../../../_shared/api";

export const getBrandRejectedCampaignData = (payload, activePage) => {
    const url = `campaign-all-list/?page=${activePage}&status=2`;
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "REJECTED_CAMPAIGN_SUCCESS", data: res });
            },
            () => {
                dispatch({ type: "REJECTED_CAMPAIGN_FAIL" });
            }
        );
    };
};
