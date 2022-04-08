import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup-type" element={<SignUpType />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
