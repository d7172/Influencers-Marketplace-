const init = {
    count: 0,
    results: []
}

export const AdminAssignCampaign = (state = init, action) => {
    switch (action.type) {
        case "ASSIGN_CAMPAIGN_SUCCESS":
            return action.data;

        case "ASSIGN_CAMPAIGN_FAIL":
            return init;

        default:
            return state;
    }
};