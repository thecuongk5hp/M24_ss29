import React, { useState, ChangeEvent } from 'react';

function Exercise02() {
  const [inputValue, setInputValue] = useState('');

  const BT2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Dữ liệu người dùng nhập: {inputValue}</h1>
      <input 
        type="text" 
        placeholder="Nhập dữ liệu" 
        value={inputValue} 
        onChange={BT2} 
      />
    </div>
  );
}

export default Exercise02;
