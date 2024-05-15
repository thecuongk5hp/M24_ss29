import React, { useState, ChangeEvent } from 'react';

export default function Exercise03() {
  const [date, setDate] = useState<string>('');

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <label>
        Ngày tháng người dùng nhập:
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          placeholder="mm/dd/yyyy"
        />
      </label>
      <p>Ngày đã nhập: {date}</p>
    </form>
  );
}


