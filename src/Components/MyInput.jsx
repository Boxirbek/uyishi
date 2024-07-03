import React from 'react';

const MyInput = ({ setText, setColor }) => {
    return (
        <div>
            <input
                type="text"
                className="border rounded p-2 m-2"
                onChange={(e) => {
                    if (setText) setText(e.target.value);
                    if (setColor) setColor(e.target.value);
                }}
                placeholder="Enter text or color..."
            />
        </div>
    );
};

export default MyInput;
