import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminDashboardCompositeComponent from "./AdminDashboardCompositeComponent";
import InfDashboardCompositeComponent from "./InfDashboardCompositeComponent";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import AdmActiveCampaign from "./pages/Admin/Campaign/ActiveCampaign";
import AdmAssignCampaign from "./pages/Admin/Campaign/AssignCampaign";
import AdmNewCampaign from "./pages/Admin/Campaign/NewCampaign";
import AdmRejectedCampaign from "./pages/Admin/Campaign/RejectedCampaign";
import AdminDashBoard from "./pages/Admin/DashBoard";
import InfActiveUser from "./pages/Admin/Influencer/InfActiveUser";
import InfDetails from "./pages/Admin/Influencer/InfDetails";
import InfNewUser from "./pages/Admin/Influencer/InfNewUser";
import InfProfile from "./pages/Admin/Influencer/InfProfile";
import InfRejectedUser from "./pages/Admin/Influencer/InfRejectedUser";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";
import ActiveCampaign from "./pages/influencer/Dashboard/ActiveCampaign";
import AssignedCampaign from "./pages/influencer/Dashboard/AssignedCampaign";
import Bids from "./pages/influencer/Dashboard/Bids";
import CampaignDetails from "./pages/influencer/Dashboard/CampaignDetails";
import CampaignPool from "./pages/influencer/Dashboard/CampaignPool";
import CompletedCampaign from "./pages/influencer/Dashboard/CompletedCampaign";
import Dashboard from "./pages/influencer/Dashboard/Dashboard";
import Earning from "./pages/influencer/Dashboard/Earning";
import Statement from "./pages/influencer/Dashboard/Statement";
import Support from "./pages/influencer/Dashboard/Support";
import Home from "./pages/influencer/Home";
import SignUp from "./pages/influencer/SignUp/SignUp";

function App() {
  return (
    <div className="h-full min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfluencerCompositeComponent />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminDashboardCompositeComponent />}>
            <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/dashboard" element={<AdminDashBoard />} />
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
            <Route path="/influencer/dashboard" element={<Dashboard />} />
            <Route path="/influencer/campaign" element={<Navigate replace to="/influencer/campaign/campaign-pool" />} />
            <Route path="/influencer/campaign/campaign-pool" element={<CampaignPool />}></Route>
            <Route path="/influencer/campaign/campaign-pool/:id" element={<CampaignDetails />} />
            <Route path="/influencer/campaign/assigned-campaign" element={<AssignedCampaign />} />
            <Route path="/influencer/campaign/active-campaign" element={<ActiveCampaign />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
