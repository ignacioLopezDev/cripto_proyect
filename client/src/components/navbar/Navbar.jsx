import { useAuth0 } from "@auth0/auth0-react";

import ChPercentOptions from "./configurations/ChPercentOptions";
import CurrencyOptions from "./configurations/CurrencyOptions";
import SortOptions from "./configurations/SortOptions";
import Loggin from "./user/LogIn";
import LogOut from "./user/LogOut";

import userLogo from "./user/images/usuario.png";
import settingLogo from "./user/images/gear.png";

export const Navbar = () => {
  // AUTH0 AUTENTICATION
  const { isAuthenticated, user } = useAuth0();

  console.log(isAuthenticated);
  console.log(user);

  return (
    <nav className="navbar navbar-expand fixed-top  container-fluid ">
      <div className="container" id="navbarOne">
        <div class="navbar-brand " href="http://localhost:3000/">
          Navbar
        </div>
      </div>
      <div className="container d-flex flex-row-reverse" id="navbarTwo">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
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
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <a class="dropdown-item">POrte</a>
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
              <img
                src={userLogo}
                alt="userLogo"
                class="rounded-circle border border-secondary"
              />
            </a>
            <ul class="dropdown-menu dropdown-menu-dark ">
              <li>
                <a class="dropdown-item">Login</a>
              </li>
              <li>
                <a class="dropdown-item">Profile</a>
              </li>
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
