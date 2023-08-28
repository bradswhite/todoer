import axios from 'axios';

const url = 'https://go-todo-api-production-4ec6.up.railway.app/auth/';

export const isAuth = (): boolean => {
  return !!localStorage.getItem("jwt");
};

export const signup = (
  name: string,
  email: string,
  password: string,
  setAuthStatus: any
) => {
  axios.post(url + 'signup', {
    Name: name,
    Email: email,
    Password: password
  }, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(({ data }) => {
      console.log('User signed up successfully');
      localStorage.setItem('jwt', data.auth.token);
      setAuthStatus(true);
    })
    .catch(err => {
      console.error('User signed up failed', err);
    });
};

export const login = (
  email: string,
  password: string,
  setAuthStatus: any
) => {
  axios.post(url + 'login', {
    Email: email,
    Password: password
  }, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(({ data }) => {
      console.log('User login successfully');
      localStorage.setItem('jwt', data.auth.token);
      setAuthStatus(true);
    })
    .catch(err => {
      console.error('User logged in failed', err);
    });
};
