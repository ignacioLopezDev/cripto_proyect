import {useAuth0} from "@auth0/auth0-react"

const LogInButtom = () => {
    const {loginWithRedirect, user} = useAuth0()

    console.log(user)
    return (
        <button onClick={() => {loginWithRedirect()}}>Login</button>
    )
}

export default LogInButtom