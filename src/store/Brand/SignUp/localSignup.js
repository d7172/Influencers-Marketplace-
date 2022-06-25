const initialState = {
    phone: {
        dail_code: "",
        contact_number: "",
        otp: ""
    },
    personal_details: {
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        organization_name: "",
        organization_type: "",
        about_organization: "",
        site_url: "",
        description: "",
        country: null,
        state: null,
        address: "",
        zipcode: ""
    },
    cover_pic: {},
    type: "brand"
}

export const brandSignUpState = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_BRAND_SIGNUP_STATE":
            return { ...state, ...action.data };
        default: 
            return state;
    }
};