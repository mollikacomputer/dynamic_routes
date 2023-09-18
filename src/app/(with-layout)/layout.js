import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <p>Nav Bar items here</p>
            {children}
        </div>
    );
};

export default layout;