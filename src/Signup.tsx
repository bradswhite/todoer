import { useState } from 'preact/hooks';

import { signup } from '../serviceFns/authFns';

const Signup = ({ setAuthStatus }: { setAuthStatus: any }) => {
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const callSignup = () => {
    signup(name, email, password, setAuthStatus);
  };

  return (
    <div>
      <label>Name</label>
      <input value={name} onInput={e => setName((e.target as HTMLInputElement).value)} />

      <label>Email</label>
      <input value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)} />

      <label>Password</label>
      <input value={password} onInput={e => setPassword((e.target as HTMLInputElement).value)} />

      <button onClick={callSignup}>Signup</button>
    </div>
  );
};

export default Signup;
