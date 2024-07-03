import React from 'react';

const C = ({ setCount }) => (
    <div className="flex space-x-2">
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setCount((prevCount) => prevCount + 1)}
        >
            Increment
        </button>
        <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setCount((prevCount) => prevCount - 1)}
        >
            Decrement
        </button>
        <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setCount(0)}
        >
            Reset
        </button>
    </div>
);

export default C;
