https://auth0.com/
https://www.youtube.com/watch?v=DRbXvN10_XA&t=508&ab_channel=FaztCode

.env:
# AUTH0 CONFIG
AUTH0_DOMAIN= dev-6somxoc5z51omdrd.us.auth0.com
AUTH0_CLIENTID= PtmTrCE0BI9SdSOqS5DlzvTEHwPOsVh4
AUTHO_SECRET=

npm install @auth0/auth0-react

index.js:
   <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    > 

Navbar
    import { useAutho } from "@auth0/auth0-react";
    const {loginWithRedirect} = useAutho()
    <button onClick={() => {loginWithRedirect}}>klkklk</button>