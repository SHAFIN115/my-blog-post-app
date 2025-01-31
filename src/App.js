import React from "react";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();
  const redirectToCognitoLogin = () => {
    const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_COGNITO_REDIRECT_URI;
    const cognitoDomain = process.env.REACT_APP_COGNITO_DOMAIN;

    const loginUrl = `${cognitoDomain}/login?client_id=${clientId}&response_type=code&scope=email+openid&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = loginUrl;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={redirectToCognitoLogin}>Redirect to Cognito Login</button>
    </div>
  );
}

export default App;
