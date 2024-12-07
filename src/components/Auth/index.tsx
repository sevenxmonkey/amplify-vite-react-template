import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router";

const Auth = (): JSX.Element => {
  const { authStatus } = useAuthenticator((context) => [context.user]);
  if (authStatus === 'configuring') {
    return <div>Loading...</div>
  }

  return (
    <div>
      {authStatus !== 'authenticated' ? <Authenticator /> : <Navigate to="/" />}
    </div>
  )
}

export default Auth;