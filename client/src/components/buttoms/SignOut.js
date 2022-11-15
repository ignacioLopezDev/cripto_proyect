import { useAuth0 } from "@auth0/auth0-react";
import signOutLogo from "../../assets/images/sign-out.png";

const SignOutButtom = () => {
  const { logout } = useAuth0();

  return (
    <p class="dropdown-item" onClick={() => logout()}>
      <img
        id="sign-out"
        src={signOutLogo}
        alt="sign-out"
        style={{ height: 30 }}
      />{" "}
      Sign Out
    </p>
  );
};

export default SignOutButtom;
