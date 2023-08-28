import { useState } from 'preact/hooks';

import Login from './Login'
import Signup from './Signup'

const Auth = ({ setAuthStatus }: { setAuthStatus: any }) => {
  const [ authType, setAuthType ] = useState<string>('login');

  return (
    <div>
      <button onClick={() => setAuthType('login')}>Login</button>
      <button onClick={() => setAuthType('signup')}>Sign up</button>

      {authType === 'login' ? (
        <Login setAuthStatus={setAuthStatus} />
      ) : (
        <Signup setAuthStatus={setAuthStatus} />
      )}
    </div>
  );
};

export default Auth;
