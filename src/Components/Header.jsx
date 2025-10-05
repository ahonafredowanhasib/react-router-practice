import React from 'react';
import { Link, NavLink } from 'react-router';

const Hreader = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav  style={{ display: 'flex', gap: '10px' }}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
            </nav>
        </div>
    );
};

export default Hreader;