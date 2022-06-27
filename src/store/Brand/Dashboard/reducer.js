const init = {}

export const BrandDashboard = (state = init, action) => {
    switch (action.type) {
        case "BRAND_DASHBOARD_SUCCESS":
            return action.data;
        case "BRAND_DASHBOARD_FAIL":
            return init;
        default:
            return state;
    }
}