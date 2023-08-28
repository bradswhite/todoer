//import { useState, useEffect } from 'preact/hooks'

//import axios from 'axios';

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
try {
  /*axios.get('https://go-todo-api-production-4ec6.up.railway.app/todo/list', {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MSwiZXhwIjoxNjkzMjkxMjc5fQ.W3JiTjeyfNKmULQmAfwida6FzH1S_cNUH-2OwydZD_8',
    withCredentials: true
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })*/
  (async () => {
    const res = await fetch('https://go-todo-api-production-4ec6.up.railway.app/todo/list', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MSwiZXhwIjoxNjkzMjI3NTc5fQ._A6C3-OM26AyX2kheenwlyyEFaYsf17BZEfHRWOQh94'
    }
  });
  console.log(await res.json());
  })();
} catch (err) {
  console.log('errr', err)
}

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/*authStatus ? (
        <>Hello Signed in user!!!</>
      ) : (
        <Auth setAuthStatus={setAuthStatus} />
      )*/}

      <h1 className='text-5xl text-red-800'>Howdy!</h1>
    </main>
  )
}
