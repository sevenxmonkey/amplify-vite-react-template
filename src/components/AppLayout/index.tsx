import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router";

const AppLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  if (authStatus === 'configuring' || (authStatus === 'authenticated' && !user)) {
    return <div>Loading...</div>
  }

  return (
    <div >
      AppLayout
      {authStatus !== 'authenticated' ?
        <button onClick={() => navigate('/auth')}>Login</button>
        : <p>Feeding content for user: {user?.signInDetails?.loginId}!</p>}
    </div>
  )
}

export default AppLayout;