import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Home from "./components/Home";

function App() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  return (
    <div>
      <h1>Website header</h1>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Authenticator /> : <Home />}
    </div>
  );
}

export default App;
