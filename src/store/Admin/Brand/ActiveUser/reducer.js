const init = {
    count: 0,
    results: []
}

export const BrandActiveUser = (state = init, action) => {
    switch (action.type) {
        case "BRAND_ACTIVE_USER_SUCCESS":
            return action.data;

        case "BRAND_ACTIVE_USER_FAIL":
            return init;
            
        default:
            return state;
    }
};