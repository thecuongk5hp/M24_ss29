import React, { useState } from 'react';
function Exercise05() {
  const [isShown, setIsShown] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hiện' : 'Ẩn'}
      </button>
    </div>
  );
}
export default Exercise05;
