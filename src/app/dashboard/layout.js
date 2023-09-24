import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='container mx-auto' >
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;