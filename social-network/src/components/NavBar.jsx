import React, {useEffect, useState} from 'react'
import CircleAvatar from './CircleAvatar';
import {app, auth} from '../firebase'

export default function NavBar() {
    const [isLoggedIn, setLog] = useState();

    const [menuOpen, setMenuOpen] = useState(false);

    const user = auth.currentUser;

    useEffect(() => {
        if(user) setLog(isLoggedIn);
        else setLog(!isLoggedIn);
        },[user]);
    

    const menuHandler = () => {setMenuOpen(!menuOpen)};
    const initialsHandler = (isLoggedIn) => {return isLoggedIn? user?.email.charAt(0).toUpperCase() : "?";}

    return (
        <div className='flex items-center h-[4rem] justify-between px-2 bg-blue-500 shadow-lg'>
            <div>
                <image className='w-16 h-16' src="" alt="logo" />
            </div>
            <div>
                <h1 className='text-4xl font-bold text-white' >Social Network</h1>
            </div>
            <div>
            <CircleAvatar  firstLetter={initialsHandler(isLoggedIn)} onclick={menuHandler}/>
            </div>
            <div className={`absolute right-2 top-20 ${menuOpen? "block" : "hidden"}`}>
                <div className='bg-green-400 p-4 rounded-full w-10 h-10 flex items-center justify-center font-bold'>{initialsHandler(isLoggedIn)}</div>
                <h2>{isLoggedIn? user?.email : ""}</h2>
                <hr></hr>
                <div>
                    <button>Settings</button> <br/>
                    <button>{isLoggedIn? 'Sign Out' : 'Sign In'}</button>
                </div>
            </div>
        </div>
    )
}