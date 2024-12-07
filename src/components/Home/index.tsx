import { useAuthenticator } from "@aws-amplify/ui-react";

const Home = (): JSX.Element => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <div>
      <h2>Welcome, {user?.signInDetails?.loginId}!</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Home;