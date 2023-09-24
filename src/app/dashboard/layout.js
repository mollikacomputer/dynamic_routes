import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;