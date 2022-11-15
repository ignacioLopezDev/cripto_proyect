import { useAuth0 } from "@auth0/auth0-react";

// BUTTOMS
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

// IMAGES
import userLogo from "../../assets/images/user2.png";

export const Loggin = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <li class="nav-item dropdown ">
      <p
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
            alt="m"
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
      </p>
      <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end ">
        <li>{isAuthenticated ? <Profile /> : <></>}</li>
        <li>{isAuthenticated ? <SignOut /> : <SignIn />}</li>
      </ul>
    </li>
  );
};
