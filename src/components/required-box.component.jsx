import React from 'react';

const RequiredElement = ({ children }) => (
    <span className="badge badge-danger">
        {children}
    </span>
)

export default RequiredElement;