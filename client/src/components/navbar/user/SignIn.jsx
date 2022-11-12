import {useAuth0} from "@auth0/auth0-react"
import signInLogo from "../images/sign-in.png"

const SignInButtom = () => {
    const {loginWithRedirect, user} = useAuth0()

    console.log(user)
    return (
        <a 
        class="dropdown-item" 
        onClick={() => loginWithRedirect()}>
        <img id="sign-in" src={signInLogo} alt="sign-in" style={{height:32}} /> Log In
      </a>
    )
}

export default SignInButtom