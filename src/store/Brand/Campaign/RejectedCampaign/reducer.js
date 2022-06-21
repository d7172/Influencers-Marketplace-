const init = {
    count: 0,
    results: [],
};

export const BrandRejectedCampaign = (state = init, action) => {
    switch (action.type) {
        case "REJECTED_CAMPAIGN_SUCCESS":
            return action.data;

        case "REJECTED_CAMPAIGN_FAIL":
            return init;

        default:
            return state;
    }
};
