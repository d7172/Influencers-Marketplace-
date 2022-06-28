const init = {
    count: 0,
    results: [],
};

export const BrandNewCampaign = (state = init, action) => {
    switch (action.type) {
        case "BRAND_NEW_CAMPAIGN_SUCCESS":
            return action.data;

        case "BRAND_NEW_CAMPAIGN_FAIL":
            return init;

        case "BRAND_NEW_CAMPAIGN_ADDED_SUCCESS":
            return action.data;

        case "BRAND_NEW_CAMPAIGN_ADDED_FAIL":
            return init;

        default:
            return state;
    }
};
