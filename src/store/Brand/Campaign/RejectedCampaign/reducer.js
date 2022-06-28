const init = {
    count: 0,
    results: [],
};

export const BrandRejectedCampaign = (state = init, action) => {
    switch (action.type) {
        case "BRAND_REJECTED_CAMPAIGN_SUCCESS":
            return action.data;

        case "BRAND_REJECTED_CAMPAIGN_FAIL":
            return init;

        default:
            return state;
    }
};
