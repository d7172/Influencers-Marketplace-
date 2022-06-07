const initialState = {
  phone: {
    dail_code: "+91",
    contact_number: "",
    otp: "",
  },
  otp: "",
  // type: "",
  personal_details: {
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    phone: {
      dail_code: "+91",
      contact_number: "",
    },
    gender: "male",
    whats_app: {
      dail_code: "+91",
      contact_number: "",
    },
    dob: "",
    about_yourself: "",
    category: [],
    avg_user_engagement: "",
    basic_charges_per_post: 0,
    influencer_experience: "",
    profile_title: "",
  },
  address_details: {
    line1: "",
    line2: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  },

  bank_detials: {
    bank_name: "",
    account_number: "",
    ifsc_code: "",
  },
  kyc_details: {
    pan_card_number: "",
    aadhar_card_number: "",
  },
  social_feeds: [],
  profile_pic: {},
  cover_pic: {},
  pan_card: {},
  aadhar_card_front: {},
  aadhar_card_back: {},
};

export const signUpState = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_STATE":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
