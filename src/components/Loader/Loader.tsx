import React from 'react';
//styles
import './loader.css'

const Loader = () => {
    return (
        <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default Loader;