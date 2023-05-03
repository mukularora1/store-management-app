import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import AdminSideMenu from './layout/admin/AdminSideMenu';
import Header from './layout/admin/header/Header';
import Routes from './route/Index';

function App() {
    return (
        <>
            <div>
                <div style={{ zIndex: '10', position: 'relative' }}>
                    <Header />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ zIndex: '1', position: 'relative' }}>
                        <AdminSideMenu />
                    </div>
                    <div style={{ padding: '50px 7px 7px 7px', width: '100%' }}>
                        <Routes />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
