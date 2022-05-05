import { combineReducers } from "redux";
import { signUpState } from "./SignUp/localSignUp";
import { signUp } from "./SignUp/reducer";
import { infCampaignPool } from "./InfCampaignPool/reducer";
import { infCampaignActive } from "./infCampaignActive/reducer";
import { infCampaignAssigned } from "./infCampaignAssigned/reducer";
import { infBids } from "./infBid/reducer";

const reducers = combineReducers({
  signUpState,
  signUp,
  infCampaignPool,
  infCampaignActive,
  infCampaignAssigned,
  infBids,
});

export default reducers;
