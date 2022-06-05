import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminDashboardCompositeComponent from "./AdminDashboardCompositeComponent";
import InfDashboardCompositeComponent from "./InfDashboardCompositeComponent";
import BrandDashboardCompositeComponent from "./BrandDashboardCompositeComponent";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import AdmActiveCampaign from "./pages/Admin/Campaign/ActiveCampaign";
import AdmAssignCampaign from "./pages/Admin/Campaign/AssignCampaign";
import AdmAssignCampaignDetails from "./pages/Admin/Campaign/AssignCampaignDetails";
import AdmNewCampaign from "./pages/Admin/Campaign/NewCampaign";
import AdmRejectedCampaign from "./pages/Admin/RejectedCampaign/RejectedCampaign";
import InfActiveUser from "./pages/Admin/Influencer/InfActiveUser";
import InfDetails from "./pages/Admin/Influencer/InfDetails";
import InfNewUser from "./pages/Admin/Influencer/InfNewUser";
import InfProfile from "./pages/Admin/Influencer/InfProfile";
import InfRejectedUser from "./pages/Admin/Influencer/InfRejectedUser";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";
import AdminActiveBids from "./pages/Admin/ActiveBids/Bids";
import AdminBidDetails from "./pages/Admin/ActiveBids/BidDetails";
import BrandPaymentOngoing from "./pages/Admin/Transaction/BrandPaymentOngoing";
import ActiveCampaign from "./pages/influencer/Dashboard/ActiveCampaign";
import ActiveCampaignDetails from "./pages/influencer/Dashboard/ActiveCampaignDetails";
import AssignedCampaign from "./pages/influencer/Dashboard/AssignedCampaign";
import Bids from "./pages/influencer/Dashboard/Bids";
import CampaignDetails from "./pages/influencer/Dashboard/CampaignDetails";
import CampaignPool from "./pages/influencer/Dashboard/CampaignPool";
import CompletedCampaign from "./pages/influencer/Dashboard/CompletedCampaign";
import InfluencerDashboard from "./pages/influencer/Dashboard/Dashboard";
import Earning from "./pages/influencer/Dashboard/Earning";
import Statement from "./pages/influencer/Dashboard/Statement";
import Support from "./pages/influencer/Dashboard/Support";
import Home from "./pages/influencer/Home";
import SignUp from "./pages/influencer/SignUp/SignUp";

import BrandDashboard from "./pages/brand/Dashboard";
import BrandCampaignDetails from "./pages/brand/CampaignDetails";
import BrandNewCampaign from "./pages/brand/NewCampaign";
import BrandActiveCampaign from "./pages/brand/ActiveCampaign";
import BrandAssignedCampaign from "./pages/brand/AssignedCampaign";
import BrandRejectedCampaign from "./pages/brand/RejectedCampaign";
import AddNewCampaign from "./pages/brand/AddNewCampaign";
import SignInAdmin from "../src/pages/Admin/SignIn/SignIn";
import SignUpAdmin from "../src/pages/Admin/SignUp/SignUp";
import DashBoard from "./pages/Admin/Dashboard/Dashboard";
import AdmCampaignDetails from "./pages/brand/CampaignDetails";
// import AdmAssignedCampaign from "./pages/Admin/AssignedCampaign/AssignedCampaign.js";
import AdmEarning from "./pages/Admin/Transaction/Earnings";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import AdmPaymentOngoing from "./pages/Admin/Transaction/AdmPaymentOngoing"
import Protected from "./ProtectedRoute";
import AdmPayments from "./pages/Admin/Transaction/Payments";
import AdmStatements from "./pages/Admin/Transaction/Statements";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.admin_type) {
      setIsLoggedIn(true);
    }
  }, [userInfo]);

  return (
    <div className="h-full min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfluencerCompositeComponent />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* admin routes */}
          <Route
            path="/admin"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <AdminDashboardCompositeComponent />
              </Protected>
            }
          >
            <Route
              path="/admin"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Navigate replace to="/admin/dashboard" />
                </Protected>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <DashBoard />
                </Protected>
              }
            />
            <Route path="/admin/influencer/new-user" element={<InfNewUser route={"new-user"} />} />
            <Route path="/admin/influencer/active-user" element={<InfActiveUser route={"active-user"} />} />
            <Route path="/admin/influencer/rejected-user" element={<InfRejectedUser route={"rejected-user"} />} />
            <Route path="/admin/influencer/active-user/:id" element={<InfProfile route={"active-user"} />} />
            <Route path="/admin/influencer/activeUser/:id" element={<InfDetails route={"active-user"} />} />
            <Route path="/admin/influencer/new-user/:id" element={<InfProfile route={"new-user"} />} />
            <Route path="/admin/influencer/new-user/add" element={<InfProfile route={"new-user"} />} />
            <Route path="/admin/influencer/rejected-user/:id" element={<InfProfile route={"rejected-user"} />} />
            <Route path="/admin/active-bids" element={<AdminActiveBids />} />
            <Route path="/admin/active-bids/:id" element={<AdminBidDetails />} />
            <Route path="/admin/brand/new-user" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/brand/active-user" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/brand/rejected-user" element={<Navigate replace to="/admin/dashboard" />} />

            <Route path="/admin/campaign/new-campaign" element={<AdmNewCampaign route={"new-campaign"} />} />
            <Route path="/admin/campaign/new-campaign/add" element={<AddNewCampaign route={"admin"} />} />
            <Route path="/admin/campaign/new-campaign/:id" element={<AddNewCampaign route={"admin"} />} />
            <Route
              path="/admin/campaign/assigned-campaign"
              element={<AdmAssignCampaign route={"assigned-campaign"} />}
            />
            <Route
              path="/admin/campaign/assigned-campaign/:id"
              element={<BrandCampaignDetails route={"admin/assigned-campaign"} />}
            />
            <Route path="/admin/campaign/active-campaign" element={<AdmActiveCampaign route={"active-campaign"} />} />
            <Route
              path="/admin/campaign/active-campaign/:id"
              element={<BrandCampaignDetails route={"admin/active-campaign"} />}
            />
            {/* <Route
              path="/admin/campaign/assigned-campaign"
              element={<AdmAssignedCampaign route={"assigned-campaign"} />}
            /> */}
            <Route
              path="/admin/campaign/rejected-campaign"
              element={<AdmRejectedCampaign route={"rejected-campaign"} />}
            />
            <Route
              path="/admin/campaign/rejected-campaign/:id"
              element={<BrandCampaignDetails route={"admin/rejected-campaign"} />}
            />

            <Route path="/admin/transaction" element={<Navigate replace to="/admin/transaction/earning" />} />
            <Route path="/admin/transaction/earning" element={<AdmEarning />} />
            <Route path="/admin/transaction/payments" element={<AdmPayments route="payment" />} />
            <Route path="/admin/transaction/payments/:id" element={<BrandPaymentOngoing route="payment" />} />
            <Route path="/admin/transaction/statement" element={<AdmStatements route="statement" />} />
            {/* <Route path="/admin/transactions/payment-ongoing" element={<AdmPaymentOngoing route={"payment-ongoing"} />}/> */}
          </Route>

          {/* influencer  routes */}
          <Route path="/influencer" element={<InfDashboardCompositeComponent />}>
            <Route path="/influencer" element={<Navigate replace to="/influencer/dashboard" />} />
            <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
            <Route path="/influencer/campaign" element={<Navigate replace to="/influencer/campaign/campaign-pool" />} />
            <Route path="/influencer/campaign/campaign-pool" element={<CampaignPool />} />
            <Route
              path="/influencer/campaign/campaign-pool/:id"
              element={<CampaignDetails route={"campaign pool"} />}
            />
            <Route path="/influencer/campaign/assigned-campaign" element={<AssignedCampaign />} />
            <Route
              path="/influencer/campaign/assigned-campaign/:id"
              element={<CampaignDetails route={"assigned campaign"} />}
            />
            <Route path="/influencer/campaign/active-campaign" element={<ActiveCampaign />} />
            <Route path="/influencer/campaign/active-campaign/:id" element={<ActiveCampaignDetails />} />
            <Route path="/influencer/campaign/completed-campaign" element={<CompletedCampaign />} />
            <Route path="/influencer/bids" element={<Bids />} />
            <Route
              path="/influencer/transactions"
              element={<Navigate replace to="/influencer/transactions/earning" />}
            />
            <Route path="/influencer/transactions/earning" element={<Earning />} />
            <Route path="/influencer/transactions/statement" element={<Statement />} />

            <Route path="/influencer/support" element={<Support />} />
          </Route>

          {/* Brand routes */}
          <Route path="/brand" element={<BrandDashboardCompositeComponent />}>
            <Route path="/brand" element={<Navigate replace to="/brand/dashboard" />} />
            <Route path="/brand/dashboard" element={<BrandDashboard />} />
            <Route path="/brand/campaign" element={<Navigate replace to="/brand/campaign/new-campaign" />} />
            {/* <Route path="/brand/campaign/campaign-pool" element={<CampaignPool />}></Route>
            <Route path="/brand/campaign/campaign-pool/:id" element={<CampaignDetails />} /> */}

            <Route path="/brand/campaign/new-campaign" element={<BrandNewCampaign />}></Route>
            <Route path="/brand/campaign/new-campaign/:id" element={<AddNewCampaign route={"brand"} />} />
            <Route path="/brand/campaign/new-campaign/add" element={<AddNewCampaign route={"brand"} />} />

            <Route path="/brand/campaign/assigned-campaign" element={<BrandAssignedCampaign />} />
            <Route
              path="/brand/campaign/assigned-campaign/:id"
              element={<BrandCampaignDetails route={"brand/assigned-campaign"} />}
            />

            <Route path="/brand/campaign/active-campaign" element={<BrandActiveCampaign />} />
            <Route
              path="/brand/campaign/active-campaign/:id"
              element={<BrandCampaignDetails route={"brand/active-campaign"} />}
            />

            <Route path="/brand/campaign/rejected-campaign" element={<BrandRejectedCampaign />} />
            <Route
              path="/brand/campaign/rejected-campaign/:id"
              element={<BrandCampaignDetails route={"brand/rejected-campaign"} />}
            />

            <Route path="/brand/transactions" element={<Navigate replace to="/brand/transactions/earning" />} />
            <Route path="/brand/transactions/earning" element={<Earning />} />
            <Route path="/brand/transactions/statement" element={<Statement />} />

            <Route path="/brand/support" element={<Support />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup-type" element={<SignUpType />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/signin" element={<SignInAdmin />} />
          <Route path="/admin/signup" element={<SignUpAdmin />} />
          <Route path="/admin/campaign/new-campaign/add" element={<AdmCampaignDetails route={"new-campaign"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
