import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./context/store";
import { Auth0Provider } from "@auth0/auth0-react";
// import { domain } from "./config/auth.config";

// console.log('process.env.AUTHO_DOMAIN:', domain)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-6somxoc5z51omdrd.us.auth0.com"
      clientId="PtmTrCE0BI9SdSOqS5DlzvTEHwPOsVh4"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>
);

{
  /* <div
class="vista-create-share"
data-vista-create-id="637d6d8a0a90e048590f2019"
></div>
<script
type="text/javascript"
src="https://static.create.vista.com/js/embedded_v1.min.js?v=1.221.3"
async
></script> */
}
