import React from "react";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import BrowseResto from "./components/BrowseResto";
import TopNav from "./components/TopNav";
import RestoLogin from "./components/RestoLogin";
import QuickLinks from "./components/QuickLinks";
import RestoSignup from "./components/RestoSignup";
import { AuthProvider } from "./contexts/AuthContext";
import BookingsList from "./components/BookingsList";
import RestoDashboard from "./components/RestoDashboard";
import Menu from "./components/Menu";
import PastOrders from "./components/PastOrders";
import AddRestaurant from "./components/AddRestaurant";
import ManageResto from "./components/ManageResto";
import Tavlo from "./components/Tavlo";
import { Navigate, useNavigate } from "react-router-dom";
import BookNow from "./components/BookNow";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/browse" element={<BrowseResto />} />
          <Route path="/restologin" element={<RestoLogin />} />
          <Route path="/quicklinks" element={<QuickLinks />} />
          <Route path="/restosignup" element={<RestoSignup />} />
          <Route path="/userbookings" element={<BookingsList />} />
          <Route path="/restodashboard" element={<RestoDashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pastorders" element={<PastOrders />} />
          <Route path="/addresto" element={<AddRestaurant />} />
          <Route path="/manageresto" element={<ManageResto />} />
          <Route path="/tavlo" element={<Tavlo />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
