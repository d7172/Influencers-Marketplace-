import { combineReducers } from "redux";
import { signUpState } from "./SignUp/localSignUp";
import { signUp } from "./SignUp/reducer";
import { infCampaignPool } from "./InfCampaignPool/reducer";
import { infCampaignActive } from "./infCampaignActive/reducer";
import { infCampaignAssigned } from "./infCampaignAssigned/reducer";
import { infBids } from "./infBid/reducer";
import { infTransitionStatement } from "./infTransitionStatement/reducer";
import { infTransitionEarning } from "./infTransitionEarning/reducer";

const reducers = combineReducers({
  signUpState,
  signUp,
  infCampaignPool,
  infCampaignActive,
  infCampaignAssigned,
  infTransitionStatement,
  infBids,
  infTransitionEarning,
});

export default reducers;
