import React from 'react';

const FormInput = ({ handleChange, ...otherProps }) => (
    <input className='form-control form-control-sm' onChange={handleChange} {...otherProps} />
)

export default FormInput