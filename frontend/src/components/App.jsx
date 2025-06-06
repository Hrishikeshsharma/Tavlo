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
import "../src/components/TopNav.css";
import RestoLogin from "./components/RestoLogin";
import QuickLinks from "./components/QuickLinks";
import RestoSignup from "./components/RestoSignup";
import { AuthProvider } from "./contexts/authContext";
import BookingsList from "./components/BookingsList";
import RestoDashboard from "./components/RestoDashboard";
import Menu from "./components/Menu";

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/browse">Restaurants</Link>
            <Link to="/restologin">Restaulogin</Link>
            <Link to="/quicklinks"></Link>
            <Link to="/restosignup"></Link>
            <Link to="/userbookings">user bookings</Link>
            <Link to={"/restodashboard"}>RestoDashBoard</Link>
            <Link to={"/menu"}>Menu</Link>
          </nav>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/browse" element={<BrowseResto />}></Route>
            <Route
              path="/restologin"
              element={<RestoLogin></RestoLogin>}
            ></Route>
            <Route
              path="/quicklinks"
              element={<QuickLinks></QuickLinks>}
            ></Route>

            <Route
              path="/restosignup"
              element={<RestoSignup></RestoSignup>}
            ></Route>
            <Route
              path="/userbookings"
              element={<BookingsList></BookingsList>}
            ></Route>
            <Route
              path="/restodashboard"
              element={<RestoDashboard></RestoDashboard>}
            ></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
