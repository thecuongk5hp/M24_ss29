import React, { useState, ChangeEvent } from 'react';

function Exercise04() {
  const [city, setCity] = useState<string>('');
  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <form>
        <label>
          Tỉnh / Thành phố:
          <select value={city} onChange={handleCityChange}>
            <option value="">--- Chọn tỉnh / Thành phố ---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
          </select>
        </label>
      </form>
      {city && (
        <p>
          Tỉnh / Thành phố: <strong>{city}</strong>
        </p>
      )}
    </div>
  );
}
export default Exercise04;
