import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Chandu from '../Chandu/Chandu';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;