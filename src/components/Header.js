import React, { useEffect } from "react";
import { auth, getAuth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  var user = auth.currentUser;

  useEffect(() => {
    if (user) {
      console.log("Loggdin");
    } else {
      console.log("not logged in");
    }
  });

  const navigate = useNavigate();

  const logoutfunc = () => {
    if (window.confirm("Do you Want to Log Out ?")) {
      signOut(auth)
        .then(() => {
          toast.success("Logout Successful !");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Something Went wrong !");
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg p-2 navdabba shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CCV Skill Based Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid d-flex justify-content-end">

                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>

                <a className="nav-link" aria-current="page" href="/whydonate">
                  Why Donate Blood
                </a>

                <a className="nav-link" aria-current="page" href="/donor">
                  Become a Donor
                </a>

                <a className="nav-link" aria-current="page" href="/acceptor">
                  Need Blood
                </a>

              {/* <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  About
                </a>
              </li> */}
              
              {user ? 
              (
                <>
                <a className="nav-link" aria-current="page" href="/profile">
                    Profile
                  </a>
                <a
                    className="nav-link "
                    onClick={logoutfunc}
                    style={{ cursor: "pointer" }}
                  >
                      Logout
                    </a>
                </>


              ) : (
                  <a className="nav-link" href="/login">
                    Login
                  </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
