import React, { useState } from 'react';
import './index.css';
import MyInput from './Components/MyInput';
import Container from './Components/Container';
import A from './Components/A';
import GroceryList from './Components/GroceryList';

const App = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');

  return (
    <div className="p-4 flex flex-col items-center justify-center w-2/5 h-4/5 bg-white shadow-lg rounded-lg mx-auto my-auto">
      <h1 className="text-2xl mb-4">Text: {text}</h1>
      <MyInput setText={setText} setColor={setColor} />
      <Container color={color} />
      <A />
      <GroceryList />
    </div>
  );
};

export default App;
