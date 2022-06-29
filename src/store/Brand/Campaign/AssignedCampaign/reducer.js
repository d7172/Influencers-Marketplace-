const init = {
    count: 0,
    results: []
}

export const BrandAssignedCampaign = (state = init, action) => {
    switch (action.type) {
        case "BRAND_ASSIGNED_CAMPAIGN_SUCCESS":
            return action.data;
        case "BRAND_ASSIGNED_CAMPAIGN_FAIL":
            return init;
        default:
            return state
    }
}