import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminDashboardCompositeComponent from "./AdminDashboardCompositeComponent";
import InfDashboardCompositeComponent from "./InfDashboardCompositeComponent";
import BrandDashboardCompositeComponent from "./BrandDashboardCompositeComponent";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import AdmActiveCampaign from "./pages/admin/Campaign/ActiveCampaign";
import AdmAssignCampaign from "./pages/admin/Campaign/AssignCampaign";
import AdmNewCampaign from "./pages/admin/Campaign/NewCampaign";
import AdmRejectedCampaign from "./pages/admin/Campaign/RejectedCampaign";
import InfActiveUser from "./pages/admin/Influencer/InfActiveUser";
import InfDetails from "./pages/admin/Influencer/InfDetails";
import InfNewUser from "./pages/admin/Influencer/InfNewUser";
import InfProfile from "./pages/admin/Influencer/InfProfile";
import InfRejectedUser from "./pages/admin/Influencer/InfRejectedUser";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";
import ActiveCampaign from "./pages/influencer/Dashboard/ActiveCampaign";
import ActiveCampaignDetails from "./pages/influencer/Dashboard/ActiveCampaignDetails";
import AssignedCampaign from "./pages/influencer/Dashboard/AssignedCampaign";
import Bids from "./pages/influencer/Dashboard/Bids";
import AdminActiveBids from "./pages/admin/ActiveBids/Bids";
import AdminBidDetails from "./pages/admin/ActiveBids/BidDetails";
import CampaignDetails from "./pages/influencer/Dashboard/CampaignDetails";
import BrandCampaignDetails from "./pages/brand/CampaignDetails";
import CampaignPool from "./pages/influencer/Dashboard/CampaignPool";
import CompletedCampaign from "./pages/influencer/Dashboard/CompletedCampaign";
import InfluencerDashboard from "./pages/influencer/Dashboard/Dashboard";
import BrandDashboard from "./pages/brand/Dashboard";
import Earning from "./pages/influencer/Dashboard/Earning";
import Statement from "./pages/influencer/Dashboard/Statement";
import BrandEarning from "./pages/brand/Earning";
import BrandStatement from "./pages/brand/Statement";
import Support from "./pages/influencer/Dashboard/Support";
import Home from "./pages/influencer/Home";
import SignUp from "./pages/influencer/SignUp/SignUp";
import SignIn from "./pages/admin/SignIn/SignIn";
import SignUpAdmin from "./pages/admin/SignUp/SignUp";
import AdminDashBoard from "./pages/admin/Dashboard/Dashboard";
import { useState, useEffect } from "react";
import Protected from "./ProtectedRoute";
import { useSelector } from "react-redux";
import NewCampaign from "./pages/brand/NewCampaign";
import BrandActiveCampaign from "./pages/brand/ActiveCampaign";
import BrandAssignedCampaign from "./pages/brand/AssignedCampaign";
import RejectedCampaign from "./pages/brand/RejectedCampaign";
import Earnings from "./pages/admin/Transaction/Earnings";
import Payments from "./pages/admin/Transaction/Payments";
import BrandPaymentOngoing from "./pages/admin/Transaction/BrandPaymentOngoing";
import AdminNewCampaign from "./pages/admin/NewCampaign/NewCampaign";
import AdminActiveCampaign from "./pages/admin/ActiveCampaign/ActiveCampaign";
import AdminAssignedCampaign from "./pages/admin/AssignedCampaign/AssignedCampaign";
import AdminRejectedCampaign from "./pages/admin/RejectedCampaign/RejectedCampaign";
import AdminRejectedCampaignDetails from "./pages/admin/RejectedCampaign/RejectedCampaignDetails";

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
                  <AdminDashBoard />
                </Protected>
              }
            />
            <Route path="/admin/influencer/new-user" element={<InfNewUser route={"new-user"} />} />
            <Route path="/admin/influencer/active-user" element={<InfActiveUser route={"active-user"} />} />
            <Route path="/admin/influencer/rejected-user" element={<InfRejectedUser route={"rejected-user"} />} />
            <Route path="/admin/influencer/active-user/:id" element={<InfProfile route={"active-user"} />} />
            <Route path="/admin/influencer/activeUser/:id" element={<InfDetails route={"active-user"} />} />
            <Route path="/admin/influencer/new-user/:id" element={<InfProfile route={"new-user"} />} />
            <Route path="/admin/influencer/rejected-user/:id" element={<InfProfile route={"rejected-user"} />} />
            <Route path="/admin/brand/new-user" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/brand/active-user" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/brand/rejected-user" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/active-bids" element={<Navigate replace to="/admin/dashboard" />} />

            <Route path="/admin/campaign/new-campaign" element={<AdmNewCampaign route={"new-campaign"} />} />
            <Route
              path="/admin/campaign/assigned-campaign"
              element={<AdmAssignCampaign route={"assigned-campaign"} />}
            />
            <Route path="/admin/campaign/active-campaign" element={<AdmActiveCampaign route={"active-campaign"} />} />
            <Route
              path="/admin/campaign/rejected-campaign"
              element={<AdmRejectedCampaign route={"rejected-campaign"} />}
            />
          </Route>

          {/* influencer  routes */}
          <Route path="/influencer" element={<InfDashboardCompositeComponent />}>
            <Route path="/influencer" element={<Navigate replace to="/influencer/dashboard" />} />
            <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
            <Route path="/influencer/campaign" element={<Navigate replace to="/influencer/campaign/campaign-pool" />} />
            <Route path="/influencer/campaign/campaign-pool" element={<CampaignPool />}></Route>
            <Route path="/influencer/campaign/campaign-pool/:id" element={<CampaignDetails />} />
            <Route path="/influencer/campaign/assigned-campaign" element={<AssignedCampaign />} />
            <Route path="/influencer/campaign/active-campaign" element={<ActiveCampaign />} />
            <Route path="/influencer/campaign/active-campaign/00001" element={<ActiveCampaignDetails />} />
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

          {/* Login SignUp */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup-type" element={<SignUpType />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/signin" element={<SignIn />} />
          <Route path="/admin/signup" element={<SignUpAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
