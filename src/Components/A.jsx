import React, { useState } from 'react';
import C from './C';

const A = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Count: {count}</h1>
            <C setCount={setCount} />
        </div>
    );
};

export default A;
