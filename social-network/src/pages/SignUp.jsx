import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {app , auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


export default function SignIn() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            const flag = handleProfile(user);
            
            if(flag) navigate("/signin");
        }).catch((err) => {
            setError(err.code);
            console.log(err.code + "   " + err.message)
            //const errorCode = err.code;
            //const errorMesssage = err.message;
        });
    }

    const handleProfile = async(user) =>{
        try{
            if(user){

                // db reference....

                return true;
            }
            else return false;
        }
        catch(e) {
            error = e;

            return false;
        };
    }

    return (
        <div className='grid justify-corner items-center w-full h-screen'>
            <div className='grid gap-4 p-4 p-5'>
            <h1 className='text-4xl font-bold text-blue-600'>The Social Network</h1>
                <form className='grid justify center mt-10 px-[50rem]'>
                    <input className='border border-blue-700 p-2 rounded-full' placeholder='Username' type="text" onChange={(e) => { setUserName(e.target.value) }} minLength={1} required />
                    <input className='border border-blue-700 p-2 rounded-full mt-4' placeholder='Email' type="text" onChange={(e) => { setEmail(e.target.value) }} minLength={6} required />
                    <input className='border border-blue-700 p-2 rounded-full mt-4' placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }} minLength={6} required />

                    <select onChange={(e) => { setGender(e.target.value) }} className='border border-blue-700 p-2 rounded-full mt-4' required >
                        <option>Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </form>
                

                <div className='text-red-700'>
                    <b>{error}</b>
                </div>

                <input onClick={() => { handleSignUp()}} className='bg-blue-700 w-60 h-10 m-auto rounded-full text-white font-bold mt-4 hover:scale-110 transition-all duration-100 active:scale-90 shadow-lg shadow-blue-300' value="Sign Up" type="button" />

                <p>
                    Already registered? <span onClick={() => navigate("/signin")} className='text-blue-700 cursor-pointer hover:font-bold hover:underline'>Sign in!</span>
                </p>
                
            </div>
        </div>
    )

}
