const init = {
    count: 0,
    results: [],
}
export const brandrejecteduser = (state = init, action) => {
    switch (action.type) {
        case "BRAND_REJECTED_USER_SUCCESS":
            return action.data;
        case "BRAND_REJECTED_USER_FAIL":
            return init;
        default:
            return state;
    }
}