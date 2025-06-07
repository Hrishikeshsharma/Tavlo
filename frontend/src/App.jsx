import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import BrowseResto from "./components/BrowseResto";
import TopNav from "./components/TopNav";
import RestoLogin from "./components/RestoLogin";
import QuickLinks from "./components/QuickLinks";
import RestoSignup from "./components/RestoSignup";
import AuthProvider from "./contexts/AuthContext";
import BookingsList from "./components/BookingsList";
import RestoDashboard from "./components/RestoDashboard";
import Menu from "./components/Menu";
import PastOrders from "./components/PastOrders";
import AddRestaurant from "./components/AddRestaurant";
import ManageResto from "./components/ManageResto";
import Tavlo from "./components/Tavlo";
import { Navigate } from "react-router-dom";
import BookNow from "./components/BookNow";

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          {/*} <nav>
            <Link to="/home">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/browse">Restaurants</Link>
            <Link to="/restologin">Restaulogin</Link>
            <Link to="/quicklinks"></Link>
            <Link to="/restosignup"></Link>
            <Link to="/userbookings">user bookings</Link>
            <Link to="/restodashboard">RestoDashBoard</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/pastorders">PastOrders</Link>
            <Link to="/addresto">addresto</Link>
            <Link to="/manageresto">Manage resto</Link>
            <link to="/tavlo">Tavlo</Link>
          </nav>*/}

          <Routes>
            <Route
              path="/"
              element={<Navigate to={"/home"}></Navigate>}
            ></Route>
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
            <Route path="/pastorders" element={<PastOrders />} />
            <Route
              path="/addresto"
              element={<AddRestaurant></AddRestaurant>}
            ></Route>
            <Route
              path="/manageresto"
              element={<ManageResto></ManageResto>}
            ></Route>
            <Route path="tavlo" element={<Tavlo></Tavlo>}></Route>
            <Route path="/book" element={<BookNow />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
