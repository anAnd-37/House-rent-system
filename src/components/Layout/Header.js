import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import "../../styles/Header.css";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = ()=>{
     navigate("/search/"+text)
  }

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-sm-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <BsBuilding size={30} className="me-2" /> House Marketplace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li classname="nav-item">
                <form>
                  <div classname="row">
                    <input
                      type="text"
                      classname=""
                      id="inlineFormInput"
                      placeholder="Search  Eg. 'Assam'"
                      style={{ padding: "5px", marginRight: "5px" }}
                      onChange={handleChange}
                    />
                    {/* <div style={{ padding: "5px", marginRight: "10px" }}> */}
                    <FcSearch
                      style={{
                        fontSize: "2em",
                        paddingRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleSubmit}
                    ></FcSearch>
                  </div>
                </form>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  aria-current="page"
                  to="/"
                >
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/offers"
                >
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
