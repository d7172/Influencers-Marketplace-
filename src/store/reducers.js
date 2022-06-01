import { combineReducers } from "redux";
import { signUpState } from "./SignUp/localSignUp";
import { signUp } from "./SignUp/reducer";
import { infCampaignPool } from "./InfCampaignPool/reducer";
import { infCampaignActive } from "./infCampaignActive/reducer";
import { infCampaignAssigned } from "./infCampaignAssigned/reducer";
import { infBids } from "./infBid/reducer";
import { infTransitionStatement, infTransitionDownloadStatement } from "./infTransitionStatement/reducer";
import { infTransitionEarning, infLatestTransition } from "./infTransitionEarning/reducer";
import { infNewUser } from "./Admin/Influencer/NewUser/reducer";
import { infActiveUser } from "./Admin/Influencer/ActiveUser/reducer";
import { infRejectedUser } from "./Admin/Influencer/RejectedUser/reducer";

const reducers = combineReducers({
  signUpState,
  signUp,
  infCampaignPool,
  infCampaignActive,
  infCampaignAssigned,
  infTransitionStatement,
  infBids,
  infTransitionEarning,
  infTransitionDownloadStatement,
  infNewUser,
  infActiveUser,
  infRejectedUser,
  infLatestTransition,
});

export default reducers;
