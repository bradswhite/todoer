//import { useState, useEffect } from 'preact/hooks'

import axios from 'axios';

//import { /*isAuth,*/ testFn } from '../serviceFns/authFns';
/*import Auth from './Auth';

import {
  listTodos,
  listTodo,
  createTodo,
  updateTodo,
  checkTodo,
  deleteTodo
} from '../serviceFns/todoFns';
 */

export function App() {
  //const [ authStatus, setAuthStatus ] = useState<boolean>(isAuth());

  //useEffect(() => {
  //testFn();
  //}, []);
  //const url = 'https://go-todo-api-production-4ec6.up.railway.app/auth/';

/*try {
  axios.post(url + 'login', {
    Email: 'bradscottwhite@gmail.com',
    Password: 'password'
  }, {
    withCredentials: true
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
} catch (err) {
  console.log('errr', err)
}*/
  const ping = async () => {
    axios.get('https://go-todo-api-production-4ec6.up.railway.app/todo/list', {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MSwiZXhwIjoxNjkzNDY1NzI3fQ.K7gY5r588TXm0sZeuFGl2l6CMyyPKSdyx0F_KUjad9s',
      withCredentials: true,
      mode: 'no-cors'
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/*authStatus ? (
        <>Hello Signed in user!!!</>
      ) : (
        <Auth setAuthStatus={setAuthStatus} />
      )*/}

      <h1 className='text-5xl text-red-800'>Howdy!</h1>
      <button className='bg-red-600 rounded-2xl m-10' onClick={ping}>Ping</button>
    </main>
  )
}
