import { combineReducers } from "redux";
import { signUpState } from "./SignUp/localSignUp";
import { signUp } from "./SignUp/reducer";
import { signIn } from "./SignInAdmin/reducer";
import { infCampaignPool } from "./InfCampaignPool/reducer";
import { infCampaignActive } from "./infCampaignActive/reducer";
import { infCampaignAssigned } from "./infCampaignAssigned/reducer";
import { infCampaignCompleted } from "./infCampaignCompleted/reducer";
import { infBids } from "./infBid/reducer";
import { infTransitionStatement, infTransitionDownloadStatement } from "./infTransitionStatement/reducer";
import { infTransitionEarning, infLatestTransition } from "./infTransitionEarning/reducer";
import { infNewUser } from "./Admin/Influencer/NewUser/reducer";
import { infActiveUser } from "./Admin/Influencer/ActiveUser/reducer";
import { infRejectedUser } from "./Admin/Influencer/RejectedUser/reducer";
import { AdminActiveBids } from "./Admin/ActiveBids/reducer";
import { AdminNewCampaign } from "./Admin/Campaign/NewUser/reducer";
import { AdminActiveCampaign } from "./Admin/Campaign/ActiveUser/reducer";
import { AdminRejectedCampaign } from "./Admin/Campaign/RejectedUser/reducer";
import { AdminEarning } from "./Admin/Transactions/Earnings/reducer";
import { categories } from "./Categories/reducer";
import { placeBid } from "./infPlaceBid/reducer";
import { login } from "./Login/reducer";

const reducers = combineReducers({
  signUpState,
  signUp,
  login,
  userLogin: signIn,
  infCampaignPool,
  infCampaignActive,
  infCampaignAssigned,
  infCampaignCompleted,
  infTransitionStatement,
  infBids,
  infTransitionEarning,
  infTransitionDownloadStatement,
  infNewUser,
  infActiveUser,
  infRejectedUser,
  infLatestTransition,
  AdminActiveBids,
  AdminNewCampaign,
  AdminRejectedCampaign,
  AdminActiveCampaign,
  AdminEarning,
  categories,
  placeBid,
});

export default reducers;
