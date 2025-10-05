import React from 'react';
import Hreader from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Components/All Css/Root.css'
const Root = () => {
    return (
        <div>
            <Hreader></Hreader>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;