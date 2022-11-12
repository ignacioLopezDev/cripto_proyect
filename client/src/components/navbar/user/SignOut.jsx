import { useAuth0 } from "@auth0/auth0-react";
import signOutLogo from "../images/sign-out.png"

const SignOutButtom = () => {
  const { logout } = useAuth0();

  return (
    <a 
    class="dropdown-item"
      onClick={() => logout()}>
      <img id="sign-out" src={signOutLogo} alt="signOutLogo" style={{height:30}}/> Sign Out
    </a>
  );
};

export default SignOutButtom;
