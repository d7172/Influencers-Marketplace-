import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import InfDashboardCompositeComponent from "./InfDashboardCompositeComponent";
import BrandDashboardCompositeComponent from "./BrandDashboardCompositeComponent";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";
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
import AddNewCampaign from './pages/brand/AddNewCampaign'

import AdminDashBoard from "./pages/Admin/DashBoard";
import AdminDashboardCompositeComponent from "./AdminDashboardCompositeComponent";
import AdmCampaignDetails from "./pages/brand/CampaignDetails";
import AdmNewCampaign from "./pages/Admin/NewCampaign/NewCampaign";
import AdmActiveCampaign from "./pages/Admin/ActiveCampaign/ActiveCampaign";
import AdmActiveBids from './pages/Admin/ActiveBids/Bids';
import AdmBidDetails from './pages/Admin/ActiveBids/BidDetails';
import AdmAssignedCampaign from "./pages/Admin/AssignedCampaign/AssignedCampaign";
import AdmRejectedCampaign from "./pages/Admin/RejectedCampaign/RejectedCampaign";
import AdmRejectedCampaignDetails from "./pages/Admin/RejectedCampaign/RejectedCampaignDetails";
import AdmPayment from "./pages/Admin/Transaction/Payments"
import BrandPaymentOngoing from "./pages/Admin/Transaction/BrandPaymentOngoing";
import AdmEarning from "./pages/Admin/Transaction/Earnings"
import AdmStatement from "./pages/Admin/Transaction/Statements"
// import AdmPaymentOngoing from "./pages/Admin/Transaction/AdmPaymentOngoing"

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

            <Route path="/admin/active-bids" element={<AdmActiveBids />} />
            <Route path="/admin/active-bids/:id" element={<AdmBidDetails />} />

            <Route path="/admin/campaign/new-campaign" element={<AdmNewCampaign route={"new-campaign"} />} />
            <Route path="/admin/campaign/new-campaign/:id" element={<AdmCampaignDetails route={"new-campaign"} />} />
            <Route path="/admin/campaign/new-campaign/add" element={<AdmCampaignDetails route={"new-campaign"} />} />
            <Route path="/admin/campaign/active-campaign" element={<AdmActiveCampaign route={"active-campaign"} />} />
            <Route path="/admin/campaign/assigned-campaign" element={<AdmAssignedCampaign route={"assigned-campaign"} />} />
            <Route path="/admin/campaign/rejected-campaign" element={<AdmRejectedCampaign route={"rejected-campaign"} />} />
            <Route path="/admin/campaign/rejected-campaign/:id" element={<AdmRejectedCampaignDetails route={"rejected-campaign"} />} />

            <Route path="/admin/transaction" element={<Navigate replace to="/admin/transaction/earning" />} />
            <Route path="/admin/transaction/earning" element={<AdmEarning />} />
            <Route path="/admin/transaction/payments" element={<AdmPayment route="payment" />} />
            <Route path="/admin/transaction/payments/:id" element={<BrandPaymentOngoing route="payment" />} />
            <Route path="/admin/transaction/statement" element={<AdmStatement route="statement" />} />
            {/* <Route path="/admin/transactions/payment-ongoing" element={<AdmPaymentOngoing route={"payment-ongoing"} />}/> */}
          </Route>

          {/* Influencer routes */}
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

          {/* Brand routes */}
          <Route path="/brand" element={<BrandDashboardCompositeComponent />}>
            <Route path="/brand" element={<Navigate replace to="/brand/dashboard" />} />
            <Route path="/brand/dashboard" element={<BrandDashboard />} />
            <Route path="/brand/campaign" element={<Navigate replace to="/brand/campaign/new-campaign" />} />
            {/* <Route path="/brand/campaign/campaign-pool" element={<CampaignPool />}></Route>
            <Route path="/brand/campaign/campaign-pool/:id" element={<CampaignDetails />} /> */}

            <Route path="/brand/campaign/new-campaign" element={<BrandNewCampaign />}></Route>
            <Route path="/brand/campaign/new-campaign/:id" element={<AddNewCampaign />} />
            <Route path="/brand/campaign/new-campaign/add" element={<AddNewCampaign />} />

            <Route path="/brand/campaign/assigned-campaign" element={<BrandAssignedCampaign />} />
            <Route path="/brand/campaign/assigned-campaign/:id" element={<BrandCampaignDetails route={"assigned-campign"} />} />

            <Route path="/brand/campaign/active-campaign" element={<BrandActiveCampaign />} />
            <Route path="/brand/campaign/active-campaign/:id" element={<BrandCampaignDetails route={"active-campaign"} />} />

            <Route path="/brand/campaign/rejected-campaign" element={<BrandRejectedCampaign />} />
            <Route path="/brand/campaign/rejected-campaign/:id" element={<BrandCampaignDetails route={"rejected-campaign"} />} />

            <Route path="/brand/transactions" element={<Navigate replace to="/brand/transactions/earning" />} />
            <Route path="/brand/transactions/earning" element={<Earning />} />
            <Route path="/brand/transactions/statement" element={<Statement />} />

            <Route path="/brand/support" element={<Support />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup-type" element={<SignUpType />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
