import { useAuth0 } from "@auth0/auth0-react";

import ChPercentOptions from "./ChPercentOptions";
import CurrencyOptions from "./CurrencyOptions";
import SortOptions from "./SortOptions";
import Loggin from "./LogIn";
import LogOut from "./logOut";

export const Navbar = () => {
  // AUTH0 AUTENTICATION
  const { isAuthenticated, user } = useAuth0();

  console.log(isAuthenticated);
  console.log(user);

  return (
    <nav className="navbar navbar-expand fixed-top   ">
      <ul className="navbar-nav ">
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
      
    </nav>
  );
};
