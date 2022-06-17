const init = {
    count: 0,
    results: []
}

export const AdminBrandPayment = (state = init, action) => {
    switch (action.type) {
        case "ADMIN_BRAND_PAYMENT_SUCCESS":
            return action.data;

        case "ADMIN_BRAND_PAYMENT_FAIL":
            return init;

        default:
            return state;
    }
};

export const AdminInfPayment = (state = init, action) => {
    switch (action.type) {
        case "ADMIN_INF_PAYMENT_SUCCESS":
            return action.data;

        case "ADMIN_INF_PAYMENT_FAIL":
            return init;

        default:
            return state;
    }
};