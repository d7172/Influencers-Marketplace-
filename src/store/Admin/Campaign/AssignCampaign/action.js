import { networkRequest } from "../../../_shared/api";

export const getAssignCampaignData = (payload, activePage) => {
    const url = `admin-assigncampaigns-list/?page=${activePage}`
    return (dispatch) => {
        networkRequest(
            url,
            "GET",
            "JSON",
            payload,
            (res) => {
                dispatch({ type: "ASSIGN_CAMPAIGN_SUCCESS", data: res })
            },
            () => {
                dispatch({ type: "ASSIGN_CAMPAIGN_FAIL" })
            }
        )
    }
}