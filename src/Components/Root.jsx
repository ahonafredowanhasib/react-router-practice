import React from 'react';
import Hreader from './Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Components/All Css/Root.css'


const Root = () => {

    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)
    
    return (
        <div>
            <Hreader></Hreader>

            <div style={{ display: 'flex', gap: '10px' }}>
                <Sidebar></Sidebar>
                {
                    isNavigating && <span>Loading...</span>
                }
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;