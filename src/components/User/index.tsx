import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router";

const User = (): JSX.Element => {
  const { user, signOut, authStatus } = useAuthenticator((context) => [context.user]);

  if (authStatus === 'configuring' || (authStatus === 'authenticated' && !user)) {
    return <div>Loading...</div>
  }

  return (
    <>
      {authStatus !== 'authenticated' ? <Navigate to="/auth" /> : (
        <div>
          <h2>User profile, {user?.signInDetails?.loginId}!</h2>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </>
  )
}

export default User;