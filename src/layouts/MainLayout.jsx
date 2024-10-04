import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
    return (
        <div>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;