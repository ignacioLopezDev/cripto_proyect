import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

// REDUX SLICE
import { loginPost } from "../service/loginUserSlice";

// COMPONENTS
import { SmallNavbar } from "./SmallNavbar";
import { Settings } from "./buttoms/Settings";
import { Loggin } from "./buttoms/Loggin";


export const Navbar = () => {
  // USE DISPATCH
  const dispatch = useDispatch();

  // AUTH0 AUTENTICATION
  const { user } = useAuth0();

  // USE EFFECT - AsyncThunk login user
  useEffect(() => {
    dispatch(loginPost(user));
  }, [user]);

  return (
    <nav className="navbar navbar-expand fixed-top container-fluid ">
      <SmallNavbar />
      <div id="navbarTwo" className="container d-flex flex-row-reverse">
        <ul class="navbar-nav">
          <Settings />
          <Loggin />
        </ul>
      </div>
    </nav>
  );
};
