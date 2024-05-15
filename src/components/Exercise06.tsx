import React, { useState } from 'react';

function Exercise06() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(prevIsShown => !prevIsShown);
  };

  return (
    <div>
      {

      }
      <button onClick={handleClick}>
        {isShown ? 'Ẩn' : 'Hiện'}
      </button>
    </div>
  );
}
export default Exercise06;
