import React, { useEffect, useState } from 'react';

export default function Home() {
    function getFromLocalStorage(name) {
        let item = localStorage.getItem(name);

        item = JSON.parse(item);

        if (item == null) return false;
        else return item;
    }

    let user = getFromLocalStorage("user");

    //<h1 className='text-4xl font-bold text-blue-600'>The Social Network</h1>

    return (
        <div className='flex justify-center  w-full h-screen'>
            <div className='flex-column gap-4 p-4 place-items-start justify-center'>
                <h3 className='text-2xl font-bold text-blue-600'>Your profile:</h3>
                <p><b>Name: &nbsp;&nbsp;</b>{user.name}</p>
                <p><b>Email: &nbsp;&nbsp;</b>{user.email}</p>
                <p><b>Password: &nbsp;&nbsp;</b>{user.password}</p>
                <p><b>Gender: &nbsp;&nbsp;</b>{user.gender}</p>
            </div>
        </div>
    )
}
