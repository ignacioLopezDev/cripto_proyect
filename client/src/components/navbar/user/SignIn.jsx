import {useAuth0} from "@auth0/auth0-react"

const SignInButtom = () => {
    const {loginWithRedirect, user} = useAuth0()

    console.log(user)
    return (
        <a 
        class="dropdown-item" 
        onClick={() => loginWithRedirect()}>
        Log In
      </a>
    )
}

export default SignInButtom