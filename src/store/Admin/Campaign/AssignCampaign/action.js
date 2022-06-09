import { networkRequest } from "../../../_shared/api";

export const getAssignCampaignData = (payload) => {
    const url = "admin-assigncampaigns-list/"
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