import { useState } from 'preact/hooks';

import { login } from '../serviceFns/authFns';

const Login = ({ setAuthStatus }: { setAuthStatus: any }) => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const callLogin = () => {
    login(email, password, setAuthStatus);
  };

  return (
    <div>
      <label>Email</label>
      <input value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)} />

      <label>Password</label>
      <input value={password} onInput={e => setPassword((e.target as HTMLInputElement).value)} />

      <button onClick={callLogin}>Login</button>
    </div>
  );
};

export default Login;
