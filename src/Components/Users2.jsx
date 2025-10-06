import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log("object",users)
    
    return (
        <div>
            <h1>This is User2</h1>
        </div>
    );
};

export default Users2;