import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/SignupPage" element={<SignupPage/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
