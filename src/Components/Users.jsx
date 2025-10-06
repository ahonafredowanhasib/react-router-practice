import React from 'react';
import User from './User';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    // console.log(users)
    return (
        <div>
            <h1>This is Users</h1>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;