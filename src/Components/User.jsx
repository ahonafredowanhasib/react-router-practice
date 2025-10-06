import React, { Suspense } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from './UserDetails2';

const User = ({ user }) => {

    const [showInfo, setShowInfo] = useState(false)

    const { id, name, email, phone } = user
     const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>

                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;