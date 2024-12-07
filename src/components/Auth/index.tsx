import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router";

import './auth.scss';
import '@aws-amplify/ui-react/styles.css'

const Auth = (): JSX.Element => {
  const { authStatus } = useAuthenticator((context) => [context.user]);
  if (authStatus === 'configuring') {
    return <div>Loading...</div>
  } else if (authStatus !== 'authenticated') {
    return <div className="auth-wrapper"> <Authenticator /> </div>
  } else {
    return <Navigate to="/" />
  }
}

export default Auth;