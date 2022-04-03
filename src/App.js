import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfluencerCompositeComponent from "./InfluencerCompositeComponent";
import Login from "./pages/common/Login";
import SignUpType from "./pages/common/SignUpType";

function App() {
  return (
    <div className="h-full min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<InfluencerCompositeComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-type" element={<SignUpType />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
