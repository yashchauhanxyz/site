import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserDashboard from "./pages/UserDashboard";
import AnomalyList from "./pages/AnomalyList";
import EditTable from "./pages/EditTable";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/AdminDashboard/AnomalyList" element={<AnomalyList />} />
          <Route path="/AdminDashboard/EditTable" element={<EditTable />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
