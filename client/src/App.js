import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Navbar } from "./components/Navbar";
import TableGrid from "./pages/coinTable/coinTable";
import Coin from "./pages/coinDetail/Coin";

import Loader from "./components/ui/loader";

const App = () => {
  // LOADER AUTH0
  const { isLoading } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <Link to="/" className="cryptoApp fixed-top">
          Crypto App
        </Link>
        <Navbar />
        {isLoading ? <Loader /> : <></>}

        <Routes>
          <Route className="container" path="/" element={<TableGrid />} />

          <Route
            // path="/cripto_proyect/coin/:id"
            path="/coin/:id"
            element={<Coin />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
