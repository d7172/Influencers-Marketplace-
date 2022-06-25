const init = {
    count: 0,
    results: [],
};

export const BrandActiveCampaign = (state = init, action) => {
    switch (action.type) {
        case "BRAND_ACTIVE_CAMPAIGN_SUCCESS":
            return action.data;

        case "BRAND_ACTIVE_CAMPAIGN_FAIL":
            return init;

        default:
            return state;
    }
};
