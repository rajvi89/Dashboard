/*
import React, { useState } from 'react'
import './login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from 'firebase';

import { useNavigate } from 'react-router-dom';
const Login = () => {
   const [error, setError] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navitage  = useNavigate()
   const handleLogin = (e)=>{
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navitage("/Home")
  })
  .catch((error) => {

    setError(true)
  });

   }
  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder='username@react.com' onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
          <button type="submit">LOG IN</button>
          { error && <span>Email or password is wrong!!</span>}

        </form>
    </div>
  )
}

export default Login
*/