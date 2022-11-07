import profileLogo from "../images/usuario.png"


const Profile = () => {
    return (
        <a 
        class="dropdown-item" >
        <img src={profileLogo} alt="profileLogo" style={{height:32}} /> Profile
      </a>

    )

}

export default Profile