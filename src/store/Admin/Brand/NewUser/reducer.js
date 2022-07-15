const init = {
    count: 0,
    results: [],
}

    export const BrandNewUser = (state = init, action) => {
        switch (action.type) {
            case "BRAND_NEW_USER_SUCCESS":
                return action.data;

            case "BRAND_NEW_USER_FAIL":
                return init;
                
            default:
                return state;
        }
    }