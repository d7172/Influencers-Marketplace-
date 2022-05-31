import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import InfDashboardCompositeComponent from "./InfDashboardCompositeComponent";
import BrandDashboardCompositeComponent from "./BrandDashboardCompositeComponent";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";
import ActiveCampaign from "./pages/influencer/Dashboard/ActiveCampaign";
import AssignedCampaign from "./pages/influencer/Dashboard/AssignedCampaign";
import Bids from "./pages/influencer/Dashboard/Bids";
import AdminActiveBids from './pages/Admin/ActiveBids/Bids';
import AdminBidDetails from './pages/Admin/ActiveBids/BidDetails';
import AdminRejectedCampaign from "./pages/Admin/RejectedCampaign/RejectedCampaign";
import AdminRejectedCampaignDetails from "./pages/Admin/RejectedCampaign/RejectedCampaignDetails";
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
import NewCampaign from "./pages/brand/NewCampaign";
import BrandActiveCampaign from "./pages/brand/ActiveCampaign";
import BrandAssignedCampaign from "./pages/brand/AssignedCampaign";
import RejectedCampaign from "./pages/brand/RejectedCampaign";
import Earnings from "./pages/Admin/Transaction/Earnings";

function App() {
  return (
    <div className="h-full min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfluencerCompositeComponent />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/influencer" element={<InfDashboardCompositeComponent />}>
            <Route path="/influencer" element={<Navigate replace to="/influencer/dashboard" />} />
            <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
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
          <Route path="/brand" element={<BrandDashboardCompositeComponent />}>
            <Route path="/brand" element={<Navigate replace to="/brand/dashboard" />} />
            <Route path="/brand/dashboard" element={<BrandDashboard />} />
            <Route path="/brand/campaign" element={<Navigate replace to="/brand/campaign/new-campaign" />} />
            {/* <Route path="/brand/campaign/campaign-pool" element={<CampaignPool />}></Route>
            <Route path="/brand/campaign/campaign-pool/:id" element={<CampaignDetails />} /> */}
            <Route path="/brand/campaign/new-campaign" element={<NewCampaign />}></Route>
            <Route path="/brand/campaign/assigned-campaign" element={<BrandAssignedCampaign />} />
            <Route path="/brand/campaign/active-campaign" element={<BrandActiveCampaign />} />
            <Route path="/brand/campaign/rejected-campaign" element={<RejectedCampaign />} />
            <Route path="/brand/campaign/new-campaign/:id" element={<BrandCampaignDetails />} />
            <Route
              path="/brand/transactions"
              element={<Navigate replace to="/brand/transactions/earning" />}
            />
            <Route path="/brand/transactions/earning" element={<BrandEarning />} />
            <Route path="/brand/transactions/statement" element={<BrandStatement />} />

            <Route path="/brand/support" element={<Support />} />
            <Route path="/brand/admin/active-bids" element={<AdminActiveBids />} />
            <Route path="/brand/admin/active-bids/:id" element={<AdminBidDetails />} />
            <Route path="/brand/admin/rejected-campaign" element={<AdminRejectedCampaign/>}/>
            <Route path="/brand/admin/rejected-campaign/:id" element={<AdminRejectedCampaignDetails/>}/>
            <Route path="/brand/admin/transaction" element={<Navigate replace to="/brand/admin/transaction/earnings" />}/>
            <Route path="/brand/admin/transaction/earnings" element={<Earnings/>}/>
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
