import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router";

const AuthWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  if (authStatus === 'configuring' || (authStatus === 'authenticated' && !user)) {
    return <div>Loading...</div>
  }

  return (
    <>
      {authStatus !== 'authenticated' ? <Navigate to="/auth" /> : children}
    </>
  )
}

export default AuthWrapper;