import React from 'react';

const Container = ({ color }) => {
    const containerStyle = {
        backgroundColor: color,
        width: '100%',
        height: '200px',
        border: '1px solid black',
    };

    return <div style={containerStyle}></div>;
};

export default Container;
