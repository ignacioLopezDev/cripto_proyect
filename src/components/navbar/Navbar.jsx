import ChPercentOptions from "./ChPercentOptions";
import CurrencyOptions from "./CurrencyOptions";
import SortOptions from "./SortOptions";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand fixed-top   ">

        
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/#">
              CurrencyOptions
              </a>
              <ul className="dropdown-menu">
                <CurrencyOptions/>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/#">
              Sort
              </a>
              <ul className="dropdown-menu">
                <SortOptions/>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/#">
              Percent
              </a>
              <ul className="dropdown-menu">
                <ChPercentOptions/>
              </ul>
            </li>
          </ul>
        

    </nav>
  );
};
