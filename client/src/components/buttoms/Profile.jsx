import profileLogo from "../../assets/images/user1.png"



const Profile = () => {
    return (
        <a 
        class="dropdown-item" >
        <img id="profile" src={profileLogo} alt="profileLogo" style={{height:32}} /> Profile
      </a>

    )

}

export default Profile