import React from 'react';

const RequiredElement = ({ children }) => (
    <span className="badge badge-secondary badge-pill">
        {children}
    </span>
)

export default RequiredElement;