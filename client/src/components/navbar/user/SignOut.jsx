import { useAuth0 } from "@auth0/auth0-react";

const SignOutButtom = () => {
  const { logout } = useAuth0();

  return (
    <a 
    class="dropdown-item"
      onClick={() => logout()}>
      Sign Out
    </a>
  );
};

export default SignOutButtom;
