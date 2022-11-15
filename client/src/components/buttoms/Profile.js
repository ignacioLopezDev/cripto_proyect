import profileLogo from "../../assets/images/user1.png";

const Profile = () => {
  return (
    <p class="dropdown-item">
      <img
        id="profile"
        src={profileLogo}
        alt="profile"
        style={{ height: 32 }}
      />{" "}
      Profile
    </p>
  );
};

export default Profile;
