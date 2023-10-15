import React from 'react';

export const metadata = {
    title: 'Services',
    description: 'this is services page',
};

const ServicesLayout = ({ children }: React.ReactNode) => {
    return (
        <>
            <div>
                This is layout for the services page
                {children}
            </div>
        </>
    );
};

export default ServicesLayout;
