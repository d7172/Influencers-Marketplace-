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
import { BrandActiveUser } from "./Admin/Brand/ActiveUser/reducer";
import { AdminActiveBids } from "./Admin/ActiveBids/reducer";
import { AdminNewCampaign } from "./Admin/Campaign/NewCampaign/reducer";
import { AdminActiveCampaign } from "./Admin/Campaign/ActiveCampaign/reducer";
import { AdminAssignCampaign } from "./Admin/Campaign/AssignCampaign/reducer";
import { AdminRejectedCampaign } from "./Admin/Campaign/RejectedCampaign/reducer";
import { AdminBrandPayment, AdminInfPayment } from "./Admin/Transactions/Payments/reducer";
import { AdminEarning } from "./Admin/Transactions/Earnings/reducer";
import { BrandDashboard } from "./Brand/Dashboard/reducer";
import { BrandNewCampaign } from "./Brand/Campaign/NewCampaign/reducer";
import { BrandAssignedCampaign } from "./Brand/Campaign/AssignedCampaign/reducer";
import { BrandActiveCampaign } from "./Brand/Campaign/ActiveCampaign/reducer";
import { BrandRejectedCampaign } from "./Brand/Campaign/RejectedCampaign/reducer";
import { BrandTransactionEarning } from "./Brand/BrandTransactionEarning/reducer";
import {
  BrandTransactionStatement,
  BrandTransactionStatementFilter,
  BrandTransactionDownloadStatement,
} from "./Brand/BrandTransitionStatement/reducer";
import { categories } from "./Categories/reducer";
import { placeBid } from "./infPlaceBid/reducer";
import { login } from "./Login/reducer";
import { stateList } from "./State/reducer";
import { countryList } from "./Country/reducer";
import { AdminAssignProcess } from "./Admin/Campaign/AssignProcess/reducer";
import { AdminMoveToCampaignPool } from "./Admin/Campaign/MoveToPool/reducer";
import { infActiveReject } from "./Admin/Influencer/Active-Reject/reducer";
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
  BrandActiveUser,
  AdminActiveBids,
  AdminNewCampaign,
  AdminRejectedCampaign,
  AdminActiveCampaign,
  AdminAssignCampaign,
  AdminBrandPayment,
  AdminInfPayment,
  AdminEarning,
  BrandDashboard,
  BrandNewCampaign,
  BrandAssignedCampaign,
  BrandActiveCampaign,
  BrandRejectedCampaign,
  BrandTransactionEarning,
  BrandTransactionStatement,
  BrandTransactionStatementFilter,
  BrandTransactionDownloadStatement,
  categories,
  placeBid,
  stateList,
  countryList,
  AdminAssignProcess,
  AdminMoveToCampaignPool,
  infActiveReject,
});

export default reducers;
