import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import ChPercentOptions from "./configurations/ChPercentOptions";
import CurrencyOptions from "./configurations/CurrencyOptions";
import SortOptions from "./configurations/SortOptions";
import SignIn from "./user/SignIn";
import SignOut from "./user/SignOut";

import userLogo from "./images/usuario2.png";
import settingLogo from "./images/gear2.png";
import Profile from "./user/Profile";
import { useDispatch } from "react-redux";
import { newUser } from "../../features/userSlice";
import { userPost } from "../../features/loginUserSlice";


export const Navbar = () => {
  // AUTH0 AUTENTICATION
  const { isAuthenticated, user, isLoading } = useAuth0();
  // console.log(isAuthenticated);
  console.log("USUARIO",user);

  // USE DISPATCH
  const dispatch = useDispatch()

  // USE EFFECT
  useEffect(() => {
    dispatch(newUser(user))
    // console.log("Use Effect User", user);
    dispatch(userPost(user))
  }, [user]);

  return (
    <nav className="navbar navbar-expand fixed-top container-fluid ">
      <div id="navbarOne" className="container">
        <Link to="/" id="navbarOne" className="navbar-brand ">
          Crypto App
        </Link>
      </div>
      <div id="navbarTwo" className="container d-flex flex-row-reverse">
        <ul class="navbar-nav">
          {/* <li class="nav-item dropdown"> */}
          <li class="nav-item dropdown ">
            <a
              class="nav-link"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: 0 }}
            >
              <img
                src={settingLogo}
                alt={"settingLogo"}
                class="rounded-circle border border-secondary"
              />
            </a>
            <ul class="dropdown-menu  dropdown-menu-dark dropdown-menu-end ">
              <li>
                <a class="dropdown-item">POrtssssse</a>
              </li>
              <li>
                <a class="dropdown-item">POrte</a>
              </li>
              <li>
                <a class="dropdown-item">POrte</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown ">
            <a
              class="nav-link"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: 0 }}
            >
              {" "}
              {isAuthenticated ? (
                <img
                  src={user.picture}
                  alt="userLogo"
                  class="rounded-circle border border-secondary"
                  style={{ padding: 0 }}
                />
              ) : (
                <img
                  src={userLogo}
                  alt="userLogo"
                  class="rounded-circle border border-secondary"
                />
              )}
            </a>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end ">
              <li>{isAuthenticated ? <Profile /> : <></>}</li>
              <li>{isAuthenticated ? <SignOut /> : <SignIn />}</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

{
  /* <nav className="navbar navbar-expand fixed-top   ">
      <ul className="navbar-nav ">
        <li className="nav-iteam dropdown">
          <a className="nav-link dropdown-toggle" >ddd</a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="/#"
          >
            CurrencyOptions
          </a>
          <ul className="dropdown-menu">
            <CurrencyOptions />
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="/#"
          >
            Sort
          </a>
          <ul className="dropdown-menu">
            <SortOptions />
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="/#"
          >
            Percent
          </a>
          <ul className="dropdown-menu">
            <ChPercentOptions />
          </ul>
        </li>
        <li>{isAuthenticated ? <LogOut /> : <Loggin />}</li>
        <li>{isAuthenticated ? 
        <img src={user.picture} alt={user.nickname} style={{height: "1.7em"}}/> : <></>
        // <>Hello {user.nickname}<>} : <></>
        }
        </li>
      </ul>
      
    </nav> */
}
