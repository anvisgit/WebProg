// React component for form
import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Form Component</h2>
        </div>
    );
};

export default FormComponent;
