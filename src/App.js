import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/Offers" element={<Offers></Offers>} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/signin" element={<Signin></Signin>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/contact/:landlordId" element={<Contact></Contact>} />
        <Route path="/editlisting/:listingId" element={<EditListing />} />
        <Route path="/search/:searchText" element={<SearchResult />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        />
        <Route
          path="/create-listing"
          element={<CreateListing></CreateListing>}
        />
        <Route
          path="category/:categoryName/:listingId"
          element={<Listing />}
        ></Route>
        <Route path="/Profile" element={<PrivateRoute />}>
          <Route path="/Profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
