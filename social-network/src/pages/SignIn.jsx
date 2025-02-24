import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { app, auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //const user = userCredential.user;

      navigate("/home");
    })
    .catch((err) =>{
      setError(err.code);
      console.log(err.code + "   " + err.message);
      //const errorCode = err.code;
      //const errorMessage = err.message;
    })
  }

  return (
    <div className='grid justify-corner items-center w-full h-screen'>
      <div className='grid gap-4 p-4'>
      <h1 className='text-4xl font-bold text-blue-600'>The Social Network</h1>
        <form className='grid justify center mt-10 px-[50rem]'>
           <input className='border border-blue-700 p-2 rounded-full' placeholder='Email' type="text" onChange={(e) => { setEmail(e.target.value) }} minLength={1} required />
           <input className='border border-blue-700 p-2 rounded-full mt-4' placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }} minLength={6} required />
        </form>

        <div className='text-red-700' >
          <b>{error}</b>
        </div>

        <input className='bg-blue-700 w-60 h-10 m-auto rounded-full text-white font-bold mt-4 hover:scale-110 transition-all duration-100 active:scale-90 shadow-lg shadow-blue-300' onClick={handleSignIn} value="Sign In" type="button" />
        
        <p>
          Not Registered yet? <span onClick={() => navigate("/")} className='text-blue-700 cursor-pointer hover:font-bold hover:underline'>Sign up!</span>
        </p>
        
      </div>
    </div>
  )
}
