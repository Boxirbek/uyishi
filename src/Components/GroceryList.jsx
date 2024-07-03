import React, { useEffect, useState } from 'react';

const GroceryList = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://api.example.com/grocery-items')
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <input
                type="text"
                className="border rounded p-2 m-2"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id} className="p-2">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;
