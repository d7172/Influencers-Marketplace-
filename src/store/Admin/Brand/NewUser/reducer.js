const init = {
    count: 0,
    results: [],
}

    export const brandNewUser = (state = init, action) => {
        switch (action.type) {
            case "BRAND_NEW_USER_SUCCESS":
                return action.data;

            case "BRAND_NEW_USER_FAIL":
                return init;

            case "NEW_BRAND_ADDED_SUCCESS":
                return action.data;

            case "NEW_BRAND_ADDED_FAIL":
                return init;

            case "BRAND_UPDATED_SUCCESS":
                return action.data;

            case "BRAND_UPDATED_FAIL":
                return init;

            case "BRAND_DELETED_SUCCESS":
                return action.data;

            case "BRAND_DELETED_SUCCESS":
                return init;

            default:
                return state;
        }
    }