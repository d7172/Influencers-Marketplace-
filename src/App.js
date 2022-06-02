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
import AdmCampaignDetails from "./pages/brand/CampaignDetails";
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
// import Earnings from "./pages/Admin/Transaction/Earnings";
// import Payments from "./pages/Admin/Transaction/Payments";
import AdmRejectedCampaignDetails from "./pages/Admin/RejectedCampaign/RejectedCampaignDetails";
import AdmPayment from "./pages/Admin/Transaction/Payments";
import AdmEarning from "./pages/Admin/Transaction/Earnings";
import AdmStatement from "./pages/Admin/Transaction/Statements";
// import AdmPaymentOngoing from "./pages/Admin/Transaction/AdmPaymentOngoing"

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

          {/* Brand routes */}
          <Route path="/brand" element={<BrandDashboardCompositeComponent />}>
            <Route path="/brand" element={<Navigate replace to="/brand/dashboard" />} />
            <Route path="/brand/dashboard" element={<BrandDashboard />} />
            <Route path="/brand/campaign" element={<Navigate replace to="/brand/campaign/new-campaign" />} />
            {/* <Route path="/brand/campaign/campaign-pool" element={<CampaignPool />}></Route>
            <Route path="/brand/campaign/campaign-pool/:id" element={<CampaignDetails />} /> */}
            <Route path="/brand/campaign/new-campaign" element={<NewCampaign />}></Route>
            <Route path="/brand/campaign/new-campaign/:id" element={<BrandCampaignDetails />} />
            <Route path="/brand/campaign/assigned-campaign" element={<BrandAssignedCampaign />} />
            <Route path="/brand/campaign/active-campaign" element={<BrandActiveCampaign />} />
            <Route path="/brand/campaign/rejected-campaign" element={<RejectedCampaign />} />

            <Route path="/brand/transactions" element={<Navigate replace to="/brand/transactions/earning" />} />
            <Route path="/brand/transactions/earning" element={<Earning />} />
            <Route path="/brand/transactions/statement" element={<Statement />} />

            <Route path="/brand/support" element={<Support />} />
            {/* <Route path="/brand/admin/active-bids" element={<AdminActiveBids />} />
            <Route path="/brand/admin/active-bids/:id" element={<AdminBidDetails />} />
            <Route path="/brand/admin/new-campaign" element={<AdmNewCampaign/>}/>
            <Route path="/brand/admin/assigned-campaign" element={<AdminAssignedCampaign/>}/>
            <Route path="/brand/admin/active-campaign" element={<AdminActiveCampaign/>}/>
            <Route path="/brand/admin/rejected-campaign" element={<AdmRejectedCampaign/>}/>
            <Route path="/brand/admin/rejected-campaign/:id" element={<AdmRejectedCampaignDetails/>}/>
            <Route path="/brand/admin/transaction" element={<Navigate replace to="/brand/admin/transaction/earnings" />}/>
            <Route path="/brand/admin/transaction/earnings" element={<Earnings/>}/>
            <Route path="/brand/admin/transaction/payments" element={<Payments/>}/>
            <Route path="/brand/admin/transaction/ongoing-payment" element={<BrandPaymentOngoing/>}/> */}
          </Route>
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
