import { useAuth0 } from "@auth0/auth0-react";

// IMAGES
import signInLogo from "../../assets/images/sign-in.png";

const SignInButtom = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <p class="dropdown-item" onClick={() => loginWithRedirect()}>
      <img 
      id="sign-in" 
      src={signInLogo} 
      alt="sign-in" 
      style={{ height: 32 }} />
      Log In
    </p>
  );
};

export default SignInButtom;
