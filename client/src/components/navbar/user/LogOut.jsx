import {useAuth0} from "@auth0/auth0-react"

const LogOutButtom = () => {
  const {logout} = useAuth0()

  return (
  <button onClick={() => logout()}>
    logOut
    </button>
  )
};

export default LogOutButtom;
